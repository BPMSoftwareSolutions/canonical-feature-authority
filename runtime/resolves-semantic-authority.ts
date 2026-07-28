// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runtime-resolves-semantic-authority
// authority-sha256: sha256:c8a4e1a82ac0f07a156f23136987c8fa1bcca11a995d3cf06490216a5190b163
// body-sha256: sha256:8eb4ae0358592977eb032bc6a6062a1cbb8a1b45103c7b055bfc19afc7a481be
// projection-signature: ed25519:Tsimkfui2oh0ppp8rhq5GCaKGXzuZNOv9cdhjdEhlMq/EvRt2qmJMBaHCcl4bLDYZo7K/8+w3c21Ceny+w4MBw==
// DO NOT EDIT.
// Resolves the scenario fixture and semantic-edge provider into the context
// consumed by each projected responsibility body.

import type { EvaluateScenarioAtomicityContext } from "../capabilities/validate-feature-scenario-atomicity/scenarios/reject-a-scenario-with-multiple-obligations/evaluates-scenario-atomicity/scenario-atomicity.type.js";
import { invokesSemanticEdge } from "./invokes-semantic-edge.js";

export interface ScenarioAtomicityFixture {
  readonly classifiedObligations: ReadonlyArray<{
    readonly obligationId: string;
    readonly independentlyEvaluable: boolean | "unresolved";
  }>;
}

export function createsScenarioAtomicityContext(
  fixture: ScenarioAtomicityFixture
): EvaluateScenarioAtomicityContext {
  return {
    scenario: {
      scenarioId: "fixture-scenario",
      obligations: fixture.classifiedObligations
    },
    edges: invokesSemanticEdge()
  };
}

export function resolvesSemanticAuthority() {
  return invokesSemanticEdge();
}
