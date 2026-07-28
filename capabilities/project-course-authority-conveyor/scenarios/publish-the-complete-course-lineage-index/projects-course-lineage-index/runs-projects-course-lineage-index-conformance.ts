// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-projects-course-lineage-index-conformance-from-3ecd2f80fd66814f5980644addc9dedfbf4ae28943514ce6f12d117d4edad798
// authority-sha256: sha256:7adaac5a54a323fb37a869a66b4dfda388479c1986cda2686ac2606b9e188b69
// body-sha256: sha256:7e86d034001dfcf5082e834aeca89f16091740f9bbe93b47ee1097c8dafd1dfa
// projection-signature: ed25519:2c9NyVoYDyPiM6ugvJezKhHC5A8TKr/sf+b3xNfCzXQCZnpiVisBt1zfglgwn8V4FrjSMfkzNEJoiy/gz689CQ==
// DO NOT EDIT.
import type {
  RunsProjectsCourseLineageIndexConformanceContext,
  ProjectionConformanceSignal
} from "./course-lineage-index-projection.type.js";

export async function runsProjectsCourseLineageIndexConformance(
  context: RunsProjectsCourseLineageIndexConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
