// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-projects-ast-authority-expectation-from-e9350e4b1d5a7db0afd8a4edbbfdddd290e6f5d85683845b1e194612366f09b0
// authority-sha256: sha256:232f17ea7b0d24ec6bbfba1c7fed5f39a2e8f300082f8a6ada28ebeb42dcc45c
// body-sha256: sha256:aceff074ccfe8fa169eeb3f549dff6361d96016adc6a92fcb5d4bca4b0cc555f
// projection-signature: ed25519:hgj2q7wisLekBGGEzayjudW+S2CRMn39ibZZjPrIv9ofETxYi52xZfkg8FdTtKoli2/3HuqpwQsxPJsYWbNcAg==
// DO NOT EDIT.
import type {
  ProvesProjectsAstAuthorityExpectationContext,
  ExpectationSignal
} from "./ast-authority-projection.type.js";

export async function provesProjectsAstAuthorityExpectation(
  context: ProvesProjectsAstAuthorityExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
