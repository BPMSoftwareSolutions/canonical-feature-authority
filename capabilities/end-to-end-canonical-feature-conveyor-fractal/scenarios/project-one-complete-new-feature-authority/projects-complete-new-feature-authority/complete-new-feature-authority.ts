// @generated
// feature-id: end-to-end-canonical-feature-conveyor-fractal
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
