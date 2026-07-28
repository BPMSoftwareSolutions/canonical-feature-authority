// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-scenarios-reject-a-scenario-with-no-obligation-evaluates-scenario-atomicity-evaluates-scenario-atomicity
// authority-sha256: sha256:c2b0b22f1d373297b8dbf948fd032b8252d6242ea85736648f5e7b77d9bc43c5
// body-sha256: sha256:2286e54a0e1bd69aae14b1a7445a48076ca01e440fb424a043c584ea10be1b12
// projection-signature: ed25519:aJx9vg0dzQKHKtPBHOjaHqoVLY/+MuXhSMWWvNYDjuFY+IMXk+uzDzcHnXBv/mGU2zcbZLw6v4q4tAa0avV0Aw==
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
