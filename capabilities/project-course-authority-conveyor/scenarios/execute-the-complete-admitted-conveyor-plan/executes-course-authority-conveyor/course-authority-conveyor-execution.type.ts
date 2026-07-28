// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-course-authority-conveyor-execution-type-from-312653fd5128fbf86fa972d6dba04c4c93f47905a5f4bb0140d7dc46b48f2379
// authority-sha256: sha256:9f6c2c77eba95b6ef154a89f2b94233179731ebc548502e882b146d32c19c98e
// body-sha256: sha256:f524a707272c6e8759ff19cdf314487945a675124df809880b6c3b34bea14291
// projection-signature: ed25519:yvFieW5mEkVTuz3iUmI9ARxB2V6/f6migRsfLYC5H0bUWSdsEwIKpcMCrBhXBy4ITq/N7oguH6F4N+mVCSpmBw==
// DO NOT EDIT.
export type CourseAuthorityConveyorExecutionInput = unknown;
export type CourseConveyorSignal = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface CourseConveyorContext {
  readonly plan: CourseAuthorityConveyorExecutionInput;
  readonly execute: (
    input: CourseAuthorityConveyorExecutionInput
  ) => Promise<CourseConveyorSignal>;
}

export interface ProvesExecutesCourseAuthorityConveyorExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsExecutesCourseAuthorityConveyorConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
