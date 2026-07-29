// @generated
// authority-ref: runtime-registration:verifies-complete-new-feature-lineage
// projector: canonical-feature-conveyor-implementation-projector.v1
// DO NOT EDIT.
import { verifiesCompleteNewFeatureLineage } from "./complete-new-feature-lineage.js";
import type { SemanticAuthorityInterpreter } from "../../../runtime/interprets-canonical-feature-semantic-authority.js";

export interface RuntimeEdgeRegistration {
  readonly edgeId: string;
  readonly invokes: (input: unknown) => Promise<unknown>;
}

export function registersVerifyCompleteNewFeatureLineage(
  interpreter: SemanticAuthorityInterpreter
): RuntimeEdgeRegistration {
  return {
    edgeId: "verify-complete-new-feature-lineage",
    invokes: input => {
      const context = {
        ...(input as Record<string, unknown>),
        edges: {
          invokes: (_edgeId: string, semanticInput: unknown) =>
            interpreter.executes(
              "verifies-complete-new-feature-lineage",
              semanticInput
            )
        }
      };
      return verifiesCompleteNewFeatureLineage(context as never);
    }
  };
}
