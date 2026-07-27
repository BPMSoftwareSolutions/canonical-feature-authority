# 03 — Analyze Scenario Intent

*Corresponds to Phase 3, Section 8 of [The Student Experience.md](../../The%20Student%20Experience.md).*

## Goal

Before writing any semantic authority, analyze the scenario you authored in [02-establish-feature-authority/](../02-establish-feature-authority/) for atomicity. This is a design check, not an implementation step — you are asking whether the scenario is small enough to deserve one responsibility and one signal.

## The questions to ask

```text
How many obligations are present?
How many workers are hidden?
How many signals are required?
Is this one transistor or already a circuit?
```

## What you produce

A short scenario analysis note (kept in this folder, since it's working notes rather than an authority record):

```text
Scenario verdict:      ATOMIC
Obligation count:      1
Responsibility count:  1
Expected signal count: 1
```

If your scenario fails this check — more than one obligation, more than one responsibility, more than one signal — go back and split it before continuing. Every later phase assumes the scenario passed this analysis.

## Why this comes before semantic authoring

A dense scenario contaminates every downstream artifact: the semantic authority, the projected body, and the proof all inherit whatever ambiguity the scenario had. It is far cheaper to catch non-atomicity here than after a body has been generated from it.

## Reference

- The governing rule stated across every root-level lesson: *one scenario owns one obligation, one responsibility, one expected result, and one observable signal.*
