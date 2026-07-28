// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-scenarios-reject-an-ambiguously-classified-scenario-evaluates-scenario-atomicity-evaluates-scenario-atomicity-test
// authority-sha256: sha256:47f9ee7e92790651b14ca418459631b946a73d14d13f1045cd58b7fe8d1c9234
// body-sha256: sha256:84bc97c9f66a552f0509a75c7388b1148288e33455532e627b5437b06d778921
// projection-signature: ed25519:g8q7NEoMKAEnEgSWFiOm3uLtFZfZQ5X2XXYHSljI6UgxT0wtjCPbYhUq6wKCki6X3H208/xJTfcEe2LTN2aJBA==
// DO NOT EDIT.
import { describe, it, expect } from "vitest";
import { evaluatesScenarioAtomicity } from "./evaluates-scenario-atomicity.js";
import { createsScenarioAtomicityContext } from "../../../../../runtime/resolves-semantic-authority.js";
import { createsUnclassifiableObligation } from "../../../../../runtime/projects-semantic-result.js";

describe("evaluates-scenario-atomicity — reject-an-ambiguously-classified-scenario", () => {
  it("rejects a scenario whose obligations cannot be classified deterministically", async () => {
    const context = createsScenarioAtomicityContext({
      classifiedObligations: [
        createsUnclassifiableObligation("ambiguous-obligation")
      ]
    });

    const signal = await evaluatesScenarioAtomicity(context);

    expect(signal.signalId).toBe("scenario-atomicity");
    expect(signal.disposition).toBe("SCENARIO_ATOMICITY_UNRESOLVED");
  });
});
