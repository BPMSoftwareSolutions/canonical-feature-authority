// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: adapt-one-new-feature-request-admission
// obligation-id: bridge-admission-to-admitted-request-contract
// responsibility-id: adapts-new-feature-request-admission
// signal-id: admitted-new-feature-request
// DO NOT EDIT.
import type { AdaptNewFeatureRequestAdmissionContext, AdmittedNewFeatureRequest } from "./admitted-new-feature-request.type.js";

export async function adaptsNewFeatureRequestAdmission(
  context: AdaptNewFeatureRequestAdmissionContext
): Promise<AdmittedNewFeatureRequest> {
  return await context.edges.invokes(
    "adapt-new-feature-request-admission",
    context
  );
}
