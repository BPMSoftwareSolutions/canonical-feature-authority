// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: execute-complete-canonical-feature-conveyor
// obligation-id: execute-one-mechanically-continuous-feature-flow
// responsibility-id: executes-end-to-end-canonical-feature-conveyor
// signal-id: new-feature-terminal-disposition
// DO NOT EDIT.
import type { EndToEndCanonicalFeatureConveyorContext, NewFeatureTerminalDisposition } from "./executes-end-to-end-canonical-feature-conveyor.type.js";

export async function executesEndToEndCanonicalFeatureConveyor(
  context: EndToEndCanonicalFeatureConveyorContext
): Promise<NewFeatureTerminalDisposition> {
  const admission = await context.edges.invokes(
    "admit-reviewed-new-feature-request",
    context
  );
  const admittedRequest = await context.edges.invokes(
    "adapt-new-feature-request-admission",
    admission
  );
  const authority = await context.edges.invokes(
    "project-complete-new-feature-authority",
    admittedRequest
  );
  const materialization = await context.edges.invokes(
    "materialize-complete-new-feature",
    authority
  );
  const execution = await context.edges.invokes(
    "execute-newly-materialized-feature",
    materialization
  );
  const comparison = await context.edges.invokes(
    "compose-new-feature-execution-comparison",
    execution
  );
  const disposition = await context.edges.invokes(
    "verify-complete-new-feature-lineage",
    comparison
  );
  return disposition;
}
