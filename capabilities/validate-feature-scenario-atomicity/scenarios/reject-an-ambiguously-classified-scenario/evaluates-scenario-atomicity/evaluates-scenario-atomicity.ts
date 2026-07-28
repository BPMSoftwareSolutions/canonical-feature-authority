// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-scenarios-reject-an-ambiguously-classified-scenario-evaluates-scenario-atomicity-evaluates-scenario-atomicity
// authority-sha256: sha256:d392cc213d69ef242b992d258f37c57ea7c275e426467006a991ac02f822ee2f
// body-sha256: sha256:2286e54a0e1bd69aae14b1a7445a48076ca01e440fb424a043c584ea10be1b12
// projection-signature: ed25519:4QKzzCMnbmPMEXvMAW6EXqoBQbgEaoVQkvUhPXBTKRd1aJ10Al62ekwQyF2FRBelRCrUebqkKACJ0NdlslAzAg==
// DO NOT EDIT.
import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicitySignal
} from "./scenario-atomicity.type.js";

export async function evaluatesScenarioAtomicity(
  context: EvaluateScenarioAtomicityContext
): Promise<ScenarioAtomicitySignal> {
  return await context.edges.invokes(
    "evaluate-scenario-atomicity",
    context
  );
}
