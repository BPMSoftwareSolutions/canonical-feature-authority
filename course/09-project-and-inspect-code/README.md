# 09 — Project and Inspect Code

## Goal

Turn the admitted body authority from Layers 14–15 into a native TypeScript
body without hand-authoring implementation.

The assignment authority is:

```text
assignment/projects-resolves-code-body-canonical-lineage.projector.json
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

All edge identities, ordering, awaiting posture, lineage headers, parameter
type, return type, and artifact path come from JSON authority. Students must
not type or repair the TypeScript body.

## Verify

```text
npm run check:bodies
```

The assignment is GREEN only when the on-disk bytes are exactly what the
current authority projects. To demonstrate the boundary, edit the generated
file, run the check to observe RED, then rerun `npm run project:bodies` to
restore it from authority.
