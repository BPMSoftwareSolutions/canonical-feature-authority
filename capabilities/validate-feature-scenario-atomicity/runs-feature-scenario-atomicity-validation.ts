// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-runs-feature-scenario-atomicity-validation
// authority-sha256: sha256:6fb3b1ade85fe94b94f2b6a875917924b3168f7d689df8d339e688928b96f3fb
// body-sha256: sha256:f3f1ce5ce79a7d6887fc8698d0fc5eaf93622034edef485ffb9d57ca330ed67a
// projection-signature: ed25519:swckmHqsPj2J1K98kzzffrogFgSIA+GcdlvPmvuhEyQPtl/m1dB9a6OoiCg2o0jYmyFBYzQ+Eie3NEUipxBQBw==
// DO NOT EDIT.
import { evaluatesScenarioAtomicity as evaluatesRejectMultiple } from "./scenarios/reject-a-scenario-with-multiple-obligations/evaluates-scenario-atomicity/evaluates-scenario-atomicity.js";
import { evaluatesScenarioAtomicity as evaluatesAcceptOne } from "./scenarios/accept-a-scenario-with-one-obligation/evaluates-scenario-atomicity/evaluates-scenario-atomicity.js";
import { evaluatesScenarioAtomicity as evaluatesRejectNone } from "./scenarios/reject-a-scenario-with-no-obligation/evaluates-scenario-atomicity/evaluates-scenario-atomicity.js";
import { evaluatesScenarioAtomicity as evaluatesRejectAmbiguous } from "./scenarios/reject-an-ambiguously-classified-scenario/evaluates-scenario-atomicity/evaluates-scenario-atomicity.js";
import type {
  EvaluateScenarioAtomicityContext,
  ScenarioAtomicitySignal
} from "./scenarios/reject-a-scenario-with-multiple-obligations/evaluates-scenario-atomicity/scenario-atomicity.type.js";

export interface CapabilityScenarioMap {
  readonly "reject-a-scenario-with-multiple-obligations": (
    context: EvaluateScenarioAtomicityContext
  ) => Promise<ScenarioAtomicitySignal>;
  readonly "accept-a-scenario-with-one-obligation": (
    context: EvaluateScenarioAtomicityContext
  ) => Promise<ScenarioAtomicitySignal>;
  readonly "reject-a-scenario-with-no-obligation": (
    context: EvaluateScenarioAtomicityContext
  ) => Promise<ScenarioAtomicitySignal>;
  readonly "reject-an-ambiguously-classified-scenario": (
    context: EvaluateScenarioAtomicityContext
  ) => Promise<ScenarioAtomicitySignal>;
}

export const runsFeatureScenarioAtomicityValidation: CapabilityScenarioMap = {
  "reject-a-scenario-with-multiple-obligations": evaluatesRejectMultiple,
  "accept-a-scenario-with-one-obligation": evaluatesAcceptOne,
  "reject-a-scenario-with-no-obligation": evaluatesRejectNone,
  "reject-an-ambiguously-classified-scenario": evaluatesRejectAmbiguous
};
