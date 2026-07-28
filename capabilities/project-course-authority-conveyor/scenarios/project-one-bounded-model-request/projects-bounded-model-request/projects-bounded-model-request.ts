// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-projects-bounded-model-request-from-3788ad6db1a9ae1b55b6be6d86d1a8c41dcdf09f3627937b8500e93b7c17865e
// authority-sha256: sha256:84bed297557c272dac1fe73dd70adc3798b7865e7d873f60586adcab924d0943
// body-sha256: sha256:ea3c5aa6d85638993425f83059b3a379aaab8da418a9f728143e52e7670fdf5f
// projection-signature: ed25519:p/z14p00BCfqULiFJi0UCwSErl0hNh3vw5BQBwSb9vNvhJrBuO58KWZUP7wJcAhTXwz3vct9G8v/e4oL25hJCg==
// DO NOT EDIT.
import type {
  ProjectsBoundedModelRequestContext,
  BoundedModelRequestProjectionSignal
} from "./bounded-model-request-projection.type.js";

export async function projectsBoundedModelRequest(
  context: ProjectsBoundedModelRequestContext
): Promise<BoundedModelRequestProjectionSignal> {
  return await context.project(context.stage);
}
