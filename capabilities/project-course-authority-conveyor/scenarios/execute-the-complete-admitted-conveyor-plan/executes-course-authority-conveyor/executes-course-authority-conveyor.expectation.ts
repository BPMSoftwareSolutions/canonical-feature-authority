// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-executes-course-authority-conveyor-expectation-from-8655a3c8cabcf87a7e9e85997234458d5163c68368bf20103adcd8557921e485
// authority-sha256: sha256:ed23e1721a744ec044ccf01089874ef7558f0674d8861b667fd9c1c721f15e79
// body-sha256: sha256:d6ea898342d3740a6f19976488e256c6a024ad01f1af998656388869252da33e
// projection-signature: ed25519:PHoBnFuQKqDXn7HYl5tebDwA9dObgN+LnlDmTpjfpgIvwv7tRjW47j+fT7+MFHQkuE8iLXcg3RFXIbXYK3U9CA==
// DO NOT EDIT.
import type {
  ProvesExecutesCourseAuthorityConveyorExpectationContext,
  ExpectationSignal
} from "./course-authority-conveyor-execution.type.js";

export async function provesExecutesCourseAuthorityConveyorExpectation(
  context: ProvesExecutesCourseAuthorityConveyorExpectationContext
): Promise<ExpectationSignal> {
  return await context.prove(context.expectation);
}
