// @generated
// scenario-id: accept-a-scenario-with-one-obligation
// expectation: expects-scenario-acceptance.expectation.json
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
