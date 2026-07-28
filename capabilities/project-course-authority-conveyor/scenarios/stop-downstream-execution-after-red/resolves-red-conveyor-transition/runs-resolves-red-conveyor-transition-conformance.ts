// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-resolves-red-conveyor-transition-conformance-from-0e0c8a196b0a40f7171ee1e53d99f5359980726fdf167c67f2beef03123b9051
// authority-sha256: sha256:54492cb6e3436f2f8eb7ae3bc4622196b0d085b8abbaf967620f0338cd327d78
// body-sha256: sha256:32fcc317006ecc206126c7138f14abce9111c57cc40e1c14d0302254a86f8c9c
// projection-signature: ed25519:f04ALpfXxHEs3xDEVhXpBHR0+N0Ll661HJqx4V/83XOPiecOK8cLVpc6JNOjydKNOTn45r4MyMNgXuO70FByDA==
// DO NOT EDIT.
import type {
  RunsResolvesRedConveyorTransitionConformanceContext,
  ProjectionConformanceSignal
} from "./red-conveyor-stop.type.js";

export async function runsResolvesRedConveyorTransitionConformance(
  context: RunsResolvesRedConveyorTransitionConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
