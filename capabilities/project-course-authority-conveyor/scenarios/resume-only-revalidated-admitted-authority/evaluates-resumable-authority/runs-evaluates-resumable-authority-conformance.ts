// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-evaluates-resumable-authority-conformance-from-ff3ec2a8fcc7f095a354966898ae1912e65c945bb3d40eefad8d6d6dacfb8c01
// authority-sha256: sha256:69da94e8b15e3585bbf43b92fadb289822b888489ae84ba2b792357fd9c2f13b
// body-sha256: sha256:d70027eba9efab984b9d5d73650f0476bb4a9d29ebcd944662065630d985b32f
// projection-signature: ed25519:cjtUqzjak0Gs+NT5NZYbltGwTrlUqwDGROsBuyzYlESF8WcTaXWEZSabzAtYwbXreXSwzGIsghkMOz40UX+LAw==
// DO NOT EDIT.
import type {
  RunsEvaluatesResumableAuthorityConformanceContext,
  ProjectionConformanceSignal
} from "./authority-resumability.type.js";

export async function runsEvaluatesResumableAuthorityConformance(
  context: RunsEvaluatesResumableAuthorityConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
