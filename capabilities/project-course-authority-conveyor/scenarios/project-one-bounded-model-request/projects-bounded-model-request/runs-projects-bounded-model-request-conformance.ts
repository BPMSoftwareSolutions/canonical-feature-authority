// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-runs-projects-bounded-model-request-conformance-from-174535dde1416a6a8a08b47ec8d8a7f6409984adcb840109636386ac28845bfe
// authority-sha256: sha256:fa0fa626adc6ede515bd35657a103d2ab90f0f88fc40860a0f176b1d8fc963c2
// body-sha256: sha256:a1d8cd28430b0f7a5cce3246b0cd8fde2504f9acb83b256753fbe71d1781a86e
// projection-signature: ed25519:W/qAYNkgsolRJGYQXnbyayCoMmpabCcIPMaLKHjBC79QtgmeiNzUvPGhPNY/ODX/5doSHYWBD1rNyHycAjstDA==
// DO NOT EDIT.
import type {
  RunsProjectsBoundedModelRequestConformanceContext,
  ProjectionConformanceSignal
} from "./bounded-model-request-projection.type.js";

export async function runsProjectsBoundedModelRequestConformance(
  context: RunsProjectsBoundedModelRequestConformanceContext
): Promise<ProjectionConformanceSignal> {
  return await context.evaluate(context.subject);
}
