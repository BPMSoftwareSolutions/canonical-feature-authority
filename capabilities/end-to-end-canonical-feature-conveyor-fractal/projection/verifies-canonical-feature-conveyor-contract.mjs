import { execFile } from "node:child_process";
import { readFile } from "node:fs/promises";
import { posix, resolve } from "node:path";
import { promisify } from "node:util";

import Ajv2020 from "./ajv-2020.bundle.mjs";
import {
  projectsMarkdown,
  sha256
} from "./canonical-feature-conveyor-projection.mjs";

const repositoryRoot = resolve(import.meta.dirname, "../../..");
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

function expectedSemanticAuthorityArtifactPaths(authority) {
  const capabilityRoot = authority.fileBodyAuthority.roots.capability;
  return authority.canonicalFeatureBody.scenarios.map(scenario => {
    const responsibility = scenario.responsibility;
    return `${capabilityRoot}/scenarios/${scenario.scenarioId}/${responsibility.responsibilityId}/${responsibility.semanticOperationId}.semantic-authority.json`;
  });
}

function assertsSemanticAuthorityRuntimeBoundary(
  authority,
  implementationArtifacts
) {
  const loader =
    authority.implementationArtifactAuthority.semanticAuthorityLoader;
  const expectedSourcePaths =
    expectedSemanticAuthorityArtifactPaths(authority);
  assert(
    loader.bindingStatus === "IMPLEMENTED" &&
      JSON.stringify(loader.sourceArtifactPaths) ===
        JSON.stringify(expectedSourcePaths),
    "CONVEYOR_SEMANTIC_AUTHORITY_LOADER_SOURCE_MISMATCH"
  );
  const loaderArtifact = implementationArtifacts.find(
    artifact => artifact.artifactPath === loader.artifactPath
  );
  assert(
    loaderArtifact !== undefined &&
      loaderArtifact.projectorCapability ===
        "projects-semantic-authority-loader" &&
      expectedSourcePaths.every(path =>
        loaderArtifact.projectedSource.includes(
          JSON.stringify(path)
        )
      ) &&
      loaderArtifact.projectedSource.includes("readFile") &&
      loaderArtifact.projectedSource.includes("JSON.parse"),
    "CONVEYOR_SEMANTIC_AUTHORITY_LOADER_NOT_PROJECTED"
  );
  const interpreter =
    authority.implementationArtifactAuthority.semanticInterpreter;
  const interpreterArtifact = implementationArtifacts.find(
    artifact => artifact.artifactPath === interpreter.artifactPath
  );
  assert(
    interpreterArtifact !== undefined &&
      interpreterArtifact.projectedSource.includes(
        "semanticAuthorities: readonly SemanticAuthority[]"
      ) &&
      !interpreterArtifact.projectedSource.includes(
        "const semanticAuthorities"
      ) &&
      authority.semanticAuthority.every(
        semantic =>
          !interpreterArtifact.projectedSource.includes(
            JSON.stringify(semantic)
          ) &&
          !interpreterArtifact.projectedSource.includes(
            JSON.stringify(semantic, null, 2)
          )
      ),
    "CONVEYOR_SEMANTIC_AUTHORITY_EMBEDDED_IN_INTERPRETER"
  );
}

async function assertsProjectedTypescriptCompiles(
  authority,
  derived
) {
  const executes = promisify(execFile);
  const artifacts =
    derived.implementationPackage?.artifacts ?? [];
  for (const artifact of artifacts) {
    if (!artifact.artifactPath.endsWith(".ts")) continue;
    const observedSource = await readFile(
      resolve(repositoryRoot, artifact.artifactPath),
      "utf8"
    );
    assert(
      observedSource === artifact.projectedSource,
      `CONVEYOR_REPOSITORY_PROJECTED_BYTES_DRIFT: ${artifact.artifactPath}`
    );
  }
  try {
    await executes(
      process.execPath,
      [
        resolve(
          repositoryRoot,
          "node_modules/typescript/bin/tsc"
        ),
        "--project",
        resolve(repositoryRoot, "tsconfig.json")
      ],
      {
        cwd: repositoryRoot
      }
    );
  } catch (error) {
    throw new Error(
      `CONVEYOR_REPOSITORY_PROJECTED_TYPESCRIPT_DOES_NOT_COMPILE: ${
        error.stdout ?? error.stderr ?? error.message
      }`
    );
  }
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
const observationPortOperations = new Map([
  [
    "implementation-artifact:runtime-adapter",
    authority.implementationArtifactAuthority.runtimeAdapter
      .operations
  ],
  [
    "semantic-interpreter:input",
    authority.semanticInterpreterAuthority.inputOperations
  ],
  [
    "implementation-artifact:authority-projector",
    authority.implementationArtifactAuthority
      .authorityProjectorBoundary.operations
  ],
  [
    "implementation-artifact:feature-materializer",
    authority.implementationArtifactAuthority
      .materializationBoundary.operations
  ],
  [
    "implementation-artifact:evaluation-fixture",
    authority.implementationArtifactAuthority.fixtureBoundary
      .operations
  ],
  [
    "implementation-artifact:evidence-store",
    authority.implementationArtifactAuthority.evidenceBoundary
      .operations
  ]
]);
const admissionDecision = semantics
  .get("admits-reviewed-new-feature-request")
  .decisions.find(
    decision => decision.decisionId === "resolve-request-admission"
  );
assert(
  JSON.stringify(admissionDecision.inputs) ===
    JSON.stringify([
      "$.input.reviewDisposition",
      "$.input.existingFeatureIds",
      "$.input.featureId"
    ]) &&
    JSON.stringify(admissionDecision.rules[0].when) ===
      JSON.stringify({
        all: [
          {
            left: {
              kind: "path",
              path: "$.input.reviewDisposition"
            },
            operator: "equals",
            right: {
              kind: "literal",
              value: "REVIEWED"
            }
          },
          {
            left: {
              kind: "path",
              path: "$.input.existingFeatureIds"
            },
            operator: "not-contains",
            right: {
              kind: "path",
              path: "$.input.featureId"
            }
          }
        ]
      }) &&
    admissionDecision.rules[1].when.otherwise === true,
  "CONVEYOR_ADMISSION_DECISION_NOT_EXECUTABLE"
);
const terminalDecision = semantics
  .get("verifies-complete-new-feature-lineage")
  .decisions.find(
    decision =>
      decision.decisionId === "resolve-terminal-disposition"
  );
assert(
    JSON.stringify(terminalDecision.inputs) ===
    JSON.stringify([
      "$.input.semanticObservationRef",
      "$.input.projectedObservationRef",
      "$.input.expectedSignalRef",
      "$.input.astSourceCorrespondenceRef"
    ]) &&
    JSON.stringify(
      terminalDecision.rules[0].when.all.map(
        predicate => predicate.operator
      )
    ) ===
      JSON.stringify([
        "evidence-equivalent",
        "evidence-equivalent",
        "artifact-disposition-equals"
      ]) &&
    terminalDecision.rules[1].when.otherwise === true,
  "CONVEYOR_TERMINAL_DECISION_INPUT_MISMATCH"
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
const supplementalCoordinates =
  authority.implementationArtifactAuthority.projectionPackage
    .supplementalArtifacts;
const implementationArtifacts =
  derived.implementationPackage?.artifacts ?? [];
const implementationCoordinates = implementationArtifacts;
const expectedImplementationArtifactCount =
  3 +
  scenarios.length * 7 +
  supplementalCoordinates.length +
  authority.fractalProjectionAuthority.sourceModules.length +
  authority.fractalProjectionAuthority.embeddedRuntimes.length;
unique(
  implementationCoordinates.map(coordinate => coordinate.artifactId),
  "CONVEYOR_IMPLEMENTATION_ARTIFACT_ID_DUPLICATED"
);
unique(
  implementationCoordinates.map(
    coordinate => coordinate.artifactPath
  ),
  "CONVEYOR_IMPLEMENTATION_ARTIFACT_PATH_DUPLICATED"
);
assert(
  implementationCoordinates.length ===
    expectedImplementationArtifactCount &&
    implementationCoordinates.every(
      coordinate =>
        coordinate.projectionPosture === "PROJECTABLE" &&
        coordinate.ownership === "projector-owned" &&
        coordinate.existingFilePolicy ===
          "REPLACE_IF_GENERATED_LINEAGE_MATCHES" &&
        coordinate.artifactPath.startsWith(
          `${authority.implementationArtifactAuthority.workspaceProjectionAuthority.capabilityRoot}/`
        )
    ) &&
    derived.implementationPackage?.packageId ===
      authority.implementationArtifactAuthority.projectionPackage
        .packageId &&
    implementationArtifacts.length ===
      implementationCoordinates.length,
  "CONVEYOR_IMPLEMENTATION_PROJECTION_COVERAGE_MISMATCH"
);
for (const coordinate of supplementalCoordinates) {
  const artifact = implementationArtifacts.find(
    candidate => candidate.artifactId === coordinate.artifactId
  );
  assert(
    artifact !== undefined &&
      artifact.artifactPath === coordinate.artifactPath &&
      artifact.family === coordinate.family &&
      artifact.sourceAuthorityRef ===
        coordinate.sourceAuthorityRef &&
      artifact.projectorCapability ===
        coordinate.projectorCapability &&
      artifact.projectionPosture ===
        coordinate.projectionPosture &&
      artifact.ownership === coordinate.ownership &&
      artifact.existingFilePolicy ===
        coordinate.existingFilePolicy &&
      artifact.projectedSourceSha256 ===
        sha256(Buffer.from(artifact.projectedSource, "utf8")),
    `CONVEYOR_IMPLEMENTATION_ARTIFACT_DRIFT: ${coordinate.artifactId}`
  );
}
assertsSemanticAuthorityRuntimeBoundary(
  authority,
  implementationArtifacts
);
assert(
  derived.implementationPackage.summary.declaredArtifacts ===
    expectedImplementationArtifactCount &&
    derived.implementationPackage.summary.projectableArtifacts ===
      expectedImplementationArtifactCount &&
    derived.implementationPackage.summary.unresolvedArtifacts === 0,
  "CONVEYOR_IMPLEMENTATION_PROJECTION_SUMMARY_MISMATCH"
);
const capabilityRoot =
  authority.fileBodyAuthority.roots.capability;
for (
  const sourceModule of
    authority.fractalProjectionAuthority.sourceModules
) {
  const projectedSource = sourceModule.sourceAst.tokens
    .map(token => token.text)
    .join("");
  assert(
    sha256(Buffer.from(projectedSource, "utf8")) ===
      sourceModule.sourceSha256,
    `CONVEYOR_FRACTAL_SOURCE_AST_HASH_MISMATCH: ${sourceModule.moduleId}`
  );
  const artifact = implementationArtifacts.find(
    candidate =>
      candidate.artifactPath === sourceModule.artifactPath
  );
  assert(
    artifact?.projectedSource === projectedSource,
    `CONVEYOR_FRACTAL_SOURCE_PROJECTION_MISMATCH: ${sourceModule.moduleId}`
  );
}
for (
  const runtime of
    authority.fractalProjectionAuthority.embeddedRuntimes
) {
  const artifact = implementationArtifacts.find(
    candidate =>
      candidate.artifactPath === runtime.artifactPath
  );
  assert(
    artifact?.projectedSourceSha256 === runtime.sourceSha256,
    `CONVEYOR_EMBEDDED_RUNTIME_PROJECTION_MISMATCH: ${runtime.runtimeId}`
  );
}
for (const artifact of implementationArtifacts) {
  if (!/\.(?:mjs|ts)$/.test(artifact.artifactPath)) continue;
  const moduleSpecifiers = [];
  const lines = artifact.projectedSource.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    if (!/^\s*import\s+(?!\()/.test(lines[index])) continue;
    let statement = lines[index];
    while (!statement.includes(";") && index + 1 < lines.length) {
      statement += `\n${lines[index + 1]}`;
      index += 1;
    }
    const match = statement.match(
      /(?:from\s+|^\s*import\s+)["']([^"']+)["']/
    );
    if (match !== null) moduleSpecifiers.push(match[1]);
  }
  for (const moduleSpecifier of moduleSpecifiers) {
    if (moduleSpecifier.startsWith("node:")) continue;
    assert(
      moduleSpecifier.startsWith("./") ||
        moduleSpecifier.startsWith("../"),
      `CONVEYOR_EXTERNAL_MODULE_IMPORT_FORBIDDEN: ${artifact.artifactPath}:${moduleSpecifier}`
    );
    const target = posix.normalize(
      posix.join(
        posix.dirname(artifact.artifactPath),
        moduleSpecifier
      )
    );
    assert(
      target.startsWith(`${capabilityRoot}/`),
      `CONVEYOR_IMPORT_ESCAPES_CAPABILITY: ${artifact.artifactPath}:${moduleSpecifier}`
    );
  }
}
assert(
  [
    ...authority.projectionAuthority.map(
      projection => projection.projector.executablePath
    ),
    authority.featureExecutionProjection.projector.executablePath
  ].every(path => path.startsWith(`${capabilityRoot}/`)),
  "CONVEYOR_DYNAMIC_PROJECTOR_IMPORT_ESCAPES_CAPABILITY"
);
assert(
  JSON.stringify(authority.selfHostingAuthority.executionStages) ===
    JSON.stringify(
      authority.conveyor.stages.map(stage => stage.stageId)
    ) &&
    authority.selfHostingAuthority.executionStages.length === 18 &&
    authority.selfHostingAuthority.targetPolicy
      .postProjectionEdits === "forbidden" &&
    authority.selfHostingAuthority.targetPolicy.root ===
      "governed-repository-workspace" &&
    authority.selfHostingAuthority.targetPolicy.reviewSurface ===
      "git-diff" &&
    authority.implementationArtifactAuthority
      .workspaceProjectionAuthority.projectionMode ===
      "working-tree" &&
    authority.implementationArtifactAuthority
      .workspaceProjectionAuthority.alternateFileTopologies ===
      "forbidden" &&
    implementationCoordinates.some(
      coordinate =>
        coordinate.artifactPath ===
          authority.selfHostingAuthority.executorArtifactPath &&
        coordinate.projectorCapability ===
          "projects-self-hosting-runner" &&
        coordinate.projectionPosture === "PROJECTABLE"
    ),
  "CONVEYOR_SELF_HOSTING_AUTHORITY_MISMATCH"
);
const selfHostingArtifact = implementationArtifacts.find(
  artifact =>
    artifact.artifactPath ===
    authority.selfHostingAuthority.executorArtifactPath
);
assert(
  authority.selfHostingAuthority.acceptance.liveProviderRun ===
    "required-on-projected-working-tree" &&
    selfHostingArtifact?.projectedSource.includes(
      'process.env["LOC_GEMINI_API_KEY"]'
    ) &&
    selfHostingArtifact.projectedSource.includes(
      "await invokesLiveProvider("
    ) &&
    selfHostingArtifact.projectedSource.includes(
      "credentialBytesPersisted: false"
    ),
  "CONVEYOR_LIVE_PROVIDER_ACCEPTANCE_NOT_EXECUTABLE"
);
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
const invocationSteps = featureSteps.slice(0, -1);
const edgeContracts =
  authority.implementationArtifactAuthority.edgeRegistry
    .edgeContracts;
assert(
  JSON.stringify(
    edgeContracts.map(contract => [
      contract.sequence,
      contract.edgeId,
      contract.inputContractId,
      contract.outputContractId
    ])
  ) ===
    JSON.stringify(
      invocationSteps.map(step => [
        step.sequence,
        step.semanticOperationId,
        step.acceptsContractId,
        step.producesContractId
      ])
    ),
  "CONVEYOR_EDGE_REGISTRY_FLOW_MISMATCH"
);
for (const step of invocationSteps) {
  const scenario = scenarios.find(
    candidate =>
      candidate.responsibility.responsibilityId ===
        step.responsibilityId &&
      candidate.responsibility.semanticOperationId ===
        step.semanticOperationId
  );
  assert(
    scenario !== undefined,
    `CONVEYOR_RUNTIME_EDGE_ORPHANED: ${step.semanticOperationId}`
  );
  assert(
    scenario.signal.resultShape.contractId ===
      step.producesContractId &&
      semantics.get(step.responsibilityId)?.accepts.contractId ===
        step.acceptsContractId &&
      semantics.get(step.responsibilityId)?.produces.contractId ===
        step.producesContractId &&
      bodies.get(step.responsibilityId)?.operations[0].edgeId ===
        step.semanticOperationId,
    `CONVEYOR_RUNTIME_EDGE_LINEAGE_MISMATCH: ${step.semanticOperationId}`
  );
}
const expectedLifecycleStates = expectedStageIds.map(
  (stageId, index) => ({
    stageId,
    lifecycleState:
      index < 14
        ? "AUTHORITY_DECLARED"
        : index < 17
          ? "EXECUTION_PENDING"
          : "BLOCKED"
  })
);
assert(
  JSON.stringify(state.stageStates) ===
    JSON.stringify(expectedLifecycleStates) &&
    state.implementationAdmission ===
      "BLOCKED_PENDING_CONFORMANCE",
  "CONVEYOR_LIFECYCLE_STATE_MISMATCH"
);
assert(
  authority.semanticInterpreterAuthority.bindingStatus ===
    "IMPLEMENTED" &&
    authority.implementationArtifactAuthority.semanticInterpreter
      .bindingStatus === "IMPLEMENTED" &&
    authority.semanticInterpreterAuthority.operators.every(
      declared =>
        authority.semanticAuthority.every(semantic =>
          semantic.decisions.every(decision =>
            decision.rules.every(rule =>
              rule.when.otherwise === true
                ? true
                : rule.when.all.every(
                    predicate =>
                      authority.semanticInterpreterAuthority.operators
                        .some(
                          operator =>
                            operator.operatorId ===
                            predicate.operator
                        )
                  )
            )
          )
        )
    ),
  "CONVEYOR_SEMANTIC_INTERPRETER_AUTHORITY_MISMATCH"
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
  assert(
    scenario.signal.resultShape.contractId ===
      semantic.produces.contractId,
    `CONVEYOR_SIGNAL_RESULT_SHAPE_MISMATCH: ${scenario.scenarioId}`
  );
  assert(
    semantic.projections.length === 1 &&
      JSON.stringify(
        Object.keys(semantic.projections[0].fields)
      ) ===
        JSON.stringify(
          scenario.signal.resultShape.fields.map(field => field.name)
        ),
    `CONVEYOR_SEMANTIC_RESULT_FIELD_MISMATCH: ${scenario.scenarioId}`
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
  for (const observation of semantic.observations) {
    assert(
      observationPortOperations
        .get(observation.resolution.portRef)
        ?.includes(observation.resolution.operationId) === true,
      `CONVEYOR_OBSERVATION_PORT_OPERATION_UNBOUND: ${observation.observationId}`
    );
    const observedProjectionFields = Object.values(
      semantic.projections[0].fields
    )
      .filter(
        operand =>
          operand.kind === "path" &&
          operand.path.startsWith("$.observed.")
      )
      .map(operand => operand.path.slice("$.observed.".length));
    assert(
      observedProjectionFields.every(field =>
        observation.resolution.producesFields.includes(field)
      ),
      `CONVEYOR_OBSERVATION_FIELD_UNBOUND: ${observation.observationId}`
    );
  }
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
  const supportingAuthority =
    authority.fileBodyAuthority.supportingTypes.find(
      item =>
        item.artifactPath ===
        result.supportingTypeArtifactPath
    );
  const resultDeclaration =
    supportingAuthority?.projectorRequest.declarations.find(
      declaration =>
        declaration.interface?.name ===
        projection.typeResolution.resultType
    )?.interface;
  assert(
    resultDeclaration !== undefined &&
      JSON.stringify(
        resultDeclaration.members.map(member => member.name)
      ) ===
        JSON.stringify(
          scenario.signal.resultShape.fields.map(field => field.name)
        ),
    `CONVEYOR_SIGNAL_TYPE_FIELD_MISMATCH: ${scenario.signal.signalId}`
  );
  for (const [index, field] of
    scenario.signal.resultShape.fields.entries()) {
    const member = resultDeclaration.members[index];
    assert(
      (field.type === "governed-artifact-ref" &&
        member.typeReference === "GovernedArtifactRef") ||
        (field.type === "string" &&
          member.typeReference === "string") ||
        (field.type === "literal-union" &&
          member.typeReference !== "string" &&
          (member.literal === true ||
            JSON.stringify(member.unionAlternatives) ===
              JSON.stringify(field.allowedValues))),
      `CONVEYOR_SIGNAL_TYPE_MEMBER_MISMATCH: ${scenario.signal.signalId}:${field.name}`
    );
  }
}

const expectedResponsibilityRefs = scenarios.map(
  scenario =>
    `responsibility:${scenario.responsibility.responsibilityId}`
);
const expectedBodyRefs = scenarios.map(
  scenario =>
    `feature-body:${bodies.get(
      scenario.responsibility.responsibilityId
    ).bodyId}`
);
const expectedFixtureRefs = scenarios.map(
  scenario => `scenario:${scenario.scenarioId}`
);
const expectedSignalRefs = scenarios.map(
  scenario => `signal:${scenario.signal.signalId}`
);
assert(
  JSON.stringify(
    authority.evaluationAuthority.semanticEvaluation.executionRefs
  ) === JSON.stringify(expectedResponsibilityRefs) &&
    JSON.stringify(
      authority.evaluationAuthority.projectedEvaluation.executionRefs
    ) === JSON.stringify(expectedBodyRefs) &&
    JSON.stringify(
      authority.evaluationAuthority.semanticEvaluation.fixtureRefs
    ) === JSON.stringify(expectedFixtureRefs) &&
    JSON.stringify(
      authority.evaluationAuthority.projectedEvaluation.fixtureRefs
    ) === JSON.stringify(expectedFixtureRefs) &&
    JSON.stringify(
      authority.evaluationAuthority.semanticEvaluation
        .expectedSignalRefs
    ) === JSON.stringify(expectedSignalRefs) &&
    JSON.stringify(
      authority.evaluationAuthority.projectedEvaluation
        .expectedSignalRefs
    ) === JSON.stringify(expectedSignalRefs),
  "CONVEYOR_EVALUATION_EDGE_COVERAGE_MISMATCH"
);
const registrations =
  authority.implementationArtifactAuthority.registrations;
assert(
  JSON.stringify(
    registrations.map(registration => [
      registration.responsibilityId,
      registration.edgeId
    ])
  ) ===
    JSON.stringify(
      invocationSteps.map(step => [
        step.responsibilityId,
        step.semanticOperationId
      ])
    ),
  "CONVEYOR_RUNTIME_REGISTRATION_COVERAGE_MISMATCH"
);
const compositionTypeSource =
  derived.featureExecution.supportingTypeSource;
assert(
  derived.featureExecution.supportingTypeArtifactPath ===
    authority.implementationArtifactAuthority.compositionTypes
      .artifactPath &&
    derived.featureExecution.supportingTypeSourceSha256 ===
      sha256(Buffer.from(compositionTypeSource, "utf8")) &&
    invocationSteps.every(step =>
      compositionTypeSource.includes(
        JSON.stringify(step.semanticOperationId)
      )
    ) &&
    !compositionTypeSource.includes(
      "(edgeId: string, context: EndToEndCanonicalFeatureConveyorContext)"
    ),
  "CONVEYOR_HETEROGENEOUS_COMPOSITION_TYPES_MISMATCH"
);
await assertsProjectedTypescriptCompiles(authority, derived);

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
    authority.fractalProjectionAuthority.sourceModules.find(
      sourceModule =>
        sourceModule.moduleId === "markdown-projector"
    ).artifactPath
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
const stageDocumentationProfile =
  authority.documentationProjection.stageDocumentationProfile;
assert(
  JSON.stringify(stageDocumentationProfile.requiredBlocks) ===
    JSON.stringify([
      "authority",
      "meaning",
      "projection-preview",
      "traceability",
      "review-questions"
    ]) &&
    JSON.stringify(
      stageDocumentationProfile.stages.map(stage => stage.stageId)
    ) === JSON.stringify(expectedStageIds),
  "CONVEYOR_STAGE_DOCUMENTATION_PROFILE_MISMATCH"
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
    authority.fileBodyAuthority.composition
      .runtimeAdapterAuthorityRef ===
      "implementation-artifact:canonical-feature-runtime-adapter.v1",
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
const projectedMarkdownText = projectedMarkdown.toString("utf8");
assert(
  (
    projectedMarkdownText.match(
      /^### What is established here\r?$/gm
    ) ?? []
  ).length === expectedStageIds.length &&
    (
      projectedMarkdownText.match(
        /^### Canonical authority\r?$/gm
      ) ?? []
    ).length === expectedStageIds.length &&
    (
    projectedMarkdownText.match(
      /^### What this becomes\r?$/gm
    ) ?? []
  ).length === expectedStageIds.length &&
    (
      projectedMarkdownText.match(
        /^### Authority-to-code traceability\r?$/gm
      ) ?? []
    ).length === expectedStageIds.length &&
    (
      projectedMarkdownText.match(
        /^### Review questions\r?$/gm
      ) ?? []
    ).length === expectedStageIds.length,
  "CONVEYOR_STAGE_PROJECTION_PREVIEW_COVERAGE_MISMATCH"
);
assert(
  projectedMarkdownText.includes(
    `Required semantic authority loader artifact: \`${authority.implementationArtifactAuthority.semanticAuthorityLoader.artifactPath}\``
  ) &&
    projectedMarkdownText.includes(
      "Semantic authority runtime source: scenario-owned `.semantic-authority.json` artifacts."
    ) &&
    projectedMarkdownText.includes(
      "Embedded semantic authority in TypeScript: FORBIDDEN"
    ),
  "CONVEYOR_SEMANTIC_AUTHORITY_LOADING_DOCUMENTATION_MISSING"
);
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
const abstractAdmission = structuredClone(admissionDecision);
abstractAdmission.rules[0].when = {
  allRequiredInputsConform: true
};
recordsControl(
  "abstract-admission-predicate",
  () =>
    assert(
      JSON.stringify(abstractAdmission.rules[0].when) ===
        JSON.stringify(admissionDecision.rules[0].when),
      "CONVEYOR_ADMISSION_DECISION_NOT_EXECUTABLE"
    ),
  "CONVEYOR_ADMISSION_DECISION_NOT_EXECUTABLE"
);
const copiedTerminalInputs = structuredClone(terminalDecision);
copiedTerminalInputs.inputs = [
  "$.input.reviewDisposition",
  "$.input.existingFeatureIds"
];
recordsControl(
  "terminal-decision-input-copy",
  () =>
    assert(
      JSON.stringify(copiedTerminalInputs.inputs) ===
        JSON.stringify(terminalDecision.inputs),
      "CONVEYOR_TERMINAL_DECISION_INPUT_MISMATCH"
    ),
  "CONVEYOR_TERMINAL_DECISION_INPUT_MISMATCH"
);
const missingStagePreview = structuredClone(authority);
missingStagePreview.documentationProjection.stageDocumentationProfile.stages.pop();
recordsControl(
  "missing-stage-projection-preview",
  () => {
    if (!validate(missingStagePreview)) {
      throw new Error(
        "CONVEYOR_STAGE_DOCUMENTATION_PROFILE_MISMATCH"
      );
    }
  },
  "CONVEYOR_STAGE_DOCUMENTATION_PROFILE_MISMATCH"
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

const orphanedRuntimeAuthority = structuredClone(authority);
orphanedRuntimeAuthority.canonicalFeatureBody.scenarios =
  orphanedRuntimeAuthority.canonicalFeatureBody.scenarios.filter(
    scenario =>
      scenario.responsibility.semanticOperationId !==
      "adapt-new-feature-request-admission"
  );
recordsControl(
  "orphaned-runtime-edge",
  () =>
    assert(
      orphanedRuntimeAuthority.featureExecutionAuthority.steps
        .slice(0, -1)
        .every(step =>
          orphanedRuntimeAuthority.canonicalFeatureBody.scenarios.some(
            scenario =>
              scenario.responsibility.semanticOperationId ===
              step.semanticOperationId
          )
        ),
      "CONVEYOR_RUNTIME_EDGE_ORPHANED"
    ),
  "CONVEYOR_RUNTIME_EDGE_ORPHANED"
);
const dispositionOnlySignal = structuredClone(authority);
dispositionOnlySignal.canonicalFeatureBody.scenarios[0].signal
  .resultShape.fields = [
  {
    name: "disposition",
    type: "literal-union",
    allowedValues: ["ADMITTED", "REJECTED"]
  }
];
recordsControl(
  "disposition-only-intermediate-contract",
  () => {
    if (!validate(dispositionOnlySignal)) {
      throw new Error(
        "CONVEYOR_SIGNAL_LINEAGE_ENVELOPE_INCOMPLETE"
      );
    }
  },
  "CONVEYOR_SIGNAL_LINEAGE_ENVELOPE_INCOMPLETE"
);
const incompleteRegistrations = structuredClone(authority);
incompleteRegistrations.implementationArtifactAuthority.registrations.pop();
recordsControl(
  "missing-runtime-registration",
  () => {
    if (!validate(incompleteRegistrations)) {
      throw new Error(
        "CONVEYOR_RUNTIME_REGISTRATION_COVERAGE_MISMATCH"
      );
    }
  },
  "CONVEYOR_RUNTIME_REGISTRATION_COVERAGE_MISMATCH"
);
const incompleteImplementationProjection = structuredClone(derived);
incompleteImplementationProjection.implementationPackage.artifacts.pop();
recordsControl(
  "missing-implementation-projection-artifact",
  () =>
    assert(
      incompleteImplementationProjection.implementationPackage
        .artifacts.length === implementationCoordinates.length,
      "CONVEYOR_IMPLEMENTATION_PROJECTION_COVERAGE_MISMATCH"
    ),
  "CONVEYOR_IMPLEMENTATION_PROJECTION_COVERAGE_MISMATCH"
);
const driftedImplementationProjection = structuredClone(derived);
driftedImplementationProjection.implementationPackage.artifacts[0]
  .projectedSource += " ";
recordsControl(
  "implementation-projection-source-drift",
  () => {
    const artifact =
      driftedImplementationProjection.implementationPackage
        .artifacts[0];
    assert(
      artifact.projectedSourceSha256 ===
        sha256(Buffer.from(artifact.projectedSource, "utf8")),
      "CONVEYOR_IMPLEMENTATION_ARTIFACT_DRIFT"
    );
  },
  "CONVEYOR_IMPLEMENTATION_ARTIFACT_DRIFT"
);
const prematureReview = structuredClone(authority);
prematureReview.conveyor.constructionState.currentStage =
  "review-feature";
prematureReview.conveyor.constructionState.completedStages =
  expectedStageIds.slice(0, 17);
prematureReview.conveyor.constructionState.eligibleNextStages = [
  "review-feature"
];
recordsControl(
  "not-evaluated-review-admission",
  () => {
    if (!validate(prematureReview)) {
      throw new Error(
        "CONVEYOR_REVIEW_BLOCKED_BY_NOT_EVALUATED"
      );
    }
  },
  "CONVEYOR_REVIEW_BLOCKED_BY_NOT_EVALUATED"
);
const overclaimedInterpreter = structuredClone(authority);
overclaimedInterpreter.implementationArtifactAuthority
  .semanticInterpreter.bindingStatus = "NOT_IMPLEMENTED";
recordsControl(
  "semantic-interpreter-binding-divergence",
  () =>
    assert(
      overclaimedInterpreter.semanticInterpreterAuthority
        .bindingStatus ===
        overclaimedInterpreter.implementationArtifactAuthority
          .semanticInterpreter.bindingStatus,
      "CONVEYOR_SEMANTIC_INTERPRETER_BINDING_MISMATCH"
    ),
  "CONVEYOR_SEMANTIC_INTERPRETER_BINDING_MISMATCH"
);
const missingSemanticAuthoritySource = structuredClone(authority);
missingSemanticAuthoritySource.implementationArtifactAuthority
  .semanticAuthorityLoader.sourceArtifactPaths.pop();
recordsControl(
  "semantic-authority-loader-source-omission",
  () =>
    assertsSemanticAuthorityRuntimeBoundary(
      missingSemanticAuthoritySource,
      implementationArtifacts
    ),
  "CONVEYOR_SEMANTIC_AUTHORITY_LOADER_SOURCE_MISMATCH"
);
const embeddedSemanticAuthority = structuredClone(derived);
const embeddedInterpreter =
  embeddedSemanticAuthority.implementationPackage.artifacts.find(
    artifact =>
      artifact.artifactPath ===
      authority.implementationArtifactAuthority.semanticInterpreter
        .artifactPath
  );
embeddedInterpreter.projectedSource +=
  "\nconst semanticAuthorities = [];\n";
recordsControl(
  "semantic-authority-embedded-in-interpreter",
  () =>
    assertsSemanticAuthorityRuntimeBoundary(
      authority,
      embeddedSemanticAuthority.implementationPackage.artifacts
    ),
  "CONVEYOR_SEMANTIC_AUTHORITY_EMBEDDED_IN_INTERPRETER"
);
const prematureImplementationAdmission = structuredClone(authority);
prematureImplementationAdmission.conveyor.constructionState
  .implementationAdmission = "ADMITTED";
recordsControl(
  "implementation-admission-before-runtime-conformance",
  () => {
    if (!validate(prematureImplementationAdmission)) {
      throw new Error(
        "CONVEYOR_IMPLEMENTATION_ADMISSION_REQUIREMENTS_UNSATISFIED"
      );
    }
  },
  "CONVEYOR_IMPLEMENTATION_ADMISSION_REQUIREMENTS_UNSATISFIED"
);
const unboundObservationOperation = structuredClone(
  authority.semanticAuthority[0].observations[0]
);
unboundObservationOperation.resolution.operationId =
  "undeclared-observation-operation";
recordsControl(
  "unbound-observation-port-operation",
  () =>
    assert(
      observationPortOperations
        .get(unboundObservationOperation.resolution.portRef)
        ?.includes(
          unboundObservationOperation.resolution.operationId
        ) === true,
      "CONVEYOR_OBSERVATION_PORT_OPERATION_UNBOUND"
    ),
  "CONVEYOR_OBSERVATION_PORT_OPERATION_UNBOUND"
);

const pathEscapeProjection = structuredClone(authority);
pathEscapeProjection.implementationArtifactAuthority
  .projectionPackage.supplementalArtifacts[0].artifactPath =
  "../outside-capability.ts";
recordsControl(
  "implementation-artifact-path-escape",
  () => {
    if (!validate(pathEscapeProjection)) {
      throw new Error(
        "CONVEYOR_CAPABILITY_ROOT_CONFINEMENT_VIOLATED"
      );
    }
  },
  "CONVEYOR_CAPABILITY_ROOT_CONFINEMENT_VIOLATED"
);

const siblingCapabilityProjection = structuredClone(authority);
siblingCapabilityProjection.implementationArtifactAuthority
  .projectionPackage.supplementalArtifacts[0].artifactPath =
  "capabilities/another-capability/runtime/escaped.ts";
recordsControl(
  "implementation-artifact-sibling-capability-sprawl",
  () => {
    if (!validate(siblingCapabilityProjection)) {
      throw new Error(
        "CONVEYOR_CAPABILITY_ROOT_CONFINEMENT_VIOLATED"
      );
    }
  },
  "CONVEYOR_CAPABILITY_ROOT_CONFINEMENT_VIOLATED"
);

const shadowRootProjection = structuredClone(authority);
shadowRootProjection.implementationArtifactAuthority
  .projectionPackage.targetPolicy.root =
  "caller-supplied-empty-root";
recordsControl(
  "shadow-projection-root",
  () => {
    if (!validate(shadowRootProjection)) {
      throw new Error(
        "CONVEYOR_WORKING_TREE_PROJECTION_REQUIRED"
      );
    }
  },
  "CONVEYOR_WORKING_TREE_PROJECTION_REQUIRED"
);

const humanOwnedOverwrite = structuredClone(authority);
humanOwnedOverwrite.implementationArtifactAuthority
  .projectionPackage.supplementalArtifacts[0].ownership =
  "human-authored";
recordsControl(
  "human-owned-artifact-overwrite",
  () => {
    if (!validate(humanOwnedOverwrite)) {
      throw new Error(
        "CONVEYOR_PROJECTOR_OWNERSHIP_REQUIRED"
      );
    }
  },
  "CONVEYOR_PROJECTOR_OWNERSHIP_REQUIRED"
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
console.log("Production-projected composition type bodies: 1");
console.log(
  `Production-projected supporting type bodies: ${derived.results.length}`
);
console.log(`Markdown byte SHA-256: ${sha256(projectedMarkdown)}`);
console.log(`${controls.length}/${controls.length} negative controls passed`);
