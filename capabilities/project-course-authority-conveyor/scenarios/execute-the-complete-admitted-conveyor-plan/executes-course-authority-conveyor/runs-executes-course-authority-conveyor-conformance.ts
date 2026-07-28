// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-executes-course-authority-conveyor-conformance-from-242ca2d30944c7ce17b7923255a7389a3c69286c07f4a43ad22bf0b85e79720b
// authority-sha256: sha256:46e62a8f9c5b408b57f039c7169006e73131a4321deeec7dca48b3edac8e9c1e
// body-sha256: sha256:17f388cc07adedea63f6ce142795d84ab488b1b3483a74eca59a858c706c663c
// projection-signature: ed25519:CrgPMqmXPdpUhsklTrh5US123EPw760WcZ0Wwxn25p+FW6cHiYoCyi3Bp2k2Gqj5cXR66yYoNhrcdNHRL0SiDg==
// DO NOT EDIT.
import type {
  RunsExecutesCourseAuthorityConveyorConformanceContext,
  ProjectionConformanceSignal
} from "./course-authority-conveyor-execution.type.js";

export async function runsExecutesCourseAuthorityConveyorConformance(
  context: RunsExecutesCourseAuthorityConveyorConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
