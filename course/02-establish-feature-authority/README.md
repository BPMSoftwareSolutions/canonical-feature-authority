# 02 — Establish Feature Authority

*Corresponds to Phase 2, Section 8 of [The Student Experience.md](../../The%20Student%20Experience.md).*

## Goal

Manually author the identity chain for this course's running governance example: a body that rejects any code body without an admitted canonical lineage.

```text
govern-code-body-admission
    ↓
admit-a-body-with-one-current-canonical-lineage
    ↓
every-body-has-one-canonical-lineage
    ↓
resolves-code-body-canonical-lineage
    ↓
code-body-has-canonical-lineage
```

## What you produce

Records that live in `canonical-authority/`, not in this folder:

- `canonical-authority/features/govern-code-body-admission.json`
- `canonical-authority/scenarios/admit-a-body-with-one-current-canonical-lineage.json`
- `canonical-authority/obligations/every-body-has-one-canonical-lineage.json`
- `canonical-authority/responsibilities/resolves-code-body-canonical-lineage.json`
- `canonical-authority/signals/code-body-has-canonical-lineage.json`

See Section 7 of [The Student Experience.md](../../The%20Student%20Experience.md) for a conceptual example of the combined record before it's split across these five files.

## What you should take away

Once these five identities exist and reference each other correctly, the repository knows **why** the body you'll eventually generate exists — before a single line of that body has been written.

## Reference

- [01 - Human Intent.md](../../01%20-%20Human%20Intent.md) — why a human sentence must pass through review before becoming any of these records.
- [02 - Canonical Feature Authority.md](../../02%20-%20Canonical%20Feature%20Authority.md) and its [student walkthrough](../../02%20-%20Canonical-Feature-Authority%20-%20student%20walkthrough.md) — the full shape of a canonical feature authority record.
