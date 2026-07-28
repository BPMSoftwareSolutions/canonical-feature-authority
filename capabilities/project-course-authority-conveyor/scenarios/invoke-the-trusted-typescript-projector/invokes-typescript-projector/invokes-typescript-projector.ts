// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-invokes-typescript-projector-from-f477dc262bdf691ce00b2162a06ed3f8573c6f66c3c38f8f112f53904d03a95e
// authority-sha256: sha256:ddafa904a22340d34a619d0863e88204c4bb0d519b92c00789c0daeb15426344
// body-sha256: sha256:659404347b82913ac013eb3073f150a2be97355be82e06558bd2680907968e6d
// projection-signature: ed25519:xNJf0CeuEpzM3p3I2c9MbPU6F0p71w6xVGRKOp3KGkm8u4zQybWJj+6+Qcnjp+koZtrECNf0ILJ+J8BDNZtiBQ==
// DO NOT EDIT.
import type {
  InvokesTypescriptProjectorContext,
  TypescriptBodyProjectionSignal
} from "./typescript-body-projection.type.js";

export async function invokesTypescriptProjector(
  context: InvokesTypescriptProjectorContext
): Promise<TypescriptBodyProjectionSignal> {
  return await context.project(context.astAuthority);
}
