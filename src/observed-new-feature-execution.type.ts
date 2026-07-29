// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: execute-one-newly-materialized-feature
// obligation-id: execute-new-feature-through-admitted-semantics
// responsibility-id: executes-newly-materialized-feature
// signal-id: observed-new-feature-execution
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}
export interface ExecuteNewlyMaterializedFeatureContext {
  readonly edges: {
    readonly invokes: (edgeId: string, context: ExecuteNewlyMaterializedFeatureContext) => Promise<ObservedNewFeatureExecution>;
  };
}

export interface ObservedNewFeatureExecution {
  readonly disposition:
    | "CONFORMS"
    | "DIVERGES";
  readonly featureId: string;
  readonly artifactManifestRef: GovernedArtifactRef;
  readonly semanticObservationRef: GovernedArtifactRef;
  readonly projectedObservationRef: GovernedArtifactRef;
  readonly expectedSignalRef: GovernedArtifactRef;
  readonly astSourceCorrespondenceRef: GovernedArtifactRef;
  readonly lineageId: string;
}
