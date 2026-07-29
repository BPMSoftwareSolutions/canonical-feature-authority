// @generated
// authority-ref: runtime-registration:projects-complete-new-feature-authority
// projector: canonical-feature-conveyor-implementation-projector.v1
// DO NOT EDIT.
import { projectsCompleteNewFeatureAuthority } from "../src/complete-new-feature-authority.js";
import type { SemanticAuthorityInterpreter } from "./interprets-canonical-feature-semantic-authority.js";

export interface RuntimeEdgeRegistration {
  readonly edgeId: string;
  readonly invokes: (input: unknown) => Promise<unknown>;
}

export function registersProjectCompleteNewFeatureAuthority(
  interpreter: SemanticAuthorityInterpreter
): RuntimeEdgeRegistration {
  return {
    edgeId: "project-complete-new-feature-authority",
    invokes: input => {
      const context = {
        ...(input as Record<string, unknown>),
        edges: {
          invokes: (_edgeId: string, semanticInput: unknown) =>
            interpreter.executes(
              "projects-complete-new-feature-authority",
              semanticInput
            )
        }
      };
      return projectsCompleteNewFeatureAuthority(context as never);
    }
  };
}
