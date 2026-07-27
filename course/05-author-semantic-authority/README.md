# 05 — Author Semantic Authority

*Corresponds to Phase 4–5, Section 8 of [The Student Experience.md](../../The%20Student%20Experience.md).*

## Goal

Turn the transistor design from [04-design-semantic-transistors/](../04-design-semantic-transistors/) into a durable semantic authority record and an execution model. This is the last phase before any code exists — you are declaring what the responsibility *means*.

## What you author

A semantic authority record, describing:

```text
Authorized input
Observed facts
Evaluation authority
GREEN disposition
RED disposition
Evidence requirements
Blocking posture
```

For example:

```json
{
  "signalId": "code-body-has-canonical-lineage",
  "obligationId": "every-body-has-one-canonical-lineage",
  "evaluation": "exactly-one-lineage-resolves",
  "greenDisposition": "BODY_LINEAGE_RESOLVED",
  "redDispositions": [
    "BODY_LINEAGE_NOT_FOUND",
    "BODY_LINEAGE_AMBIGUOUS",
    "BODY_LINEAGE_INCOMPLETE"
  ],
  "blocking": true
}
```

And an execution model — the ordered semantic edges the responsibility invokes, not code statements:

```text
1. Observe the code-body identity.
2. Retrieve canonical body registrations.
3. Resolve matching lineage.
4. Evaluate lineage cardinality.
5. Project the lineage signal.
```

Note where the cardinality decision lives: the semantic authority defines what `0`, `1`, and `2+` matches mean (`NOT_FOUND` / `RESOLVED` / `AMBIGUOUS`) — no code body gets to invent that mapping later.

## What you produce

- `semantic-authority/decisions/code-body-has-canonical-lineage.json`
- `semantic-authority/execution-models/resolves-code-body-canonical-lineage.json`
- `semantic-authority/failure-policies/`, `semantic-authority/ports/`, and `semantic-authority/proof-requirements/` entries as needed for the same responsibility.

## Reference

- [05 - Semantic Authority.md](../../05%20-%20Semantic%20Authority.md) — record shape and the `forbiddenBehaviors` pattern.
- [semantic-authority/README.md](../../semantic-authority/README.md) — what each subfolder under `semantic-authority/` owns.
