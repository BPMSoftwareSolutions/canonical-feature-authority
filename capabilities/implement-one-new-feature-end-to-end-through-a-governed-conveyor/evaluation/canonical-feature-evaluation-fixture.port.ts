/**
 * Governed boundary for the evaluation fixture operations declared by canonical-feature-evaluation-fixture-port.v1.
 */
// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: execute-one-newly-materialized-feature
// obligation-id: execute-new-feature-through-admitted-semantics
// responsibility-id: executes-newly-materialized-feature
// signal-id: observed-new-feature-execution
// DO NOT EDIT.
export interface CanonicalFeatureEvaluationFixturePort {
  readonly loadsSemanticFixture: (input: unknown) => Promise<unknown>;

  readonly loadsProjectedFixture: (input: unknown) => Promise<unknown>;

  readonly executesSemanticAndProjectedSurfaces: (input: unknown) => Promise<unknown>;
}
