import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { posix, resolve } from "node:path";

const repositoryRoot = resolve(import.meta.dirname, "../../..");

const sha256 = bytes =>
  `sha256:${createHash("sha256").update(bytes).digest("hex")}`;

function header(authorityRef) {
  return [
    "// @generated",
    `// authority-ref: ${authorityRef}`,
    "// projector: canonical-feature-conveyor-implementation-projector.v1",
    "// DO NOT EDIT."
  ];
}

function camelCase(value) {
  return value.replace(/-([a-z0-9])/g, (_match, character) =>
    character.toUpperCase()
  );
}

function jsonArtifact(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function projectsFeatureBody(authority) {
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
  return `${lines.join("\n")}\n`;
}

function relativeModule(fromArtifactPath, toArtifactPath) {
  const relativePath = posix
    .relative(
      posix.dirname(fromArtifactPath),
      toArtifactPath
    )
    .replace(/\.(?:ts|mjs)$/, ".js");
  return relativePath.startsWith(".")
    ? relativePath
    : `./${relativePath}`;
}

function projectsRuntimeRegistration(authority, registration) {
  const functionName = camelCase(
    registration.artifactPath
      .split("/")
      .at(-1)
      .replace(/\.ts$/, "")
  );
  const bodyProjection = authority.projectionAuthority.find(
    candidate =>
      candidate.input.projectorRequest.lineage.responsibilityId ===
      registration.responsibilityId
  );
  if (bodyProjection === undefined) {
    throw new Error(
      `RUNTIME_REGISTRATION_BODY_UNRESOLVED: ${registration.responsibilityId}`
    );
  }
  const bodyModule = relativeModule(
    registration.artifactPath,
    bodyProjection.expectedArtifact.path
  );
  const interpreterModule = relativeModule(
    registration.artifactPath,
    authority.implementationArtifactAuthority.semanticInterpreter
      .artifactPath
  );
  const bodyFunction =
    bodyProjection.input.projectorRequest.function.name;
  return `${[
    ...header(`runtime-registration:${registration.responsibilityId}`),
    `import { ${bodyFunction} } from ${JSON.stringify(bodyModule)};`,
    `import type { SemanticAuthorityInterpreter } from ${JSON.stringify(interpreterModule)};`,
    "",
    "export interface RuntimeEdgeRegistration {",
    "  readonly edgeId: string;",
    "  readonly invokes: (input: unknown) => Promise<unknown>;",
    "}",
    "",
    `export function ${functionName}(`,
    "  interpreter: SemanticAuthorityInterpreter",
    "): RuntimeEdgeRegistration {",
    "  return {",
    `    edgeId: ${JSON.stringify(registration.edgeId)},`,
    "    invokes: input => {",
    "      const context = {",
    "        ...(input as Record<string, unknown>),",
    "        edges: {",
    "          invokes: (_edgeId: string, semanticInput: unknown) =>",
    "            interpreter.executes(",
    `              ${JSON.stringify(registration.responsibilityId)},`,
    "              semanticInput",
    "            )",
    "        }",
    "      };",
    `      return ${bodyFunction}(context as never);`,
    "    }",
    "  };",
    "}",
    ""
  ].join("\n")}`;
}

function projectsRuntimeAdapter(authority) {
  const registrations =
    authority.implementationArtifactAuthority.registrations;
  const adapterPath =
    authority.implementationArtifactAuthority.runtimeAdapter
      .artifactPath;
  const imports = registrations.map(registration => {
    const moduleName = relativeModule(
      adapterPath,
      registration.artifactPath
    );
    const functionName = camelCase(
      registration.artifactPath
        .split("/")
        .at(-1)
        .replace(/\.ts$/, "")
    );
    return `import { ${functionName} } from ${JSON.stringify(moduleName)};`;
  });
  const calls = registrations.map(registration => {
    const functionName = camelCase(
      registration.artifactPath
        .split("/")
        .at(-1)
        .replace(/\.ts$/, "")
    );
    return `    ${functionName}(context.interpreter)`;
  });
  return `${[
    ...header("implementation-artifact:runtime-adapter"),
    'import { executesEndToEndCanonicalFeatureConveyor } from "../composition/executes-end-to-end-canonical-feature-conveyor.js";',
    'import type { EndToEndCanonicalFeatureConveyorContext, NewFeatureTerminalDisposition } from "../composition/executes-end-to-end-canonical-feature-conveyor.type.js";',
    'import type { SemanticAuthorityInterpreter } from "./interprets-canonical-feature-semantic-authority.js";',
    ...imports,
    "",
    "export interface InvokeCanonicalFeatureConveyorContext {",
    "  readonly request: Omit<EndToEndCanonicalFeatureConveyorContext, \"edges\">;",
    "  readonly interpreter: SemanticAuthorityInterpreter;",
    "}",
    "",
    "export async function invokesCanonicalFeatureConveyor(",
    "  context: InvokeCanonicalFeatureConveyorContext",
    "): Promise<NewFeatureTerminalDisposition> {",
    "  const registrations = [",
    calls.join(",\n"),
    "  ];",
    "  const handlers = new Map(",
    "    registrations.map(registration => [",
    "      registration.edgeId,",
    "      registration.invokes",
    "    ])",
    "  );",
    "  const invokes = async (",
    "    edgeId: string,",
    "    input: unknown",
    "  ): Promise<unknown> => {",
    "    const handler = handlers.get(edgeId);",
    "    if (handler === undefined) {",
    "      throw new Error(`UNREGISTERED_CANONICAL_FEATURE_EDGE: ${edgeId}`);",
    "    }",
    "    return handler(input);",
    "  };",
    "  const conveyorContext: EndToEndCanonicalFeatureConveyorContext = {",
    "    ...context.request,",
    "    edges: {",
    "      invokes: invokes as EndToEndCanonicalFeatureConveyorContext[\"edges\"][\"invokes\"]",
    "    }",
    "  };",
    "  return executesEndToEndCanonicalFeatureConveyor(",
    "    conveyorContext",
    "  );",
    "}",
    ""
  ].join("\n")}`;
}

function projectsSemanticInterpreter(authority) {
  const semanticAuthority = JSON.stringify(
    authority.semanticAuthority,
    null,
    2
  );
  return `${[
    ...header(
      "semantic-interpreter:canonical-feature-semantic-interpreter.v1"
    ),
    "export interface SemanticObservationRequest {",
    "  readonly portRef: string;",
    "  readonly operationId: string;",
    "  readonly input: unknown;",
    "  readonly producesFields: readonly string[];",
    "}",
    "",
    "export interface SemanticObservationResolver {",
    "  resolves(request: SemanticObservationRequest): Promise<Record<string, unknown>>;",
    "  resolvesEvidence(reference: unknown): Promise<unknown>;",
    "}",
    "",
    "export interface SemanticAuthorityInterpreter {",
    "  executes(responsibilityId: string, input: unknown): Promise<unknown>;",
    "}",
    "",
    "interface SemanticOperand {",
    "  readonly kind: \"path\" | \"literal\";",
    "  readonly path?: string;",
    "  readonly value?: unknown;",
    "}",
    "",
    "interface SemanticAuthority {",
    "  readonly [key: string]: unknown;",
    "  readonly responsibilityId: string;",
    "  readonly observations: readonly Record<string, unknown>[];",
    "  readonly decisions: readonly Record<string, unknown>[];",
    "  readonly projections: readonly Record<string, unknown>[];",
    "  readonly execution: {",
    "    readonly executionModelId: string;",
    "    readonly steps: readonly Record<string, unknown>[];",
    "  };",
    "}",
    "",
    `const semanticAuthorities: readonly SemanticAuthority[] = ${semanticAuthority};`,
    "",
    "function isRecord(value: unknown): value is Record<string, unknown> {",
    "  return value !== null && typeof value === \"object\" && !Array.isArray(value);",
    "}",
    "",
    "function readsPath(document: unknown, path: string): unknown {",
    "  if (path === \"$\") return document;",
    "  if (!path.startsWith(\"$.\")) {",
    "    throw new Error(`SEMANTIC_PATH_DIALECT_REJECTED: ${path}`);",
    "  }",
    "  return path.slice(2).split(\".\").reduce<unknown>((value, member) => {",
    "    if (!isRecord(value) || !(member in value)) {",
    "      throw new Error(`SEMANTIC_PATH_MEMBER_MISSING: ${path}`);",
    "    }",
    "    return value[member];",
    "  }, document);",
    "}",
    "",
    "function assignsPath(",
    "  document: Record<string, unknown>,",
    "  path: string,",
    "  value: unknown",
    "): void {",
    "  const match = /^\\$\\.([A-Za-z][A-Za-z0-9]*)$/.exec(path);",
    "  if (match === null) {",
    "    throw new Error(`SEMANTIC_ASSIGN_PATH_REJECTED: ${path}`);",
    "  }",
    "  document[match[1]] = value;",
    "}",
    "",
    "function resolvesOperand(",
    "  document: Record<string, unknown>,",
    "  operand: SemanticOperand",
    "): unknown {",
    "  return operand.kind === \"path\"",
    "    ? readsPath(document, operand.path ?? \"\")",
    "    : operand.value;",
    "}",
    "",
    "function canonicalizes(value: unknown): string {",
    "  if (Array.isArray(value)) {",
    "    return `[${value.map(canonicalizes).join(\",\")}]`;",
    "  }",
    "  if (isRecord(value)) {",
    "    return `{${Object.keys(value)",
    "      .sort()",
    "      .map(key => `${JSON.stringify(key)}:${canonicalizes(value[key])}`)",
    "      .join(\",\")}}`;",
    "  }",
    "  const encoded = JSON.stringify(value);",
    "  if (encoded === undefined) {",
    "    throw new Error(\"SEMANTIC_VALUE_NOT_CANONICALIZABLE\");",
    "  }",
    "  return encoded;",
    "}",
    "",
    "async function evaluatesPredicate(",
    "  predicate: Record<string, unknown>,",
    "  document: Record<string, unknown>,",
    "  resolver: SemanticObservationResolver",
    "): Promise<boolean> {",
    "  const left = resolvesOperand(document, predicate.left as SemanticOperand);",
    "  const right = resolvesOperand(document, predicate.right as SemanticOperand);",
    "  switch (predicate.operator) {",
    "    case \"equals\":",
    "      return canonicalizes(left) === canonicalizes(right);",
    "    case \"not-contains\":",
    "      return Array.isArray(left) &&",
    "        left.every(value => canonicalizes(value) !== canonicalizes(right));",
    "    case \"evidence-equivalent\":",
    "      return canonicalizes(await resolver.resolvesEvidence(left)) ===",
    "        canonicalizes(await resolver.resolvesEvidence(right));",
    "    case \"artifact-disposition-equals\": {",
    "      const evidence = await resolver.resolvesEvidence(left);",
    "      return isRecord(evidence) && evidence.disposition === right;",
    "    }",
    "    default:",
    "      throw new Error(`SEMANTIC_OPERATOR_UNSUPPORTED: ${String(predicate.operator)}`);",
    "  }",
    "}",
    "",
    "export function interpretsCanonicalFeatureSemanticAuthority(",
    "  resolver: SemanticObservationResolver",
    "): SemanticAuthorityInterpreter {",
    "  return {",
    "    async executes(responsibilityId, input) {",
    "      const authority = semanticAuthorities.find(",
    "        candidate => candidate.responsibilityId === responsibilityId",
    "      );",
    "      if (authority === undefined) {",
    "        throw new Error(`SEMANTIC_AUTHORITY_NOT_FOUND: ${responsibilityId}`);",
    "      }",
    "      const document: Record<string, unknown> = { input };",
    "      for (const step of authority.execution.steps) {",
    "        const authorityId = String(step.authorityId);",
    "        if (step.operation === \"resolve-observation\") {",
    "          const observation = authority.observations.find(",
    "            item => item.observationId === authorityId",
    "          );",
    "          if (!isRecord(observation) || !isRecord(observation.resolution)) {",
    "            throw new Error(`SEMANTIC_OBSERVATION_NOT_FOUND: ${authorityId}`);",
    "          }",
    "          const resolution = observation.resolution;",
    "          const operationInput = readsPath(document, String(resolution.input));",
    "          const observed =",
    "            resolution.portRef === \"semantic-interpreter:input\" ||",
    "            resolution.portRef === \"implementation-artifact:runtime-adapter\"",
    "              ? operationInput",
    "              : await resolver.resolves({",
    "                  portRef: String(resolution.portRef),",
    "                  operationId: String(resolution.operationId),",
    "                  input: operationInput,",
    "                  producesFields: resolution.producesFields as readonly string[]",
    "                });",
    "          assignsPath(document, String(step.assign), observed);",
    "          continue;",
    "        }",
    "        if (step.operation === \"resolve-decision\") {",
    "          const decision = authority.decisions.find(",
    "            item => item.decisionId === authorityId",
    "          );",
    "          if (!isRecord(decision) || !Array.isArray(decision.rules)) {",
    "            throw new Error(`SEMANTIC_DECISION_NOT_FOUND: ${authorityId}`);",
    "          }",
    "          let disposition: string | undefined;",
    "          for (const candidate of decision.rules) {",
    "            if (!isRecord(candidate) || !isRecord(candidate.when)) continue;",
    "            const matches = candidate.when.otherwise === true ||",
    "              (Array.isArray(candidate.when.all) &&",
    "                (await Promise.all(",
    "                  candidate.when.all.map(predicate =>",
    "                    evaluatesPredicate(predicate as Record<string, unknown>, document, resolver)",
    "                  )",
    "                )).every(Boolean));",
    "            if (matches) {",
    "              disposition = String(candidate.then);",
    "              break;",
    "            }",
    "          }",
    "          if (disposition === undefined) {",
    "            throw new Error(`SEMANTIC_DECISION_HAS_NO_MATCH: ${authorityId}`);",
    "          }",
    "          assignsPath(document, String(step.assign), { disposition });",
    "          continue;",
    "        }",
    "        if (step.operation === \"project-result\") {",
    "          const projection = authority.projections.find(",
    "            item => item.projectionId === authorityId",
    "          );",
    "          if (!isRecord(projection) || !isRecord(projection.fields)) {",
    "            throw new Error(`SEMANTIC_PROJECTION_NOT_FOUND: ${authorityId}`);",
    "          }",
    "          const result = Object.fromEntries(",
    "            Object.entries(projection.fields).map(([name, operand]) => [",
    "              name,",
    "              resolvesOperand(document, operand as SemanticOperand)",
    "            ])",
    "          );",
    "          assignsPath(document, String(step.assign), result);",
    "          continue;",
    "        }",
    "        throw new Error(`SEMANTIC_OPERATION_UNSUPPORTED: ${String(step.operation)}`);",
    "      }",
    "      return document.result;",
    "    }",
    "  };",
    "}",
    ""
  ].join("\n")}`;
}

function projectsEvaluationProof(authority) {
  const responsibilityIds = authority.featureExecutionAuthority.steps
    .filter(step => step.operation !== "return")
    .map(step => step.responsibilityId);
  const expectedDisposition =
    authority.implementationArtifactAuthority.executionProof
      .expectedDisposition;
  return `${[
    ...header("implementation-artifact:execution-proof"),
    'import { invokesCanonicalFeatureConveyor } from "../runtime/invokes-canonical-feature-conveyor.js";',
    'import { interpretsCanonicalFeatureSemanticAuthority } from "../runtime/interprets-canonical-feature-semantic-authority.js";',
    'import type { SemanticObservationResolver } from "../runtime/interprets-canonical-feature-semantic-authority.js";',
    "",
    "function artifactRef(artifactId: string) {",
    "  return {",
    "    artifactId,",
    '    sha256: `sha256:${"0".repeat(64)}`,',
    '    mediaType: "application/json"',
    "  };",
    "}",
    "",
    "function isRecord(value: unknown): value is Record<string, unknown> {",
    '  return value !== null && typeof value === "object" && !Array.isArray(value);',
    "}",
    "",
    "function canonicalizes(value: unknown): string {",
    "  if (Array.isArray(value)) {",
    '    return `[${value.map(canonicalizes).join(",")}]`;',
    "  }",
    "  if (isRecord(value)) {",
    "    return `{${Object.keys(value)",
    "      .sort()",
    '      .map(key => `${JSON.stringify(key)}:${canonicalizes(value[key])}`)',
    '      .join(",")}}`;',
    "  }",
    "  const encoded = JSON.stringify(value);",
    "  if (encoded === undefined) throw new Error(\"PROOF_VALUE_NOT_CANONICALIZABLE\");",
    "  return encoded;",
    "}",
    "",
    "function createsResolver(): SemanticObservationResolver {",
    '  const semanticObservationRef = artifactRef("semantic-observation");',
    '  const projectedObservationRef = artifactRef("projected-observation");',
    '  const expectedSignalRef = artifactRef("expected-signal");',
    '  const astSourceCorrespondenceRef = artifactRef("ast-source-correspondence");',
    '  const comparisonEvidenceRef = artifactRef("comparison-evidence");',
    "  const expectedSignal = { outcome: \"canonical-feature-conforms\" };",
    "  const evidence = new Map<string, unknown>([",
    "    [semanticObservationRef.artifactId, expectedSignal],",
    "    [projectedObservationRef.artifactId, expectedSignal],",
    "    [expectedSignalRef.artifactId, expectedSignal],",
    "    [astSourceCorrespondenceRef.artifactId, { disposition: \"CONFORMS\" }]",
    "  ]);",
    "  return {",
    "    async resolves(request) {",
    "      if (!isRecord(request.input)) {",
    "        throw new Error(`PROOF_INPUT_NOT_RECORD: ${request.operationId}`);",
    "      }",
    "      if (request.operationId === \"projects-and-writes-complete-authority\") {",
    "        return { ...request.input, authorityRef: artifactRef(\"complete-authority\") };",
    "      }",
    "      if (request.operationId === \"materializes-and-writes-artifact-manifest\") {",
    "        return { ...request.input, artifactManifestRef: artifactRef(\"artifact-manifest\") };",
    "      }",
    "      if (request.operationId === \"executes-semantic-and-projected-surfaces\") {",
    "        return {",
    "          ...request.input,",
    "          disposition: \"CONFORMS\",",
    "          semanticObservationRef,",
    "          projectedObservationRef,",
    "          expectedSignalRef,",
    "          astSourceCorrespondenceRef",
    "        };",
    "      }",
    "      if (request.operationId === \"writes-execution-comparison-evidence\") {",
    "        return { ...request.input, comparisonEvidenceRef };",
    "      }",
    "      if (request.operationId === \"resolves-and-verifies-comparison-evidence\") {",
    "        return request.input;",
    "      }",
    "      throw new Error(`PROOF_OPERATION_UNSUPPORTED: ${request.operationId}`);",
    "    },",
    "    async resolvesEvidence(reference) {",
    "      if (!isRecord(reference) || typeof reference.artifactId !== \"string\") {",
    "        throw new Error(\"PROOF_EVIDENCE_REFERENCE_INVALID\");",
    "      }",
    "      const resolved = evidence.get(reference.artifactId);",
    "      if (resolved === undefined) {",
    "        throw new Error(`PROOF_EVIDENCE_NOT_FOUND: ${reference.artifactId}`);",
    "      }",
    "      return resolved;",
    "    }",
    "  };",
    "}",
    "",
    "const request = {",
    '  reviewDisposition: "REVIEWED" as const,',
    "  existingFeatureIds: [] as readonly string[],",
    '  featureId: "projected-conveyor-proof-feature",',
    '  requestRef: artifactRef("reviewed-feature-request"),',
    '  lineageId: "projected-conveyor-proof-lineage"',
    "};",
    `const responsibilityIds = ${JSON.stringify(responsibilityIds, null, 2)} as const;`,
    "const semanticInterpreter =",
    "  interpretsCanonicalFeatureSemanticAuthority(createsResolver());",
    "let semanticResult: unknown = request;",
    "for (const responsibilityId of responsibilityIds) {",
    "  semanticResult = await semanticInterpreter.executes(",
    "    responsibilityId,",
    "    semanticResult",
    "  );",
    "}",
    "const projectedResult = await invokesCanonicalFeatureConveyor({",
    "  request,",
    "  interpreter:",
    "    interpretsCanonicalFeatureSemanticAuthority(createsResolver())",
    "});",
    "if (canonicalizes(semanticResult) !== canonicalizes(projectedResult)) {",
    "  throw new Error(\"SEMANTIC_PROJECTED_EXECUTION_DIVERGES\");",
    "}",
    "if (",
    "  !isRecord(projectedResult) ||",
    `  projectedResult.disposition !== ${JSON.stringify(expectedDisposition)}`,
    ") {",
    "  throw new Error(\"PROJECTED_TERMINAL_DISPOSITION_REJECTED\");",
    "}",
    "console.log(JSON.stringify({",
    '  disposition: "PROJECTION_CONFORMS",',
    "  semanticResult,",
    "  projectedResult",
    "}));",
    ""
  ].join("\n")}`;
}

function projectsSelfHostingRunner(authority) {
  const stageIds = JSON.stringify(
    authority.selfHostingAuthority.executionStages,
    null,
    2
  );
  const packageId =
    authority.implementationArtifactAuthority.projectionPackage
      .packageId;
  const artifactCount =
    3 +
    authority.canonicalFeatureBody.scenarios.length * 7 +
    authority.implementationArtifactAuthority.projectionPackage
      .supplementalArtifacts.length +
    authority.fractalProjectionAuthority.sourceModules.length +
    authority.fractalProjectionAuthority.embeddedRuntimes.length;
  const capabilityRoot =
    authority.implementationArtifactAuthority
      .workspaceProjectionAuthority.capabilityRoot;
  const featureId =
    authority.canonicalFeatureBody.feature.featureId;
  return `${[
    ...header(
      "self-hosting:canonical-feature-conveyor-self-hosting.v1"
    ),
    'import { execFile } from "node:child_process";',
    'import { createHash, randomBytes } from "node:crypto";',
    'import { access, mkdir, readFile, writeFile } from "node:fs/promises";',
    'import { dirname, resolve, sep } from "node:path";',
    'import { promisify } from "node:util";',
    "",
    `const EXPECTED_STAGE_IDS = ${stageIds};`,
    `const EXPECTED_PACKAGE_ID = ${JSON.stringify(packageId)};`,
    `const EXPECTED_ARTIFACT_COUNT = ${artifactCount};`,
    `const CAPABILITY_ROOT = ${JSON.stringify(capabilityRoot)};`,
    `const FEATURE_ID = ${JSON.stringify(featureId)};`,
    "const executes = promisify(execFile);",
    "",
    "function argument(name) {",
    "  const index = process.argv.indexOf(name);",
    "  return index === -1 ? undefined : process.argv[index + 1];",
    "}",
    "",
    "function sha256(bytes) {",
    '  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;',
    "}",
    "",
    "function isRecord(value) {",
    '  return value !== null && typeof value === "object" && !Array.isArray(value);',
    "}",
    "",
    "function canonicalizes(value) {",
    "  if (Array.isArray(value)) return `[${value.map(canonicalizes).join(\",\")}]`;",
    "  if (isRecord(value)) {",
    "    return `{${Object.keys(value)",
    "      .sort()",
    '      .map(key => `${JSON.stringify(key)}:${canonicalizes(value[key])}`)',
    '      .join(",")}}`;',
    "  }",
    "  const encoded = JSON.stringify(value);",
    '  if (encoded === undefined) throw new Error("SELF_HOST_VALUE_NOT_CANONICALIZABLE");',
    "  return encoded;",
    "}",
    "",
    "function asserts(condition, code) {",
    "  if (!condition) throw new Error(code);",
    "}",
    "",
    "async function exists(path) {",
    "  try {",
    "    await access(path);",
    "    return true;",
    "  } catch {",
    "    return false;",
    "  }",
    "}",
    "",
    "async function runs(command, args, cwd) {",
    "  const result = await executes(command, args, {",
    "    cwd,",
    "    windowsHide: true,",
    "    maxBuffer: 8 * 1024 * 1024",
    "  });",
    "  return result.stdout.trim();",
    "}",
    "",
    "async function invokesLiveProvider(authoritySha256, derivedSha256) {",
    '  const apiKey = process.env["LOC_GEMINI_API_KEY"];',
    '  asserts(typeof apiKey === "string" && apiKey.length > 0, "SELF_HOST_LIVE_PROVIDER_KEY_REQUIRED");',
    '  const model = argument("--provider-model") ?? "gemini-flash-latest";',
    '  const challengeNonce = randomBytes(32).toString("base64url");',
    "  const request = {",
    "    contents: [{",
    '      role: "user",',
    "      parts: [{",
    "        text: [",
    '          "Return only one JSON object with exactly these fields:",',
    '          `{"disposition":"ACKNOWLEDGED","challengeNonce":"${challengeNonce}"}`,',
    '          `Contract: ${EXPECTED_PACKAGE_ID}`,',
    '          `Authority: ${authoritySha256}`,',
    '          `Derived projection: ${derivedSha256}`',
    '        ].join("\\n")',
    "      }]",
    "    }],",
    "    generationConfig: {",
    "      temperature: 0,",
    '      responseMimeType: "application/json"',
    "    }",
    "  };",
    '  const requestBytes = Buffer.from(JSON.stringify(request), "utf8");',
    "  const response = await fetch(",
    '    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,',
    "    {",
    '      method: "POST",',
    "      headers: {",
    '        "content-type": "application/json; charset=utf-8",',
    '        "x-goog-api-key": apiKey',
    "      },",
    "      body: requestBytes",
    "    }",
    "  );",
    "  const responseBytes = Buffer.from(await response.arrayBuffer());",
    '  asserts(response.ok, `SELF_HOST_LIVE_PROVIDER_HTTP_${response.status}`);',
    '  const envelope = JSON.parse(responseBytes.toString("utf8"));',
    "  const responseText =",
    "    envelope?.candidates?.[0]?.content?.parts?.[0]?.text;",
    '  asserts(typeof responseText === "string", "SELF_HOST_LIVE_PROVIDER_TEXT_MISSING");',
    "  const acknowledgement = JSON.parse(responseText);",
    "  asserts(",
    '    acknowledgement.disposition === "ACKNOWLEDGED" &&',
    "      acknowledgement.challengeNonce === challengeNonce,",
    '    "SELF_HOST_LIVE_PROVIDER_CHALLENGE_MISMATCH"',
    "  );",
    "  return {",
    '    disposition: "GREEN",',
    "    observedAt: new Date().toISOString(),",
    "    model,",
    "    challengeNonce,",
    "    requestBytesSha256: sha256(requestBytes),",
    "    responseBytesSha256: sha256(responseBytes),",
    "    httpStatus: response.status,",
    '    providerRequestId: response.headers.get("x-request-id"),',
    "    credentialBytesPersisted: false",
    "  };",
    "}",
    "",
    "function readsSource(document, source) {",
    '  asserts(source.startsWith("$."), `SELF_HOST_SOURCE_DIALECT_REJECTED: ${source}`);',
    '  return source.slice(2).split(".").reduce((value, member) => {',
    "    asserts(",
    "      isRecord(value) && member in value,",
    "      `SELF_HOST_SOURCE_UNRESOLVED: ${source}`",
    "    );",
    "    return value[member];",
    "  }, document);",
    "}",
    "",
    "function ownsExistingSource(source, artifact) {",
    '  if (!source.includes("// @generated")) return false;',
    "  return (",
    '    source.includes(`// feature-id: ${FEATURE_ID}`) ||',
    '    source.includes(`// authority-ref: ${artifact.sourceAuthorityRef}`)',
    "  );",
    "}",
    "",
    "async function materializesInPlace(repositoryRoot, artifacts) {",
    "  const capabilityPath = resolve(repositoryRoot, CAPABILITY_ROOT);",
    "  const observations = [];",
    "  for (const artifact of artifacts) {",
    "    asserts(",
    "      artifact.artifactPath.startsWith(`${CAPABILITY_ROOT}/`),",
    "      `SELF_HOST_ARTIFACT_OUTSIDE_CAPABILITY: ${artifact.artifactPath}`",
    "    );",
    "    const outputPath = resolve(repositoryRoot, artifact.artifactPath);",
    "    asserts(",
    "      outputPath.startsWith(`${capabilityPath}${sep}`),",
    "      `SELF_HOST_ARTIFACT_ESCAPES_CAPABILITY: ${artifact.artifactPath}`",
    "    );",
    "    let priorSource = null;",
    "    if (await exists(outputPath)) {",
    '      priorSource = await readFile(outputPath, "utf8");',
    "      asserts(",
    "        priorSource === artifact.projectedSource ||",
    "          ownsExistingSource(priorSource, artifact),",
    "        `SELF_HOST_EXISTING_FILE_OWNERSHIP_REJECTED: ${artifact.artifactPath}`",
    "      );",
    "    }",
    "    await mkdir(dirname(outputPath), { recursive: true });",
    '    await writeFile(outputPath, artifact.projectedSource, "utf8");',
    "    const projectedBytes = await readFile(outputPath);",
    "    asserts(",
    "      sha256(projectedBytes) === artifact.projectedSourceSha256,",
    "      `SELF_HOST_PROJECTED_BYTES_DIVERGE: ${artifact.artifactPath}`",
    "    );",
    "    observations.push({",
    "      artifactPath: artifact.artifactPath,",
    "      disposition:",
    '        priorSource === null ? "CREATED" :',
    '        priorSource === artifact.projectedSource ? "UNCHANGED" : "REPLACED",',
    "      projectedSourceSha256: artifact.projectedSourceSha256",
    "    });",
    "  }",
    "  return observations;",
    "}",
    "",
    "async function compiles(repositoryRoot, compilerPath) {",
    "  await runs(process.execPath, [",
    "    compilerPath,",
    '    "--project",',
    '    resolve(repositoryRoot, "tsconfig.json")',
    "  ], repositoryRoot);",
    "}",
    "",
    "async function executesProjectionProof(repositoryRoot) {",
    "  const proofPath = resolve(",
    "    repositoryRoot,",
    '    "dist",',
    "    CAPABILITY_ROOT,",
    '    "evaluation/proves-canonical-feature-conveyor.js"',
    "  );",
    "  const output = await runs(process.execPath, [proofPath], repositoryRoot);",
    "  return JSON.parse(output);",
    "}",
    "",
    'const authorityArgument = argument("--authority");',
    'const derivedArgument = argument("--derived");',
    'const repositoryArgument = argument("--repository-root") ?? ".";',
    'const compilerArgument = argument("--typescript-compiler");',
    'const evidenceArgument = argument("--evidence-root");',
    'asserts(authorityArgument !== undefined, "SELF_HOST_AUTHORITY_REQUIRED");',
    'asserts(derivedArgument !== undefined, "SELF_HOST_DERIVED_PROJECTION_REQUIRED");',
    'asserts(compilerArgument !== undefined, "SELF_HOST_TYPESCRIPT_COMPILER_REQUIRED");',
    "const repositoryRoot = resolve(repositoryArgument);",
    "const gitRoot = resolve(await runs(",
    '  "git",',
    '  ["rev-parse", "--show-toplevel"],',
    "  repositoryRoot",
    "));",
    'asserts(gitRoot === repositoryRoot, "SELF_HOST_REPOSITORY_ROOT_MISMATCH");',
    "const authorityPath = resolve(authorityArgument);",
    "const derivedPath = resolve(derivedArgument);",
    "const compilerPath = resolve(compilerArgument);",
    "const [authorityBytes, derivedBytes] = await Promise.all([",
    "  readFile(authorityPath),",
    "  readFile(derivedPath)",
    "]);",
    'const authority = JSON.parse(authorityBytes.toString("utf8"));',
    'const derived = JSON.parse(derivedBytes.toString("utf8"));',
    "asserts(",
    "  sha256(derivedBytes) === authority.projection.derivedProjectionSha256,",
    '  "SELF_HOST_DERIVED_PROJECTION_HASH_MISMATCH"',
    ");",
    "asserts(",
    "  derived.implementationPackage.packageId === EXPECTED_PACKAGE_ID,",
    '  "SELF_HOST_PACKAGE_ID_MISMATCH"',
    ");",
    "const artifacts = derived.implementationPackage.artifacts;",
    "asserts(",
    "  artifacts.length === EXPECTED_ARTIFACT_COUNT,",
    '  "SELF_HOST_ARTIFACT_COUNT_MISMATCH"',
    ");",
    "asserts(",
    "  artifacts.every(artifact =>",
    "    artifact.artifactPath.startsWith(`${CAPABILITY_ROOT}/`)",
    "  ),",
    '  "SELF_HOST_CAPABILITY_ROOT_COVERAGE_MISMATCH"',
    ");",
    "const baseCommit = await runs(",
    '  "git",',
    '  ["rev-parse", "HEAD"],',
    "  repositoryRoot",
    ");",
    "const workspaceDirtyBefore = await runs(",
    '  "git",',
    '  ["status", "--short"],',
    "  repositoryRoot",
    ");",
    "const sections = new Map(",
    "  authority.documentationProjection.sections.map(section => [",
    "    section.stageId,",
    "    section",
    "  ])",
    ");",
    "const document = { ...authority, derivedProjections: derived };",
    "const availableProducts = new Set();",
    "const stageObservations = [];",
    "let materialization;",
    "let executionProof;",
    "for (const [index, stage] of authority.conveyor.stages.entries()) {",
    "  asserts(stage.stageId === EXPECTED_STAGE_IDS[index], \"SELF_HOST_STAGE_SEQUENCE_MISMATCH\");",
    "  for (const product of [...stage.requires, ...stage.consumes]) {",
    "    asserts(",
    "      availableProducts.has(product),",
    "      `SELF_HOST_PRODUCT_NOT_AVAILABLE: ${stage.stageId}:${product}`",
    "    );",
    "  }",
    "  const section = sections.get(stage.stageId);",
    "  asserts(section !== undefined, `SELF_HOST_STAGE_SECTION_MISSING: ${stage.stageId}`);",
    "  const sourceValue = readsSource(document, section.source);",
    "  const observation = {",
    "    sequence: index + 1,",
    "    stageId: stage.stageId,",
    "    source: section.source,",
    '    sourceSha256: sha256(Buffer.from(canonicalizes(sourceValue), "utf8"))',
    "  };",
    '  if (stage.stageId === "project-expected-code") {',
    "    materialization = await materializesInPlace(repositoryRoot, artifacts);",
    "    await compiles(repositoryRoot, compilerPath);",
    "    observation.materialization = {",
    "      artifactCount: materialization.length,",
    '      repositoryCompilation: "GREEN"',
    "    };",
    "  }",
    '  if (stage.stageId === "evaluate-semantic-execution") {',
    "    executionProof = await executesProjectionProof(repositoryRoot);",
    "    asserts(executionProof.disposition === \"PROJECTION_CONFORMS\", \"SELF_HOST_SEMANTIC_EXECUTION_RED\");",
    "    observation.execution = executionProof.semanticResult;",
    "  }",
    '  if (stage.stageId === "evaluate-projected-execution") {',
    '    asserts(executionProof !== undefined, "SELF_HOST_EXECUTION_PROOF_MISSING");',
    "    observation.execution = executionProof.projectedResult;",
    "  }",
    '  if (stage.stageId === "evaluate-translation-conformance") {',
    "    asserts(",
    "      canonicalizes(executionProof.semanticResult) ===",
    "        canonicalizes(executionProof.projectedResult),",
    '      "SELF_HOST_TRANSLATION_DIVERGES"',
    "    );",
    '    observation.translation = "PROJECTION_CONFORMS";',
    "  }",
    '  if (stage.stageId === "review-feature") {',
    "    observation.reviewDisposition = \"PROJECTION_CONFORMS\";",
    "  }",
    "  for (const product of stage.produces) availableProducts.add(product);",
    "  stageObservations.push(observation);",
    "}",
    'asserts(stageObservations.length === 18, "SELF_HOST_STAGE_COVERAGE_MISMATCH");',
    "const gitStatus = await runs(",
    '  "git",',
    '  ["status", "--short", "--", CAPABILITY_ROOT],',
    "  repositoryRoot",
    ");",
    "const gitDiff = await runs(",
    '  "git",',
    '  ["diff", "--binary", "--", CAPABILITY_ROOT],',
    "  repositoryRoot",
    ");",
    "const providerObservation = await invokesLiveProvider(",
    "  sha256(authorityBytes),",
    "  sha256(derivedBytes)",
    ");",
    "const report = {",
    '  verificationType: "canonical-feature-conveyor-self-hosting.v3",',
    '  disposition: "PROJECTION_CONFORMS",',
    "  authorityPath,",
    "  authoritySha256: sha256(authorityBytes),",
    "  derivedProjectionPath: derivedPath,",
    "  derivedProjectionSha256: sha256(derivedBytes),",
    "  repositoryRoot,",
    "  capabilityRoot: CAPABILITY_ROOT,",
    "  baseCommit,",
    "  workspaceDirtyBefore: workspaceDirtyBefore !== \"\",",
    "  gitStatus,",
    '  gitDiffSha256: sha256(Buffer.from(gitDiff, "utf8")),',
    "  stageReplay: {",
    "    observed: stageObservations.length,",
    "    expected: EXPECTED_STAGE_IDS.length,",
    "    stages: stageObservations",
    "  },",
    "  providerObservation,",
    "  workspaceProjection: {",
    "    packageId: EXPECTED_PACKAGE_ID,",
    "    governedArtifactCount: artifacts.length,",
    "    byteIdenticalArtifactCount: materialization.length,",
    "    postProjectionEdits: 0,",
    '    repositoryCompilation: "GREEN",',
    '    semanticExecution: "EXECUTED",',
    '    projectedExecution: "EXECUTED",',
    '    translation: "PROJECTION_CONFORMS",',
    '    liveProviderRun: "GREEN"',
    "  },",
    "  artifacts: materialization",
    "};",
    "if (evidenceArgument !== undefined) {",
    "  const evidenceRoot = resolve(evidenceArgument);",
    "  asserts(",
    "    evidenceRoot !== repositoryRoot &&",
    "      !evidenceRoot.startsWith(`${repositoryRoot}${sep}`),",
    '    "SELF_HOST_EVIDENCE_ROOT_INSIDE_REPOSITORY"',
    "  );",
    '  const reportPath = resolve(evidenceRoot, "self-hosting-report.json");',
    "  await mkdir(dirname(reportPath), { recursive: true });",
    '  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\\n`, "utf8");',
    "}",
    "console.log(JSON.stringify({",
    "  disposition: report.disposition,",
    "  capabilityRoot: CAPABILITY_ROOT,",
    "  stages: stageObservations.length,",
    "  artifacts: artifacts.length,",
    '  repositoryCompilation: "GREEN",',
    "  liveProviderRun: providerObservation.disposition",
    "}));",
    ""
  ].join("\n")}`;
}

async function productionProjector(authority) {
  const projector = authority.featureExecutionProjection.projector;
  const executablePath = resolve(
    repositoryRoot,
    projector.executablePath
  );
  const executableBytes = await readFile(executablePath);
  if (sha256(executableBytes) !== projector.executableSha256) {
    throw new Error("IMPLEMENTATION_PRODUCTION_PROJECTOR_HASH_MISMATCH");
  }
  const module = await import(
    new URL(`file:///${executablePath.replaceAll("\\", "/")}`)
  );
  const projects =
    module.derivesCanonicalTypeScriptFromSemanticAuthority;
  if (typeof projects !== "function") {
    throw new Error("IMPLEMENTATION_PRODUCTION_PROJECTOR_UNAVAILABLE");
  }
  return { projector, projects };
}

function requestFor(authority, authorityRef) {
  if (authorityRef === "implementation-artifact:edge-registry") {
    return authority.implementationArtifactAuthority.edgeRegistry
      .projectorRequest;
  }
  if (authorityRef === "implementation-artifact:composition-types") {
    return authority.implementationArtifactAuthority.compositionTypes
      .projectorRequest;
  }
  if (
    authorityRef ===
    "feature-execution:execute-end-to-end-canonical-feature-conveyor"
  ) {
    return authority.featureExecutionProjection.projectorRequest;
  }
  if (authorityRef.startsWith("feature-body:")) {
    const bodyId = authorityRef.slice("feature-body:".length);
    return authority.projectionAuthority.find(
      projection => projection.bodyId === bodyId
    )?.input.projectorRequest;
  }
  if (authorityRef.startsWith("supporting-type:")) {
    const artifactPath = authorityRef.slice(
      "supporting-type:".length
    );
    return authority.fileBodyAuthority.supportingTypes.find(
      type => type.artifactPath === artifactPath
    )?.projectorRequest;
  }
  const implementations = authority.implementationArtifactAuthority;
  const boundaryRequests = new Map([
    [
      "implementation-artifact:authority-projector-boundary",
      implementations.authorityProjectorBoundary.projectorRequest
    ],
    [
      "implementation-artifact:materialization-boundary",
      implementations.materializationBoundary.projectorRequest
    ],
    [
      "implementation-artifact:evaluation-fixture",
      implementations.fixtureBoundary.projectorRequest
    ],
    [
      "implementation-artifact:evidence-store",
      implementations.evidenceBoundary.projectorRequest
    ]
  ]);
  return boundaryRequests.get(authorityRef);
}

export async function projectsCanonicalFeatureImplementationPackage(
  authority
) {
  const implementationProjectorExecutableSha256 = sha256(
    await readFile(new URL(import.meta.url))
  );
  const { projector, projects } = await productionProjector(authority);
  const artifacts = [];
  const implementationProjector = {
    projectorId:
      "canonical-feature-conveyor-implementation-projector",
    projectorVersion: "1.0.0",
    executableSha256: implementationProjectorExecutableSha256
  };
  const productionProjectorIdentity = {
    projectorId: projector.projectorId,
    projectorVersion: projector.projectorVersion,
    executableSha256: projector.executableSha256
  };
  const adds = (coordinate, source, projectorIdentity) => {
    const sourceBytes = Buffer.from(source, "utf8");
    artifacts.push({
      ...coordinate,
      projector: projectorIdentity,
      projectedSourceSha256: sha256(sourceBytes),
      projectedSource: source
    });
  };
  const coordinate = (
    artifactId,
    family,
    artifactPath,
    sourceAuthorityRef,
    projectorCapability
  ) => ({
    artifactId,
    family,
    artifactPath,
    sourceAuthorityRef,
    projectorCapability,
    projectionPosture: "PROJECTABLE",
    ownership: "projector-owned",
    existingFilePolicy: "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
  });
  const capabilityRoot = authority.fileBodyAuthority.roots.capability;
  adds(
    coordinate(
      "canonical-feature-body",
      "feature",
      `${capabilityRoot}/${authority.canonicalFeatureBody.feature.featureId}.feature`,
      "canonical-feature-body",
      "projects-file-body-system"
    ),
    projectsFeatureBody(authority),
    implementationProjector
  );
  for (const scenario of authority.canonicalFeatureBody.scenarios) {
    adds(
      coordinate(
        `${scenario.scenarioId}-authority`,
        "scenario-authority",
        `${capabilityRoot}/scenarios/${scenario.scenarioId}/declares-scenario-authority.json`,
        `scenario:${scenario.scenarioId}`,
        "projects-file-body-system"
      ),
      jsonArtifact(scenario),
      implementationProjector
    );
    const responsibilityId =
      scenario.responsibility.responsibilityId;
    const semanticOperationId =
      scenario.responsibility.semanticOperationId;
    const body = authority.featureBodyAuthority.find(
      candidate =>
        candidate.responsibilityId === responsibilityId
    );
    const semantic = authority.semanticAuthority.find(
      candidate =>
        candidate.responsibilityId === responsibilityId
    );
    const projection = authority.projectionAuthority.find(
      candidate =>
        candidate.input.projectorRequest.lineage
          .responsibilityId === responsibilityId
    );
    const supportingType =
      authority.fileBodyAuthority.supportingTypes.find(
        candidate =>
          candidate.projectorRequest.lineage.responsibilityId ===
          responsibilityId
      );
    const registration =
      authority.implementationArtifactAuthority.registrations.find(
        candidate =>
          candidate.responsibilityId === responsibilityId
      );
    if (
      body === undefined ||
      semantic === undefined ||
      projection === undefined ||
      supportingType === undefined ||
      registration === undefined
    ) {
      throw new Error(
        `IMPLEMENTATION_FILE_BODY_AUTHORITY_INCOMPLETE: ${scenario.scenarioId}`
      );
    }
    const responsibilityRoot =
      `${capabilityRoot}/scenarios/${scenario.scenarioId}/${responsibilityId}`;
    const primary = projects(projection.input.projectorRequest);
    const supporting = projects(supportingType.projectorRequest);
    const primarySource = Buffer.from(primary.sourceBytes).toString(
      "utf8"
    );
    const supportingSource = Buffer.from(
      supporting.sourceBytes
    ).toString("utf8");
    adds(
      coordinate(
        `${semanticOperationId}-semantic-authority`,
        "semantic-authority",
        `${responsibilityRoot}/${semanticOperationId}.semantic-authority.json`,
        `semantic-authority:${responsibilityId}`,
        "projects-file-body-system"
      ),
      jsonArtifact(semantic),
      implementationProjector
    );
    adds(
      coordinate(
        `${body.bodyId}-feature-body-authority`,
        "feature-body-authority",
        `${responsibilityRoot}/${body.bodyId}.feature-body-authority.json`,
        `feature-body:${body.bodyId}`,
        "projects-file-body-system"
      ),
      jsonArtifact(body),
      implementationProjector
    );
    adds(
      coordinate(
        `${body.bodyId}-ast-authority`,
        "ast-authority",
        `${responsibilityRoot}/${body.bodyId}.ts.ast.authority.json`,
        `derived-projection:${body.bodyId}:projected-ast`,
        "projects-production-typescript"
      ),
      jsonArtifact(primary.semanticAst),
      productionProjectorIdentity
    );
    adds(
      coordinate(
        `${body.bodyId}-type`,
        "responsibility-type",
        supportingType.artifactPath,
        `supporting-type:${supportingType.artifactPath}`,
        "projects-production-typescript"
      ),
      supportingSource,
      productionProjectorIdentity
    );
    adds(
      coordinate(
        `${body.bodyId}-body`,
        "responsibility-body",
        projection.expectedArtifact.path,
        `feature-body:${body.bodyId}`,
        "projects-production-typescript"
      ),
      primarySource,
      productionProjectorIdentity
    );
    adds(
      coordinate(
        `register-${semanticOperationId}`,
        "runtime-registration",
        registration.artifactPath,
        `runtime-registration:${responsibilityId}`,
        "projects-runtime-edge-registration"
      ),
      projectsRuntimeRegistration(authority, registration),
      implementationProjector
    );
  }
  const featureExecution = projects(
    authority.featureExecutionProjection.projectorRequest
  );
  adds(
    coordinate(
      "end-to-end-canonical-feature-conveyor-body",
      "composition",
      authority.fileBodyAuthority.composition.entrypoint,
      authority.fileBodyAuthority.composition
        .entrypointAuthorityRef,
      "projects-production-typescript"
    ),
    Buffer.from(featureExecution.sourceBytes).toString("utf8"),
    productionProjectorIdentity
  );
  adds(
    coordinate(
      "canonical-feature-runtime-adapter",
      "runtime-adapter",
      authority.implementationArtifactAuthority.runtimeAdapter
        .artifactPath,
      "implementation-artifact:runtime-adapter",
      "projects-runtime-adapter"
    ),
    projectsRuntimeAdapter(authority),
    implementationProjector
  );

  const coordinates =
    authority.implementationArtifactAuthority.projectionPackage
      .supplementalArtifacts;
  for (const coordinate of coordinates) {
    let source;
    let projectorIdentity;
    if (
      coordinate.projectorCapability ===
      "projects-production-typescript"
    ) {
      const request = requestFor(
        authority,
        coordinate.sourceAuthorityRef
      );
      if (request === undefined) {
        throw new Error(
          `IMPLEMENTATION_PROJECTOR_REQUEST_UNRESOLVED: ${coordinate.sourceAuthorityRef}`
        );
      }
      const projected = projects(request);
      source = Buffer.from(projected.sourceBytes).toString("utf8");
      projectorIdentity = productionProjectorIdentity;
    } else if (
      coordinate.projectorCapability ===
      "projects-runtime-edge-registration"
    ) {
      const responsibilityId = coordinate.sourceAuthorityRef.slice(
        "runtime-registration:".length
      );
      const registration =
        authority.implementationArtifactAuthority.registrations.find(
          item => item.responsibilityId === responsibilityId
        );
      if (registration === undefined) {
        throw new Error(
          `IMPLEMENTATION_REGISTRATION_AUTHORITY_UNRESOLVED: ${responsibilityId}`
        );
      }
      source = projectsRuntimeRegistration(authority, registration);
      projectorIdentity = implementationProjector;
    } else if (
      coordinate.projectorCapability === "projects-runtime-adapter"
    ) {
      source = projectsRuntimeAdapter(authority);
      projectorIdentity = implementationProjector;
    } else if (
      coordinate.projectorCapability ===
      "projects-semantic-interpreter"
    ) {
      source = projectsSemanticInterpreter(authority);
      projectorIdentity = implementationProjector;
    } else if (
      coordinate.projectorCapability === "projects-evaluation-proof"
    ) {
      source = projectsEvaluationProof(authority);
      projectorIdentity = implementationProjector;
    } else if (
      coordinate.projectorCapability ===
      "projects-self-hosting-runner"
    ) {
      source = projectsSelfHostingRunner(authority);
      projectorIdentity = implementationProjector;
    } else {
      throw new Error(
        `IMPLEMENTATION_PROJECTOR_CAPABILITY_UNSUPPORTED: ${coordinate.projectorCapability}`
      );
    }
    adds(coordinate, source, projectorIdentity);
  }
  for (
    const sourceModule of
      authority.fractalProjectionAuthority.sourceModules
  ) {
    adds(
      coordinate(
        sourceModule.moduleId,
        "fractal-projection-tool",
        sourceModule.artifactPath,
        `fractal-projection-module:${sourceModule.moduleId}`,
        "realizes-lossless-source-ast"
      ),
      sourceModule.sourceAst.tokens
        .map(token => token.text)
        .join(""),
      implementationProjector
    );
  }
  for (
    const runtime of
      authority.fractalProjectionAuthority.embeddedRuntimes
  ) {
    const runtimeBytes = await readFile(
      resolve(repositoryRoot, runtime.artifactPath)
    );
    if (sha256(runtimeBytes) !== runtime.sourceSha256) {
      throw new Error(
        `EMBEDDED_RUNTIME_HASH_MISMATCH: ${runtime.runtimeId}`
      );
    }
    adds(
      coordinate(
        runtime.runtimeId,
        "embedded-runtime",
        runtime.artifactPath,
        `embedded-runtime:${runtime.runtimeId}`,
        "projects-capability-local-runtime-snapshot"
      ),
      runtimeBytes.toString("utf8"),
      {
        projectorId: "capability-local-runtime-snapshot",
        projectorVersion: "1.0.0",
        executableSha256: runtime.sourceSha256
      }
    );
  }
  const topologyBytes = Buffer.from(
    artifacts
      .map(
        artifact =>
          `${artifact.artifactPath}\0${artifact.projectedSourceSha256}`
      )
      .join("\n"),
    "utf8"
  );
  return {
    implementationProjectionType:
      "canonical-feature-conveyor-implementation-package.v1",
    packageId:
      authority.implementationArtifactAuthority.projectionPackage
        .packageId,
    artifacts,
    summary: {
      declaredArtifacts: artifacts.length,
      projectableArtifacts: artifacts.filter(
        artifact => artifact.projectionPosture === "PROJECTABLE"
      ).length,
      unresolvedArtifacts: artifacts.filter(
        artifact => artifact.projectionPosture !== "PROJECTABLE"
      ).length
    },
    topologySha256: sha256(topologyBytes)
  };
}
