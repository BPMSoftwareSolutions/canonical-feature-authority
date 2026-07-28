// @generated
// feature-id: reject-non-atomic-feature-scenarios
// scenario-id: reject-a-scenario-with-no-obligation
// obligation-id: scenario-carries-one-independent-obligation
// responsibility-id: evaluates-scenario-atomicity
// signal-id: scenario-atomicity
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
