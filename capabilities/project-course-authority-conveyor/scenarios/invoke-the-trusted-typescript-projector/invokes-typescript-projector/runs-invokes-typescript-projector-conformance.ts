// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-invokes-typescript-projector-conformance-from-a8058c420061ba1878956a97ed1738c384815d81d1fe94d6fbf66dc7636b51b6
// authority-sha256: sha256:d2c1cec72ed98b5afac07de4cde845be7800435af9f73e74ea2f8bda47b84453
// body-sha256: sha256:efd8ac6a9cae4f530c99d5d582c26a9cfa3a3cab356613712b79bcd0f041e9d8
// projection-signature: ed25519:teMQgHfxla9AfG5snMKb9D6+IwATb9LsvCdI/WOxh+RzXS6vKBXZR1uWmBwhb8QRPr5IoBJUmi1YOPRVTzv/BQ==
// DO NOT EDIT.
import type {
  RunsInvokesTypescriptProjectorConformanceContext,
  ProjectionConformanceSignal
} from "./typescript-body-projection.type.js";

export async function runsInvokesTypescriptProjectorConformance(
  context: RunsInvokesTypescriptProjectorConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
