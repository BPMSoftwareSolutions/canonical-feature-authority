// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-resolves-red-conveyor-transition-from-c2a38bf906964fe0666179ff28581e246ce8e9c64f3c5c37b281f155b6f80763
// authority-sha256: sha256:20a7494eb1c2b96adb75e5da63c55093f9d030831c7cbdeadbab928b803525e3
// body-sha256: sha256:4e91319b9774d4a1672960a4da08099769beeac6080aaec44dc493f1e4d78a89
// projection-signature: ed25519:AXNM/k1vkwt5u5oaFA+XKNtR7BB+37evkT3c8/W0tbWqp50ybrTRiCLtcKL3+BPQBNpnDAWmYI62buIL/KnkDA==
// DO NOT EDIT.
import type {
  ResolvesRedConveyorTransitionContext,
  RedConveyorStopSignal
} from "./red-conveyor-stop.type.js";

export async function resolvesRedConveyorTransition(
  context: ResolvesRedConveyorTransitionContext
): Promise<RedConveyorStopSignal> {
  return await context.resolve(context.disposition);
}
