// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runtime-executes-semantic-authority
// authority-sha256: sha256:6e18a7e2e7849f6d8335bb17777408355999352ef0cb18d9421bb9525b16092d
// body-sha256: sha256:6fb00d0420bc154cca4859de96bf7d01a73e6e49b85c0daad5b4cb5066d31d8c
// projection-signature: ed25519:3CvuKLIf0Cc6KoCuvYBaPEfNac2t3SoQE9GLTyIb2m+O7KAlkJGCaR/yV4iRrI8jWjng8SlGTuYGgdHAeSAzCw==
// DO NOT EDIT.
// Executes the observation, evaluation, and disposition semantics declared by
// evaluates-obligation-cardinality.sej.json.

import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicityDisposition
} from "../capabilities/validate-feature-scenario-atomicity/scenarios/reject-a-scenario-with-multiple-obligations/evaluates-scenario-atomicity/scenario-atomicity.type.js";

export function executesSemanticAuthority(
  context: EvaluateScenarioAtomicityContext
): ScenarioAtomicityDisposition {
  const obligations = context.scenario.obligations;
  if (
    obligations.some(
      (obligation) => obligation.independentlyEvaluable === "unresolved"
    )
  ) {
    return "SCENARIO_ATOMICITY_UNRESOLVED";
  }
  const independentCount = obligations.filter(
    (obligation) => obligation.independentlyEvaluable
  ).length;
  return independentCount === 1
    ? "SCENARIO_ATOMIC"
    : "SCENARIO_NOT_ATOMIC";
}
