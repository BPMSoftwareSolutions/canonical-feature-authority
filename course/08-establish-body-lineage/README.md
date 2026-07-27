# 08 — Establish Body Lineage

*Corresponds to Section 9 of [The Student Experience.md](../../The%20Student%20Experience.md).*

## Goal

Register the body you generated in [06-project-code-bodies/](../06-project-code-bodies/) so the repository has a durable record of which authority chain owns it — the thing your governor (still being built) will check every other body against.

## What you produce

A `canonical-authority/body-lineage/` entry linking the observed file path to its owning chain:

```text
Observed:
src/resolves-code-body-canonical-lineage.ts

Owning chain:
govern-code-body-admission
  → admit-a-body-with-one-current-canonical-lineage
  → every-body-has-one-canonical-lineage
  → resolves-code-body-canonical-lineage
```

## Why this is its own phase, separate from projection

Generating a body (phase 06) and *registering* that body's lineage (this phase) are different acts. A file can exist on disk without being registered — that's exactly the orphan-file case the next phase tests for. This phase is where you make the registration explicit and durable, rather than assuming the projector's output is automatically "known" to the rest of the repository.

## Reference

- Section 9 of [The Student Experience.md](../../The%20Student%20Experience.md) — read ahead to see what this registration enables in the very next phase.
