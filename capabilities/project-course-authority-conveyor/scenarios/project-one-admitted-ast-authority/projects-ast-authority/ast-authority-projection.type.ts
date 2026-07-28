// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-ast-authority-projection-type-from-d4310b23a60bfd090658453b22d66cbb696540ceecb0e10c6b33a9a3771184b5
// authority-sha256: sha256:cd020d5078d51ea6a011c9bf7b5d567da4f753ebd85142df0c4a8e886aec2858
// body-sha256: sha256:ddb50c0dc04b0b90b2e55c117e0596e37159b64632bfff2d371ef34952534ffa
// projection-signature: ed25519:EIcTgqvSuX4H2Z+RcFY4qBpcTEe9a+Zij+41ebioAMn7SLvvDEXOaWAH8Mk14yIzd4ixH7h00fJwD63Qj/1RAg==
// DO NOT EDIT.
export type AstAuthorityProjectionInput = unknown;
export type AstAuthorityProjectionSignal = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface ProjectsAstAuthorityContext {
  readonly semanticAuthority: AstAuthorityProjectionInput;
  readonly project: (
    input: AstAuthorityProjectionInput
  ) => Promise<AstAuthorityProjectionSignal>;
}

export interface ProvesProjectsAstAuthorityExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsProjectsAstAuthorityConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
