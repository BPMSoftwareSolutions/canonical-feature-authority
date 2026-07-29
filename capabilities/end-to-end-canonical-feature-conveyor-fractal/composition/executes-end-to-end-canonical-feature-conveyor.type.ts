// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: execute-complete-canonical-feature-conveyor
// obligation-id: execute-one-mechanically-continuous-feature-flow
// responsibility-id: executes-end-to-end-canonical-feature-conveyor
// signal-id: new-feature-terminal-disposition
// DO NOT EDIT.
export interface GovernedArtifactRef {
  readonly artifactId: string;
  readonly sha256: string;
  readonly mediaType: string;
}

export interface NewFeatureRequestAdmission {
  readonly disposition:
    | "ADMITTED"
    | "REJECTED";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly lineageId: string;
}

export interface AdmittedNewFeatureRequest {
  readonly disposition: "ADMITTED";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly lineageId: string;
}

export interface CompleteNewFeatureAuthority {
  readonly disposition: "COMPLETE";
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly authorityRef: GovernedArtifactRef;
  readonly lineageId: string;
}

export interface CompleteNewFeatureMaterialization {
  readonly disposition: "MATERIALIZED";
  readonly featureId: string;
  readonly authorityRef: GovernedArtifactRef;
  readonly artifactManifestRef: GovernedArtifactRef;
  readonly lineageId: string;
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

export interface NewFeatureTerminalDisposition {
  readonly disposition:
    | "PROJECTION_CONFORMS"
    | "PROJECTION_DIVERGES";
  readonly comparisonEvidenceRef: GovernedArtifactRef;
  readonly lineageId: string;
}

export interface EndToEndCanonicalFeatureConveyorContext {
  readonly reviewDisposition:
    | "REVIEWED"
    | "UNREVIEWED";
  readonly existingFeatureIds: ReadonlyArray<string>;
  readonly featureId: string;
  readonly requestRef: GovernedArtifactRef;
  readonly lineageId: string;
  readonly edges: {
    readonly invokes: <K extends "admit-reviewed-new-feature-request" | "adapt-new-feature-request-admission" | "project-complete-new-feature-authority" | "materialize-complete-new-feature" | "execute-newly-materialized-feature" | "compose-new-feature-execution-comparison" | "verify-complete-new-feature-lineage">(edgeId: K, input: K extends "admit-reviewed-new-feature-request" ? EndToEndCanonicalFeatureConveyorContext : K extends "adapt-new-feature-request-admission" ? NewFeatureRequestAdmission : K extends "project-complete-new-feature-authority" ? AdmittedNewFeatureRequest : K extends "materialize-complete-new-feature" ? CompleteNewFeatureAuthority : K extends "execute-newly-materialized-feature" ? CompleteNewFeatureMaterialization : K extends "compose-new-feature-execution-comparison" ? ObservedNewFeatureExecution : NewFeatureExecutionComparison) => Promise<K extends "admit-reviewed-new-feature-request" ? NewFeatureRequestAdmission : K extends "adapt-new-feature-request-admission" ? AdmittedNewFeatureRequest : K extends "project-complete-new-feature-authority" ? CompleteNewFeatureAuthority : K extends "materialize-complete-new-feature" ? CompleteNewFeatureMaterialization : K extends "execute-newly-materialized-feature" ? ObservedNewFeatureExecution : K extends "compose-new-feature-execution-comparison" ? NewFeatureExecutionComparison : NewFeatureTerminalDisposition>;
  };
}
