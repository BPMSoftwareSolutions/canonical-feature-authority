import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import Ajv2020 from "./ajv-2020.bundle.mjs";

export const repositoryRoot = resolve(
  import.meta.dirname,
  "../../.."
);
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
    "### What is established here",
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
    )
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

function resolvesArtifactName(authority, artifactRole, result) {
  const placement =
    authority.fileBodyAuthority.placementRules.find(
      candidate => candidate.artifactRole === artifactRole
    );
  if (!placement) {
    throw new Error(
      `PROJECTION_TOPOLOGY_PLACEMENT_MISSING: ${artifactRole}`
    );
  }
  const responsibilityRoot =
    authority.fileBodyAuthority.roots
      .responsibilityRootTemplate
      .replaceAll(
        "{capabilityRoot}",
        authority.fileBodyAuthority.roots.capability
      )
      .replaceAll("{scenarioId}", result.scenarioId)
      .replaceAll(
        "{responsibilityId}",
        result.responsibilityId
      );
  const values = {
    bodyId: result.bodyId,
    semanticOperationId: result.semanticOperationId,
    scenarioId: result.scenarioId,
    responsibilityId: result.responsibilityId,
    capabilityRoot: authority.fileBodyAuthority.roots.capability,
    responsibilityRoot
  };
  let resolved = placement.pathTemplate;
  for (const [name, value] of Object.entries(values)) {
    resolved = resolved.replaceAll(`{${name}}`, value);
  }
  if (resolved.includes("{")) {
    throw new Error(
      `PROJECTION_TOPOLOGY_PATH_UNRESOLVED: ${artifactRole}`
    );
  }
  return resolved;
}

function projectionTopologyIllustration(authority, derived) {
  const topology = authority.fileBodyAuthority.projectionTopology;
  const classes = new Map(
    topology.artifactClasses.map(item => [
      item.artifactRole,
      item
    ])
  );
  const label = role => {
    const artifactClass = classes.get(role);
    if (!artifactClass) {
      throw new Error(
        `PROJECTION_TOPOLOGY_CLASS_MISSING: ${role}`
      );
    }
    return `[${artifactClass.abbreviation}] ${artifactClass.label}`;
  };
  const lines = ["Canonical authority graph", ""];
  for (const relationship of topology.relationships) {
    const from =
      relationship.from === "responsibility"
        ? "[RESP] Responsibility"
        : relationship.from === "feature-execution"
          ? "[FEATURE] Feature Execution Authority"
          : label(relationship.from);
    lines.push(
      `${from} ──${relationship.relationship}──► ${label(
        relationship.to
      )}`
    );
  }
  lines.push("", "Responsibility projection conveyors", "");
  for (const result of derived.results) {
    lines.push(
      "Scenario",
      `└── ${result.scenarioId}`,
      "    │",
      "    └── Responsibility",
      `        └── ${result.responsibilityId}`,
      "            │"
    );
    for (const [index, role] of
      topology.rendering.artifactOrder.entries()) {
      const terminal =
        index === topology.rendering.artifactOrder.length - 1;
      lines.push(
        `            ${terminal ? "└" : "├"}─► ${label(role)}`,
        `            ${terminal ? " " : "│"}      ${resolvesArtifactName(
          authority,
          role,
          result
        )}`,
        ...(terminal ? [] : ["            │"])
      );
    }
    lines.push("");
  }
  const [compositionRole, runtimeRole] =
    topology.rendering.featureArtifactOrder;
  lines.push(
    "Feature-level execution",
    `├─► ${label(compositionRole)}`,
    `│      ${authority.fileBodyAuthority.composition.entrypoint}`,
    "│",
    `└─► ${label(runtimeRole)}`,
    `       ${authority.fileBodyAuthority.composition.runtimeAdapter}`
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
    "### Projected heterogeneous composition types",
    "",
    `Artifact: \`${derived.featureExecution.supportingTypeArtifactPath}\``,
    "",
    ...fenced(
      "typescript",
      derived.featureExecution.supportingTypeSource
    ),
    "",
    "### Required implementation artifact set",
    "",
    ...fenced("json", authority.implementationArtifactAuthority),
    "",
    "### Executable implementation projection map",
    "",
    `Package: \`${derived.implementationPackage.packageId}\``,
    "",
    `Topology SHA-256: \`${derived.implementationPackage.topologySha256}\``,
    "",
    "| Artifact | Family | Projector capability | Posture | Source SHA-256 |",
    "| --- | --- | --- | --- | --- |",
    ...derived.implementationPackage.artifacts.map(
      artifact =>
        `| \`${artifact.artifactPath}\` | ${artifact.family} | ` +
        `\`${artifact.projectorCapability}\` | ` +
        `\`${artifact.projectionPosture}\` | ` +
        `\`${artifact.projectedSourceSha256}\` |`
    ),
    "",
    "Projection source policy: canonical JSON authority only; Markdown scraping is forbidden.",
    "",
    "Execution proof: direct semantic authority and the projected composition plus responsibility bodies must be RFC8785-JCS equivalent and terminate with `PROJECTION_CONFORMS`.",
    "",
    "### Fractal self-hosting acceptance",
    "",
    ...fenced("json", authority.selfHostingAuthority),
    "",
    "The projected self-hosting runner must replay all 18 construction stages, materialize directly into the governed capability folder, compile and execute the repository bytes under Git review, compare every governed artifact byte-for-byte with its source projection, and leave the projected files unedited before the required live-provider run.",
    "",
    "### Projected responsibility bodies",
    "",
    ...responsibilityProjectionTable(authority, derived),
    "",
    "### File-body system",
    "",
    ...projectionTopologyIllustration(authority, derived),
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
  if (kind === "projection-topology") {
    return projectionTopologyIllustration(authority, derived);
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

function semanticExecutionFlow(semantic) {
  const lines = [`[${semantic.accepts.contractId}]`];
  for (const step of semantic.execution.steps) {
    lines.push(
      "        │",
      "        ▼",
      `┌─ ${step.authorityId}`,
      `│  ${step.operation}`,
      `│  ${step.input} → ${step.assign}`,
      "└─"
    );
  }
  lines.push(
    "        │",
    "        ▼",
    `[${semantic.produces.contractId}]`
  );
  return fenced("text", lines.join("\n"));
}

function semanticTranslationTieOut(semantic, result) {
  const functionName = result.projectedAst.statements.find(
    statement => statement.kind === "function-declaration"
  )?.name;
  const rows = [
    "| Authority element | Semantic execution construct | Responsibility-body construct |",
    "| --- | --- | --- |"
  ];
  for (const step of semantic.execution.steps) {
    rows.push(
      `| ${step.authorityId} | ${step.operation} | hidden behind semantic edge |`
    );
  }
  rows.push(
    `| ${semantic.produces.contractId} | result contract | ${result.artifactPath} return type |`,
    `| ${semantic.responsibilityId} | execution registration identity | ${functionName} lineage |`,
    `| ${result.semanticOperationId} | semantic model identity | edge invocation string |`
  );
  return rows;
}

function rendersSemanticProjection(authority, semantic, derived) {
  const result = derived.results.find(
    item => item.responsibilityId === semantic.responsibilityId
  );
  if (!result) {
    throw new Error(
      `SEMANTIC_PROJECTION_RESULT_MISSING: ${semantic.responsibilityId}`
    );
  }
  return [
    "#### Semantic execution flow",
    "",
    ...semanticExecutionFlow(semantic),
    "",
    "#### Projected semantic execution",
    "",
    "Declarative semantic model: AVAILABLE",
    "",
    `Semantic interpreter binding: ${authority.semanticInterpreterAuthority.bindingStatus}`,
    "",
    `Required interpreter artifact: \`${authority.semanticInterpreterAuthority.requiredArtifact}\``,
    "",
    "Projected semantic source availability: NOT_IMPLEMENTED",
    "",
    "The governed execution plan above is authoritative; no illustrative semantic-kernel TypeScript is substituted.",
    "",
    "#### Projected responsibility boundary",
    "",
    ...fenced("typescript", result.projectedSource),
    "",
    "#### Translation tie-out",
    "",
    ...semanticTranslationTieOut(semantic, result)
  ];
}

function stageProjectionPreview(profile, authority, derived) {
  const kind = profile.previewKind;
  const heading = [
    "### What this becomes",
    "",
    `Projection availability: ${profile.availability}`,
    ""
  ];
  if (kind === "constraint-effect") {
    return [
      ...heading,
      ...fenced(
        "text",
        [
          "Intent constraints",
          "        │",
          "        ▼",
          "Projected body consequence",
          "  permits: semantic-edge delegation",
          "  forbids: local branching, DTO construction, and direct effects"
        ].join("\n")
      )
    ];
  }
  if (kind === "terminal-type") {
    const terminal = derived.results.at(-1);
    return [
      ...heading,
      `Projected artifact: \`${terminal.supportingTypeArtifactPath}\``,
      "",
      ...fenced("typescript", terminal.supportingTypeSource)
    ];
  }
  if (kind === "feature-execution") {
    return [
      ...heading,
      `Projected artifact: \`${derived.featureExecution.artifactPath}\``,
      "",
      ...fenced(
        "typescript",
        derived.featureExecution.projectedSource
      )
    ];
  }
  if (
    kind === "scenario-to-body" ||
    kind === "responsibility-identity"
  ) {
    return [
      ...heading,
      ...fenced(
        "text",
        derived.results
          .map(result => {
            const functionName =
              result.projectedAst.statements.find(
                statement =>
                  statement.kind === "function-declaration"
              )?.name;
            return [
              result.scenarioId,
              `  → ${result.responsibilityId}`,
              `  → ${result.artifactPath}`,
              `  → ${functionName}(...)`,
              `  → edge ${result.semanticOperationId}`
            ].join("\n");
          })
          .join("\n\n")
      )
    ];
  }
  if (kind === "obligation-constraint") {
    return [
      ...heading,
      ...fenced(
        "text",
        authority.canonicalFeatureBody.scenarios
          .map(scenario =>
            [
              `[OBLIGATION] ${scenario.obligation.obligationId}`,
              "      ├── owns semantic decision/projection requirements",
              "      └── forbids responsibility-body policy"
            ].join("\n")
          )
          .join("\n\n")
      )
    ];
  }
  if (kind === "expectation-comparison") {
    return [
      ...heading,
      ...fenced(
        "text",
        authority.canonicalFeatureBody.scenarios
          .map(scenario =>
            [
              `Execution output (${scenario.signal.signalId}) ──┐`,
              `                                                ├── compare ──► ${scenario.expectation.expectedDisposition} | DIVERGES`,
              `Expected disposition (${scenario.expectation.expectationId}) ──┘`,
              "comparison authority only; not execution policy"
            ].join("\n")
          )
          .join("\n\n")
      )
    ];
  }
  if (kind === "signal-type") {
    return [
      ...heading,
      ...derived.results.flatMap((result, index) => [
        `#### ${result.supportingTypeArtifactPath}`,
        "",
        ...fenced("typescript", result.supportingTypeSource),
        ...(index === derived.results.length - 1 ? [] : [""])
      ])
    ];
  }
  if (kind === "semantic-execution-plan") {
    return [
      ...heading,
      "Declarative semantic model: AVAILABLE",
      "",
      `Semantic interpreter binding: ${authority.semanticInterpreterAuthority.bindingStatus}`,
      "",
      "Projected semantic source availability: NOT_IMPLEMENTED",
      "",
      ...authority.semanticAuthority.flatMap((semantic, index) => [
        `#### ${semantic.responsibilityId}`,
        "",
        ...semanticExecutionFlow(semantic),
        ...(index === authority.semanticAuthority.length - 1
          ? []
          : [""])
      ])
    ];
  }
  if (kind === "responsibility-source") {
    return [
      ...heading,
      ...derived.results.flatMap((result, index) => [
        `#### ${result.bodyId}`,
        "",
        ...fenced("typescript", result.projectedSource),
        ...(index === derived.results.length - 1 ? [] : [""])
      ])
    ];
  }
  if (kind === "mapping-instance") {
    const edgeMapping = authority.languageProfiles[0].mappings.find(
      mapping => mapping.ruleId === "semantic-edge-to-call"
    );
    return [
      ...heading,
      ...fenced(
        "text",
        authority.projectionAuthority
          .map(projection => {
            const request = projection.input.projectorRequest;
            return [
              projection.input.bodyAuthorityRef,
              `  → function ${request.function.name}`,
              `${request.function.resultTypeReference}`,
              `  → return type ${projection.typeResolution.resultType}`,
              `${request.function.semanticEdgeId}`,
              `  → ${edgeMapping.target}`
            ].join("\n");
          })
          .join("\n\n")
      )
    ];
  }
  if (kind === "ast-with-source") {
    return [
      ...heading,
      ...derived.results.flatMap((result, index) => [
        `#### ${result.bodyId}`,
        "",
        `AST root: \`${result.projectedAst.kind}\``,
        "",
        ...fenced("typescript", result.projectedSource),
        ...(index === derived.results.length - 1 ? [] : [""])
      ])
    ];
  }
  if (kind === "production-source") {
    return [
      ...heading,
      `Authoritative projector output count: ${derived.results.length * 2 + 2}`,
      "",
      "The complete production output and translation provenance are rendered in this section."
    ];
  }
  if (kind === "evaluation-flow") {
    return [
      ...heading,
      ...fenced(
        "text",
        [
          "execute declared model/body",
          "        │",
          "        ▼",
          "capture observed signal",
          "        │",
          "        ▼",
          "retain NOT_EVALUATED until runtime evidence exists"
        ].join("\n")
      )
    ];
  }
  if (kind === "comparison-flow") {
    return [
      ...heading,
      ...fenced(
        "text",
        [
          "semantic observation ──┐",
          "                       ├── compare to expectation and correspondence ──► disposition",
          "projected observation ─┘"
        ].join("\n")
      )
    ];
  }
  if (kind === "admission-transition") {
    return [
      ...heading,
      ...fenced(
        "text",
        [
          "NOT_EVALUATED",
          "      │ runtime evidence and canonical equivalence",
          "      ▼",
          "PROJECTION_CONFORMS",
          "      │ admission rule",
          "      ▼",
          "materialization eligible"
        ].join("\n")
      )
    ];
  }
  throw new Error(
    `STAGE_PROJECTION_PREVIEW_UNSUPPORTED: ${kind}`
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
  "semantic-authority-section": (authority, derived) =>
    authority.semanticAuthority.flatMap((semantic, index) => {
      const { execution, ...declaration } = semantic;
      return [
        `### ${semantic.responsibilityId}`,
        "",
        "#### Canonical authority",
        "",
        ...fenced("json", declaration),
        "",
        ...rendersSemanticProjection(
          authority,
          semantic,
          derived
        ),
        ...(index === authority.semanticAuthority.length - 1
          ? []
          : [""])
      ];
    }),
  "semantic-execution-section": authority => [
    "### Pinned semantic interpreter contract",
    "",
    ...fenced("json", authority.semanticInterpreterAuthority),
    "",
    ...authority.semanticAuthority.flatMap((semantic, index) => [
      `### ${semantic.responsibilityId}`,
      "",
      ...fenced("json", semantic.execution),
      ...(index === authority.semanticAuthority.length - 1
        ? []
        : [""])
    ])
  ],
  "feature-body-section": (authority, derived) => [
    ...authority.featureBodyAuthority.flatMap((body, index) => [
      `### ${body.bodyId}`,
      "",
      "#### Canonical authority",
      "",
      ...fenced("json", body),
      "",
      "#### Projected responsibility body",
      "",
      ...fenced(
        "typescript",
        derived.results.find(result => result.bodyId === body.bodyId)
          .projectedSource
      ),
      ...(index === authority.featureBodyAuthority.length - 1
        ? []
        : [""])
    ]),
    "",
    "Governed file-body system:",
    "",
    ...rendersIllustration(
      authority,
      derived,
      "projection-topology"
    )
  ],
  "language-profile-section": authority => [
    ...fenced("json", authority.languageProfiles),
    "",
    "Production projector invocations:",
    "",
    ...fenced("json", authority.projectionAuthority),
    "",
    "Compilation and runtime artifact authority:",
    "",
    ...fenced("json", authority.implementationArtifactAuthority)
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
      "",
      "#### Compact source preview",
      "",
      ...fenced("typescript", result.projectedSource),
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
    `Admission rule: ${authority.reviewAuthority.admissionRule}`,
    "",
    `Current implementation admission: ${authority.conveyor.constructionState.implementationAdmission}`
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
    const previewProfile =
      authority.documentationProjection.stageDocumentationProfile
        .stages[index];
    if (
      section.stageId !== stage.stageId ||
      previewProfile.stageId !== stage.stageId ||
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
      "",
      "### Canonical authority",
      "",
      ...renderers[section.renderer](authority, derived),
      "",
      ...stageProjectionPreview(
        previewProfile,
        authority,
        derived
      ),
      "",
      "### Authority-to-code traceability",
      "",
      "| Authority source | Projection preview | Availability | Required output |",
      "| --- | --- | --- | --- |",
      `| ${previewProfile.source} | ${previewProfile.previewKind} | ` +
        `${previewProfile.availability} | ${stage.produces.join(
          ", "
        )} |`,
      "",
      "### Review questions",
      "",
      ...stage.reviewQuestions.map(question => `- ${question}`),
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
