// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-projected-body-conformance-type-from-5be7ee3575a2be57dccbea12f368edb504e6be7c053189902ea72ec743a42bb8
// authority-sha256: sha256:07f379e2f325e7898076578ccc4262632a531af49118535b1b5466bec301a523
// body-sha256: sha256:7d78056763b074e4eafb4500742b33c82fc4273df0a71bd6aa3714dc9c38510c
// projection-signature: ed25519:kZXutdijO8ZKXeB7sBcKUBRpFwO7HpTTQOLRBoDrPcE7FsZX0c0kRsI8yrlEPlOPD6yE9c4mgk/vtgD1B57iCQ==
// DO NOT EDIT.
export type ProjectedBodyConformanceInput = unknown;
export type ProjectedBodyConformanceSignal = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface EvaluatesProjectedBodyContext {
  readonly projectedBody: ProjectedBodyConformanceInput;
  readonly evaluate: (
    input: ProjectedBodyConformanceInput
  ) => Promise<ProjectedBodyConformanceSignal>;
}

export interface ProvesEvaluatesProjectedBodyExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsEvaluatesProjectedBodyConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
