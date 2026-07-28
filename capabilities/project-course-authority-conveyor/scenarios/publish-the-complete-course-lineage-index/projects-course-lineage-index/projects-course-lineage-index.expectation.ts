// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-projects-course-lineage-index-expectation-from-a5fa4435acf838c0bfb6128c600396099e1ae17b1eb8202d3febfb2d38cc0479
// authority-sha256: sha256:76e854ff58731fa3207a057eb08f60588b5fdeec95bfc2699d44649d384e7b2d
// body-sha256: sha256:ca263723d146fe0538eb9830a3ed03a19f1dcca96e1de80f6d8db0e59bddc91b
// projection-signature: ed25519:8ka44X8jfPIS7ipKaVIxRzPpg8Sam06C0HZHadeoNimInAfW086zxKK32dQIHi6sZgJwWjtDxMQ3wIrQkK2uBw==
// DO NOT EDIT.
import type {
  ProvesProjectsCourseLineageIndexExpectationContext,
  ExpectationSignal
} from "./course-lineage-index-projection.type.js";

export async function provesProjectsCourseLineageIndexExpectation(
  context: ProvesProjectsCourseLineageIndexExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
