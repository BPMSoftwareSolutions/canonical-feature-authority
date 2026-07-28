// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-red-conveyor-stop-type-from-cd27c890d5fd4b75b75be08efcaf0e884f65efe14505cc19e717d5798bcff4cd
// authority-sha256: sha256:60a4c0a103db321390fa715162a20ef3c345146b83d0e799160b151d744c4ecf
// body-sha256: sha256:2aae98b0f143bf90ef2a669d6ef7a1537563253c9445062a6393626fc2592f05
// projection-signature: ed25519:sc3aPbsOhvi36E2HpCNwsmFslwCkCQbF5XL+bfZWngvrgKYUntyhF2KjXHnuRZiaGi74bMmU+HSRITKkGK83CA==
// DO NOT EDIT.
export type RedConveyorStopInput = unknown;
export type RedConveyorStopSignal = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface ResolvesRedConveyorTransitionContext {
  readonly disposition: RedConveyorStopInput;
  readonly resolve: (
    input: RedConveyorStopInput
  ) => Promise<RedConveyorStopSignal>;
}

export interface ProvesResolvesRedConveyorTransitionExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsResolvesRedConveyorTransitionConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
