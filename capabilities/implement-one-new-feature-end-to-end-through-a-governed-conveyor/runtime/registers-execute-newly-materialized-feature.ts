// @generated
// authority-ref: runtime-registration:executes-newly-materialized-feature
// projector: canonical-feature-conveyor-implementation-projector.v1
// DO NOT EDIT.
import { executesNewlyMaterializedFeature } from "../src/observed-new-feature-execution.js";
import type { SemanticAuthorityInterpreter } from "./interprets-canonical-feature-semantic-authority.js";

export interface RuntimeEdgeRegistration {
  readonly edgeId: string;
  readonly invokes: (input: unknown) => Promise<unknown>;
}

export function registersExecuteNewlyMaterializedFeature(
  interpreter: SemanticAuthorityInterpreter
): RuntimeEdgeRegistration {
  return {
    edgeId: "execute-newly-materialized-feature",
    invokes: input => {
      const context = {
        ...(input as Record<string, unknown>),
        edges: {
          invokes: (_edgeId: string, semanticInput: unknown) =>
            interpreter.executes(
              "executes-newly-materialized-feature",
              semanticInput
            )
        }
      };
      return executesNewlyMaterializedFeature(context as never);
    }
  };
}
