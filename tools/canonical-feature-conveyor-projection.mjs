import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import Ajv2020 from "ajv/dist/2020.js";

export const repositoryRoot = resolve(import.meta.dirname, "..");
const schemaPath = resolve(
  repositoryRoot,
  "schemas/canonical-feature-conveyor-contract.schema.json"
);

export function sha256(bytes) {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function fenced(language, value) {
  const content =
    typeof value === "string"
      ? value.replace(/\r\n/g, "\n").split("\n")
      : JSON.stringify(value, null, 2).split("\n");
  return [`\`\`\`${language}`, ...content, "```"];
}

function stageInstruction(stage, number, title) {
  return [
    `## ${number}. ${title}`,
    "",
    ...fenced(
      "text",
      [
        `Stage ID: ${stage.stageId}`,
        `Purpose: ${stage.purpose}`,
        `Authorized inputs: ${
          stage.consumes.length === 0
            ? "none"
            : stage.consumes.join(", ")
        }`,
        `Required prior products: ${
          stage.requires.length === 0
            ? "none"
            : stage.requires.join(", ")
        }`,
        `Required output: ${stage.produces.join(", ")}`,
        `Stop condition: ${stage.completionCondition}`
      ].join("\n")
    ),
    "",
    "Review questions:",
    "",
    ...stage.reviewQuestions.map(question => `- ${question}`),
    ""
  ];
}

const stageTitles = {
  "capture-intent": "Intent",
  "declare-outcome": "Desired outcome",
  "establish-feature": "Canonical feature",
  "establish-scenarios": "Scenarios",
  "decompose-obligations": "Obligations",
  "declare-expectations": "Expectations",
  "assign-responsibilities": "Responsibilities",
  "declare-signals": "Signals",
  "author-semantic-authority": "Semantic authority",
  "author-semantic-execution": "Semantic execution",
  "author-feature-body-authority": "Feature-body authority",
  "resolve-language-projection": "Language projection authority",
  "project-expected-ast": "Derived AST",
  "project-expected-code": "Production-projector code",
  "evaluate-semantic-execution": "Direct semantic evaluation",
  "evaluate-projected-execution": "Projected-body evaluation",
  "evaluate-translation-conformance": "Translation conformance",
  "review-feature": "Review disposition"
};

function rendersGherkin(authority) {
  const { feature, background, scenarios } =
    authority.canonicalFeatureBody;
  const lines = [
    `Feature: ${feature.title}`,
    `  As a ${feature.userStory.asA}`,
    `  I want ${feature.userStory.iWant}`,
    `  So that ${feature.userStory.soThat}`,
    "",
    "  Background:",
    `    Given ${background[0].text}`,
    ...background.slice(1).map(fact => `    And ${fact.text}`)
  ];
  for (const scenario of scenarios) {
    lines.push(
      "",
      `  @scenario-id:${scenario.scenarioId}`,
      `  Scenario: ${scenario.title}`,
      `    Given ${scenario.behavior.given[0].text}`,
      ...scenario.behavior.given
        .slice(1)
        .map(given => `    And ${given.text}`),
      `    When ${scenario.behavior.when.text}`,
      `    Then ${scenario.behavior.then[0].text}`,
      ...scenario.behavior.then
        .slice(1)
        .map(outcome => `    And ${outcome.text}`)
    );
  }
  return fenced("gherkin", lines.join("\n"));
}

function conveyorIllustration(authority) {
  return fenced(
    "text",
    authority.conveyor.stages
      .flatMap((stage, index) => [
        `${index + 1}. ${stage.stageId}`,
        ...(index === authority.conveyor.stages.length - 1
          ? []
          : ["   |", "   v"])
      ])
      .join("\n")
  );
}

function scenarioIllustrations(authority) {
  const lines = [];
  for (const scenario of authority.canonicalFeatureBody.scenarios) {
    lines.push(
      `### ${scenario.scenarioId}`,
      "",
      ...fenced(
        "text",
        [
          scenario.scenarioId,
          "  |",
          "  v",
          scenario.obligation.obligationId,
          "  |",
          "  v",
          scenario.expectation.expectationId,
          "  |",
          "  v",
          scenario.responsibility.responsibilityId,
          "  |",
          "  v",
          scenario.signal.signalId
        ].join("\n")
      ),
      ""
    );
  }
  return lines.slice(0, -1);
}

function fileTreeIllustration(authority, derived) {
  const root = authority.fileBodyAuthority.roots.capability;
  const lines = [root];
  for (const result of derived.results) {
    const scenario = authority.canonicalFeatureBody.scenarios.find(
      candidate => candidate.scenarioId === result.scenarioId
    );
    lines.push(
      `|-- scenarios/${result.scenarioId}/`,
      `|   \`-- ${result.responsibilityId}/`,
      `|       |-- ${scenario.responsibility.semanticOperationId}.semantic-authority.json`,
      `|       |-- ${result.bodyId}.feature-body-authority.json`,
      `|       |-- ${result.bodyId}.ts.ast.authority.json`,
      `|       |-- ${result.bodyId}.type.ts`,
      `|       |-- ${result.bodyId}.ts`,
      `|       \`-- registers-${result.semanticOperationId}.ts`
    );
  }
  lines.push(
    "|-- composition/",
    `|   \`-- ${authority.fileBodyAuthority.composition.entrypoint
      .split("/")
      .at(-1)}`,
    "\`-- runtime/",
    `    \`-- ${authority.fileBodyAuthority.composition.runtimeAdapter
      .split("/")
      .at(-1)}`
  );
  return fenced("text", lines.join("\n"));
}

function projectionIllustrations(derived) {
  const lines = [];
  for (const result of derived.results) {
    lines.push(
      result.bodyId,
      "  | feature-body authority",
      "  v",
      result.projector.projectionProfileId,
      "  | production projector",
      "  v",
      `${result.bodyId}.projectedAst`,
      "  | production source printer",
      "  v",
      result.artifactPath,
      ""
    );
  }
  return fenced("text", lines.slice(0, -1).join("\n"));
}

function executionIllustration(authority) {
  return fenced(
    "text",
    [
      "semantic authority ------> direct semantic execution",
      "        |                             |",
      "        |                             v",
      "        |                    semantic observation",
      "        |                             |",
      "        v                             v",
      "feature-body authority -> projected execution",
      "                                      |",
      "                                      v",
      "                             projected observation",
      "                                      |",
      "                                      v",
      `required relationship: ${authority.evaluationAuthority.translationEvaluation.requiredRelationship}`,
      `observed disposition: ${authority.evaluationAuthority.observation.disposition}`
    ].join("\n")
  );
}

function featureExecutionIllustration(authority) {
  const lines = [];
  for (const step of authority.featureExecutionAuthority.steps) {
    if (step.operation === "return") {
      continue;
    }
    if (lines.length === 0) {
      lines.push(`[${step.acceptsContractId}]`);
    }
    lines.push(
      "        |",
      `        |  ${step.sequence}. ${step.responsibilityId}`,
      "        v",
      `[${step.producesContractId}]`
    );
  }
  return fenced("text", lines.join("\n"));
}

function responsibilityProjectionTable(authority, derived) {
  const rows = [
    "| Sequence | Responsibility | Input | Output | Projected artifact |",
    "| --- | --- | --- | --- | --- |"
  ];
  let sequence = 0;
  for (const result of derived.results) {
    const semantic = authority.semanticAuthority.find(
      item => item.responsibilityId === result.responsibilityId
    );
    sequence += 1;
    rows.push(
      `| ${sequence} | ${result.responsibilityId} | ` +
        `${semantic.accepts.contractId} | ` +
        `${semantic.produces.contractId} | ${result.artifactPath} |`
    );
  }
  return rows;
}

function rendersFeatureDestination(authority, derived) {
  const opening = authority.documentationProjection.openingProjection;
  if (
    opening.sectionId !== "feature-destination" ||
    derived.featureExecution?.projectedSource === undefined
  ) {
    throw new Error("FEATURE_DESTINATION_PROJECTION_UNAVAILABLE");
  }
  return [
    `## ${opening.title}`,
    "",
    "### Intended outcome",
    "",
    authority.outcome.statement,
    "",
    "### Complete execution flow",
    "",
    ...featureExecutionIllustration(authority),
    "",
    "Current projection target: Node / TypeScript",
    "",
    "### Projected feature execution body",
    "",
    `Artifact: \`${derived.featureExecution.artifactPath}\``,
    "",
    ...fenced(
      "typescript",
      derived.featureExecution.projectedSource
    ),
    "",
    "### Projected responsibility bodies",
    "",
    ...responsibilityProjectionTable(authority, derived),
    "",
    "### File-body system",
    "",
    ...fileTreeIllustration(authority, derived),
    "",
    "### How the document gets there",
    "",
    ...conveyorIllustration(authority),
    ""
  ];
}

function rendersIllustration(authority, derived, kind) {
  const declaration =
    authority.documentationProjection.illustrations.find(
      illustration => illustration.kind === kind
    );
  if (
    !declaration ||
    !authority.documentationProjection.requiredIllustrations.includes(
      declaration.illustrationId
    )
  ) {
    throw new Error(
      `REQUIRED_ILLUSTRATION_AUTHORITY_MISSING: ${kind}`
    );
  }
  if (kind === "ordered-conveyor") {
    return conveyorIllustration(authority);
  }
  if (kind === "scenario-circuit") {
    return scenarioIllustrations(authority);
  }
  if (kind === "file-tree") {
    return fileTreeIllustration(authority, derived);
  }
  if (kind === "projection-chain") {
    return projectionIllustrations(derived);
  }
  if (kind === "dual-execution-comparison") {
    return executionIllustration(authority);
  }
  throw new Error(`ILLUSTRATION_KIND_UNSUPPORTED: ${kind}`);
}

function perScenarioJson(authority, field) {
  return authority.canonicalFeatureBody.scenarios.flatMap(
    (scenario, index) => [
      `### ${scenario.scenarioId}`,
      "",
      ...fenced("json", {
        scenarioId: scenario.scenarioId,
        [field]: scenario[field]
      }),
      ...(index ===
      authority.canonicalFeatureBody.scenarios.length - 1
        ? []
        : [""])
    ]
  );
}

const renderers = {
  "intent-section": authority => [
    `Actor: ${authority.intent.actor}`,
    "",
    `Trigger: ${authority.intent.trigger}`,
    "",
    `Need: ${authority.intent.need}`,
    "",
    `Purpose: ${authority.intent.purpose}`,
    "",
    "Constraints:",
    "",
    ...authority.intent.constraints.map(item => `- ${item.text}`)
  ],
  "outcome-section": authority => [
    `Outcome ID: \`${authority.outcome.outcomeId}\``,
    "",
    authority.outcome.statement,
    "",
    "Observable state:",
    "",
    ...authority.outcome.observableState.map(
      item => `- ${item.text}`
    )
  ],
  "feature-section": authority => [
    ...fenced("json", authority.canonicalFeatureBody.feature)
  ],
  "gherkin-section": authority => [
    ...rendersGherkin(authority),
    "",
    "Scenario circuits:",
    "",
    ...rendersIllustration(
      authority,
      undefined,
      "scenario-circuit"
    )
  ],
  "obligation-section": authority =>
    perScenarioJson(authority, "obligation"),
  "expectation-section": authority =>
    perScenarioJson(authority, "expectation"),
  "responsibility-section": authority =>
    perScenarioJson(authority, "responsibility"),
  "signal-section": authority =>
    perScenarioJson(authority, "signal"),
  "semantic-authority-section": authority =>
    authority.semanticAuthority.flatMap((semantic, index) => {
      const { execution, ...declaration } = semantic;
      return [
        `### ${semantic.responsibilityId}`,
        "",
        ...fenced("json", declaration),
        ...(index === authority.semanticAuthority.length - 1
          ? []
          : [""])
      ];
    }),
  "semantic-execution-section": authority =>
    authority.semanticAuthority.flatMap((semantic, index) => [
      `### ${semantic.responsibilityId}`,
      "",
      ...fenced("json", semantic.execution),
      ...(index === authority.semanticAuthority.length - 1
        ? []
        : [""])
    ]),
  "feature-body-section": (authority, derived) => [
    ...authority.featureBodyAuthority.flatMap((body, index) => [
      `### ${body.bodyId}`,
      "",
      ...fenced("json", body),
      ...(index === authority.featureBodyAuthority.length - 1
        ? []
        : [""])
    ]),
    "",
    "Governed file-body system:",
    "",
    ...rendersIllustration(authority, derived, "file-tree")
  ],
  "language-profile-section": authority => [
    ...fenced("json", authority.languageProfiles),
    "",
    "Production projector invocations:",
    "",
    ...fenced("json", authority.projectionAuthority)
  ],
  "derived-ast-section": (_authority, derived) => [
    ...rendersIllustration(
      _authority,
      derived,
      "projection-chain"
    ),
    "",
    ...derived.results.flatMap((result, index) => [
      `### ${result.bodyId}`,
      "",
      ...fenced("json", result.projectedAst),
      ...(index === derived.results.length - 1 ? [] : [""])
    ])
  ],
  "derived-code-section": (_authority, derived) =>
    derived.results.flatMap((result, index) => [
      `### ${result.artifactPath}`,
      "",
      ...fenced("typescript", result.projectedSource),
      "",
      `### ${result.supportingTypeArtifactPath}`,
      "",
      ...fenced("typescript", result.supportingTypeSource),
      "",
      "Translation provenance:",
      "",
      "| Source authority | Projection rule | AST path | Source range |",
      "| --- | --- | --- | --- |",
      ...result.translationProvenance.map(
        row =>
          `| ${row.sourceAuthorityRef} | ${row.projectionRuleId} | ` +
          `${row.astPath} | ${row.sourceRange} |`
      ),
      ...(index === derived.results.length - 1 ? [] : [""])
    ]),
  "semantic-evaluation-section": authority => [
    ...fenced(
      "json",
      authority.evaluationAuthority.semanticEvaluation
    ),
    "",
    `Observed: ${authority.evaluationAuthority.observation.semanticExecution}`
  ],
  "projected-evaluation-section": authority => [
    ...fenced(
      "json",
      authority.evaluationAuthority.projectedEvaluation
    ),
    "",
    `Observed: ${authority.evaluationAuthority.observation.projectedExecution}`
  ],
  "translation-section": authority => [
    ...fenced("json", {
      policy: authority.evaluationAuthority.policy,
      translationEvaluation:
        authority.evaluationAuthority.translationEvaluation,
      observation: authority.evaluationAuthority.observation
    }),
    "",
    ...rendersIllustration(
      authority,
      undefined,
      "dual-execution-comparison"
    )
  ],
  "review-section": authority => [
    "Review questions:",
    "",
    ...authority.reviewAuthority.questions.map(
      question => `- ${question}`
    ),
    "",
    "Translation tie-out:",
    "",
    "| Canonical authority | Expected AST | Expected code |",
    "| --- | --- | --- |",
    ...authority.reviewAuthority.translationTieOut.map(
      row => `| ${row.authority} | ${row.ast} | ${row.code} |`
    ),
    "",
    `Admission rule: ${authority.reviewAuthority.admissionRule}`
  ]
};

export function projectsMarkdown(authority, derived) {
  const lines = [
    `# ${authority.contract.title}`,
    "",
    ...fenced("json", authority.contract),
    "",
    ...rendersFeatureDestination(authority, derived),
    "## Construction state",
    "",
    ...fenced("json", authority.conveyor.constructionState),
    "",
    "## Canonical conveyor flow",
    "",
    ...rendersIllustration(
      authority,
      derived,
      "ordered-conveyor"
    ),
    ""
  ];
  for (const [index, section] of
    authority.documentationProjection.sections.entries()) {
    const stage = authority.conveyor.stages[index];
    if (
      section.stageId !== stage.stageId ||
      typeof renderers[section.renderer] !== "function"
    ) {
      throw new Error(
        `DOCUMENTATION_SECTION_PROFILE_INVALID: ${section.sectionId}`
      );
    }
    lines.push(
      ...stageInstruction(
        stage,
        index + 1,
        stageTitles[stage.stageId]
      ),
      ...renderers[section.renderer](authority, derived),
      ""
    );
  }
  const eol =
    authority.projection.lineEnding === "CRLF" ? "\r\n" : "\n";
  return Buffer.from(lines.join(eol), "utf8");
}

export async function readsConveyorAuthority(authorityPath) {
  const schema = JSON.parse(await readFile(schemaPath, "utf8"));
  const authority = JSON.parse(await readFile(authorityPath, "utf8"));
  const ajv = new Ajv2020({
    allErrors: true,
    strict: true
  });
  const validate = ajv.compile(schema);
  if (!validate(authority)) {
    throw new Error(
      `CONVEYOR_AUTHORITY_SCHEMA_INVALID\n${ajv.errorsText(
        validate.errors,
        { separator: "\n" }
      )}`
    );
  }
  return authority;
}
