// @generated
// authority-ref: implementation-artifact:runtime-adapter
// projector: canonical-feature-conveyor-implementation-projector.v1
// DO NOT EDIT.
import { executesEndToEndCanonicalFeatureConveyor } from "../composition/executes-end-to-end-canonical-feature-conveyor.js";
import type { EndToEndCanonicalFeatureConveyorContext, NewFeatureTerminalDisposition } from "../composition/executes-end-to-end-canonical-feature-conveyor.type.js";
import type { SemanticAuthorityInterpreter } from "./interprets-canonical-feature-semantic-authority.js";
import { registersAdmitReviewedNewFeatureRequest } from "./registers-admit-reviewed-new-feature-request.js";
import { registersAdaptNewFeatureRequestAdmission } from "./registers-adapt-new-feature-request-admission.js";
import { registersProjectCompleteNewFeatureAuthority } from "./registers-project-complete-new-feature-authority.js";
import { registersMaterializeCompleteNewFeature } from "./registers-materialize-complete-new-feature.js";
import { registersExecuteNewlyMaterializedFeature } from "./registers-execute-newly-materialized-feature.js";
import { registersComposeNewFeatureExecutionComparison } from "./registers-compose-new-feature-execution-comparison.js";
import { registersVerifyCompleteNewFeatureLineage } from "./registers-verify-complete-new-feature-lineage.js";

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
