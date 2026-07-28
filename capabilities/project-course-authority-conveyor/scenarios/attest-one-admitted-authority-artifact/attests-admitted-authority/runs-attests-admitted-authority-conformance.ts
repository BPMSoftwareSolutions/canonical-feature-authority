// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-attests-admitted-authority-conformance-from-41b5e65ab54242edd073ce8c00cc7a50b07a4a79e16c919d953b85c6cbc2ee4b
// authority-sha256: sha256:9e1262c3ac1c67451ccdd9ffbac8fcb8e0a295b67d1f233cde285654b39e107b
// body-sha256: sha256:1b277315ce684f617e255b0368afe7eba11b47b3e784f5f89624b4ec8d434c3a
// projection-signature: ed25519:Cj1kCgz8bkwaJTmAu2u6PQtJfyMAqIPNSmbpNDimY/O3RPxkEQGaUlT7TKjuwOo2dxBjb6AFcJjIxPtqgLeBCA==
// DO NOT EDIT.
import type {
  RunsAttestsAdmittedAuthorityConformanceContext,
  ProjectionConformanceSignal
} from "./admitted-authority-attestation.type.js";

export async function runsAttestsAdmittedAuthorityConformance(
  context: RunsAttestsAdmittedAuthorityConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
