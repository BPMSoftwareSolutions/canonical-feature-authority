// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-discovers-projection-subjects-conformance-from-63dd68268ec156d37b15ef9bb3ddc68bebc88302a3248911a09cf5a751ce853f
// authority-sha256: sha256:786bcc95d770b84b0e14250db4d4fc5f5cf1894b407a910b5e1966827668e147
// body-sha256: sha256:7b99e80d5fa3d609d0a2f0eda8924c6c3600d24496e6a185df037bf994d788a1
// projection-signature: ed25519:F6yvFUq7Y1InLnWd9Av6GFfVkH6S+eGv/7+BgouzFJGpZ461V5JhQOnl7jmucLpIP84lDWcpRcEcMfvGBK2fDQ==
// DO NOT EDIT.
import type {
  RunsDiscoversProjectionSubjectsConformanceContext,
  ProjectionConformanceSignal
} from "./projection-subject-discovery.type.js";

export async function runsDiscoversProjectionSubjectsConformance(
  context: RunsDiscoversProjectionSubjectsConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
