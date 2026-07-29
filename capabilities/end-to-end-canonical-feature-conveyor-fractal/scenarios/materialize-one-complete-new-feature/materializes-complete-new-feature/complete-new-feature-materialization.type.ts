// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: materialize-one-complete-new-feature
// obligation-id: materialize-only-admitted-new-feature-authority
// responsibility-id: materializes-complete-new-feature
// signal-id: complete-new-feature-materialization
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface MaterializeCompleteNewFeatureContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: MaterializeCompleteNewFeatureContext) => Promise<CompleteNewFeatureMaterialization>;
  };
}

export interface CompleteNewFeatureMaterialization {
  readonly disposition: "MATERIALIZED";
  readonly featureId: string;
  readonly authorityRef: GovernedArtifactRef;
  readonly artifactManifestRef: GovernedArtifactRef;
  readonly lineageId: string;
}
