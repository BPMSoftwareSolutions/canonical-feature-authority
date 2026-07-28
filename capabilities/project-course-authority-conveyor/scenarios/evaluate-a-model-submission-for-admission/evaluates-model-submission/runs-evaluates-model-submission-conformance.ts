// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-evaluates-model-submission-conformance-from-1569eca83c726e4be2ebcc6dddded761adaeedd1989697be005166305735d79e
// authority-sha256: sha256:f9103bf967a03a2f47aeae7b231ee4036cf829dc22be2851b515caadf7a87219
// body-sha256: sha256:6912f63d973eb221a9e1fce2ff4c0e89b9cd5164e4a7725e4028b965e08fb220
// projection-signature: ed25519:8UAesIK+N1bHae78j8nKrNlWydQNBkWr0k3UBkEeNYm2QtI7CBrYYBOEx3R9mtP9hG1uwuDWLuy0zHZJxvkKDQ==
// DO NOT EDIT.
import type {
  RunsEvaluatesModelSubmissionConformanceContext,
  ProjectionConformanceSignal
} from "./model-submission-admission.type.js";

export async function runsEvaluatesModelSubmissionConformance(
  context: RunsEvaluatesModelSubmissionConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
