// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-obtains-bounded-model-submission-conformance-from-70f5c512387cfa0c46adf2b70094ea8a9e40963ca5d8a303708f4567b8b02b89
// authority-sha256: sha256:bc90bb3dddf535685678f89eb37e94631d9203de4b6a795b5ba7ada4c19ef544
// body-sha256: sha256:cb9620adcda7b75a77e422aaa136901033827f4dd8a4b08128ed212b76d44d31
// projection-signature: ed25519:SgnWwWjPUMUHbftUAlFyxmMtS5le1uCzyCYkW2ZSzGHFfFdi7wFOLih048b10oOjvvZYk9YAvwTxAPK/C7qJBw==
// DO NOT EDIT.
import type {
  RunsObtainsBoundedModelSubmissionConformanceContext,
  ProjectionConformanceSignal
} from "./bounded-model-submission.type.js";

export async function runsObtainsBoundedModelSubmissionConformance(
  context: RunsObtainsBoundedModelSubmissionConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
