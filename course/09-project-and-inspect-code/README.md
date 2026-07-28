# 09 — Project and Inspect Code

## Goal

Turn the admitted body authority from Layers 14–15 into a native TypeScript
body without hand-authoring implementation.

The assignment's compiler-AST authority is:

```text
assignment/resolves-code-body-canonical-lineage.ts.ast.authority.json
```

Project it from the repository root:

```text
npm run project:bodies
```

The projector emits:

```text
assignment/resolves-code-body-canonical-lineage.ts
```

The generated body has exactly three declared statements:

```text
Resolve admitted lineage authority
    ↓
Execute the resolved lineage authority
    ↓
Project the canonical lineage signal
```

All tokens, compiler AST nodes, edge identities, ordering, awaiting posture,
types, lineage, artifact path, and signing identity come from JSON authority.
Students must not type or repair the TypeScript body.

## Verify

```text
npm run check:bodies
```

The assignment is GREEN only when the on-disk body exactly realizes the current
AST authority and its embedded Ed25519 signature verifies against the admitted
public key. To demonstrate the boundary, edit the generated file, run the check
to observe RED, then rerun `npm run project:bodies` to restore and re-sign it.
