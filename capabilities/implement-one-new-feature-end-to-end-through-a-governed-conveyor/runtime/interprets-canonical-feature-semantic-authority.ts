// @generated
// authority-ref: semantic-interpreter:canonical-feature-semantic-interpreter.v1
// projector: canonical-feature-conveyor-implementation-projector.v1
// DO NOT EDIT.
export interface SemanticObservationRequest {
  readonly portRef: string;
  readonly operationId: string;
  readonly input: unknown;
  readonly producesFields: readonly string[];
}

export interface SemanticObservationResolver {
  resolves(request: SemanticObservationRequest): Promise<Record<string, unknown>>;
  resolvesEvidence(reference: unknown): Promise<unknown>;
}

export interface SemanticAuthorityInterpreter {
  executes(responsibilityId: string, input: unknown): Promise<unknown>;
}

interface SemanticOperand {
  readonly kind: "path" | "literal";
  readonly path?: string;
  readonly value?: unknown;
}

interface SemanticAuthority {
  readonly [key: string]: unknown;
  readonly responsibilityId: string;
  readonly observations: readonly Record<string, unknown>[];
  readonly decisions: readonly Record<string, unknown>[];
  readonly projections: readonly Record<string, unknown>[];
  readonly execution: {
    readonly executionModelId: string;
    readonly steps: readonly Record<string, unknown>[];
  };
}

const semanticAuthorities: readonly SemanticAuthority[] = [
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
    ],
    "execution": {
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
  },
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
    ],
    "execution": {
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
  },
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
    ],
    "execution": {
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
  },
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
    ],
    "execution": {
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
  },
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
    ],
    "execution": {
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
  },
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
    ],
    "execution": {
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
  },
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
    ],
    "execution": {
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
  }
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function readsPath(document: unknown, path: string): unknown {
  if (path === "$") return document;
  if (!path.startsWith("$.")) {
    throw new Error(`SEMANTIC_PATH_DIALECT_REJECTED: ${path}`);
  }
  return path.slice(2).split(".").reduce<unknown>((value, member) => {
    if (!isRecord(value) || !(member in value)) {
      throw new Error(`SEMANTIC_PATH_MEMBER_MISSING: ${path}`);
    }
    return value[member];
  }, document);
}

function assignsPath(
  document: Record<string, unknown>,
  path: string,
  value: unknown
): void {
  const match = /^\$\.([A-Za-z][A-Za-z0-9]*)$/.exec(path);
  if (match === null) {
    throw new Error(`SEMANTIC_ASSIGN_PATH_REJECTED: ${path}`);
  }
  document[match[1]] = value;
}

function resolvesOperand(
  document: Record<string, unknown>,
  operand: SemanticOperand
): unknown {
  return operand.kind === "path"
    ? readsPath(document, operand.path ?? "")
    : operand.value;
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
  if (encoded === undefined) {
    throw new Error("SEMANTIC_VALUE_NOT_CANONICALIZABLE");
  }
  return encoded;
}

async function evaluatesPredicate(
  predicate: Record<string, unknown>,
  document: Record<string, unknown>,
  resolver: SemanticObservationResolver
): Promise<boolean> {
  const left = resolvesOperand(document, predicate.left as SemanticOperand);
  const right = resolvesOperand(document, predicate.right as SemanticOperand);
  switch (predicate.operator) {
    case "equals":
      return canonicalizes(left) === canonicalizes(right);
    case "not-contains":
      return Array.isArray(left) &&
        left.every(value => canonicalizes(value) !== canonicalizes(right));
    case "evidence-equivalent":
      return canonicalizes(await resolver.resolvesEvidence(left)) ===
        canonicalizes(await resolver.resolvesEvidence(right));
    case "artifact-disposition-equals": {
      const evidence = await resolver.resolvesEvidence(left);
      return isRecord(evidence) && evidence.disposition === right;
    }
    default:
      throw new Error(`SEMANTIC_OPERATOR_UNSUPPORTED: ${String(predicate.operator)}`);
  }
}

export function interpretsCanonicalFeatureSemanticAuthority(
  resolver: SemanticObservationResolver
): SemanticAuthorityInterpreter {
  return {
    async executes(responsibilityId, input) {
      const authority = semanticAuthorities.find(
        candidate => candidate.responsibilityId === responsibilityId
      );
      if (authority === undefined) {
        throw new Error(`SEMANTIC_AUTHORITY_NOT_FOUND: ${responsibilityId}`);
      }
      const document: Record<string, unknown> = { input };
      for (const step of authority.execution.steps) {
        const authorityId = String(step.authorityId);
        if (step.operation === "resolve-observation") {
          const observation = authority.observations.find(
            item => item.observationId === authorityId
          );
          if (!isRecord(observation) || !isRecord(observation.resolution)) {
            throw new Error(`SEMANTIC_OBSERVATION_NOT_FOUND: ${authorityId}`);
          }
          const resolution = observation.resolution;
          const operationInput = readsPath(document, String(resolution.input));
          const observed =
            resolution.portRef === "semantic-interpreter:input" ||
            resolution.portRef === "implementation-artifact:runtime-adapter"
              ? operationInput
              : await resolver.resolves({
                  portRef: String(resolution.portRef),
                  operationId: String(resolution.operationId),
                  input: operationInput,
                  producesFields: resolution.producesFields as readonly string[]
                });
          assignsPath(document, String(step.assign), observed);
          continue;
        }
        if (step.operation === "resolve-decision") {
          const decision = authority.decisions.find(
            item => item.decisionId === authorityId
          );
          if (!isRecord(decision) || !Array.isArray(decision.rules)) {
            throw new Error(`SEMANTIC_DECISION_NOT_FOUND: ${authorityId}`);
          }
          let disposition: string | undefined;
          for (const candidate of decision.rules) {
            if (!isRecord(candidate) || !isRecord(candidate.when)) continue;
            const matches = candidate.when.otherwise === true ||
              (Array.isArray(candidate.when.all) &&
                (await Promise.all(
                  candidate.when.all.map(predicate =>
                    evaluatesPredicate(predicate as Record<string, unknown>, document, resolver)
                  )
                )).every(Boolean));
            if (matches) {
              disposition = String(candidate.then);
              break;
            }
          }
          if (disposition === undefined) {
            throw new Error(`SEMANTIC_DECISION_HAS_NO_MATCH: ${authorityId}`);
          }
          assignsPath(document, String(step.assign), { disposition });
          continue;
        }
        if (step.operation === "project-result") {
          const projection = authority.projections.find(
            item => item.projectionId === authorityId
          );
          if (!isRecord(projection) || !isRecord(projection.fields)) {
            throw new Error(`SEMANTIC_PROJECTION_NOT_FOUND: ${authorityId}`);
          }
          const result = Object.fromEntries(
            Object.entries(projection.fields).map(([name, operand]) => [
              name,
              resolvesOperand(document, operand as SemanticOperand)
            ])
          );
          assignsPath(document, String(step.assign), result);
          continue;
        }
        throw new Error(`SEMANTIC_OPERATION_UNSUPPORTED: ${String(step.operation)}`);
      }
      return document.result;
    }
  };
}
