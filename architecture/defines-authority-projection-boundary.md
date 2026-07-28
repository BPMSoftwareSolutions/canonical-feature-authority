# The Authority-Projection Boundary

Every layer in the spine sits on one side of a single boundary:

```text
Authority
    declares what must be true, and who owns proving it.

Projection
    renders that declaration into a specific representation —
    Gherkin, TypeScript, an AST, a test, a conformance receipt.
```

Authority is durable. Projections are disposable — they can be regenerated at any time from their authority without losing meaning.

## What crosses the boundary, and what must not

A projection may carry forward identity: `featureId`, `scenarioId`, `obligationId`, `responsibilityId`, `signalId`. That identity is what lets a generated file, a test, and a conformance receipt all be recognized as describing the same semantic subject.

A projection must never carry forward a *decision* that authority did not already make. Concretely:

```text
Allowed in a generated body:
    invoking a declared semantic edge
    returning the semantic edge's result
    carrying lineage metadata (feature/scenario/responsibility/signal IDs)

Forbidden in a generated body:
    an if/switch/loop that encodes a domain rule
    constructing a result DTO by hand
    choosing which signal disposition to return
    mutating or rewriting canonical authority
```

If a decision shows up as a branch in generated code, it means the decision was never actually declared in authority — it was smuggled past review. The AST projection layer (Layer 17) exists specifically to catch this: an `IfStatement` or `SwitchStatement` in a body that authority declared branch-free is a structural violation, not a style complaint.

## Per-layer ownership

| Layer | Owns | Does not own |
|---|---|---|
| Obligation authority | the truth that must hold | how it's evaluated, what code renders it |
| Responsibility authority | the one worker who owns evaluating it | TypeScript syntax, file paths |
| Semantic authority | the evaluation rule and its disposition | naming, AST shape |
| Body/file-body authority | file path, public operation shape, structural constraints | the evaluation rule itself |
| TypeScript/AST projection authority | exact syntax | any new decision |
| Generated body | execution only | meaning of any kind |
| Conformance authority | comparing expected vs. observed | authoring or repairing either side |

This table is the same discipline applied at every one of the 21 layers in [shows-intent-to-execution-spine.ascii.md](shows-intent-to-execution-spine.ascii.md).
