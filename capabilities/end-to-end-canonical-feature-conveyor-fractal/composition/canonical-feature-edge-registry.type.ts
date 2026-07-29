// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: execute-complete-canonical-feature-conveyor
// obligation-id: execute-one-mechanically-continuous-feature-flow
// responsibility-id: executes-end-to-end-canonical-feature-conveyor
// signal-id: new-feature-terminal-disposition
// DO NOT EDIT.
import type { EndToEndCanonicalFeatureConveyorContext, NewFeatureRequestAdmission, AdmittedNewFeatureRequest, CompleteNewFeatureAuthority, CompleteNewFeatureMaterialization, ObservedNewFeatureExecution, NewFeatureExecutionComparison, NewFeatureTerminalDisposition } from "./executes-end-to-end-canonical-feature-conveyor.type.js";

export interface CanonicalFeatureEdgeRegistry {
  readonly invokes: <K extends "admit-reviewed-new-feature-request" | "adapt-new-feature-request-admission" | "project-complete-new-feature-authority" | "materialize-complete-new-feature" | "execute-newly-materialized-feature" | "compose-new-feature-execution-comparison" | "verify-complete-new-feature-lineage">(edgeId: K, input: K extends "admit-reviewed-new-feature-request" ? EndToEndCanonicalFeatureConveyorContext : K extends "adapt-new-feature-request-admission" ? NewFeatureRequestAdmission : K extends "project-complete-new-feature-authority" ? AdmittedNewFeatureRequest : K extends "materialize-complete-new-feature" ? CompleteNewFeatureAuthority : K extends "execute-newly-materialized-feature" ? CompleteNewFeatureMaterialization : K extends "compose-new-feature-execution-comparison" ? ObservedNewFeatureExecution : NewFeatureExecutionComparison) => Promise<K extends "admit-reviewed-new-feature-request" ? NewFeatureRequestAdmission : K extends "adapt-new-feature-request-admission" ? AdmittedNewFeatureRequest : K extends "project-complete-new-feature-authority" ? CompleteNewFeatureAuthority : K extends "materialize-complete-new-feature" ? CompleteNewFeatureMaterialization : K extends "execute-newly-materialized-feature" ? ObservedNewFeatureExecution : K extends "compose-new-feature-execution-comparison" ? NewFeatureExecutionComparison : NewFeatureTerminalDisposition>;
}
