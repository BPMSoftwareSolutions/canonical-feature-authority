// @generated
// capability-id: validate-feature-scenario-atomicity
// feature-id: reject-non-atomic-feature-scenarios
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
