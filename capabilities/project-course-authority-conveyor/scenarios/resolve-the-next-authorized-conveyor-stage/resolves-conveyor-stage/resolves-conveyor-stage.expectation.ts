// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-resolves-conveyor-stage-expectation-from-c4a1756134938eb8e92329fb10443289afd5b49aa15b9c4ef15779ca9f4a6358
// authority-sha256: sha256:5c226f1655e4a6848dd53007d847a538a70aa1cad6faed44b37747b53f45305a
// body-sha256: sha256:6bb6b6fb498d44de79a3604f0d0484b2c55a048d827b298793946b4807e4d6be
// projection-signature: ed25519:V8OqQZQSIwWKSg3ik42Y49DOkEmKiSGhp1pUuXZT8Xy+qSQQyW1xr/KV4i3eYQmEAp15AXIq37CUpI/5/7f+Dg==
// DO NOT EDIT.
import type {
  ProvesResolvesConveyorStageExpectationContext,
  ExpectationSignal
} from "./conveyor-stage-transition.type.js";

export async function provesResolvesConveyorStageExpectation(
  context: ProvesResolvesConveyorStageExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
