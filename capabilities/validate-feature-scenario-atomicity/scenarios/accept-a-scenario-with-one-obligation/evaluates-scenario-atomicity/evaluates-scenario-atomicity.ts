// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-scenarios-accept-a-scenario-with-one-obligation-evaluates-scenario-atomicity-evaluates-scenario-atomicity
// authority-sha256: sha256:660f794bf1e7c7e55973cdf2aaaef4ef06015859a058e1dc391703b2cbbeeb8f
// body-sha256: sha256:2286e54a0e1bd69aae14b1a7445a48076ca01e440fb424a043c584ea10be1b12
// projection-signature: ed25519:ffSvbQysAH0j8ZUF7XaskboHG6LzrYFgXYT9VnTsz7vLBnOCNxIhupjQ4qF1fA+IaY3Ix8roOOipqphs0HsSCw==
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
