// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-scenarios-reject-a-scenario-with-multiple-obligations-evaluates-scenario-atomicity-evaluates-scenario-atomicity-test
// authority-sha256: sha256:a370b291e255871b95167b35606d14f6ca6bc5d91aacab6480578ede9688784a
// body-sha256: sha256:d721c3a7e762954633205c81da95b260afda2ebb6669dae241436ca0a3fc1e85
// projection-signature: ed25519:rfDoKZtCYm/QSqwHnzMp0RTts+g68cmidT+im6Ij0gCYuPjkrQBafasK7q6m3CeLMXmsIO6X/K37n3vRXpgPCw==
// DO NOT EDIT.
import { describe, it, expect } from "vitest";
import { evaluatesScenarioAtomicity } from "./evaluates-scenario-atomicity.js";
import { createsScenarioAtomicityContext } from "../../../../../runtime/resolves-semantic-authority.js";
import { createsIndependentObligation } from "../../../../../runtime/projects-semantic-result.js";

describe("evaluates-scenario-atomicity — reject-a-scenario-with-multiple-obligations", () => {
  it("rejects a scenario with multiple obligations", async () => {
    const context = createsScenarioAtomicityContext({
      classifiedObligations: [
        createsIndependentObligation("first-obligation"),
        createsIndependentObligation("second-obligation")
      ]
    });

    const signal = await evaluatesScenarioAtomicity(context);

    expect(signal.signalId).toBe("scenario-atomicity");
    expect(signal.disposition).toBe("SCENARIO_NOT_ATOMIC");
  });
});
