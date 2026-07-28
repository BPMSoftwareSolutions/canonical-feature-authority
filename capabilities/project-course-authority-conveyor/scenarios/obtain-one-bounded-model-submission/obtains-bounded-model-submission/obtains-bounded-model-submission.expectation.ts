// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-obtains-bounded-model-submission-expectation-from-ba602913cacafe273131cecb180897a05f5a07685fab6264bd40a9a5497363b1
// authority-sha256: sha256:fc1c300bc58d4389ce911c86cbab8f1f7c5a874e8b15a1fc0aca093104cd23bc
// body-sha256: sha256:e21ca950a91af32d687a91e777d15739a0d8d8245e8eef06b5fff2c2fe99d31a
// projection-signature: ed25519:RawSjNiGsqwxdQeqgJosoEYXOkhoYIlistNGWD+AnFwNp0cr1JfvUHUEiIIFnmql/yHTg/94KoL3U2O6DgehCQ==
// DO NOT EDIT.
import type {
  ProvesObtainsBoundedModelSubmissionExpectationContext,
  ExpectationSignal
} from "./bounded-model-submission.type.js";

export async function provesObtainsBoundedModelSubmissionExpectation(
  context: ProvesObtainsBoundedModelSubmissionExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
