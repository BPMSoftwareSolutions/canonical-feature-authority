// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-resolves-conveyor-stage-from-7360d9863f789c8889459a519f496ffda115c061d102684a8473001a96145e77
// authority-sha256: sha256:66d46e8b187b4e6d3e8fc3119f2281d1bb936b85c07cca21ba0ac16fa4c411f7
// body-sha256: sha256:5a70620ac89879e06f61d401b1caa3d798d1ac1bc182bc3b07d212341b58d977
// projection-signature: ed25519:kMJpRNTu4Q/8MHiFIovj1uFAvoR0mxwWmQgWJgDPw5Q29LSTuhGQGDIG6kMLoFRSU5VQJ45x0u8a9TOsbHhjBQ==
// DO NOT EDIT.
import type {
  ResolvesConveyorStageContext,
  ConveyorStageTransitionSignal
} from "./conveyor-stage-transition.type.js";

export async function resolvesConveyorStage(
  context: ResolvesConveyorStageContext
): Promise<ConveyorStageTransitionSignal> {
  return await context.resolve(context.plan);
}
