// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-evaluates-projected-body-from-ed24b03968a85d78a8d99475243393ca3f939cec42e9185593cba6dd3d2d7b61
// authority-sha256: sha256:178bef29028d8c67a31df1ba82fd2b91421a89bc1a32314ad71aae964fcca253
// body-sha256: sha256:f00b65aa3714d4123de4c7e7bcea8fa13b3d0daaa10cee87bc72d3b64b997da5
// projection-signature: ed25519:C5/U0jsDP+9zHgjpYc72TDnKwscIjI25buETaIWk9HMQl4RbA1k70YvOG6T4e+h6GciwvFR8daU8Ly/yDrQ9Bw==
// DO NOT EDIT.
import type {
  EvaluatesProjectedBodyContext,
  ProjectedBodyConformanceSignal
} from "./projected-body-conformance.type.js";

export async function evaluatesProjectedBody(
  context: EvaluatesProjectedBodyContext
): Promise<ProjectedBodyConformanceSignal> {
  return await context.evaluate(context.projectedBody);
}
