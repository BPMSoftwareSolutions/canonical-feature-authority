// @generated
// authority-ref: runtime-registration:adapts-new-feature-request-admission
// projector: canonical-feature-conveyor-implementation-projector.v1
// DO NOT EDIT.
import { adaptsNewFeatureRequestAdmission } from "./admitted-new-feature-request.js";
import type { SemanticAuthorityInterpreter } from "../../../runtime/interprets-canonical-feature-semantic-authority.js";

export interface RuntimeEdgeRegistration {
  readonly edgeId: string;
  readonly invokes: (input: unknown) => Promise<unknown>;
}

export function registersAdaptNewFeatureRequestAdmission(
  interpreter: SemanticAuthorityInterpreter
): RuntimeEdgeRegistration {
  return {
    edgeId: "adapt-new-feature-request-admission",
    invokes: input => {
      const context = {
        ...(input as Record<string, unknown>),
        edges: {
          invokes: (_edgeId: string, semanticInput: unknown) =>
            interpreter.executes(
              "adapts-new-feature-request-admission",
              semanticInput
            )
        }
      };
      return adaptsNewFeatureRequestAdmission(context as never);
    }
  };
}
