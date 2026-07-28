// Reference stub — not a working implementation.
//
// Owns loading and validating a scenario's semantic authority chain
// (observation → evaluation → disposition → projection .sej.json files)
// and constructing the context object a generated body's evaluate call
// receives. Test files in this repository import
// `createsScenarioAtomicityContext` from here as the test-fixture builder
// for that context.

import type { EvaluateScenarioAtomicityContext } from "../capabilities/validate-feature-scenario-atomicity/scenarios/reject-a-scenario-with-multiple-obligations/evaluates-scenario-atomicity/scenario-atomicity.type.js";

export interface ScenarioAtomicityFixture {
  readonly classifiedObligations: ReadonlyArray<{
    readonly obligationId: string;
    readonly independentlyEvaluable: boolean | "unresolved";
  }>;
}

export function createsScenarioAtomicityContext(
  fixture: ScenarioAtomicityFixture
): EvaluateScenarioAtomicityContext {
  throw new Error(
    "createsScenarioAtomicityContext is a documentation stub — see architecture/defines-authority-projection-boundary.md"
  );
}

export function resolvesSemanticAuthority() {
  throw new Error(
    "resolvesSemanticAuthority is a documentation stub — see architecture/defines-authority-projection-boundary.md"
  );
}
