// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-bounded-model-submission-reproduction-expectation-from-293a2a7abf3df21e7f8c13570042f631f09b8147ca1f07201aa899cbcff3b179
// authority-sha256: sha256:1664c7db3af1c95d37ba8e6287af3f458ed4dda0bd844c19e01efb8239b71a03
// body-sha256: sha256:676ebe39bd562ed645e293f2c405f814f948a97cdfdeb29c5fce54c29ec540be
// projection-signature: ed25519:L7WA9zHX0z5QDqyRnnuEX71xrEwMwpg5J8i2GDGgT+VdWkaNalGhoFLXoggIAvUPKKgpy4Bhd0G276xN4W1dCQ==
// DO NOT EDIT.
import type {
  ProvesBoundedModelSubmissionBodyReproductionExpectationContext,
  ExpectationSignal
} from "./bounded-model-submission-body-reproduction.type.js";

export async function provesBoundedModelSubmissionBodyReproductionExpectation(
  context: ProvesBoundedModelSubmissionBodyReproductionExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
