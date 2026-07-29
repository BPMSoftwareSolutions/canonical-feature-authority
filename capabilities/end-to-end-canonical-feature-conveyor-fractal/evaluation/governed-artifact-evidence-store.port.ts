/**
 * Governed RFC8785-JCS and SHA-256 evidence boundary declared by governed-artifact-evidence-store.v1 and semantic-execution-evidence.v1.
 */
// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: compose-one-new-feature-execution-comparison
// obligation-id: compose-complete-execution-comparison
// responsibility-id: composes-new-feature-execution-comparison
// signal-id: new-feature-execution-comparison
// DO NOT EDIT.
export interface GovernedArtifactEvidenceStorePort {
  readonly writes: (input: unknown) => Promise<unknown>;

  readonly resolves: (input: unknown) => Promise<unknown>;

  readonly verifies: (input: unknown) => Promise<unknown>;

  readonly writesExecutionComparisonEvidence: (input: unknown) => Promise<unknown>;

  readonly resolvesAndVerifiesComparisonEvidence: (input: unknown) => Promise<unknown>;
}
