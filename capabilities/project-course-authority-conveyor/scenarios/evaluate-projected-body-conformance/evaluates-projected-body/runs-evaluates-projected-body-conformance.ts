// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-evaluates-projected-body-conformance-from-96429b613c2f09af208de1fb414ef20b0fa52c2e2ebe4badb1fe3274b2f1fe2e
// authority-sha256: sha256:189452e553a13befe3bcd26ae65c7d4ab3dfd87f378bf27c535a921636f9e37b
// body-sha256: sha256:e29855eeb88f2e956c93088924f418d20c015f367c7e2dd2ecac38f2a0f5a929
// projection-signature: ed25519:IZsmG3cHIRdNl69B5oY44Y116CxjKAwpv78MMaC2kvDaTbr4/S1TNhAoHvYFWGvvdvzkKXcN8bJybg/h7X6UAA==
// DO NOT EDIT.
import type {
  RunsEvaluatesProjectedBodyConformanceContext,
  ProjectionConformanceSignal
} from "./projected-body-conformance.type.js";

export async function runsEvaluatesProjectedBodyConformance(
  context: RunsEvaluatesProjectedBodyConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
