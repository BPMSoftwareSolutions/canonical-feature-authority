// @generated
// feature-id: implement-one-new-feature-end-to-end-through-a-governed-conveyor
// scenario-id: project-one-complete-new-feature-authority
// obligation-id: establish-one-complete-new-feature-authority
// responsibility-id: projects-complete-new-feature-authority
// signal-id: complete-new-feature-authority
// DO NOT EDIT.
import type { ProjectCompleteNewFeatureAuthorityContext, CompleteNewFeatureAuthority } from "./complete-new-feature-authority.type.js";

export async function projectsCompleteNewFeatureAuthority(
  context: ProjectCompleteNewFeatureAuthorityContext
): Promise<CompleteNewFeatureAuthority> {
  return await context.edges.invokes(
    "project-complete-new-feature-authority",
    context
  );
}
