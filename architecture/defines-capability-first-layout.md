# Capability-First Layout

The repository is organized vertically, by capability and then by scenario — not horizontally, by artifact type.

```text
Vertical (what this repository does):
capabilities/validate-feature-scenario-atomicity/
  scenarios/reject-a-scenario-with-multiple-obligations/
    describes-human-need.md
    requires-one-independent-obligation.obligation.json
    expects-scenario-rejection.expectation.json
    evaluates-scenario-atomicity/
      declares-responsibility.json
      ...
      evaluates-scenario-atomicity.ts
      evaluates-projection-conformance.sej.json

Horizontal (what this repository must never become):
canonical-authority/
semantic-authority/
expectations/
body-contracts/
projections/
generated/
tests/
proof/
receipts/
```

## Why vertical wins

A horizontal layout groups files by *kind* — every obligation in one folder, every generated body in another, every test in a third. That looks tidy until you try to understand one scenario: you now have to open six or seven top-level folders and hunt for the files whose IDs happen to match. The relationship between an obligation and the responsibility that owns it is implicit — recoverable only by grepping for a shared `scenarioId`.

A vertical, capability-first layout keeps the whole story for one scenario inside one folder. Opening `reject-a-scenario-with-multiple-obligations/` shows the human need, the obligation, the expectation, and — inside `evaluates-scenario-atomicity/` — every layer of authority, projection, generated code, and conformance for the one responsibility that scenario owns. Nothing is split across the repository by accident of file type.

## What this costs

Files with the same *shape* (every scenario has a `declares-responsibility.json`, every responsibility has a `.sej.json` set) are duplicated across scenario folders rather than deduplicated into one shared registry. That repetition is intentional: it keeps each scenario folder self-contained and independently readable, at the cost of some duplication a horizontal layout would have avoided. For a teaching repository — and for any repository whose goal is that a reader can understand one scenario without needing the whole map — that trade favors locality over deduplication.

See [Canonical Feature Authority File-System Spine.md](../Canonical%20Feature%20Authority%20File-System%20Spine.md), section "The Complete Spine Inside One Scenario," for the full one-scenario view this layout is optimizing for.
