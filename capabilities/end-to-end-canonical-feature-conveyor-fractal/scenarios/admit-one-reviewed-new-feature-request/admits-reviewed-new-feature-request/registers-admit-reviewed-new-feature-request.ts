// @generated
// authority-ref: runtime-registration:admits-reviewed-new-feature-request
// projector: canonical-feature-conveyor-implementation-projector.v1
// DO NOT EDIT.
import { admitsReviewedNewFeatureRequest } from "./new-feature-request-admission.js";
import type { SemanticAuthorityInterpreter } from "../../../runtime/interprets-canonical-feature-semantic-authority.js";

export interface RuntimeEdgeRegistration {
  readonly edgeId: string;
  readonly invokes: (input: unknown) => Promise<unknown>;
}

export function registersAdmitReviewedNewFeatureRequest(
  interpreter: SemanticAuthorityInterpreter
): RuntimeEdgeRegistration {
  return {
    edgeId: "admit-reviewed-new-feature-request",
    invokes: input => {
      const context = {
        ...(input as Record<string, unknown>),
        edges: {
          invokes: (_edgeId: string, semanticInput: unknown) =>
            interpreter.executes(
              "admits-reviewed-new-feature-request",
              semanticInput
            )
        }
      };
      return admitsReviewedNewFeatureRequest(context as never);
    }
  };
}
