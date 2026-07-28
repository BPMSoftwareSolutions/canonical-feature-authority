// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-attests-admitted-authority-expectation-from-4aa5875be8c6b0ea39c785814cbc46e158e030f8d55b37c6cee43a70b5294ef5
// authority-sha256: sha256:2307571a3543dab2bc3308faee01ce0f378fa039de74696fce3f13dc885d3304
// body-sha256: sha256:a7a217869a4ebb92fd80b954cba47b3c6aedbd56f63dd46f199ee4413486b670
// projection-signature: ed25519:xlXvzl7LDYIRrGy5QRVnjz25Jd6LIIMb4rnr9qn5nxwL1zUb837GXsyrQBun8bWUoSX8zq5MOS0MmNgMJMDkBg==
// DO NOT EDIT.
import type {
  ProvesAttestsAdmittedAuthorityExpectationContext,
  ExpectationSignal
} from "./admitted-authority-attestation.type.js";

export async function provesAttestsAdmittedAuthorityExpectation(
  context: ProvesAttestsAdmittedAuthorityExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
