// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-conveyor-stage-transition-type-from-c400f5f6d41da803ab886391621f73e5f04a68ee88bab980fb31870e6d142697
// authority-sha256: sha256:9f9fd6307cb343afa4cce793203640ff8ad6de002e76e6f78cd00db77468f4ff
// body-sha256: sha256:115c35168a95fe4745e33da75910cebe97185e7be0c6b4517f10dd39214afa01
// projection-signature: ed25519:5hZv/IMDf7LFhlUnnzLi1fmVFscjQvOh5JLyBk4vLF5jp3glhGPJ8zCME18Zy2SjObHnBuxcOQPxwHb6Qi7pDg==
// DO NOT EDIT.
export type ConveyorStageTransitionInput = unknown;
export type ConveyorStageTransitionSignal = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface ResolvesConveyorStageContext {
  readonly plan: ConveyorStageTransitionInput;
  readonly resolve: (
    input: ConveyorStageTransitionInput
  ) => Promise<ConveyorStageTransitionSignal>;
}

export interface ProvesResolvesConveyorStageExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsResolvesConveyorStageConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
