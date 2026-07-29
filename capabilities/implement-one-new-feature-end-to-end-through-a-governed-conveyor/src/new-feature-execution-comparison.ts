// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: compose-one-new-feature-execution-comparison
// obligation-id: compose-complete-execution-comparison
// responsibility-id: composes-new-feature-execution-comparison
// signal-id: new-feature-execution-comparison
// DO NOT EDIT.
import type { ComposeNewFeatureExecutionComparisonContext, NewFeatureExecutionComparison } from "./new-feature-execution-comparison.type.js";

export async function composesNewFeatureExecutionComparison(
  context: ComposeNewFeatureExecutionComparisonContext
): Promise<NewFeatureExecutionComparison> {
  return await context.edges.invokes(
    "compose-new-feature-execution-comparison",
    context
  );
}
