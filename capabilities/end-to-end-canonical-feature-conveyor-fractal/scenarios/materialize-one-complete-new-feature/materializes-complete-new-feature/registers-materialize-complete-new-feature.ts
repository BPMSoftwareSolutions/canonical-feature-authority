// @generated
// authority-ref: runtime-registration:materializes-complete-new-feature
// projector: canonical-feature-conveyor-implementation-projector.v1
// DO NOT EDIT.
import { materializesCompleteNewFeature } from "./complete-new-feature-materialization.js";
import type { SemanticAuthorityInterpreter } from "../../../runtime/interprets-canonical-feature-semantic-authority.js";

export interface RuntimeEdgeRegistration {
  readonly edgeId: string;
  readonly invokes: (input: unknown) => Promise<unknown>;
}

export function registersMaterializeCompleteNewFeature(
  interpreter: SemanticAuthorityInterpreter
): RuntimeEdgeRegistration {
  return {
    edgeId: "materialize-complete-new-feature",
    invokes: input => {
      const context = {
        ...(input as Record<string, unknown>),
        edges: {
          invokes: (_edgeId: string, semanticInput: unknown) =>
            interpreter.executes(
              "materializes-complete-new-feature",
              semanticInput
            )
        }
      };
      return materializesCompleteNewFeature(context as never);
    }
  };
}
