// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: admit-one-reviewed-new-feature-request
// obligation-id: establish-one-eligible-new-feature-request
// responsibility-id: admits-reviewed-new-feature-request
// signal-id: new-feature-request-admission
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface AdmitReviewedNewFeatureRequestContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: AdmitReviewedNewFeatureRequestContext) => Promise<NewFeatureRequestAdmission>;
  };
}

export interface NewFeatureRequestAdmission {
  readonly disposition:
    | "ADMITTED"
    | "REJECTED";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly lineageId: string;
}
