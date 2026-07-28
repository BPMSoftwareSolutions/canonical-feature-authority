# 01 — Experience Projection

*Corresponds to Phase 1, Section 8 of [The Student Experience.md](../../The%20Student%20Experience.md).*

## Goal

Before authoring anything, watch a projection happen. You are given an
already-written AST authority contract and a compiler; you generate one signed
file and verify the proof it carries.

```text
Canonical projection
        ↓
Compiler
        ↓
Generated file carrying its projection attestation
```

From the repository root:

```text
npm run project:bodies
```

For this lesson, the executable authority is
`lesson-01/greets-student.ts.ast.authority.json`. It owns the lossless
TypeScript token stream, compiler AST topology, output path, semantic lineage,
and signing identity. Students project and inspect `greets-student.ts`; they do
not repair that artifact by hand.

## What you should take away

- **Authority is durable.** The projection record doesn't change just because you ran the compiler.
- **Code is generated.** The file you now have didn't come from typing — it came from rendering a structure that already existed.
- **Generated code is replaceable.** If you deleted the output file and reran the compiler, you'd get the same thing back.
- **The projection is the receipt.** The signed header binds the exact body
  bytes to the exact authority hash and trusted projector key.

## What this lab does not ask you to do yet

You are not writing a feature, scenario, obligation, or responsibility in this lab. That begins when the course returns to Layers 1–2. This lab exists only so that "projection" stops being an abstract word before you're asked to design what gets projected.

## Reference

- [06 - Code-Body Projection Authority.md](../../06%20-%20Code-Body%20Projection%20Authority.md) — the shape of a projection record.
- [07 - Generated TypeScript.md](../../07%20-%20Generated%20TypeScript.md) — the shape of what a projector renders, and why the generated-file header comments matter.
