// @generated
// scenario-id: reject-an-ambiguously-classified-scenario
// expectation: expects-scenario-rejection.expectation.json
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
