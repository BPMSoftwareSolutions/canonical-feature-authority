// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-resolves-conveyor-stage-conformance-from-d56c4a69fc9635659ad126c73c4974b970935ec830e77442caba3f42e1b0c5ae
// authority-sha256: sha256:65e9c8d20e0e29efbb9692d29e41f66ae0317baa021cecbd485eccd5a35db364
// body-sha256: sha256:d7306b0f086c8d8ee799d3dc9b84ab834c3f0c254f1e3a89ed2ae430b51ca910
// projection-signature: ed25519:rkOcIyuxrgNJkyalBJy5oT9uL8C174qZySc4GvzetdO+pwoSsnVVQ8W85+H8195HRJPUqLQUOc2pyUjV+UXrBw==
// DO NOT EDIT.
import type {
  RunsResolvesConveyorStageConformanceContext,
  ProjectionConformanceSignal
} from "./conveyor-stage-transition.type.js";

export async function runsResolvesConveyorStageConformance(
  context: RunsResolvesConveyorStageConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
