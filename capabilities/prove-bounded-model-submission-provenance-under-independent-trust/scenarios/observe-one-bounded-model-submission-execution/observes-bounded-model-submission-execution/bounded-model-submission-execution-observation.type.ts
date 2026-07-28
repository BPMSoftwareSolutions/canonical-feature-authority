// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-bounded-model-submission-execution-observation-type-from-4d4bf9aa2ac632e24b612ae94cc9827e4b67f443a5d10f355b2b7da9d1b292b0
// authority-sha256: sha256:7c68e1e68c897e90406f813f6c8af15f161e4ba681ebbc862063ed226a84d59f
// body-sha256: sha256:5b33010e01cefc5551f9431060af0f35d7de4126ecc61ed47fc62267fe435c2a
// projection-signature: ed25519:jUzPzUopTqnX6Kp+egcm2bNNu3BdcsF51S6M3bMaZpvRacybcaDfBENuJkcFuYMQ/gGmlkLZZ2zzM2ZGXq83AA==
// DO NOT EDIT.
export type BoundedModelSubmissionExecutionSubject = unknown;
export type BoundedModelSubmissionExecutionObservation = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface ObservesBoundedModelSubmissionExecutionContext {
  readonly subject: BoundedModelSubmissionExecutionSubject;
  readonly observe: (
    input: BoundedModelSubmissionExecutionSubject
  ) => Promise<BoundedModelSubmissionExecutionObservation>;
}

export interface ProvesBoundedModelSubmissionExecutionObservationExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsBoundedModelSubmissionExecutionObservationConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
