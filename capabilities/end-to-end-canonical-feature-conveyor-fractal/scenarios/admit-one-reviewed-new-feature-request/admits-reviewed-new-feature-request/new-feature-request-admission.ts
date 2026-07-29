// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
// scenario-id: admit-one-reviewed-new-feature-request
// obligation-id: establish-one-eligible-new-feature-request
// responsibility-id: admits-reviewed-new-feature-request
// signal-id: new-feature-request-admission
// DO NOT EDIT.
import type { AdmitReviewedNewFeatureRequestContext, NewFeatureRequestAdmission } from "./new-feature-request-admission.type.js";

export async function admitsReviewedNewFeatureRequest(
  context: AdmitReviewedNewFeatureRequestContext
): Promise<NewFeatureRequestAdmission> {
  return await context.edges.invokes(
    "admit-reviewed-new-feature-request",
    context
  );
}
