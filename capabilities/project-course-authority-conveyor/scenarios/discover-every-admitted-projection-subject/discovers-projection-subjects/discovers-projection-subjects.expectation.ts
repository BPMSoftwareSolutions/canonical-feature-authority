// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-discovers-projection-subjects-expectation-from-77821d9804ba8070d223198ef0ef1ac5c7a4729594e476ce5d451ece7c8a2add
// authority-sha256: sha256:ac26b24b426d60c0f1aed428f92b4776b5bf30724aee7219fa9a944545fcc221
// body-sha256: sha256:365baaef707f6fba56d4f7140df8632eac7e9c32a3d30f4a48afd01bc4e3908a
// projection-signature: ed25519:IjMXCBP7t53cU3QngkEgw3nEWVOyu2xLyv4AKBcPpdTKZpjYlrQkbIrRikcp2FAs7M4k0njKHvvGZPtPipb1CA==
// DO NOT EDIT.
import type {
  ProvesDiscoversProjectionSubjectsExpectationContext,
  ExpectationSignal
} from "./projection-subject-discovery.type.js";

export async function provesDiscoversProjectionSubjectsExpectation(
  context: ProvesDiscoversProjectionSubjectsExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
