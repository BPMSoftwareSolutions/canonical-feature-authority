// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-projection-subject-discovery-type-from-76279e1c1167a332c99286fd06428cdfa2fe40a9593ad4d63805b44d1af1896d
// authority-sha256: sha256:3b82ede0c4b54464eaeee87cf3b3d7414e65a87b935de15cd432300cf429be96
// body-sha256: sha256:a7b7877adda28c2dcdcc078937b88a5b8f1eb66645601cf4c7becb024bad72c6
// projection-signature: ed25519:5hzXnLgHQkd+SNXyBaZERCGCA4Hyb28V4gy0F3nfxFG+Q7LhUSCTbNmp9MiJzRw8+LN+fFPoH+XCAlZEYFe7Dw==
// DO NOT EDIT.
export type ProjectionSubjectDiscoveryInput = unknown;
export type ProjectionSubjectDiscoverySignal = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface DiscoversProjectionSubjectsContext {
  readonly authority: ProjectionSubjectDiscoveryInput;
  readonly discover: (
    input: ProjectionSubjectDiscoveryInput
  ) => Promise<ProjectionSubjectDiscoverySignal>;
}

export interface ProvesDiscoversProjectionSubjectsExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsDiscoversProjectionSubjectsConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<ProjectionConformanceSignal>;
}
