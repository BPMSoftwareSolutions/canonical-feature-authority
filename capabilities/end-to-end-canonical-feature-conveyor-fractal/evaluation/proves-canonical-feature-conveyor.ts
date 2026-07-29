// @generated
// authority-ref: implementation-artifact:execution-proof
// projector: canonical-feature-conveyor-implementation-projector.v1
// DO NOT EDIT.
import { invokesCanonicalFeatureConveyor } from "../runtime/invokes-canonical-feature-conveyor.js";
import { interpretsCanonicalFeatureSemanticAuthority } from "../runtime/interprets-canonical-feature-semantic-authority.js";
import type { SemanticObservationResolver } from "../runtime/interprets-canonical-feature-semantic-authority.js";
import { loadsCanonicalFeatureSemanticAuthority } from "../runtime/loads-canonical-feature-semantic-authority.js";

function artifactRef(artifactId: string) {
  return {
    artifactId,
    sha256: `sha256:${"0".repeat(64)}`,
    mediaType: "application/json"
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function canonicalizes(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map(canonicalizes).join(",")}]`;
  }
  if (isRecord(value)) {
    return `{${Object.keys(value)
      .sort()
      .map(key => `${JSON.stringify(key)}:${canonicalizes(value[key])}`)
      .join(",")}}`;
  }
  const encoded = JSON.stringify(value);
  if (encoded === undefined) throw new Error("PROOF_VALUE_NOT_CANONICALIZABLE");
  return encoded;
}

function createsEvaluationFixtureResolver(): SemanticObservationResolver {
  const semanticObservationRef = artifactRef("semantic-observation");
  const projectedObservationRef = artifactRef("projected-observation");
  const expectedSignalRef = artifactRef("expected-signal");
  const astSourceCorrespondenceRef = artifactRef("ast-source-correspondence");
  const comparisonEvidenceRef = artifactRef("comparison-evidence");
  const expectedSignal = { outcome: "canonical-feature-conforms" };
  const evidence = new Map<string, unknown>([
    [semanticObservationRef.artifactId, expectedSignal],
    [projectedObservationRef.artifactId, expectedSignal],
    [expectedSignalRef.artifactId, expectedSignal],
    [astSourceCorrespondenceRef.artifactId, { disposition: "CONFORMS" }]
  ]);
  return {
    async resolves(request) {
      if (!isRecord(request.input)) {
        throw new Error(`PROOF_INPUT_NOT_RECORD: ${request.operationId}`);
      }
      if (request.operationId === "projects-and-writes-complete-authority") {
        return { ...request.input, authorityRef: artifactRef("complete-authority") };
      }
      if (request.operationId === "materializes-and-writes-artifact-manifest") {
        return { ...request.input, artifactManifestRef: artifactRef("artifact-manifest") };
      }
      if (request.operationId === "executes-semantic-and-projected-surfaces") {
        return {
          ...request.input,
          disposition: "CONFORMS",
          semanticObservationRef,
          projectedObservationRef,
          expectedSignalRef,
          astSourceCorrespondenceRef
        };
      }
      if (request.operationId === "writes-execution-comparison-evidence") {
        return { ...request.input, comparisonEvidenceRef };
      }
      if (request.operationId === "resolves-and-verifies-comparison-evidence") {
        return request.input;
      }
      throw new Error(`PROOF_OPERATION_UNSUPPORTED: ${request.operationId}`);
    },
    async resolvesEvidence(reference) {
      if (!isRecord(reference) || typeof reference.artifactId !== "string") {
        throw new Error("PROOF_EVIDENCE_REFERENCE_INVALID");
      }
      const resolved = evidence.get(reference.artifactId);
      if (resolved === undefined) {
        throw new Error(`PROOF_EVIDENCE_NOT_FOUND: ${reference.artifactId}`);
      }
      return resolved;
    }
  };
}

const request = {
  reviewDisposition: "REVIEWED" as const,
  existingFeatureIds: [] as readonly string[],
  featureId: "projected-conveyor-proof-feature",
  requestRef: artifactRef("reviewed-feature-request"),
  lineageId: "projected-conveyor-proof-lineage"
};
const responsibilityIds = [
  "admits-reviewed-new-feature-request",
  "adapts-new-feature-request-admission",
  "projects-complete-new-feature-authority",
  "materializes-complete-new-feature",
  "executes-newly-materialized-feature",
  "composes-new-feature-execution-comparison",
  "verifies-complete-new-feature-lineage"
] as const;
const semanticAuthorities =
  await loadsCanonicalFeatureSemanticAuthority({
    repositoryRoot: process.cwd()
  });
const semanticInterpreter =
  interpretsCanonicalFeatureSemanticAuthority(
    semanticAuthorities,
    createsEvaluationFixtureResolver()
  );
let semanticResult: unknown = request;
for (const responsibilityId of responsibilityIds) {
  semanticResult = await semanticInterpreter.executes(
    responsibilityId,
    semanticResult
  );
}
const projectedResult = await invokesCanonicalFeatureConveyor({
  request,
  interpreter:
    interpretsCanonicalFeatureSemanticAuthority(
      semanticAuthorities,
      createsEvaluationFixtureResolver()
    )
});
if (canonicalizes(semanticResult) !== canonicalizes(projectedResult)) {
  throw new Error("SEMANTIC_PROJECTED_EXECUTION_DIVERGES");
}
if (
  !isRecord(projectedResult) ||
  projectedResult.disposition !== "PROJECTION_CONFORMS"
) {
  throw new Error("PROJECTED_TERMINAL_DISPOSITION_REJECTED");
}
console.log(JSON.stringify({
  disposition: "PROJECTION_CONFORMS",
  semanticResult,
  projectedResult
}));
