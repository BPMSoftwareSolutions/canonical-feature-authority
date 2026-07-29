// @generated
// authority-ref: runtime-registration:composes-new-feature-execution-comparison
// projector: canonical-feature-conveyor-implementation-projector.v1
// DO NOT EDIT.
import { composesNewFeatureExecutionComparison } from "../src/new-feature-execution-comparison.js";
import type { SemanticAuthorityInterpreter } from "./interprets-canonical-feature-semantic-authority.js";

export interface RuntimeEdgeRegistration {
  readonly edgeId: string;
  readonly invokes: (input: unknown) => Promise<unknown>;
}

export function registersComposeNewFeatureExecutionComparison(
  interpreter: SemanticAuthorityInterpreter
): RuntimeEdgeRegistration {
  return {
    edgeId: "compose-new-feature-execution-comparison",
    invokes: input => {
      const context = {
        ...(input as Record<string, unknown>),
        edges: {
          invokes: (_edgeId: string, semanticInput: unknown) =>
            interpreter.executes(
              "composes-new-feature-execution-comparison",
              semanticInput
            )
        }
      };
      return composesNewFeatureExecutionComparison(context as never);
    }
  };
}
