// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-evaluates-projected-body-expectation-from-e3fe9ca87d334642d7123933ab30f91d6e71e9318de708d9a96177558b8c9f43
// authority-sha256: sha256:ef6d2a963ddd56b90c9af6207e78e9aefb987004275a8563ddb549db77269398
// body-sha256: sha256:e09621774d757b48721656b5559c15debdf00a630fe372bf9faba6669ce46e28
// projection-signature: ed25519:YBhxvNbOZiioNWRMF3R2wZ7t3tGQVLv+QcOtqsPuEXtkAHd7cInf+JmT6JFO0jhFkL+t3yOBQR53n+LiAIIzAg==
// DO NOT EDIT.
import type {
  ProvesEvaluatesProjectedBodyExpectationContext,
  ExpectationSignal
} from "./projected-body-conformance.type.js";

export async function provesEvaluatesProjectedBodyExpectation(
  context: ProvesEvaluatesProjectedBodyExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
