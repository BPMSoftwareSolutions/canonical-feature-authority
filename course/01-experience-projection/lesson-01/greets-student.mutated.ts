// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-course-01-experience-projection-lesson-01-greets-student-mutated
// authority-sha256: sha256:30510cae52977fd73d9a7d21d1c8a54fe99a32054d9841a0e117d32a5adedf8e
// body-sha256: sha256:848a1545619d0a7197619d37f97d8c007d5b1ddc01005982d387125068ff1122
// projection-signature: ed25519:DjKd6ohHjJuDerNYuILj7F9Gb45BtY3v54xyBkgg07AYzEnZxTNqYGwa9r1eZWh0sSjFGGWMgCO4FZr8c5XJAQ==
// DO NOT EDIT.
export async function greetsStudent(
  context: GreetsStudentContext
): Promise<StudentGreetingSignal> {
  if (!context.student) {
    throw new Error("Student is required");
  }

  return await context.edges.invokes(
    "resolve-student-greeting",
    context
  );
}
