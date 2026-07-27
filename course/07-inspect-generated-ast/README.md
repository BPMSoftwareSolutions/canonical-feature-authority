# 07 — Inspect Generated AST

*Corresponds to Phase 7, Section 8 of [The Student Experience.md](../../The%20Student%20Experience.md).*

## Goal

Look at the body you generated in [06-project-code-bodies/](../06-project-code-bodies/) as a governance surface, not just as output you're done with.

```text
Canonical responsibility
        ↓
Code-body projection authority
        ↓
Language projection
        ↓
AST
        ↓
Source text
```

## What to represent

The body's structural expectations, made explicit:

```text
Function declaration
├── name: resolvesCodeBodyCanonicalLineage
├── parameters: one immutable context
├── statement 1: invokes semantic edge
├── statement 2: invokes semantic edge
├── return: projects semantic result
└── forbidden:
    ├── if
    ├── switch
    ├── loops
    ├── direct SDK calls
    └── DTO object construction
```

## Why this phase exists on its own

It would be easy to treat the AST as an implementation detail the projector handles invisibly. This phase asks you to look at it directly and notice that the "forbidden" list above is exactly what [09-enforce-conformance/](../09-enforce-conformance/) will later check the physical file against. The AST record isn't documentation of what happened — it's the standing rule for what's allowed to happen to this body in the future, including edits a well-meaning developer might make by hand.

## What you produce

Notes (in this folder) walking through the AST tree for `resolves-code-body-canonical-lineage.ts`, confirming it matches the `projection-authority/ast/` record exactly — no more statements, no fewer, no forbidden constructs present.

## Reference

- Section 7 of [The Student Experience.md](../../The%20Student%20Experience.md).
