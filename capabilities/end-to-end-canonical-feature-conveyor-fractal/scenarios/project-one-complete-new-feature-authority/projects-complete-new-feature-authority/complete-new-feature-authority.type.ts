// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: project-one-complete-new-feature-authority
// obligation-id: establish-one-complete-new-feature-authority
// responsibility-id: projects-complete-new-feature-authority
// signal-id: complete-new-feature-authority
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface ProjectCompleteNewFeatureAuthorityContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: ProjectCompleteNewFeatureAuthorityContext) => Promise<CompleteNewFeatureAuthority>;
  };
}

export interface CompleteNewFeatureAuthority {
  readonly disposition: "COMPLETE";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly authorityRef: GovernedArtifactRef;
  readonly lineageId: string;
}
