// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-authority-resumability-type-from-917f1bd6d52f58e2be0698a08d1a77330b85e98cfc437f63d535c7b95010f8f4
// authority-sha256: sha256:1016bba7db1f2727e3e38d3bb29787b803339b733126866ef8f6bce709576d8c
// body-sha256: sha256:178cc81503ad21b6751208ceb4279ee28db2e920f209cfd0b1bf72016e38ff25
// projection-signature: ed25519:LV94yyVvIkL45TzgFU1kudvJkOmoqk2BYgFSTNntn6wMxZapWwlLVMS4RGWaOZ2WeBEqDl8n8XvlKSOIn2TcDg==
// DO NOT EDIT.
export type AuthorityResumabilityInput = unknown;
export type AuthorityResumabilitySignal = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface EvaluatesResumableAuthorityContext {
  readonly candidate: AuthorityResumabilityInput;
  readonly evaluate: (
    input: AuthorityResumabilityInput
  ) => Promise<AuthorityResumabilitySignal>;
}

export interface ProvesEvaluatesResumableAuthorityExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsEvaluatesResumableAuthorityConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
