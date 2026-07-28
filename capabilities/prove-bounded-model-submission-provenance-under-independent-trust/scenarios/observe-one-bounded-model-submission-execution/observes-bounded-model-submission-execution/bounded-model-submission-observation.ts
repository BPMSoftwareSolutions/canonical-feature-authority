// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-bounded-model-submission-execution-observation-from-217a8361339d3a4690dbe894b43f48d0369869bdf5fb0e4d1d99d18d9bdf3a2e
// authority-sha256: sha256:37162daf61e8d141b7f2c89202a0a1205d72ea2c1f21d05493da484315296b87
// body-sha256: sha256:1eb37a4cbd34d1cc72ef9f02e5a35659349026d34cf0cefe5c2a5f6a5b35b1ac
// projection-signature: ed25519:vXji9rUQ0UZFldnC3eHxEIeYCh2H0sZqhUjSFE6r3iGT00eZgtR2NgrhF3h3trFAG2UqES+QM0NgyrtU8B8oAw==
// DO NOT EDIT.
import type {
  ObservesBoundedModelSubmissionExecutionContext,
  BoundedModelSubmissionExecutionObservation
} from "./bounded-model-submission-execution-observation.type.js";

export async function observesBoundedModelSubmissionExecution(
  context: ObservesBoundedModelSubmissionExecutionContext
): Promise<BoundedModelSubmissionExecutionObservation> {
  return await context.observe(context.subject);
}
