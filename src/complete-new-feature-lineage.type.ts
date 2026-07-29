// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: verify-one-complete-new-feature-lineage
// obligation-id: prove-complete-new-feature-equivalence
// responsibility-id: verifies-complete-new-feature-lineage
// signal-id: complete-new-feature-equivalence
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface VerifyCompleteNewFeatureLineageContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: VerifyCompleteNewFeatureLineageContext) => Promise<NewFeatureTerminalDisposition>;
  };
}

export interface NewFeatureTerminalDisposition {
  readonly disposition:
    | "PROJECTION_CONFORMS"
    | "PROJECTION_DIVERGES";
  readonly comparisonEvidenceRef: GovernedArtifactRef;
  readonly lineageId: string;
}
