// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-bounded-model-submission-body-reproduction-type-from-a0c127366663d74c3f68ed15fe49740408d251e037cdf69937bf905f10741395
// authority-sha256: sha256:9c76baf9e22acfb8fd34f840b814f36d69967364932c6f63f57c27e3a464cce6
// body-sha256: sha256:8e4b9b1d9942286d4e2a7d03078e9c4e386470479527b337ed6a6867c0bbeb9e
// projection-signature: ed25519:lk3lWpBXYz4tt9ldilZz3bfWYY+NgBephly+tadJ28qYTFbY8WO3QKuvLqM+mHOSNk7gt7TFH5svxgz9LYx9Dg==
// DO NOT EDIT.
export type BoundedModelSubmissionProjectionSubject = unknown;
export type BoundedModelSubmissionBodyReproduction = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface ReproducesBoundedModelSubmissionBodyContext {
  readonly subject: BoundedModelSubmissionProjectionSubject;
  readonly reproduce: (
    input: BoundedModelSubmissionProjectionSubject
  ) => Promise<BoundedModelSubmissionBodyReproduction>;
}

export interface ProvesBoundedModelSubmissionBodyReproductionExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsBoundedModelSubmissionBodyReproductionConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
