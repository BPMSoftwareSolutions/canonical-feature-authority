// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-course-09-project-and-inspect-code-assignment-resolves-code-body-canonical-lineage
// authority-sha256: sha256:9ef6ca2846c40db63ffff2152f3c827c21551b669bae451aceb438a893e684f0
// body-sha256: sha256:f03f31c9bfcf8d5aaf96393ee2c7961533049f922e2e5ef74844d5f93611672a
// projection-signature: ed25519:ZZKYip0e7F8iqiMClyKsl4D2NuoMGWVoKkp5ZHmuWgDc0P/ylno+zSeUgRTsEYGWhYfhoaBM2qZpLcT6AKUBCQ==
// DO NOT EDIT.
export async function resolvesCodeBodyCanonicalLineage(
  context: ResolveCodeBodyCanonicalLineageContext
): Promise<CodeBodyCanonicalLineageSignal> {
  const authority = await context.edges.invokes(
    "resolve-code-body-lineage-authority",
    context
  );

  const execution = await context.edges.invokes(
    "execute-resolved-code-body-lineage",
    authority
  );

  return context.edges.projects(
    "project-code-body-lineage-result",
    execution
  );
}
