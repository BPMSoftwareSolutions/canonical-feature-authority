// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: adapt-one-new-feature-request-admission
// obligation-id: bridge-admission-to-admitted-request-contract
// responsibility-id: adapts-new-feature-request-admission
// signal-id: admitted-new-feature-request
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface AdaptNewFeatureRequestAdmissionContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: AdaptNewFeatureRequestAdmissionContext) => Promise<AdmittedNewFeatureRequest>;
  };
}

export interface AdmittedNewFeatureRequest {
  readonly disposition: "ADMITTED";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly lineageId: string;
}
