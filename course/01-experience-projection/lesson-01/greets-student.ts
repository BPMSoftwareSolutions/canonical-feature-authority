// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-course-01-experience-projection-lesson-01-greets-student
// authority-sha256: sha256:57eff2dded90898f7dc0c6547d411fd10917f2bf3749ea3aa0f6985f064ecc72
// body-sha256: sha256:e184670a74ec45efe56af17cf3a80f1db599d8ae9ab150005eee1583292553cd
// projection-signature: ed25519:/s2qAOZgsqjn8ewPO6Y2dRTZ+X5ladPnk8rju7Eq61newo9gz90Tj6naTbQMPXBx9YYnE0DOjNg2BZXAIZrdDw==
// DO NOT EDIT.
export async function greetsStudent(
  context: GreetsStudentContext
): Promise<StudentGreetingSignal> {
  return await context.edges.invokes(
    "resolve-student-greeting",
    context
  );
}
