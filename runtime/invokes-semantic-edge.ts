// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runtime-invokes-semantic-edge
// authority-sha256: sha256:48346eb42b731f08e6a7d4e6bd755b639e32968219561d095361bbe4709e6874
// body-sha256: sha256:00f8a7a1e6898d8d7ce2d9f29ef3a28528cbcb5c0921edd7a6aa8124fa56e7c1
// projection-signature: ed25519:tnss+kfy9cSffvAaX4035Im55vbeRp1q58aCpk7GPonnIMrmgjNBPbrR5FY/GCNC/nzVHRZfrhGgRonJEF/iAg==
// DO NOT EDIT.
// Dispatches the semantic edge named by every projected scenario body.

import type {
  EvaluateScenarioAtomicityContext,
  SemanticEdgeRuntime
} from "../capabilities/validate-feature-scenario-atomicity/scenarios/reject-a-scenario-with-multiple-obligations/evaluates-scenario-atomicity/scenario-atomicity.type.js";
import { executesSemanticAuthority } from "./executes-semantic-authority.js";
import { projectsSemanticResult } from "./projects-semantic-result.js";

export function invokesSemanticEdge(): SemanticEdgeRuntime {
  return {
    async invokes<TInput, TOutput>(
      edgeId: string,
      input: TInput
    ): Promise<TOutput> {
      if (edgeId !== "evaluate-scenario-atomicity") {
        throw new Error(`Unknown semantic edge: ${edgeId}`);
      }
      const disposition = executesSemanticAuthority(
        input as EvaluateScenarioAtomicityContext
      );
      return projectsSemanticResult(disposition) as TOutput;
    }
  };
}
