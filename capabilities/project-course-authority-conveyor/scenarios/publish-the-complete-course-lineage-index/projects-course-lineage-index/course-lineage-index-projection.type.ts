// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-course-lineage-index-projection-type-from-563923bd7d5adb53b9fe5d01a5ffaf18b7287816fd956d4466e9cbe53f4d5391
// authority-sha256: sha256:4026379d61b90784dec5d5fceed9501bb8ff9a3a1503f1f591ac3fe4da466228
// body-sha256: sha256:a250823384221dda7b164d820b05f38e66f66540cb737dd983b8dc9202d49bf4
// projection-signature: ed25519:JrBLqNvK+U579xhD32trAJ33fs1iyXKwNAG5esclB04HZKxUQNU9O0oUriZ2KeqlVVnCgUuRSmim894ZmZE8Bg==
// DO NOT EDIT.
export type CourseLineageIndexProjectionInput = unknown;
export type CourseLineageIndexProjectionSignal = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface ProjectsCourseLineageIndexContext {
  readonly lineage: CourseLineageIndexProjectionInput;
  readonly project: (
    input: CourseLineageIndexProjectionInput
  ) => Promise<CourseLineageIndexProjectionSignal>;
}

export interface ProvesProjectsCourseLineageIndexExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsProjectsCourseLineageIndexConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
