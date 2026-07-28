// @generated
// scenario-id: reject-a-scenario-with-no-obligation
// expectation: expects-scenario-rejection.expectation.json
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
