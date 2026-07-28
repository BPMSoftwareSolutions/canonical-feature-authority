import { createHash } from "node:crypto";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const repositoryRoot = resolve(import.meta.dirname, "..");
const outputRootArgument = process.argv.indexOf("--output-root");
const root =
  outputRootArgument === -1
    ? repositoryRoot
    : resolve(process.argv[outputRootArgument + 1]);
const featureId =
  "prove-bounded-model-submission-provenance-under-independent-trust";
const capabilityRoot = `capabilities/${featureId}`;
const constraints = {
  forbidBranching: true,
  forbidIteration: true,
  forbidDtoConstruction: true,
  forbidSemanticLiterals: true,
  forbidDirectEffects: true,
  forbidLocalErrorPolicy: true
};

const scenarios = [
  {
    scenarioId: "attest-one-independently-observed-provider-exchange",
    title: "Attest one independently observed provider exchange",
    given:
      "one fresh instructor challenge and one admitted provider-neutral model request",
    when:
      "its provider exchange is observed by instructor-controlled infrastructure",
    then:
      "one signed independent-provider-exchange attestation is emitted",
    obligationId:
      "establish-one-independent-provider-exchange-attestation",
    expectationId:
      "expect-one-independent-provider-exchange-attestation",
    responsibilityId:
      "attests-independently-observed-provider-exchange",
    responsibilityStatement:
      "its provider exchange is observed by instructor-controlled infrastructure",
    signalId: "independent-provider-exchange-attestation",
    semanticOperationId: "attest-independent-provider-exchange",
    primaryBase: "provider-exchange-attestation",
    typeBase: "provider-exchange-attestation.type",
    functionName: "attestsIndependentlyObservedProviderExchange",
    contextType: "AttestsIndependentlyObservedProviderExchangeContext",
    resultType: "IndependentProviderExchangeAttestation",
    operationMember: "attest",
    inputMember: "exchange",
    inputType: "IndependentProviderExchange",
    expectationFunction: "provesProviderExchangeAttestationExpectation",
    expectationContext: "ProvesProviderExchangeAttestationExpectationContext",
    conformanceBase: "runs-provider-exchange-attestation-conformance",
    conformanceFunction: "runsProviderExchangeAttestationConformance",
    conformanceContext: "RunsProviderExchangeAttestationConformanceContext",
    conformanceResult: "ProjectionConformanceSignal"
  },
  {
    scenarioId: "reproduce-one-bounded-model-submission-body",
    title: "Reproduce one bounded-model-submission body",
    given:
      "one admitted bounded-model-submission SEJ, AST, and transformer graph",
    when: "its recorded transformer build is independently replayed",
    then:
      "one byte-identical projector-signed bounded-model-submission body is emitted",
    obligationId:
      "establish-one-byte-identical-bounded-model-submission-body",
    expectationId:
      "expect-one-byte-identical-bounded-model-submission-body",
    responsibilityId: "reproduces-bounded-model-submission-body",
    responsibilityStatement:
      "its recorded transformer build is independently replayed",
    signalId: "bounded-model-submission-body-reproduction",
    semanticOperationId: "reproduce-bounded-model-submission-body",
    primaryBase: "bounded-model-submission-reproduction",
    primaryBodyId: "bounded-model-submission-body-reproduction-body",
    typeBase: "bounded-model-submission-body-reproduction.type",
    functionName: "reproducesBoundedModelSubmissionBody",
    contextType: "ReproducesBoundedModelSubmissionBodyContext",
    resultType: "BoundedModelSubmissionBodyReproduction",
    operationMember: "reproduce",
    inputMember: "subject",
    inputType: "BoundedModelSubmissionProjectionSubject",
    expectationFunction:
      "provesBoundedModelSubmissionBodyReproductionExpectation",
    expectationContext:
      "ProvesBoundedModelSubmissionBodyReproductionExpectationContext",
    conformanceBase:
      "runs-bounded-model-submission-body-reproduction-conformance",
    conformanceFunction:
      "runsBoundedModelSubmissionBodyReproductionConformance",
    conformanceContext:
      "RunsBoundedModelSubmissionBodyReproductionConformanceContext",
    conformanceResult: "ProjectionConformanceSignal"
  },
  {
    scenarioId: "observe-one-bounded-model-submission-execution",
    title: "Observe one bounded-model-submission execution",
    given:
      "one projector-signed bounded-model-submission body and its admitted connector binding",
    when:
      "the body is executed through an instructor-controlled observation port",
    then:
      "one signed raw bounded-model-submission execution observation is emitted",
    obligationId:
      "establish-one-raw-bounded-model-submission-observation",
    expectationId: "expect-one-raw-bounded-model-submission-observation",
    responsibilityId: "observes-bounded-model-submission-execution",
    responsibilityStatement:
      "the body is executed through an instructor-controlled observation port",
    signalId: "bounded-model-submission-execution-observation",
    semanticOperationId: "observe-bounded-model-submission-execution",
    primaryBase: "bounded-model-submission-observation",
    primaryBodyId: "bounded-model-submission-execution-observation-body",
    typeBase: "bounded-model-submission-execution-observation.type",
    functionName: "observesBoundedModelSubmissionExecution",
    contextType: "ObservesBoundedModelSubmissionExecutionContext",
    resultType: "BoundedModelSubmissionExecutionObservation",
    operationMember: "observe",
    inputMember: "subject",
    inputType: "BoundedModelSubmissionExecutionSubject",
    expectationFunction:
      "provesBoundedModelSubmissionExecutionObservationExpectation",
    expectationContext:
      "ProvesBoundedModelSubmissionExecutionObservationExpectationContext",
    conformanceBase:
      "runs-bounded-model-submission-execution-observation-conformance",
    conformanceFunction:
      "runsBoundedModelSubmissionExecutionObservationConformance",
    conformanceContext:
      "RunsBoundedModelSubmissionExecutionObservationConformanceContext",
    conformanceResult: "ProjectionConformanceSignal"
  },
  {
    scenarioId: "verify-one-complete-bounded-model-submission-lineage",
    title: "Verify one complete bounded-model-submission lineage",
    given:
      "one provider attestation, reproducible body, and raw execution observation",
    when: "their complete authority lineage is independently evaluated",
    then:
      "one signed bounded-model-submission acceptance disposition is emitted",
    obligationId:
      "establish-one-complete-bounded-model-submission-lineage",
    expectationId: "expect-one-complete-bounded-model-submission-lineage",
    responsibilityId: "verifies-complete-bounded-model-submission-lineage",
    responsibilityStatement:
      "their complete authority lineage is independently evaluated",
    signalId: "bounded-model-submission-acceptance-disposition",
    semanticOperationId:
      "evaluate-complete-bounded-model-submission-lineage",
    primaryBase: "complete-bounded-model-submission-lineage",
    typeBase: "bounded-model-submission-acceptance-disposition.type",
    functionName: "verifiesCompleteBoundedModelSubmissionLineage",
    contextType: "VerifiesCompleteBoundedModelSubmissionLineageContext",
    resultType: "BoundedModelSubmissionAcceptanceDisposition",
    operationMember: "evaluate",
    inputMember: "lineage",
    inputType: "CompleteBoundedModelSubmissionLineage",
    expectationFunction:
      "provesCompleteBoundedModelSubmissionLineageExpectation",
    expectationContext:
      "ProvesCompleteBoundedModelSubmissionLineageExpectationContext",
    conformanceBase:
      "runs-complete-bounded-model-submission-lineage-conformance",
    conformanceFunction:
      "runsCompleteBoundedModelSubmissionLineageConformance",
    conformanceContext:
      "RunsCompleteBoundedModelSubmissionLineageConformanceContext",
    conformanceResult: "BoundedModelSubmissionAcceptanceDisposition"
  }
];

function canonicalizes(value) {
  if (Array.isArray(value)) {
    return `[${value.map(canonicalizes).join(",")}]`;
  }
  if (value !== null && typeof value === "object") {
    return `{${Object.keys(value)
      .sort()
      .map(
        key =>
          `${JSON.stringify(key)}:${canonicalizes(value[key])}`
      )
      .join(",")}}`;
  }
  return JSON.stringify(value);
}

function sha256(value) {
  return `sha256:${createHash("sha256")
    .update(canonicalizes(value), "utf8")
    .digest("hex")}`;
}

async function writesJson(relativePath, value) {
  const path = resolve(root, relativePath);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`);
}

async function writesText(relativePath, value) {
  const path = resolve(root, relativePath);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, value.replaceAll("\r\n", "\n"));
}

async function writesSeedBody(relativePath, value) {
  try {
    await access(resolve(root, `${relativePath}.ast.authority.json`));
  } catch {
    await writesText(relativePath, value);
  }
}

function lineage(scenario) {
  return {
    featureId,
    scenarioId: scenario.scenarioId,
    obligationId: scenario.obligationId,
    expectationId: scenario.expectationId,
    responsibilityId: scenario.responsibilityId,
    signalId: scenario.signalId,
    semanticOperationId: scenario.semanticOperationId
  };
}

function semanticExecutable({
  scenario,
  role,
  profile,
  bodyId,
  artifact,
  functionName,
  contextType,
  resultType,
  operationMember,
  inputMember
}) {
  return {
    semanticExecutableType: "prebound-member-delegation.v1",
    bodyRole: role,
    structuralProfile: profile,
    bodyId,
    artifact: { relativePath: artifact },
    lineage: lineage(scenario),
    projection: {
      functionName,
      contextParameter: {
        name: "context",
        typeReference: contextType
      },
      resultTypeReference: resultType,
      invocation: {
        receiver: "context",
        operationMember,
        argument: {
          receiver: "context",
          member: inputMember
        },
        awaited: true,
        returnResult: true
      }
    },
    constraints
  };
}

function projectionAuthority(semantic, semanticFile) {
  const digest = sha256(semantic);
  return {
    projectionType: "declarative-typescript-projection.v1",
    projectionId:
      `project-${semantic.bodyId.replace(/-body$/, "")}-from-` +
      digest.slice("sha256:".length),
    bodyId: semantic.bodyId,
    structuralProfile: semantic.structuralProfile,
    sourceSemanticAuthority: semanticFile,
    sourceSemanticAuthoritySha256: digest,
    artifact: semantic.artifact,
    projection: semantic.projection
  };
}

function bodyAuthority(scenario, semantic, semanticFile) {
  return {
    bodyContractType: "scenario-responsibility-body.v1",
    bodyId: semantic.bodyId,
    scenarioId: scenario.scenarioId,
    obligationId: scenario.obligationId,
    responsibilityId: scenario.responsibilityId,
    signalId: scenario.signalId,
    target: {
      language: "typescript",
      path: semantic.artifact.relativePath
    },
    semanticExecutableAuthority: semanticFile,
    semanticExecutableSha256: sha256(semantic),
    constraints
  };
}

function bodyExpectation(scenario, semantic) {
  return {
    expectationType: "responsibility-body-expectation.v1",
    bodyId: semantic.bodyId,
    scenarioId: scenario.scenarioId,
    obligationId: scenario.obligationId,
    expectationId: scenario.expectationId,
    responsibilityId: scenario.responsibilityId,
    signalId: scenario.signalId,
    bodyCount: 1,
    structuralProfile: semantic.structuralProfile
  };
}

function functionBody({
  functionName,
  contextType,
  resultType,
  operationMember,
  inputMember,
  typeBase
}) {
  return `import type {
  ${contextType},
  ${resultType}
} from "./${typeBase}.js";

export async function ${functionName}(
  context: ${contextType}
): Promise<${resultType}> {
  return await context.${operationMember}(context.${inputMember});
}
`;
}

function typeBody(scenario) {
  return `export type ${scenario.inputType} = unknown;
export type ${scenario.resultType} = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface ${scenario.contextType} {
  readonly ${scenario.inputMember}: ${scenario.inputType};
  readonly ${scenario.operationMember}: (
    input: ${scenario.inputType}
  ) => Promise<${scenario.resultType}>;
}

export interface ${scenario.expectationContext} {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface ${scenario.conformanceContext} {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<${scenario.conformanceResult}>;
}
`;
}

async function writesSchemasFromContract() {
  const contract = await readFile(
    resolve(
      repositoryRoot,
      "architecture/inspects-projected-body-provenance.md"
    ),
    "utf8"
  );
  const definitions = [
    [
      "### Independent provider exchange",
      "independent-provider-exchange-attestation.schema.json",
      "independent-provider-exchange-attestation",
      "model-request-authority"
    ],
    [
      "### Body reproduction",
      "bounded-model-submission-body-reproduction.schema.json",
      "bounded-model-submission-body-reproduction",
      "typescript-ast-authority"
    ],
    [
      "### Execution observation",
      "bounded-model-submission-execution-observation.schema.json",
      "bounded-model-submission-execution-observation",
      "runtime-composition-authority"
    ],
    [
      "### Complete lineage subject",
      "complete-bounded-model-submission-lineage.schema.json",
      "complete-bounded-model-submission-lineage",
      "bounded-model-submission-execution-observation"
    ],
    [
      "### Terminal disposition",
      "bounded-model-submission-acceptance-disposition.schema.json",
      "bounded-model-submission-acceptance-disposition",
      "complete-bounded-model-submission-lineage"
    ]
  ];
  for (const [heading, schemaName, artifactType, parentArtifactType] of definitions) {
    const section = contract.slice(contract.indexOf(heading));
    const payloadMatch = /Payload contract:\s*```json\s*([\s\S]*?)\s*```/.exec(
      section
    );
    if (payloadMatch === null) {
      throw new Error(`Missing payload contract after ${heading}`);
    }
    const payload = JSON.parse(payloadMatch[1]);
    await writesJson(`schemas/${schemaName}`, {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: `https://canonical-feature-authority/schemas/${schemaName}`,
      allOf: [
        {
          $ref:
            "https://canonical-feature-authority/schemas/embedded-provenance.schema.json"
        },
        {
          type: "object",
          properties: {
            provenance: {
              type: "object",
              properties: {
                artifactType: { const: artifactType },
                parent: {
                  type: "object",
                  required: ["artifactType", "artifactSha256"],
                  properties: {
                    artifactType: { const: parentArtifactType }
                  }
                }
              }
            },
            payload: { $ref: "#/$defs/payload" }
          }
        }
      ],
      $defs: { payload }
    });
  }
  await writesJson(
    "schemas/bounded-model-submission-nonce-consumption-receipt.schema.json",
    {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id:
        "https://canonical-feature-authority/schemas/" +
        "bounded-model-submission-nonce-consumption-receipt.schema.json",
      allOf: [
        {
          $ref:
            "https://canonical-feature-authority/schemas/" +
            "embedded-provenance.schema.json"
        },
        {
          type: "object",
          properties: {
            provenance: {
              type: "object",
              properties: {
                artifactType: {
                  const:
                    "bounded-model-submission-nonce-consumption-receipt"
                },
                parent: {
                  type: "object",
                  required: ["artifactType", "artifactSha256"],
                  properties: {
                    artifactType: {
                      const:
                        "independent-provider-exchange-attestation"
                    }
                  }
                }
              }
            },
            payload: { $ref: "#/$defs/payload" }
          }
        }
      ],
      $defs: {
        payload: {
          type: "object",
          additionalProperties: false,
          required: [
            "authorityType",
            "nonceSha256",
            "consumedAttestationSha256",
            "issuedAt",
            "expiresAt",
            "consumedAt",
            "transition"
          ],
          properties: {
            authorityType: {
              const:
                "bounded-model-submission-nonce-consumption-receipt.v1"
            },
            nonceSha256: {
              $ref: "embedded-provenance.schema.json#/$defs/sha256"
            },
            consumedAttestationSha256: {
              $ref: "embedded-provenance.schema.json#/$defs/sha256"
            },
            issuedAt: { type: "string", format: "date-time" },
            expiresAt: { type: "string", format: "date-time" },
            consumedAt: { type: "string", format: "date-time" },
            transition: { const: "issued-to-consumed" }
          }
        }
      }
    }
  );
}

async function finalizesAstAuthorities() {
  for (const scenario of scenarios) {
    const directory =
      `${capabilityRoot}/scenarios/${scenario.scenarioId}/` +
      scenario.responsibilityId;
    const semanticFiles = await semanticArtifacts(scenario, directory);
    for (const item of semanticFiles) {
      const astPath = resolve(root, `${item.artifact}.ast.authority.json`);
      const ast = JSON.parse(await readFile(astPath, "utf8"));
      ast.projectionId = projectionAuthority(
        item.semantic,
        item.semanticFile
      ).projectionId;
      ast.artifact.relativePath = item.artifact;
      ast.lineage = {
        featureId,
        scenarioId: scenario.scenarioId,
        obligationId: scenario.obligationId,
        responsibilityId: scenario.responsibilityId,
        signalId: scenario.signalId
      };
      await writesJson(
        `${item.artifact}.ast.authority.json`,
        ast
      );
    }
  }
}

async function semanticArtifacts(scenario, directory) {
  const primaryArtifact = `${directory}/${scenario.primaryBase}.ts`;
  const primary = semanticExecutable({
    scenario,
    role: "primary",
    profile: "conveyor-stage-delegation.v1",
    bodyId: scenario.primaryBodyId ?? `${scenario.primaryBase}-body`,
    artifact: primaryArtifact,
    functionName: scenario.functionName,
    contextType: scenario.contextType,
    resultType: scenario.resultType,
    operationMember: scenario.operationMember,
    inputMember: scenario.inputMember
  });
  const typeArtifact = `${directory}/${scenario.typeBase}.ts`;
  const type = {
    semanticExecutableType: "declaration-only-context.v1",
    bodyRole: "type",
    structuralProfile: "conveyor-context-declaration.v1",
    bodyId: `${scenario.typeBase.replace(/\.type$/, "-type")}-body`,
    artifact: { relativePath: typeArtifact },
    lineage: lineage(scenario),
    projection: {
      declarations: [
        scenario.contextType,
        scenario.expectationContext,
        scenario.conformanceContext,
        scenario.resultType,
        "ExpectationSignal",
        "ProjectionConformanceSignal"
      ]
    },
    constraints
  };
  const expectationBase = `${scenario.primaryBase}.expectation`;
  const expectationArtifact = `${directory}/${expectationBase}.ts`;
  const expectation = semanticExecutable({
    scenario,
    role: "expectation",
    profile: "expectation-execution.v1",
    bodyId: `${scenario.primaryBase}-expectation-body`,
    artifact: expectationArtifact,
    functionName: scenario.expectationFunction,
    contextType: scenario.expectationContext,
    resultType: "ExpectationSignal",
    operationMember: "prove",
    inputMember: "expectation"
  });
  const conformanceArtifact = `${directory}/${scenario.conformanceBase}.ts`;
  const conformance = semanticExecutable({
    scenario,
    role: "conformance",
    profile: "conformance-delegation.v1",
    bodyId: `${scenario.conformanceBase}-body`,
    artifact: conformanceArtifact,
    functionName: scenario.conformanceFunction,
    contextType: scenario.conformanceContext,
    resultType: scenario.conformanceResult,
    operationMember: "evaluate",
    inputMember: "subject"
  });
  return [
    {
      role: "primary",
      base: scenario.primaryBase,
      semanticBase: scenario.primaryBase,
      semantic: primary,
      artifact: primaryArtifact
    },
    {
      role: "type",
      base: scenario.typeBase,
      semanticBase: scenario.typeBase.replace(/\.type$/, "-type"),
      semantic: type,
      artifact: typeArtifact
    },
    {
      role: "expectation",
      base: expectationBase,
      semanticBase: `${scenario.primaryBase}-expectation`,
      semantic: expectation,
      artifact: expectationArtifact
    },
    {
      role: "conformance",
      base: scenario.conformanceBase,
      semanticBase: scenario.conformanceBase,
      semantic: conformance,
      artifact: conformanceArtifact
    }
  ].map(item => ({
    ...item,
    semanticFile: `projects-${item.semanticBase}.semantic-executable.json`
  }));
}

async function materializesCapability() {
  await writesSchemasFromContract();
  await writesText(
    `${capabilityRoot}/proves-bounded-model-submission-provenance.feature`,
    `Feature: Prove bounded-model-submission provenance under independent trust
  As an independent conveyor verifier
  I want provider exchange, projection, and execution evidence verified
    outside the submitted trust domain
  So that only one reproducible bounded-model-submission lineage receives GREEN

${scenarios
  .map(
    scenario => `  @scenario-id:${scenario.scenarioId}
  Scenario: ${scenario.title}
    Given ${scenario.given}
    When ${scenario.when}
    Then ${scenario.then}
`
  )
  .join("\n")}`
  );
  await writesJson(`${capabilityRoot}/projects-capability-authority.json`, {
    authorityType: "canonical-feature-authority.v1",
    featureId,
    title:
      "Prove bounded-model-submission provenance under independent trust",
    userStory: {
      asA: "independent conveyor verifier",
      iWant:
        "provider exchange, projection, and execution evidence verified outside the submitted trust domain",
      soThat:
        "only one reproducible bounded-model-submission lineage receives GREEN"
    },
    scenarioIds: scenarios.map(scenario => scenario.scenarioId),
    governingObligation:
      "Every accepted bounded-model submission has independently observed, reproduced, executed, and completely linked provenance."
  });

  for (const scenario of scenarios) {
    const scenarioRoot = `${capabilityRoot}/scenarios/${scenario.scenarioId}`;
    const directory = `${scenarioRoot}/${scenario.responsibilityId}`;
    await writesJson(`${scenarioRoot}/declares-scenario-authority.json`, {
      authorityType: "scenario-authority.v1",
      featureId,
      scenarioId: scenario.scenarioId,
      given: scenario.given,
      when: scenario.when,
      then: scenario.then,
      independentObligationCount: 1
    });
    await writesJson(`${scenarioRoot}/${scenario.obligationId}.obligation.json`, {
      authorityType: "obligation.v1",
      featureId,
      scenarioId: scenario.scenarioId,
      obligationId: scenario.obligationId,
      statement: scenario.then,
      independentlyEvaluable: true
    });
    await writesJson(`${scenarioRoot}/${scenario.expectationId}.expectation.json`, {
      authorityType: "scenario-expectation.v1",
      featureId,
      scenarioId: scenario.scenarioId,
      obligationId: scenario.obligationId,
      expectationId: scenario.expectationId,
      outcome: scenario.then,
      expectedResponsibilityId: scenario.responsibilityId,
      expectedSignalId: scenario.signalId
    });
    await writesJson(`${directory}/declares-responsibility.json`, {
      authorityType: "responsibility.v1",
      featureId,
      scenarioId: scenario.scenarioId,
      obligationId: scenario.obligationId,
      responsibilityId: scenario.responsibilityId,
      statement: scenario.responsibilityStatement,
      semanticOperationId: scenario.semanticOperationId
    });
    await writesJson(`${directory}/declares-signal.json`, {
      authorityType: "signal.v1",
      featureId,
      scenarioId: scenario.scenarioId,
      obligationId: scenario.obligationId,
      responsibilityId: scenario.responsibilityId,
      signalId: scenario.signalId,
      outcome: scenario.then,
      dispositions: ["GREEN", "RED", "UNRESOLVED"]
    });
    await writesJson(
      `${directory}/binds-responsibility-to-semantic-edge.json`,
      {
        bindingType: "responsibility-semantic-binding.v1",
        responsibilityId: scenario.responsibilityId,
        semanticOperationId: scenario.semanticOperationId,
        contextOperationMember: scenario.operationMember,
        contextInputMember: scenario.inputMember,
        signalId: scenario.signalId
      }
    );

    const artifacts = await semanticArtifacts(scenario, directory);
    const primary = artifacts.find(item => item.role === "primary");
    await writesJson(
      `${directory}/executes-${scenario.primaryBase}.sej.json`,
      primary.semantic
    );
    const entries = [];
    for (const item of artifacts) {
      const semanticDigest = sha256(item.semantic);
      const projection = projectionAuthority(item.semantic, item.semanticFile);
      const declaredName = `declares-${item.semantic.bodyId}.json`;
      const expectedName = `expects-${item.semantic.bodyId}.json`;
      const projectedName = `projects-${item.semantic.bodyId}.json`;
      await writesJson(`${directory}/${item.semanticFile}`, item.semantic);
      await writesJson(
        `${directory}/${declaredName}`,
        bodyAuthority(scenario, item.semantic, item.semanticFile)
      );
      await writesJson(
        `${directory}/${expectedName}`,
        bodyExpectation(scenario, item.semantic)
      );
      await writesJson(`${directory}/${projectedName}`, projection);
      entries.push({
        role: item.role,
        bodyId: item.semantic.bodyId,
        semanticAuthority: item.semanticFile,
        semanticAuthoritySha256: semanticDigest,
        bodyExpectationAuthority: expectedName,
        fileBodyAuthority: declaredName,
        typescriptProjectionAuthority: projectedName,
        astAuthority: `${item.base}.ts.ast.authority.json`,
        projectedBody: `${item.base}.ts`
      });
    }
    await writesJson(`${directory}/projection-lineage.index.json`, {
      indexType: "scenario-projection-lineage.v1",
      ...lineage(scenario),
      projectedBodyCount: 4,
      entries
    });
    await writesSeedBody(
      `${directory}/${scenario.typeBase}.ts`,
      typeBody(scenario)
    );
    await writesSeedBody(
      `${directory}/${scenario.primaryBase}.ts`,
      functionBody({
        functionName: scenario.functionName,
        contextType: scenario.contextType,
        resultType: scenario.resultType,
        operationMember: scenario.operationMember,
        inputMember: scenario.inputMember,
        typeBase: scenario.typeBase
      })
    );
    await writesSeedBody(
      `${directory}/${scenario.primaryBase}.expectation.ts`,
      functionBody({
        functionName: scenario.expectationFunction,
        contextType: scenario.expectationContext,
        resultType: "ExpectationSignal",
        operationMember: "prove",
        inputMember: "expectation",
        typeBase: scenario.typeBase
      })
    );
    await writesSeedBody(
      `${directory}/${scenario.conformanceBase}.ts`,
      functionBody({
        functionName: scenario.conformanceFunction,
        contextType: scenario.conformanceContext,
        resultType: scenario.conformanceResult,
        operationMember: "evaluate",
        inputMember: "subject",
        typeBase: scenario.typeBase
      })
    );
  }
}

if (process.argv.includes("--finalize-ast")) {
  await finalizesAstAuthorities();
} else {
  await materializesCapability();
}
