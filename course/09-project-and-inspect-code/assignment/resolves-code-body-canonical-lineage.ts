// @generated
// feature-id: govern-code-body-admission
// scenario-id: admit-a-body-with-one-current-canonical-lineage
// obligation-id: every-body-has-one-canonical-lineage
// responsibility-id: resolves-code-body-canonical-lineage
// signal-id: code-body-has-canonical-lineage
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
