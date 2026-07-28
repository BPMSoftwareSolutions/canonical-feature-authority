// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-obtains-bounded-model-submission-from-b43cd4661a4b533acd05c0123077f34a85f87233bc3daad7b5e7c0552ec05aee
// authority-sha256: sha256:b31222ae40db88ced626c01b7f4dc5d9ec84fcac29d4d153036ed8d5661d2bc9
// body-sha256: sha256:33a55fb7b49ec538157f9823580edf67b287b00ee202d5e8f23c679f35514cd4
// projection-signature: ed25519:ujWNzSyedxnG7ip3MdJZXqK+Gf7dG1+TSzxkWm1FNfwT21YaXRGyagbwHTEq6vQ2DnK3m1xO9Lf0w1vbF+c6DQ==
// DO NOT EDIT.
import type {
  ObtainsBoundedModelSubmissionContext,
  BoundedModelSubmissionSignal
} from "./bounded-model-submission.type.js";

export async function obtainsBoundedModelSubmission(
  context: ObtainsBoundedModelSubmissionContext
): Promise<BoundedModelSubmissionSignal> {
  return await context.obtain(context.request);
}
