// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-bounded-model-request-projection-type-from-1f7d7e7b5f831d754997f81d734d98b1e10e7e80dcf6c893997e00245d47f4c4
// authority-sha256: sha256:1f51aa8c25f1db64cb7cdf706b0b896d8cd36eca262fe80258c63f67e84e30d3
// body-sha256: sha256:8453827227b07728005f5a8fb15866a2a1f976a05cf437de98e1305a462958fa
// projection-signature: ed25519:XD5Hjqug/ttZD7gvBMpCiZ0wgBT8K39UYPWAy5m0QcvDPp+cHukezrjmCR/vimYwfWbe6Kt3qMZNgPKjN1C0CA==
// DO NOT EDIT.
export type BoundedModelRequestProjectionInput = unknown;
export type BoundedModelRequestProjectionSignal = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface ProjectsBoundedModelRequestContext {
  readonly stage: BoundedModelRequestProjectionInput;
  readonly project: (
    input: BoundedModelRequestProjectionInput
  ) => Promise<BoundedModelRequestProjectionSignal>;
}

export interface ProvesProjectsBoundedModelRequestExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsProjectsBoundedModelRequestConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
