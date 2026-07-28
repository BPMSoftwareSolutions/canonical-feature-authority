// @generated
// projection-id: project-greets-student-body
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
