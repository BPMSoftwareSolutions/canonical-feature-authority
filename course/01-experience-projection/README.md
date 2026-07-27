# 01 — Experience Projection

*Corresponds to Phase 1, Section 8 of [The Student Experience.md](../../The%20Student%20Experience.md).*

## Goal

Before authoring anything, watch a projection happen. You are given an already-written declarative projection record and a compiler; you generate one file and read the receipt it produces.

```text
Canonical projection
        ↓
Compiler
        ↓
Generated file
        ↓
Projection receipt
```

## What you should take away

- **Authority is durable.** The projection record doesn't change just because you ran the compiler.
- **Code is generated.** The file you now have didn't come from typing — it came from rendering a structure that already existed.
- **Generated code is replaceable.** If you deleted the output file and reran the compiler, you'd get the same thing back.
- **The receipt explains where it came from.** Every generated artifact should be traceable to the exact record that produced it.

## What this lab does not ask you to do yet

You are not writing a feature, scenario, obligation, or responsibility in this lab. That begins in [02-establish-feature-authority/](../02-establish-feature-authority/). This lab exists only so that "projection" stops being an abstract word before you're asked to design what gets projected.

## Reference

- [06 - Code-Body Projection Authority.md](../../06%20-%20Code-Body%20Projection%20Authority.md) — the shape of a projection record.
- [07 - Generated TypeScript.md](../../07%20-%20Generated%20TypeScript.md) — the shape of what a projector renders, and why the generated-file header comments matter.
