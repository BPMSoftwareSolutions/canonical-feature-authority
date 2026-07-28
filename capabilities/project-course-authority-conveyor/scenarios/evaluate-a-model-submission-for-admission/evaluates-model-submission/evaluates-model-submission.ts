// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-evaluates-model-submission-from-e6a43b24d2fc7029716d4b0a26123c0978bd67290cca5b0797e255c457d73f7c
// authority-sha256: sha256:32e0b50ebe6d8e585c5c34f7d8d43a616f44c5dc02f999841d6f1c1bfddb71e1
// body-sha256: sha256:4f4e253ac7877765feb8bc6ee33e4f0e1567ac88b4703baedb6dae742fc9cbe5
// projection-signature: ed25519:7AyzxoUqc3Od5vV/5yq+Fwpzf6l8ZWLzRVNDJoYNrFuXlBrZ6zxu3eLhTwpAJeb7WBLKmPZQMq1vlswYGI1RDQ==
// DO NOT EDIT.
import type {
  EvaluatesModelSubmissionContext,
  ModelSubmissionAdmissionSignal
} from "./model-submission-admission.type.js";

export async function evaluatesModelSubmission(
  context: EvaluatesModelSubmissionContext
): Promise<ModelSubmissionAdmissionSignal> {
  return await context.evaluate(context.submission);
}
