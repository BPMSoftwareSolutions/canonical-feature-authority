// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-bounded-model-submission-execution-observation-conformance-from-6577e9b0bc58a71ba03253db0aed2c9f0a4da9323b122d06e87b92ef452981eb
// authority-sha256: sha256:3d1e3b3a6e26d3aee566ad45dab942cca9014ab16dbff4e70b74b25930d6226a
// body-sha256: sha256:6547759526477cd15733dc4dfb35323f6f4c567f365aa9608cab87ff821858eb
// projection-signature: ed25519:ZppDXEEOC1GaDr1eTaBhgvmjQxNMNVNRZpsTwNvh5ak8KyMRbqmDeH3xqRQaZmt8miCocOfWIAePrHnWrHUDDA==
// DO NOT EDIT.
import type {
  RunsBoundedModelSubmissionExecutionObservationConformanceContext,
  ProjectionConformanceSignal
} from "./bounded-model-submission-execution-observation.type.js";

export async function runsBoundedModelSubmissionExecutionObservationConformance(
  context: RunsBoundedModelSubmissionExecutionObservationConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
