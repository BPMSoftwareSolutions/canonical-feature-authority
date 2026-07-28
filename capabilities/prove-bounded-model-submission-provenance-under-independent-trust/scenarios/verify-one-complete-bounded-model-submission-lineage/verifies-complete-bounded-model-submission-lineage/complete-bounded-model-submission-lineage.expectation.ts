// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-complete-bounded-model-submission-lineage-expectation-from-b85462483e16910a5706fb36bbc9d572c207fcd5a65249119dbfe8201bf8684d
// authority-sha256: sha256:3167106cf587fde63eac594275eaa7d85936538e1bf914f454d55f09fe9187d2
// body-sha256: sha256:705eaaca7a44bb3d4e81de29dd5e2ef660c0ebbe52d086bd769dc6b590a64e66
// projection-signature: ed25519:CxL7SM9RTz2z5NAwHnV3IigemSciEk/WkxSDmCSbLTPj1nj47XMSeU0ME9ASjV+9T0yJMMAMGwQ3kv8/VHLoAA==
// DO NOT EDIT.
import type {
  ProvesCompleteBoundedModelSubmissionLineageExpectationContext,
  ExpectationSignal
} from "./bounded-model-submission-acceptance-disposition.type.js";

export async function provesCompleteBoundedModelSubmissionLineageExpectation(
  context: ProvesCompleteBoundedModelSubmissionLineageExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
