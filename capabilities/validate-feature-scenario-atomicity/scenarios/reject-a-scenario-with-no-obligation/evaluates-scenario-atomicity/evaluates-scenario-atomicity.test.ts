// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-scenarios-reject-a-scenario-with-no-obligation-evaluates-scenario-atomicity-evaluates-scenario-atomicity-test
// authority-sha256: sha256:9180abc2353561357376866115a519d0a16b3ed8823e189ccca3b67ec592c23c
// body-sha256: sha256:ae1f46d66f05be2c63350fbeb155d37f41711ebf2e7f726c7d87d29e607da5d2
// projection-signature: ed25519:1UiBwbGI+GQQbc5O7Ve+5rZcMoNLDso1cPEWxzXNNeMn7LnYQUyoBuHYGYOO2lhCk8h6IYZlxmfkDUn5KWgcDA==
// DO NOT EDIT.
import { describe, it, expect } from "vitest";
import { evaluatesScenarioAtomicity } from "./evaluates-scenario-atomicity.js";
import { createsScenarioAtomicityContext } from "../../../../../runtime/resolves-semantic-authority.js";

describe("evaluates-scenario-atomicity — reject-a-scenario-with-no-obligation", () => {
  it("rejects a scenario with no identifiable obligation", async () => {
    const context = createsScenarioAtomicityContext({
      classifiedObligations: []
    });

    const signal = await evaluatesScenarioAtomicity(context);

    expect(signal.signalId).toBe("scenario-atomicity");
    expect(signal.disposition).toBe("SCENARIO_NOT_ATOMIC");
  });
});
