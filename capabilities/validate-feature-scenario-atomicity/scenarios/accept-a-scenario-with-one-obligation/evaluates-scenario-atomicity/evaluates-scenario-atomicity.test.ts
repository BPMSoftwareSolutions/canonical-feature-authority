// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-scenarios-accept-a-scenario-with-one-obligation-evaluates-scenario-atomicity-evaluates-scenario-atomicity-test
// authority-sha256: sha256:e271f91c03e41564575fa02d09df50bca6a7fb00d80212d930b8178d0dd2904f
// body-sha256: sha256:b489c5980c066c7b0de0fd706d293a447469ca3bcbb1d222e8aa8001931d9911
// projection-signature: ed25519:asHXrgYk5ugLMBWbVWTvqSHHnoMmzyEN3WecuxohLjm7eL9vs9BQI3+ngDb3lqCQf5f9WhzpcaAnZYZ3yxf2BA==
// DO NOT EDIT.
import { describe, it, expect } from "vitest";
import { evaluatesScenarioAtomicity } from "./evaluates-scenario-atomicity.js";
import { createsScenarioAtomicityContext } from "../../../../../runtime/resolves-semantic-authority.js";
import { createsIndependentObligation } from "../../../../../runtime/projects-semantic-result.js";

describe("evaluates-scenario-atomicity — accept-a-scenario-with-one-obligation", () => {
  it("admits a scenario with exactly one obligation", async () => {
    const context = createsScenarioAtomicityContext({
      classifiedObligations: [
        createsIndependentObligation("only-obligation")
      ]
    });

    const signal = await evaluatesScenarioAtomicity(context);

    expect(signal.signalId).toBe("scenario-atomicity");
    expect(signal.disposition).toBe("SCENARIO_ATOMIC");
  });
});
