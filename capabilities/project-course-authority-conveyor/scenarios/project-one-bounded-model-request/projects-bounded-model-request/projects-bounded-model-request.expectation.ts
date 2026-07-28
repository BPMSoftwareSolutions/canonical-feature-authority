// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-projects-bounded-model-request-expectation-from-905c9dc2c4fae91e33f3cf82878cbace952e079e9a9b8263478b11b1c6543287
// authority-sha256: sha256:e578cbc8c32b60eb44887faf37c5e5fe147307eceb7e0b85b43b603d3b76d685
// body-sha256: sha256:25ae732df1f63ae4d1fa30bae8daeff8575cf6356bf33ec27082e191112c93c6
// projection-signature: ed25519:NGBdhuH4obxIF7Ngh4od+iOMaJMlApIEBrsd3A0UXKfHBrYk88ICpaGL/KC+K6ikoF6iLcErOjqluWBiWSzWDA==
// DO NOT EDIT.
import type {
  ProvesProjectsBoundedModelRequestExpectationContext,
  ExpectationSignal
} from "./bounded-model-request-projection.type.js";

export async function provesProjectsBoundedModelRequestExpectation(
  context: ProvesProjectsBoundedModelRequestExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
