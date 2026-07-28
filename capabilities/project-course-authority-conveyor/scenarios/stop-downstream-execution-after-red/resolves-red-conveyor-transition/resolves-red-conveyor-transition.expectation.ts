// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-resolves-red-conveyor-transition-expectation-from-1fcfcad34bda84532664ece4f0a43b5138bbdbfade7b05bfca8a48374d08851a
// authority-sha256: sha256:f7cdc68098fa6d4db104da4157cbef4c99bd0785864321ddbc8a1019ac5295fe
// body-sha256: sha256:910a09a471159bbc4369cf7cfe05c66f15e0afb72deaa8c18e70eee791877f52
// projection-signature: ed25519:gsEYDrhwr4j/XcZiUqEbGASv6DZIO/FQlN14MP2ihvlYpT/kAkCZvd8ugv1+D07pG554FmKYd26NjPXs2sdVDg==
// DO NOT EDIT.
import type {
  ProvesResolvesRedConveyorTransitionExpectationContext,
  ExpectationSignal
} from "./red-conveyor-stop.type.js";

export async function provesResolvesRedConveyorTransitionExpectation(
  context: ProvesResolvesRedConveyorTransitionExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
