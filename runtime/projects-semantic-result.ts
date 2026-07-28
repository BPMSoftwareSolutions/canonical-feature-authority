// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runtime-projects-semantic-result
// authority-sha256: sha256:d5d06fc38861d2eeac426f48720dc7a7c6367003c030e3a865f220fb0eb807c7
// body-sha256: sha256:a917e888e168bf975ed230b54bd5e7a7024b70929f06c545aace0d7b50e64678
// projection-signature: ed25519:JP8ilMyIslJKEHHnfYr++FV/yXgQzpnTzL1uwLrDr3QWCfupnWgLEXy0a5sSrt+ASoHTm1OX1yFdNZIj6a5hAw==
// DO NOT EDIT.
// Projects resolved dispositions according to
// projects-scenario-atomicity-signal.sej.json.

import type {
  ScenarioAtomicityDisposition,
  ScenarioAtomicitySignal
} from "../capabilities/validate-feature-scenario-atomicity/scenarios/reject-a-scenario-with-multiple-obligations/evaluates-scenario-atomicity/scenario-atomicity.type.js";

export function createsIndependentObligation(obligationId: string) {
  return {
    obligationId,
    independentlyEvaluable: true as const
  };
}

export function createsUnclassifiableObligation(obligationId: string) {
  return {
    obligationId,
    independentlyEvaluable: "unresolved" as const
  };
}

export function projectsSemanticResult(
  disposition: ScenarioAtomicityDisposition
): ScenarioAtomicitySignal {
  return {
    signalId: "scenario-atomicity",
    disposition,
    color: disposition === "SCENARIO_ATOMIC" ? "GREEN" : "RED",
    blocking: disposition !== "SCENARIO_ATOMIC"
  };
}
