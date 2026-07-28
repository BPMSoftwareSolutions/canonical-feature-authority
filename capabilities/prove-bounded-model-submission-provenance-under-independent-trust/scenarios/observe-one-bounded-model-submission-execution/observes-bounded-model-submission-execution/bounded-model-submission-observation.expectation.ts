// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-bounded-model-submission-observation-expectation-from-6afa9401576ce761d841c3c50078e117a07960dad59a70bd65b50da0d91a9bb2
// authority-sha256: sha256:3bd39885b519648201ddd2eb4269671974824f5414a6861b9bd7042deb85477b
// body-sha256: sha256:0acf3baa27a33d06312135fcbced7c08403783ae98d367b22fe324137018e2ac
// projection-signature: ed25519:8ZKt3lzIguedgcRLMitefrtC0qaDy3hFAjKQSkeTo/ioDTUtjyZaxKc13VAMM9TCgdTjZmhM1rubU5b2VDPOBA==
// DO NOT EDIT.
import type {
  ProvesBoundedModelSubmissionExecutionObservationExpectationContext,
  ExpectationSignal
} from "./bounded-model-submission-execution-observation.type.js";

export async function provesBoundedModelSubmissionExecutionObservationExpectation(
  context: ProvesBoundedModelSubmissionExecutionObservationExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
