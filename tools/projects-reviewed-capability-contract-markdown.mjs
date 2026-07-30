import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import Ajv2020 from "ajv/dist/2020.js";

function argument(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

function assert(condition, code) {
  if (!condition) throw new Error(code);
}

function sha256(bytes) {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function code(language, value) {
  const content =
    typeof value === "string"
      ? value
      : JSON.stringify(value, null, 2);
  const normalized = content.endsWith("\n")
    ? content.slice(0, -1)
    : content;
  return `\`\`\`${language}\n${normalized}\n\`\`\``;
}

function canonicalJsonValue(value) {
  if (Array.isArray(value)) {
    return value.map(canonicalJsonValue);
  }
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map(key => [key, canonicalJsonValue(value[key])])
    );
  }
  return value;
}

function gherkin(body) {
  const { feature, background, scenarios } = body;
  const lines = [
    `Feature: ${feature.title}`,
    `  As a ${feature.userStory.asA}`,
    `  I want ${feature.userStory.iWant}`,
    `  So that ${feature.userStory.soThat}`,
    "",
    "  Background:"
  ];
  background.forEach((statement, index) => {
    lines.push(`    ${index === 0 ? "Given" : "And"} ${statement.text}`);
  });
  for (const scenario of scenarios) {
    lines.push("", `  @scenario-id:${scenario.scenarioId}`);
    lines.push(`  Scenario: ${scenario.title}`);
    scenario.behavior.given.forEach((statement, index) => {
      lines.push(`    ${index === 0 ? "Given" : "And"} ${statement.text}`);
    });
    lines.push(`    When ${scenario.behavior.when.text}`);
    scenario.behavior.then.forEach((statement, index) => {
      lines.push(`    ${index === 0 ? "Then" : "And"} ${statement.text}`);
    });
  }
  return lines.join("\n");
}

function verifiesSemantics(authority) {
  const {
    contract,
    intent,
    canonicalFeatureBody: body,
    documentationProjection,
    implementationProjection
  } = authority;
  assert(contract.contractId === body.feature.featureId, "CAPABILITY_CONTRACT_FEATURE_ID_MISMATCH");
  assert(contract.title === body.feature.title, "CAPABILITY_CONTRACT_FEATURE_TITLE_MISMATCH");
  assert(intent.actor === body.feature.userStory.asA, "CAPABILITY_INTENT_ACTOR_STORY_MISMATCH");
  const scenarioIds = body.scenarios.map(item => item.scenarioId);
  assert(new Set(scenarioIds).size === scenarioIds.length, "CAPABILITY_SCENARIO_ID_DUPLICATED");
  assert(
    implementationProjection.capabilityRoot ===
      `capabilities/${body.feature.featureId}`,
    "CAPABILITY_PROJECTION_ROOT_FEATURE_ID_MISMATCH"
  );
  const documentationNodeIds =
    documentationProjection.futureStateGraph.nodes.map(
      node => node.nodeId
    );
  assert(
    new Set(documentationNodeIds).size ===
      documentationNodeIds.length,
    "CAPABILITY_DOCUMENT_GRAPH_NODE_DUPLICATED"
  );
  const documentationNodeIdSet = new Set(documentationNodeIds);
  assert(
    documentationProjection.futureStateGraph.edges.every(
      edge =>
        documentationNodeIdSet.has(edge.fromNodeId) &&
        documentationNodeIdSet.has(edge.toNodeId)
    ),
    "CAPABILITY_DOCUMENT_GRAPH_EDGE_UNBOUND"
  );
  for (const scenario of body.scenarios) {
    assert(
      scenario.expectation.signalId === scenario.signal.signalId,
      `CAPABILITY_EXPECTATION_SIGNAL_MISMATCH: ${scenario.scenarioId}`
    );
    assert(
      scenario.responsibility.responsibilityId === scenario.scenarioId,
      `CAPABILITY_RESPONSIBILITY_SCENARIO_MISMATCH: ${scenario.scenarioId}`
    );
    assert(
      scenario.responsibility.semanticOperationId === scenario.responsibility.responsibilityId,
      `CAPABILITY_SEMANTIC_OPERATION_RESPONSIBILITY_MISMATCH: ${scenario.scenarioId}`
    );
    const fields = scenario.signal.resultShape.fields.map(field => field.name);
    assert(new Set(fields).size === fields.length, `CAPABILITY_SIGNAL_FIELD_DUPLICATED: ${scenario.scenarioId}`);
    assert(
      implementationProjection.artifacts.some(
        artifact =>
          artifact.role === "scenario-responsibility" &&
          artifact.scenarioBinding.scenarioId ===
            scenario.scenarioId &&
          artifact.scenarioBinding.responsibilityId ===
            scenario.responsibility.responsibilityId
      ),
      `CAPABILITY_SCENARIO_IMPLEMENTATION_MISSING: ${scenario.scenarioId}`
    );
  }
}

function projects(authority) {
  const {
    contract,
    intent,
    outcome,
    canonicalFeatureBody: body,
    documentationProjection,
    implementationProjection
  } = authority;
  const blocks = [];
  const heading = (level, text) => blocks.push(`${"#".repeat(level)} ${text}`);
  const paragraph = (...lines) => blocks.push(lines.join("\n"));
  const statements = values =>
    values
      .map(value => `- \`${value.statementId}\`: ${value.text}`)
      .join("\n");
  const projectionBody = artifact => {
    const projection = artifact.projection;
    if (projection.projectionType === "canonical-json-value.v1") {
      return code("json", canonicalJsonValue(projection.value));
    }
    if (projection.projectionType === "lossless-source-tokens.v1") {
      return code(
        projection.language === "typescript"
          ? "typescript"
          : "javascript",
        projection.tokens.map(token => token.text).join("")
      );
    }
    return code(
      artifact.mediaType === "image/svg+xml" ? "xml" : "text",
      projection.serialization.terminalNewline
        ? `${projection.text}\n`
        : projection.text
    );
  };

  heading(1, `${contract.title} Contract`);
  for (const sectionId of documentationProjection.sectionOrder) {
    if (sectionId === "status") {
      heading(2, "Status");
      blocks.push(code("text", [
        `CONTRACT STATUS: ${contract.status.toUpperCase()}`,
        `CONTRACT TYPE: ${contract.contractType}`,
        `SCHEMA VERSION: ${contract.schemaVersion}`,
        `DECLARED IMPLEMENTATION ARTIFACTS: ${implementationProjection.artifacts.length}`,
        `DECLARED RUNTIME OUTPUTS: ${implementationProjection.runtimeOutputs.length}`
      ].join("\n")));
    } else if (sectionId === "future-state-preview") {
      heading(2, "Future-state preview");
      const graph = documentationProjection.futureStateGraph;
      const direction =
        graph.direction === "top-down" ? "TD" : "LR";
      blocks.push(code("mermaid", [
        `flowchart ${direction}`,
        ...graph.nodes.map(
          node =>
            `  ${node.nodeId}["${node.label.replaceAll('"', '&quot;')}"]`
        ),
        ...graph.edges.map(edge => {
          const label = edge.label
            ? `|${edge.label.replaceAll("|", "&#124;")}|`
            : "";
          return `  ${edge.fromNodeId} -->${label} ${edge.toNodeId}`;
        })
      ].join("\n")));
    } else if (sectionId === "reviewed-intent") {
      heading(2, "Reviewed intent");
      paragraph(
        `Actor: ${intent.actor}`,
        `Trigger: ${intent.trigger}`,
        `Need: ${intent.need}`,
        `Purpose: ${intent.purpose}`
      );
    } else if (sectionId === "governed-constraints") {
      heading(2, "Governed constraints");
      blocks.push(code("json", {constraints: intent.constraints}));
    } else if (sectionId === "required-outcome") {
      heading(2, "Required outcome");
      paragraph(outcome.statement);
      blocks.push(code("json", {
        outcomeId: outcome.outcomeId,
        observableState: outcome.observableState
      }));
    } else if (sectionId === "user-story") {
      heading(2, "User story");
      blocks.push(code("text", [
        `As a ${body.feature.userStory.asA}`,
        `I want ${body.feature.userStory.iWant}`,
        `So that ${body.feature.userStory.soThat}`
      ].join("\n")));
      paragraph(
        `Governing obligation: ${body.feature.governingObligation}`
      );
    } else if (sectionId === "acceptance-gherkin") {
      heading(2, "Acceptance Gherkin");
      blocks.push(code("gherkin", gherkin(body)));
    } else if (sectionId === "canonical-authority-graph") {
      heading(2, "Canonical authority graph");
      blocks.push(code("text", body.scenarios.flatMap(
        (scenario, index) => [
          `${index + 1}. scenario/${scenario.scenarioId}`,
          `   -> obligation/${scenario.obligation.obligationId}`,
          `   -> responsibility/${scenario.responsibility.responsibilityId}`,
          `   -> semantic-operation/${scenario.responsibility.semanticOperationId}`,
          `   -> signal/${scenario.signal.signalId}`,
          `   -> expectation/${scenario.expectation.expectationId}`,
          `   -> disposition/${scenario.expectation.expectedDisposition}`
        ]
      ).join("\n")));
    } else if (sectionId === "scenario-authority") {
      heading(2, "Scenario authority");
      for (const scenario of body.scenarios) {
        heading(3, scenario.scenarioId);
        blocks.push(code("json", {
          obligation: scenario.obligation,
          responsibility: scenario.responsibility,
          signal: scenario.signal,
          expectation: scenario.expectation
        }));
      }
    } else if (sectionId === "implementation-projection") {
      heading(2, "Implementation projection");
      blocks.push(code("json", {
        profileId: implementationProjection.profileId,
        capabilityRoot: implementationProjection.capabilityRoot,
        dependencyPolicy: implementationProjection.dependencyPolicy,
        entrypoints: implementationProjection.entrypoints,
        runtimeOutputs: implementationProjection.runtimeOutputs
      }));
      for (const artifact of implementationProjection.artifacts) {
        heading(3, artifact.path);
        blocks.push(code("json", {
          artifactId: artifact.artifactId,
          role: artifact.role,
          mediaType: artifact.mediaType,
          scenarioBinding: artifact.scenarioBinding,
          projectionType: artifact.projection.projectionType,
          serialization: artifact.projection.serialization,
          byteSha256: artifact.byteSha256
        }));
        blocks.push(projectionBody(artifact));
      }
    } else if (sectionId === "file-body-system") {
      heading(2, "Canonical file body system");
      blocks.push(code("text", [
        `${implementationProjection.capabilityRoot}/`,
        ...implementationProjection.artifacts.map(
          artifact => `  ${artifact.path}`
        ),
        ...implementationProjection.runtimeOutputs.map(
          output => `  ${output.path} [runtime output]`
        )
      ].join("\n")));
    } else if (sectionId === "implementation-boundary") {
      heading(2, "Implementation boundary");
      blocks.push(
        statements(documentationProjection.implementationBoundary)
      );
    } else if (sectionId === "implementation-exit-condition") {
      heading(2, "Implementation exit condition");
      blocks.push(
        statements(
          documentationProjection.implementationExitConditions
        )
      );
    } else {
      throw new Error(
        `CAPABILITY_DOCUMENT_SECTION_UNSUPPORTED: ${sectionId}`
      );
    }
  }
  return Buffer.from(`${blocks.join("\n\n")}\n`, "utf8");
}

const modes = ["--hash", "--write", "--check"].filter(mode => process.argv.includes(mode));
assert(modes.length === 1, "Specify exactly one of --hash, --write, or --check");
const contractPath = resolve(argument("--contract") ?? "");
const outputPath = resolve(argument("--output") ?? "");
assert(argument("--contract") !== undefined, "CAPABILITY_CONTRACT_PATH_REQUIRED");
assert(argument("--output") !== undefined, "CAPABILITY_DOCUMENT_OUTPUT_PATH_REQUIRED");
const schemaPath = resolve(
  import.meta.dirname,
  "../schemas/canonical-feature-conveyor-contract.schema.json"
);
const [schema, authority] = await Promise.all([
  readFile(schemaPath, "utf8").then(JSON.parse),
  readFile(contractPath, "utf8").then(JSON.parse)
]);
const ajv = new Ajv2020({
  allErrors: true,
  strict: true,
  allowUnionTypes: true
});
assert(ajv.validateSchema(schema), `CAPABILITY_SCHEMA_NOT_META_VALID: ${ajv.errorsText()}`);
const validate = ajv.compile(schema);
assert(validate(authority), `CAPABILITY_CONTRACT_SCHEMA_RED: ${ajv.errorsText(validate.errors)}`);
verifiesSemantics(authority);
const projected = projects(authority);
if (modes[0] === "--hash") {
  console.log(`Contract byte SHA-256: ${sha256(await readFile(contractPath))}`);
  console.log(`Projected Markdown SHA-256: ${sha256(projected)}`);
} else if (modes[0] === "--write") {
  await writeFile(outputPath, projected);
  console.log(`Projected document: ${outputPath}`);
  console.log(`Projected Markdown SHA-256: ${sha256(projected)}`);
} else {
  const observed = await readFile(outputPath);
  assert(observed.equals(projected), "CAPABILITY_DOCUMENT_PROJECTION_BYTE_DRIFT");
  console.log(`Document projection is byte-identical: ${outputPath}`);
  console.log(`Projected Markdown SHA-256: ${sha256(projected)}`);
}
