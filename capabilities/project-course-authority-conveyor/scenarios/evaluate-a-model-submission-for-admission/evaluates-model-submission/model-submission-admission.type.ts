// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-model-submission-admission-type-from-c9cdf291ea986f51a2cc4d8ef23a36d06ffa7de56e155d9d0ad61d81bd0b6728
// authority-sha256: sha256:ff4f6386043f93d8556b94a52a59a2da877dcc45bb8af1e552a1aecf3fafbd9b
// body-sha256: sha256:8fc12061281e78b528e95e999213ff721aaa1d57c25ccd71540ffdd923096f08
// projection-signature: ed25519:1NstYK+wvddcxhYKjEhSMs7j9efsjHad/XV6DSZ03E7bqJymE/WvCSx0tCd7DZfnRaYFEVi/xtg8xcl1a1RbCw==
// DO NOT EDIT.
export type ModelSubmissionAdmissionInput = unknown;
export type ModelSubmissionAdmissionSignal = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface EvaluatesModelSubmissionContext {
  readonly submission: ModelSubmissionAdmissionInput;
  readonly evaluate: (
    input: ModelSubmissionAdmissionInput
  ) => Promise<ModelSubmissionAdmissionSignal>;
}

export interface ProvesEvaluatesModelSubmissionExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsEvaluatesModelSubmissionConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
