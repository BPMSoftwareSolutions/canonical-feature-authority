# Independent Bounded-Model-Submission Provenance Contract

## Status

```text
SUBMITTED-SIDE ACCEPTANCE AUTHORITY IMPLEMENTED
LIVE INSTRUCTOR EVIDENCE NOT YET ISSUED
CURRENT DISPOSITION: RED
```

The four-scenario authority spine, evidence schemas, signed projected bodies,
connector observation dependency contract, clean regeneration pipeline, and
negative-control verifier are implemented. The disposition remains RED until
an instructor-owned harness issues and consumes a fresh challenge, observes a
live provider exchange, and signs the terminal evidence artifacts.

This document is a deterministic implementation contract for independently
accepting one live execution of:

```text
feature:
project-course-authority-through-a-governed-conveyor

scenario:
obtain-one-bounded-model-submission

obligation:
obtain-one-normalized-model-testimony

responsibility:
obtains-bounded-model-submission

semantic operation:
obtain-bounded-model-submission
```

The existing scenario proves that the bounded-model-submission body delegates
to its admitted connector boundary. The acceptance authority defined here
separately proves:

```text
one independently observed provider exchange
one exact recorded-build body reproduction
one raw bounded-model-submission execution observation
one complete terminal lineage disposition
```

## Acceptance Gherkin

The new capability must contain:

```gherkin
Feature: Prove bounded-model-submission provenance under independent trust
  As an independent conveyor verifier
  I want provider exchange, projection, and execution evidence verified
    outside the submitted trust domain
  So that only one reproducible bounded-model-submission lineage receives GREEN

  @scenario-id:attest-one-independently-observed-provider-exchange
  Scenario: Attest one independently observed provider exchange
    Given one fresh instructor challenge and one admitted provider-neutral model request
    When its provider exchange is observed by instructor-controlled infrastructure
    Then one signed independent-provider-exchange attestation is emitted

  @scenario-id:reproduce-one-bounded-model-submission-body
  Scenario: Reproduce one bounded-model-submission body
    Given one admitted bounded-model-submission SEJ, AST, and transformer graph
    When its recorded transformer build is independently replayed
    Then one byte-identical projector-signed bounded-model-submission body is emitted

  @scenario-id:observe-one-bounded-model-submission-execution
  Scenario: Observe one bounded-model-submission execution
    Given one projector-signed bounded-model-submission body and its admitted connector binding
    When the body is executed through an instructor-controlled observation port
    Then one signed raw bounded-model-submission execution observation is emitted

  @scenario-id:verify-one-complete-bounded-model-submission-lineage
  Scenario: Verify one complete bounded-model-submission lineage
    Given one provider attestation, reproducible body, and raw execution observation
    When their complete authority lineage is independently evaluated
    Then one signed bounded-model-submission acceptance disposition is emitted
```

## Repository spine

The capability root is exactly:

```text
capabilities/
  prove-bounded-model-submission-provenance-under-independent-trust/
    proves-bounded-model-submission-provenance.feature
    projects-capability-authority.json
    scenarios/
```

No top-level repository `scenarios/` directory is created.

### Complete artifact set for the provider-exchange scenario

The first scenario is the normative filesystem template:

```text
capabilities/
  prove-bounded-model-submission-provenance-under-independent-trust/
    scenarios/
      attest-one-independently-observed-provider-exchange/
        declares-scenario-authority.json
        establish-one-independent-provider-exchange-attestation.obligation.json
        expect-one-independent-provider-exchange-attestation.expectation.json
        attests-independently-observed-provider-exchange/
          declares-responsibility.json
          declares-signal.json
          binds-responsibility-to-semantic-edge.json
          executes-provider-exchange-attestation.sej.json
          projection-lineage.index.json

          expects-provider-exchange-attestation-type-body.json
          declares-provider-exchange-attestation-type-body.json
          projects-provider-exchange-attestation-type.semantic-executable.json
          projects-provider-exchange-attestation-type-body.json
          provider-exchange-attestation.type.ts.ast.authority.json
          provider-exchange-attestation.type.ts

          expects-provider-exchange-attestation-body.json
          declares-provider-exchange-attestation-body.json
          projects-provider-exchange-attestation.semantic-executable.json
          projects-provider-exchange-attestation-body.json
          provider-exchange-attestation.ts.ast.authority.json
          provider-exchange-attestation.ts

          expects-provider-exchange-attestation-expectation-body.json
          declares-provider-exchange-attestation-expectation-body.json
          projects-provider-exchange-attestation-expectation.semantic-executable.json
          projects-provider-exchange-attestation-expectation-body.json
          provider-exchange-attestation.expectation.ts.ast.authority.json
          provider-exchange-attestation.expectation.ts

          expects-runs-provider-exchange-attestation-conformance-body.json
          declares-runs-provider-exchange-attestation-conformance-body.json
          projects-runs-provider-exchange-attestation-conformance.semantic-executable.json
          projects-runs-provider-exchange-attestation-conformance-body.json
          runs-provider-exchange-attestation-conformance.ts.ast.authority.json
          runs-provider-exchange-attestation-conformance.ts
```

The other three scenarios must contain the same artifact roles. Apply these
identifier substitutions without omitting any role:

```json
[
  {
    "scenarioId":
      "reproduce-one-bounded-model-submission-body",
    "obligationId":
      "establish-one-byte-identical-bounded-model-submission-body",
    "expectationId":
      "expect-one-byte-identical-bounded-model-submission-body",
    "responsibilityId":
      "reproduces-bounded-model-submission-body",
    "signalId":
      "bounded-model-submission-body-reproduction",
    "semanticOperationId":
      "reproduce-bounded-model-submission-body"
  },
  {
    "scenarioId":
      "observe-one-bounded-model-submission-execution",
    "obligationId":
      "establish-one-raw-bounded-model-submission-observation",
    "expectationId":
      "expect-one-raw-bounded-model-submission-observation",
    "responsibilityId":
      "observes-bounded-model-submission-execution",
    "signalId":
      "bounded-model-submission-execution-observation",
    "semanticOperationId":
      "observe-bounded-model-submission-execution"
  },
  {
    "scenarioId":
      "verify-one-complete-bounded-model-submission-lineage",
    "obligationId":
      "establish-one-complete-bounded-model-submission-lineage",
    "expectationId":
      "expect-one-complete-bounded-model-submission-lineage",
    "responsibilityId":
      "verifies-complete-bounded-model-submission-lineage",
    "signalId":
      "bounded-model-submission-acceptance-disposition",
    "semanticOperationId":
      "evaluate-complete-bounded-model-submission-lineage"
  }
]
```

Each responsibility directory therefore contains:

```text
one responsibility authority
one signal authority
one responsibility-to-edge binding
one execution SEJ
one lineage index
four body-expectation authorities
four file-body authorities
four semantic executable authorities
four TypeScript projection authorities
four signed AST authorities
four projected TypeScript bodies
```

## Evidence envelope

Every new runtime evidence artifact uses the existing embedded envelope:

```json
{
  "provenance": {
    "schema": "embedded-provenance.v1",
    "canonicalizationAlgorithm": "RFC8785-JCS",
    "artifactType": "<registered-artifact-type>",
    "artifactSha256": "sha256:<payload-jcs-hash>",
    "parent": {
      "artifactType": "<registered-parent-type>",
      "artifactSha256": "sha256:<parent-payload-hash>"
    },
    "lineageRootSha256":
      "sha256:<acceptance-capability-authority-jcs-hash>",
    "transformer": {
      "id": "<instructor-controlled-transformer>",
      "version": "<version>",
      "repositoryCommit": "<40-lowercase-hex>",
      "executableSha256": "sha256:<transformer-file-bytes>"
    },
    "signingKeyId": "sha256:<authorized-public-key-id>",
    "signature": "ed25519:<base64-signature>"
  },
  "payload": {}
}
```

The implementation must extend
`schemas/embedded-provenance.schema.json#/$defs/artifactType` with exactly:

```json
[
  "independent-provider-exchange-attestation",
  "bounded-model-submission-body-reproduction",
  "bounded-model-submission-execution-observation",
  "complete-bounded-model-submission-lineage",
  "bounded-model-submission-acceptance-disposition"
]
```

### Hashing and signing algorithm

The following algorithm is normative:

```typescript
const artifactSha256 =
  sha256(utf8(rfc8785Jcs(payload)));

const unsignedProvenance = {
  schema: "embedded-provenance.v1",
  canonicalizationAlgorithm: "RFC8785-JCS",
  artifactType,
  artifactSha256,
  parent,
  lineageRootSha256,
  transformer,
  signingKeyId
};

const signature =
  ed25519Sign(
    privateKey,
    utf8(rfc8785Jcs(unsignedProvenance))
  );

const artifact = {
  provenance: {
    ...unsignedProvenance,
    signature: `ed25519:${base64(signature)}`
  },
  payload
};
```

The `signature` field is excluded from the signature preimage. The payload is
not signed directly; its JCS SHA-256 is signed as
`unsignedProvenance.artifactSha256`.

Pretty-printed file bytes are not the artifact hash. Raw transport bodies and
projected TypeScript bodies use explicitly defined byte hashes below.

### Lineage-root derivation

The root artifact is exactly:

```text
capabilities/
  prove-bounded-model-submission-provenance-under-independent-trust/
    projects-capability-authority.json
```

The root hash is:

```typescript
const acceptanceCapabilityAuthority =
  JSON.parse(
    utf8Decode(
      readExactFileBytes(
        acceptanceCapabilityAuthorityPath
      )
    )
  );

const lineageRootSha256 =
  sha256(
    utf8(
      rfc8785Jcs(
        acceptanceCapabilityAuthority
      )
    )
  );
```

The preimage is the RFC 8785/JCS encoding of the complete parsed capability
authority object. It is not the pretty-printed file hash and is not an embedded
envelope hash.

The instructor workflow admits that exact capability authority from the
reviewed repository commit before issuing a challenge. Every new embedded
evidence artifact must carry this same `lineageRootSha256`.

## Normative evidence schemas

The following five schema files must be added and registered in
`schemas/embedded-provenance-schema-catalog.json`.

Each schema file uses this exact wrapper, replacing `<schema-name>`,
`<artifact-type>`, `<parent-artifact-type>`, and `<payload-contract>`:

```json
{
  "$schema":
    "https://json-schema.org/draft/2020-12/schema",
  "$id":
    "https://canonical-feature-authority/schemas/<schema-name>",
  "allOf": [
    {
      "$ref":
        "https://canonical-feature-authority/schemas/embedded-provenance.schema.json"
    },
    {
      "type": "object",
      "properties": {
        "provenance": {
          "type": "object",
          "properties": {
            "artifactType": {
              "const": "<artifact-type>"
            },
            "parent": {
              "type": "object",
              "required": [
                "artifactType",
                "artifactSha256"
              ],
              "properties": {
                "artifactType": {
                  "const":
                    "<parent-artifact-type>"
                }
              }
            }
          }
        },
        "payload": {
          "$ref": "#/$defs/payload"
        }
      }
    }
  ],
  "$defs": {
    "payload": "<payload-contract>"
  }
}
```

The string placeholder shown for `<payload-contract>` is replaced by the
complete payload schema object in the following sections. It is not retained
in the implemented schema. The parent constraint forces a non-null parent and
encodes the required parent artifact type in the schema itself.

Parent relationships are fixed:

```json
[
  {
    "artifactType":
      "independent-provider-exchange-attestation",
    "parentArtifactType":
      "model-request-authority"
  },
  {
    "artifactType":
      "bounded-model-submission-body-reproduction",
    "parentArtifactType":
      "typescript-ast-authority"
  },
  {
    "artifactType":
      "bounded-model-submission-execution-observation",
    "parentArtifactType":
      "runtime-composition-authority"
  },
  {
    "artifactType":
      "complete-bounded-model-submission-lineage",
    "parentArtifactType":
      "bounded-model-submission-execution-observation"
  },
  {
    "artifactType":
      "bounded-model-submission-acceptance-disposition",
    "parentArtifactType":
      "complete-bounded-model-submission-lineage"
  }
]
```

### Independent provider exchange

Path:

```text
schemas/independent-provider-exchange-attestation.schema.json
```

Payload contract:

```json
{
  "type": "object",
  "additionalProperties": false,
  "required": [
    "featureId",
    "scenarioId",
    "obligationId",
    "expectationId",
    "responsibilityId",
    "signalId",
    "subjectFeatureId",
    "subjectScenarioId",
    "challengeNonce",
    "challengeIssuedAt",
    "challengeExpiresAt",
    "modelRequestAuthoritySha256",
    "providerAuthoritySha256",
    "providerRequestBodySha256",
    "providerResponseBodySha256",
    "providerRequestMetadataSha256",
    "providerResponseMetadataSha256",
    "resolvedProvider",
    "resolvedModel",
    "connectorInvocationId",
    "observerId",
    "observerExecutableSha256",
    "observedAt"
  ],
  "properties": {
    "featureId": {
      "const":
        "prove-bounded-model-submission-provenance-under-independent-trust"
    },
    "scenarioId": {
      "const":
        "attest-one-independently-observed-provider-exchange"
    },
    "obligationId": {
      "const":
        "establish-one-independent-provider-exchange-attestation"
    },
    "expectationId": {
      "const":
        "expect-one-independent-provider-exchange-attestation"
    },
    "responsibilityId": {
      "const":
        "attests-independently-observed-provider-exchange"
    },
    "signalId": {
      "const":
        "independent-provider-exchange-attestation"
    },
    "subjectFeatureId": {
      "const":
        "project-course-authority-through-a-governed-conveyor"
    },
    "subjectScenarioId": {
      "const":
        "obtain-one-bounded-model-submission"
    },
    "challengeNonce": {
      "type": "string",
      "pattern": "^[A-Za-z0-9_-]{43}$"
    },
    "challengeIssuedAt": {
      "type": "string",
      "format": "date-time"
    },
    "challengeExpiresAt": {
      "type": "string",
      "format": "date-time"
    },
    "modelRequestAuthoritySha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "providerAuthoritySha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "providerRequestBodySha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "providerResponseBodySha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "providerRequestMetadataSha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "providerResponseMetadataSha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "resolvedProvider": {
      "type": "string",
      "minLength": 1
    },
    "resolvedModel": {
      "type": "string",
      "minLength": 1
    },
    "connectorInvocationId": {
      "type": "string",
      "minLength": 1
    },
    "providerRequestId": {
      "type": "string",
      "minLength": 1
    },
    "observerId": {
      "const": "instructor-provider-http-observer"
    },
    "observerExecutableSha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "observedAt": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```

`providerRequestId` is optional because the current provider may not supply
one. `connectorInvocationId` is always required.

### Body reproduction

Path:

```text
schemas/bounded-model-submission-body-reproduction.schema.json
```

Payload contract:

```json
{
  "type": "object",
  "additionalProperties": false,
  "required": [
    "featureId",
    "scenarioId",
    "obligationId",
    "expectationId",
    "responsibilityId",
    "signalId",
    "subjectSemanticAuthoritySha256",
    "subjectAstAuthoritySha256",
    "expectedBodySha256",
    "observedBodySha256",
    "projectorExecutableSha256",
    "transformerDependencyGraphSha256",
    "projectorKeyId",
    "byteIdentical"
  ],
  "properties": {
    "featureId": {
      "const":
        "prove-bounded-model-submission-provenance-under-independent-trust"
    },
    "scenarioId": {
      "const":
        "reproduce-one-bounded-model-submission-body"
    },
    "obligationId": {
      "const":
        "establish-one-byte-identical-bounded-model-submission-body"
    },
    "expectationId": {
      "const":
        "expect-one-byte-identical-bounded-model-submission-body"
    },
    "responsibilityId": {
      "const":
        "reproduces-bounded-model-submission-body"
    },
    "signalId": {
      "const":
        "bounded-model-submission-body-reproduction"
    },
    "subjectSemanticAuthoritySha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "subjectAstAuthoritySha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "expectedBodySha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "observedBodySha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "projectorExecutableSha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "transformerDependencyGraphSha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "projectorKeyId": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "byteIdentical": {
      "const": true
    }
  }
}
```

`expectedBodySha256` and `observedBodySha256` hash exact UTF-8 projected body
bytes. No newline normalization is permitted.

### Execution observation

Path:

```text
schemas/bounded-model-submission-execution-observation.schema.json
```

Payload contract:

```json
{
  "type": "object",
  "additionalProperties": false,
  "required": [
    "featureId",
    "scenarioId",
    "obligationId",
    "expectationId",
    "responsibilityId",
    "signalId",
    "subjectBodySha256",
    "runtimeCompositionAuthoritySha256",
    "observedSemanticOperationId",
    "observedInvocationCount",
    "modelRequestAuthoritySha256",
    "boundedModelSubmissionSha256",
    "providerExchangeAttestationSha256",
    "observerExecutableSha256"
  ],
  "properties": {
    "featureId": {
      "const":
        "prove-bounded-model-submission-provenance-under-independent-trust"
    },
    "scenarioId": {
      "const":
        "observe-one-bounded-model-submission-execution"
    },
    "obligationId": {
      "const":
        "establish-one-raw-bounded-model-submission-observation"
    },
    "expectationId": {
      "const":
        "expect-one-raw-bounded-model-submission-observation"
    },
    "responsibilityId": {
      "const":
        "observes-bounded-model-submission-execution"
    },
    "signalId": {
      "const":
        "bounded-model-submission-execution-observation"
    },
    "subjectBodySha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "runtimeCompositionAuthoritySha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "observedSemanticOperationId": {
      "const": "obtain-bounded-model-submission"
    },
    "observedInvocationCount": {
      "const": 1
    },
    "modelRequestAuthoritySha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "boundedModelSubmissionSha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "providerExchangeAttestationSha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "observerExecutableSha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    }
  }
}
```

`boundedModelSubmissionSha256` is the RFC 8785/JCS SHA-256 of the normalized
`ModelResponse` returned by `obtainsModelResponse`.

### Complete lineage subject

Path:

```text
schemas/complete-bounded-model-submission-lineage.schema.json
```

Payload contract:

```json
{
  "type": "object",
  "additionalProperties": false,
  "required": [
    "featureId",
    "scenarioId",
    "obligationId",
    "expectationId",
    "responsibilityId",
    "signalId",
    "subjectFeatureId",
    "subjectScenarioId",
    "subjectObligationId",
    "subjectResponsibilityId",
    "subjectSemanticAuthoritySha256",
    "subjectAstAuthoritySha256",
    "subjectProjectedBodySha256",
    "subjectProjectionProvenanceSha256",
    "providerExchangeAttestationSha256",
    "bodyReproductionSha256",
    "executionObservationSha256"
  ],
  "properties": {
    "featureId": {
      "const":
        "prove-bounded-model-submission-provenance-under-independent-trust"
    },
    "scenarioId": {
      "const":
        "verify-one-complete-bounded-model-submission-lineage"
    },
    "obligationId": {
      "const":
        "establish-one-complete-bounded-model-submission-lineage"
    },
    "expectationId": {
      "const":
        "expect-one-complete-bounded-model-submission-lineage"
    },
    "responsibilityId": {
      "const":
        "verifies-complete-bounded-model-submission-lineage"
    },
    "signalId": {
      "const":
        "bounded-model-submission-acceptance-disposition"
    },
    "subjectFeatureId": {
      "const":
        "project-course-authority-through-a-governed-conveyor"
    },
    "subjectScenarioId": {
      "const":
        "obtain-one-bounded-model-submission"
    },
    "subjectObligationId": {
      "const":
        "obtain-one-normalized-model-testimony"
    },
    "subjectResponsibilityId": {
      "const":
        "obtains-bounded-model-submission"
    },
    "subjectSemanticAuthoritySha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "subjectAstAuthoritySha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "subjectProjectedBodySha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "subjectProjectionProvenanceSha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "providerExchangeAttestationSha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "bodyReproductionSha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "executionObservationSha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    }
  }
}
```

### Terminal disposition

Path:

```text
schemas/bounded-model-submission-acceptance-disposition.schema.json
```

Payload contract:

```json
{
  "type": "object",
  "additionalProperties": false,
  "required": [
    "featureId",
    "scenarioId",
    "obligationId",
    "expectationId",
    "responsibilityId",
    "signalId",
    "completeLineageSha256",
    "disposition",
    "findings"
  ],
  "properties": {
    "featureId": {
      "const":
        "prove-bounded-model-submission-provenance-under-independent-trust"
    },
    "scenarioId": {
      "const":
        "verify-one-complete-bounded-model-submission-lineage"
    },
    "obligationId": {
      "const":
        "establish-one-complete-bounded-model-submission-lineage"
    },
    "expectationId": {
      "const":
        "expect-one-complete-bounded-model-submission-lineage"
    },
    "responsibilityId": {
      "const":
        "verifies-complete-bounded-model-submission-lineage"
    },
    "signalId": {
      "const":
        "bounded-model-submission-acceptance-disposition"
    },
    "completeLineageSha256": {
      "$ref": "embedded-provenance.schema.json#/$defs/sha256"
    },
    "disposition": {
      "enum": ["GREEN", "RED", "UNRESOLVED"]
    },
    "findings": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": ["code", "pointer"],
        "properties": {
          "code": {
            "type": "string",
            "minLength": 1
          },
          "pointer": {
            "type": "string",
            "minLength": 1
          }
        }
      }
    }
  },
  "$defs": {
    "redCode": {
      "enum": [
        "SCHEMA_AUTHORITY_NOT_INSTRUCTOR_CONTROLLED",
        "TRUST_AUTHORITY_NOT_INSTRUCTOR_CONTROLLED",
        "ARTIFACT_SCHEMA_INVALID",
        "ARTIFACT_TYPE_NOT_REGISTERED",
        "ARTIFACT_PAYLOAD_HASH_MISMATCH",
        "ARTIFACT_SIGNATURE_INVALID",
        "ARTIFACT_PARENT_MISMATCH",
        "LINEAGE_ROOT_MISMATCH",
        "SIGNING_KEY_NOT_TRUSTED",
        "SIGNING_KEY_ROLE_NOT_PERMITTED",
        "CHALLENGE_NONCE_INVALID",
        "CHALLENGE_NONCE_EXPIRED",
        "CHALLENGE_NONCE_ALREADY_USED",
        "CHALLENGE_NONCE_NOT_IN_REQUEST_AUTHORITY",
        "CHALLENGE_NONCE_NOT_IN_CONNECTOR_REQUEST",
        "CHALLENGE_NONCE_NOT_IN_PROVIDER_REQUEST_BODY",
        "PROVIDER_AUTHORITY_HASH_MISMATCH",
        "PROVIDER_REQUEST_BODY_HASH_MISMATCH",
        "PROVIDER_RESPONSE_BODY_HASH_MISMATCH",
        "PROVIDER_REQUEST_METADATA_HASH_MISMATCH",
        "PROVIDER_RESPONSE_METADATA_HASH_MISMATCH",
        "CONNECTOR_INVOCATION_ID_MISMATCH",
        "SUBJECT_AUTHORITY_IDENTITY_MISMATCH",
        "SEMANTIC_AUTHORITY_HASH_MISMATCH",
        "AST_PARENT_MISMATCH",
        "AST_AUTHORITY_HASH_MISMATCH",
        "PROJECTOR_EXECUTABLE_MISMATCH",
        "PROJECTOR_KEY_NOT_TRUSTED",
        "TRANSFORMER_DEPENDENCY_MISMATCH",
        "REPOSITORY_COMMIT_MISMATCH",
        "RUNTIME_IDENTITY_MISMATCH",
        "SEMANTIC_TO_AST_REPLAY_MISMATCH",
        "AST_TO_BODY_REPLAY_MISMATCH",
        "BODY_NOT_BYTE_IDENTICAL",
        "BODY_PROJECTION_SIGNATURE_INVALID",
        "RUNTIME_COMPOSITION_MISMATCH",
        "CONNECTOR_FUNCTION_MISMATCH",
        "CONNECTOR_DEPENDENCY_BINDING_MISMATCH",
        "SEMANTIC_OPERATION_NOT_OBSERVED",
        "INVOCATION_COUNT_MISMATCH",
        "MODEL_REQUEST_AUTHORITY_LINK_MISMATCH",
        "NORMALIZED_SUBMISSION_HASH_MISMATCH",
        "PROVIDER_ATTESTATION_LINK_MISMATCH",
        "COMPLETE_LINEAGE_LINK_MISMATCH"
      ]
    },
    "unresolvedCode": {
      "enum": [
        "PROVIDER_JOB_NOT_REQUESTED",
        "PROVIDER_NETWORK_UNAVAILABLE",
        "INSTRUCTOR_SECRET_STORE_UNAVAILABLE",
        "INSTRUCTOR_OBSERVER_UNAVAILABLE"
      ]
    }
  },
  "allOf": [
    {
      "if": {
        "properties": {
          "disposition": {
            "const": "GREEN"
          }
        }
      },
      "then": {
        "properties": {
          "findings": {
            "maxItems": 0
          }
        }
      }
    },
    {
      "if": {
        "properties": {
          "disposition": {
            "const": "RED"
          }
        }
      },
      "then": {
        "properties": {
          "findings": {
            "minItems": 1,
            "items": {
              "properties": {
                "code": {
                  "$ref":
                    "#/$defs/payload/$defs/redCode"
                }
              }
            }
          }
        }
      }
    },
    {
      "if": {
        "properties": {
          "disposition": {
            "const": "UNRESOLVED"
          }
        }
      },
      "then": {
        "properties": {
          "findings": {
            "minItems": 1,
            "items": {
              "properties": {
                "code": {
                  "$ref":
                    "#/$defs/payload/$defs/unresolvedCode"
                }
              }
            }
          }
        }
      }
    }
  ]
}
```

Each file wraps its payload contract in the common embedded envelope and
constrains `provenance.artifactType` to its registered type.

Append exactly these entries to the catalog's `schemas` array:

```json
[
  "independent-provider-exchange-attestation.schema.json",
  "bounded-model-submission-body-reproduction.schema.json",
  "bounded-model-submission-execution-observation.schema.json",
  "complete-bounded-model-submission-lineage.schema.json",
  "bounded-model-submission-acceptance-disposition.schema.json"
]
```

## Key roles

The instructor trust authority must be supplied outside the submitted
workspace:

```json
{
  "authorityType":
    "bounded-model-submission-acceptance-trusted-keys.v1",
  "keys": [
    {
      "role": "projector",
      "projectorId":
        "declarative-typescript-body-projector",
      "keyId": "sha256:<projector-key>",
      "algorithm": "ed25519",
      "publicKeyPem": "<pem>"
    },
    {
      "role": "provider-observer",
      "projectorId":
        "instructor-provider-http-observer",
      "keyId": "sha256:<provider-observer-key>",
      "algorithm": "ed25519",
      "publicKeyPem": "<pem>"
    },
    {
      "role": "runtime-observer",
      "projectorId":
        "instructor-bounded-model-submission-observer",
      "keyId": "sha256:<runtime-observer-key>",
      "algorithm": "ed25519",
      "publicKeyPem": "<pem>"
    },
    {
      "role": "acceptance-evaluator",
      "projectorId":
        "instructor-bounded-model-submission-evaluator",
      "keyId": "sha256:<acceptance-key>",
      "algorithm": "ed25519",
      "publicKeyPem": "<pem>"
    }
  ]
}
```

Permitted signing roles are fixed:

```text
projector
  signs AST and projected TypeScript transitions

provider-observer
  signs independent-provider-exchange-attestation

runtime-observer
  signs bounded-model-submission-execution-observation

acceptance-evaluator
  signs body reproduction, complete lineage, and terminal disposition
```

A key supplied only by the submitted workspace is never an independent grading
key.

## Instructor observation boundary

The observation service runs in the instructor-owned harness repository, not in
the submitted capability:

```text
C:/lab/trusted-tools/
  canonical-feature-authority-instructor-harness/
    src/provider-observation/
      observes-provider-http-exchange.ts
      signs-provider-exchange-attestation.ts
    src/runtime-observation/
      observes-bounded-model-submission-execution.ts
    src/acceptance/
      evaluates-complete-bounded-model-submission-lineage.ts
```

The private keys and nonce registry live outside all submitted repositories:

```text
instructor secret store:
  provider-observer private key
  runtime-observer private key
  acceptance-evaluator private key
  one-time nonce registry
  provider credential
```

### Provider transport protocol

The existing `HttpPort` is not used for the independent live acceptance path.
It returns decoded `bodyText` and therefore cannot retain exact response bytes.

The instructor observer owns the acceptance transport. The adapter supplies one
credential reference and one complete credential-free request. The observer
attaches credentials, performs `fetch`, retains response bytes with
`response.arrayBuffer()`, signs the observation, and only then decodes text.

```typescript
export type HeaderEntry = Readonly<{
  name: string;
  value: string;
}>;

export interface InstructorObservedGeminiTransportPort {
  invokesAndObserves(input: {
    readonly challengeNonce: string;
    readonly modelRequestAuthoritySha256: Sha256;
    readonly providerAuthoritySha256: Sha256;
    readonly connectorInvocationId: string;
    readonly resolvedModel: string;
    readonly credentialReferenceName: string;
    readonly request: Readonly<{
      method: "POST";
      urlWithoutCredentials: string;
      headersWithoutCredentials:
        readonly HeaderEntry[];
      bodyUtf8: Uint8Array;
      timeoutMilliseconds: number;
    }>;
  }): Promise<{
    readonly response: Readonly<{
      status: number;
      headers: readonly HeaderEntry[];
      bodyUtf8: Uint8Array;
      bodyText: string;
    }>;
    readonly attestation:
      IndependentProviderExchangeAttestation;
  }>;
}

export type GeminiAcceptanceAdapterDependencies =
  Readonly<{
    clock: Clock;
    observationAuthority: Readonly<{
      challengeNonce: string;
      modelRequestAuthoritySha256: Sha256;
      providerAuthoritySha256: Sha256;
    }>;
    transport:
      InstructorObservedGeminiTransportPort;
  }>;
```

There is no independently supplied request byte array plus opaque invocation
closure. `InstructorObservedGeminiTransportPort` transports the same
`request.bodyUtf8` that it hashes.

Inside `invokesProviderModel(context)`, the adapter creates the request bytes
once:

```typescript
const requestBodyUtf8 =
  new TextEncoder().encode(
    JSON.stringify(
      mapsContextToGeminiRequest(context)
    )
  );

const observed =
  await dependencies.transport
    .invokesAndObserves({
      ...dependencies.observationAuthority,
      connectorInvocationId:
        context.invocationId,
      resolvedModel:
        context.model.resolvedName,
      credentialReferenceName:
        context.provider
          .credentialReference.name,
      request: {
        method: "POST",
        urlWithoutCredentials:
          buildsGeminiEndpointUrl(context),
        headersWithoutCredentials: [
          {
            name: "content-type",
            value: "application/json"
          }
        ],
        bodyUtf8: requestBodyUtf8,
        timeoutMilliseconds:
          context.executionPolicy
            .timeoutMilliseconds
      }
    });
```

The transport performs:

```typescript
const credential =
  instructorCredentialPort.readsCredential(
    input.credentialReferenceName
  );

const requestHeaders =
  attachesGeminiCredential(
    input.request.headersWithoutCredentials,
    credential
  );

const response =
  await fetch(
    input.request.urlWithoutCredentials,
    {
      method: input.request.method,
      headers: requestHeaders,
      body: input.request.bodyUtf8,
      signal: timeoutSignal(
        input.request.timeoutMilliseconds
      )
    }
  );

const responseBodyUtf8 =
  new Uint8Array(
    await response.arrayBuffer()
  );

const responseHeaders =
  readsHeaderEntries(response.headers);

const attestation =
  signsExactProviderExchange({
    ...input,
    responseStatus: response.status,
    responseHeaders,
    responseBodyUtf8
  });

return {
  response: {
    status: response.status,
    headers: responseHeaders,
    bodyUtf8: responseBodyUtf8,
    bodyText:
      new TextDecoder(
        "utf-8",
        { fatal: false }
      ).decode(responseBodyUtf8)
  },
  attestation
};
```

`bodyUtf8` means the exact application-body bytes supplied to `fetch` and the
exact response-body bytes returned by `Response.arrayBuffer()`. It does not
mean TLS records, HTTP framing, or transfer-encoding bytes.

The returned decoded text continues through the existing Gemini testimony
mapping. The signed attestation is delivered to the instructor acceptance
harness through an instructor-owned evidence sink; it is not added to the
normalized `ModelResponse`.

### Header normalization

Metadata headers are normalized before JCS hashing:

```typescript
const CREDENTIAL_HEADER_NAMES =
  new Set([
    "authorization",
    "cookie",
    "proxy-authorization",
    "set-cookie",
    "x-api-key",
    "x-goog-api-key"
  ]);

function normalizesHeaders(
  entries: readonly HeaderEntry[]
): readonly Readonly<{
  name: string;
  values: readonly string[];
}>[] {
  return groupsByLowercaseName(
    entries
      .map(({ name, value }, index) => ({
        name:
          name.toLowerCase(),
        value:
          trimsOptionalWhitespace(value),
        index
      }))
      .filter(
        entry =>
          !CREDENTIAL_HEADER_NAMES.has(
            entry.name
          )
      )
  )
    .map(group => ({
      name: group.name,
      values:
        group.entries
          .sort(
            (left, right) =>
              left.index - right.index
          )
          .map(entry => entry.value)
    }))
    .sort(
      (left, right) =>
        left.name.localeCompare(
          right.name,
          "en"
        )
    );
}
```

`trimsOptionalWhitespace` removes only leading and trailing ASCII space
(`0x20`) and horizontal tab (`0x09`). It does not collapse internal
whitespace. Duplicate values retain their original occurrence order within
each lowercased name. Header-name groups are sorted by ascending Unicode code
point; implementations must not use locale-dependent ordering.

The pseudocode's `"en"` argument is illustrative only. The implementation must
compare code points directly:

```typescript
left.name < right.name
  ? -1
  : left.name > right.name
    ? 1
    : 0
```

Credential query parameters are also excluded:

```json
[
  "access_token",
  "api_key",
  "key"
]
```

The observer rejects a credential found in any other URL component or
non-excluded metadata field.

The hashes have exact meanings:

```typescript
providerRequestBodySha256 =
  sha256(input.request.bodyUtf8);

providerResponseBodySha256 =
  sha256(response.bodyUtf8);

providerRequestMetadataSha256 =
  sha256(
    utf8(
      rfc8785Jcs({
        method:
          input.request.method,
        urlWithoutCredentials:
          input.request
            .urlWithoutCredentials,
        headers:
          normalizesHeaders(
            input.request
              .headersWithoutCredentials
          )
      })
    )
  );

providerResponseMetadataSha256 =
  sha256(
    utf8(
      rfc8785Jcs({
        status:
          response.status,
        headers:
          normalizesHeaders(
            response.headers
          )
      })
    )
  );
```

Authentication headers, cookies, credentials, and secret query parameters are
excluded before metadata hashing. The exact request body and exact response
body are hashed before JSON parsing or normalization.

### Connector dependency binding

The course body remains branch-free:

```typescript
export async function obtainsBoundedModelSubmission(
  context: ObtainsBoundedModelSubmissionContext
): Promise<BoundedModelSubmissionSignal> {
  return await context.obtain(context.request);
}
```

The instructor bootstrap binds that port to the real connector:

```typescript
const geminiAdapter =
  createsGeminiAdapter({
    clock: instructorClock,
    observationAuthority: {
      challengeNonce,
      modelRequestAuthoritySha256,
      providerAuthoritySha256
    },
    transport:
      instructorObservedGeminiTransportPort
  });

const connectorDependencies:
  ModelConnectorDependencies = {
    providerAuthorities: [
      instructorProviderAuthority
    ],
    providerAdapters: [
      geminiAdapter
    ],
    clock: instructorClock,
    hashes: sha256Hashes,
    identity: instructorInvocationIdentity
  };

const context:
  ObtainsBoundedModelSubmissionContext = {
    request: admittedModelRequest,
    obtain: request =>
      obtainsModelResponse(
        request,
        connectorDependencies
      )
  };
```

This bootstrap is instructor mechanism code. It is not a projected policy body.
Its executable and transitive dependency hashes are included in the runtime
composition authority and transformer dependency graph.

### Challenge protocol

The nonce policy is normative:

```text
entropy:
32 cryptographically random bytes

encoding:
base64url without padding

encoded length:
43 characters

maximum lifetime:
5 minutes

use:
exactly once

issuer:
instructor nonce service

storage:
instructor one-time nonce registry

registry transition:
ISSUED_UNUSED
  -> CONSUMED_BY_PROVIDER_ATTESTATION

atomic consumption key:
sha256(utf8(challengeNonce))

registry value:
sha256 of the consumed signed provider-attestation payload
```

The nonce must be included in:

```text
the signed model-request authority
the connector ModelRequest requestId
one user-message content field sent in the provider request body
the independent provider-exchange attestation
```

Example:

```typescript
const modelRequest: ModelRequest = {
  requestId:
    `bounded-model-submission:${challengeNonce}`,
  interaction: {
    mode: "structured-generation",
    messages: [
      {
        role: "user",
        content:
          `instructorChallengeNonce=${challengeNonce}\n` +
          admittedInstruction
      }
    ]
  },
  // provider authority, response, execution, and evidence policy
};
```

A nonce stored only beside the `ModelRequest` is not joined to the provider
exchange and is rejected. The provider observer atomically changes the nonce
from `ISSUED_UNUSED` to `CONSUMED_BY_PROVIDER_ATTESTATION`. The terminal
evaluator verifies that the nonce was consumed exactly once by the attestation
being evaluated.

The atomic compare-and-set is:

```typescript
const nonceKey =
  sha256(utf8(challengeNonce));

nonceRegistry.compareAndSet(
  nonceKey,
  {
    state: "ISSUED_UNUSED"
  },
  {
    state:
      "CONSUMED_BY_PROVIDER_ATTESTATION",
    consumedAttestationSha256:
      providerAttestationArtifactSha256
  }
);
```

Two attestations for the same nonce address the same registry key. Only one can
complete the transition.

## Complete SEJ inputs

All four primary responsibility SEJs use the current projector's complete
`prebound-member-delegation.v1` shape. The terminal responsibility also has a
separate conformance SEJ.

### Provider-exchange attestation SEJ

```json
{
  "semanticExecutableType":
    "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile":
    "conveyor-stage-delegation.v1",
  "bodyId":
    "provider-exchange-attestation-body",
  "artifact": {
    "relativePath":
      "capabilities/prove-bounded-model-submission-provenance-under-independent-trust/scenarios/attest-one-independently-observed-provider-exchange/attests-independently-observed-provider-exchange/provider-exchange-attestation.ts"
  },
  "lineage": {
    "featureId":
      "prove-bounded-model-submission-provenance-under-independent-trust",
    "scenarioId":
      "attest-one-independently-observed-provider-exchange",
    "obligationId":
      "establish-one-independent-provider-exchange-attestation",
    "expectationId":
      "expect-one-independent-provider-exchange-attestation",
    "responsibilityId":
      "attests-independently-observed-provider-exchange",
    "signalId":
      "independent-provider-exchange-attestation",
    "semanticOperationId":
      "attest-independent-provider-exchange"
  },
  "projection": {
    "functionName":
      "attestsIndependentlyObservedProviderExchange",
    "contextParameter": {
      "name": "context",
      "typeReference":
        "AttestsIndependentlyObservedProviderExchangeContext"
    },
    "resultTypeReference":
      "IndependentProviderExchangeAttestation",
    "invocation": {
      "receiver": "context",
      "operationMember": "attest",
      "argument": {
        "receiver": "context",
        "member": "exchange"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

### Body-reproduction SEJ

```json
{
  "semanticExecutableType":
    "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile":
    "conveyor-stage-delegation.v1",
  "bodyId":
    "bounded-model-submission-body-reproduction-body",
  "artifact": {
    "relativePath":
      "capabilities/prove-bounded-model-submission-provenance-under-independent-trust/scenarios/reproduce-one-bounded-model-submission-body/reproduces-bounded-model-submission-body/bounded-model-submission-reproduction.ts"
  },
  "lineage": {
    "featureId":
      "prove-bounded-model-submission-provenance-under-independent-trust",
    "scenarioId":
      "reproduce-one-bounded-model-submission-body",
    "obligationId":
      "establish-one-byte-identical-bounded-model-submission-body",
    "expectationId":
      "expect-one-byte-identical-bounded-model-submission-body",
    "responsibilityId":
      "reproduces-bounded-model-submission-body",
    "signalId":
      "bounded-model-submission-body-reproduction",
    "semanticOperationId":
      "reproduce-bounded-model-submission-body"
  },
  "projection": {
    "functionName":
      "reproducesBoundedModelSubmissionBody",
    "contextParameter": {
      "name": "context",
      "typeReference":
        "ReproducesBoundedModelSubmissionBodyContext"
    },
    "resultTypeReference":
      "BoundedModelSubmissionBodyReproduction",
    "invocation": {
      "receiver": "context",
      "operationMember": "reproduce",
      "argument": {
        "receiver": "context",
        "member": "subject"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

### Execution-observation SEJ

```json
{
  "semanticExecutableType":
    "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile":
    "conveyor-stage-delegation.v1",
  "bodyId":
    "bounded-model-submission-execution-observation-body",
  "artifact": {
    "relativePath":
      "capabilities/prove-bounded-model-submission-provenance-under-independent-trust/scenarios/observe-one-bounded-model-submission-execution/observes-bounded-model-submission-execution/bounded-model-submission-observation.ts"
  },
  "lineage": {
    "featureId":
      "prove-bounded-model-submission-provenance-under-independent-trust",
    "scenarioId":
      "observe-one-bounded-model-submission-execution",
    "obligationId":
      "establish-one-raw-bounded-model-submission-observation",
    "expectationId":
      "expect-one-raw-bounded-model-submission-observation",
    "responsibilityId":
      "observes-bounded-model-submission-execution",
    "signalId":
      "bounded-model-submission-execution-observation",
    "semanticOperationId":
      "observe-bounded-model-submission-execution"
  },
  "projection": {
    "functionName":
      "observesBoundedModelSubmissionExecution",
    "contextParameter": {
      "name": "context",
      "typeReference":
        "ObservesBoundedModelSubmissionExecutionContext"
    },
    "resultTypeReference":
      "BoundedModelSubmissionExecutionObservation",
    "invocation": {
      "receiver": "context",
      "operationMember": "observe",
      "argument": {
        "receiver": "context",
        "member": "subject"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

### Complete-lineage primary SEJ

```json
{
  "semanticExecutableType":
    "prebound-member-delegation.v1",
  "bodyRole": "primary",
  "structuralProfile":
    "conveyor-stage-delegation.v1",
  "bodyId":
    "complete-bounded-model-submission-lineage-body",
  "artifact": {
    "relativePath":
      "capabilities/prove-bounded-model-submission-provenance-under-independent-trust/scenarios/verify-one-complete-bounded-model-submission-lineage/verifies-complete-bounded-model-submission-lineage/complete-bounded-model-submission-lineage.ts"
  },
  "lineage": {
    "featureId":
      "prove-bounded-model-submission-provenance-under-independent-trust",
    "scenarioId":
      "verify-one-complete-bounded-model-submission-lineage",
    "obligationId":
      "establish-one-complete-bounded-model-submission-lineage",
    "expectationId":
      "expect-one-complete-bounded-model-submission-lineage",
    "responsibilityId":
      "verifies-complete-bounded-model-submission-lineage",
    "signalId":
      "bounded-model-submission-acceptance-disposition",
    "semanticOperationId":
      "evaluate-complete-bounded-model-submission-lineage"
  },
  "projection": {
    "functionName":
      "verifiesCompleteBoundedModelSubmissionLineage",
    "contextParameter": {
      "name": "context",
      "typeReference":
        "VerifiesCompleteBoundedModelSubmissionLineageContext"
    },
    "resultTypeReference":
      "BoundedModelSubmissionAcceptanceDisposition",
    "invocation": {
      "receiver": "context",
      "operationMember": "evaluate",
      "argument": {
        "receiver": "context",
        "member": "lineage"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

This SEJ projects:

```typescript
export async function verifiesCompleteBoundedModelSubmissionLineage(
  context: VerifiesCompleteBoundedModelSubmissionLineageContext
): Promise<BoundedModelSubmissionAcceptanceDisposition> {
  return await context.evaluate(context.lineage);
}
```

### Complete-lineage conformance SEJ

```json
{
  "semanticExecutableType":
    "prebound-member-delegation.v1",
  "bodyRole": "conformance",
  "structuralProfile":
    "conformance-delegation.v1",
  "bodyId":
    "runs-complete-bounded-model-submission-lineage-conformance-body",
  "artifact": {
    "relativePath":
      "capabilities/prove-bounded-model-submission-provenance-under-independent-trust/scenarios/verify-one-complete-bounded-model-submission-lineage/verifies-complete-bounded-model-submission-lineage/runs-complete-bounded-model-submission-lineage-conformance.ts"
  },
  "lineage": {
    "featureId":
      "prove-bounded-model-submission-provenance-under-independent-trust",
    "scenarioId":
      "verify-one-complete-bounded-model-submission-lineage",
    "obligationId":
      "establish-one-complete-bounded-model-submission-lineage",
    "expectationId":
      "expect-one-complete-bounded-model-submission-lineage",
    "responsibilityId":
      "verifies-complete-bounded-model-submission-lineage",
    "signalId":
      "bounded-model-submission-acceptance-disposition",
    "semanticOperationId":
      "evaluate-complete-bounded-model-submission-lineage"
  },
  "projection": {
    "functionName":
      "runsCompleteBoundedModelSubmissionLineageConformance",
    "contextParameter": {
      "name": "context",
      "typeReference":
        "RunsCompleteBoundedModelSubmissionLineageConformanceContext"
    },
    "resultTypeReference":
      "BoundedModelSubmissionAcceptanceDisposition",
    "invocation": {
      "receiver": "context",
      "operationMember": "evaluate",
      "argument": {
        "receiver": "context",
        "member": "subject"
      },
      "awaited": true,
      "returnResult": true
    }
  },
  "constraints": {
    "forbidBranching": true,
    "forbidIteration": true,
    "forbidDtoConstruction": true,
    "forbidSemanticLiterals": true,
    "forbidDirectEffects": true,
    "forbidLocalErrorPolicy": true
  }
}
```

The expectation and type SEJs for each scenario follow the existing four-body
profiles and are required by the repository spine above.

## Provenance model

The existing
`complete-projection-provenance.v1` remains the pre-projection body manifest.
Its field set is not changed by this contract.

Its provider fields mean:

```text
providerAuthoritySha256
providerRequestSha256
providerResponseSha256

==

the projection-time provider exchange that produced the model semantic
authority from which this body was projected
```

They do not mean:

```text
the later provider exchange performed when the bounded-model-submission body
executes as a subject
```

The later subject-runtime provider exchange is linked by:

```text
independent-provider-exchange-attestation
  -> bounded-model-submission-execution-observation
  -> complete-bounded-model-submission-lineage
  -> bounded-model-submission-acceptance-disposition
```

The generated body header continues to bind exactly the existing v1 manifest:

```typescript
// provenance-path: complete-projection-provenance.json
// provenance-sha256: sha256:<v1-manifest-jcs-hash>
// reviewed-intent-authority-sha256: sha256:<hash>
// gherkin-source-sha256: sha256:<hash>
// gherkin-semantic-sha256: sha256:<hash>
// model-request-authority-sha256: sha256:<hash>
// provider-authority-sha256: sha256:<projection-time-hash>
// provider-request-sha256: sha256:<projection-time-hash>
// provider-response-sha256: sha256:<projection-time-hash>
// semantic-authority-sha256: sha256:<hash>
// semantic-executable-sha256: sha256:<hash>
// ast-authority-sha256: sha256:<hash>
// runtime-composition-authority-sha256: sha256:<hash>
// expectation-authority-sha256: sha256:<hash>
// transformer-dependency-graph-sha256: sha256:<hash>
// execution-plan-sha256: sha256:<hash>
// terminal-conformance-plan-sha256: sha256:<hash>
// final-lineage-plan-sha256: sha256:<hash>
```

Feature, scenario, obligation, expectation, responsibility, signal, and
semantic-operation IDs remain inside the signed SEJ, AST, and body bytes. This
contract does not invent incompatible v1 manifest fields.

## Terminal acceptance algorithm

The evaluator executes these checks in order. It stops at the first non-GREEN
result.

```typescript
function evaluatesCompleteLineage(input): Disposition {
  requireSchemaSetIsInstructorOwned();
  requireTrustAuthorityIsInstructorOwned();

  verifySchema(input.providerAttestation);
  verifySchema(input.bodyReproduction);
  verifySchema(input.executionObservation);
  verifySchema(input.completeLineage);

  verifyEmbeddedEnvelope(input.providerAttestation);
  verifyEmbeddedEnvelope(input.bodyReproduction);
  verifyEmbeddedEnvelope(input.executionObservation);
  verifyEmbeddedEnvelope(input.completeLineage);

  verifyPermittedKeyRole(
    input.providerAttestation,
    "provider-observer"
  );
  verifyPermittedKeyRole(
    input.bodyReproduction,
    "acceptance-evaluator"
  );
  verifyPermittedKeyRole(
    input.executionObservation,
    "runtime-observer"
  );
  verifyPermittedKeyRole(
    input.completeLineage,
    "acceptance-evaluator"
  );

  verifyNonceIssuedFreshAndConsumedOnceByAttestation(
    input.providerAttestation
  );
  verifyNonceOccursInSignedRequestAuthority();
  verifyNonceOccursInConnectorRequestId();
  verifyNonceOccursInProviderRequestBody();

  verifyProviderAuthorityHash();
  verifyExactProviderRequestBodyHash();
  verifyExactProviderResponseBodyHash();
  verifySanitizedRequestMetadataHash();
  verifyResponseMetadataHash();
  verifyConnectorInvocationIdentity();

  verifySubjectAuthorityIdentities();
  verifySemanticAuthorityHash();
  verifyAstParentAndHash();
  verifyProjectorKeyRole();
  verifyProjectorExecutableHash();
  verifyEveryTransformerDependencyByte();
  verifyRecordedRepositoryCommits();
  verifyRecordedNodeAndTypeScriptIdentity();
  replaySemanticAuthorityToAst();
  replayAstToBody();
  verifyByteIdenticalBody();
  verifyBodyProjectionSignature();

  verifyRuntimeCompositionAuthority();
  verifyConnectorFunctionIdentity();
  verifyConnectorDependencyBindings();
  verifyObservedSemanticOperationId();
  verifyObservedInvocationCountEqualsOne();
  verifyModelRequestAuthorityLink();
  verifyNormalizedSubmissionHash();
  verifyProviderAttestationLink();

  verifyCompleteLineageLinksAllArtifacts();
  return GREEN;
}
```

Every check fails closed. No later check may overwrite an earlier result.

### RED dispositions

```json
[
  "SCHEMA_AUTHORITY_NOT_INSTRUCTOR_CONTROLLED",
  "TRUST_AUTHORITY_NOT_INSTRUCTOR_CONTROLLED",
  "ARTIFACT_SCHEMA_INVALID",
  "ARTIFACT_TYPE_NOT_REGISTERED",
  "ARTIFACT_PAYLOAD_HASH_MISMATCH",
  "ARTIFACT_SIGNATURE_INVALID",
  "ARTIFACT_PARENT_MISMATCH",
  "LINEAGE_ROOT_MISMATCH",
  "SIGNING_KEY_NOT_TRUSTED",
  "SIGNING_KEY_ROLE_NOT_PERMITTED",
  "CHALLENGE_NONCE_INVALID",
  "CHALLENGE_NONCE_EXPIRED",
  "CHALLENGE_NONCE_ALREADY_USED",
  "CHALLENGE_NONCE_NOT_IN_REQUEST_AUTHORITY",
  "CHALLENGE_NONCE_NOT_IN_CONNECTOR_REQUEST",
  "CHALLENGE_NONCE_NOT_IN_PROVIDER_REQUEST_BODY",
  "PROVIDER_AUTHORITY_HASH_MISMATCH",
  "PROVIDER_REQUEST_BODY_HASH_MISMATCH",
  "PROVIDER_RESPONSE_BODY_HASH_MISMATCH",
  "PROVIDER_REQUEST_METADATA_HASH_MISMATCH",
  "PROVIDER_RESPONSE_METADATA_HASH_MISMATCH",
  "CONNECTOR_INVOCATION_ID_MISMATCH",
  "SUBJECT_AUTHORITY_IDENTITY_MISMATCH",
  "SEMANTIC_AUTHORITY_HASH_MISMATCH",
  "AST_PARENT_MISMATCH",
  "AST_AUTHORITY_HASH_MISMATCH",
  "PROJECTOR_EXECUTABLE_MISMATCH",
  "PROJECTOR_KEY_NOT_TRUSTED",
  "TRANSFORMER_DEPENDENCY_MISMATCH",
  "REPOSITORY_COMMIT_MISMATCH",
  "RUNTIME_IDENTITY_MISMATCH",
  "SEMANTIC_TO_AST_REPLAY_MISMATCH",
  "AST_TO_BODY_REPLAY_MISMATCH",
  "BODY_NOT_BYTE_IDENTICAL",
  "BODY_PROJECTION_SIGNATURE_INVALID",
  "RUNTIME_COMPOSITION_MISMATCH",
  "CONNECTOR_FUNCTION_MISMATCH",
  "CONNECTOR_DEPENDENCY_BINDING_MISMATCH",
  "SEMANTIC_OPERATION_NOT_OBSERVED",
  "INVOCATION_COUNT_MISMATCH",
  "MODEL_REQUEST_AUTHORITY_LINK_MISMATCH",
  "NORMALIZED_SUBMISSION_HASH_MISMATCH",
  "PROVIDER_ATTESTATION_LINK_MISMATCH",
  "COMPLETE_LINEAGE_LINK_MISMATCH"
]
```

### UNRESOLVED dispositions

`UNRESOLVED` is permitted only before an acceptance claim exists:

```json
[
  "PROVIDER_JOB_NOT_REQUESTED",
  "PROVIDER_NETWORK_UNAVAILABLE",
  "INSTRUCTOR_SECRET_STORE_UNAVAILABLE",
  "INSTRUCTOR_OBSERVER_UNAVAILABLE"
]
```

Missing required evidence during grading is RED, not UNRESOLVED:

```text
required artifact absent
-> ARTIFACT_SCHEMA_INVALID
-> RED
```

No RED or UNRESOLVED path may emit a GREEN terminal artifact.

## Manual inspection sequence

### Verify the domain lineage

Compare exact strings:

```text
Gherkin scenario tag
==
scenario authority scenarioId
==
obligation scenarioId
==
expectation scenarioId
==
responsibility scenarioId
==
SEJ lineage scenarioId
==
AST lineage scenarioId
```

Repeat for:

```text
featureId
obligationId
expectationId
responsibilityId
signalId
semanticOperationId
```

### Verify the projected subject

The current working-tree fixtures are:

```json
{
  "fixtureStatus":
    "CURRENT WORKING-TREE VALUES; RECOMPUTE AFTER REPROJECTION",
  "semanticAuthoritySha256":
    "sha256:b43cd4661a4b533acd05c0123077f34a85f87233bc3daad7b5e7c0552ec05aee",
  "astAuthoritySha256":
    "sha256:b31222ae40db88ced626c01b7f4dc5d9ec84fcac29d4d153036ed8d5661d2bc9",
  "bodySha256":
    "sha256:33a55fb7b49ec538157f9823580edf67b287b00ee202d5e8f23c679f35514cd4"
}
```

Predict the body from the SEJ:

```typescript
export async function obtainsBoundedModelSubmission(
  context: ObtainsBoundedModelSubmissionContext
): Promise<BoundedModelSubmissionSignal> {
  return await context.obtain(context.request);
}
```

Confirm the AST tokens encode exactly that delegation. Replay SEJ to AST and
AST to TypeScript. Recompute every fixture rather than copying the displayed
values.

### Verify provider bytes

From the instructor observer, retain:

```text
exact UTF-8 request body bytes before transport
exact UTF-8 response body bytes before parsing
sanitized request metadata
response status and headers
```

Recompute:

```typescript
assert.equal(
  sha256(requestBodyUtf8),
  attestation.providerRequestBodySha256
);

assert.equal(
  sha256(responseBodyUtf8),
  attestation.providerResponseBodySha256
);
```

Confirm the nonce occurs in the exact request bytes:

```typescript
assert.equal(
  new TextDecoder()
    .decode(requestBodyUtf8)
    .includes(challengeNonce),
  true
);
```

### Run substitution controls

```typescript
tampered.providerResponseBodySha256 =
  "sha256:0000000000000000000000000000000000000000000000000000000000000000";

assert.equal(
  evaluate(tampered),
  "PROVIDER_RESPONSE_BODY_HASH_MISMATCH"
);
```

```typescript
tamperedReproduction.projectorExecutableSha256 =
  currentUnrecordedProjectorSha256;

assert.equal(
  evaluate(tamperedReproduction),
  "PROJECTOR_EXECUTABLE_MISMATCH"
);
```

```typescript
tamperedObservation.observedInvocationCount = 0;

assert.equal(
  evaluate(tamperedObservation),
  "INVOCATION_COUNT_MISMATCH"
);
```

```typescript
tamperedLineage.providerExchangeAttestationSha256 =
  anotherRunProviderAttestationSha256;

assert.equal(
  evaluate(tamperedLineage),
  "PROVIDER_ATTESTATION_LINK_MISMATCH"
);
```

## Implementation exit condition

The acceptance boundary becomes GREEN only when:

```text
all four scenarios exist under the repository capability spine
all four scenarios contain the complete four-body authority lineage
all five evidence schemas are registered and meta-valid
the embedded artifact-type enumeration admits all five types
all envelope hashes and signatures independently verify
the nonce is fresh, single-use, and present in provider request bytes
the instructor observer hashes exact transport bytes
the connector dependency binding is complete and signed
the recorded build reprojects the body byte-for-byte
the runtime observer records exactly one admitted semantic operation
the complete lineage links every evidence artifact
the exhaustive evaluator returns no RED or UNRESOLVED code
```

Until then:

```text
RED - INDEPENDENT BOUNDED-MODEL-SUBMISSION ACCEPTANCE INCOMPLETE
```
