// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-scenarios-reject-a-scenario-with-multiple-obligations-evaluates-scenario-atomicity-evaluates-scenario-atomicity
// authority-sha256: sha256:e25113fdb3e84697c14f719b96002705448e143df4e6155855055943b1adbaaf
// body-sha256: sha256:2286e54a0e1bd69aae14b1a7445a48076ca01e440fb424a043c584ea10be1b12
// projection-signature: ed25519:l/6f3qMsXmunWrPIt8UORPkW2H/m68WRoH/XQsU1yD+YdMVGT+bHyZXoEuTGImV4aNykIrGMOc6vQfAIwdT1BQ==
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
