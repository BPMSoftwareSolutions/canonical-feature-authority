// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-complete-bounded-model-submission-lineage-from-cd8ac7407976dc951e333d60f5dffbfa6ae953db828fc7e284eeacf16d6a9c29
// authority-sha256: sha256:3c14f950691840f73bff18ff447f8ffa6c776e2c01f233bde75ab165c3da18ab
// body-sha256: sha256:230fe73ba6ddbb303794c91946c955cb796fda1a294bb4830e5d4568a7c85b82
// projection-signature: ed25519:encwG623H8phN5MLYeXVZIrlVT6ZYmFRxQ7hIitqmX2ESV4WXRnTtj2LDtpMLHQHQIkrf7pO2ILAqzitPqmIAA==
// DO NOT EDIT.
import type {
  VerifiesCompleteBoundedModelSubmissionLineageContext,
  BoundedModelSubmissionAcceptanceDisposition
} from "./bounded-model-submission-acceptance-disposition.type.js";

export async function verifiesCompleteBoundedModelSubmissionLineage(
  context: VerifiesCompleteBoundedModelSubmissionLineageContext
): Promise<BoundedModelSubmissionAcceptanceDisposition> {
  return await context.evaluate(context.lineage);
}
