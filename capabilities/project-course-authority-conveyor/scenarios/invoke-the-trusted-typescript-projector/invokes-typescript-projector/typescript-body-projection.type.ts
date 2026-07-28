// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-typescript-body-projection-type-from-e664c5978418f1d1b5f0fd17071dbc5e8ce9fa2b97b722bfd9e7c4059b2c5fbb
// authority-sha256: sha256:1906af9ea1e483741346bbd2689493c629165eb1a2aa88f90c1507ce3f0709c0
// body-sha256: sha256:01d75344aff9ccb2cf6bed0f4d9ffe3eca39d46bc3ab5882fe9a3d3f0cc0037e
// projection-signature: ed25519:EX0PS8LSMkd0dVI1BzmD/jKy1F9lb5eRAf0N7KlFO3vXsAbCSs61JH6gWlxIZYtnxPpiO07jpS+dSWzO/kw5Bw==
// DO NOT EDIT.
export type TypescriptBodyProjectionInput = unknown;
export type TypescriptBodyProjectionSignal = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface InvokesTypescriptProjectorContext {
  readonly astAuthority: TypescriptBodyProjectionInput;
  readonly project: (
    input: TypescriptBodyProjectionInput
  ) => Promise<TypescriptBodyProjectionSignal>;
}

export interface ProvesInvokesTypescriptProjectorExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsInvokesTypescriptProjectorConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
