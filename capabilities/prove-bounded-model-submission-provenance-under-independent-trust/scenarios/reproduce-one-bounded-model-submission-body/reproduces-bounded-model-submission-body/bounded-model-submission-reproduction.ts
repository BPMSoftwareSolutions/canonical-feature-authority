// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-bounded-model-submission-body-reproduction-from-d0fe6f24b074e5cd47933e016e175b552987552cfa8329fbd402a7a1c18fcfbe
// authority-sha256: sha256:531aaa4920f683c8e5045bb5e1e6fc5f3c994f345b5b3d42f2b5072c274e357e
// body-sha256: sha256:3588ab7a706e519f17598b214aabf3eb9d1056692d1ff605ca87685b8b08bbfd
// projection-signature: ed25519:5KEBh8eN8nyq8nlUOJO5VNcuRJew4/Efm8mzeYcmGsPZXeuS/5tKASxFNej2cdbc3jCGGlznnn6FLCFP+AWsAA==
// DO NOT EDIT.
import type {
  ReproducesBoundedModelSubmissionBodyContext,
  BoundedModelSubmissionBodyReproduction
} from "./bounded-model-submission-body-reproduction.type.js";

export async function reproducesBoundedModelSubmissionBody(
  context: ReproducesBoundedModelSubmissionBodyContext
): Promise<BoundedModelSubmissionBodyReproduction> {
  return await context.reproduce(context.subject);
}
