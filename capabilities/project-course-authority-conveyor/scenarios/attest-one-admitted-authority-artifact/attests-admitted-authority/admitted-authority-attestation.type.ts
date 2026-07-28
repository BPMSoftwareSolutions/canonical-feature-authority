// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-admitted-authority-attestation-type-from-d6da023ee62f8ceb4f01cd472e33e80b1210224e256d9e362fe630f1ba75fdd0
// authority-sha256: sha256:e6cc9927a3d2261fc2114fcfb78bf0fd02667248cb5323e8964e40cc95ed2402
// body-sha256: sha256:b3f8b981bb0a42f737e04d53b78e8a1e63a47c6dac96a5c9a11a60dd2f579dfc
// projection-signature: ed25519:3ueI/UGOy9M0J3EAHoTXeVrAv1TUjOD83XSUzRM1pHlUMaW2NU+il7ngNPxVzRA0TNc0aEe/mtcRA2FfhWkqCA==
// DO NOT EDIT.
export type AdmittedAuthorityAttestationInput = unknown;
export type AdmittedAuthorityAttestationSignal = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface AttestsAdmittedAuthorityContext {
  readonly admitted: AdmittedAuthorityAttestationInput;
  readonly attest: (
    input: AdmittedAuthorityAttestationInput
  ) => Promise<AdmittedAuthorityAttestationSignal>;
}

export interface ProvesAttestsAdmittedAuthorityExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsAttestsAdmittedAuthorityConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
