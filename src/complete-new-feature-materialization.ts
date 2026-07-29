// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: materialize-one-complete-new-feature
// obligation-id: materialize-only-admitted-new-feature-authority
// responsibility-id: materializes-complete-new-feature
// signal-id: complete-new-feature-materialization
// DO NOT EDIT.
import type { MaterializeCompleteNewFeatureContext, CompleteNewFeatureMaterialization } from "./complete-new-feature-materialization.type.js";

export async function materializesCompleteNewFeature(
  context: MaterializeCompleteNewFeatureContext
): Promise<CompleteNewFeatureMaterialization> {
  return await context.edges.invokes(
    "materialize-complete-new-feature",
    context
  );
}
