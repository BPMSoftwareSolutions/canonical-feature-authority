import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import Ajv2020 from "ajv/dist/2020.js";
import {
  projectsMarkdown,
  sha256
} from "./canonical-feature-conveyor-projection.mjs";

const repositoryRoot = resolve(import.meta.dirname, "..");
const schemaPath = resolve(
  repositoryRoot,
  "schemas/canonical-feature-conveyor-contract.schema.json"
);
const authorityPath = resolve(
  repositoryRoot,
  process.argv[2] ??
    "architecture/end-to-end-canonical-feature-conveyor.authority.json"
);

function assert(condition, code) {
  if (!condition) throw new Error(code);
}

function unique(values, code) {
  assert(new Set(values).size === values.length, code);
}

function contiguous(steps, code) {
  assert(
    steps.every((step, index) => step.sequence === index + 1),
    code
  );
}

function assertsStageCausality(stages) {
  const producedAt = new Map();
  for (const [index, stage] of stages.entries()) {
    for (const product of [...stage.requires, ...stage.consumes]) {
      assert(
        producedAt.has(product) && producedAt.get(product) < index,
        `CONVEYOR_STAGE_PRODUCT_NOT_AVAILABLE: ${stage.stageId}:${product}`
      );
    }
    for (const product of stage.produces) {
      assert(
        !producedAt.has(product),
        `CONVEYOR_PRODUCT_HAS_MULTIPLE_PRODUCERS: ${product}`
      );
      producedAt.set(product, index);
    }
  }
}

function assertsLanguageProfile(profile) {
  const expected = new Map([
    [
      "semantic-edge-to-call",
      "context.edges.invokes CallExpression"
    ],
    [
      "edge-id-to-string-literal",
      "first call argument StringLiteral"
    ],
    [
      "context-input-to-identifier",
      "second call argument context Identifier"
    ],
    [
      "asynchronous-invocation-to-await",
      "AwaitExpression"
    ],
    [
      "return-operation-to-return-statement",
      "ReturnStatement containing awaited invocation"
    ]
  ]);
  for (const [ruleId, target] of expected) {
    assert(
      profile.mappings.some(
        mapping =>
          mapping.ruleId === ruleId &&
          mapping.target === target
      ),
      `CONVEYOR_LANGUAGE_PROFILE_RULE_MISMATCH: ${ruleId}`
    );
  }
}

const schema = JSON.parse(await readFile(schemaPath, "utf8"));
const authority = JSON.parse(await readFile(authorityPath, "utf8"));
const ajv = new Ajv2020({
  allErrors: true,
  strict: true
});
assert(ajv.validateSchema(schema), "CONVEYOR_SCHEMA_NOT_META_VALID");
const validate = ajv.compile(schema);
if (!validate(authority)) {
  throw new Error(
    `CONVEYOR_AUTHORITY_SCHEMA_INVALID\n${ajv.errorsText(
      validate.errors,
      { separator: "\n" }
    )}`
  );
}

const expectedStageIds = [
  "capture-intent",
  "declare-outcome",
  "establish-feature",
  "establish-scenarios",
  "decompose-obligations",
  "declare-expectations",
  "assign-responsibilities",
  "declare-signals",
  "author-semantic-authority",
  "author-semantic-execution",
  "author-feature-body-authority",
  "resolve-language-projection",
  "project-expected-ast",
  "project-expected-code",
  "evaluate-semantic-execution",
  "evaluate-projected-execution",
  "evaluate-translation-conformance",
  "review-feature"
];
const expectedDocumentationSections = [
  ["capture-intent", "$.intent", "intent-section"],
  ["declare-outcome", "$.outcome", "outcome-section"],
  [
    "establish-feature",
    "$.canonicalFeatureBody.feature",
    "feature-section"
  ],
  [
    "establish-scenarios",
    "$.canonicalFeatureBody.scenarios",
    "gherkin-section"
  ],
  [
    "decompose-obligations",
    "$.canonicalFeatureBody.scenarios",
    "obligation-section"
  ],
  [
    "declare-expectations",
    "$.canonicalFeatureBody.scenarios",
    "expectation-section"
  ],
  [
    "assign-responsibilities",
    "$.canonicalFeatureBody.scenarios",
    "responsibility-section"
  ],
  [
    "declare-signals",
    "$.canonicalFeatureBody.scenarios",
    "signal-section"
  ],
  [
    "author-semantic-authority",
    "$.semanticAuthority",
    "semantic-authority-section"
  ],
  [
    "author-semantic-execution",
    "$.semanticAuthority",
    "semantic-execution-section"
  ],
  [
    "author-feature-body-authority",
    "$.featureBodyAuthority",
    "feature-body-section"
  ],
  [
    "resolve-language-projection",
    "$.languageProfiles",
    "language-profile-section"
  ],
  [
    "project-expected-ast",
    "$.derivedProjections",
    "derived-ast-section"
  ],
  [
    "project-expected-code",
    "$.derivedProjections",
    "derived-code-section"
  ],
  [
    "evaluate-semantic-execution",
    "$.evaluationAuthority.semanticEvaluation",
    "semantic-evaluation-section"
  ],
  [
    "evaluate-projected-execution",
    "$.evaluationAuthority.projectedEvaluation",
    "projected-evaluation-section"
  ],
  [
    "evaluate-translation-conformance",
    "$.evaluationAuthority.translationEvaluation",
    "translation-section"
  ],
  ["review-feature", "$.reviewAuthority", "review-section"]
];
const stages = authority.conveyor.stages;
assert(
  JSON.stringify(stages.map(stage => stage.stageId)) ===
    JSON.stringify(expectedStageIds),
  "CONVEYOR_STAGE_ORDER_MISMATCH"
);

assertsStageCausality(stages);
assertsLanguageProfile(authority.languageProfiles[0]);

const state = authority.conveyor.constructionState;
const currentIndex = expectedStageIds.indexOf(state.currentStage);
assert(currentIndex !== -1, "CONVEYOR_CURRENT_STAGE_UNKNOWN");
assert(
  JSON.stringify(state.completedStages) ===
    JSON.stringify(expectedStageIds.slice(0, currentIndex)),
  "CONVEYOR_COMPLETED_STAGE_PREFIX_MISMATCH"
);
assert(
  JSON.stringify(state.eligibleNextStages) ===
    JSON.stringify([state.currentStage]),
  "CONVEYOR_ELIGIBLE_STAGE_MISMATCH"
);

const forbiddenIntentTechnology =
  /\b(TypeScript|JavaScript|AST|function|class|file|path|framework|provider)\b/i;
for (const value of [
  authority.intent.actor,
  authority.intent.trigger,
  authority.intent.need,
  authority.intent.purpose,
  ...authority.intent.constraints.map(constraint => constraint.text)
]) {
  assert(
    !forbiddenIntentTechnology.test(value),
    "CONVEYOR_INTENT_CONTAINS_IMPLEMENTATION_TECHNOLOGY"
  );
}

const scenarios = authority.canonicalFeatureBody.scenarios;
unique(
  scenarios.map(scenario => scenario.scenarioId),
  "CONVEYOR_SCENARIO_ID_DUPLICATE"
);
for (const field of [
  ["obligation", "obligationId"],
  ["expectation", "expectationId"],
  ["responsibility", "responsibilityId"],
  ["responsibility", "semanticOperationId"],
  ["signal", "signalId"]
]) {
  unique(
    scenarios.map(scenario => scenario[field[0]][field[1]]),
    `CONVEYOR_${field[1].toUpperCase()}_DUPLICATE`
  );
}
for (const scenario of scenarios) {
  assert(
    scenario.expectation.signalId === scenario.signal.signalId,
    `CONVEYOR_EXPECTATION_SIGNAL_MISMATCH: ${scenario.scenarioId}`
  );
}

const semantics = new Map(
  authority.semanticAuthority.map(item => [item.responsibilityId, item])
);
const bodies = new Map(
  authority.featureBodyAuthority.map(item => [item.responsibilityId, item])
);
const projections = new Map(
  authority.projectionAuthority.map(item => [item.bodyId, item])
);
const derivedBytes = await readFile(
  resolve(
    repositoryRoot,
    authority.projection.derivedProjectionOutputPath
  )
);
assert(
  sha256(derivedBytes) ===
    authority.projection.derivedProjectionSha256,
  "CONVEYOR_DERIVED_PROJECTION_HASH_MISMATCH"
);
const derived = JSON.parse(derivedBytes.toString("utf8"));
const derivedByBody = new Map(
  derived.results.map(item => [item.bodyId, item])
);
const featureSteps = authority.featureExecutionAuthority.steps;
contiguous(
  featureSteps,
  "CONVEYOR_FEATURE_EXECUTION_SEQUENCE_INVALID"
);
for (let index = 0; index < featureSteps.length - 2; index += 1) {
  assert(
    featureSteps[index].producesContractId ===
      featureSteps[index + 1].acceptsContractId,
    `CONVEYOR_FEATURE_CONTRACT_DISCONTINUITY: ${featureSteps[index].sequence}`
  );
}
assert(
  featureSteps.at(-1).operation === "return" &&
    featureSteps.at(-1).input === featureSteps.at(-2).assign &&
    featureSteps.at(-2).producesContractId ===
      authority.featureExecutionAuthority.terminalContractId,
  "CONVEYOR_FEATURE_TERMINAL_BINDING_MISMATCH"
);
const featureRequestStatements =
  authority.featureExecutionProjection.projectorRequest.function
    .statements;
assert(
  featureRequestStatements.length === featureSteps.length &&
    featureRequestStatements.every((statement, index) => {
      const step = featureSteps[index];
      if (step.operation === "return") {
        return (
          statement.kind === "return-value" &&
          statement.value.name === step.input.slice(2)
        );
      }
      return (
        statement.edgeId === step.semanticOperationId &&
        statement.input === step.input.slice(2) &&
        statement.name === step.assign.slice(2)
      );
    }),
  "CONVEYOR_FEATURE_PROJECTOR_INPUT_MISMATCH"
);
assert(
  derived.featureExecution.projector.executableSha256 ===
    authority.featureExecutionProjection.projector
      .executableSha256 &&
    derived.featureExecution.projectedSourceSha256 ===
      sha256(
        Buffer.from(
          derived.featureExecution.projectedSource,
          "utf8"
        )
      ) &&
    derived.featureExecution.translationProvenance.length ===
      featureSteps.length,
  "CONVEYOR_FEATURE_PRODUCTION_PROJECTION_MISMATCH"
);
assert(
  semantics.size === scenarios.length,
  "CONVEYOR_SEMANTIC_AUTHORITY_COVERAGE_MISMATCH"
);
assert(
  bodies.size === scenarios.length,
  "CONVEYOR_FEATURE_BODY_COVERAGE_MISMATCH"
);
assert(
  projections.size === scenarios.length,
  "CONVEYOR_PROJECTION_AUTHORITY_COVERAGE_MISMATCH"
);

for (const scenario of scenarios) {
  const responsibility = scenario.responsibility;
  const semantic = semantics.get(responsibility.responsibilityId);
  const body = bodies.get(responsibility.responsibilityId);
  assert(
    semantic !== undefined,
    `CONVEYOR_SEMANTIC_AUTHORITY_MISSING: ${responsibility.responsibilityId}`
  );
  assert(
    body !== undefined,
    `CONVEYOR_FEATURE_BODY_MISSING: ${responsibility.responsibilityId}`
  );
  contiguous(
    semantic.execution.steps,
    `CONVEYOR_SEMANTIC_EXECUTION_SEQUENCE_INVALID: ${responsibility.responsibilityId}`
  );
  const declaredAuthorityIds = new Set([
    ...semantic.observations.map(item => item.observationId),
    ...semantic.decisions.map(item => item.decisionId),
    ...semantic.projections.map(item => item.projectionId)
  ]);
  for (const step of semantic.execution.steps) {
    assert(
      declaredAuthorityIds.has(step.authorityId),
      `CONVEYOR_EXECUTION_AUTHORITY_UNRESOLVED: ${step.authorityId}`
    );
  }
  assert(
    semantic.observations.every(
      observation =>
        observation.sourceRef ===
        `scenario:${scenario.scenarioId}`
    ),
    `CONVEYOR_OBSERVATION_IDENTITY_MISMATCH: ${scenario.scenarioId}`
  );
  contiguous(
    body.operations,
    `CONVEYOR_FEATURE_BODY_SEQUENCE_INVALID: ${body.bodyId}`
  );
  assert(
    body.operations[0].edgeId === responsibility.semanticOperationId,
    `CONVEYOR_BODY_EDGE_MISMATCH: ${body.bodyId}`
  );
  assert(
    body.operations[1].value === `$.${body.operations[0].assign}`,
    `CONVEYOR_BODY_RETURN_MISMATCH: ${body.bodyId}`
  );

  const projection = projections.get(body.bodyId);
  assert(
    projection !== undefined &&
      projection.input.bodyAuthorityRef ===
        `feature-body:${body.bodyId}`,
    `CONVEYOR_PROJECTION_BODY_MISMATCH: ${body.bodyId}`
  );
  const request = projection.input.projectorRequest;
  assert(
    request.function.semanticEdgeId ===
      body.operations[0].edgeId,
    `CONVEYOR_PROJECTOR_INPUT_EDGE_MISMATCH: ${body.bodyId}`
  );
  assert(
    request.function.contextParameter.name ===
      body.context.parameterName &&
      request.function.contextParameter.typeReference ===
        projection.typeResolution.contextType &&
      request.function.resultTypeReference ===
        projection.typeResolution.resultType,
    `CONVEYOR_PROJECTOR_INPUT_TYPE_MISMATCH: ${body.bodyId}`
  );
  const result = derivedByBody.get(body.bodyId);
  assert(
    result !== undefined &&
      result.projector.projectorId ===
        projection.projector.projectorId &&
      result.projector.executableSha256 ===
        projection.projector.executableSha256,
    `CONVEYOR_PRODUCTION_PROJECTION_MISSING: ${body.bodyId}`
  );
  assert(
    result.projectedSourceSha256 ===
      sha256(Buffer.from(result.projectedSource, "utf8")) &&
      result.supportingTypeSourceSha256 ===
        sha256(
          Buffer.from(result.supportingTypeSource, "utf8")
        ),
    `CONVEYOR_PRODUCTION_SOURCE_HASH_MISMATCH: ${body.bodyId}`
  );
  const invocation =
    result.projectedAst.statements[0].body.statements[0]
      .expression.expression;
  assert(
    invocation.edgeId === body.operations[0].edgeId &&
      JSON.stringify(invocation.receiverPath) ===
        JSON.stringify(["context", "edges"]) &&
      invocation.operation === "invokes",
    `CONVEYOR_PRODUCTION_AST_EDGE_MISMATCH: ${body.bodyId}`
  );
  assert(
    result.translationProvenance.length >= 5,
    `CONVEYOR_TRANSLATION_PROVENANCE_INCOMPLETE: ${body.bodyId}`
  );
}

if (authority.contract.status !== "draft") {
  assert(
    authority.projection.outputByteSha256 !== null,
    "CONVEYOR_ADMITTED_PROJECTION_HASH_MISSING"
  );
}

assert(
  authority.evaluationAuthority.observation.disposition ===
    "NOT_EVALUATED",
  "CONVEYOR_EVALUATION_PREDECLARED"
);
const requiredFileRoles = [
  "feature",
  "scenario-authority",
  "semantic-authority",
  "feature-body-authority",
  "ast-authority",
  "projected-code-body",
  "supporting-type-body",
  "semantic-registration-body",
  "composition-body",
  "runtime-adapter-body"
];
assert(
  requiredFileRoles.every(role =>
    authority.fileBodyAuthority.placementRules.some(
      placement => placement.artifactRole === role
    )
  ),
  "CONVEYOR_FILE_BODY_ROLE_COVERAGE_MISMATCH"
);
const topology =
  authority.fileBodyAuthority.projectionTopology;
const expectedTopologyRelationships = [
  ["responsibility", "owns", "semantic-authority"],
  [
    "semantic-authority",
    "projects",
    "feature-body-authority"
  ],
  ["feature-body-authority", "projects", "ast-authority"],
  ["ast-authority", "projects", "projected-code-body"],
  [
    "projected-code-body",
    "requires",
    "supporting-type-body"
  ],
  [
    "projected-code-body",
    "participates-in",
    "semantic-registration-body"
  ],
  ["feature-execution", "projects", "composition-body"],
  ["composition-body", "requires", "runtime-adapter-body"]
];
contiguous(
  topology.relationships,
  "CONVEYOR_PROJECTION_TOPOLOGY_SEQUENCE_INVALID"
);
assert(
  JSON.stringify(
    topology.relationships.map(relationship => [
      relationship.from,
      relationship.relationship,
      relationship.to
    ])
  ) === JSON.stringify(expectedTopologyRelationships),
  "CONVEYOR_PROJECTION_TOPOLOGY_RELATIONSHIP_MISMATCH"
);
assert(
  topology.characterSet === "unicode-box-drawing" &&
    topology.artifactClasses.every(artifactClass =>
      authority.fileBodyAuthority.placementRules.some(
        placement =>
          placement.artifactRole === artifactClass.artifactRole
      )
    ),
  "CONVEYOR_PROJECTION_TOPOLOGY_CLASS_MISMATCH"
);
const rendererSource = await readFile(
  resolve(
    repositoryRoot,
    "tools/canonical-feature-conveyor-projection.mjs"
  ),
  "utf8"
);
for (const forbidden of [
  "export async function ${",
  "context.edges.invokes",
  "camelCase(",
  'kind: "FunctionDeclaration"',
  'kind: "ReturnStatement"',
  'kind: "AwaitExpression"'
]) {
  assert(
    !rendererSource.includes(forbidden),
    `DOCUMENTATION_RENDERER_CONTAINS_LANGUAGE_LOGIC: ${forbidden}`
  );
}
assert(
  JSON.stringify(
    authority.documentationProjection.sections.map(section => [
      section.stageId,
      section.source,
      section.renderer
    ])
  ) === JSON.stringify(expectedDocumentationSections),
  "CONVEYOR_DOCUMENTATION_SECTION_ORDER_MISMATCH"
);
assert(
  JSON.stringify(
    authority.documentationProjection.openingProjection
  ) ===
    JSON.stringify({
      sectionId: "feature-destination",
      title: "Feature destination",
      intendedOutcome: {
        source: "$.outcome",
        renderer: "intended-outcome"
      },
      executionFlow: {
        source: "$.featureExecutionAuthority.steps",
        renderer: "linear-execution-sketch"
      },
      featureCodeBody: {
        source: "$.featureExecutionAuthority",
        projectorRef:
          "$.featureExecutionProjection.projector",
        renderer: "projected-source-fence"
      },
      responsibilityBodyIndex: {
        source: "$.featureBodyAuthority",
        join: [
          "$.canonicalFeatureBody.scenarios",
          "$.semanticAuthority",
          "$.projectionAuthority"
        ],
        renderer: "responsibility-projection-table"
      },
      fileBodySystem: {
        source: "$.fileBodyAuthority",
        renderer: "projection-topology"
      },
      derivationOverview: {
        source: "$.conveyor.stages",
        renderer: "ordered-conveyor"
      }
    }),
  "CONVEYOR_OPENING_PROJECTION_PROFILE_MISMATCH"
);
const authoredAuthorityKeys = [];
function collectsKeys(value, path = "$") {
  if (Array.isArray(value)) {
    value.forEach((item, index) =>
      collectsKeys(item, `${path}[${index}]`)
    );
    return;
  }
  if (value === null || typeof value !== "object") return;
  for (const [key, child] of Object.entries(value)) {
    if (
      [
        "expectedProjection",
        "projectedAst",
        "projectedSource"
      ].includes(key)
    ) {
      authoredAuthorityKeys.push(`${path}.${key}`);
    }
    collectsKeys(child, `${path}.${key}`);
  }
}
collectsKeys(authority);
assert(
  authoredAuthorityKeys.length === 0,
  `CONVEYOR_AUTHORED_PROJECTION_OUTPUT_PRESENT: ${authoredAuthorityKeys.join(
    ","
  )}`
);
const identityReferences = [
  ...authority.semanticAuthority.flatMap(semantic =>
    semantic.observations.map(observation => observation.sourceRef)
  ),
  ...authority.evaluationAuthority.semanticEvaluation.executionRefs,
  ...authority.evaluationAuthority.semanticEvaluation.fixtureRefs,
  ...authority.evaluationAuthority.semanticEvaluation
    .expectedSignalRefs,
  ...authority.evaluationAuthority.projectedEvaluation.executionRefs,
  ...authority.evaluationAuthority.projectedEvaluation.fixtureRefs,
  ...authority.evaluationAuthority.projectedEvaluation
    .expectedSignalRefs,
  ...authority.evaluationAuthority.translationEvaluation.comparisonRefs
];
assert(
  identityReferences.every(
    reference =>
      !reference.includes("[") && !reference.includes("*")
  ),
  "CONVEYOR_BRITTLE_IDENTITY_REFERENCE_PRESENT"
);
assert(
  authority.fileBodyAuthority.composition.entrypointAuthorityRef ===
    authority.featureExecutionProjection.executionAuthorityRef &&
    authority.fileBodyAuthority.composition.runtimeAdapterAuthorityRef.startsWith(
      "external-authority:"
    ),
  "CONVEYOR_COMPOSITION_ORIGIN_UNDECLARED"
);
assert(
  authority.documentationProjection.requiredIllustrations.every(
    illustrationId =>
      authority.documentationProjection.illustrations.some(
        illustration =>
          illustration.illustrationId === illustrationId
      )
  ),
  "CONVEYOR_REQUIRED_ILLUSTRATION_MISSING"
);
const projectedMarkdown = projectsMarkdown(authority, derived);
assert(
  sha256(projectedMarkdown) === authority.projection.outputByteSha256,
  "CONVEYOR_PROJECTION_HASH_MISMATCH"
);
const observedMarkdown = await readFile(
  resolve(repositoryRoot, authority.projection.outputPath)
);
assert(
  observedMarkdown.equals(projectedMarkdown),
  "CONVEYOR_PROJECTION_BYTE_DRIFT"
);

const controls = [];
function recordsControl(name, action, expectedCode) {
  try {
    action();
    throw new Error("CONTROL_WAS_ACCEPTED");
  } catch (error) {
    assert(error.message !== "CONTROL_WAS_ACCEPTED", `${name}: accepted`);
    assert(
      error.message.startsWith(expectedCode),
      `${name}: ${error.message}`
    );
    controls.push(name);
  }
}

const extraProperty = structuredClone(authority);
extraProperty.unadmitted = true;
recordsControl(
  "unknown-root-property",
  () => {
    if (!validate(extraProperty)) {
      throw new Error("CONVEYOR_AUTHORITY_SCHEMA_INVALID");
    }
  },
  "CONVEYOR_AUTHORITY_SCHEMA_INVALID"
);

const reorderedStages = structuredClone(stages);
[reorderedStages[0], reorderedStages[1]] = [
  reorderedStages[1],
  reorderedStages[0]
];
recordsControl(
  "stage-order",
  () =>
    assert(
      JSON.stringify(reorderedStages.map(stage => stage.stageId)) ===
        JSON.stringify(expectedStageIds),
      "CONVEYOR_STAGE_ORDER_MISMATCH"
    ),
  "CONVEYOR_STAGE_ORDER_MISMATCH"
);

const unavailableProduct = structuredClone(stages);
unavailableProduct[1].requires = ["not-yet-produced"];
recordsControl(
  "stage-product-causality",
  () => assertsStageCausality(unavailableProduct),
  "CONVEYOR_STAGE_PRODUCT_NOT_AVAILABLE"
);

const signalMutation = structuredClone(scenarios[0]);
signalMutation.expectation.signalId = "substituted-signal";
recordsControl(
  "expectation-signal-binding",
  () =>
    assert(
      signalMutation.expectation.signalId ===
        signalMutation.signal.signalId,
      "CONVEYOR_EXPECTATION_SIGNAL_MISMATCH"
    ),
  "CONVEYOR_EXPECTATION_SIGNAL_MISMATCH"
);

const bodyMutation = structuredClone(
  authority.featureBodyAuthority[0]
);

const profileMutation = structuredClone(
  authority.languageProfiles[0]
);
profileMutation.mappings.find(
  mapping => mapping.ruleId === "semantic-edge-to-call"
).target = "context.invoke CallExpression";
recordsControl(
  "language-profile-rule-substitution",
  () => assertsLanguageProfile(profileMutation),
  "CONVEYOR_LANGUAGE_PROFILE_RULE_MISMATCH"
);

const firstProjection = authority.projectionAuthority[0];
const projectorExecutable = resolve(
  repositoryRoot,
  firstProjection.projector.executablePath
);
const productionProjector = await import(
  new URL(
    `file:///${projectorExecutable.replaceAll("\\", "/")}`
  )
);
const mutatedRequest = structuredClone(
  firstProjection.input.projectorRequest
);
mutatedRequest.function.semanticEdgeId =
  "mutated-reviewed-feature-request-edge";
const mutatedResult =
  productionProjector
    .derivesCanonicalTypeScriptFromSemanticAuthority(
      mutatedRequest
    );
const mutatedSource = Buffer.from(
  mutatedResult.sourceBytes
).toString("utf8");
assert(
  mutatedSource !== derived.results[0].projectedSource &&
    mutatedSource.includes(
      '"mutated-reviewed-feature-request-edge"'
    ),
  "PRODUCTION_PROJECTOR_MUTATION_DID_NOT_PROPAGATE"
);
const mutatedDerived = structuredClone(derived);
mutatedDerived.results[0].projectedAst =
  mutatedResult.semanticAst;
mutatedDerived.results[0].projectedSource = mutatedSource;
assert(
  sha256(projectsMarkdown(authority, mutatedDerived)) !==
    authority.projection.outputByteSha256,
  "DOCUMENTATION_DID_NOT_RENDER_PRODUCTION_PROJECTOR_MUTATION"
);
controls.push("production-projector-mutation-propagation");
const discontinuousFeature = structuredClone(
  authority.featureExecutionAuthority
);
discontinuousFeature.steps[2].acceptsContractId =
  "unbound-feature-input.v1";
recordsControl(
  "feature-execution-contract-continuity",
  () =>
    assert(
      discontinuousFeature.steps[1].producesContractId ===
        discontinuousFeature.steps[2].acceptsContractId,
      "CONVEYOR_FEATURE_CONTRACT_DISCONTINUITY"
    ),
  "CONVEYOR_FEATURE_CONTRACT_DISCONTINUITY"
);
const topologyMutation = structuredClone(topology);
topologyMutation.relationships[2].relationship = "requires";
recordsControl(
  "projection-topology-relationship",
  () =>
    assert(
      JSON.stringify(
        topologyMutation.relationships.map(relationship => [
          relationship.from,
          relationship.relationship,
          relationship.to
        ])
      ) === JSON.stringify(expectedTopologyRelationships),
      "CONVEYOR_PROJECTION_TOPOLOGY_RELATIONSHIP_MISMATCH"
    ),
  "CONVEYOR_PROJECTION_TOPOLOGY_RELATIONSHIP_MISMATCH"
);
bodyMutation.operations[0].edgeId = "substituted-edge";
recordsControl(
  "body-semantic-edge-binding",
  () =>
    assert(
      bodyMutation.operations[0].edgeId ===
        scenarios[0].responsibility.semanticOperationId,
      "CONVEYOR_BODY_EDGE_MISMATCH"
    ),
  "CONVEYOR_BODY_EDGE_MISMATCH"
);

const projectionMutation = structuredClone(authority);
projectionMutation.intent.need += " mutation";
recordsControl(
  "markdown-byte-drift",
  () =>
    assert(
      sha256(projectsMarkdown(projectionMutation, derived)) ===
        projectionMutation.projection.outputByteSha256,
      "CONVEYOR_PROJECTION_HASH_MISMATCH"
    ),
  "CONVEYOR_PROJECTION_HASH_MISMATCH"
);

console.log("Canonical feature conveyor authority is GREEN");
console.log(`Contract: ${authority.contract.contractId}`);
console.log(`Stages: ${stages.length}/${expectedStageIds.length}`);
console.log(`Scenarios: ${scenarios.length}`);
console.log(`Semantic authorities: ${semantics.size}`);
console.log(`Feature bodies: ${bodies.size}`);
console.log(`Production-projected ASTs: ${derived.results.length}`);
console.log(`Production-projected source bodies: ${derived.results.length}`);
console.log("Production-projected feature execution bodies: 1");
console.log(`Markdown byte SHA-256: ${sha256(projectedMarkdown)}`);
console.log(`${controls.length}/${controls.length} negative controls passed`);
