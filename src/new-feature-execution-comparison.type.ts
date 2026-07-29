// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: compose-one-new-feature-execution-comparison
// obligation-id: compose-complete-execution-comparison
// responsibility-id: composes-new-feature-execution-comparison
// signal-id: new-feature-execution-comparison
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface ComposeNewFeatureExecutionComparisonContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: ComposeNewFeatureExecutionComparisonContext) => Promise<NewFeatureExecutionComparison>;
  };
}

export interface NewFeatureExecutionComparison {
  readonly disposition: "COMPLETE";
  readonly featureId: string;
  readonly semanticObservationRef: GovernedArtifactRef;
  readonly projectedObservationRef: GovernedArtifactRef;
  readonly expectedSignalRef: GovernedArtifactRef;
  readonly astSourceCorrespondenceRef: GovernedArtifactRef;
  readonly comparisonEvidenceRef: GovernedArtifactRef;
  readonly lineageId: string;
}
