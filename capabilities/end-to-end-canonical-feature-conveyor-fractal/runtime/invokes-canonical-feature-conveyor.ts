// @generated
// authority-ref: implementation-artifact:runtime-adapter
// projector: canonical-feature-conveyor-implementation-projector.v1
// DO NOT EDIT.
import { executesEndToEndCanonicalFeatureConveyor } from "../composition/executes-end-to-end-canonical-feature-conveyor.js";
import type { EndToEndCanonicalFeatureConveyorContext, NewFeatureTerminalDisposition } from "../composition/executes-end-to-end-canonical-feature-conveyor.type.js";
import type { SemanticAuthorityInterpreter } from "./interprets-canonical-feature-semantic-authority.js";
import { registersAdmitReviewedNewFeatureRequest } from "../scenarios/admit-one-reviewed-new-feature-request/admits-reviewed-new-feature-request/registers-admit-reviewed-new-feature-request.js";
import { registersAdaptNewFeatureRequestAdmission } from "../scenarios/adapt-one-new-feature-request-admission/adapts-new-feature-request-admission/registers-adapt-new-feature-request-admission.js";
import { registersProjectCompleteNewFeatureAuthority } from "../scenarios/project-one-complete-new-feature-authority/projects-complete-new-feature-authority/registers-project-complete-new-feature-authority.js";
import { registersMaterializeCompleteNewFeature } from "../scenarios/materialize-one-complete-new-feature/materializes-complete-new-feature/registers-materialize-complete-new-feature.js";
import { registersExecuteNewlyMaterializedFeature } from "../scenarios/execute-one-newly-materialized-feature/executes-newly-materialized-feature/registers-execute-newly-materialized-feature.js";
import { registersComposeNewFeatureExecutionComparison } from "../scenarios/compose-one-new-feature-execution-comparison/composes-new-feature-execution-comparison/registers-compose-new-feature-execution-comparison.js";
import { registersVerifyCompleteNewFeatureLineage } from "../scenarios/verify-one-complete-new-feature-lineage/verifies-complete-new-feature-lineage/registers-verify-complete-new-feature-lineage.js";

export interface InvokeCanonicalFeatureConveyorContext {
  readonly request: Omit<EndToEndCanonicalFeatureConveyorContext, "edges">;
  readonly interpreter: SemanticAuthorityInterpreter;
}

export async function invokesCanonicalFeatureConveyor(
  context: InvokeCanonicalFeatureConveyorContext
): Promise<NewFeatureTerminalDisposition> {
  const registrations = [
    registersAdmitReviewedNewFeatureRequest(context.interpreter),
    registersAdaptNewFeatureRequestAdmission(context.interpreter),
    registersProjectCompleteNewFeatureAuthority(context.interpreter),
    registersMaterializeCompleteNewFeature(context.interpreter),
    registersExecuteNewlyMaterializedFeature(context.interpreter),
    registersComposeNewFeatureExecutionComparison(context.interpreter),
    registersVerifyCompleteNewFeatureLineage(context.interpreter)
  ];
  const handlers = new Map(
    registrations.map(registration => [
      registration.edgeId,
      registration.invokes
    ])
  );
  const invokes = async (
    edgeId: string,
    input: unknown
  ): Promise<unknown> => {
    const handler = handlers.get(edgeId);
    if (handler === undefined) {
      throw new Error(`UNREGISTERED_CANONICAL_FEATURE_EDGE: ${edgeId}`);
    }
    return handler(input);
  };
  const conveyorContext: EndToEndCanonicalFeatureConveyorContext = {
    ...context.request,
    edges: {
      invokes: invokes as EndToEndCanonicalFeatureConveyorContext["edges"]["invokes"]
    }
  };
  return executesEndToEndCanonicalFeatureConveyor(
    conveyorContext
  );
}
