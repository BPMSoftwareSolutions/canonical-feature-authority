// @generated
// scenario-id: reject-a-scenario-with-multiple-obligations
// expectation: expects-scenario-rejection.expectation.json
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
