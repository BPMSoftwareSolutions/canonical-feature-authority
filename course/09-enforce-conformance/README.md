# 09 — Enforce Conformance

*Corresponds to Section 9 of [The Student Experience.md](../../The%20Student%20Experience.md) — "The First Self-Governing Moment."*

## Goal

This is the milestone the whole course has been building toward. Run the body-admission governor — using the lineage registered in [08-establish-body-lineage/](../08-establish-body-lineage/) — against two files: the one you legitimately generated, and one you add by hand with no registration at all.

## The exercise

1. Confirm the registered body passes:

    ```text
    Observed:  src/resolves-code-body-canonical-lineage.ts
    Expected:  src/resolves-code-body-canonical-lineage.ts
    Result:    GREEN
    ```

2. Manually add an unauthorized file:

    ```text
    src/does-something-random.ts
    ```

3. Run the same governor against it:

    ```text
    Observed:  src/does-something-random.ts
    Expected:  No registered body
    Result:    RED — BODY_LINEAGE_NOT_FOUND
    ```

## Why this moment matters

Until this phase, everything you built was authority *about* a body — records describing what should exist. This is the first time the repository actually uses that authority to make a decision about something you just did, without being told the answer in advance. The governor doesn't know your `does-something-random.ts` file is suspicious because it looks suspicious; it's RED purely because no chain in `canonical-authority/body-lineage/` claims it.

## What you produce

- `proof/negative-controls/does-something-random.ts` plus its expected RED receipt, so this test case is preserved rather than deleted after the demo.
- `proof/receipts/` entries for both the GREEN and RED runs above.

## Reference

- Section 9 of [The Student Experience.md](../../The%20Student%20Experience.md).
