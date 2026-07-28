// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-evaluates-resumable-authority-expectation-from-6ed5b8b66bcb4e64e53f7cf7610d73451c2964151750cc387116b869313492b9
// authority-sha256: sha256:90fa4f383c840affb67ac4f2f98fd45f30e1897b06f63898e363abbfa9e97edf
// body-sha256: sha256:745fd1f512f45e7a656d27433219f3964c11534403dc78ee41a25ed16cd9394a
// projection-signature: ed25519:jZiibmhmg8K8oS39Tp+zIZyn9ifmyjztnbTfVVLAwolHTKWfKv5mMSdtGoYegLTa98AI8cgLWSAKgN85FRgODg==
// DO NOT EDIT.
import type {
  ProvesEvaluatesResumableAuthorityExpectationContext,
  ExpectationSignal
} from "./authority-resumability.type.js";

export async function provesEvaluatesResumableAuthorityExpectation(
  context: ProvesEvaluatesResumableAuthorityExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
