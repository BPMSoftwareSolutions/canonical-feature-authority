// @generated
// feature-id: experience-deterministic-projection
// scenario-id: project-a-student-greeting
// obligation-id: admitted-greeting-authority-projects-one-body
// responsibility-id: greets-student
// signal-id: student-greeting
// DO NOT EDIT.
export async function greetsStudent(
  context: GreetsStudentContext
): Promise<StudentGreetingSignal> {
  return await context.edges.invokes(
    "resolve-student-greeting",
    context
  );
}
