// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-projects-ast-authority-conformance-from-1da8d6f37ee5fdc7c48da0c886faaee10896e1450984d9289722e164a737337d
// authority-sha256: sha256:434657e63acddf742a7c25d00243994a1046d9a59c62be531bf3db511f8cf95f
// body-sha256: sha256:722f7a0464a1189c0134cfff253e6e070e4f5b5397b87afec98d9f6f17395c44
// projection-signature: ed25519:T0A5fvcjw1aLbjCTys4DjojZmOK44dMQxxVc+5VNJHgltqzaS90JU6gBe/IHvZGfH8kS3vvkEDdnXSHmv40BAQ==
// DO NOT EDIT.
import type {
  RunsProjectsAstAuthorityConformanceContext,
  ProjectionConformanceSignal
} from "./ast-authority-projection.type.js";

export async function runsProjectsAstAuthorityConformance(
  context: RunsProjectsAstAuthorityConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
