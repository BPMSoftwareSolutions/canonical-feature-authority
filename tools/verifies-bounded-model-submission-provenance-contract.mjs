import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const repositoryRoot = resolve(import.meta.dirname, "..");
const rootArgument = process.argv.indexOf("--root");
const root =
  rootArgument === -1
    ? repositoryRoot
    : resolve(process.argv[rootArgument + 1]);
const featureId =
  "prove-bounded-model-submission-provenance-under-independent-trust";
const capabilityRoot = resolve(root, "capabilities", featureId);
const schemaNames = [
  "independent-provider-exchange-attestation.schema.json",
  "bounded-model-submission-body-reproduction.schema.json",
  "bounded-model-submission-execution-observation.schema.json",
  "complete-bounded-model-submission-lineage.schema.json",
  "bounded-model-submission-acceptance-disposition.schema.json"
];
const artifactTypes = [
  "independent-provider-exchange-attestation",
  "bounded-model-submission-body-reproduction",
  "bounded-model-submission-execution-observation",
  "complete-bounded-model-submission-lineage",
  "bounded-model-submission-acceptance-disposition"
];
const sha = `sha256:${"1".repeat(64)}`;

function canonicalizes(value) {
  if (Array.isArray(value)) {
    return `[${value.map(canonicalizes).join(",")}]`;
  }
  if (value !== null && typeof value === "object") {
    return `{${Object.keys(value)
      .sort()
      .map(key => `${JSON.stringify(key)}:${canonicalizes(value[key])}`)
      .join(",")}}`;
  }
  return JSON.stringify(value);
}

function digest(value) {
  return `sha256:${createHash("sha256")
    .update(canonicalizes(value))
    .digest("hex")}`;
}

async function readsJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

async function discoversFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await discoversFiles(path));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const baseSchema = await readsJson(
  resolve(repositoryRoot, "schemas/embedded-provenance.schema.json")
);
const catalog = await readsJson(
  resolve(repositoryRoot, "schemas/embedded-provenance-schema-catalog.json")
);
const registeredTypes = baseSchema.$defs.artifactType.enum;
for (const artifactType of artifactTypes) {
  assert(
    registeredTypes.includes(artifactType),
    `Artifact type is not registered: ${artifactType}`
  );
}
for (const schemaName of schemaNames) {
  assert(
    catalog.schemas.includes(schemaName),
    `Schema is not cataloged: ${schemaName}`
  );
}

const ajv = new Ajv2020({
  allErrors: true,
  strict: true,
  strictRequired: false,
  strictTypes: false,
  validateFormats: true
});
addFormats(ajv);
ajv.addSchema(baseSchema);
const schemas = [];
for (const schemaName of schemaNames) {
  const schema = await readsJson(resolve(root, "schemas", schemaName));
  assert(ajv.validateSchema(schema), `Schema is not meta-valid: ${schemaName}`);
  ajv.addSchema(schema);
  schemas.push(schema);
}

const envelope = (artifactType, parentArtifactType, payload) => ({
  provenance: {
    schema: "embedded-provenance.v1",
    canonicalizationAlgorithm: "RFC8785-JCS",
    artifactType,
    artifactSha256: sha,
    parent: {
      artifactType: parentArtifactType,
      artifactSha256: sha
    },
    lineageRootSha256: sha,
    transformer: {
      id: "instructor-transformer",
      version: "1.0.0",
      repositoryCommit: "1".repeat(40),
      executableSha256: sha
    },
    signingKeyId: sha,
    signature: `ed25519:${Buffer.alloc(64).toString("base64")}`
  },
  payload
});

const common = {
  featureId,
  scenarioId: "",
  obligationId: "",
  expectationId: "",
  responsibilityId: "",
  signalId: ""
};
const samples = [
  envelope("independent-provider-exchange-attestation", "model-request-authority", {
    ...common,
    scenarioId: "attest-one-independently-observed-provider-exchange",
    obligationId: "establish-one-independent-provider-exchange-attestation",
    expectationId: "expect-one-independent-provider-exchange-attestation",
    responsibilityId: "attests-independently-observed-provider-exchange",
    signalId: "independent-provider-exchange-attestation",
    subjectFeatureId: "project-course-authority-through-a-governed-conveyor",
    subjectScenarioId: "obtain-one-bounded-model-submission",
    challengeNonce: "A".repeat(43),
    challengeIssuedAt: "2026-07-28T12:00:00Z",
    challengeExpiresAt: "2026-07-28T12:05:00Z",
    modelRequestAuthoritySha256: sha,
    providerAuthoritySha256: sha,
    providerRequestBodySha256: sha,
    providerResponseBodySha256: sha,
    providerRequestMetadataSha256: sha,
    providerResponseMetadataSha256: sha,
    resolvedProvider: "gemini",
    resolvedModel: "gemini-flash-latest",
    connectorInvocationId: "invocation-1",
    observerId: "instructor-provider-http-observer",
    observerExecutableSha256: sha,
    observedAt: "2026-07-28T12:00:01Z"
  }),
  envelope("bounded-model-submission-body-reproduction", "typescript-ast-authority", {
    ...common,
    scenarioId: "reproduce-one-bounded-model-submission-body",
    obligationId: "establish-one-byte-identical-bounded-model-submission-body",
    expectationId: "expect-one-byte-identical-bounded-model-submission-body",
    responsibilityId: "reproduces-bounded-model-submission-body",
    signalId: "bounded-model-submission-body-reproduction",
    subjectSemanticAuthoritySha256: sha,
    subjectAstAuthoritySha256: sha,
    expectedBodySha256: sha,
    observedBodySha256: sha,
    projectorExecutableSha256: sha,
    transformerDependencyGraphSha256: sha,
    projectorKeyId: sha,
    byteIdentical: true
  }),
  envelope("bounded-model-submission-execution-observation", "runtime-composition-authority", {
    ...common,
    scenarioId: "observe-one-bounded-model-submission-execution",
    obligationId: "establish-one-raw-bounded-model-submission-observation",
    expectationId: "expect-one-raw-bounded-model-submission-observation",
    responsibilityId: "observes-bounded-model-submission-execution",
    signalId: "bounded-model-submission-execution-observation",
    subjectBodySha256: sha,
    runtimeCompositionAuthoritySha256: sha,
    observedSemanticOperationId: "obtain-bounded-model-submission",
    observedInvocationCount: 1,
    modelRequestAuthoritySha256: sha,
    boundedModelSubmissionSha256: sha,
    providerExchangeAttestationSha256: sha,
    observerExecutableSha256: sha
  }),
  envelope("complete-bounded-model-submission-lineage", "bounded-model-submission-execution-observation", {
    ...common,
    scenarioId: "verify-one-complete-bounded-model-submission-lineage",
    obligationId: "establish-one-complete-bounded-model-submission-lineage",
    expectationId: "expect-one-complete-bounded-model-submission-lineage",
    responsibilityId: "verifies-complete-bounded-model-submission-lineage",
    signalId: "bounded-model-submission-acceptance-disposition",
    subjectFeatureId: "project-course-authority-through-a-governed-conveyor",
    subjectScenarioId: "obtain-one-bounded-model-submission",
    subjectObligationId: "obtain-one-normalized-model-testimony",
    subjectResponsibilityId: "obtains-bounded-model-submission",
    subjectSemanticAuthoritySha256: sha,
    subjectAstAuthoritySha256: sha,
    subjectProjectedBodySha256: sha,
    subjectProjectionProvenanceSha256: sha,
    providerExchangeAttestationSha256: sha,
    bodyReproductionSha256: sha,
    executionObservationSha256: sha
  }),
  envelope("bounded-model-submission-acceptance-disposition", "complete-bounded-model-submission-lineage", {
    ...common,
    scenarioId: "verify-one-complete-bounded-model-submission-lineage",
    obligationId: "establish-one-complete-bounded-model-submission-lineage",
    expectationId: "expect-one-complete-bounded-model-submission-lineage",
    responsibilityId: "verifies-complete-bounded-model-submission-lineage",
    signalId: "bounded-model-submission-acceptance-disposition",
    completeLineageSha256: sha,
    disposition: "GREEN",
    findings: []
  })
];

for (let index = 0; index < schemas.length; index++) {
  const validate = ajv.getSchema(schemas[index].$id);
  assert(validate(samples[index]), `Valid sample rejected: ${schemaNames[index]}`);
  const missing = structuredClone(samples[index]);
  delete missing.payload.featureId;
  assert(!validate(missing), `Missing required payload accepted: ${schemaNames[index]}`);
  const wrongParent = structuredClone(samples[index]);
  wrongParent.provenance.parent.artifactType = "reviewed-intent-authority";
  assert(!validate(wrongParent), `Wrong parent accepted: ${schemaNames[index]}`);
}
const terminalValidate = ajv.getSchema(schemas.at(-1).$id);
const invalidGreen = structuredClone(samples.at(-1));
invalidGreen.payload.findings = [{ code: "ARTIFACT_SCHEMA_INVALID", pointer: "/" }];
assert(!terminalValidate(invalidGreen), "GREEN disposition accepted findings");
const invalidRed = structuredClone(samples.at(-1));
invalidRed.payload.disposition = "RED";
invalidRed.payload.findings = [{ code: "NOT_A_CODE", pointer: "/" }];
assert(!terminalValidate(invalidRed), "RED disposition accepted an unknown code");

const scenarioNames = await readdir(resolve(capabilityRoot, "scenarios"));
assert(scenarioNames.length === 4, "Capability must contain exactly four scenarios");
assert(
  (await discoversFiles(capabilityRoot)).length === 130,
  "Capability must contain exactly 130 contract artifacts"
);
let lineageEntries = 0;
for (const scenarioName of scenarioNames) {
  const scenarioPath = resolve(capabilityRoot, "scenarios", scenarioName);
  const entries = await readdir(scenarioPath, { withFileTypes: true });
  const responsibility = entries.find(entry => entry.isDirectory());
  assert(responsibility !== undefined, `${scenarioName}: responsibility missing`);
  const responsibilityPath = resolve(scenarioPath, responsibility.name);
  const index = await readsJson(
    resolve(responsibilityPath, "projection-lineage.index.json")
  );
  assert(index.entries.length === 4, `${scenarioName}: expected four body roles`);
  for (const entry of index.entries) {
    const semantic = await readsJson(
      resolve(responsibilityPath, entry.semanticAuthority)
    );
    assert(
      digest(semantic) === entry.semanticAuthoritySha256,
      `${scenarioName}/${entry.role}: semantic hash mismatch`
    );
    for (const file of [
      entry.bodyExpectationAuthority,
      entry.fileBodyAuthority,
      entry.typescriptProjectionAuthority,
      entry.astAuthority,
      entry.projectedBody
    ]) {
      await readFile(resolve(responsibilityPath, file));
    }
    lineageEntries++;
  }
}
assert(lineageEntries === 16, "Expected sixteen complete lineage entries");

console.log("5/5 evidence schemas are meta-valid and reject invalid controls");
console.log("5/5 artifact types and schemas are registered");
console.log("16/16 four-body lineage entries are complete and hash-consistent");
