// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: verify-one-complete-new-feature-lineage
// obligation-id: prove-complete-new-feature-equivalence
// responsibility-id: verifies-complete-new-feature-lineage
// signal-id: complete-new-feature-equivalence
// DO NOT EDIT.
import type { VerifyCompleteNewFeatureLineageContext, NewFeatureTerminalDisposition } from "./complete-new-feature-lineage.type.js";

export async function verifiesCompleteNewFeatureLineage(
  context: VerifyCompleteNewFeatureLineageContext
): Promise<NewFeatureTerminalDisposition> {
  return await context.edges.invokes(
    "verify-complete-new-feature-lineage",
    context
  );
}
