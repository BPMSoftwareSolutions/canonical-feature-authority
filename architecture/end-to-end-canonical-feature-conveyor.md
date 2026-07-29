# End-to-End Canonical Feature Conveyor

```json
{
  "contractType": "canonical-feature-conveyor.v1",
  "contractId": "end-to-end-canonical-feature-conveyor",
  "title": "End-to-End Canonical Feature Conveyor",
  "status": "draft",
  "schemaVersion": "1.0.0"
}
```

## Feature destination

### Intended outcome

One previously nonexistent reviewed feature is constructed, projected, executed, and reviewed entirely from admitted canonical authority.

### Complete execution flow

```text
[end-to-end-canonical-feature-conveyor-context.v1]
        |
        |  1. admits-reviewed-new-feature-request
        v
[new-feature-request-admission.v1]
        |
        |  2. adapts-new-feature-request-admission
        v
[admitted-new-feature-request.v1]
        |
        |  3. projects-complete-new-feature-authority
        v
[complete-new-feature-authority.v1]
        |
        |  4. materializes-complete-new-feature
        v
[complete-new-feature-materialization.v1]
        |
        |  5. executes-newly-materialized-feature
        v
[observed-new-feature-execution.v1]
        |
        |  6. composes-new-feature-execution-comparison
        v
[new-feature-execution-comparison.v1]
        |
        |  7. verifies-complete-new-feature-lineage
        v
[new-feature-terminal-disposition.v1]
```

Current projection target: Node / TypeScript

### Projected feature execution body

Artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/executes-end-to-end-canonical-feature-conveyor.ts`

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: execute-complete-canonical-feature-conveyor
// obligation-id: execute-one-mechanically-continuous-feature-flow
// responsibility-id: executes-end-to-end-canonical-feature-conveyor
// signal-id: new-feature-terminal-disposition
// DO NOT EDIT.
import type { EndToEndCanonicalFeatureConveyorContext, NewFeatureTerminalDisposition } from "./executes-end-to-end-canonical-feature-conveyor.type.js";

export async function executesEndToEndCanonicalFeatureConveyor(
  context: EndToEndCanonicalFeatureConveyorContext
): Promise<NewFeatureTerminalDisposition> {
  const admission = await context.edges.invokes(
    "admit-reviewed-new-feature-request",
    context
  );
  const admittedRequest = await context.edges.invokes(
    "adapt-new-feature-request-admission",
    admission
  );
  const authority = await context.edges.invokes(
    "project-complete-new-feature-authority",
    admittedRequest
  );
  const materialization = await context.edges.invokes(
    "materialize-complete-new-feature",
    authority
  );
  const execution = await context.edges.invokes(
    "execute-newly-materialized-feature",
    materialization
  );
  const comparison = await context.edges.invokes(
    "compose-new-feature-execution-comparison",
    execution
  );
  const disposition = await context.edges.invokes(
    "verify-complete-new-feature-lineage",
    comparison
  );
  return disposition;
}

```

### Projected heterogeneous composition types

Artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/executes-end-to-end-canonical-feature-conveyor.type.ts`

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: execute-complete-canonical-feature-conveyor
// obligation-id: execute-one-mechanically-continuous-feature-flow
// responsibility-id: executes-end-to-end-canonical-feature-conveyor
// signal-id: new-feature-terminal-disposition
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}

export interface NewFeatureRequestAdmission {
  readonly disposition:
    | "ADMITTED"
    | "REJECTED";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly lineageId: string;
}

export interface AdmittedNewFeatureRequest {
  readonly disposition: "ADMITTED";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly lineageId: string;
}

export interface CompleteNewFeatureAuthority {
  readonly disposition: "COMPLETE";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly authorityRef: GovernedArtifactRef;
  readonly lineageId: string;
}

export interface CompleteNewFeatureMaterialization {
  readonly disposition: "MATERIALIZED";
  readonly featureId: string;
  readonly authorityRef: GovernedArtifactRef;
  readonly artifactManifestRef: GovernedArtifactRef;
  readonly lineageId: string;
}

export interface ObservedNewFeatureExecution {
  readonly disposition:
    | "CONFORMS"
    | "DIVERGES";
  readonly featureId: string;
  readonly artifactManifestRef: GovernedArtifactRef;
  readonly semanticObservationRef: GovernedArtifactRef;
  readonly projectedObservationRef: GovernedArtifactRef;
  readonly expectedSignalRef: GovernedArtifactRef;
  readonly astSourceCorrespondenceRef: GovernedArtifactRef;
  readonly lineageId: string;
}

export interface NewFeatureExecutionComparison {
  readonly disposition: "COMPLETE";
  readonly featureId: string;
  readonly semanticObservationRef: GovernedArtifactRef;
  readonly projectedObservationRef: GovernedArtifactRef;
  readonly expectedSignalRef: GovernedArtifactRef;
  readonly astSourceCorrespondenceRef: GovernedArtifactRef;
  readonly comparisonEvidenceRef: GovernedArtifactRef;
  readonly lineageId: string;
}

export interface NewFeatureTerminalDisposition {
  readonly disposition:
    | "PROJECTION_CONFORMS"
    | "PROJECTION_DIVERGES";
  readonly comparisonEvidenceRef: GovernedArtifactRef;
  readonly lineageId: string;
}

export interface EndToEndCanonicalFeatureConveyorContext {
  readonly reviewDisposition:
    | "REVIEWED"
    | "UNREVIEWED";
  readonly existingFeatureIds: ReadonlyArray<string>;
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly lineageId: string;
  readonly edges: {
    readonly invokes: <K extends "admit-reviewed-new-feature-request" | "adapt-new-feature-request-admission" | "project-complete-new-feature-authority" | "materialize-complete-new-feature" | "execute-newly-materialized-feature" | "compose-new-feature-execution-comparison" | "verify-complete-new-feature-lineage">(edgeId: K, input: K extends "admit-reviewed-new-feature-request" ? EndToEndCanonicalFeatureConveyorContext : K extends "adapt-new-feature-request-admission" ? NewFeatureRequestAdmission : K extends "project-complete-new-feature-authority" ? AdmittedNewFeatureRequest : K extends "materialize-complete-new-feature" ? CompleteNewFeatureAuthority : K extends "execute-newly-materialized-feature" ? CompleteNewFeatureMaterialization : K extends "compose-new-feature-execution-comparison" ? ObservedNewFeatureExecution : NewFeatureExecutionComparison) => Promise<K extends "admit-reviewed-new-feature-request" ? NewFeatureRequestAdmission : K extends "adapt-new-feature-request-admission" ? AdmittedNewFeatureRequest : K extends "project-complete-new-feature-authority" ? CompleteNewFeatureAuthority : K extends "materialize-complete-new-feature" ? CompleteNewFeatureMaterialization : K extends "execute-newly-materialized-feature" ? ObservedNewFeatureExecution : K extends "compose-new-feature-execution-comparison" ? NewFeatureExecutionComparison : NewFeatureTerminalDisposition>;
  };
}

```

### Required implementation artifact set

```json
{
  "edgeRegistry": {
    "contractId": "canonical-feature-edge-registry.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/canonical-feature-edge-registry.type.ts",
    "edgeContracts": [
      {
        "sequence": 1,
        "edgeId": "admit-reviewed-new-feature-request",
        "inputContractId": "end-to-end-canonical-feature-conveyor-context.v1",
        "outputContractId": "new-feature-request-admission.v1"
      },
      {
        "sequence": 2,
        "edgeId": "adapt-new-feature-request-admission",
        "inputContractId": "new-feature-request-admission.v1",
        "outputContractId": "admitted-new-feature-request.v1"
      },
      {
        "sequence": 3,
        "edgeId": "project-complete-new-feature-authority",
        "inputContractId": "admitted-new-feature-request.v1",
        "outputContractId": "complete-new-feature-authority.v1"
      },
      {
        "sequence": 4,
        "edgeId": "materialize-complete-new-feature",
        "inputContractId": "complete-new-feature-authority.v1",
        "outputContractId": "complete-new-feature-materialization.v1"
      },
      {
        "sequence": 5,
        "edgeId": "execute-newly-materialized-feature",
        "inputContractId": "complete-new-feature-materialization.v1",
        "outputContractId": "observed-new-feature-execution.v1"
      },
      {
        "sequence": 6,
        "edgeId": "compose-new-feature-execution-comparison",
        "inputContractId": "observed-new-feature-execution.v1",
        "outputContractId": "new-feature-execution-comparison.v1"
      },
      {
        "sequence": 7,
        "edgeId": "verify-complete-new-feature-lineage",
        "inputContractId": "new-feature-execution-comparison.v1",
        "outputContractId": "new-feature-terminal-disposition.v1"
      }
    ],
    "projectorRequest": {
      "contract": {
        "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
        "schemaVersion": "1.0.0",
        "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
      },
      "projectionId": "project-canonical-feature-edge-registry-type",
      "targetLanguage": "typescript",
      "artifact": {
        "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/canonical-feature-edge-registry.type.ts"
      },
      "lineage": {
        "featureId": "end-to-end-canonical-feature-conveyor-fractal",
        "scenarioId": "execute-complete-canonical-feature-conveyor",
        "obligationId": "execute-one-mechanically-continuous-feature-flow",
        "responsibilityId": "executes-end-to-end-canonical-feature-conveyor",
        "signalId": "new-feature-terminal-disposition"
      },
      "imports": [
        {
          "kind": "type-only",
          "moduleSpecifier": "./executes-end-to-end-canonical-feature-conveyor.type.js",
          "namedBindings": [
            "EndToEndCanonicalFeatureConveyorContext",
            "NewFeatureRequestAdmission",
            "AdmittedNewFeatureRequest",
            "CompleteNewFeatureAuthority",
            "CompleteNewFeatureMaterialization",
            "ObservedNewFeatureExecution",
            "NewFeatureExecutionComparison",
            "NewFeatureTerminalDisposition"
          ]
        }
      ],
      "interface": {
        "identity": "canonical-feature-edge-registry",
        "name": "CanonicalFeatureEdgeRegistry",
        "members": [
          {
            "name": "invokes",
            "typeReference": "<K extends \"admit-reviewed-new-feature-request\" | \"adapt-new-feature-request-admission\" | \"project-complete-new-feature-authority\" | \"materialize-complete-new-feature\" | \"execute-newly-materialized-feature\" | \"compose-new-feature-execution-comparison\" | \"verify-complete-new-feature-lineage\">(edgeId: K, input: K extends \"admit-reviewed-new-feature-request\" ? EndToEndCanonicalFeatureConveyorContext : K extends \"adapt-new-feature-request-admission\" ? NewFeatureRequestAdmission : K extends \"project-complete-new-feature-authority\" ? AdmittedNewFeatureRequest : K extends \"materialize-complete-new-feature\" ? CompleteNewFeatureAuthority : K extends \"execute-newly-materialized-feature\" ? CompleteNewFeatureMaterialization : K extends \"compose-new-feature-execution-comparison\" ? ObservedNewFeatureExecution : NewFeatureExecutionComparison) => Promise<K extends \"admit-reviewed-new-feature-request\" ? NewFeatureRequestAdmission : K extends \"adapt-new-feature-request-admission\" ? AdmittedNewFeatureRequest : K extends \"project-complete-new-feature-authority\" ? CompleteNewFeatureAuthority : K extends \"materialize-complete-new-feature\" ? CompleteNewFeatureMaterialization : K extends \"execute-newly-materialized-feature\" ? ObservedNewFeatureExecution : K extends \"compose-new-feature-execution-comparison\" ? NewFeatureExecutionComparison : NewFeatureTerminalDisposition>"
          }
        ]
      }
    },
    "bindingStatus": "IMPLEMENTED"
  },
  "compositionTypes": {
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/executes-end-to-end-canonical-feature-conveyor.type.ts",
    "authorityRef": "implementation-artifact:composition-types",
    "bindingStatus": "PROJECTOR_OUTPUT_AVAILABLE",
    "projectorRequest": {
      "contract": {
        "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
        "schemaVersion": "1.0.0",
        "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
      },
      "projectionId": "project-end-to-end-canonical-feature-conveyor-composition-types",
      "targetLanguage": "typescript",
      "artifact": {
        "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/executes-end-to-end-canonical-feature-conveyor.type.ts"
      },
      "lineage": {
        "featureId": "end-to-end-canonical-feature-conveyor-fractal",
        "scenarioId": "execute-complete-canonical-feature-conveyor",
        "obligationId": "execute-one-mechanically-continuous-feature-flow",
        "responsibilityId": "executes-end-to-end-canonical-feature-conveyor",
        "signalId": "new-feature-terminal-disposition"
      },
      "declarations": [
        {
          "interface": {
            "identity": "governed-artifact-ref",
            "name": "GovernedArtifactRef",
            "members": [
              {
                "name": "artifactId",
                "typeReference": "string"
              },
              {
                "name": "sha256",
                "typeReference": "string"
              },
              {
                "name": "mediaType",
                "typeReference": "string"
              }
            ]
          }
        },
        {
          "interface": {
            "identity": "new-feature-request-admission",
            "name": "NewFeatureRequestAdmission",
            "members": [
              {
                "name": "disposition",
                "unionAlternatives": [
                  "ADMITTED",
                  "REJECTED"
                ]
              },
              {
                "name": "featureId",
                "typeReference": "string"
              },
              {
                "name": "requestRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              }
            ],
            "separatedBefore": true
          }
        },
        {
          "interface": {
            "identity": "admitted-new-feature-request",
            "name": "AdmittedNewFeatureRequest",
            "members": [
              {
                "name": "disposition",
                "typeReference": "ADMITTED",
                "literal": true
              },
              {
                "name": "featureId",
                "typeReference": "string"
              },
              {
                "name": "requestRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              }
            ],
            "separatedBefore": true
          }
        },
        {
          "interface": {
            "identity": "complete-new-feature-authority",
            "name": "CompleteNewFeatureAuthority",
            "members": [
              {
                "name": "disposition",
                "typeReference": "COMPLETE",
                "literal": true
              },
              {
                "name": "featureId",
                "typeReference": "string"
              },
              {
                "name": "requestRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "authorityRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              }
            ],
            "separatedBefore": true
          }
        },
        {
          "interface": {
            "identity": "complete-new-feature-materialization",
            "name": "CompleteNewFeatureMaterialization",
            "members": [
              {
                "name": "disposition",
                "typeReference": "MATERIALIZED",
                "literal": true
              },
              {
                "name": "featureId",
                "typeReference": "string"
              },
              {
                "name": "authorityRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "artifactManifestRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              }
            ],
            "separatedBefore": true
          }
        },
        {
          "interface": {
            "identity": "observed-new-feature-execution",
            "name": "ObservedNewFeatureExecution",
            "members": [
              {
                "name": "disposition",
                "unionAlternatives": [
                  "CONFORMS",
                  "DIVERGES"
                ]
              },
              {
                "name": "featureId",
                "typeReference": "string"
              },
              {
                "name": "artifactManifestRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "semanticObservationRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "projectedObservationRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "expectedSignalRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "astSourceCorrespondenceRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              }
            ],
            "separatedBefore": true
          }
        },
        {
          "interface": {
            "identity": "new-feature-execution-comparison",
            "name": "NewFeatureExecutionComparison",
            "members": [
              {
                "name": "disposition",
                "typeReference": "COMPLETE",
                "literal": true
              },
              {
                "name": "featureId",
                "typeReference": "string"
              },
              {
                "name": "semanticObservationRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "projectedObservationRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "expectedSignalRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "astSourceCorrespondenceRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "comparisonEvidenceRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              }
            ],
            "separatedBefore": true
          }
        },
        {
          "interface": {
            "identity": "new-feature-terminal-disposition",
            "name": "NewFeatureTerminalDisposition",
            "members": [
              {
                "name": "disposition",
                "unionAlternatives": [
                  "PROJECTION_CONFORMS",
                  "PROJECTION_DIVERGES"
                ]
              },
              {
                "name": "comparisonEvidenceRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              }
            ],
            "separatedBefore": true
          }
        },
        {
          "interface": {
            "identity": "end-to-end-canonical-feature-conveyor-context",
            "name": "EndToEndCanonicalFeatureConveyorContext",
            "members": [
              {
                "name": "reviewDisposition",
                "unionAlternatives": [
                  "REVIEWED",
                  "UNREVIEWED"
                ]
              },
              {
                "name": "existingFeatureIds",
                "typeReference": "ReadonlyArray<string>"
              },
              {
                "name": "featureId",
                "typeReference": "string"
              },
              {
                "name": "requestRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              },
              {
                "name": "edges",
                "members": [
                  {
                    "name": "invokes",
                    "typeReference": "<K extends \"admit-reviewed-new-feature-request\" | \"adapt-new-feature-request-admission\" | \"project-complete-new-feature-authority\" | \"materialize-complete-new-feature\" | \"execute-newly-materialized-feature\" | \"compose-new-feature-execution-comparison\" | \"verify-complete-new-feature-lineage\">(edgeId: K, input: K extends \"admit-reviewed-new-feature-request\" ? EndToEndCanonicalFeatureConveyorContext : K extends \"adapt-new-feature-request-admission\" ? NewFeatureRequestAdmission : K extends \"project-complete-new-feature-authority\" ? AdmittedNewFeatureRequest : K extends \"materialize-complete-new-feature\" ? CompleteNewFeatureAuthority : K extends \"execute-newly-materialized-feature\" ? CompleteNewFeatureMaterialization : K extends \"compose-new-feature-execution-comparison\" ? ObservedNewFeatureExecution : NewFeatureExecutionComparison) => Promise<K extends \"admit-reviewed-new-feature-request\" ? NewFeatureRequestAdmission : K extends \"adapt-new-feature-request-admission\" ? AdmittedNewFeatureRequest : K extends \"project-complete-new-feature-authority\" ? CompleteNewFeatureAuthority : K extends \"materialize-complete-new-feature\" ? CompleteNewFeatureMaterialization : K extends \"execute-newly-materialized-feature\" ? ObservedNewFeatureExecution : K extends \"compose-new-feature-execution-comparison\" ? NewFeatureExecutionComparison : NewFeatureTerminalDisposition>"
                  }
                ]
              }
            ],
            "separatedBefore": true
          }
        }
      ]
    }
  },
  "registrations": [
    {
      "responsibilityId": "admits-reviewed-new-feature-request",
      "edgeId": "admit-reviewed-new-feature-request",
      "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/registers-admit-reviewed-new-feature-request.ts",
      "implementationRef": "semantic-execution:admit-reviewed-new-feature-request",
      "bindingStatus": "IMPLEMENTED"
    },
    {
      "responsibilityId": "adapts-new-feature-request-admission",
      "edgeId": "adapt-new-feature-request-admission",
      "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/registers-adapt-new-feature-request-admission.ts",
      "implementationRef": "semantic-execution:adapt-new-feature-request-admission",
      "bindingStatus": "IMPLEMENTED"
    },
    {
      "responsibilityId": "projects-complete-new-feature-authority",
      "edgeId": "project-complete-new-feature-authority",
      "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/registers-project-complete-new-feature-authority.ts",
      "implementationRef": "semantic-execution:project-complete-new-feature-authority",
      "bindingStatus": "IMPLEMENTED"
    },
    {
      "responsibilityId": "materializes-complete-new-feature",
      "edgeId": "materialize-complete-new-feature",
      "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/registers-materialize-complete-new-feature.ts",
      "implementationRef": "semantic-execution:materialize-complete-new-feature",
      "bindingStatus": "IMPLEMENTED"
    },
    {
      "responsibilityId": "executes-newly-materialized-feature",
      "edgeId": "execute-newly-materialized-feature",
      "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/registers-execute-newly-materialized-feature.ts",
      "implementationRef": "semantic-execution:execute-newly-materialized-feature",
      "bindingStatus": "IMPLEMENTED"
    },
    {
      "responsibilityId": "composes-new-feature-execution-comparison",
      "edgeId": "compose-new-feature-execution-comparison",
      "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/registers-compose-new-feature-execution-comparison.ts",
      "implementationRef": "semantic-execution:compose-new-feature-execution-comparison",
      "bindingStatus": "IMPLEMENTED"
    },
    {
      "responsibilityId": "verifies-complete-new-feature-lineage",
      "edgeId": "verify-complete-new-feature-lineage",
      "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/registers-verify-complete-new-feature-lineage.ts",
      "implementationRef": "semantic-execution:verify-complete-new-feature-lineage",
      "bindingStatus": "IMPLEMENTED"
    }
  ],
  "semanticInterpreter": {
    "authorityRef": "semantic-interpreter:canonical-feature-semantic-interpreter.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/interprets-canonical-feature-semantic-authority.ts",
    "bindingStatus": "IMPLEMENTED",
    "dataOwnership": "interpreter-logic-only",
    "authorityInput": "runtime-loaded-semantic-authorities"
  },
  "semanticAuthorityLoader": {
    "contractId": "canonical-feature-semantic-authority-loader.v1",
    "authorityRef": "implementation-artifact:semantic-authority-loader",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/loads-canonical-feature-semantic-authority.ts",
    "sourceArtifactPaths": [
      "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/admit-reviewed-new-feature-request.semantic-authority.json",
      "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/adapt-new-feature-request-admission.semantic-authority.json",
      "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/project-complete-new-feature-authority.semantic-authority.json",
      "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/materialize-complete-new-feature.semantic-authority.json",
      "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/execute-newly-materialized-feature.semantic-authority.json",
      "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/compose-new-feature-execution-comparison.semantic-authority.json",
      "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/verify-complete-new-feature-lineage.semantic-authority.json"
    ],
    "sourceMediaType": "application/json",
    "repositoryRootInput": "explicit-runtime-argument",
    "decoding": "UTF-8-then-JSON.parse",
    "runtimeValidation": "required-semantic-authority-envelope",
    "governanceValidation": "canonical-feature-conveyor-contract-schema",
    "authorityOwnership": "scenario-owned-json-artifacts",
    "embeddedSemanticAuthority": "forbidden",
    "bindingStatus": "IMPLEMENTED"
  },
  "runtimeAdapter": {
    "contractId": "canonical-feature-runtime-adapter.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/invokes-canonical-feature-conveyor.ts",
    "acceptsContractId": "reviewed-new-feature-request.v1",
    "constructsContextContractId": "end-to-end-canonical-feature-conveyor-context.v1",
    "producesContractId": "new-feature-terminal-disposition.v1",
    "operations": [
      "loads-reviewed-request-context",
      "invokes-conveyor"
    ],
    "bindingStatus": "IMPLEMENTED"
  },
  "authorityProjectorBoundary": {
    "contractId": "complete-new-feature-authority-projector-port.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/complete-new-feature-authority-projector.port.ts",
    "operations": [
      "projects-and-writes-complete-authority"
    ],
    "projectorRequest": {
      "contract": {
        "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
        "schemaVersion": "1.0.0",
        "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
      },
      "projectionId": "project-complete-new-feature-authority-projector-port",
      "targetLanguage": "typescript",
      "artifact": {
        "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/complete-new-feature-authority-projector.port.ts"
      },
      "lineage": {
        "featureId": "end-to-end-canonical-feature-conveyor-fractal",
        "scenarioId": "project-one-complete-new-feature-authority",
        "obligationId": "establish-one-complete-new-feature-authority",
        "responsibilityId": "projects-complete-new-feature-authority",
        "signalId": "complete-new-feature-authority"
      },
      "imports": [
        {
          "kind": "type-only",
          "moduleSpecifier": "../composition/executes-end-to-end-canonical-feature-conveyor.type.js",
          "namedBindings": [
            "AdmittedNewFeatureRequest",
            "CompleteNewFeatureAuthority"
          ]
        }
      ],
      "declarations": [
        {
          "interface": {
            "identity": "complete-new-feature-authority-projector-port",
            "name": "CompleteNewFeatureAuthorityProjectorPort",
            "members": [
              {
                "name": "projectsAndWritesCompleteAuthority",
                "typeReference": "(input: AdmittedNewFeatureRequest) => Promise<CompleteNewFeatureAuthority>"
              }
            ],
            "documentation": [
              "Port declared by complete-new-feature-authority-projector-port.v1.",
              "",
              "Projects and writes authority from one admitted new-feature request."
            ]
          }
        }
      ]
    },
    "bindingStatus": "DECLARED"
  },
  "materializationBoundary": {
    "contractId": "complete-new-feature-materializer-port.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/complete-new-feature-materializer.port.ts",
    "operations": [
      "materializes-and-writes-artifact-manifest"
    ],
    "projectorRequest": {
      "contract": {
        "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
        "schemaVersion": "1.0.0",
        "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
      },
      "projectionId": "project-complete-new-feature-materializer-port",
      "targetLanguage": "typescript",
      "artifact": {
        "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/complete-new-feature-materializer.port.ts"
      },
      "lineage": {
        "featureId": "end-to-end-canonical-feature-conveyor-fractal",
        "scenarioId": "materialize-one-complete-new-feature",
        "obligationId": "materialize-only-admitted-new-feature-authority",
        "responsibilityId": "materializes-complete-new-feature",
        "signalId": "complete-new-feature-materialization"
      },
      "imports": [
        {
          "kind": "type-only",
          "moduleSpecifier": "../composition/executes-end-to-end-canonical-feature-conveyor.type.js",
          "namedBindings": [
            "CompleteNewFeatureAuthority",
            "CompleteNewFeatureMaterialization"
          ]
        }
      ],
      "declarations": [
        {
          "interface": {
            "identity": "complete-new-feature-materializer-port",
            "name": "CompleteNewFeatureMaterializerPort",
            "members": [
              {
                "name": "materializesAndWritesArtifactManifest",
                "typeReference": "(input: CompleteNewFeatureAuthority) => Promise<CompleteNewFeatureMaterialization>"
              }
            ],
            "documentation": [
              "Port declared by complete-new-feature-materializer-port.v1.",
              "",
              "Materializes a complete authority and writes its artifact manifest."
            ]
          }
        }
      ]
    },
    "bindingStatus": "DECLARED"
  },
  "fixtureBoundary": {
    "contractId": "canonical-feature-evaluation-fixture-port.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/canonical-feature-evaluation-fixture.port.ts",
    "operations": [
      "loadsSemanticFixture",
      "loadsProjectedFixture",
      "executes-semantic-and-projected-surfaces"
    ],
    "projectorRequest": {
      "contract": {
        "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
        "schemaVersion": "1.0.0",
        "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
      },
      "projectionId": "project-canonical-feature-evaluation-fixture-port",
      "targetLanguage": "typescript",
      "artifact": {
        "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/canonical-feature-evaluation-fixture.port.ts"
      },
      "lineage": {
        "featureId": "end-to-end-canonical-feature-conveyor-fractal",
        "scenarioId": "execute-one-newly-materialized-feature",
        "obligationId": "execute-new-feature-through-admitted-semantics",
        "responsibilityId": "executes-newly-materialized-feature",
        "signalId": "observed-new-feature-execution"
      },
      "interface": {
        "identity": "canonical-feature-evaluation-fixture-port",
        "name": "CanonicalFeatureEvaluationFixturePort",
        "documentation": [
          "Governed boundary for the evaluation fixture operations declared by canonical-feature-evaluation-fixture-port.v1."
        ],
        "members": [
          {
            "name": "loadsSemanticFixture",
            "typeReference": "(input: unknown) => Promise<unknown>"
          },
          {
            "name": "loadsProjectedFixture",
            "typeReference": "(input: unknown) => Promise<unknown>",
            "separatedBefore": true
          },
          {
            "name": "executesSemanticAndProjectedSurfaces",
            "typeReference": "(input: unknown) => Promise<unknown>",
            "separatedBefore": true
          }
        ]
      }
    },
    "bindingStatus": "DECLARED"
  },
  "evidenceBoundary": {
    "contractId": "governed-artifact-evidence-store.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/governed-artifact-evidence-store.port.ts",
    "operations": [
      "writes",
      "resolves",
      "verifies",
      "writes-execution-comparison-evidence",
      "resolves-and-verifies-comparison-evidence"
    ],
    "canonicalization": "RFC8785-JCS",
    "projectorRequest": {
      "contract": {
        "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
        "schemaVersion": "1.0.0",
        "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
      },
      "projectionId": "project-governed-artifact-evidence-store-port",
      "targetLanguage": "typescript",
      "artifact": {
        "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/governed-artifact-evidence-store.port.ts"
      },
      "lineage": {
        "featureId": "end-to-end-canonical-feature-conveyor-fractal",
        "scenarioId": "compose-one-new-feature-execution-comparison",
        "obligationId": "compose-complete-execution-comparison",
        "responsibilityId": "composes-new-feature-execution-comparison",
        "signalId": "new-feature-execution-comparison"
      },
      "interface": {
        "identity": "governed-artifact-evidence-store-port",
        "name": "GovernedArtifactEvidenceStorePort",
        "documentation": [
          "Governed RFC8785-JCS and SHA-256 evidence boundary declared by governed-artifact-evidence-store.v1 and semantic-execution-evidence.v1."
        ],
        "members": [
          {
            "name": "writes",
            "typeReference": "(input: unknown) => Promise<unknown>"
          },
          {
            "name": "resolves",
            "typeReference": "(input: unknown) => Promise<unknown>",
            "separatedBefore": true
          },
          {
            "name": "verifies",
            "typeReference": "(input: unknown) => Promise<unknown>",
            "separatedBefore": true
          },
          {
            "name": "writesExecutionComparisonEvidence",
            "typeReference": "(input: unknown) => Promise<unknown>",
            "separatedBefore": true
          },
          {
            "name": "resolvesAndVerifiesComparisonEvidence",
            "typeReference": "(input: unknown) => Promise<unknown>",
            "separatedBefore": true
          }
        ]
      }
    },
    "bindingStatus": "DECLARED"
  },
  "executionProof": {
    "contractId": "canonical-feature-conveyor-execution-proof.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/proves-canonical-feature-conveyor.ts",
    "semanticSurface": "runtime-loaded-scenario-semantic-authority-json",
    "projectedSurface": "projected-composition-and-responsibility-bodies",
    "comparison": "RFC8785-JCS-equivalence",
    "expectedDisposition": "PROJECTION_CONFORMS"
  },
  "admissionRequiredStatuses": {
    "edgeRegistry": "IMPLEMENTED",
    "compositionTypes": "MATERIALIZED",
    "registrations": "IMPLEMENTED",
    "semanticInterpreter": "IMPLEMENTED",
    "semanticAuthorityLoader": "IMPLEMENTED",
    "runtimeAdapter": "IMPLEMENTED",
    "authorityProjectorBoundary": "IMPLEMENTED",
    "materializationBoundary": "IMPLEMENTED",
    "fixtureBoundary": "IMPLEMENTED",
    "evidenceBoundary": "IMPLEMENTED"
  },
  "projectionPackage": {
    "packageId": "end-to-end-canonical-feature-conveyor-implementation.v1",
    "targetPolicy": {
      "root": "governed-repository-workspace",
      "repositoryRoot": ".",
      "capabilityRoot": "capabilities/end-to-end-canonical-feature-conveyor-fractal",
      "projectionMode": "working-tree",
      "reviewSurface": "git-diff",
      "authoritySource": "canonical-json-only",
      "markdownScraping": "forbidden",
      "overwrite": "replace-only-if-lineage-matches",
      "pathPolicy": "all-artifacts-descend-from-capability-root",
      "alternateFileTopologies": "forbidden"
    },
    "posturePolicy": [
      "PROJECTABLE",
      "PROJECTOR_MISSING",
      "AUTHORITY_INCOMPLETE",
      "BLOCKED_BY_DEPENDENCY",
      "MATERIALIZED",
      "VERIFIED"
    ],
    "validationPolicy": {
      "projectableArtifacts": "byte-for-byte",
      "unresolvedArtifacts": "presence-is-not-verification",
      "undeclaredArtifacts": "reject-within-governed-roots",
      "typescript": "strict-compile",
      "lineage": "authority-ref-and-source-hash"
    },
    "fileBodyCoordinates": "derive-from-file-body-placement-rules",
    "dependencyPolicy": {
      "localModuleBoundary": "capability-root-only",
      "externalModuleImports": "forbidden",
      "conveyorSpecificToolsOutsideCapability": "forbidden",
      "runtimeAuthorityLoading": "scenario-owned-json-files-only",
      "embeddedSemanticAuthority": "forbidden"
    },
    "supplementalArtifacts": [
      {
        "artifactId": "canonical-feature-edge-registry-type",
        "family": "composition",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/canonical-feature-edge-registry.type.ts",
        "sourceAuthorityRef": "implementation-artifact:edge-registry",
        "projectorCapability": "projects-production-typescript",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "end-to-end-canonical-feature-conveyor-type",
        "family": "composition",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/executes-end-to-end-canonical-feature-conveyor.type.ts",
        "sourceAuthorityRef": "implementation-artifact:composition-types",
        "projectorCapability": "projects-production-typescript",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "canonical-feature-semantic-interpreter",
        "family": "semantic-interpreter",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/interprets-canonical-feature-semantic-authority.ts",
        "sourceAuthorityRef": "semantic-interpreter:canonical-feature-semantic-interpreter.v1",
        "projectorCapability": "projects-semantic-interpreter",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "canonical-feature-semantic-authority-loader",
        "family": "semantic-authority-loader",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/loads-canonical-feature-semantic-authority.ts",
        "sourceAuthorityRef": "implementation-artifact:semantic-authority-loader",
        "projectorCapability": "projects-semantic-authority-loader",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "complete-new-feature-authority-projector-port",
        "family": "runtime-port",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/complete-new-feature-authority-projector.port.ts",
        "sourceAuthorityRef": "implementation-artifact:authority-projector-boundary",
        "projectorCapability": "projects-production-typescript",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "complete-new-feature-materializer-port",
        "family": "runtime-port",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/complete-new-feature-materializer.port.ts",
        "sourceAuthorityRef": "implementation-artifact:materialization-boundary",
        "projectorCapability": "projects-production-typescript",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "canonical-feature-evaluation-fixture-port",
        "family": "evaluation-port",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/canonical-feature-evaluation-fixture.port.ts",
        "sourceAuthorityRef": "implementation-artifact:evaluation-fixture",
        "projectorCapability": "projects-production-typescript",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "governed-artifact-evidence-store-port",
        "family": "evaluation-port",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/governed-artifact-evidence-store.port.ts",
        "sourceAuthorityRef": "implementation-artifact:evidence-store",
        "projectorCapability": "projects-production-typescript",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "canonical-feature-conveyor-execution-proof",
        "family": "evaluation-proof",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/proves-canonical-feature-conveyor.ts",
        "sourceAuthorityRef": "implementation-artifact:execution-proof",
        "projectorCapability": "projects-evaluation-proof",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "canonical-feature-conveyor-self-hosting-runner",
        "family": "self-hosting-runner",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/self-hosts-canonical-feature-conveyor.mjs",
        "sourceAuthorityRef": "self-hosting:canonical-feature-conveyor-self-hosting.v1",
        "projectorCapability": "projects-self-hosting-runner",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      }
    ]
  },
  "workspaceProjectionAuthority": {
    "repositoryRoot": ".",
    "capabilityRoot": "capabilities/end-to-end-canonical-feature-conveyor-fractal",
    "projectionMode": "working-tree",
    "reviewSurface": "git-diff",
    "sourceMaterialization": "direct-to-governed-capability-paths",
    "alternateFileTopologies": "forbidden",
    "dirtyStatePolicy": "PRESERVE_UNRELATED_DIRTY_PATHS",
    "failurePolicy": "LEAVE_AUTHORIZED_PARTIAL_DELTA",
    "compileRoot": ".",
    "executionRoot": ".",
    "evidenceRoot": "machine-local-outside-repository"
  }
}
```

### Executable implementation projection map

Package: `end-to-end-canonical-feature-conveyor-implementation.v1`

Topology SHA-256: `sha256:34618b4c16a7c101c601faf15b89c45d01de936ea8503577f80710868b501de6`

| Artifact | Family | Projector capability | Posture | Source SHA-256 |
| --- | --- | --- | --- | --- |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/end-to-end-canonical-feature-conveyor-fractal.feature` | feature | `projects-file-body-system` | `PROJECTABLE` | `sha256:2e1c568f7ce8307986c168fd47e5edb0c97c5793e204e92c2734b6603d654571` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/declares-scenario-authority.json` | scenario-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:9de725f934a5fb8de13daadedaae27ed4137acb680d8827144b8fe484c988149` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/admit-reviewed-new-feature-request.semantic-authority.json` | semantic-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:67da793c734e51797ae5b77c83ae93918f1fc0d392de7579601c08f74fcaaa96` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.feature-body-authority.json` | feature-body-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:df2510f28b4bf28d743c1b0f6198035cfe90dec5be3c85ce14e0004e3670acb1` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts.ast.authority.json` | ast-authority | `projects-production-typescript` | `PROJECTABLE` | `sha256:cdf1484a3c627d1384edeb2644f62a9b674c924d025e203c9cfd45c15344b8d9` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.type.ts` | responsibility-type | `projects-production-typescript` | `PROJECTABLE` | `sha256:49242352cf6178dcc37dcc708ece04eef588c1708b5dcad78fa469edf4c11130` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts` | responsibility-body | `projects-production-typescript` | `PROJECTABLE` | `sha256:e792cd5166d6c82506992fd97259b45b9ce615800fd8aebcde1f414ebf0963e9` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/registers-admit-reviewed-new-feature-request.ts` | runtime-registration | `projects-runtime-edge-registration` | `PROJECTABLE` | `sha256:cf627d851f8221e50a9f0fbae22f4e3e04d5b6888de1a4a62941a218c53d34ce` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/declares-scenario-authority.json` | scenario-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:a845eb2ee09b5877e6c95afc31d08172c66f1e303b92138abe5624100e3935ec` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/adapt-new-feature-request-admission.semantic-authority.json` | semantic-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:b49c9d93f581c7e6376e02bcd866a301fc5c68264787c968709b5cb6f5a72952` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.feature-body-authority.json` | feature-body-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:4f2d7450a356bd24cb0f568705eee30eee9c9aec118a20f94cf94e5b0f901771` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.ts.ast.authority.json` | ast-authority | `projects-production-typescript` | `PROJECTABLE` | `sha256:7962609e96d8ceacc0d80a926e841af780bd505c3cbb29860fb4b3ba5a946a63` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.type.ts` | responsibility-type | `projects-production-typescript` | `PROJECTABLE` | `sha256:d3b392d5e192fbadc6e790075828e972a0ff092777829fcb75441c33c6bcb59d` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.ts` | responsibility-body | `projects-production-typescript` | `PROJECTABLE` | `sha256:3d2f262de6223bba9db4e5816940d549b94e3066ae6cf98d50f933f4970dd712` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/registers-adapt-new-feature-request-admission.ts` | runtime-registration | `projects-runtime-edge-registration` | `PROJECTABLE` | `sha256:8f0f6caed9e89f82609b78a3c14ae3b567159ddb573129e6e5f54c2d62245064` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/declares-scenario-authority.json` | scenario-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:86148e2802700bf211b18cb53930a0af25578952c3750615e5ac9e4d19f418ce` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/project-complete-new-feature-authority.semantic-authority.json` | semantic-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:c0137a89082bfd4b17cc9d5e9ceb3a6080a5ca3b4e23ac2f51b08bd7f03b4beb` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.feature-body-authority.json` | feature-body-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:6f65983f14311a3ac7bf78c5f4d5cf25479059b52d45107e56e0d3d00a8b13fe` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.ts.ast.authority.json` | ast-authority | `projects-production-typescript` | `PROJECTABLE` | `sha256:43206300e2c615fa26dc8caea758cd574b540428ba1d6eca3ce0f7fe61c727d5` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.type.ts` | responsibility-type | `projects-production-typescript` | `PROJECTABLE` | `sha256:668bebfd230f81b6a4ffd0297ce557f35fb32e4ac863716347c5340a02119fce` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.ts` | responsibility-body | `projects-production-typescript` | `PROJECTABLE` | `sha256:a84716b9b1d23238a1e8ff3899ff6e3fe6c2b21c3189f8441e476ddcf7293245` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/registers-project-complete-new-feature-authority.ts` | runtime-registration | `projects-runtime-edge-registration` | `PROJECTABLE` | `sha256:9e330b319d36947752a20cf560d0907805b8c02bad872f9d1ee1597076f2adcd` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/declares-scenario-authority.json` | scenario-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:587f7c730e80a6f666caa735010a2f554533c6cece10fc88153797f767419428` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/materialize-complete-new-feature.semantic-authority.json` | semantic-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:83efe2faff6e96a71f3b95f0dc22964c5eea713ecbb501119b93d7070e64506a` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.feature-body-authority.json` | feature-body-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:7b584b2698ab1f86527b754e9069ebf22e769753fe32197cec921ccadef0bf0a` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.ts.ast.authority.json` | ast-authority | `projects-production-typescript` | `PROJECTABLE` | `sha256:07cb2f5fd64cdd54d8d9e63c9b2ede010d265e67be5d23925e7fc6ba72e73420` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.type.ts` | responsibility-type | `projects-production-typescript` | `PROJECTABLE` | `sha256:b2eb25bfd2b09b6758c3c45a23fcae3cfc03c225db5cb8339fbe918e14b4c17c` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.ts` | responsibility-body | `projects-production-typescript` | `PROJECTABLE` | `sha256:479078e7a24d6edca25c2011b236999818c67af9745614531243f6826ad6cbb8` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/registers-materialize-complete-new-feature.ts` | runtime-registration | `projects-runtime-edge-registration` | `PROJECTABLE` | `sha256:9b4bc58e691dbec31c89fc40b5c43babd44183baeda6d04e2ad97253a4c63d4f` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/declares-scenario-authority.json` | scenario-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:7b6b92fe81f3a82e533a32c6a0455954451edf9f56caab1b6b4ab4714d0545d1` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/execute-newly-materialized-feature.semantic-authority.json` | semantic-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:c8753887f0404015818233b66ab37900932d287e575387f309ec32d7ee156fb2` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.feature-body-authority.json` | feature-body-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:5b6ccd57c5ab5cbf4f1ef05b4e02faa7fd59acce72ced9ba47563439606939ea` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.ts.ast.authority.json` | ast-authority | `projects-production-typescript` | `PROJECTABLE` | `sha256:5846d520a84c00b399d77bfb473e9a376538edc63db51967837533247f868772` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.type.ts` | responsibility-type | `projects-production-typescript` | `PROJECTABLE` | `sha256:95392f7eee9698f46c706a95fabcedcdfb45a5fd5bbd1d1ab5d604bf06162f50` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.ts` | responsibility-body | `projects-production-typescript` | `PROJECTABLE` | `sha256:09bea4fc160c0e3e9a27b9cd14f9612b5bc2cf233eaddbc5b1f27ca1ca01adab` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/registers-execute-newly-materialized-feature.ts` | runtime-registration | `projects-runtime-edge-registration` | `PROJECTABLE` | `sha256:d0df58135e0f40cefc0341efe77cd20a7217aa05199f68b3810bfbc0460f9a42` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/declares-scenario-authority.json` | scenario-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:be2cd14d8428d3eb26b07785e347af71a4d75bf4b3c5e92173eba4b18727d9b0` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/compose-new-feature-execution-comparison.semantic-authority.json` | semantic-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:4136c878a61cd2963065fb06941473ceefb778e973fa205fabc6298007140483` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.feature-body-authority.json` | feature-body-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:0fee6bfe765dbd6a804db5eba3fb21b592a338a2b895f84525212cea73cfeec8` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.ts.ast.authority.json` | ast-authority | `projects-production-typescript` | `PROJECTABLE` | `sha256:7df2c234730f50dac358023ba27b6be61a82f6fafcf6c2f7e535c7b689019b84` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.type.ts` | responsibility-type | `projects-production-typescript` | `PROJECTABLE` | `sha256:8aa4ba862f5318ec63d506771e70fd35759efa25d15fe0adfed8c9532ce50f0a` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.ts` | responsibility-body | `projects-production-typescript` | `PROJECTABLE` | `sha256:66005a95220840af656da2f78f2249366111bb7d08ddc19c3a08babf9de11116` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/registers-compose-new-feature-execution-comparison.ts` | runtime-registration | `projects-runtime-edge-registration` | `PROJECTABLE` | `sha256:da7379b93e1969b7a2e036d5eab6822fd6f828eb99c90d621e77bcf8ee8ed5a6` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/declares-scenario-authority.json` | scenario-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:af816ffd542c74090dc159d94b70538f945d7940e5bca40ad955f844e5cf514d` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/verify-complete-new-feature-lineage.semantic-authority.json` | semantic-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:bac273e4c0485bccc7421836eb8c1fbaa7423e335019c5be74fb984145badcff` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.feature-body-authority.json` | feature-body-authority | `projects-file-body-system` | `PROJECTABLE` | `sha256:3daf15f0cfac812da82c50e66eae8133789708aec3e1c57856c77a946fa1ddbf` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.ts.ast.authority.json` | ast-authority | `projects-production-typescript` | `PROJECTABLE` | `sha256:ef16ad1b48ef1b82ef2a6a16a260924fbfe02089fd097fce632d0117a033b866` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.type.ts` | responsibility-type | `projects-production-typescript` | `PROJECTABLE` | `sha256:0efcced8544f440c14db5aa6b94f5891f947f4d936446f62719c72021abbd7e4` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.ts` | responsibility-body | `projects-production-typescript` | `PROJECTABLE` | `sha256:8c410030f50f11dbed1edf94cae443bb35ee56de42b3418e1893b87b5e757151` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/registers-verify-complete-new-feature-lineage.ts` | runtime-registration | `projects-runtime-edge-registration` | `PROJECTABLE` | `sha256:b473a2b09289b58e9939ccafec409cfd7b9423771ecfcdfd5031683942b68d73` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/executes-end-to-end-canonical-feature-conveyor.ts` | composition | `projects-production-typescript` | `PROJECTABLE` | `sha256:97505cbe58e8c1d5101f08b774e169cd7036d3b5d9702901bce72d58050c5698` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/invokes-canonical-feature-conveyor.ts` | runtime-adapter | `projects-runtime-adapter` | `PROJECTABLE` | `sha256:e54c99d4e4186c958307f4bb6646e3d634f258d5201be434995cd2085959d93c` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/canonical-feature-edge-registry.type.ts` | composition | `projects-production-typescript` | `PROJECTABLE` | `sha256:b44012097a2ec216228a32fe85305836a3a264135d65d78e6dbf12c5276286aa` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/executes-end-to-end-canonical-feature-conveyor.type.ts` | composition | `projects-production-typescript` | `PROJECTABLE` | `sha256:dc2e0b8e457ba5a3769c8d653cb8c09c978790f941837a02f7ba01f27418c555` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/interprets-canonical-feature-semantic-authority.ts` | semantic-interpreter | `projects-semantic-interpreter` | `PROJECTABLE` | `sha256:666eae51636ea5ddd00818c658f9d471b5d9f9762cbf0d7670ca8a6806841577` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/loads-canonical-feature-semantic-authority.ts` | semantic-authority-loader | `projects-semantic-authority-loader` | `PROJECTABLE` | `sha256:4198381e1cda43a117f422b4bf4bbb682387bb07d40913ae217eb3d6018ec10d` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/complete-new-feature-authority-projector.port.ts` | runtime-port | `projects-production-typescript` | `PROJECTABLE` | `sha256:ebfd0389d45c88064e89b6688962571005a51d1e20472d02adec027bf3fecafd` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/complete-new-feature-materializer.port.ts` | runtime-port | `projects-production-typescript` | `PROJECTABLE` | `sha256:954684ef3161f48e4490f42c4f80d582a99cfb041ba9a8eea5114d7dbaf5e78f` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/canonical-feature-evaluation-fixture.port.ts` | evaluation-port | `projects-production-typescript` | `PROJECTABLE` | `sha256:f213b82fff7896dc81423cb0dfb2cf0beda5b4145bfdffcb95f60e0bf24c013e` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/governed-artifact-evidence-store.port.ts` | evaluation-port | `projects-production-typescript` | `PROJECTABLE` | `sha256:7673741779ee83695898ed3e2eddab97458ff6c1f58b967e3e1fdc753bcce2ce` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/proves-canonical-feature-conveyor.ts` | evaluation-proof | `projects-evaluation-proof` | `PROJECTABLE` | `sha256:87ae6152051350918ee5a83d89c3cc4166a60e3b4b19a188c92c68ad816c0ed1` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/self-hosts-canonical-feature-conveyor.mjs` | self-hosting-runner | `projects-self-hosting-runner` | `PROJECTABLE` | `sha256:b302a4072871e6a2734e1fd2757d0c070392b5af72ffa6f64efbd638eee7b0c7` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/canonical-feature-conveyor-implementation-package.mjs` | fractal-projection-tool | `realizes-lossless-source-ast` | `PROJECTABLE` | `sha256:35b668a098de9c1ce427c1a5c84874f302dcb5a95c85827ce936d57bfe8287bd` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/canonical-feature-conveyor-projection.mjs` | fractal-projection-tool | `realizes-lossless-source-ast` | `PROJECTABLE` | `sha256:2b9aa585b3e3149c3c7007184921f36ea26c1609ad2389800e95fb14ce6aa48d` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/projects-canonical-feature-conveyor-contract.mjs` | fractal-projection-tool | `realizes-lossless-source-ast` | `PROJECTABLE` | `sha256:0a937ea632eb33994ff13ade8ee812b36ee47fe549a49f2f4373ca53324f55e0` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/projects-canonical-feature-conveyor-derived-bodies.mjs` | fractal-projection-tool | `realizes-lossless-source-ast` | `PROJECTABLE` | `sha256:29cbd2242e170e2f88eb8af43b6e8a16c5d77edc0bfce2a37abdb77976278ea5` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/projects-canonical-feature-conveyor-implementation.mjs` | fractal-projection-tool | `realizes-lossless-source-ast` | `PROJECTABLE` | `sha256:e636ca4a3a762c77bcad4cc599cc366e43f941ef559ba06584b18a16b430dfd7` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/verifies-canonical-feature-conveyor-contract.mjs` | fractal-projection-tool | `realizes-lossless-source-ast` | `PROJECTABLE` | `sha256:0b5fdbd37d344e9c8308545190ca3919c1af846eed41f7f60c8d83d14fe94c5e` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/ajv-2020.bundle.mjs` | embedded-runtime | `projects-capability-local-runtime-snapshot` | `PROJECTABLE` | `sha256:6c69a45405bb860cfd3a2b1835d6bb905cdddffec486fd4426dd8863057b6dfa` |
| `capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/semantic-typescript-projector.bundle.mjs` | embedded-runtime | `projects-capability-local-runtime-snapshot` | `PROJECTABLE` | `sha256:0f1f8e7b25ca750fb8f051314c64ab37d0f0d185562203c16e39be4f456523ae` |

Projection source policy: canonical JSON authority only; Markdown scraping is forbidden.

Execution proof: direct semantic authority and the projected composition plus responsibility bodies must be RFC8785-JCS equivalent and terminate with `PROJECTION_CONFORMS`.

### Fractal self-hosting acceptance

```json
{
  "contractId": "canonical-feature-conveyor-self-hosting.v1",
  "authorityInputPath": "architecture/end-to-end-canonical-feature-conveyor.authority.json",
  "derivedProjectionInputPath": "architecture/end-to-end-canonical-feature-conveyor.derived-projections.json",
  "executorArtifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/self-hosts-canonical-feature-conveyor.mjs",
  "executionStages": [
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
  ],
  "targetPolicy": {
    "root": "governed-repository-workspace",
    "repositoryRoot": ".",
    "capabilityRoot": "capabilities/end-to-end-canonical-feature-conveyor-fractal",
    "overwrite": "replace-only-if-lineage-matches",
    "postProjectionEdits": "forbidden",
    "authoritySource": "canonical-json-and-admitted-derived-projection",
    "reviewSurface": "git-diff",
    "alternateFileTopologies": "forbidden"
  },
  "acceptance": {
    "stageReplay": "18-of-18-in-causal-order",
    "governedArtifactComparison": "byte-for-byte-in-place",
    "typescript": "strict-compile",
    "semanticExecution": "executed",
    "projectedExecution": "executed",
    "translation": "canonical-equivalence",
    "terminalDisposition": "PROJECTION_CONFORMS",
    "liveProviderRun": "required-on-projected-working-tree"
  }
}
```

The projected self-hosting runner must replay all 18 construction stages, materialize directly into the governed capability folder, compile and execute the repository bytes under Git review, compare every governed artifact byte-for-byte with its source projection, and leave the projected files unedited before the required live-provider run.

### Projected responsibility bodies

| Sequence | Responsibility | Input | Output | Projected artifact |
| --- | --- | --- | --- | --- |
| 1 | admits-reviewed-new-feature-request | end-to-end-canonical-feature-conveyor-context.v1 | new-feature-request-admission.v1 | capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts |
| 2 | adapts-new-feature-request-admission | new-feature-request-admission.v1 | admitted-new-feature-request.v1 | capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.ts |
| 3 | projects-complete-new-feature-authority | admitted-new-feature-request.v1 | complete-new-feature-authority.v1 | capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.ts |
| 4 | materializes-complete-new-feature | complete-new-feature-authority.v1 | complete-new-feature-materialization.v1 | capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.ts |
| 5 | executes-newly-materialized-feature | complete-new-feature-materialization.v1 | observed-new-feature-execution.v1 | capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.ts |
| 6 | composes-new-feature-execution-comparison | observed-new-feature-execution.v1 | new-feature-execution-comparison.v1 | capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.ts |
| 7 | verifies-complete-new-feature-lineage | new-feature-execution-comparison.v1 | new-feature-terminal-disposition.v1 | capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.ts |

### File-body system

```text
Canonical authority graph

[RESP] Responsibility ──owns──► [SA] Semantic Authority
[SA] Semantic Authority ──projects──► [FB] Feature Body Authority
[FB] Feature Body Authority ──projects──► [AST] Projected AST
[AST] Projected AST ──projects──► [TS] Projected Runtime Body
[TS] Projected Runtime Body ──requires──► [TYPE] Projected Type Definitions
[TS] Projected Runtime Body ──participates-in──► [REG] Runtime Registration
[FEATURE] Feature Execution Authority ──projects──► [FLOW] Feature Execution Body
[FLOW] Feature Execution Body ──requires──► [PORT] Runtime Adapter

Responsibility projection conveyors

Scenario
└── admit-one-reviewed-new-feature-request
    │
    └── Responsibility
        └── admits-reviewed-new-feature-request
            │
            ├─► [SA] Semantic Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/admit-reviewed-new-feature-request.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts
            │
            └─► [REG] Runtime Registration
                   capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/registers-admit-reviewed-new-feature-request.ts

Scenario
└── adapt-one-new-feature-request-admission
    │
    └── Responsibility
        └── adapts-new-feature-request-admission
            │
            ├─► [SA] Semantic Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/adapt-new-feature-request-admission.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.ts
            │
            └─► [REG] Runtime Registration
                   capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/registers-adapt-new-feature-request-admission.ts

Scenario
└── project-one-complete-new-feature-authority
    │
    └── Responsibility
        └── projects-complete-new-feature-authority
            │
            ├─► [SA] Semantic Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/project-complete-new-feature-authority.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.ts
            │
            └─► [REG] Runtime Registration
                   capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/registers-project-complete-new-feature-authority.ts

Scenario
└── materialize-one-complete-new-feature
    │
    └── Responsibility
        └── materializes-complete-new-feature
            │
            ├─► [SA] Semantic Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/materialize-complete-new-feature.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.ts
            │
            └─► [REG] Runtime Registration
                   capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/registers-materialize-complete-new-feature.ts

Scenario
└── execute-one-newly-materialized-feature
    │
    └── Responsibility
        └── executes-newly-materialized-feature
            │
            ├─► [SA] Semantic Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/execute-newly-materialized-feature.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.ts
            │
            └─► [REG] Runtime Registration
                   capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/registers-execute-newly-materialized-feature.ts

Scenario
└── compose-one-new-feature-execution-comparison
    │
    └── Responsibility
        └── composes-new-feature-execution-comparison
            │
            ├─► [SA] Semantic Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/compose-new-feature-execution-comparison.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.ts
            │
            └─► [REG] Runtime Registration
                   capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/registers-compose-new-feature-execution-comparison.ts

Scenario
└── verify-one-complete-new-feature-lineage
    │
    └── Responsibility
        └── verifies-complete-new-feature-lineage
            │
            ├─► [SA] Semantic Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/verify-complete-new-feature-lineage.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.ts
            │
            └─► [REG] Runtime Registration
                   capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/registers-verify-complete-new-feature-lineage.ts

Feature-level execution
├─► [FLOW] Feature Execution Body
│      capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/executes-end-to-end-canonical-feature-conveyor.ts
│
└─► [PORT] Runtime Adapter
       capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/invokes-canonical-feature-conveyor.ts
```

### How the document gets there

```text
1. capture-intent
   |
   v
2. declare-outcome
   |
   v
3. establish-feature
   |
   v
4. establish-scenarios
   |
   v
5. decompose-obligations
   |
   v
6. declare-expectations
   |
   v
7. assign-responsibilities
   |
   v
8. declare-signals
   |
   v
9. author-semantic-authority
   |
   v
10. author-semantic-execution
   |
   v
11. author-feature-body-authority
   |
   v
12. resolve-language-projection
   |
   v
13. project-expected-ast
   |
   v
14. project-expected-code
   |
   v
15. evaluate-semantic-execution
   |
   v
16. evaluate-projected-execution
   |
   v
17. evaluate-translation-conformance
   |
   v
18. review-feature
```

## Construction state

```json
{
  "currentStage": "evaluate-semantic-execution",
  "completedStages": [
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
    "project-expected-code"
  ],
  "eligibleNextStages": [
    "evaluate-semantic-execution"
  ],
  "stageStates": [
    {
      "stageId": "capture-intent",
      "lifecycleState": "AUTHORITY_DECLARED"
    },
    {
      "stageId": "declare-outcome",
      "lifecycleState": "AUTHORITY_DECLARED"
    },
    {
      "stageId": "establish-feature",
      "lifecycleState": "AUTHORITY_DECLARED"
    },
    {
      "stageId": "establish-scenarios",
      "lifecycleState": "AUTHORITY_DECLARED"
    },
    {
      "stageId": "decompose-obligations",
      "lifecycleState": "AUTHORITY_DECLARED"
    },
    {
      "stageId": "declare-expectations",
      "lifecycleState": "AUTHORITY_DECLARED"
    },
    {
      "stageId": "assign-responsibilities",
      "lifecycleState": "AUTHORITY_DECLARED"
    },
    {
      "stageId": "declare-signals",
      "lifecycleState": "AUTHORITY_DECLARED"
    },
    {
      "stageId": "author-semantic-authority",
      "lifecycleState": "AUTHORITY_DECLARED"
    },
    {
      "stageId": "author-semantic-execution",
      "lifecycleState": "AUTHORITY_DECLARED"
    },
    {
      "stageId": "author-feature-body-authority",
      "lifecycleState": "AUTHORITY_DECLARED"
    },
    {
      "stageId": "resolve-language-projection",
      "lifecycleState": "AUTHORITY_DECLARED"
    },
    {
      "stageId": "project-expected-ast",
      "lifecycleState": "AUTHORITY_DECLARED"
    },
    {
      "stageId": "project-expected-code",
      "lifecycleState": "AUTHORITY_DECLARED"
    },
    {
      "stageId": "evaluate-semantic-execution",
      "lifecycleState": "EXECUTION_PENDING"
    },
    {
      "stageId": "evaluate-projected-execution",
      "lifecycleState": "EXECUTION_PENDING"
    },
    {
      "stageId": "evaluate-translation-conformance",
      "lifecycleState": "EXECUTION_PENDING"
    },
    {
      "stageId": "review-feature",
      "lifecycleState": "BLOCKED"
    }
  ],
  "implementationAdmission": "BLOCKED_PENDING_CONFORMANCE"
}
```

## Canonical conveyor flow

```text
1. capture-intent
   |
   v
2. declare-outcome
   |
   v
3. establish-feature
   |
   v
4. establish-scenarios
   |
   v
5. decompose-obligations
   |
   v
6. declare-expectations
   |
   v
7. assign-responsibilities
   |
   v
8. declare-signals
   |
   v
9. author-semantic-authority
   |
   v
10. author-semantic-execution
   |
   v
11. author-feature-body-authority
   |
   v
12. resolve-language-projection
   |
   v
13. project-expected-ast
   |
   v
14. project-expected-code
   |
   v
15. evaluate-semantic-execution
   |
   v
16. evaluate-projected-execution
   |
   v
17. evaluate-translation-conformance
   |
   v
18. review-feature
```

## 1. Intent

### What is established here

```text
Stage ID: capture-intent
Purpose: Capture the human need without introducing implementation technology.
Authorized inputs: none
Required prior products: none
Required output: intent
Stop condition: one implementation-neutral intent is complete
```

### Canonical authority

Actor: reviewer of authority-projected software

Trigger: one previously nonexistent reviewed feature is submitted to the governed conveyor

Need: construct the complete canonical feature and its executable embodiment in admitted causal order

Purpose: prove that the conveyor can build new behavior without bypassing authority or inventing meaning during projection

Constraints:

- intent and canonical behavior remain language-neutral
- no construction stage may consume an output that has not been admitted
- language projection introduces no meaning absent from canonical authority
- execution cannot read the expected result to manufacture its observed result

### What this becomes

Projection availability: GOVERNED_PREVIEW

```text
Intent constraints
        │
        ▼
Projected body consequence
  permits: semantic-edge delegation
  forbids: local branching, DTO construction, and direct effects
```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.intent.constraints | constraint-effect | GOVERNED_PREVIEW | intent |

### Review questions

- Is the need expressed without language, framework, file, or provider decisions?

## 2. Desired outcome

### What is established here

```text
Stage ID: declare-outcome
Purpose: State the observable condition that satisfies the admitted intent.
Authorized inputs: intent
Required prior products: intent
Required output: desired-outcome
Stop condition: one desired outcome and its observable state are complete
```

### Canonical authority

Outcome ID: `complete-new-feature-is-canonically-constructed`

One previously nonexistent reviewed feature is constructed, projected, executed, and reviewed entirely from admitted canonical authority.

Observable state:

- the canonical feature and every focused scenario are visible
- every obligation, expectation, responsibility, signal, and semantic execution is visible
- every language-neutral body, expected AST, and expected source projection is visible
- semantic execution, projected execution, and declared expectations are canonically equivalent

### What this becomes

Projection availability: PROJECTOR_OUTPUT

Projected artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.type.ts`

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: verify-one-complete-new-feature-lineage
// obligation-id: prove-complete-new-feature-equivalence
// responsibility-id: verifies-complete-new-feature-lineage
// signal-id: complete-new-feature-equivalence
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface VerifyCompleteNewFeatureLineageContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: VerifyCompleteNewFeatureLineageContext) => Promise<NewFeatureTerminalDisposition>;
  };
}

export interface NewFeatureTerminalDisposition {
  readonly disposition:
    | "PROJECTION_CONFORMS"
    | "PROJECTION_DIVERGES";
  readonly comparisonEvidenceRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.derivedProjections.results | terminal-type | PROJECTOR_OUTPUT | desired-outcome |

### Review questions

- Is the outcome observable without prescribing its implementation?

## 3. Canonical feature

### What is established here

```text
Stage ID: establish-feature
Purpose: Establish one canonical feature identity and user story from the admitted outcome.
Authorized inputs: intent, desired-outcome
Required prior products: desired-outcome
Required output: canonical-feature
Stop condition: one canonical feature identity, story, and governing obligation are complete
```

### Canonical authority

```json
{
  "featureId": "end-to-end-canonical-feature-conveyor-fractal",
  "title": "Implement one new feature end to end through a governed conveyor",
  "userStory": {
    "asA": "reviewer of authority-projected software",
    "iWant": "one previously nonexistent reviewed feature implemented through the governed conveyor",
    "soThat": "its executable behavior and complete origin can be independently reproduced and reviewed"
  },
  "governingObligation": "Every accepted construction begins with reviewed intent, advances only through eligible stages, and conserves canonical meaning through semantic and projected execution."
}
```

### What this becomes

Projection availability: PROJECTOR_OUTPUT

Projected artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/executes-end-to-end-canonical-feature-conveyor.ts`

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: execute-complete-canonical-feature-conveyor
// obligation-id: execute-one-mechanically-continuous-feature-flow
// responsibility-id: executes-end-to-end-canonical-feature-conveyor
// signal-id: new-feature-terminal-disposition
// DO NOT EDIT.
import type { EndToEndCanonicalFeatureConveyorContext, NewFeatureTerminalDisposition } from "./executes-end-to-end-canonical-feature-conveyor.type.js";

export async function executesEndToEndCanonicalFeatureConveyor(
  context: EndToEndCanonicalFeatureConveyorContext
): Promise<NewFeatureTerminalDisposition> {
  const admission = await context.edges.invokes(
    "admit-reviewed-new-feature-request",
    context
  );
  const admittedRequest = await context.edges.invokes(
    "adapt-new-feature-request-admission",
    admission
  );
  const authority = await context.edges.invokes(
    "project-complete-new-feature-authority",
    admittedRequest
  );
  const materialization = await context.edges.invokes(
    "materialize-complete-new-feature",
    authority
  );
  const execution = await context.edges.invokes(
    "execute-newly-materialized-feature",
    materialization
  );
  const comparison = await context.edges.invokes(
    "compose-new-feature-execution-comparison",
    execution
  );
  const disposition = await context.edges.invokes(
    "verify-complete-new-feature-lineage",
    comparison
  );
  return disposition;
}

```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.derivedProjections.featureExecution | feature-execution | PROJECTOR_OUTPUT | canonical-feature |

### Review questions

- Does the feature preserve the intent and desired outcome without adding implementation meaning?

## 4. Scenarios

### What is established here

```text
Stage ID: establish-scenarios
Purpose: Decompose the feature into focused observable behavior transitions.
Authorized inputs: canonical-feature
Required prior products: canonical-feature
Required output: canonical-scenarios
Stop condition: every required feature behavior is represented by one focused scenario
```

### Canonical authority

```gherkin
Feature: Implement one new feature end to end through a governed conveyor
  As a reviewer of authority-projected software
  I want one previously nonexistent reviewed feature implemented through the governed conveyor
  So that its executable behavior and complete origin can be independently reproduced and reviewed

  Background:
    Given review authority is supplied independently of the feature implementation
    And construction, semantic, language, and runtime profiles are pinned

  @scenario-id:admit-one-reviewed-new-feature-request
  Scenario: Admit one reviewed new-feature request
    Given one instructor-reviewed new-feature request
    And its feature identity is absent from the implementation root
    When the request is evaluated against construction eligibility
    Then one new-feature request admission is observed

  @scenario-id:adapt-one-new-feature-request-admission
  Scenario: Adapt one request admission into an admitted request
    Given one ADMITTED new-feature request admission carrying request, feature, and lineage identity
    When the admission is transformed into the canonical admitted-request contract
    Then one admitted new-feature request is observed

  @scenario-id:project-one-complete-new-feature-authority
  Scenario: Project one complete new-feature authority
    Given one admitted reviewed new-feature request
    When the admitted request is projected through every canonical construction stage
    Then one complete canonical new-feature authority is observed

  @scenario-id:materialize-one-complete-new-feature
  Scenario: Materialize one complete new feature
    Given one admitted complete new-feature authority
    And one empty controlled materialization root
    When every admitted body and language projection is materialized
    Then one complete projected new-feature materialization is observed

  @scenario-id:execute-one-newly-materialized-feature
  Scenario: Execute one newly materialized feature
    Given one complete new-feature materialization
    And one admitted runtime composition
    When the materialized feature executes through its admitted semantic edges
    Then one new-feature execution observation is produced

  @scenario-id:compose-one-new-feature-execution-comparison
  Scenario: Compose one new-feature execution comparison
    Given one observed new-feature execution carrying semantic, projected, expected-signal, and AST-source correspondence references
    When the execution and its comparison inputs are assembled into one canonical comparison
    Then one new-feature execution comparison is observed

  @scenario-id:verify-one-complete-new-feature-lineage
  Scenario: Verify one complete new-feature lineage
    Given one complete new-feature execution comparison carrying all required evidence references
    When the pinned interpreter resolves and compares the referenced expectation, execution, AST, and code evidence
    Then one terminal canonical-feature construction disposition is produced
```

Scenario circuits:

### admit-one-reviewed-new-feature-request

```text
admit-one-reviewed-new-feature-request
  |
  v
establish-one-eligible-new-feature-request
  |
  v
expect-one-new-feature-request-admission
  |
  v
admits-reviewed-new-feature-request
  |
  v
new-feature-request-admission
```

### adapt-one-new-feature-request-admission

```text
adapt-one-new-feature-request-admission
  |
  v
bridge-admission-to-admitted-request-contract
  |
  v
expect-one-admitted-new-feature-request
  |
  v
adapts-new-feature-request-admission
  |
  v
admitted-new-feature-request
```

### project-one-complete-new-feature-authority

```text
project-one-complete-new-feature-authority
  |
  v
establish-one-complete-new-feature-authority
  |
  v
expect-one-complete-new-feature-authority
  |
  v
projects-complete-new-feature-authority
  |
  v
complete-new-feature-authority
```

### materialize-one-complete-new-feature

```text
materialize-one-complete-new-feature
  |
  v
materialize-only-admitted-new-feature-authority
  |
  v
expect-one-complete-new-feature-materialization
  |
  v
materializes-complete-new-feature
  |
  v
complete-new-feature-materialization
```

### execute-one-newly-materialized-feature

```text
execute-one-newly-materialized-feature
  |
  v
execute-new-feature-through-admitted-semantics
  |
  v
expect-one-observed-new-feature-execution
  |
  v
executes-newly-materialized-feature
  |
  v
observed-new-feature-execution
```

### compose-one-new-feature-execution-comparison

```text
compose-one-new-feature-execution-comparison
  |
  v
compose-complete-execution-comparison
  |
  v
expect-one-complete-execution-comparison
  |
  v
composes-new-feature-execution-comparison
  |
  v
new-feature-execution-comparison
```

### verify-one-complete-new-feature-lineage

```text
verify-one-complete-new-feature-lineage
  |
  v
prove-complete-new-feature-equivalence
  |
  v
expect-complete-new-feature-equivalence
  |
  v
verifies-complete-new-feature-lineage
  |
  v
complete-new-feature-equivalence
```

### What this becomes

Projection availability: PROJECTOR_OUTPUT

```text
admit-one-reviewed-new-feature-request
  → admits-reviewed-new-feature-request
  → capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts
  → admitsReviewedNewFeatureRequest(...)
  → edge admit-reviewed-new-feature-request

adapt-one-new-feature-request-admission
  → adapts-new-feature-request-admission
  → capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.ts
  → adaptsNewFeatureRequestAdmission(...)
  → edge adapt-new-feature-request-admission

project-one-complete-new-feature-authority
  → projects-complete-new-feature-authority
  → capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.ts
  → projectsCompleteNewFeatureAuthority(...)
  → edge project-complete-new-feature-authority

materialize-one-complete-new-feature
  → materializes-complete-new-feature
  → capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.ts
  → materializesCompleteNewFeature(...)
  → edge materialize-complete-new-feature

execute-one-newly-materialized-feature
  → executes-newly-materialized-feature
  → capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.ts
  → executesNewlyMaterializedFeature(...)
  → edge execute-newly-materialized-feature

compose-one-new-feature-execution-comparison
  → composes-new-feature-execution-comparison
  → capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.ts
  → composesNewFeatureExecutionComparison(...)
  → edge compose-new-feature-execution-comparison

verify-one-complete-new-feature-lineage
  → verifies-complete-new-feature-lineage
  → capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.ts
  → verifiesCompleteNewFeatureLineage(...)
  → edge verify-complete-new-feature-lineage
```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.projectionAuthority | scenario-to-body | PROJECTOR_OUTPUT | canonical-scenarios |

### Review questions

- Does every scenario contain focused preconditions, one responsibility transition, and observable outcomes?

## 5. Obligations

### What is established here

```text
Stage ID: decompose-obligations
Purpose: Extract exactly one governing obligation from every scenario.
Authorized inputs: canonical-scenarios
Required prior products: canonical-scenarios
Required output: scenario-obligations
Stop condition: every scenario has one complete obligation
```

### Canonical authority

### admit-one-reviewed-new-feature-request

```json
{
  "scenarioId": "admit-one-reviewed-new-feature-request",
  "obligation": {
    "obligationId": "establish-one-eligible-new-feature-request",
    "statement": "Only one complete, reviewed, previously nonexistent feature request may enter construction."
  }
}
```

### adapt-one-new-feature-request-admission

```json
{
  "scenarioId": "adapt-one-new-feature-request-admission",
  "obligation": {
    "obligationId": "bridge-admission-to-admitted-request-contract",
    "statement": "The admitted-request contract must be derived explicitly from a successful request admission."
  }
}
```

### project-one-complete-new-feature-authority

```json
{
  "scenarioId": "project-one-complete-new-feature-authority",
  "obligation": {
    "obligationId": "establish-one-complete-new-feature-authority",
    "statement": "The admitted request must produce complete feature, scenario, obligation, expectation, responsibility, signal, and semantic authority."
  }
}
```

### materialize-one-complete-new-feature

```json
{
  "scenarioId": "materialize-one-complete-new-feature",
  "obligation": {
    "obligationId": "materialize-only-admitted-new-feature-authority",
    "statement": "Materialization must derive every executable body from admitted feature-body and AST authority."
  }
}
```

### execute-one-newly-materialized-feature

```json
{
  "scenarioId": "execute-one-newly-materialized-feature",
  "obligation": {
    "obligationId": "execute-new-feature-through-admitted-semantics",
    "statement": "Projected execution must use the same admitted semantic responsibility exercised by direct semantic evaluation."
  }
}
```

### compose-one-new-feature-execution-comparison

```json
{
  "scenarioId": "compose-one-new-feature-execution-comparison",
  "obligation": {
    "obligationId": "compose-complete-execution-comparison",
    "statement": "Lineage verification must receive semantic observation, projected observation, expected signal, and AST-source correspondence together."
  }
}
```

### verify-one-complete-new-feature-lineage

```json
{
  "scenarioId": "verify-one-complete-new-feature-lineage",
  "obligation": {
    "obligationId": "prove-complete-new-feature-equivalence",
    "statement": "Declared expectation, direct semantic execution, and projected execution must be canonically equivalent."
  }
}
```

### What this becomes

Projection availability: GOVERNED_PREVIEW

```text
[OBLIGATION] establish-one-eligible-new-feature-request
      ├── owns semantic decision/projection requirements
      └── forbids responsibility-body policy

[OBLIGATION] bridge-admission-to-admitted-request-contract
      ├── owns semantic decision/projection requirements
      └── forbids responsibility-body policy

[OBLIGATION] establish-one-complete-new-feature-authority
      ├── owns semantic decision/projection requirements
      └── forbids responsibility-body policy

[OBLIGATION] materialize-only-admitted-new-feature-authority
      ├── owns semantic decision/projection requirements
      └── forbids responsibility-body policy

[OBLIGATION] execute-new-feature-through-admitted-semantics
      ├── owns semantic decision/projection requirements
      └── forbids responsibility-body policy

[OBLIGATION] compose-complete-execution-comparison
      ├── owns semantic decision/projection requirements
      └── forbids responsibility-body policy

[OBLIGATION] prove-complete-new-feature-equivalence
      ├── owns semantic decision/projection requirements
      └── forbids responsibility-body policy
```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.featureBodyAuthority.constraints | obligation-constraint | GOVERNED_PREVIEW | scenario-obligations |

### Review questions

- Does each obligation express exactly the meaning that its scenario requires?

## 6. Expectations

### What is established here

```text
Stage ID: declare-expectations
Purpose: Declare the disposition expected when each scenario obligation is satisfied.
Authorized inputs: canonical-scenarios, scenario-obligations
Required prior products: scenario-obligations
Required output: scenario-expectations
Stop condition: every scenario has one expectation bound to one signal
```

### Canonical authority

### admit-one-reviewed-new-feature-request

```json
{
  "scenarioId": "admit-one-reviewed-new-feature-request",
  "expectation": {
    "expectationId": "expect-one-new-feature-request-admission",
    "signalId": "new-feature-request-admission",
    "expectedDisposition": "ADMITTED"
  }
}
```

### adapt-one-new-feature-request-admission

```json
{
  "scenarioId": "adapt-one-new-feature-request-admission",
  "expectation": {
    "expectationId": "expect-one-admitted-new-feature-request",
    "signalId": "admitted-new-feature-request",
    "expectedDisposition": "ADMITTED"
  }
}
```

### project-one-complete-new-feature-authority

```json
{
  "scenarioId": "project-one-complete-new-feature-authority",
  "expectation": {
    "expectationId": "expect-one-complete-new-feature-authority",
    "signalId": "complete-new-feature-authority",
    "expectedDisposition": "COMPLETE"
  }
}
```

### materialize-one-complete-new-feature

```json
{
  "scenarioId": "materialize-one-complete-new-feature",
  "expectation": {
    "expectationId": "expect-one-complete-new-feature-materialization",
    "signalId": "complete-new-feature-materialization",
    "expectedDisposition": "MATERIALIZED"
  }
}
```

### execute-one-newly-materialized-feature

```json
{
  "scenarioId": "execute-one-newly-materialized-feature",
  "expectation": {
    "expectationId": "expect-one-observed-new-feature-execution",
    "signalId": "observed-new-feature-execution",
    "expectedDisposition": "CONFORMS"
  }
}
```

### compose-one-new-feature-execution-comparison

```json
{
  "scenarioId": "compose-one-new-feature-execution-comparison",
  "expectation": {
    "expectationId": "expect-one-complete-execution-comparison",
    "signalId": "new-feature-execution-comparison",
    "expectedDisposition": "COMPLETE"
  }
}
```

### verify-one-complete-new-feature-lineage

```json
{
  "scenarioId": "verify-one-complete-new-feature-lineage",
  "expectation": {
    "expectationId": "expect-complete-new-feature-equivalence",
    "signalId": "complete-new-feature-equivalence",
    "expectedDisposition": "PROJECTION_CONFORMS"
  }
}
```

### What this becomes

Projection availability: GOVERNED_PREVIEW

```text
Execution output (new-feature-request-admission) ──┐
                                                ├── compare ──► ADMITTED | DIVERGES
Expected disposition (expect-one-new-feature-request-admission) ──┘
comparison authority only; not execution policy

Execution output (admitted-new-feature-request) ──┐
                                                ├── compare ──► ADMITTED | DIVERGES
Expected disposition (expect-one-admitted-new-feature-request) ──┘
comparison authority only; not execution policy

Execution output (complete-new-feature-authority) ──┐
                                                ├── compare ──► COMPLETE | DIVERGES
Expected disposition (expect-one-complete-new-feature-authority) ──┘
comparison authority only; not execution policy

Execution output (complete-new-feature-materialization) ──┐
                                                ├── compare ──► MATERIALIZED | DIVERGES
Expected disposition (expect-one-complete-new-feature-materialization) ──┘
comparison authority only; not execution policy

Execution output (observed-new-feature-execution) ──┐
                                                ├── compare ──► CONFORMS | DIVERGES
Expected disposition (expect-one-observed-new-feature-execution) ──┘
comparison authority only; not execution policy

Execution output (new-feature-execution-comparison) ──┐
                                                ├── compare ──► COMPLETE | DIVERGES
Expected disposition (expect-one-complete-execution-comparison) ──┘
comparison authority only; not execution policy

Execution output (complete-new-feature-equivalence) ──┐
                                                ├── compare ──► PROJECTION_CONFORMS | DIVERGES
Expected disposition (expect-complete-new-feature-equivalence) ──┘
comparison authority only; not execution policy
```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.canonicalFeatureBody.scenarios | expectation-comparison | GOVERNED_PREVIEW | scenario-expectations |

### Review questions

- Is each expected disposition independently comparable with observed execution?

## 7. Responsibilities

### What is established here

```text
Stage ID: assign-responsibilities
Purpose: Assign one accountable responsibility to satisfy each admitted obligation.
Authorized inputs: scenario-obligations, scenario-expectations
Required prior products: scenario-expectations
Required output: scenario-responsibilities
Stop condition: every obligation has one responsible semantic operation
```

### Canonical authority

### admit-one-reviewed-new-feature-request

```json
{
  "scenarioId": "admit-one-reviewed-new-feature-request",
  "responsibility": {
    "responsibilityId": "admits-reviewed-new-feature-request",
    "kind": "admission",
    "semanticOperationId": "admit-reviewed-new-feature-request"
  }
}
```

### adapt-one-new-feature-request-admission

```json
{
  "scenarioId": "adapt-one-new-feature-request-admission",
  "responsibility": {
    "responsibilityId": "adapts-new-feature-request-admission",
    "kind": "projection",
    "semanticOperationId": "adapt-new-feature-request-admission"
  }
}
```

### project-one-complete-new-feature-authority

```json
{
  "scenarioId": "project-one-complete-new-feature-authority",
  "responsibility": {
    "responsibilityId": "projects-complete-new-feature-authority",
    "kind": "projection",
    "semanticOperationId": "project-complete-new-feature-authority"
  }
}
```

### materialize-one-complete-new-feature

```json
{
  "scenarioId": "materialize-one-complete-new-feature",
  "responsibility": {
    "responsibilityId": "materializes-complete-new-feature",
    "kind": "projection",
    "semanticOperationId": "materialize-complete-new-feature"
  }
}
```

### execute-one-newly-materialized-feature

```json
{
  "scenarioId": "execute-one-newly-materialized-feature",
  "responsibility": {
    "responsibilityId": "executes-newly-materialized-feature",
    "kind": "execution",
    "semanticOperationId": "execute-newly-materialized-feature"
  }
}
```

### compose-one-new-feature-execution-comparison

```json
{
  "scenarioId": "compose-one-new-feature-execution-comparison",
  "responsibility": {
    "responsibilityId": "composes-new-feature-execution-comparison",
    "kind": "projection",
    "semanticOperationId": "compose-new-feature-execution-comparison"
  }
}
```

### verify-one-complete-new-feature-lineage

```json
{
  "scenarioId": "verify-one-complete-new-feature-lineage",
  "responsibility": {
    "responsibilityId": "verifies-complete-new-feature-lineage",
    "kind": "conformance",
    "semanticOperationId": "verify-complete-new-feature-lineage"
  }
}
```

### What this becomes

Projection availability: PROJECTOR_OUTPUT

```text
admit-one-reviewed-new-feature-request
  → admits-reviewed-new-feature-request
  → capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts
  → admitsReviewedNewFeatureRequest(...)
  → edge admit-reviewed-new-feature-request

adapt-one-new-feature-request-admission
  → adapts-new-feature-request-admission
  → capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.ts
  → adaptsNewFeatureRequestAdmission(...)
  → edge adapt-new-feature-request-admission

project-one-complete-new-feature-authority
  → projects-complete-new-feature-authority
  → capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.ts
  → projectsCompleteNewFeatureAuthority(...)
  → edge project-complete-new-feature-authority

materialize-one-complete-new-feature
  → materializes-complete-new-feature
  → capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.ts
  → materializesCompleteNewFeature(...)
  → edge materialize-complete-new-feature

execute-one-newly-materialized-feature
  → executes-newly-materialized-feature
  → capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.ts
  → executesNewlyMaterializedFeature(...)
  → edge execute-newly-materialized-feature

compose-one-new-feature-execution-comparison
  → composes-new-feature-execution-comparison
  → capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.ts
  → composesNewFeatureExecutionComparison(...)
  → edge compose-new-feature-execution-comparison

verify-one-complete-new-feature-lineage
  → verifies-complete-new-feature-lineage
  → capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.ts
  → verifiesCompleteNewFeatureLineage(...)
  → edge verify-complete-new-feature-lineage
```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.projectionAuthority | responsibility-identity | PROJECTOR_OUTPUT | scenario-responsibilities |

### Review questions

- Does each responsibility own one semantic transition and no unrelated policy?

## 8. Signals

### What is established here

```text
Stage ID: declare-signals
Purpose: Declare the observable signal produced by every responsibility.
Authorized inputs: scenario-expectations, scenario-responsibilities
Required prior products: scenario-responsibilities
Required output: scenario-signals
Stop condition: every responsibility produces one expectation-bound signal
```

### Canonical authority

### admit-one-reviewed-new-feature-request

```json
{
  "scenarioId": "admit-one-reviewed-new-feature-request",
  "signal": {
    "signalId": "new-feature-request-admission",
    "statement": "The reviewed request is admitted or rejected with one deterministic disposition.",
    "resultShape": {
      "contractId": "new-feature-request-admission.v1",
      "shapePolicy": "lineage-evidence-envelope",
      "fields": [
        {
          "name": "disposition",
          "type": "literal-union",
          "allowedValues": [
            "ADMITTED",
            "REJECTED"
          ]
        },
        {
          "name": "featureId",
          "type": "string"
        },
        {
          "name": "requestRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "lineageId",
          "type": "string"
        }
      ],
      "rationale": "The admission carries the reviewed request identity and immutable lineage required by every downstream responsibility."
    }
  }
}
```

### adapt-one-new-feature-request-admission

```json
{
  "scenarioId": "adapt-one-new-feature-request-admission",
  "signal": {
    "signalId": "admitted-new-feature-request",
    "statement": "A successful admission is represented by the exact contract consumed by authority projection.",
    "resultShape": {
      "contractId": "admitted-new-feature-request.v1",
      "shapePolicy": "lineage-evidence-envelope",
      "fields": [
        {
          "name": "disposition",
          "type": "literal-union",
          "allowedValues": [
            "ADMITTED"
          ]
        },
        {
          "name": "featureId",
          "type": "string"
        },
        {
          "name": "requestRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "lineageId",
          "type": "string"
        }
      ],
      "rationale": "The adapter conserves the admitted request reference, feature identity, and lineage while changing only the boundary contract."
    }
  }
}
```

### project-one-complete-new-feature-authority

```json
{
  "scenarioId": "project-one-complete-new-feature-authority",
  "signal": {
    "signalId": "complete-new-feature-authority",
    "statement": "Every required canonical construction product exists and is causally linked.",
    "resultShape": {
      "contractId": "complete-new-feature-authority.v1",
      "shapePolicy": "lineage-evidence-envelope",
      "fields": [
        {
          "name": "disposition",
          "type": "literal-union",
          "allowedValues": [
            "COMPLETE"
          ]
        },
        {
          "name": "featureId",
          "type": "string"
        },
        {
          "name": "requestRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "authorityRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "lineageId",
          "type": "string"
        }
      ],
      "rationale": "The result identifies the exact admitted request and complete authority artifact consumed by materialization."
    }
  }
}
```

### materialize-one-complete-new-feature

```json
{
  "scenarioId": "materialize-one-complete-new-feature",
  "signal": {
    "signalId": "complete-new-feature-materialization",
    "statement": "Every expected artifact exists and reproduces its admitted AST.",
    "resultShape": {
      "contractId": "complete-new-feature-materialization.v1",
      "shapePolicy": "lineage-evidence-envelope",
      "fields": [
        {
          "name": "disposition",
          "type": "literal-union",
          "allowedValues": [
            "MATERIALIZED"
          ]
        },
        {
          "name": "featureId",
          "type": "string"
        },
        {
          "name": "authorityRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "artifactManifestRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "lineageId",
          "type": "string"
        }
      ],
      "rationale": "The result carries the authority and content-addressed artifact manifest required to execute the materialized feature."
    }
  }
}
```

### execute-one-newly-materialized-feature

```json
{
  "scenarioId": "execute-one-newly-materialized-feature",
  "signal": {
    "signalId": "observed-new-feature-execution",
    "statement": "The projected feature produces the same observable signal as direct semantic execution.",
    "resultShape": {
      "contractId": "observed-new-feature-execution.v1",
      "shapePolicy": "lineage-evidence-envelope",
      "fields": [
        {
          "name": "disposition",
          "type": "literal-union",
          "allowedValues": [
            "CONFORMS",
            "DIVERGES"
          ]
        },
        {
          "name": "featureId",
          "type": "string"
        },
        {
          "name": "artifactManifestRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "semanticObservationRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "projectedObservationRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "expectedSignalRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "astSourceCorrespondenceRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "lineageId",
          "type": "string"
        }
      ],
      "rationale": "The execution result transports independently addressable semantic, projected, expected, and correspondence evidence to comparison."
    }
  }
}
```

### compose-one-new-feature-execution-comparison

```json
{
  "scenarioId": "compose-one-new-feature-execution-comparison",
  "signal": {
    "signalId": "new-feature-execution-comparison",
    "statement": "All four inputs required by terminal lineage verification are present in one comparison contract.",
    "resultShape": {
      "contractId": "new-feature-execution-comparison.v1",
      "shapePolicy": "execution-comparison",
      "fields": [
        {
          "name": "disposition",
          "type": "literal-union",
          "allowedValues": [
            "COMPLETE"
          ]
        },
        {
          "name": "featureId",
          "type": "string"
        },
        {
          "name": "semanticObservationRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "projectedObservationRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "expectedSignalRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "astSourceCorrespondenceRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "comparisonEvidenceRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "lineageId",
          "type": "string"
        }
      ],
      "rationale": "The comparison contract carries every immutable evidence reference evaluated by the terminal conformance decision."
    }
  }
}
```

### verify-one-complete-new-feature-lineage

```json
{
  "scenarioId": "verify-one-complete-new-feature-lineage",
  "signal": {
    "signalId": "complete-new-feature-equivalence",
    "statement": "Canonical meaning is conserved across authority, AST, source, and both execution surfaces.",
    "resultShape": {
      "contractId": "new-feature-terminal-disposition.v1",
      "shapePolicy": "terminal-disposition",
      "fields": [
        {
          "name": "disposition",
          "type": "literal-union",
          "allowedValues": [
            "PROJECTION_CONFORMS",
            "PROJECTION_DIVERGES"
          ]
        },
        {
          "name": "comparisonEvidenceRef",
          "type": "governed-artifact-ref"
        },
        {
          "name": "lineageId",
          "type": "string"
        }
      ],
      "rationale": "The terminal result binds its literal disposition to the exact comparison evidence and lineage that produced it."
    }
  }
}
```

### What this becomes

Projection availability: PROJECTOR_OUTPUT

#### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.type.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: admit-one-reviewed-new-feature-request
// obligation-id: establish-one-eligible-new-feature-request
// responsibility-id: admits-reviewed-new-feature-request
// signal-id: new-feature-request-admission
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface AdmitReviewedNewFeatureRequestContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: AdmitReviewedNewFeatureRequestContext) => Promise<NewFeatureRequestAdmission>;
  };
}

export interface NewFeatureRequestAdmission {
  readonly disposition:
    | "ADMITTED"
    | "REJECTED";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

#### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.type.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: adapt-one-new-feature-request-admission
// obligation-id: bridge-admission-to-admitted-request-contract
// responsibility-id: adapts-new-feature-request-admission
// signal-id: admitted-new-feature-request
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface AdaptNewFeatureRequestAdmissionContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: AdaptNewFeatureRequestAdmissionContext) => Promise<AdmittedNewFeatureRequest>;
  };
}

export interface AdmittedNewFeatureRequest {
  readonly disposition: "ADMITTED";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

#### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.type.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: project-one-complete-new-feature-authority
// obligation-id: establish-one-complete-new-feature-authority
// responsibility-id: projects-complete-new-feature-authority
// signal-id: complete-new-feature-authority
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface ProjectCompleteNewFeatureAuthorityContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: ProjectCompleteNewFeatureAuthorityContext) => Promise<CompleteNewFeatureAuthority>;
  };
}

export interface CompleteNewFeatureAuthority {
  readonly disposition: "COMPLETE";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly authorityRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

#### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.type.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: materialize-one-complete-new-feature
// obligation-id: materialize-only-admitted-new-feature-authority
// responsibility-id: materializes-complete-new-feature
// signal-id: complete-new-feature-materialization
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface MaterializeCompleteNewFeatureContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: MaterializeCompleteNewFeatureContext) => Promise<CompleteNewFeatureMaterialization>;
  };
}

export interface CompleteNewFeatureMaterialization {
  readonly disposition: "MATERIALIZED";
  readonly featureId: string;
  readonly authorityRef: GovernedArtifactRef;
  readonly artifactManifestRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

#### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.type.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: execute-one-newly-materialized-feature
// obligation-id: execute-new-feature-through-admitted-semantics
// responsibility-id: executes-newly-materialized-feature
// signal-id: observed-new-feature-execution
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface ExecuteNewlyMaterializedFeatureContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: ExecuteNewlyMaterializedFeatureContext) => Promise<ObservedNewFeatureExecution>;
  };
}

export interface ObservedNewFeatureExecution {
  readonly disposition:
    | "CONFORMS"
    | "DIVERGES";
  readonly featureId: string;
  readonly artifactManifestRef: GovernedArtifactRef;
  readonly semanticObservationRef: GovernedArtifactRef;
  readonly projectedObservationRef: GovernedArtifactRef;
  readonly expectedSignalRef: GovernedArtifactRef;
  readonly astSourceCorrespondenceRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

#### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.type.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: compose-one-new-feature-execution-comparison
// obligation-id: compose-complete-execution-comparison
// responsibility-id: composes-new-feature-execution-comparison
// signal-id: new-feature-execution-comparison
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface ComposeNewFeatureExecutionComparisonContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: ComposeNewFeatureExecutionComparisonContext) => Promise<NewFeatureExecutionComparison>;
  };
}

export interface NewFeatureExecutionComparison {
  readonly disposition: "COMPLETE";
  readonly featureId: string;
  readonly semanticObservationRef: GovernedArtifactRef;
  readonly projectedObservationRef: GovernedArtifactRef;
  readonly expectedSignalRef: GovernedArtifactRef;
  readonly astSourceCorrespondenceRef: GovernedArtifactRef;
  readonly comparisonEvidenceRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

#### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.type.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: verify-one-complete-new-feature-lineage
// obligation-id: prove-complete-new-feature-equivalence
// responsibility-id: verifies-complete-new-feature-lineage
// signal-id: complete-new-feature-equivalence
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface VerifyCompleteNewFeatureLineageContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: VerifyCompleteNewFeatureLineageContext) => Promise<NewFeatureTerminalDisposition>;
  };
}

export interface NewFeatureTerminalDisposition {
  readonly disposition:
    | "PROJECTION_CONFORMS"
    | "PROJECTION_DIVERGES";
  readonly comparisonEvidenceRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.derivedProjections.results | signal-type | PROJECTOR_OUTPUT | scenario-signals |

### Review questions

- Can every declared signal be observed without reading the expectation during execution?

## 9. Semantic authority

### What is established here

```text
Stage ID: author-semantic-authority
Purpose: Define the language-neutral observations, decisions, and projections owned by every responsibility.
Authorized inputs: scenario-responsibilities, scenario-signals
Required prior products: scenario-signals
Required output: semantic-authority
Stop condition: every responsibility has complete language-neutral semantic authority
```

### Canonical authority

### admits-reviewed-new-feature-request

#### Canonical authority

```json
{
  "responsibilityId": "admits-reviewed-new-feature-request",
  "accepts": {
    "contractId": "end-to-end-canonical-feature-conveyor-context.v1"
  },
  "produces": {
    "contractId": "new-feature-request-admission.v1"
  },
  "observations": [
    {
      "observationId": "observe-reviewed-request",
      "sourceRef": "scenario:admit-one-reviewed-new-feature-request",
      "resolution": {
        "portRef": "implementation-artifact:runtime-adapter",
        "operationId": "loads-reviewed-request-context",
        "input": "$.input",
        "producesFields": [
          "reviewDisposition",
          "existingFeatureIds",
          "featureId",
          "requestRef",
          "lineageId"
        ]
      }
    }
  ],
  "decisions": [
    {
      "decisionId": "resolve-request-admission",
      "inputs": [
        "$.input.reviewDisposition",
        "$.input.existingFeatureIds",
        "$.input.featureId"
      ],
      "rules": [
        {
          "ruleId": "admit-reviewed-absent-feature",
          "when": {
            "all": [
              {
                "left": {
                  "kind": "path",
                  "path": "$.input.reviewDisposition"
                },
                "operator": "equals",
                "right": {
                  "kind": "literal",
                  "value": "REVIEWED"
                }
              },
              {
                "left": {
                  "kind": "path",
                  "path": "$.input.existingFeatureIds"
                },
                "operator": "not-contains",
                "right": {
                  "kind": "path",
                  "path": "$.input.featureId"
                }
              }
            ]
          },
          "then": "ADMITTED"
        },
        {
          "ruleId": "reject-ineligible-feature",
          "when": {
            "otherwise": true
          },
          "then": "REJECTED"
        }
      ]
    }
  ],
  "projections": [
    {
      "projectionId": "project-request-admission",
      "from": "resolve-request-admission",
      "to": "new-feature-request-admission.v1",
      "fields": {
        "disposition": {
          "kind": "path",
          "path": "$.decision.disposition"
        },
        "featureId": {
          "kind": "path",
          "path": "$.input.featureId"
        },
        "requestRef": {
          "kind": "path",
          "path": "$.input.requestRef"
        },
        "lineageId": {
          "kind": "path",
          "path": "$.input.lineageId"
        }
      }
    }
  ]
}
```

#### Semantic execution flow

```text
[end-to-end-canonical-feature-conveyor-context.v1]
        │
        ▼
┌─ observe-reviewed-request
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ resolve-request-admission
│  resolve-decision
│  $.observed → $.decision
└─
        │
        ▼
┌─ project-request-admission
│  project-result
│  $.decision → $.result
└─
        │
        ▼
[new-feature-request-admission.v1]
```

#### Projected semantic execution

Declarative semantic model: AVAILABLE

Semantic interpreter binding: IMPLEMENTED

Required interpreter artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/interprets-canonical-feature-semantic-authority.ts`

Required semantic authority loader artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/loads-canonical-feature-semantic-authority.ts`

Semantic authority runtime source: scenario-owned `.semantic-authority.json` artifacts.

Embedded semantic authority in TypeScript: FORBIDDEN

The governed JSON execution plan above is loaded at runtime and interpreted without a TypeScript authority copy.

#### Projected responsibility boundary

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: admit-one-reviewed-new-feature-request
// obligation-id: establish-one-eligible-new-feature-request
// responsibility-id: admits-reviewed-new-feature-request
// signal-id: new-feature-request-admission
// DO NOT EDIT.
import type { AdmitReviewedNewFeatureRequestContext, NewFeatureRequestAdmission } from "./new-feature-request-admission.type.js";

export async function admitsReviewedNewFeatureRequest(
  context: AdmitReviewedNewFeatureRequestContext
): Promise<NewFeatureRequestAdmission> {
  return await context.edges.invokes(
    "admit-reviewed-new-feature-request",
    context
  );
}

```

#### Translation tie-out

| Authority element | Semantic execution construct | Responsibility-body construct |
| --- | --- | --- |
| observe-reviewed-request | resolve-observation | hidden behind semantic edge |
| resolve-request-admission | resolve-decision | hidden behind semantic edge |
| project-request-admission | project-result | hidden behind semantic edge |
| new-feature-request-admission.v1 | result contract | capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts return type |
| admits-reviewed-new-feature-request | execution registration identity | admitsReviewedNewFeatureRequest lineage |
| admit-reviewed-new-feature-request | semantic model identity | edge invocation string |

### adapts-new-feature-request-admission

#### Canonical authority

```json
{
  "responsibilityId": "adapts-new-feature-request-admission",
  "accepts": {
    "contractId": "new-feature-request-admission.v1"
  },
  "produces": {
    "contractId": "admitted-new-feature-request.v1"
  },
  "observations": [
    {
      "observationId": "observe-request-admission",
      "sourceRef": "scenario:adapt-one-new-feature-request-admission",
      "resolution": {
        "portRef": "semantic-interpreter:input",
        "operationId": "preserves-admission-envelope",
        "input": "$.input",
        "producesFields": [
          "disposition",
          "featureId",
          "requestRef",
          "lineageId"
        ]
      }
    }
  ],
  "decisions": [],
  "projections": [
    {
      "projectionId": "project-admitted-new-feature-request",
      "from": "observe-request-admission",
      "to": "admitted-new-feature-request.v1",
      "fields": {
        "disposition": {
          "kind": "path",
          "path": "$.observed.disposition"
        },
        "featureId": {
          "kind": "path",
          "path": "$.observed.featureId"
        },
        "requestRef": {
          "kind": "path",
          "path": "$.observed.requestRef"
        },
        "lineageId": {
          "kind": "path",
          "path": "$.observed.lineageId"
        }
      }
    }
  ]
}
```

#### Semantic execution flow

```text
[new-feature-request-admission.v1]
        │
        ▼
┌─ observe-request-admission
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-admitted-new-feature-request
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[admitted-new-feature-request.v1]
```

#### Projected semantic execution

Declarative semantic model: AVAILABLE

Semantic interpreter binding: IMPLEMENTED

Required interpreter artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/interprets-canonical-feature-semantic-authority.ts`

Required semantic authority loader artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/loads-canonical-feature-semantic-authority.ts`

Semantic authority runtime source: scenario-owned `.semantic-authority.json` artifacts.

Embedded semantic authority in TypeScript: FORBIDDEN

The governed JSON execution plan above is loaded at runtime and interpreted without a TypeScript authority copy.

#### Projected responsibility boundary

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: adapt-one-new-feature-request-admission
// obligation-id: bridge-admission-to-admitted-request-contract
// responsibility-id: adapts-new-feature-request-admission
// signal-id: admitted-new-feature-request
// DO NOT EDIT.
import type { AdaptNewFeatureRequestAdmissionContext, AdmittedNewFeatureRequest } from "./admitted-new-feature-request.type.js";

export async function adaptsNewFeatureRequestAdmission(
  context: AdaptNewFeatureRequestAdmissionContext
): Promise<AdmittedNewFeatureRequest> {
  return await context.edges.invokes(
    "adapt-new-feature-request-admission",
    context
  );
}

```

#### Translation tie-out

| Authority element | Semantic execution construct | Responsibility-body construct |
| --- | --- | --- |
| observe-request-admission | resolve-observation | hidden behind semantic edge |
| project-admitted-new-feature-request | project-result | hidden behind semantic edge |
| admitted-new-feature-request.v1 | result contract | capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.ts return type |
| adapts-new-feature-request-admission | execution registration identity | adaptsNewFeatureRequestAdmission lineage |
| adapt-new-feature-request-admission | semantic model identity | edge invocation string |

### projects-complete-new-feature-authority

#### Canonical authority

```json
{
  "responsibilityId": "projects-complete-new-feature-authority",
  "accepts": {
    "contractId": "admitted-new-feature-request.v1"
  },
  "produces": {
    "contractId": "complete-new-feature-authority.v1"
  },
  "observations": [
    {
      "observationId": "observe-admitted-request",
      "sourceRef": "scenario:project-one-complete-new-feature-authority",
      "resolution": {
        "portRef": "implementation-artifact:authority-projector",
        "operationId": "projects-and-writes-complete-authority",
        "input": "$.input",
        "producesFields": [
          "featureId",
          "requestRef",
          "authorityRef",
          "lineageId"
        ]
      }
    }
  ],
  "decisions": [],
  "projections": [
    {
      "projectionId": "project-complete-feature-authority",
      "from": "observe-admitted-request",
      "to": "complete-new-feature-authority.v1",
      "fields": {
        "disposition": {
          "kind": "literal",
          "value": "COMPLETE"
        },
        "featureId": {
          "kind": "path",
          "path": "$.observed.featureId"
        },
        "requestRef": {
          "kind": "path",
          "path": "$.observed.requestRef"
        },
        "authorityRef": {
          "kind": "path",
          "path": "$.observed.authorityRef"
        },
        "lineageId": {
          "kind": "path",
          "path": "$.observed.lineageId"
        }
      }
    }
  ]
}
```

#### Semantic execution flow

```text
[admitted-new-feature-request.v1]
        │
        ▼
┌─ observe-admitted-request
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-complete-feature-authority
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[complete-new-feature-authority.v1]
```

#### Projected semantic execution

Declarative semantic model: AVAILABLE

Semantic interpreter binding: IMPLEMENTED

Required interpreter artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/interprets-canonical-feature-semantic-authority.ts`

Required semantic authority loader artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/loads-canonical-feature-semantic-authority.ts`

Semantic authority runtime source: scenario-owned `.semantic-authority.json` artifacts.

Embedded semantic authority in TypeScript: FORBIDDEN

The governed JSON execution plan above is loaded at runtime and interpreted without a TypeScript authority copy.

#### Projected responsibility boundary

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: project-one-complete-new-feature-authority
// obligation-id: establish-one-complete-new-feature-authority
// responsibility-id: projects-complete-new-feature-authority
// signal-id: complete-new-feature-authority
// DO NOT EDIT.
import type { ProjectCompleteNewFeatureAuthorityContext, CompleteNewFeatureAuthority } from "./complete-new-feature-authority.type.js";

export async function projectsCompleteNewFeatureAuthority(
  context: ProjectCompleteNewFeatureAuthorityContext
): Promise<CompleteNewFeatureAuthority> {
  return await context.edges.invokes(
    "project-complete-new-feature-authority",
    context
  );
}

```

#### Translation tie-out

| Authority element | Semantic execution construct | Responsibility-body construct |
| --- | --- | --- |
| observe-admitted-request | resolve-observation | hidden behind semantic edge |
| project-complete-feature-authority | project-result | hidden behind semantic edge |
| complete-new-feature-authority.v1 | result contract | capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.ts return type |
| projects-complete-new-feature-authority | execution registration identity | projectsCompleteNewFeatureAuthority lineage |
| project-complete-new-feature-authority | semantic model identity | edge invocation string |

### materializes-complete-new-feature

#### Canonical authority

```json
{
  "responsibilityId": "materializes-complete-new-feature",
  "accepts": {
    "contractId": "complete-new-feature-authority.v1"
  },
  "produces": {
    "contractId": "complete-new-feature-materialization.v1"
  },
  "observations": [
    {
      "observationId": "observe-complete-feature-authority",
      "sourceRef": "scenario:materialize-one-complete-new-feature",
      "resolution": {
        "portRef": "implementation-artifact:feature-materializer",
        "operationId": "materializes-and-writes-artifact-manifest",
        "input": "$.input",
        "producesFields": [
          "featureId",
          "authorityRef",
          "artifactManifestRef",
          "lineageId"
        ]
      }
    }
  ],
  "decisions": [],
  "projections": [
    {
      "projectionId": "project-complete-feature-materialization",
      "from": "observe-complete-feature-authority",
      "to": "complete-new-feature-materialization.v1",
      "fields": {
        "disposition": {
          "kind": "literal",
          "value": "MATERIALIZED"
        },
        "featureId": {
          "kind": "path",
          "path": "$.observed.featureId"
        },
        "authorityRef": {
          "kind": "path",
          "path": "$.observed.authorityRef"
        },
        "artifactManifestRef": {
          "kind": "path",
          "path": "$.observed.artifactManifestRef"
        },
        "lineageId": {
          "kind": "path",
          "path": "$.observed.lineageId"
        }
      }
    }
  ]
}
```

#### Semantic execution flow

```text
[complete-new-feature-authority.v1]
        │
        ▼
┌─ observe-complete-feature-authority
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-complete-feature-materialization
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[complete-new-feature-materialization.v1]
```

#### Projected semantic execution

Declarative semantic model: AVAILABLE

Semantic interpreter binding: IMPLEMENTED

Required interpreter artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/interprets-canonical-feature-semantic-authority.ts`

Required semantic authority loader artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/loads-canonical-feature-semantic-authority.ts`

Semantic authority runtime source: scenario-owned `.semantic-authority.json` artifacts.

Embedded semantic authority in TypeScript: FORBIDDEN

The governed JSON execution plan above is loaded at runtime and interpreted without a TypeScript authority copy.

#### Projected responsibility boundary

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: materialize-one-complete-new-feature
// obligation-id: materialize-only-admitted-new-feature-authority
// responsibility-id: materializes-complete-new-feature
// signal-id: complete-new-feature-materialization
// DO NOT EDIT.
import type { MaterializeCompleteNewFeatureContext, CompleteNewFeatureMaterialization } from "./complete-new-feature-materialization.type.js";

export async function materializesCompleteNewFeature(
  context: MaterializeCompleteNewFeatureContext
): Promise<CompleteNewFeatureMaterialization> {
  return await context.edges.invokes(
    "materialize-complete-new-feature",
    context
  );
}

```

#### Translation tie-out

| Authority element | Semantic execution construct | Responsibility-body construct |
| --- | --- | --- |
| observe-complete-feature-authority | resolve-observation | hidden behind semantic edge |
| project-complete-feature-materialization | project-result | hidden behind semantic edge |
| complete-new-feature-materialization.v1 | result contract | capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.ts return type |
| materializes-complete-new-feature | execution registration identity | materializesCompleteNewFeature lineage |
| materialize-complete-new-feature | semantic model identity | edge invocation string |

### executes-newly-materialized-feature

#### Canonical authority

```json
{
  "responsibilityId": "executes-newly-materialized-feature",
  "accepts": {
    "contractId": "complete-new-feature-materialization.v1"
  },
  "produces": {
    "contractId": "observed-new-feature-execution.v1"
  },
  "observations": [
    {
      "observationId": "observe-materialized-feature",
      "sourceRef": "scenario:execute-one-newly-materialized-feature",
      "resolution": {
        "portRef": "implementation-artifact:evaluation-fixture",
        "operationId": "executes-semantic-and-projected-surfaces",
        "input": "$.input",
        "producesFields": [
          "disposition",
          "featureId",
          "artifactManifestRef",
          "semanticObservationRef",
          "projectedObservationRef",
          "expectedSignalRef",
          "astSourceCorrespondenceRef",
          "lineageId"
        ]
      }
    }
  ],
  "decisions": [],
  "projections": [
    {
      "projectionId": "project-execution-observation",
      "from": "observe-materialized-feature",
      "to": "observed-new-feature-execution.v1",
      "fields": {
        "disposition": {
          "kind": "path",
          "path": "$.observed.disposition"
        },
        "featureId": {
          "kind": "path",
          "path": "$.observed.featureId"
        },
        "artifactManifestRef": {
          "kind": "path",
          "path": "$.observed.artifactManifestRef"
        },
        "semanticObservationRef": {
          "kind": "path",
          "path": "$.observed.semanticObservationRef"
        },
        "projectedObservationRef": {
          "kind": "path",
          "path": "$.observed.projectedObservationRef"
        },
        "expectedSignalRef": {
          "kind": "path",
          "path": "$.observed.expectedSignalRef"
        },
        "astSourceCorrespondenceRef": {
          "kind": "path",
          "path": "$.observed.astSourceCorrespondenceRef"
        },
        "lineageId": {
          "kind": "path",
          "path": "$.observed.lineageId"
        }
      }
    }
  ]
}
```

#### Semantic execution flow

```text
[complete-new-feature-materialization.v1]
        │
        ▼
┌─ observe-materialized-feature
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-execution-observation
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[observed-new-feature-execution.v1]
```

#### Projected semantic execution

Declarative semantic model: AVAILABLE

Semantic interpreter binding: IMPLEMENTED

Required interpreter artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/interprets-canonical-feature-semantic-authority.ts`

Required semantic authority loader artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/loads-canonical-feature-semantic-authority.ts`

Semantic authority runtime source: scenario-owned `.semantic-authority.json` artifacts.

Embedded semantic authority in TypeScript: FORBIDDEN

The governed JSON execution plan above is loaded at runtime and interpreted without a TypeScript authority copy.

#### Projected responsibility boundary

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: execute-one-newly-materialized-feature
// obligation-id: execute-new-feature-through-admitted-semantics
// responsibility-id: executes-newly-materialized-feature
// signal-id: observed-new-feature-execution
// DO NOT EDIT.
import type { ExecuteNewlyMaterializedFeatureContext, ObservedNewFeatureExecution } from "./observed-new-feature-execution.type.js";

export async function executesNewlyMaterializedFeature(
  context: ExecuteNewlyMaterializedFeatureContext
): Promise<ObservedNewFeatureExecution> {
  return await context.edges.invokes(
    "execute-newly-materialized-feature",
    context
  );
}

```

#### Translation tie-out

| Authority element | Semantic execution construct | Responsibility-body construct |
| --- | --- | --- |
| observe-materialized-feature | resolve-observation | hidden behind semantic edge |
| project-execution-observation | project-result | hidden behind semantic edge |
| observed-new-feature-execution.v1 | result contract | capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.ts return type |
| executes-newly-materialized-feature | execution registration identity | executesNewlyMaterializedFeature lineage |
| execute-newly-materialized-feature | semantic model identity | edge invocation string |

### composes-new-feature-execution-comparison

#### Canonical authority

```json
{
  "responsibilityId": "composes-new-feature-execution-comparison",
  "accepts": {
    "contractId": "observed-new-feature-execution.v1"
  },
  "produces": {
    "contractId": "new-feature-execution-comparison.v1"
  },
  "observations": [
    {
      "observationId": "observe-comparison-inputs",
      "sourceRef": "scenario:compose-one-new-feature-execution-comparison",
      "resolution": {
        "portRef": "implementation-artifact:evidence-store",
        "operationId": "writes-execution-comparison-evidence",
        "input": "$.input",
        "producesFields": [
          "featureId",
          "semanticObservationRef",
          "projectedObservationRef",
          "expectedSignalRef",
          "astSourceCorrespondenceRef",
          "comparisonEvidenceRef",
          "lineageId"
        ]
      }
    }
  ],
  "decisions": [],
  "projections": [
    {
      "projectionId": "project-new-feature-execution-comparison",
      "from": "observe-comparison-inputs",
      "to": "new-feature-execution-comparison.v1",
      "fields": {
        "disposition": {
          "kind": "literal",
          "value": "COMPLETE"
        },
        "featureId": {
          "kind": "path",
          "path": "$.observed.featureId"
        },
        "semanticObservationRef": {
          "kind": "path",
          "path": "$.observed.semanticObservationRef"
        },
        "projectedObservationRef": {
          "kind": "path",
          "path": "$.observed.projectedObservationRef"
        },
        "expectedSignalRef": {
          "kind": "path",
          "path": "$.observed.expectedSignalRef"
        },
        "astSourceCorrespondenceRef": {
          "kind": "path",
          "path": "$.observed.astSourceCorrespondenceRef"
        },
        "comparisonEvidenceRef": {
          "kind": "path",
          "path": "$.observed.comparisonEvidenceRef"
        },
        "lineageId": {
          "kind": "path",
          "path": "$.observed.lineageId"
        }
      }
    }
  ]
}
```

#### Semantic execution flow

```text
[observed-new-feature-execution.v1]
        │
        ▼
┌─ observe-comparison-inputs
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-new-feature-execution-comparison
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[new-feature-execution-comparison.v1]
```

#### Projected semantic execution

Declarative semantic model: AVAILABLE

Semantic interpreter binding: IMPLEMENTED

Required interpreter artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/interprets-canonical-feature-semantic-authority.ts`

Required semantic authority loader artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/loads-canonical-feature-semantic-authority.ts`

Semantic authority runtime source: scenario-owned `.semantic-authority.json` artifacts.

Embedded semantic authority in TypeScript: FORBIDDEN

The governed JSON execution plan above is loaded at runtime and interpreted without a TypeScript authority copy.

#### Projected responsibility boundary

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: compose-one-new-feature-execution-comparison
// obligation-id: compose-complete-execution-comparison
// responsibility-id: composes-new-feature-execution-comparison
// signal-id: new-feature-execution-comparison
// DO NOT EDIT.
import type { ComposeNewFeatureExecutionComparisonContext, NewFeatureExecutionComparison } from "./new-feature-execution-comparison.type.js";

export async function composesNewFeatureExecutionComparison(
  context: ComposeNewFeatureExecutionComparisonContext
): Promise<NewFeatureExecutionComparison> {
  return await context.edges.invokes(
    "compose-new-feature-execution-comparison",
    context
  );
}

```

#### Translation tie-out

| Authority element | Semantic execution construct | Responsibility-body construct |
| --- | --- | --- |
| observe-comparison-inputs | resolve-observation | hidden behind semantic edge |
| project-new-feature-execution-comparison | project-result | hidden behind semantic edge |
| new-feature-execution-comparison.v1 | result contract | capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.ts return type |
| composes-new-feature-execution-comparison | execution registration identity | composesNewFeatureExecutionComparison lineage |
| compose-new-feature-execution-comparison | semantic model identity | edge invocation string |

### verifies-complete-new-feature-lineage

#### Canonical authority

```json
{
  "responsibilityId": "verifies-complete-new-feature-lineage",
  "accepts": {
    "contractId": "new-feature-execution-comparison.v1"
  },
  "produces": {
    "contractId": "new-feature-terminal-disposition.v1"
  },
  "observations": [
    {
      "observationId": "observe-execution-comparison",
      "sourceRef": "scenario:verify-one-complete-new-feature-lineage",
      "resolution": {
        "portRef": "implementation-artifact:evidence-store",
        "operationId": "resolves-and-verifies-comparison-evidence",
        "input": "$.input",
        "producesFields": [
          "featureId",
          "semanticObservationRef",
          "projectedObservationRef",
          "expectedSignalRef",
          "astSourceCorrespondenceRef",
          "comparisonEvidenceRef",
          "lineageId"
        ]
      }
    }
  ],
  "decisions": [
    {
      "decisionId": "resolve-terminal-disposition",
      "inputs": [
        "$.input.semanticObservationRef",
        "$.input.projectedObservationRef",
        "$.input.expectedSignalRef",
        "$.input.astSourceCorrespondenceRef"
      ],
      "rules": [
        {
          "ruleId": "conform-equivalent-feature-lineage",
          "when": {
            "all": [
              {
                "left": {
                  "kind": "path",
                  "path": "$.input.semanticObservationRef"
                },
                "operator": "evidence-equivalent",
                "right": {
                  "kind": "path",
                  "path": "$.input.expectedSignalRef"
                }
              },
              {
                "left": {
                  "kind": "path",
                  "path": "$.input.projectedObservationRef"
                },
                "operator": "evidence-equivalent",
                "right": {
                  "kind": "path",
                  "path": "$.input.expectedSignalRef"
                }
              },
              {
                "left": {
                  "kind": "path",
                  "path": "$.input.astSourceCorrespondenceRef"
                },
                "operator": "artifact-disposition-equals",
                "right": {
                  "kind": "literal",
                  "value": "CONFORMS"
                }
              }
            ]
          },
          "then": "PROJECTION_CONFORMS"
        },
        {
          "ruleId": "reject-divergent-feature-lineage",
          "when": {
            "otherwise": true
          },
          "then": "PROJECTION_DIVERGES"
        }
      ]
    }
  ],
  "projections": [
    {
      "projectionId": "project-terminal-disposition",
      "from": "resolve-terminal-disposition",
      "to": "new-feature-terminal-disposition.v1",
      "fields": {
        "disposition": {
          "kind": "path",
          "path": "$.decision.disposition"
        },
        "comparisonEvidenceRef": {
          "kind": "path",
          "path": "$.input.comparisonEvidenceRef"
        },
        "lineageId": {
          "kind": "path",
          "path": "$.input.lineageId"
        }
      }
    }
  ]
}
```

#### Semantic execution flow

```text
[new-feature-execution-comparison.v1]
        │
        ▼
┌─ observe-execution-comparison
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ resolve-terminal-disposition
│  resolve-decision
│  $.observed → $.decision
└─
        │
        ▼
┌─ project-terminal-disposition
│  project-result
│  $.decision → $.result
└─
        │
        ▼
[new-feature-terminal-disposition.v1]
```

#### Projected semantic execution

Declarative semantic model: AVAILABLE

Semantic interpreter binding: IMPLEMENTED

Required interpreter artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/interprets-canonical-feature-semantic-authority.ts`

Required semantic authority loader artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/loads-canonical-feature-semantic-authority.ts`

Semantic authority runtime source: scenario-owned `.semantic-authority.json` artifacts.

Embedded semantic authority in TypeScript: FORBIDDEN

The governed JSON execution plan above is loaded at runtime and interpreted without a TypeScript authority copy.

#### Projected responsibility boundary

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: verify-one-complete-new-feature-lineage
// obligation-id: prove-complete-new-feature-equivalence
// responsibility-id: verifies-complete-new-feature-lineage
// signal-id: complete-new-feature-equivalence
// DO NOT EDIT.
import type { VerifyCompleteNewFeatureLineageContext, NewFeatureTerminalDisposition } from "./complete-new-feature-lineage.type.js";

export async function verifiesCompleteNewFeatureLineage(
  context: VerifyCompleteNewFeatureLineageContext
): Promise<NewFeatureTerminalDisposition> {
  return await context.edges.invokes(
    "verify-complete-new-feature-lineage",
    context
  );
}

```

#### Translation tie-out

| Authority element | Semantic execution construct | Responsibility-body construct |
| --- | --- | --- |
| observe-execution-comparison | resolve-observation | hidden behind semantic edge |
| resolve-terminal-disposition | resolve-decision | hidden behind semantic edge |
| project-terminal-disposition | project-result | hidden behind semantic edge |
| new-feature-terminal-disposition.v1 | result contract | capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.ts return type |
| verifies-complete-new-feature-lineage | execution registration identity | verifiesCompleteNewFeatureLineage lineage |
| verify-complete-new-feature-lineage | semantic model identity | edge invocation string |

### What this becomes

Projection availability: DECLARATIVE_MODEL

Declarative semantic model: AVAILABLE

Semantic interpreter binding: IMPLEMENTED

Required semantic authority loader artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/loads-canonical-feature-semantic-authority.ts`

Semantic authority runtime source: scenario-owned `.semantic-authority.json` artifacts.

Embedded semantic authority in TypeScript: FORBIDDEN

#### admits-reviewed-new-feature-request

```text
[end-to-end-canonical-feature-conveyor-context.v1]
        │
        ▼
┌─ observe-reviewed-request
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ resolve-request-admission
│  resolve-decision
│  $.observed → $.decision
└─
        │
        ▼
┌─ project-request-admission
│  project-result
│  $.decision → $.result
└─
        │
        ▼
[new-feature-request-admission.v1]
```

#### adapts-new-feature-request-admission

```text
[new-feature-request-admission.v1]
        │
        ▼
┌─ observe-request-admission
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-admitted-new-feature-request
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[admitted-new-feature-request.v1]
```

#### projects-complete-new-feature-authority

```text
[admitted-new-feature-request.v1]
        │
        ▼
┌─ observe-admitted-request
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-complete-feature-authority
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[complete-new-feature-authority.v1]
```

#### materializes-complete-new-feature

```text
[complete-new-feature-authority.v1]
        │
        ▼
┌─ observe-complete-feature-authority
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-complete-feature-materialization
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[complete-new-feature-materialization.v1]
```

#### executes-newly-materialized-feature

```text
[complete-new-feature-materialization.v1]
        │
        ▼
┌─ observe-materialized-feature
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-execution-observation
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[observed-new-feature-execution.v1]
```

#### composes-new-feature-execution-comparison

```text
[observed-new-feature-execution.v1]
        │
        ▼
┌─ observe-comparison-inputs
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-new-feature-execution-comparison
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[new-feature-execution-comparison.v1]
```

#### verifies-complete-new-feature-lineage

```text
[new-feature-execution-comparison.v1]
        │
        ▼
┌─ observe-execution-comparison
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ resolve-terminal-disposition
│  resolve-decision
│  $.observed → $.decision
└─
        │
        ▼
┌─ project-terminal-disposition
│  project-result
│  $.decision → $.result
└─
        │
        ▼
[new-feature-terminal-disposition.v1]
```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.semanticAuthority | semantic-execution-plan | DECLARATIVE_MODEL | semantic-authority |

### Review questions

- Does semantic authority own every decision and result shape required by the responsibility?

## 10. Semantic execution

### What is established here

```text
Stage ID: author-semantic-execution
Purpose: Order the admitted semantic operations into directly executable models.
Authorized inputs: semantic-authority
Required prior products: semantic-authority
Required output: semantic-execution
Stop condition: every semantic authority has one deterministic execution model
```

### Canonical authority

### Pinned semantic interpreter contract

```json
{
  "contractId": "canonical-feature-semantic-interpreter.v1",
  "bindingStatus": "IMPLEMENTED",
  "requiredArtifact": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/interprets-canonical-feature-semantic-authority.ts",
  "authorityLoading": {
    "authoritySource": "scenario-owned-semantic-authority-json",
    "loaderAuthorityRef": "implementation-artifact:semantic-authority-loader",
    "repositoryRootInput": "explicit-runtime-argument",
    "interpreterDataOwnership": "none",
    "embeddedSemanticAuthority": "forbidden",
    "failureDisposition": "RED"
  },
  "pathDialect": {
    "dialectId": "rooted-member-path.v1",
    "rootToken": "$",
    "memberSeparator": ".",
    "arrayTraversal": "forbidden",
    "missingMemberDisposition": "RED",
    "evaluationDocument": "immutable input-observed-decision-result scope",
    "stepInputBehavior": "select operation input without rebasing the evaluation document"
  },
  "operations": [
    {
      "operationId": "resolve-observation",
      "semantics": "resolve the declared observation through the fixture and evidence ports and assign it at the declared path"
    },
    {
      "operationId": "resolve-decision",
      "semantics": "evaluate rules in declaration order and select exactly the first matching rule"
    },
    {
      "operationId": "project-result",
      "semantics": "resolve each declared path or literal field without implicit fields and assign the canonical result"
    }
  ],
  "inputOperations": [
    "preserves-admission-envelope"
  ],
  "operators": [
    {
      "operatorId": "equals",
      "semantics": "JCS equality of resolved operands"
    },
    {
      "operatorId": "not-contains",
      "semantics": "the resolved left array contains no JCS-equal right value"
    },
    {
      "operatorId": "evidence-equivalent",
      "semantics": "resolved evidence payloads have equal JCS bytes"
    },
    {
      "operatorId": "artifact-disposition-equals",
      "semantics": "the resolved evidence payload disposition equals the literal right operand"
    }
  ],
  "projectionValueKinds": [
    "path",
    "literal"
  ],
  "evidenceOutput": {
    "contractId": "semantic-execution-evidence.v1",
    "canonicalization": "RFC8785-JCS",
    "digest": "SHA-256",
    "requiredFields": [
      "executionModelId",
      "inputRef",
      "stepObservations",
      "resultRef",
      "lineageId"
    ]
  }
}
```

### admits-reviewed-new-feature-request

```json
{
  "executionModelId": "admit-reviewed-new-feature-request",
  "steps": [
    {
      "sequence": 1,
      "operation": "resolve-observation",
      "authorityId": "observe-reviewed-request",
      "input": "$.input",
      "assign": "$.observed"
    },
    {
      "sequence": 2,
      "operation": "resolve-decision",
      "authorityId": "resolve-request-admission",
      "input": "$.observed",
      "assign": "$.decision"
    },
    {
      "sequence": 3,
      "operation": "project-result",
      "authorityId": "project-request-admission",
      "input": "$.decision",
      "assign": "$.result"
    }
  ]
}
```

### adapts-new-feature-request-admission

```json
{
  "executionModelId": "adapt-new-feature-request-admission",
  "steps": [
    {
      "sequence": 1,
      "operation": "resolve-observation",
      "authorityId": "observe-request-admission",
      "input": "$.input",
      "assign": "$.observed"
    },
    {
      "sequence": 2,
      "operation": "project-result",
      "authorityId": "project-admitted-new-feature-request",
      "input": "$.observed",
      "assign": "$.result"
    }
  ]
}
```

### projects-complete-new-feature-authority

```json
{
  "executionModelId": "project-complete-new-feature-authority",
  "steps": [
    {
      "sequence": 1,
      "operation": "resolve-observation",
      "authorityId": "observe-admitted-request",
      "input": "$.input",
      "assign": "$.observed"
    },
    {
      "sequence": 2,
      "operation": "project-result",
      "authorityId": "project-complete-feature-authority",
      "input": "$.observed",
      "assign": "$.result"
    }
  ]
}
```

### materializes-complete-new-feature

```json
{
  "executionModelId": "materialize-complete-new-feature",
  "steps": [
    {
      "sequence": 1,
      "operation": "resolve-observation",
      "authorityId": "observe-complete-feature-authority",
      "input": "$.input",
      "assign": "$.observed"
    },
    {
      "sequence": 2,
      "operation": "project-result",
      "authorityId": "project-complete-feature-materialization",
      "input": "$.observed",
      "assign": "$.result"
    }
  ]
}
```

### executes-newly-materialized-feature

```json
{
  "executionModelId": "execute-newly-materialized-feature",
  "steps": [
    {
      "sequence": 1,
      "operation": "resolve-observation",
      "authorityId": "observe-materialized-feature",
      "input": "$.input",
      "assign": "$.observed"
    },
    {
      "sequence": 2,
      "operation": "project-result",
      "authorityId": "project-execution-observation",
      "input": "$.observed",
      "assign": "$.result"
    }
  ]
}
```

### composes-new-feature-execution-comparison

```json
{
  "executionModelId": "compose-new-feature-execution-comparison",
  "steps": [
    {
      "sequence": 1,
      "operation": "resolve-observation",
      "authorityId": "observe-comparison-inputs",
      "input": "$.input",
      "assign": "$.observed"
    },
    {
      "sequence": 2,
      "operation": "project-result",
      "authorityId": "project-new-feature-execution-comparison",
      "input": "$.observed",
      "assign": "$.result"
    }
  ]
}
```

### verifies-complete-new-feature-lineage

```json
{
  "executionModelId": "verify-complete-new-feature-lineage",
  "steps": [
    {
      "sequence": 1,
      "operation": "resolve-observation",
      "authorityId": "observe-execution-comparison",
      "input": "$.input",
      "assign": "$.observed"
    },
    {
      "sequence": 2,
      "operation": "resolve-decision",
      "authorityId": "resolve-terminal-disposition",
      "input": "$.observed",
      "assign": "$.decision"
    },
    {
      "sequence": 3,
      "operation": "project-result",
      "authorityId": "project-terminal-disposition",
      "input": "$.decision",
      "assign": "$.result"
    }
  ]
}
```

### What this becomes

Projection availability: DECLARATIVE_MODEL

Declarative semantic model: AVAILABLE

Semantic interpreter binding: IMPLEMENTED

Required semantic authority loader artifact: `capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/loads-canonical-feature-semantic-authority.ts`

Semantic authority runtime source: scenario-owned `.semantic-authority.json` artifacts.

Embedded semantic authority in TypeScript: FORBIDDEN

#### admits-reviewed-new-feature-request

```text
[end-to-end-canonical-feature-conveyor-context.v1]
        │
        ▼
┌─ observe-reviewed-request
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ resolve-request-admission
│  resolve-decision
│  $.observed → $.decision
└─
        │
        ▼
┌─ project-request-admission
│  project-result
│  $.decision → $.result
└─
        │
        ▼
[new-feature-request-admission.v1]
```

#### adapts-new-feature-request-admission

```text
[new-feature-request-admission.v1]
        │
        ▼
┌─ observe-request-admission
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-admitted-new-feature-request
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[admitted-new-feature-request.v1]
```

#### projects-complete-new-feature-authority

```text
[admitted-new-feature-request.v1]
        │
        ▼
┌─ observe-admitted-request
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-complete-feature-authority
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[complete-new-feature-authority.v1]
```

#### materializes-complete-new-feature

```text
[complete-new-feature-authority.v1]
        │
        ▼
┌─ observe-complete-feature-authority
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-complete-feature-materialization
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[complete-new-feature-materialization.v1]
```

#### executes-newly-materialized-feature

```text
[complete-new-feature-materialization.v1]
        │
        ▼
┌─ observe-materialized-feature
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-execution-observation
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[observed-new-feature-execution.v1]
```

#### composes-new-feature-execution-comparison

```text
[observed-new-feature-execution.v1]
        │
        ▼
┌─ observe-comparison-inputs
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ project-new-feature-execution-comparison
│  project-result
│  $.observed → $.result
└─
        │
        ▼
[new-feature-execution-comparison.v1]
```

#### verifies-complete-new-feature-lineage

```text
[new-feature-execution-comparison.v1]
        │
        ▼
┌─ observe-execution-comparison
│  resolve-observation
│  $.input → $.observed
└─
        │
        ▼
┌─ resolve-terminal-disposition
│  resolve-decision
│  $.observed → $.decision
└─
        │
        ▼
┌─ project-terminal-disposition
│  project-result
│  $.decision → $.result
└─
        │
        ▼
[new-feature-terminal-disposition.v1]
```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.semanticAuthority.execution | semantic-execution-plan | DECLARATIVE_MODEL | semantic-execution |

### Review questions

- Can the semantic model execute directly without projected source code?

## 11. Feature-body authority

### What is established here

```text
Stage ID: author-feature-body-authority
Purpose: Collapse each semantic execution edge into one language-neutral executable body.
Authorized inputs: scenario-responsibilities, semantic-execution
Required prior products: semantic-execution
Required output: feature-body-authority
Stop condition: every responsibility has one complete constrained feature body
```

### Canonical authority

### new-feature-request-admission

#### Canonical authority

```json
{
  "bodyId": "new-feature-request-admission",
  "responsibilityId": "admits-reviewed-new-feature-request",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "admit-reviewed-new-feature-request-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "admit-reviewed-new-feature-request",
      "input": "$.context",
      "assign": "admission"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.admission"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

#### Projected responsibility body

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: admit-one-reviewed-new-feature-request
// obligation-id: establish-one-eligible-new-feature-request
// responsibility-id: admits-reviewed-new-feature-request
// signal-id: new-feature-request-admission
// DO NOT EDIT.
import type { AdmitReviewedNewFeatureRequestContext, NewFeatureRequestAdmission } from "./new-feature-request-admission.type.js";

export async function admitsReviewedNewFeatureRequest(
  context: AdmitReviewedNewFeatureRequestContext
): Promise<NewFeatureRequestAdmission> {
  return await context.edges.invokes(
    "admit-reviewed-new-feature-request",
    context
  );
}

```

### admitted-new-feature-request

#### Canonical authority

```json
{
  "bodyId": "admitted-new-feature-request",
  "responsibilityId": "adapts-new-feature-request-admission",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "adapt-new-feature-request-admission-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "adapt-new-feature-request-admission",
      "input": "$.context",
      "assign": "admittedRequest"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.admittedRequest"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

#### Projected responsibility body

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: adapt-one-new-feature-request-admission
// obligation-id: bridge-admission-to-admitted-request-contract
// responsibility-id: adapts-new-feature-request-admission
// signal-id: admitted-new-feature-request
// DO NOT EDIT.
import type { AdaptNewFeatureRequestAdmissionContext, AdmittedNewFeatureRequest } from "./admitted-new-feature-request.type.js";

export async function adaptsNewFeatureRequestAdmission(
  context: AdaptNewFeatureRequestAdmissionContext
): Promise<AdmittedNewFeatureRequest> {
  return await context.edges.invokes(
    "adapt-new-feature-request-admission",
    context
  );
}

```

### complete-new-feature-authority

#### Canonical authority

```json
{
  "bodyId": "complete-new-feature-authority",
  "responsibilityId": "projects-complete-new-feature-authority",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "project-complete-new-feature-authority-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "project-complete-new-feature-authority",
      "input": "$.context",
      "assign": "authority"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.authority"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

#### Projected responsibility body

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: project-one-complete-new-feature-authority
// obligation-id: establish-one-complete-new-feature-authority
// responsibility-id: projects-complete-new-feature-authority
// signal-id: complete-new-feature-authority
// DO NOT EDIT.
import type { ProjectCompleteNewFeatureAuthorityContext, CompleteNewFeatureAuthority } from "./complete-new-feature-authority.type.js";

export async function projectsCompleteNewFeatureAuthority(
  context: ProjectCompleteNewFeatureAuthorityContext
): Promise<CompleteNewFeatureAuthority> {
  return await context.edges.invokes(
    "project-complete-new-feature-authority",
    context
  );
}

```

### complete-new-feature-materialization

#### Canonical authority

```json
{
  "bodyId": "complete-new-feature-materialization",
  "responsibilityId": "materializes-complete-new-feature",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "materialize-complete-new-feature-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "materialize-complete-new-feature",
      "input": "$.context",
      "assign": "materialization"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.materialization"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

#### Projected responsibility body

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: materialize-one-complete-new-feature
// obligation-id: materialize-only-admitted-new-feature-authority
// responsibility-id: materializes-complete-new-feature
// signal-id: complete-new-feature-materialization
// DO NOT EDIT.
import type { MaterializeCompleteNewFeatureContext, CompleteNewFeatureMaterialization } from "./complete-new-feature-materialization.type.js";

export async function materializesCompleteNewFeature(
  context: MaterializeCompleteNewFeatureContext
): Promise<CompleteNewFeatureMaterialization> {
  return await context.edges.invokes(
    "materialize-complete-new-feature",
    context
  );
}

```

### observed-new-feature-execution

#### Canonical authority

```json
{
  "bodyId": "observed-new-feature-execution",
  "responsibilityId": "executes-newly-materialized-feature",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "execute-newly-materialized-feature-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "execute-newly-materialized-feature",
      "input": "$.context",
      "assign": "observation"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.observation"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

#### Projected responsibility body

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: execute-one-newly-materialized-feature
// obligation-id: execute-new-feature-through-admitted-semantics
// responsibility-id: executes-newly-materialized-feature
// signal-id: observed-new-feature-execution
// DO NOT EDIT.
import type { ExecuteNewlyMaterializedFeatureContext, ObservedNewFeatureExecution } from "./observed-new-feature-execution.type.js";

export async function executesNewlyMaterializedFeature(
  context: ExecuteNewlyMaterializedFeatureContext
): Promise<ObservedNewFeatureExecution> {
  return await context.edges.invokes(
    "execute-newly-materialized-feature",
    context
  );
}

```

### new-feature-execution-comparison

#### Canonical authority

```json
{
  "bodyId": "new-feature-execution-comparison",
  "responsibilityId": "composes-new-feature-execution-comparison",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "compose-new-feature-execution-comparison-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "compose-new-feature-execution-comparison",
      "input": "$.context",
      "assign": "comparison"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.comparison"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

#### Projected responsibility body

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: compose-one-new-feature-execution-comparison
// obligation-id: compose-complete-execution-comparison
// responsibility-id: composes-new-feature-execution-comparison
// signal-id: new-feature-execution-comparison
// DO NOT EDIT.
import type { ComposeNewFeatureExecutionComparisonContext, NewFeatureExecutionComparison } from "./new-feature-execution-comparison.type.js";

export async function composesNewFeatureExecutionComparison(
  context: ComposeNewFeatureExecutionComparisonContext
): Promise<NewFeatureExecutionComparison> {
  return await context.edges.invokes(
    "compose-new-feature-execution-comparison",
    context
  );
}

```

### complete-new-feature-lineage

#### Canonical authority

```json
{
  "bodyId": "complete-new-feature-lineage",
  "responsibilityId": "verifies-complete-new-feature-lineage",
  "bodyKind": "scenario-responsibility",
  "context": {
    "parameterName": "context",
    "contractId": "verify-complete-new-feature-lineage-context.v1",
    "immutable": true
  },
  "operations": [
    {
      "sequence": 1,
      "operation": "invoke-semantic-edge",
      "edgeId": "verify-complete-new-feature-lineage",
      "input": "$.context",
      "assign": "disposition"
    },
    {
      "sequence": 2,
      "operation": "return",
      "value": "$.disposition"
    }
  ],
  "constraints": {
    "domainBranching": "forbidden",
    "domainIteration": "forbidden",
    "dtoConstruction": "forbidden",
    "directEffects": "forbidden"
  }
}
```

#### Projected responsibility body

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: verify-one-complete-new-feature-lineage
// obligation-id: prove-complete-new-feature-equivalence
// responsibility-id: verifies-complete-new-feature-lineage
// signal-id: complete-new-feature-equivalence
// DO NOT EDIT.
import type { VerifyCompleteNewFeatureLineageContext, NewFeatureTerminalDisposition } from "./complete-new-feature-lineage.type.js";

export async function verifiesCompleteNewFeatureLineage(
  context: VerifyCompleteNewFeatureLineageContext
): Promise<NewFeatureTerminalDisposition> {
  return await context.edges.invokes(
    "verify-complete-new-feature-lineage",
    context
  );
}

```

Governed file-body system:

```text
Canonical authority graph

[RESP] Responsibility ──owns──► [SA] Semantic Authority
[SA] Semantic Authority ──projects──► [FB] Feature Body Authority
[FB] Feature Body Authority ──projects──► [AST] Projected AST
[AST] Projected AST ──projects──► [TS] Projected Runtime Body
[TS] Projected Runtime Body ──requires──► [TYPE] Projected Type Definitions
[TS] Projected Runtime Body ──participates-in──► [REG] Runtime Registration
[FEATURE] Feature Execution Authority ──projects──► [FLOW] Feature Execution Body
[FLOW] Feature Execution Body ──requires──► [PORT] Runtime Adapter

Responsibility projection conveyors

Scenario
└── admit-one-reviewed-new-feature-request
    │
    └── Responsibility
        └── admits-reviewed-new-feature-request
            │
            ├─► [SA] Semantic Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/admit-reviewed-new-feature-request.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts
            │
            └─► [REG] Runtime Registration
                   capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/registers-admit-reviewed-new-feature-request.ts

Scenario
└── adapt-one-new-feature-request-admission
    │
    └── Responsibility
        └── adapts-new-feature-request-admission
            │
            ├─► [SA] Semantic Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/adapt-new-feature-request-admission.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.ts
            │
            └─► [REG] Runtime Registration
                   capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/registers-adapt-new-feature-request-admission.ts

Scenario
└── project-one-complete-new-feature-authority
    │
    └── Responsibility
        └── projects-complete-new-feature-authority
            │
            ├─► [SA] Semantic Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/project-complete-new-feature-authority.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.ts
            │
            └─► [REG] Runtime Registration
                   capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/registers-project-complete-new-feature-authority.ts

Scenario
└── materialize-one-complete-new-feature
    │
    └── Responsibility
        └── materializes-complete-new-feature
            │
            ├─► [SA] Semantic Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/materialize-complete-new-feature.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.ts
            │
            └─► [REG] Runtime Registration
                   capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/registers-materialize-complete-new-feature.ts

Scenario
└── execute-one-newly-materialized-feature
    │
    └── Responsibility
        └── executes-newly-materialized-feature
            │
            ├─► [SA] Semantic Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/execute-newly-materialized-feature.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.ts
            │
            └─► [REG] Runtime Registration
                   capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/registers-execute-newly-materialized-feature.ts

Scenario
└── compose-one-new-feature-execution-comparison
    │
    └── Responsibility
        └── composes-new-feature-execution-comparison
            │
            ├─► [SA] Semantic Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/compose-new-feature-execution-comparison.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.ts
            │
            └─► [REG] Runtime Registration
                   capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/registers-compose-new-feature-execution-comparison.ts

Scenario
└── verify-one-complete-new-feature-lineage
    │
    └── Responsibility
        └── verifies-complete-new-feature-lineage
            │
            ├─► [SA] Semantic Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/verify-complete-new-feature-lineage.semantic-authority.json
            │
            ├─► [FB] Feature Body Authority
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.feature-body-authority.json
            │
            ├─► [AST] Projected AST
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.ts.ast.authority.json
            │
            ├─► [TYPE] Projected Type Definitions
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.type.ts
            │
            ├─► [TS] Projected Runtime Body
            │      capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.ts
            │
            └─► [REG] Runtime Registration
                   capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/registers-verify-complete-new-feature-lineage.ts

Feature-level execution
├─► [FLOW] Feature Execution Body
│      capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/executes-end-to-end-canonical-feature-conveyor.ts
│
└─► [PORT] Runtime Adapter
       capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/invokes-canonical-feature-conveyor.ts
```

### What this becomes

Projection availability: PROJECTOR_OUTPUT

#### new-feature-request-admission

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: admit-one-reviewed-new-feature-request
// obligation-id: establish-one-eligible-new-feature-request
// responsibility-id: admits-reviewed-new-feature-request
// signal-id: new-feature-request-admission
// DO NOT EDIT.
import type { AdmitReviewedNewFeatureRequestContext, NewFeatureRequestAdmission } from "./new-feature-request-admission.type.js";

export async function admitsReviewedNewFeatureRequest(
  context: AdmitReviewedNewFeatureRequestContext
): Promise<NewFeatureRequestAdmission> {
  return await context.edges.invokes(
    "admit-reviewed-new-feature-request",
    context
  );
}

```

#### admitted-new-feature-request

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: adapt-one-new-feature-request-admission
// obligation-id: bridge-admission-to-admitted-request-contract
// responsibility-id: adapts-new-feature-request-admission
// signal-id: admitted-new-feature-request
// DO NOT EDIT.
import type { AdaptNewFeatureRequestAdmissionContext, AdmittedNewFeatureRequest } from "./admitted-new-feature-request.type.js";

export async function adaptsNewFeatureRequestAdmission(
  context: AdaptNewFeatureRequestAdmissionContext
): Promise<AdmittedNewFeatureRequest> {
  return await context.edges.invokes(
    "adapt-new-feature-request-admission",
    context
  );
}

```

#### complete-new-feature-authority

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: project-one-complete-new-feature-authority
// obligation-id: establish-one-complete-new-feature-authority
// responsibility-id: projects-complete-new-feature-authority
// signal-id: complete-new-feature-authority
// DO NOT EDIT.
import type { ProjectCompleteNewFeatureAuthorityContext, CompleteNewFeatureAuthority } from "./complete-new-feature-authority.type.js";

export async function projectsCompleteNewFeatureAuthority(
  context: ProjectCompleteNewFeatureAuthorityContext
): Promise<CompleteNewFeatureAuthority> {
  return await context.edges.invokes(
    "project-complete-new-feature-authority",
    context
  );
}

```

#### complete-new-feature-materialization

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: materialize-one-complete-new-feature
// obligation-id: materialize-only-admitted-new-feature-authority
// responsibility-id: materializes-complete-new-feature
// signal-id: complete-new-feature-materialization
// DO NOT EDIT.
import type { MaterializeCompleteNewFeatureContext, CompleteNewFeatureMaterialization } from "./complete-new-feature-materialization.type.js";

export async function materializesCompleteNewFeature(
  context: MaterializeCompleteNewFeatureContext
): Promise<CompleteNewFeatureMaterialization> {
  return await context.edges.invokes(
    "materialize-complete-new-feature",
    context
  );
}

```

#### observed-new-feature-execution

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: execute-one-newly-materialized-feature
// obligation-id: execute-new-feature-through-admitted-semantics
// responsibility-id: executes-newly-materialized-feature
// signal-id: observed-new-feature-execution
// DO NOT EDIT.
import type { ExecuteNewlyMaterializedFeatureContext, ObservedNewFeatureExecution } from "./observed-new-feature-execution.type.js";

export async function executesNewlyMaterializedFeature(
  context: ExecuteNewlyMaterializedFeatureContext
): Promise<ObservedNewFeatureExecution> {
  return await context.edges.invokes(
    "execute-newly-materialized-feature",
    context
  );
}

```

#### new-feature-execution-comparison

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: compose-one-new-feature-execution-comparison
// obligation-id: compose-complete-execution-comparison
// responsibility-id: composes-new-feature-execution-comparison
// signal-id: new-feature-execution-comparison
// DO NOT EDIT.
import type { ComposeNewFeatureExecutionComparisonContext, NewFeatureExecutionComparison } from "./new-feature-execution-comparison.type.js";

export async function composesNewFeatureExecutionComparison(
  context: ComposeNewFeatureExecutionComparisonContext
): Promise<NewFeatureExecutionComparison> {
  return await context.edges.invokes(
    "compose-new-feature-execution-comparison",
    context
  );
}

```

#### complete-new-feature-lineage

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: verify-one-complete-new-feature-lineage
// obligation-id: prove-complete-new-feature-equivalence
// responsibility-id: verifies-complete-new-feature-lineage
// signal-id: complete-new-feature-equivalence
// DO NOT EDIT.
import type { VerifyCompleteNewFeatureLineageContext, NewFeatureTerminalDisposition } from "./complete-new-feature-lineage.type.js";

export async function verifiesCompleteNewFeatureLineage(
  context: VerifyCompleteNewFeatureLineageContext
): Promise<NewFeatureTerminalDisposition> {
  return await context.edges.invokes(
    "verify-complete-new-feature-lineage",
    context
  );
}

```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.derivedProjections.results | responsibility-source | PROJECTOR_OUTPUT | feature-body-authority |

### Review questions

- Does each body invoke only its admitted semantic edge and introduce no domain meaning?

## 12. Language projection authority

### What is established here

```text
Stage ID: resolve-language-projection
Purpose: Bind each feature body to one admitted language and module profile.
Authorized inputs: feature-body-authority
Required prior products: feature-body-authority
Required output: language-projection-authority
Stop condition: every feature body has one admitted language projection
```

### Canonical authority

```json
[
  {
    "languageProfileId": "typescript-collapsed-responsibility-body-v1",
    "targetLanguage": "typescript",
    "moduleProfile": "typescript-esm",
    "bodyKind": "scenario-responsibility",
    "mappings": [
      {
        "ruleId": "body-to-exported-async-function",
        "source": "scenario-responsibility body",
        "target": "exported async FunctionDeclaration"
      },
      {
        "ruleId": "context-to-parameter",
        "source": "body.context",
        "target": "one immutable function parameter"
      },
      {
        "ruleId": "semantic-edge-to-call",
        "source": "invoke-semantic-edge",
        "target": "context.edges.invokes CallExpression"
      },
      {
        "ruleId": "edge-id-to-string-literal",
        "source": "invoke-semantic-edge.edgeId",
        "target": "first call argument StringLiteral"
      },
      {
        "ruleId": "context-input-to-identifier",
        "source": "invoke-semantic-edge.input $.context",
        "target": "second call argument context Identifier"
      },
      {
        "ruleId": "asynchronous-invocation-to-await",
        "source": "semantic edge invocation",
        "target": "AwaitExpression"
      },
      {
        "ruleId": "return-operation-to-return-statement",
        "source": "return operation",
        "target": "ReturnStatement containing awaited invocation"
      }
    ],
    "namingRules": {
      "functionName": "camel-case(responsibilityId)",
      "contextType": "resolve(typeResolution.contextType)",
      "resultType": "resolve(typeResolution.resultType)"
    }
  }
]
```

Production projector invocations:

```json
[
  {
    "bodyId": "new-feature-request-admission",
    "languageProfileId": "typescript-collapsed-responsibility-body-v1",
    "projector": {
      "projectorId": "projects-typescript-body",
      "projectorVersion": "1.0.0",
      "projectionProfileId": "typescript-collapsed-responsibility-body-v1",
      "executablePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/semantic-typescript-projector.bundle.mjs",
      "executableSha256": "sha256:0f1f8e7b25ca750fb8f051314c64ab37d0f0d185562203c16e39be4f456523ae"
    },
    "input": {
      "bodyAuthorityRef": "feature-body:new-feature-request-admission",
      "projectorRequest": {
        "contract": {
          "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
          "schemaVersion": "1.0.0",
          "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
        },
        "projectionId": "project-new-feature-request-admission-through-production-projector",
        "targetLanguage": "typescript",
        "artifact": {
          "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts"
        },
        "lineage": {
          "featureId": "end-to-end-canonical-feature-conveyor-fractal",
          "scenarioId": "admit-one-reviewed-new-feature-request",
          "obligationId": "establish-one-eligible-new-feature-request",
          "responsibilityId": "admits-reviewed-new-feature-request",
          "signalId": "new-feature-request-admission"
        },
        "imports": [
          {
            "kind": "type-only",
            "moduleSpecifier": "./new-feature-request-admission.type.js",
            "namedBindings": [
              "AdmitReviewedNewFeatureRequestContext",
              "NewFeatureRequestAdmission"
            ]
          }
        ],
        "function": {
          "identity": "new-feature-request-admission",
          "name": "admitsReviewedNewFeatureRequest",
          "contextParameter": {
            "name": "context",
            "typeReference": "AdmitReviewedNewFeatureRequestContext"
          },
          "resultTypeReference": "NewFeatureRequestAdmission",
          "semanticEdgeId": "admit-reviewed-new-feature-request",
          "awaited": true
        }
      }
    },
    "expectedArtifact": {
      "path": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts",
      "language": "typescript"
    },
    "typeResolution": {
      "contextType": "AdmitReviewedNewFeatureRequestContext",
      "resultType": "NewFeatureRequestAdmission"
    }
  },
  {
    "bodyId": "admitted-new-feature-request",
    "languageProfileId": "typescript-collapsed-responsibility-body-v1",
    "projector": {
      "projectorId": "projects-typescript-body",
      "projectorVersion": "1.0.0",
      "projectionProfileId": "typescript-collapsed-responsibility-body-v1",
      "executablePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/semantic-typescript-projector.bundle.mjs",
      "executableSha256": "sha256:0f1f8e7b25ca750fb8f051314c64ab37d0f0d185562203c16e39be4f456523ae"
    },
    "input": {
      "bodyAuthorityRef": "feature-body:admitted-new-feature-request",
      "projectorRequest": {
        "contract": {
          "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
          "schemaVersion": "1.0.0",
          "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
        },
        "projectionId": "project-admitted-new-feature-request-through-production-projector",
        "targetLanguage": "typescript",
        "artifact": {
          "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.ts"
        },
        "lineage": {
          "featureId": "end-to-end-canonical-feature-conveyor-fractal",
          "scenarioId": "adapt-one-new-feature-request-admission",
          "obligationId": "bridge-admission-to-admitted-request-contract",
          "responsibilityId": "adapts-new-feature-request-admission",
          "signalId": "admitted-new-feature-request"
        },
        "imports": [
          {
            "kind": "type-only",
            "moduleSpecifier": "./admitted-new-feature-request.type.js",
            "namedBindings": [
              "AdaptNewFeatureRequestAdmissionContext",
              "AdmittedNewFeatureRequest"
            ]
          }
        ],
        "function": {
          "identity": "admitted-new-feature-request",
          "name": "adaptsNewFeatureRequestAdmission",
          "contextParameter": {
            "name": "context",
            "typeReference": "AdaptNewFeatureRequestAdmissionContext"
          },
          "resultTypeReference": "AdmittedNewFeatureRequest",
          "semanticEdgeId": "adapt-new-feature-request-admission",
          "awaited": true
        }
      }
    },
    "expectedArtifact": {
      "path": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.ts",
      "language": "typescript"
    },
    "typeResolution": {
      "contextType": "AdaptNewFeatureRequestAdmissionContext",
      "resultType": "AdmittedNewFeatureRequest"
    }
  },
  {
    "bodyId": "complete-new-feature-authority",
    "languageProfileId": "typescript-collapsed-responsibility-body-v1",
    "projector": {
      "projectorId": "projects-typescript-body",
      "projectorVersion": "1.0.0",
      "projectionProfileId": "typescript-collapsed-responsibility-body-v1",
      "executablePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/semantic-typescript-projector.bundle.mjs",
      "executableSha256": "sha256:0f1f8e7b25ca750fb8f051314c64ab37d0f0d185562203c16e39be4f456523ae"
    },
    "input": {
      "bodyAuthorityRef": "feature-body:complete-new-feature-authority",
      "projectorRequest": {
        "contract": {
          "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
          "schemaVersion": "1.0.0",
          "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
        },
        "projectionId": "project-complete-new-feature-authority-through-production-projector",
        "targetLanguage": "typescript",
        "artifact": {
          "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.ts"
        },
        "lineage": {
          "featureId": "end-to-end-canonical-feature-conveyor-fractal",
          "scenarioId": "project-one-complete-new-feature-authority",
          "obligationId": "establish-one-complete-new-feature-authority",
          "responsibilityId": "projects-complete-new-feature-authority",
          "signalId": "complete-new-feature-authority"
        },
        "imports": [
          {
            "kind": "type-only",
            "moduleSpecifier": "./complete-new-feature-authority.type.js",
            "namedBindings": [
              "ProjectCompleteNewFeatureAuthorityContext",
              "CompleteNewFeatureAuthority"
            ]
          }
        ],
        "function": {
          "identity": "complete-new-feature-authority",
          "name": "projectsCompleteNewFeatureAuthority",
          "contextParameter": {
            "name": "context",
            "typeReference": "ProjectCompleteNewFeatureAuthorityContext"
          },
          "resultTypeReference": "CompleteNewFeatureAuthority",
          "semanticEdgeId": "project-complete-new-feature-authority",
          "awaited": true
        }
      }
    },
    "expectedArtifact": {
      "path": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.ts",
      "language": "typescript"
    },
    "typeResolution": {
      "contextType": "ProjectCompleteNewFeatureAuthorityContext",
      "resultType": "CompleteNewFeatureAuthority"
    }
  },
  {
    "bodyId": "complete-new-feature-materialization",
    "languageProfileId": "typescript-collapsed-responsibility-body-v1",
    "projector": {
      "projectorId": "projects-typescript-body",
      "projectorVersion": "1.0.0",
      "projectionProfileId": "typescript-collapsed-responsibility-body-v1",
      "executablePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/semantic-typescript-projector.bundle.mjs",
      "executableSha256": "sha256:0f1f8e7b25ca750fb8f051314c64ab37d0f0d185562203c16e39be4f456523ae"
    },
    "input": {
      "bodyAuthorityRef": "feature-body:complete-new-feature-materialization",
      "projectorRequest": {
        "contract": {
          "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
          "schemaVersion": "1.0.0",
          "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
        },
        "projectionId": "project-complete-new-feature-materialization-through-production-projector",
        "targetLanguage": "typescript",
        "artifact": {
          "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.ts"
        },
        "lineage": {
          "featureId": "end-to-end-canonical-feature-conveyor-fractal",
          "scenarioId": "materialize-one-complete-new-feature",
          "obligationId": "materialize-only-admitted-new-feature-authority",
          "responsibilityId": "materializes-complete-new-feature",
          "signalId": "complete-new-feature-materialization"
        },
        "imports": [
          {
            "kind": "type-only",
            "moduleSpecifier": "./complete-new-feature-materialization.type.js",
            "namedBindings": [
              "MaterializeCompleteNewFeatureContext",
              "CompleteNewFeatureMaterialization"
            ]
          }
        ],
        "function": {
          "identity": "complete-new-feature-materialization",
          "name": "materializesCompleteNewFeature",
          "contextParameter": {
            "name": "context",
            "typeReference": "MaterializeCompleteNewFeatureContext"
          },
          "resultTypeReference": "CompleteNewFeatureMaterialization",
          "semanticEdgeId": "materialize-complete-new-feature",
          "awaited": true
        }
      }
    },
    "expectedArtifact": {
      "path": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.ts",
      "language": "typescript"
    },
    "typeResolution": {
      "contextType": "MaterializeCompleteNewFeatureContext",
      "resultType": "CompleteNewFeatureMaterialization"
    }
  },
  {
    "bodyId": "observed-new-feature-execution",
    "languageProfileId": "typescript-collapsed-responsibility-body-v1",
    "projector": {
      "projectorId": "projects-typescript-body",
      "projectorVersion": "1.0.0",
      "projectionProfileId": "typescript-collapsed-responsibility-body-v1",
      "executablePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/semantic-typescript-projector.bundle.mjs",
      "executableSha256": "sha256:0f1f8e7b25ca750fb8f051314c64ab37d0f0d185562203c16e39be4f456523ae"
    },
    "input": {
      "bodyAuthorityRef": "feature-body:observed-new-feature-execution",
      "projectorRequest": {
        "contract": {
          "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
          "schemaVersion": "1.0.0",
          "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
        },
        "projectionId": "project-observed-new-feature-execution-through-production-projector",
        "targetLanguage": "typescript",
        "artifact": {
          "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.ts"
        },
        "lineage": {
          "featureId": "end-to-end-canonical-feature-conveyor-fractal",
          "scenarioId": "execute-one-newly-materialized-feature",
          "obligationId": "execute-new-feature-through-admitted-semantics",
          "responsibilityId": "executes-newly-materialized-feature",
          "signalId": "observed-new-feature-execution"
        },
        "imports": [
          {
            "kind": "type-only",
            "moduleSpecifier": "./observed-new-feature-execution.type.js",
            "namedBindings": [
              "ExecuteNewlyMaterializedFeatureContext",
              "ObservedNewFeatureExecution"
            ]
          }
        ],
        "function": {
          "identity": "observed-new-feature-execution",
          "name": "executesNewlyMaterializedFeature",
          "contextParameter": {
            "name": "context",
            "typeReference": "ExecuteNewlyMaterializedFeatureContext"
          },
          "resultTypeReference": "ObservedNewFeatureExecution",
          "semanticEdgeId": "execute-newly-materialized-feature",
          "awaited": true
        }
      }
    },
    "expectedArtifact": {
      "path": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.ts",
      "language": "typescript"
    },
    "typeResolution": {
      "contextType": "ExecuteNewlyMaterializedFeatureContext",
      "resultType": "ObservedNewFeatureExecution"
    }
  },
  {
    "bodyId": "new-feature-execution-comparison",
    "languageProfileId": "typescript-collapsed-responsibility-body-v1",
    "projector": {
      "projectorId": "projects-typescript-body",
      "projectorVersion": "1.0.0",
      "projectionProfileId": "typescript-collapsed-responsibility-body-v1",
      "executablePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/semantic-typescript-projector.bundle.mjs",
      "executableSha256": "sha256:0f1f8e7b25ca750fb8f051314c64ab37d0f0d185562203c16e39be4f456523ae"
    },
    "input": {
      "bodyAuthorityRef": "feature-body:new-feature-execution-comparison",
      "projectorRequest": {
        "contract": {
          "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
          "schemaVersion": "1.0.0",
          "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
        },
        "projectionId": "project-new-feature-execution-comparison-through-production-projector",
        "targetLanguage": "typescript",
        "artifact": {
          "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.ts"
        },
        "lineage": {
          "featureId": "end-to-end-canonical-feature-conveyor-fractal",
          "scenarioId": "compose-one-new-feature-execution-comparison",
          "obligationId": "compose-complete-execution-comparison",
          "responsibilityId": "composes-new-feature-execution-comparison",
          "signalId": "new-feature-execution-comparison"
        },
        "imports": [
          {
            "kind": "type-only",
            "moduleSpecifier": "./new-feature-execution-comparison.type.js",
            "namedBindings": [
              "ComposeNewFeatureExecutionComparisonContext",
              "NewFeatureExecutionComparison"
            ]
          }
        ],
        "function": {
          "identity": "new-feature-execution-comparison",
          "name": "composesNewFeatureExecutionComparison",
          "contextParameter": {
            "name": "context",
            "typeReference": "ComposeNewFeatureExecutionComparisonContext"
          },
          "resultTypeReference": "NewFeatureExecutionComparison",
          "semanticEdgeId": "compose-new-feature-execution-comparison",
          "awaited": true
        }
      }
    },
    "expectedArtifact": {
      "path": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.ts",
      "language": "typescript"
    },
    "typeResolution": {
      "contextType": "ComposeNewFeatureExecutionComparisonContext",
      "resultType": "NewFeatureExecutionComparison"
    }
  },
  {
    "bodyId": "complete-new-feature-lineage",
    "languageProfileId": "typescript-collapsed-responsibility-body-v1",
    "projector": {
      "projectorId": "projects-typescript-body",
      "projectorVersion": "1.0.0",
      "projectionProfileId": "typescript-collapsed-responsibility-body-v1",
      "executablePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/semantic-typescript-projector.bundle.mjs",
      "executableSha256": "sha256:0f1f8e7b25ca750fb8f051314c64ab37d0f0d185562203c16e39be4f456523ae"
    },
    "input": {
      "bodyAuthorityRef": "feature-body:complete-new-feature-lineage",
      "projectorRequest": {
        "contract": {
          "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
          "schemaVersion": "1.0.0",
          "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
        },
        "projectionId": "project-complete-new-feature-lineage-through-production-projector",
        "targetLanguage": "typescript",
        "artifact": {
          "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.ts"
        },
        "lineage": {
          "featureId": "end-to-end-canonical-feature-conveyor-fractal",
          "scenarioId": "verify-one-complete-new-feature-lineage",
          "obligationId": "prove-complete-new-feature-equivalence",
          "responsibilityId": "verifies-complete-new-feature-lineage",
          "signalId": "complete-new-feature-equivalence"
        },
        "imports": [
          {
            "kind": "type-only",
            "moduleSpecifier": "./complete-new-feature-lineage.type.js",
            "namedBindings": [
              "VerifyCompleteNewFeatureLineageContext",
              "NewFeatureTerminalDisposition"
            ]
          }
        ],
        "function": {
          "identity": "complete-new-feature-lineage",
          "name": "verifiesCompleteNewFeatureLineage",
          "contextParameter": {
            "name": "context",
            "typeReference": "VerifyCompleteNewFeatureLineageContext"
          },
          "resultTypeReference": "NewFeatureTerminalDisposition",
          "semanticEdgeId": "verify-complete-new-feature-lineage",
          "awaited": true
        }
      }
    },
    "expectedArtifact": {
      "path": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.ts",
      "language": "typescript"
    },
    "typeResolution": {
      "contextType": "VerifyCompleteNewFeatureLineageContext",
      "resultType": "NewFeatureTerminalDisposition"
    }
  }
]
```

Compilation and runtime artifact authority:

```json
{
  "edgeRegistry": {
    "contractId": "canonical-feature-edge-registry.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/canonical-feature-edge-registry.type.ts",
    "edgeContracts": [
      {
        "sequence": 1,
        "edgeId": "admit-reviewed-new-feature-request",
        "inputContractId": "end-to-end-canonical-feature-conveyor-context.v1",
        "outputContractId": "new-feature-request-admission.v1"
      },
      {
        "sequence": 2,
        "edgeId": "adapt-new-feature-request-admission",
        "inputContractId": "new-feature-request-admission.v1",
        "outputContractId": "admitted-new-feature-request.v1"
      },
      {
        "sequence": 3,
        "edgeId": "project-complete-new-feature-authority",
        "inputContractId": "admitted-new-feature-request.v1",
        "outputContractId": "complete-new-feature-authority.v1"
      },
      {
        "sequence": 4,
        "edgeId": "materialize-complete-new-feature",
        "inputContractId": "complete-new-feature-authority.v1",
        "outputContractId": "complete-new-feature-materialization.v1"
      },
      {
        "sequence": 5,
        "edgeId": "execute-newly-materialized-feature",
        "inputContractId": "complete-new-feature-materialization.v1",
        "outputContractId": "observed-new-feature-execution.v1"
      },
      {
        "sequence": 6,
        "edgeId": "compose-new-feature-execution-comparison",
        "inputContractId": "observed-new-feature-execution.v1",
        "outputContractId": "new-feature-execution-comparison.v1"
      },
      {
        "sequence": 7,
        "edgeId": "verify-complete-new-feature-lineage",
        "inputContractId": "new-feature-execution-comparison.v1",
        "outputContractId": "new-feature-terminal-disposition.v1"
      }
    ],
    "projectorRequest": {
      "contract": {
        "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
        "schemaVersion": "1.0.0",
        "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
      },
      "projectionId": "project-canonical-feature-edge-registry-type",
      "targetLanguage": "typescript",
      "artifact": {
        "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/canonical-feature-edge-registry.type.ts"
      },
      "lineage": {
        "featureId": "end-to-end-canonical-feature-conveyor-fractal",
        "scenarioId": "execute-complete-canonical-feature-conveyor",
        "obligationId": "execute-one-mechanically-continuous-feature-flow",
        "responsibilityId": "executes-end-to-end-canonical-feature-conveyor",
        "signalId": "new-feature-terminal-disposition"
      },
      "imports": [
        {
          "kind": "type-only",
          "moduleSpecifier": "./executes-end-to-end-canonical-feature-conveyor.type.js",
          "namedBindings": [
            "EndToEndCanonicalFeatureConveyorContext",
            "NewFeatureRequestAdmission",
            "AdmittedNewFeatureRequest",
            "CompleteNewFeatureAuthority",
            "CompleteNewFeatureMaterialization",
            "ObservedNewFeatureExecution",
            "NewFeatureExecutionComparison",
            "NewFeatureTerminalDisposition"
          ]
        }
      ],
      "interface": {
        "identity": "canonical-feature-edge-registry",
        "name": "CanonicalFeatureEdgeRegistry",
        "members": [
          {
            "name": "invokes",
            "typeReference": "<K extends \"admit-reviewed-new-feature-request\" | \"adapt-new-feature-request-admission\" | \"project-complete-new-feature-authority\" | \"materialize-complete-new-feature\" | \"execute-newly-materialized-feature\" | \"compose-new-feature-execution-comparison\" | \"verify-complete-new-feature-lineage\">(edgeId: K, input: K extends \"admit-reviewed-new-feature-request\" ? EndToEndCanonicalFeatureConveyorContext : K extends \"adapt-new-feature-request-admission\" ? NewFeatureRequestAdmission : K extends \"project-complete-new-feature-authority\" ? AdmittedNewFeatureRequest : K extends \"materialize-complete-new-feature\" ? CompleteNewFeatureAuthority : K extends \"execute-newly-materialized-feature\" ? CompleteNewFeatureMaterialization : K extends \"compose-new-feature-execution-comparison\" ? ObservedNewFeatureExecution : NewFeatureExecutionComparison) => Promise<K extends \"admit-reviewed-new-feature-request\" ? NewFeatureRequestAdmission : K extends \"adapt-new-feature-request-admission\" ? AdmittedNewFeatureRequest : K extends \"project-complete-new-feature-authority\" ? CompleteNewFeatureAuthority : K extends \"materialize-complete-new-feature\" ? CompleteNewFeatureMaterialization : K extends \"execute-newly-materialized-feature\" ? ObservedNewFeatureExecution : K extends \"compose-new-feature-execution-comparison\" ? NewFeatureExecutionComparison : NewFeatureTerminalDisposition>"
          }
        ]
      }
    },
    "bindingStatus": "IMPLEMENTED"
  },
  "compositionTypes": {
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/executes-end-to-end-canonical-feature-conveyor.type.ts",
    "authorityRef": "implementation-artifact:composition-types",
    "bindingStatus": "PROJECTOR_OUTPUT_AVAILABLE",
    "projectorRequest": {
      "contract": {
        "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
        "schemaVersion": "1.0.0",
        "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
      },
      "projectionId": "project-end-to-end-canonical-feature-conveyor-composition-types",
      "targetLanguage": "typescript",
      "artifact": {
        "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/executes-end-to-end-canonical-feature-conveyor.type.ts"
      },
      "lineage": {
        "featureId": "end-to-end-canonical-feature-conveyor-fractal",
        "scenarioId": "execute-complete-canonical-feature-conveyor",
        "obligationId": "execute-one-mechanically-continuous-feature-flow",
        "responsibilityId": "executes-end-to-end-canonical-feature-conveyor",
        "signalId": "new-feature-terminal-disposition"
      },
      "declarations": [
        {
          "interface": {
            "identity": "governed-artifact-ref",
            "name": "GovernedArtifactRef",
            "members": [
              {
                "name": "artifactId",
                "typeReference": "string"
              },
              {
                "name": "sha256",
                "typeReference": "string"
              },
              {
                "name": "mediaType",
                "typeReference": "string"
              }
            ]
          }
        },
        {
          "interface": {
            "identity": "new-feature-request-admission",
            "name": "NewFeatureRequestAdmission",
            "members": [
              {
                "name": "disposition",
                "unionAlternatives": [
                  "ADMITTED",
                  "REJECTED"
                ]
              },
              {
                "name": "featureId",
                "typeReference": "string"
              },
              {
                "name": "requestRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              }
            ],
            "separatedBefore": true
          }
        },
        {
          "interface": {
            "identity": "admitted-new-feature-request",
            "name": "AdmittedNewFeatureRequest",
            "members": [
              {
                "name": "disposition",
                "typeReference": "ADMITTED",
                "literal": true
              },
              {
                "name": "featureId",
                "typeReference": "string"
              },
              {
                "name": "requestRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              }
            ],
            "separatedBefore": true
          }
        },
        {
          "interface": {
            "identity": "complete-new-feature-authority",
            "name": "CompleteNewFeatureAuthority",
            "members": [
              {
                "name": "disposition",
                "typeReference": "COMPLETE",
                "literal": true
              },
              {
                "name": "featureId",
                "typeReference": "string"
              },
              {
                "name": "requestRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "authorityRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              }
            ],
            "separatedBefore": true
          }
        },
        {
          "interface": {
            "identity": "complete-new-feature-materialization",
            "name": "CompleteNewFeatureMaterialization",
            "members": [
              {
                "name": "disposition",
                "typeReference": "MATERIALIZED",
                "literal": true
              },
              {
                "name": "featureId",
                "typeReference": "string"
              },
              {
                "name": "authorityRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "artifactManifestRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              }
            ],
            "separatedBefore": true
          }
        },
        {
          "interface": {
            "identity": "observed-new-feature-execution",
            "name": "ObservedNewFeatureExecution",
            "members": [
              {
                "name": "disposition",
                "unionAlternatives": [
                  "CONFORMS",
                  "DIVERGES"
                ]
              },
              {
                "name": "featureId",
                "typeReference": "string"
              },
              {
                "name": "artifactManifestRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "semanticObservationRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "projectedObservationRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "expectedSignalRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "astSourceCorrespondenceRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              }
            ],
            "separatedBefore": true
          }
        },
        {
          "interface": {
            "identity": "new-feature-execution-comparison",
            "name": "NewFeatureExecutionComparison",
            "members": [
              {
                "name": "disposition",
                "typeReference": "COMPLETE",
                "literal": true
              },
              {
                "name": "featureId",
                "typeReference": "string"
              },
              {
                "name": "semanticObservationRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "projectedObservationRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "expectedSignalRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "astSourceCorrespondenceRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "comparisonEvidenceRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              }
            ],
            "separatedBefore": true
          }
        },
        {
          "interface": {
            "identity": "new-feature-terminal-disposition",
            "name": "NewFeatureTerminalDisposition",
            "members": [
              {
                "name": "disposition",
                "unionAlternatives": [
                  "PROJECTION_CONFORMS",
                  "PROJECTION_DIVERGES"
                ]
              },
              {
                "name": "comparisonEvidenceRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              }
            ],
            "separatedBefore": true
          }
        },
        {
          "interface": {
            "identity": "end-to-end-canonical-feature-conveyor-context",
            "name": "EndToEndCanonicalFeatureConveyorContext",
            "members": [
              {
                "name": "reviewDisposition",
                "unionAlternatives": [
                  "REVIEWED",
                  "UNREVIEWED"
                ]
              },
              {
                "name": "existingFeatureIds",
                "typeReference": "ReadonlyArray<string>"
              },
              {
                "name": "featureId",
                "typeReference": "string"
              },
              {
                "name": "requestRef",
                "typeReference": "GovernedArtifactRef"
              },
              {
                "name": "lineageId",
                "typeReference": "string"
              },
              {
                "name": "edges",
                "members": [
                  {
                    "name": "invokes",
                    "typeReference": "<K extends \"admit-reviewed-new-feature-request\" | \"adapt-new-feature-request-admission\" | \"project-complete-new-feature-authority\" | \"materialize-complete-new-feature\" | \"execute-newly-materialized-feature\" | \"compose-new-feature-execution-comparison\" | \"verify-complete-new-feature-lineage\">(edgeId: K, input: K extends \"admit-reviewed-new-feature-request\" ? EndToEndCanonicalFeatureConveyorContext : K extends \"adapt-new-feature-request-admission\" ? NewFeatureRequestAdmission : K extends \"project-complete-new-feature-authority\" ? AdmittedNewFeatureRequest : K extends \"materialize-complete-new-feature\" ? CompleteNewFeatureAuthority : K extends \"execute-newly-materialized-feature\" ? CompleteNewFeatureMaterialization : K extends \"compose-new-feature-execution-comparison\" ? ObservedNewFeatureExecution : NewFeatureExecutionComparison) => Promise<K extends \"admit-reviewed-new-feature-request\" ? NewFeatureRequestAdmission : K extends \"adapt-new-feature-request-admission\" ? AdmittedNewFeatureRequest : K extends \"project-complete-new-feature-authority\" ? CompleteNewFeatureAuthority : K extends \"materialize-complete-new-feature\" ? CompleteNewFeatureMaterialization : K extends \"execute-newly-materialized-feature\" ? ObservedNewFeatureExecution : K extends \"compose-new-feature-execution-comparison\" ? NewFeatureExecutionComparison : NewFeatureTerminalDisposition>"
                  }
                ]
              }
            ],
            "separatedBefore": true
          }
        }
      ]
    }
  },
  "registrations": [
    {
      "responsibilityId": "admits-reviewed-new-feature-request",
      "edgeId": "admit-reviewed-new-feature-request",
      "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/registers-admit-reviewed-new-feature-request.ts",
      "implementationRef": "semantic-execution:admit-reviewed-new-feature-request",
      "bindingStatus": "IMPLEMENTED"
    },
    {
      "responsibilityId": "adapts-new-feature-request-admission",
      "edgeId": "adapt-new-feature-request-admission",
      "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/registers-adapt-new-feature-request-admission.ts",
      "implementationRef": "semantic-execution:adapt-new-feature-request-admission",
      "bindingStatus": "IMPLEMENTED"
    },
    {
      "responsibilityId": "projects-complete-new-feature-authority",
      "edgeId": "project-complete-new-feature-authority",
      "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/registers-project-complete-new-feature-authority.ts",
      "implementationRef": "semantic-execution:project-complete-new-feature-authority",
      "bindingStatus": "IMPLEMENTED"
    },
    {
      "responsibilityId": "materializes-complete-new-feature",
      "edgeId": "materialize-complete-new-feature",
      "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/registers-materialize-complete-new-feature.ts",
      "implementationRef": "semantic-execution:materialize-complete-new-feature",
      "bindingStatus": "IMPLEMENTED"
    },
    {
      "responsibilityId": "executes-newly-materialized-feature",
      "edgeId": "execute-newly-materialized-feature",
      "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/registers-execute-newly-materialized-feature.ts",
      "implementationRef": "semantic-execution:execute-newly-materialized-feature",
      "bindingStatus": "IMPLEMENTED"
    },
    {
      "responsibilityId": "composes-new-feature-execution-comparison",
      "edgeId": "compose-new-feature-execution-comparison",
      "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/registers-compose-new-feature-execution-comparison.ts",
      "implementationRef": "semantic-execution:compose-new-feature-execution-comparison",
      "bindingStatus": "IMPLEMENTED"
    },
    {
      "responsibilityId": "verifies-complete-new-feature-lineage",
      "edgeId": "verify-complete-new-feature-lineage",
      "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/registers-verify-complete-new-feature-lineage.ts",
      "implementationRef": "semantic-execution:verify-complete-new-feature-lineage",
      "bindingStatus": "IMPLEMENTED"
    }
  ],
  "semanticInterpreter": {
    "authorityRef": "semantic-interpreter:canonical-feature-semantic-interpreter.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/interprets-canonical-feature-semantic-authority.ts",
    "bindingStatus": "IMPLEMENTED",
    "dataOwnership": "interpreter-logic-only",
    "authorityInput": "runtime-loaded-semantic-authorities"
  },
  "semanticAuthorityLoader": {
    "contractId": "canonical-feature-semantic-authority-loader.v1",
    "authorityRef": "implementation-artifact:semantic-authority-loader",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/loads-canonical-feature-semantic-authority.ts",
    "sourceArtifactPaths": [
      "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/admit-reviewed-new-feature-request.semantic-authority.json",
      "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/adapt-new-feature-request-admission.semantic-authority.json",
      "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/project-complete-new-feature-authority.semantic-authority.json",
      "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/materialize-complete-new-feature.semantic-authority.json",
      "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/execute-newly-materialized-feature.semantic-authority.json",
      "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/compose-new-feature-execution-comparison.semantic-authority.json",
      "capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/verify-complete-new-feature-lineage.semantic-authority.json"
    ],
    "sourceMediaType": "application/json",
    "repositoryRootInput": "explicit-runtime-argument",
    "decoding": "UTF-8-then-JSON.parse",
    "runtimeValidation": "required-semantic-authority-envelope",
    "governanceValidation": "canonical-feature-conveyor-contract-schema",
    "authorityOwnership": "scenario-owned-json-artifacts",
    "embeddedSemanticAuthority": "forbidden",
    "bindingStatus": "IMPLEMENTED"
  },
  "runtimeAdapter": {
    "contractId": "canonical-feature-runtime-adapter.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/invokes-canonical-feature-conveyor.ts",
    "acceptsContractId": "reviewed-new-feature-request.v1",
    "constructsContextContractId": "end-to-end-canonical-feature-conveyor-context.v1",
    "producesContractId": "new-feature-terminal-disposition.v1",
    "operations": [
      "loads-reviewed-request-context",
      "invokes-conveyor"
    ],
    "bindingStatus": "IMPLEMENTED"
  },
  "authorityProjectorBoundary": {
    "contractId": "complete-new-feature-authority-projector-port.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/complete-new-feature-authority-projector.port.ts",
    "operations": [
      "projects-and-writes-complete-authority"
    ],
    "projectorRequest": {
      "contract": {
        "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
        "schemaVersion": "1.0.0",
        "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
      },
      "projectionId": "project-complete-new-feature-authority-projector-port",
      "targetLanguage": "typescript",
      "artifact": {
        "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/complete-new-feature-authority-projector.port.ts"
      },
      "lineage": {
        "featureId": "end-to-end-canonical-feature-conveyor-fractal",
        "scenarioId": "project-one-complete-new-feature-authority",
        "obligationId": "establish-one-complete-new-feature-authority",
        "responsibilityId": "projects-complete-new-feature-authority",
        "signalId": "complete-new-feature-authority"
      },
      "imports": [
        {
          "kind": "type-only",
          "moduleSpecifier": "../composition/executes-end-to-end-canonical-feature-conveyor.type.js",
          "namedBindings": [
            "AdmittedNewFeatureRequest",
            "CompleteNewFeatureAuthority"
          ]
        }
      ],
      "declarations": [
        {
          "interface": {
            "identity": "complete-new-feature-authority-projector-port",
            "name": "CompleteNewFeatureAuthorityProjectorPort",
            "members": [
              {
                "name": "projectsAndWritesCompleteAuthority",
                "typeReference": "(input: AdmittedNewFeatureRequest) => Promise<CompleteNewFeatureAuthority>"
              }
            ],
            "documentation": [
              "Port declared by complete-new-feature-authority-projector-port.v1.",
              "",
              "Projects and writes authority from one admitted new-feature request."
            ]
          }
        }
      ]
    },
    "bindingStatus": "DECLARED"
  },
  "materializationBoundary": {
    "contractId": "complete-new-feature-materializer-port.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/complete-new-feature-materializer.port.ts",
    "operations": [
      "materializes-and-writes-artifact-manifest"
    ],
    "projectorRequest": {
      "contract": {
        "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
        "schemaVersion": "1.0.0",
        "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
      },
      "projectionId": "project-complete-new-feature-materializer-port",
      "targetLanguage": "typescript",
      "artifact": {
        "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/complete-new-feature-materializer.port.ts"
      },
      "lineage": {
        "featureId": "end-to-end-canonical-feature-conveyor-fractal",
        "scenarioId": "materialize-one-complete-new-feature",
        "obligationId": "materialize-only-admitted-new-feature-authority",
        "responsibilityId": "materializes-complete-new-feature",
        "signalId": "complete-new-feature-materialization"
      },
      "imports": [
        {
          "kind": "type-only",
          "moduleSpecifier": "../composition/executes-end-to-end-canonical-feature-conveyor.type.js",
          "namedBindings": [
            "CompleteNewFeatureAuthority",
            "CompleteNewFeatureMaterialization"
          ]
        }
      ],
      "declarations": [
        {
          "interface": {
            "identity": "complete-new-feature-materializer-port",
            "name": "CompleteNewFeatureMaterializerPort",
            "members": [
              {
                "name": "materializesAndWritesArtifactManifest",
                "typeReference": "(input: CompleteNewFeatureAuthority) => Promise<CompleteNewFeatureMaterialization>"
              }
            ],
            "documentation": [
              "Port declared by complete-new-feature-materializer-port.v1.",
              "",
              "Materializes a complete authority and writes its artifact manifest."
            ]
          }
        }
      ]
    },
    "bindingStatus": "DECLARED"
  },
  "fixtureBoundary": {
    "contractId": "canonical-feature-evaluation-fixture-port.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/canonical-feature-evaluation-fixture.port.ts",
    "operations": [
      "loadsSemanticFixture",
      "loadsProjectedFixture",
      "executes-semantic-and-projected-surfaces"
    ],
    "projectorRequest": {
      "contract": {
        "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
        "schemaVersion": "1.0.0",
        "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
      },
      "projectionId": "project-canonical-feature-evaluation-fixture-port",
      "targetLanguage": "typescript",
      "artifact": {
        "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/canonical-feature-evaluation-fixture.port.ts"
      },
      "lineage": {
        "featureId": "end-to-end-canonical-feature-conveyor-fractal",
        "scenarioId": "execute-one-newly-materialized-feature",
        "obligationId": "execute-new-feature-through-admitted-semantics",
        "responsibilityId": "executes-newly-materialized-feature",
        "signalId": "observed-new-feature-execution"
      },
      "interface": {
        "identity": "canonical-feature-evaluation-fixture-port",
        "name": "CanonicalFeatureEvaluationFixturePort",
        "documentation": [
          "Governed boundary for the evaluation fixture operations declared by canonical-feature-evaluation-fixture-port.v1."
        ],
        "members": [
          {
            "name": "loadsSemanticFixture",
            "typeReference": "(input: unknown) => Promise<unknown>"
          },
          {
            "name": "loadsProjectedFixture",
            "typeReference": "(input: unknown) => Promise<unknown>",
            "separatedBefore": true
          },
          {
            "name": "executesSemanticAndProjectedSurfaces",
            "typeReference": "(input: unknown) => Promise<unknown>",
            "separatedBefore": true
          }
        ]
      }
    },
    "bindingStatus": "DECLARED"
  },
  "evidenceBoundary": {
    "contractId": "governed-artifact-evidence-store.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/governed-artifact-evidence-store.port.ts",
    "operations": [
      "writes",
      "resolves",
      "verifies",
      "writes-execution-comparison-evidence",
      "resolves-and-verifies-comparison-evidence"
    ],
    "canonicalization": "RFC8785-JCS",
    "projectorRequest": {
      "contract": {
        "schemaId": "https://schemas.deterministic.solutions/projection/semantic-invocation-function-request/1.0.0/schema.json",
        "schemaVersion": "1.0.0",
        "schemaDigest": "sha256:923b757154a0b858f9cc418d4d270993aa7e3a68b4acce81aac0f5cfab6b31bd"
      },
      "projectionId": "project-governed-artifact-evidence-store-port",
      "targetLanguage": "typescript",
      "artifact": {
        "relativePath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/governed-artifact-evidence-store.port.ts"
      },
      "lineage": {
        "featureId": "end-to-end-canonical-feature-conveyor-fractal",
        "scenarioId": "compose-one-new-feature-execution-comparison",
        "obligationId": "compose-complete-execution-comparison",
        "responsibilityId": "composes-new-feature-execution-comparison",
        "signalId": "new-feature-execution-comparison"
      },
      "interface": {
        "identity": "governed-artifact-evidence-store-port",
        "name": "GovernedArtifactEvidenceStorePort",
        "documentation": [
          "Governed RFC8785-JCS and SHA-256 evidence boundary declared by governed-artifact-evidence-store.v1 and semantic-execution-evidence.v1."
        ],
        "members": [
          {
            "name": "writes",
            "typeReference": "(input: unknown) => Promise<unknown>"
          },
          {
            "name": "resolves",
            "typeReference": "(input: unknown) => Promise<unknown>",
            "separatedBefore": true
          },
          {
            "name": "verifies",
            "typeReference": "(input: unknown) => Promise<unknown>",
            "separatedBefore": true
          },
          {
            "name": "writesExecutionComparisonEvidence",
            "typeReference": "(input: unknown) => Promise<unknown>",
            "separatedBefore": true
          },
          {
            "name": "resolvesAndVerifiesComparisonEvidence",
            "typeReference": "(input: unknown) => Promise<unknown>",
            "separatedBefore": true
          }
        ]
      }
    },
    "bindingStatus": "DECLARED"
  },
  "executionProof": {
    "contractId": "canonical-feature-conveyor-execution-proof.v1",
    "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/proves-canonical-feature-conveyor.ts",
    "semanticSurface": "runtime-loaded-scenario-semantic-authority-json",
    "projectedSurface": "projected-composition-and-responsibility-bodies",
    "comparison": "RFC8785-JCS-equivalence",
    "expectedDisposition": "PROJECTION_CONFORMS"
  },
  "admissionRequiredStatuses": {
    "edgeRegistry": "IMPLEMENTED",
    "compositionTypes": "MATERIALIZED",
    "registrations": "IMPLEMENTED",
    "semanticInterpreter": "IMPLEMENTED",
    "semanticAuthorityLoader": "IMPLEMENTED",
    "runtimeAdapter": "IMPLEMENTED",
    "authorityProjectorBoundary": "IMPLEMENTED",
    "materializationBoundary": "IMPLEMENTED",
    "fixtureBoundary": "IMPLEMENTED",
    "evidenceBoundary": "IMPLEMENTED"
  },
  "projectionPackage": {
    "packageId": "end-to-end-canonical-feature-conveyor-implementation.v1",
    "targetPolicy": {
      "root": "governed-repository-workspace",
      "repositoryRoot": ".",
      "capabilityRoot": "capabilities/end-to-end-canonical-feature-conveyor-fractal",
      "projectionMode": "working-tree",
      "reviewSurface": "git-diff",
      "authoritySource": "canonical-json-only",
      "markdownScraping": "forbidden",
      "overwrite": "replace-only-if-lineage-matches",
      "pathPolicy": "all-artifacts-descend-from-capability-root",
      "alternateFileTopologies": "forbidden"
    },
    "posturePolicy": [
      "PROJECTABLE",
      "PROJECTOR_MISSING",
      "AUTHORITY_INCOMPLETE",
      "BLOCKED_BY_DEPENDENCY",
      "MATERIALIZED",
      "VERIFIED"
    ],
    "validationPolicy": {
      "projectableArtifacts": "byte-for-byte",
      "unresolvedArtifacts": "presence-is-not-verification",
      "undeclaredArtifacts": "reject-within-governed-roots",
      "typescript": "strict-compile",
      "lineage": "authority-ref-and-source-hash"
    },
    "fileBodyCoordinates": "derive-from-file-body-placement-rules",
    "dependencyPolicy": {
      "localModuleBoundary": "capability-root-only",
      "externalModuleImports": "forbidden",
      "conveyorSpecificToolsOutsideCapability": "forbidden",
      "runtimeAuthorityLoading": "scenario-owned-json-files-only",
      "embeddedSemanticAuthority": "forbidden"
    },
    "supplementalArtifacts": [
      {
        "artifactId": "canonical-feature-edge-registry-type",
        "family": "composition",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/canonical-feature-edge-registry.type.ts",
        "sourceAuthorityRef": "implementation-artifact:edge-registry",
        "projectorCapability": "projects-production-typescript",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "end-to-end-canonical-feature-conveyor-type",
        "family": "composition",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/composition/executes-end-to-end-canonical-feature-conveyor.type.ts",
        "sourceAuthorityRef": "implementation-artifact:composition-types",
        "projectorCapability": "projects-production-typescript",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "canonical-feature-semantic-interpreter",
        "family": "semantic-interpreter",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/interprets-canonical-feature-semantic-authority.ts",
        "sourceAuthorityRef": "semantic-interpreter:canonical-feature-semantic-interpreter.v1",
        "projectorCapability": "projects-semantic-interpreter",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "canonical-feature-semantic-authority-loader",
        "family": "semantic-authority-loader",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/loads-canonical-feature-semantic-authority.ts",
        "sourceAuthorityRef": "implementation-artifact:semantic-authority-loader",
        "projectorCapability": "projects-semantic-authority-loader",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "complete-new-feature-authority-projector-port",
        "family": "runtime-port",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/complete-new-feature-authority-projector.port.ts",
        "sourceAuthorityRef": "implementation-artifact:authority-projector-boundary",
        "projectorCapability": "projects-production-typescript",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "complete-new-feature-materializer-port",
        "family": "runtime-port",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/complete-new-feature-materializer.port.ts",
        "sourceAuthorityRef": "implementation-artifact:materialization-boundary",
        "projectorCapability": "projects-production-typescript",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "canonical-feature-evaluation-fixture-port",
        "family": "evaluation-port",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/canonical-feature-evaluation-fixture.port.ts",
        "sourceAuthorityRef": "implementation-artifact:evaluation-fixture",
        "projectorCapability": "projects-production-typescript",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "governed-artifact-evidence-store-port",
        "family": "evaluation-port",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/governed-artifact-evidence-store.port.ts",
        "sourceAuthorityRef": "implementation-artifact:evidence-store",
        "projectorCapability": "projects-production-typescript",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "canonical-feature-conveyor-execution-proof",
        "family": "evaluation-proof",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/evaluation/proves-canonical-feature-conveyor.ts",
        "sourceAuthorityRef": "implementation-artifact:execution-proof",
        "projectorCapability": "projects-evaluation-proof",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      },
      {
        "artifactId": "canonical-feature-conveyor-self-hosting-runner",
        "family": "self-hosting-runner",
        "artifactPath": "capabilities/end-to-end-canonical-feature-conveyor-fractal/runtime/self-hosts-canonical-feature-conveyor.mjs",
        "sourceAuthorityRef": "self-hosting:canonical-feature-conveyor-self-hosting.v1",
        "projectorCapability": "projects-self-hosting-runner",
        "projectionPosture": "PROJECTABLE",
        "ownership": "projector-owned",
        "existingFilePolicy": "REPLACE_IF_GENERATED_LINEAGE_MATCHES"
      }
    ]
  },
  "workspaceProjectionAuthority": {
    "repositoryRoot": ".",
    "capabilityRoot": "capabilities/end-to-end-canonical-feature-conveyor-fractal",
    "projectionMode": "working-tree",
    "reviewSurface": "git-diff",
    "sourceMaterialization": "direct-to-governed-capability-paths",
    "alternateFileTopologies": "forbidden",
    "dirtyStatePolicy": "PRESERVE_UNRELATED_DIRTY_PATHS",
    "failurePolicy": "LEAVE_AUTHORIZED_PARTIAL_DELTA",
    "compileRoot": ".",
    "executionRoot": ".",
    "evidenceRoot": "machine-local-outside-repository"
  }
}
```

### What this becomes

Projection availability: PROJECTOR_OUTPUT

```text
feature-body:new-feature-request-admission
  → function admitsReviewedNewFeatureRequest
NewFeatureRequestAdmission
  → return type NewFeatureRequestAdmission
admit-reviewed-new-feature-request
  → context.edges.invokes CallExpression

feature-body:admitted-new-feature-request
  → function adaptsNewFeatureRequestAdmission
AdmittedNewFeatureRequest
  → return type AdmittedNewFeatureRequest
adapt-new-feature-request-admission
  → context.edges.invokes CallExpression

feature-body:complete-new-feature-authority
  → function projectsCompleteNewFeatureAuthority
CompleteNewFeatureAuthority
  → return type CompleteNewFeatureAuthority
project-complete-new-feature-authority
  → context.edges.invokes CallExpression

feature-body:complete-new-feature-materialization
  → function materializesCompleteNewFeature
CompleteNewFeatureMaterialization
  → return type CompleteNewFeatureMaterialization
materialize-complete-new-feature
  → context.edges.invokes CallExpression

feature-body:observed-new-feature-execution
  → function executesNewlyMaterializedFeature
ObservedNewFeatureExecution
  → return type ObservedNewFeatureExecution
execute-newly-materialized-feature
  → context.edges.invokes CallExpression

feature-body:new-feature-execution-comparison
  → function composesNewFeatureExecutionComparison
NewFeatureExecutionComparison
  → return type NewFeatureExecutionComparison
compose-new-feature-execution-comparison
  → context.edges.invokes CallExpression

feature-body:complete-new-feature-lineage
  → function verifiesCompleteNewFeatureLineage
NewFeatureTerminalDisposition
  → return type NewFeatureTerminalDisposition
verify-complete-new-feature-lineage
  → context.edges.invokes CallExpression
```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.projectionAuthority | mapping-instance | PROJECTOR_OUTPUT | language-projection-authority |

### Review questions

- Does the selected language profile translate the body without changing its meaning?

## 13. Derived AST

### What is established here

```text
Stage ID: project-expected-ast
Purpose: Project each feature body into the complete expected language AST.
Authorized inputs: feature-body-authority, language-projection-authority
Required prior products: language-projection-authority
Required output: expected-ast
Stop condition: every projected body has one complete expected AST
```

### Canonical authority

```text
new-feature-request-admission
  | feature-body authority
  v
typescript-collapsed-responsibility-body-v1
  | production projector
  v
new-feature-request-admission.projectedAst
  | production source printer
  v
capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts

admitted-new-feature-request
  | feature-body authority
  v
typescript-collapsed-responsibility-body-v1
  | production projector
  v
admitted-new-feature-request.projectedAst
  | production source printer
  v
capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.ts

complete-new-feature-authority
  | feature-body authority
  v
typescript-collapsed-responsibility-body-v1
  | production projector
  v
complete-new-feature-authority.projectedAst
  | production source printer
  v
capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.ts

complete-new-feature-materialization
  | feature-body authority
  v
typescript-collapsed-responsibility-body-v1
  | production projector
  v
complete-new-feature-materialization.projectedAst
  | production source printer
  v
capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.ts

observed-new-feature-execution
  | feature-body authority
  v
typescript-collapsed-responsibility-body-v1
  | production projector
  v
observed-new-feature-execution.projectedAst
  | production source printer
  v
capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.ts

new-feature-execution-comparison
  | feature-body authority
  v
typescript-collapsed-responsibility-body-v1
  | production projector
  v
new-feature-execution-comparison.projectedAst
  | production source printer
  v
capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.ts

complete-new-feature-lineage
  | feature-body authority
  v
typescript-collapsed-responsibility-body-v1
  | production projector
  v
complete-new-feature-lineage.projectedAst
  | production source printer
  v
capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.ts
```

### new-feature-request-admission

```json
{
  "kind": "source-file",
  "leadingComments": [
    {
      "kind": "line-comment",
      "text": " @generated"
    },
    {
      "kind": "line-comment",
      "text": " feature-id: end-to-end-canonical-feature-conveyor-fractal"
    },
    {
      "kind": "line-comment",
      "text": " scenario-id: admit-one-reviewed-new-feature-request"
    },
    {
      "kind": "line-comment",
      "text": " obligation-id: establish-one-eligible-new-feature-request"
    },
    {
      "kind": "line-comment",
      "text": " responsibility-id: admits-reviewed-new-feature-request"
    },
    {
      "kind": "line-comment",
      "text": " signal-id: new-feature-request-admission"
    },
    {
      "kind": "line-comment",
      "text": " DO NOT EDIT."
    }
  ],
  "imports": [
    {
      "kind": "type-only-import",
      "moduleSpecifier": "./new-feature-request-admission.type.js",
      "namedBindings": [
        "AdmitReviewedNewFeatureRequestContext",
        "NewFeatureRequestAdmission"
      ]
    }
  ],
  "statements": [
    {
      "kind": "function-declaration",
      "identity": "new-feature-request-admission",
      "modifiers": [
        "export",
        "async"
      ],
      "name": "admitsReviewedNewFeatureRequest",
      "parameters": [
        {
          "kind": "parameter",
          "name": "context",
          "typeReference": "AdmitReviewedNewFeatureRequestContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "promise",
        "typeReference": "NewFeatureRequestAdmission"
      },
      "body": {
        "kind": "block",
        "statements": [
          {
            "kind": "return-statement",
            "expression": {
              "kind": "await-expression",
              "expression": {
                "kind": "semantic-edge-invocation",
                "receiverPath": [
                  "context",
                  "edges"
                ],
                "operation": "invokes",
                "edgeId": "admit-reviewed-new-feature-request",
                "arguments": [
                  {
                    "kind": "identifier-reference",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

#### Compact source preview

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: admit-one-reviewed-new-feature-request
// obligation-id: establish-one-eligible-new-feature-request
// responsibility-id: admits-reviewed-new-feature-request
// signal-id: new-feature-request-admission
// DO NOT EDIT.
import type { AdmitReviewedNewFeatureRequestContext, NewFeatureRequestAdmission } from "./new-feature-request-admission.type.js";

export async function admitsReviewedNewFeatureRequest(
  context: AdmitReviewedNewFeatureRequestContext
): Promise<NewFeatureRequestAdmission> {
  return await context.edges.invokes(
    "admit-reviewed-new-feature-request",
    context
  );
}

```

### admitted-new-feature-request

```json
{
  "kind": "source-file",
  "leadingComments": [
    {
      "kind": "line-comment",
      "text": " @generated"
    },
    {
      "kind": "line-comment",
      "text": " feature-id: end-to-end-canonical-feature-conveyor-fractal"
    },
    {
      "kind": "line-comment",
      "text": " scenario-id: adapt-one-new-feature-request-admission"
    },
    {
      "kind": "line-comment",
      "text": " obligation-id: bridge-admission-to-admitted-request-contract"
    },
    {
      "kind": "line-comment",
      "text": " responsibility-id: adapts-new-feature-request-admission"
    },
    {
      "kind": "line-comment",
      "text": " signal-id: admitted-new-feature-request"
    },
    {
      "kind": "line-comment",
      "text": " DO NOT EDIT."
    }
  ],
  "imports": [
    {
      "kind": "type-only-import",
      "moduleSpecifier": "./admitted-new-feature-request.type.js",
      "namedBindings": [
        "AdaptNewFeatureRequestAdmissionContext",
        "AdmittedNewFeatureRequest"
      ]
    }
  ],
  "statements": [
    {
      "kind": "function-declaration",
      "identity": "admitted-new-feature-request",
      "modifiers": [
        "export",
        "async"
      ],
      "name": "adaptsNewFeatureRequestAdmission",
      "parameters": [
        {
          "kind": "parameter",
          "name": "context",
          "typeReference": "AdaptNewFeatureRequestAdmissionContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "promise",
        "typeReference": "AdmittedNewFeatureRequest"
      },
      "body": {
        "kind": "block",
        "statements": [
          {
            "kind": "return-statement",
            "expression": {
              "kind": "await-expression",
              "expression": {
                "kind": "semantic-edge-invocation",
                "receiverPath": [
                  "context",
                  "edges"
                ],
                "operation": "invokes",
                "edgeId": "adapt-new-feature-request-admission",
                "arguments": [
                  {
                    "kind": "identifier-reference",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

#### Compact source preview

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: adapt-one-new-feature-request-admission
// obligation-id: bridge-admission-to-admitted-request-contract
// responsibility-id: adapts-new-feature-request-admission
// signal-id: admitted-new-feature-request
// DO NOT EDIT.
import type { AdaptNewFeatureRequestAdmissionContext, AdmittedNewFeatureRequest } from "./admitted-new-feature-request.type.js";

export async function adaptsNewFeatureRequestAdmission(
  context: AdaptNewFeatureRequestAdmissionContext
): Promise<AdmittedNewFeatureRequest> {
  return await context.edges.invokes(
    "adapt-new-feature-request-admission",
    context
  );
}

```

### complete-new-feature-authority

```json
{
  "kind": "source-file",
  "leadingComments": [
    {
      "kind": "line-comment",
      "text": " @generated"
    },
    {
      "kind": "line-comment",
      "text": " feature-id: end-to-end-canonical-feature-conveyor-fractal"
    },
    {
      "kind": "line-comment",
      "text": " scenario-id: project-one-complete-new-feature-authority"
    },
    {
      "kind": "line-comment",
      "text": " obligation-id: establish-one-complete-new-feature-authority"
    },
    {
      "kind": "line-comment",
      "text": " responsibility-id: projects-complete-new-feature-authority"
    },
    {
      "kind": "line-comment",
      "text": " signal-id: complete-new-feature-authority"
    },
    {
      "kind": "line-comment",
      "text": " DO NOT EDIT."
    }
  ],
  "imports": [
    {
      "kind": "type-only-import",
      "moduleSpecifier": "./complete-new-feature-authority.type.js",
      "namedBindings": [
        "ProjectCompleteNewFeatureAuthorityContext",
        "CompleteNewFeatureAuthority"
      ]
    }
  ],
  "statements": [
    {
      "kind": "function-declaration",
      "identity": "complete-new-feature-authority",
      "modifiers": [
        "export",
        "async"
      ],
      "name": "projectsCompleteNewFeatureAuthority",
      "parameters": [
        {
          "kind": "parameter",
          "name": "context",
          "typeReference": "ProjectCompleteNewFeatureAuthorityContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "promise",
        "typeReference": "CompleteNewFeatureAuthority"
      },
      "body": {
        "kind": "block",
        "statements": [
          {
            "kind": "return-statement",
            "expression": {
              "kind": "await-expression",
              "expression": {
                "kind": "semantic-edge-invocation",
                "receiverPath": [
                  "context",
                  "edges"
                ],
                "operation": "invokes",
                "edgeId": "project-complete-new-feature-authority",
                "arguments": [
                  {
                    "kind": "identifier-reference",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

#### Compact source preview

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: project-one-complete-new-feature-authority
// obligation-id: establish-one-complete-new-feature-authority
// responsibility-id: projects-complete-new-feature-authority
// signal-id: complete-new-feature-authority
// DO NOT EDIT.
import type { ProjectCompleteNewFeatureAuthorityContext, CompleteNewFeatureAuthority } from "./complete-new-feature-authority.type.js";

export async function projectsCompleteNewFeatureAuthority(
  context: ProjectCompleteNewFeatureAuthorityContext
): Promise<CompleteNewFeatureAuthority> {
  return await context.edges.invokes(
    "project-complete-new-feature-authority",
    context
  );
}

```

### complete-new-feature-materialization

```json
{
  "kind": "source-file",
  "leadingComments": [
    {
      "kind": "line-comment",
      "text": " @generated"
    },
    {
      "kind": "line-comment",
      "text": " feature-id: end-to-end-canonical-feature-conveyor-fractal"
    },
    {
      "kind": "line-comment",
      "text": " scenario-id: materialize-one-complete-new-feature"
    },
    {
      "kind": "line-comment",
      "text": " obligation-id: materialize-only-admitted-new-feature-authority"
    },
    {
      "kind": "line-comment",
      "text": " responsibility-id: materializes-complete-new-feature"
    },
    {
      "kind": "line-comment",
      "text": " signal-id: complete-new-feature-materialization"
    },
    {
      "kind": "line-comment",
      "text": " DO NOT EDIT."
    }
  ],
  "imports": [
    {
      "kind": "type-only-import",
      "moduleSpecifier": "./complete-new-feature-materialization.type.js",
      "namedBindings": [
        "MaterializeCompleteNewFeatureContext",
        "CompleteNewFeatureMaterialization"
      ]
    }
  ],
  "statements": [
    {
      "kind": "function-declaration",
      "identity": "complete-new-feature-materialization",
      "modifiers": [
        "export",
        "async"
      ],
      "name": "materializesCompleteNewFeature",
      "parameters": [
        {
          "kind": "parameter",
          "name": "context",
          "typeReference": "MaterializeCompleteNewFeatureContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "promise",
        "typeReference": "CompleteNewFeatureMaterialization"
      },
      "body": {
        "kind": "block",
        "statements": [
          {
            "kind": "return-statement",
            "expression": {
              "kind": "await-expression",
              "expression": {
                "kind": "semantic-edge-invocation",
                "receiverPath": [
                  "context",
                  "edges"
                ],
                "operation": "invokes",
                "edgeId": "materialize-complete-new-feature",
                "arguments": [
                  {
                    "kind": "identifier-reference",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

#### Compact source preview

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: materialize-one-complete-new-feature
// obligation-id: materialize-only-admitted-new-feature-authority
// responsibility-id: materializes-complete-new-feature
// signal-id: complete-new-feature-materialization
// DO NOT EDIT.
import type { MaterializeCompleteNewFeatureContext, CompleteNewFeatureMaterialization } from "./complete-new-feature-materialization.type.js";

export async function materializesCompleteNewFeature(
  context: MaterializeCompleteNewFeatureContext
): Promise<CompleteNewFeatureMaterialization> {
  return await context.edges.invokes(
    "materialize-complete-new-feature",
    context
  );
}

```

### observed-new-feature-execution

```json
{
  "kind": "source-file",
  "leadingComments": [
    {
      "kind": "line-comment",
      "text": " @generated"
    },
    {
      "kind": "line-comment",
      "text": " feature-id: end-to-end-canonical-feature-conveyor-fractal"
    },
    {
      "kind": "line-comment",
      "text": " scenario-id: execute-one-newly-materialized-feature"
    },
    {
      "kind": "line-comment",
      "text": " obligation-id: execute-new-feature-through-admitted-semantics"
    },
    {
      "kind": "line-comment",
      "text": " responsibility-id: executes-newly-materialized-feature"
    },
    {
      "kind": "line-comment",
      "text": " signal-id: observed-new-feature-execution"
    },
    {
      "kind": "line-comment",
      "text": " DO NOT EDIT."
    }
  ],
  "imports": [
    {
      "kind": "type-only-import",
      "moduleSpecifier": "./observed-new-feature-execution.type.js",
      "namedBindings": [
        "ExecuteNewlyMaterializedFeatureContext",
        "ObservedNewFeatureExecution"
      ]
    }
  ],
  "statements": [
    {
      "kind": "function-declaration",
      "identity": "observed-new-feature-execution",
      "modifiers": [
        "export",
        "async"
      ],
      "name": "executesNewlyMaterializedFeature",
      "parameters": [
        {
          "kind": "parameter",
          "name": "context",
          "typeReference": "ExecuteNewlyMaterializedFeatureContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "promise",
        "typeReference": "ObservedNewFeatureExecution"
      },
      "body": {
        "kind": "block",
        "statements": [
          {
            "kind": "return-statement",
            "expression": {
              "kind": "await-expression",
              "expression": {
                "kind": "semantic-edge-invocation",
                "receiverPath": [
                  "context",
                  "edges"
                ],
                "operation": "invokes",
                "edgeId": "execute-newly-materialized-feature",
                "arguments": [
                  {
                    "kind": "identifier-reference",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

#### Compact source preview

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: execute-one-newly-materialized-feature
// obligation-id: execute-new-feature-through-admitted-semantics
// responsibility-id: executes-newly-materialized-feature
// signal-id: observed-new-feature-execution
// DO NOT EDIT.
import type { ExecuteNewlyMaterializedFeatureContext, ObservedNewFeatureExecution } from "./observed-new-feature-execution.type.js";

export async function executesNewlyMaterializedFeature(
  context: ExecuteNewlyMaterializedFeatureContext
): Promise<ObservedNewFeatureExecution> {
  return await context.edges.invokes(
    "execute-newly-materialized-feature",
    context
  );
}

```

### new-feature-execution-comparison

```json
{
  "kind": "source-file",
  "leadingComments": [
    {
      "kind": "line-comment",
      "text": " @generated"
    },
    {
      "kind": "line-comment",
      "text": " feature-id: end-to-end-canonical-feature-conveyor-fractal"
    },
    {
      "kind": "line-comment",
      "text": " scenario-id: compose-one-new-feature-execution-comparison"
    },
    {
      "kind": "line-comment",
      "text": " obligation-id: compose-complete-execution-comparison"
    },
    {
      "kind": "line-comment",
      "text": " responsibility-id: composes-new-feature-execution-comparison"
    },
    {
      "kind": "line-comment",
      "text": " signal-id: new-feature-execution-comparison"
    },
    {
      "kind": "line-comment",
      "text": " DO NOT EDIT."
    }
  ],
  "imports": [
    {
      "kind": "type-only-import",
      "moduleSpecifier": "./new-feature-execution-comparison.type.js",
      "namedBindings": [
        "ComposeNewFeatureExecutionComparisonContext",
        "NewFeatureExecutionComparison"
      ]
    }
  ],
  "statements": [
    {
      "kind": "function-declaration",
      "identity": "new-feature-execution-comparison",
      "modifiers": [
        "export",
        "async"
      ],
      "name": "composesNewFeatureExecutionComparison",
      "parameters": [
        {
          "kind": "parameter",
          "name": "context",
          "typeReference": "ComposeNewFeatureExecutionComparisonContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "promise",
        "typeReference": "NewFeatureExecutionComparison"
      },
      "body": {
        "kind": "block",
        "statements": [
          {
            "kind": "return-statement",
            "expression": {
              "kind": "await-expression",
              "expression": {
                "kind": "semantic-edge-invocation",
                "receiverPath": [
                  "context",
                  "edges"
                ],
                "operation": "invokes",
                "edgeId": "compose-new-feature-execution-comparison",
                "arguments": [
                  {
                    "kind": "identifier-reference",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

#### Compact source preview

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: compose-one-new-feature-execution-comparison
// obligation-id: compose-complete-execution-comparison
// responsibility-id: composes-new-feature-execution-comparison
// signal-id: new-feature-execution-comparison
// DO NOT EDIT.
import type { ComposeNewFeatureExecutionComparisonContext, NewFeatureExecutionComparison } from "./new-feature-execution-comparison.type.js";

export async function composesNewFeatureExecutionComparison(
  context: ComposeNewFeatureExecutionComparisonContext
): Promise<NewFeatureExecutionComparison> {
  return await context.edges.invokes(
    "compose-new-feature-execution-comparison",
    context
  );
}

```

### complete-new-feature-lineage

```json
{
  "kind": "source-file",
  "leadingComments": [
    {
      "kind": "line-comment",
      "text": " @generated"
    },
    {
      "kind": "line-comment",
      "text": " feature-id: end-to-end-canonical-feature-conveyor-fractal"
    },
    {
      "kind": "line-comment",
      "text": " scenario-id: verify-one-complete-new-feature-lineage"
    },
    {
      "kind": "line-comment",
      "text": " obligation-id: prove-complete-new-feature-equivalence"
    },
    {
      "kind": "line-comment",
      "text": " responsibility-id: verifies-complete-new-feature-lineage"
    },
    {
      "kind": "line-comment",
      "text": " signal-id: complete-new-feature-equivalence"
    },
    {
      "kind": "line-comment",
      "text": " DO NOT EDIT."
    }
  ],
  "imports": [
    {
      "kind": "type-only-import",
      "moduleSpecifier": "./complete-new-feature-lineage.type.js",
      "namedBindings": [
        "VerifyCompleteNewFeatureLineageContext",
        "NewFeatureTerminalDisposition"
      ]
    }
  ],
  "statements": [
    {
      "kind": "function-declaration",
      "identity": "complete-new-feature-lineage",
      "modifiers": [
        "export",
        "async"
      ],
      "name": "verifiesCompleteNewFeatureLineage",
      "parameters": [
        {
          "kind": "parameter",
          "name": "context",
          "typeReference": "VerifyCompleteNewFeatureLineageContext",
          "immutable": true
        }
      ],
      "returnType": {
        "kind": "promise",
        "typeReference": "NewFeatureTerminalDisposition"
      },
      "body": {
        "kind": "block",
        "statements": [
          {
            "kind": "return-statement",
            "expression": {
              "kind": "await-expression",
              "expression": {
                "kind": "semantic-edge-invocation",
                "receiverPath": [
                  "context",
                  "edges"
                ],
                "operation": "invokes",
                "edgeId": "verify-complete-new-feature-lineage",
                "arguments": [
                  {
                    "kind": "identifier-reference",
                    "name": "context"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

#### Compact source preview

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: verify-one-complete-new-feature-lineage
// obligation-id: prove-complete-new-feature-equivalence
// responsibility-id: verifies-complete-new-feature-lineage
// signal-id: complete-new-feature-equivalence
// DO NOT EDIT.
import type { VerifyCompleteNewFeatureLineageContext, NewFeatureTerminalDisposition } from "./complete-new-feature-lineage.type.js";

export async function verifiesCompleteNewFeatureLineage(
  context: VerifyCompleteNewFeatureLineageContext
): Promise<NewFeatureTerminalDisposition> {
  return await context.edges.invokes(
    "verify-complete-new-feature-lineage",
    context
  );
}

```

### What this becomes

Projection availability: PROJECTOR_OUTPUT

#### new-feature-request-admission

AST root: `source-file`

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: admit-one-reviewed-new-feature-request
// obligation-id: establish-one-eligible-new-feature-request
// responsibility-id: admits-reviewed-new-feature-request
// signal-id: new-feature-request-admission
// DO NOT EDIT.
import type { AdmitReviewedNewFeatureRequestContext, NewFeatureRequestAdmission } from "./new-feature-request-admission.type.js";

export async function admitsReviewedNewFeatureRequest(
  context: AdmitReviewedNewFeatureRequestContext
): Promise<NewFeatureRequestAdmission> {
  return await context.edges.invokes(
    "admit-reviewed-new-feature-request",
    context
  );
}

```

#### admitted-new-feature-request

AST root: `source-file`

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: adapt-one-new-feature-request-admission
// obligation-id: bridge-admission-to-admitted-request-contract
// responsibility-id: adapts-new-feature-request-admission
// signal-id: admitted-new-feature-request
// DO NOT EDIT.
import type { AdaptNewFeatureRequestAdmissionContext, AdmittedNewFeatureRequest } from "./admitted-new-feature-request.type.js";

export async function adaptsNewFeatureRequestAdmission(
  context: AdaptNewFeatureRequestAdmissionContext
): Promise<AdmittedNewFeatureRequest> {
  return await context.edges.invokes(
    "adapt-new-feature-request-admission",
    context
  );
}

```

#### complete-new-feature-authority

AST root: `source-file`

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: project-one-complete-new-feature-authority
// obligation-id: establish-one-complete-new-feature-authority
// responsibility-id: projects-complete-new-feature-authority
// signal-id: complete-new-feature-authority
// DO NOT EDIT.
import type { ProjectCompleteNewFeatureAuthorityContext, CompleteNewFeatureAuthority } from "./complete-new-feature-authority.type.js";

export async function projectsCompleteNewFeatureAuthority(
  context: ProjectCompleteNewFeatureAuthorityContext
): Promise<CompleteNewFeatureAuthority> {
  return await context.edges.invokes(
    "project-complete-new-feature-authority",
    context
  );
}

```

#### complete-new-feature-materialization

AST root: `source-file`

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: materialize-one-complete-new-feature
// obligation-id: materialize-only-admitted-new-feature-authority
// responsibility-id: materializes-complete-new-feature
// signal-id: complete-new-feature-materialization
// DO NOT EDIT.
import type { MaterializeCompleteNewFeatureContext, CompleteNewFeatureMaterialization } from "./complete-new-feature-materialization.type.js";

export async function materializesCompleteNewFeature(
  context: MaterializeCompleteNewFeatureContext
): Promise<CompleteNewFeatureMaterialization> {
  return await context.edges.invokes(
    "materialize-complete-new-feature",
    context
  );
}

```

#### observed-new-feature-execution

AST root: `source-file`

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: execute-one-newly-materialized-feature
// obligation-id: execute-new-feature-through-admitted-semantics
// responsibility-id: executes-newly-materialized-feature
// signal-id: observed-new-feature-execution
// DO NOT EDIT.
import type { ExecuteNewlyMaterializedFeatureContext, ObservedNewFeatureExecution } from "./observed-new-feature-execution.type.js";

export async function executesNewlyMaterializedFeature(
  context: ExecuteNewlyMaterializedFeatureContext
): Promise<ObservedNewFeatureExecution> {
  return await context.edges.invokes(
    "execute-newly-materialized-feature",
    context
  );
}

```

#### new-feature-execution-comparison

AST root: `source-file`

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: compose-one-new-feature-execution-comparison
// obligation-id: compose-complete-execution-comparison
// responsibility-id: composes-new-feature-execution-comparison
// signal-id: new-feature-execution-comparison
// DO NOT EDIT.
import type { ComposeNewFeatureExecutionComparisonContext, NewFeatureExecutionComparison } from "./new-feature-execution-comparison.type.js";

export async function composesNewFeatureExecutionComparison(
  context: ComposeNewFeatureExecutionComparisonContext
): Promise<NewFeatureExecutionComparison> {
  return await context.edges.invokes(
    "compose-new-feature-execution-comparison",
    context
  );
}

```

#### complete-new-feature-lineage

AST root: `source-file`

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: verify-one-complete-new-feature-lineage
// obligation-id: prove-complete-new-feature-equivalence
// responsibility-id: verifies-complete-new-feature-lineage
// signal-id: complete-new-feature-equivalence
// DO NOT EDIT.
import type { VerifyCompleteNewFeatureLineageContext, NewFeatureTerminalDisposition } from "./complete-new-feature-lineage.type.js";

export async function verifiesCompleteNewFeatureLineage(
  context: VerifyCompleteNewFeatureLineageContext
): Promise<NewFeatureTerminalDisposition> {
  return await context.edges.invokes(
    "verify-complete-new-feature-lineage",
    context
  );
}

```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.derivedProjections.results | ast-with-source | PROJECTOR_OUTPUT | expected-ast |

### Review questions

- Can every AST node be traced to feature-body authority?

## 14. Production-projector code

### What is established here

```text
Stage ID: project-expected-code
Purpose: Render expected source code exclusively from the admitted AST.
Authorized inputs: expected-ast
Required prior products: expected-ast
Required output: expected-code
Stop condition: every expected AST renders one deterministic source body
```

### Canonical authority

### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: admit-one-reviewed-new-feature-request
// obligation-id: establish-one-eligible-new-feature-request
// responsibility-id: admits-reviewed-new-feature-request
// signal-id: new-feature-request-admission
// DO NOT EDIT.
import type { AdmitReviewedNewFeatureRequestContext, NewFeatureRequestAdmission } from "./new-feature-request-admission.type.js";

export async function admitsReviewedNewFeatureRequest(
  context: AdmitReviewedNewFeatureRequestContext
): Promise<NewFeatureRequestAdmission> {
  return await context.edges.invokes(
    "admit-reviewed-new-feature-request",
    context
  );
}

```

### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/new-feature-request-admission.type.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: admit-one-reviewed-new-feature-request
// obligation-id: establish-one-eligible-new-feature-request
// responsibility-id: admits-reviewed-new-feature-request
// signal-id: new-feature-request-admission
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface AdmitReviewedNewFeatureRequestContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: AdmitReviewedNewFeatureRequestContext) => Promise<NewFeatureRequestAdmission>;
  };
}

export interface NewFeatureRequestAdmission {
  readonly disposition:
    | "ADMITTED"
    | "REJECTED";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

Translation provenance:

| Source authority | Projection rule | AST path | Source range |
| --- | --- | --- | --- |
| responsibility:admits-reviewed-new-feature-request | body-to-exported-async-function | $.statements[0] | 10-10 |
| feature-body:new-feature-request-admission:context | context-to-parameter | $.statements[0].parameters[0] | 11-11 |
| feature-body:new-feature-request-admission:operations[0] | semantic-edge-to-call | $.statements[0].body.statements[0].expression.expression | 13-16 |
| feature-body:new-feature-request-admission:operations[0].edgeId | edge-id-to-string-literal | $.statements[0].body.statements[0].expression.expression.edgeId | 14-14 |
| feature-body:new-feature-request-admission:operations[0].input | context-input-to-identifier | $.statements[0].body.statements[0].expression.expression.arguments[0] | 15-15 |

### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: adapt-one-new-feature-request-admission
// obligation-id: bridge-admission-to-admitted-request-contract
// responsibility-id: adapts-new-feature-request-admission
// signal-id: admitted-new-feature-request
// DO NOT EDIT.
import type { AdaptNewFeatureRequestAdmissionContext, AdmittedNewFeatureRequest } from "./admitted-new-feature-request.type.js";

export async function adaptsNewFeatureRequestAdmission(
  context: AdaptNewFeatureRequestAdmissionContext
): Promise<AdmittedNewFeatureRequest> {
  return await context.edges.invokes(
    "adapt-new-feature-request-admission",
    context
  );
}

```

### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/admitted-new-feature-request.type.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: adapt-one-new-feature-request-admission
// obligation-id: bridge-admission-to-admitted-request-contract
// responsibility-id: adapts-new-feature-request-admission
// signal-id: admitted-new-feature-request
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface AdaptNewFeatureRequestAdmissionContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: AdaptNewFeatureRequestAdmissionContext) => Promise<AdmittedNewFeatureRequest>;
  };
}

export interface AdmittedNewFeatureRequest {
  readonly disposition: "ADMITTED";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

Translation provenance:

| Source authority | Projection rule | AST path | Source range |
| --- | --- | --- | --- |
| responsibility:adapts-new-feature-request-admission | body-to-exported-async-function | $.statements[0] | 10-10 |
| feature-body:admitted-new-feature-request:context | context-to-parameter | $.statements[0].parameters[0] | 11-11 |
| feature-body:admitted-new-feature-request:operations[0] | semantic-edge-to-call | $.statements[0].body.statements[0].expression.expression | 13-16 |
| feature-body:admitted-new-feature-request:operations[0].edgeId | edge-id-to-string-literal | $.statements[0].body.statements[0].expression.expression.edgeId | 14-14 |
| feature-body:admitted-new-feature-request:operations[0].input | context-input-to-identifier | $.statements[0].body.statements[0].expression.expression.arguments[0] | 15-15 |

### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: project-one-complete-new-feature-authority
// obligation-id: establish-one-complete-new-feature-authority
// responsibility-id: projects-complete-new-feature-authority
// signal-id: complete-new-feature-authority
// DO NOT EDIT.
import type { ProjectCompleteNewFeatureAuthorityContext, CompleteNewFeatureAuthority } from "./complete-new-feature-authority.type.js";

export async function projectsCompleteNewFeatureAuthority(
  context: ProjectCompleteNewFeatureAuthorityContext
): Promise<CompleteNewFeatureAuthority> {
  return await context.edges.invokes(
    "project-complete-new-feature-authority",
    context
  );
}

```

### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/complete-new-feature-authority.type.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: project-one-complete-new-feature-authority
// obligation-id: establish-one-complete-new-feature-authority
// responsibility-id: projects-complete-new-feature-authority
// signal-id: complete-new-feature-authority
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface ProjectCompleteNewFeatureAuthorityContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: ProjectCompleteNewFeatureAuthorityContext) => Promise<CompleteNewFeatureAuthority>;
  };
}

export interface CompleteNewFeatureAuthority {
  readonly disposition: "COMPLETE";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly authorityRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

Translation provenance:

| Source authority | Projection rule | AST path | Source range |
| --- | --- | --- | --- |
| responsibility:projects-complete-new-feature-authority | body-to-exported-async-function | $.statements[0] | 10-10 |
| feature-body:complete-new-feature-authority:context | context-to-parameter | $.statements[0].parameters[0] | 11-11 |
| feature-body:complete-new-feature-authority:operations[0] | semantic-edge-to-call | $.statements[0].body.statements[0].expression.expression | 13-16 |
| feature-body:complete-new-feature-authority:operations[0].edgeId | edge-id-to-string-literal | $.statements[0].body.statements[0].expression.expression.edgeId | 14-14 |
| feature-body:complete-new-feature-authority:operations[0].input | context-input-to-identifier | $.statements[0].body.statements[0].expression.expression.arguments[0] | 15-15 |

### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: materialize-one-complete-new-feature
// obligation-id: materialize-only-admitted-new-feature-authority
// responsibility-id: materializes-complete-new-feature
// signal-id: complete-new-feature-materialization
// DO NOT EDIT.
import type { MaterializeCompleteNewFeatureContext, CompleteNewFeatureMaterialization } from "./complete-new-feature-materialization.type.js";

export async function materializesCompleteNewFeature(
  context: MaterializeCompleteNewFeatureContext
): Promise<CompleteNewFeatureMaterialization> {
  return await context.edges.invokes(
    "materialize-complete-new-feature",
    context
  );
}

```

### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/complete-new-feature-materialization.type.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: materialize-one-complete-new-feature
// obligation-id: materialize-only-admitted-new-feature-authority
// responsibility-id: materializes-complete-new-feature
// signal-id: complete-new-feature-materialization
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface MaterializeCompleteNewFeatureContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: MaterializeCompleteNewFeatureContext) => Promise<CompleteNewFeatureMaterialization>;
  };
}

export interface CompleteNewFeatureMaterialization {
  readonly disposition: "MATERIALIZED";
  readonly featureId: string;
  readonly authorityRef: GovernedArtifactRef;
  readonly artifactManifestRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

Translation provenance:

| Source authority | Projection rule | AST path | Source range |
| --- | --- | --- | --- |
| responsibility:materializes-complete-new-feature | body-to-exported-async-function | $.statements[0] | 10-10 |
| feature-body:complete-new-feature-materialization:context | context-to-parameter | $.statements[0].parameters[0] | 11-11 |
| feature-body:complete-new-feature-materialization:operations[0] | semantic-edge-to-call | $.statements[0].body.statements[0].expression.expression | 13-16 |
| feature-body:complete-new-feature-materialization:operations[0].edgeId | edge-id-to-string-literal | $.statements[0].body.statements[0].expression.expression.edgeId | 14-14 |
| feature-body:complete-new-feature-materialization:operations[0].input | context-input-to-identifier | $.statements[0].body.statements[0].expression.expression.arguments[0] | 15-15 |

### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: execute-one-newly-materialized-feature
// obligation-id: execute-new-feature-through-admitted-semantics
// responsibility-id: executes-newly-materialized-feature
// signal-id: observed-new-feature-execution
// DO NOT EDIT.
import type { ExecuteNewlyMaterializedFeatureContext, ObservedNewFeatureExecution } from "./observed-new-feature-execution.type.js";

export async function executesNewlyMaterializedFeature(
  context: ExecuteNewlyMaterializedFeatureContext
): Promise<ObservedNewFeatureExecution> {
  return await context.edges.invokes(
    "execute-newly-materialized-feature",
    context
  );
}

```

### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/observed-new-feature-execution.type.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: execute-one-newly-materialized-feature
// obligation-id: execute-new-feature-through-admitted-semantics
// responsibility-id: executes-newly-materialized-feature
// signal-id: observed-new-feature-execution
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface ExecuteNewlyMaterializedFeatureContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: ExecuteNewlyMaterializedFeatureContext) => Promise<ObservedNewFeatureExecution>;
  };
}

export interface ObservedNewFeatureExecution {
  readonly disposition:
    | "CONFORMS"
    | "DIVERGES";
  readonly featureId: string;
  readonly artifactManifestRef: GovernedArtifactRef;
  readonly semanticObservationRef: GovernedArtifactRef;
  readonly projectedObservationRef: GovernedArtifactRef;
  readonly expectedSignalRef: GovernedArtifactRef;
  readonly astSourceCorrespondenceRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

Translation provenance:

| Source authority | Projection rule | AST path | Source range |
| --- | --- | --- | --- |
| responsibility:executes-newly-materialized-feature | body-to-exported-async-function | $.statements[0] | 10-10 |
| feature-body:observed-new-feature-execution:context | context-to-parameter | $.statements[0].parameters[0] | 11-11 |
| feature-body:observed-new-feature-execution:operations[0] | semantic-edge-to-call | $.statements[0].body.statements[0].expression.expression | 13-16 |
| feature-body:observed-new-feature-execution:operations[0].edgeId | edge-id-to-string-literal | $.statements[0].body.statements[0].expression.expression.edgeId | 14-14 |
| feature-body:observed-new-feature-execution:operations[0].input | context-input-to-identifier | $.statements[0].body.statements[0].expression.expression.arguments[0] | 15-15 |

### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: compose-one-new-feature-execution-comparison
// obligation-id: compose-complete-execution-comparison
// responsibility-id: composes-new-feature-execution-comparison
// signal-id: new-feature-execution-comparison
// DO NOT EDIT.
import type { ComposeNewFeatureExecutionComparisonContext, NewFeatureExecutionComparison } from "./new-feature-execution-comparison.type.js";

export async function composesNewFeatureExecutionComparison(
  context: ComposeNewFeatureExecutionComparisonContext
): Promise<NewFeatureExecutionComparison> {
  return await context.edges.invokes(
    "compose-new-feature-execution-comparison",
    context
  );
}

```

### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/new-feature-execution-comparison.type.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: compose-one-new-feature-execution-comparison
// obligation-id: compose-complete-execution-comparison
// responsibility-id: composes-new-feature-execution-comparison
// signal-id: new-feature-execution-comparison
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface ComposeNewFeatureExecutionComparisonContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: ComposeNewFeatureExecutionComparisonContext) => Promise<NewFeatureExecutionComparison>;
  };
}

export interface NewFeatureExecutionComparison {
  readonly disposition: "COMPLETE";
  readonly featureId: string;
  readonly semanticObservationRef: GovernedArtifactRef;
  readonly projectedObservationRef: GovernedArtifactRef;
  readonly expectedSignalRef: GovernedArtifactRef;
  readonly astSourceCorrespondenceRef: GovernedArtifactRef;
  readonly comparisonEvidenceRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

Translation provenance:

| Source authority | Projection rule | AST path | Source range |
| --- | --- | --- | --- |
| responsibility:composes-new-feature-execution-comparison | body-to-exported-async-function | $.statements[0] | 10-10 |
| feature-body:new-feature-execution-comparison:context | context-to-parameter | $.statements[0].parameters[0] | 11-11 |
| feature-body:new-feature-execution-comparison:operations[0] | semantic-edge-to-call | $.statements[0].body.statements[0].expression.expression | 13-16 |
| feature-body:new-feature-execution-comparison:operations[0].edgeId | edge-id-to-string-literal | $.statements[0].body.statements[0].expression.expression.edgeId | 14-14 |
| feature-body:new-feature-execution-comparison:operations[0].input | context-input-to-identifier | $.statements[0].body.statements[0].expression.expression.arguments[0] | 15-15 |

### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: verify-one-complete-new-feature-lineage
// obligation-id: prove-complete-new-feature-equivalence
// responsibility-id: verifies-complete-new-feature-lineage
// signal-id: complete-new-feature-equivalence
// DO NOT EDIT.
import type { VerifyCompleteNewFeatureLineageContext, NewFeatureTerminalDisposition } from "./complete-new-feature-lineage.type.js";

export async function verifiesCompleteNewFeatureLineage(
  context: VerifyCompleteNewFeatureLineageContext
): Promise<NewFeatureTerminalDisposition> {
  return await context.edges.invokes(
    "verify-complete-new-feature-lineage",
    context
  );
}

```

### capabilities/end-to-end-canonical-feature-conveyor-fractal/scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/complete-new-feature-lineage.type.ts

```typescript
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: verify-one-complete-new-feature-lineage
// obligation-id: prove-complete-new-feature-equivalence
// responsibility-id: verifies-complete-new-feature-lineage
// signal-id: complete-new-feature-equivalence
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface VerifyCompleteNewFeatureLineageContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: VerifyCompleteNewFeatureLineageContext) => Promise<NewFeatureTerminalDisposition>;
  };
}

export interface NewFeatureTerminalDisposition {
  readonly disposition:
    | "PROJECTION_CONFORMS"
    | "PROJECTION_DIVERGES";
  readonly comparisonEvidenceRef: GovernedArtifactRef;
  readonly lineageId: string;
}

```

Translation provenance:

| Source authority | Projection rule | AST path | Source range |
| --- | --- | --- | --- |
| responsibility:verifies-complete-new-feature-lineage | body-to-exported-async-function | $.statements[0] | 10-10 |
| feature-body:complete-new-feature-lineage:context | context-to-parameter | $.statements[0].parameters[0] | 11-11 |
| feature-body:complete-new-feature-lineage:operations[0] | semantic-edge-to-call | $.statements[0].body.statements[0].expression.expression | 13-16 |
| feature-body:complete-new-feature-lineage:operations[0].edgeId | edge-id-to-string-literal | $.statements[0].body.statements[0].expression.expression.edgeId | 14-14 |
| feature-body:complete-new-feature-lineage:operations[0].input | context-input-to-identifier | $.statements[0].body.statements[0].expression.expression.arguments[0] | 15-15 |

### What this becomes

Projection availability: PROJECTOR_OUTPUT

Authoritative projector output count: 16

The complete production output and translation provenance are rendered in this section.

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.derivedProjections.results | production-source | PROJECTOR_OUTPUT | expected-code |

### Review questions

- Does every source construct come from the expected AST with no hand-authored additions?

## 15. Direct semantic evaluation

### What is established here

```text
Stage ID: evaluate-semantic-execution
Purpose: Execute semantic authority directly and observe its signals.
Authorized inputs: semantic-execution, scenario-signals
Required prior products: semantic-execution
Required output: semantic-evaluation
Stop condition: every semantic execution produces one observed signal
```

### Canonical authority

```json
{
  "executionRefs": [
    "responsibility:admits-reviewed-new-feature-request",
    "responsibility:adapts-new-feature-request-admission",
    "responsibility:projects-complete-new-feature-authority",
    "responsibility:materializes-complete-new-feature",
    "responsibility:executes-newly-materialized-feature",
    "responsibility:composes-new-feature-execution-comparison",
    "responsibility:verifies-complete-new-feature-lineage"
  ],
  "fixtureRefs": [
    "scenario:admit-one-reviewed-new-feature-request",
    "scenario:adapt-one-new-feature-request-admission",
    "scenario:project-one-complete-new-feature-authority",
    "scenario:materialize-one-complete-new-feature",
    "scenario:execute-one-newly-materialized-feature",
    "scenario:compose-one-new-feature-execution-comparison",
    "scenario:verify-one-complete-new-feature-lineage"
  ],
  "expectedSignalRefs": [
    "signal:new-feature-request-admission",
    "signal:admitted-new-feature-request",
    "signal:complete-new-feature-authority",
    "signal:complete-new-feature-materialization",
    "signal:observed-new-feature-execution",
    "signal:new-feature-execution-comparison",
    "signal:complete-new-feature-equivalence"
  ]
}
```

Observed: NOT_EVALUATED

### What this becomes

Projection availability: GOVERNED_PREVIEW

```text
execute declared model/body
        │
        ▼
capture observed signal
        │
        ▼
retain NOT_EVALUATED until runtime evidence exists
```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.evaluationAuthority.semanticEvaluation | evaluation-flow | GOVERNED_PREVIEW | semantic-evaluation |

### Review questions

- Was the semantic result observed without using the expected result as execution input?

## 16. Projected-body evaluation

### What is established here

```text
Stage ID: evaluate-projected-execution
Purpose: Execute the projected embodiment and observe its signals independently.
Authorized inputs: expected-code, scenario-signals
Required prior products: expected-code
Required output: projected-evaluation
Stop condition: every projected body produces one independently observed signal
```

### Canonical authority

```json
{
  "executionRefs": [
    "feature-body:new-feature-request-admission",
    "feature-body:admitted-new-feature-request",
    "feature-body:complete-new-feature-authority",
    "feature-body:complete-new-feature-materialization",
    "feature-body:observed-new-feature-execution",
    "feature-body:new-feature-execution-comparison",
    "feature-body:complete-new-feature-lineage"
  ],
  "fixtureRefs": [
    "scenario:admit-one-reviewed-new-feature-request",
    "scenario:adapt-one-new-feature-request-admission",
    "scenario:project-one-complete-new-feature-authority",
    "scenario:materialize-one-complete-new-feature",
    "scenario:execute-one-newly-materialized-feature",
    "scenario:compose-one-new-feature-execution-comparison",
    "scenario:verify-one-complete-new-feature-lineage"
  ],
  "expectedSignalRefs": [
    "signal:new-feature-request-admission",
    "signal:admitted-new-feature-request",
    "signal:complete-new-feature-authority",
    "signal:complete-new-feature-materialization",
    "signal:observed-new-feature-execution",
    "signal:new-feature-execution-comparison",
    "signal:complete-new-feature-equivalence"
  ]
}
```

Observed: NOT_EVALUATED

### What this becomes

Projection availability: GOVERNED_PREVIEW

```text
execute declared model/body
        │
        ▼
capture observed signal
        │
        ▼
retain NOT_EVALUATED until runtime evidence exists
```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.evaluationAuthority.projectedEvaluation | evaluation-flow | GOVERNED_PREVIEW | projected-evaluation |

### Review questions

- Was the projected result observed through the same fixture boundary as semantic execution?

## 17. Translation conformance

### What is established here

```text
Stage ID: evaluate-translation-conformance
Purpose: Compare declared expectations, semantic observations, and projected observations.
Authorized inputs: scenario-expectations, semantic-evaluation, projected-evaluation
Required prior products: semantic-evaluation, projected-evaluation
Required output: translation-conformance
Stop condition: every responsibility has one terminal translation determination
```

### Canonical authority

```json
{
  "policy": {
    "possibleDispositions": [
      "PROJECTION_CONFORMS",
      "SEMANTIC_EXECUTION_DIVERGES",
      "PROJECTED_EXECUTION_DIVERGES",
      "TRANSLATION_DIVERGES",
      "NOT_EVALUATED"
    ]
  },
  "translationEvaluation": {
    "comparisonRefs": [
      "semantic-observation:responsibility:admits-reviewed-new-feature-request",
      "semantic-observation:responsibility:adapts-new-feature-request-admission",
      "semantic-observation:responsibility:projects-complete-new-feature-authority",
      "semantic-observation:responsibility:materializes-complete-new-feature",
      "semantic-observation:responsibility:executes-newly-materialized-feature",
      "semantic-observation:responsibility:composes-new-feature-execution-comparison",
      "semantic-observation:responsibility:verifies-complete-new-feature-lineage",
      "projected-observation:feature-body:new-feature-request-admission",
      "projected-observation:feature-body:admitted-new-feature-request",
      "projected-observation:feature-body:complete-new-feature-authority",
      "projected-observation:feature-body:complete-new-feature-materialization",
      "projected-observation:feature-body:observed-new-feature-execution",
      "projected-observation:feature-body:new-feature-execution-comparison",
      "projected-observation:feature-body:complete-new-feature-lineage",
      "signal:new-feature-request-admission",
      "signal:admitted-new-feature-request",
      "signal:complete-new-feature-authority",
      "signal:complete-new-feature-materialization",
      "signal:observed-new-feature-execution",
      "signal:new-feature-execution-comparison",
      "signal:complete-new-feature-equivalence"
    ],
    "requiredRelationship": "canonical-equivalence"
  },
  "observation": {
    "semanticExecution": "NOT_EVALUATED",
    "projectedExecution": "NOT_EVALUATED",
    "translation": "NOT_EVALUATED",
    "disposition": "NOT_EVALUATED"
  }
}
```

```text
semantic authority ------> direct semantic execution
        |                             |
        |                             v
        |                    semantic observation
        |                             |
        v                             v
feature-body authority -> projected execution
                                      |
                                      v
                             projected observation
                                      |
                                      v
required relationship: canonical-equivalence
observed disposition: NOT_EVALUATED
```

### What this becomes

Projection availability: GOVERNED_PREVIEW

```text
semantic observation ──┐
                       ├── compare to expectation and correspondence ──► disposition
projected observation ─┘
```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.evaluationAuthority.translationEvaluation | comparison-flow | GOVERNED_PREVIEW | translation-conformance |

### Review questions

- Are the declared, semantic, and projected outcomes canonically equivalent?

## 18. Review disposition

### What is established here

```text
Stage ID: review-feature
Purpose: Present the complete construction lineage for human implementation admission.
Authorized inputs: canonical-feature, translation-conformance
Required prior products: translation-conformance
Required output: review-disposition
Stop condition: one review disposition covers the complete canonical feature
```

### Canonical authority

Review questions:

- Does each stage consume only admitted products of earlier stages?
- Does every scenario carry one obligation, expectation, responsibility, signal, and semantic operation?
- Can every feature-body operation be traced to semantic execution?
- Can every AST node be traced to feature-body authority?
- Can every projected source construct be traced to the expected AST?
- Are direct semantic and projected observations canonically equivalent to the declared expectation?

Translation tie-out:

| Canonical authority | Expected AST | Expected code |
| --- | --- | --- |
| Each feature body accepts one immutable context. | Each function declaration has one immutable context parameter. | Each projected function accepts one typed context parameter. |
| Each feature body invokes exactly one admitted semantic edge. | Each function body contains one awaited call expression. | Each projected function returns one awaited context invocation. |
| Each semantic edge ID equals its scenario semantic operation ID. | Each call contains the edge ID as one string literal. | Each context invocation names the admitted semantic edge. |
| Domain branching and DTO construction are forbidden. | No branch or object-construction nodes are admitted. | No if, switch, loop, or object construction is projected. |

Admission rule: Admit implementation only when the pinned semantic interpreter is implemented, semantic and projected evaluation are executed, translation conformance is CONFORMS, every runtime artifact binding is implemented, and the review stage is no longer blocked.

Current implementation admission: BLOCKED_PENDING_CONFORMANCE

### What this becomes

Projection availability: GOVERNED_PREVIEW

```text
NOT_EVALUATED
      │ runtime evidence and canonical equivalence
      ▼
PROJECTION_CONFORMS
      │ admission rule
      ▼
materialization eligible
```

### Authority-to-code traceability

| Authority source | Projection preview | Availability | Required output |
| --- | --- | --- | --- |
| $.reviewAuthority.admissionRule | admission-transition | GOVERNED_PREVIEW | review-disposition |

### Review questions

- Is every implementation construct traceable through AST, body, semantic authority, and feature intent?
