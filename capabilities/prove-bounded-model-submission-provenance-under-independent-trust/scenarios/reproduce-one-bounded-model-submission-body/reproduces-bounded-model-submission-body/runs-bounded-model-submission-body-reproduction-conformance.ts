// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-bounded-model-submission-body-reproduction-conformance-from-03cc39ba3f39c0f2eea1e549f9a5b04e10c7ff5ceb39df90b85e22e3ef09b782
// authority-sha256: sha256:bf8af05d1fb7acf7f6a8133325d15ad2fbd46b229273bf610cb457e384c0d638
// body-sha256: sha256:74ddb2281fc86733f09a261910df587a4e7e7111a4222b6c5fb18afd19ad3e54
// projection-signature: ed25519:PzJf2y8QqIW2Jfmw+sxgYfy7MdxfOGeZYa2QP2QRr5hcl8ffEzp6WuQF+IZThHBMQF6b0+U6s2e8yEJ8PkXxCg==
// DO NOT EDIT.
import type {
  RunsBoundedModelSubmissionBodyReproductionConformanceContext,
  ProjectionConformanceSignal
} from "./bounded-model-submission-body-reproduction.type.js";

export async function runsBoundedModelSubmissionBodyReproductionConformance(
  context: RunsBoundedModelSubmissionBodyReproductionConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
