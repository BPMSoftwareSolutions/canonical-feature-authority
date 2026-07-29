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

export interface SemanticAuthority {
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
  semanticAuthorities: readonly SemanticAuthority[],
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
