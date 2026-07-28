// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-evaluates-model-submission-expectation-from-33fa535cb967a36bed8e2453e0c0c90e6dfa67bcd9491900e1d915e3814ac7ce
// authority-sha256: sha256:021ec2f8bdc0a46f9440982ef37e608e690d1c3919ef5ce5da4e889040d35e8e
// body-sha256: sha256:7d915d06f4e6b0c200e952f3dbe465986aba0810b54add5fd355e759a2fefed7
// projection-signature: ed25519:PwP6KwnBmBXfUqac2I7tspTX1tJwGaND1zPBIxM+/3A9ihtA+v/Ev5kX/0E6xv4NntevOhI5v3SOEI/Z9AYtCg==
// DO NOT EDIT.
import type {
  ProvesEvaluatesModelSubmissionExpectationContext,
  ExpectationSignal
} from "./model-submission-admission.type.js";

export async function provesEvaluatesModelSubmissionExpectation(
  context: ProvesEvaluatesModelSubmissionExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
