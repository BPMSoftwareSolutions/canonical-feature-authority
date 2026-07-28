// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-invokes-typescript-projector-expectation-from-b3da44ae55f0611a21cb57536074cea2bdf2a3304d63ba9d64e9f686f63bb052
// authority-sha256: sha256:f4e9fee4caf6c19fff0bacb1a8f8fea8beac5d132b98a244686a1a4bb889037d
// body-sha256: sha256:ccb8297bc6da060350fe2936c35836c60176ee0f80d1701b232b42cae2eee1a3
// projection-signature: ed25519:zUfLro+p0GOU+2twZSQl6Ql8GdgvQjCClMl4C6FbHIm1/32YwdBxPgbc/T++RaqZW1m2JpqBa1ya2Oc908nMAg==
// DO NOT EDIT.
import type {
  ProvesInvokesTypescriptProjectorExpectationContext,
  ExpectationSignal
} from "./typescript-body-projection.type.js";

export async function provesInvokesTypescriptProjectorExpectation(
  context: ProvesInvokesTypescriptProjectorExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
