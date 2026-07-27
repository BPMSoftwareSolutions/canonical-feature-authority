# 06 — Project Code Bodies

*Corresponds to Phase 6, Section 8 of [The Student Experience.md](../../The%20Student%20Experience.md).*

## Goal

Project the semantic authority you authored in [05-author-semantic-authority/](../05-author-semantic-authority/) into a code-body projection authority record, then generate the actual TypeScript body from it.

## What the projected body should look like

Intentionally boring:

```typescript
export async function resolvesCodeBodyCanonicalLineage(
  context: ResolveCodeBodyCanonicalLineageContext
): Promise<CodeBodyLineageResult> {
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
```

## What to check for

```text
The body contains no lineage policy.
The body contains no branching.
The body constructs no domain DTO.
The body does not choose a failure disposition.
```

If you find yourself wanting to add an `if`, a `switch`, or a piece of domain logic to make this body "actually work," that decision belongs in `semantic-authority/`, one phase back — not here. This is the phase where you should feel meaning *contract* and execution *collapse*, not expand.

## What you produce

- `projection-authority/ast/resolves-code-body-canonical-lineage.json` — the declarative AST record.
- `generated/typescript/resolves-code-body-canonical-lineage.ts` — the rendered body, with a generated-file header identifying its scenario, responsibility, and signal.

## Reference

- [06 - Code-Body Projection Authority.md](../../06%20-%20Code-Body%20Projection%20Authority.md) and [07 - Generated TypeScript.md](../../07%20-%20Generated%20TypeScript.md).
