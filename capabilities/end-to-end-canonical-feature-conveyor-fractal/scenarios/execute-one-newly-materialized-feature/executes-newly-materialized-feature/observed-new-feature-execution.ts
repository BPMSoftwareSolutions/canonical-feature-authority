// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: execute-one-newly-materialized-feature
// obligation-id: execute-new-feature-through-admitted-semantics
// responsibility-id: executes-newly-materialized-feature
// signal-id: observed-new-feature-execution
// DO NOT EDIT.
import type { ExecuteNewlyMaterializedFeatureContext, ObservedNewFeatureExecution } from "./observed-new-feature-execution.type.js";

export async function executesNewlyMaterializedFeature(
  context: ExecuteNewlyMaterializedFeatureContext
): Promise<ObservedNewFeatureExecution> {
  return await context.edges.invokes(
    "execute-newly-materialized-feature",
    context
  );
}
