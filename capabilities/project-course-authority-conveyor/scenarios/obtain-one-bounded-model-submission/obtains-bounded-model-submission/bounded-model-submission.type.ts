// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-bounded-model-submission-type-from-0a4bf43e5ac0f4ad10f058a7dae87b5b50c1e8f2ee999b24ea43df499723575f
// authority-sha256: sha256:d447788515c2a8b2c90c28a748c73ccd169fc9372688bdf1ba15cf07f68e2705
// body-sha256: sha256:011acdae43cf2422db4c04886f9cd49239e55a2c95cf4e7c32e4cda8beca83a9
// projection-signature: ed25519:oTgpx9c/zTqWSBj2Vizlvzwa81pXw+NqEdBLLEm7meRQ54uyVncpZ+6UD2tv8BbGu6iNBx15/R+b+TnyvFnTCA==
// DO NOT EDIT.
export type BoundedModelSubmissionInput = unknown;
export type BoundedModelSubmissionSignal = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface ObtainsBoundedModelSubmissionContext {
  readonly request: BoundedModelSubmissionInput;
  readonly obtain: (
    input: BoundedModelSubmissionInput
  ) => Promise<BoundedModelSubmissionSignal>;
}

export interface ProvesObtainsBoundedModelSubmissionExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsObtainsBoundedModelSubmissionConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
