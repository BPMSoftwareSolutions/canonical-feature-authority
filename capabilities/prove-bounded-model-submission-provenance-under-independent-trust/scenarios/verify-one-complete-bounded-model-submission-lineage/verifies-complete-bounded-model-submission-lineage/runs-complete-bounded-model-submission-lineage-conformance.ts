// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-complete-bounded-model-submission-lineage-conformance-from-6aebe92c33dac184f038458d1c8688d4fe779e8b5b6cb67b678dc332edea8231
// authority-sha256: sha256:da730911187f96d5e5f08b3d596b40a16a28306af25be50fd3102d8d7ff1d47f
// body-sha256: sha256:16d7d6712eedd13ca04bb21a07f8ce6f116df5a5fe4039265fb740765faec7bb
// projection-signature: ed25519:m33qUQbUoH1IwYGLU1h44GzfrYOOnRD3Lg/mjBWMWxM7KiaTJ2zBSryjgg4MqHejNXTFlLIzgqFoQCKfczUZBQ==
// DO NOT EDIT.
import type {
  RunsCompleteBoundedModelSubmissionLineageConformanceContext,
  BoundedModelSubmissionAcceptanceDisposition
} from "./bounded-model-submission-acceptance-disposition.type.js";

export async function runsCompleteBoundedModelSubmissionLineageConformance(
  context: RunsCompleteBoundedModelSubmissionLineageConformanceContext
): Promise<BoundedModelSubmissionAcceptanceDisposition> {
  return await context.evaluate(context.subject);
}
