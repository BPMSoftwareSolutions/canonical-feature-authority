# Canonical Feature Authority

Canonical Feature Authority is the discipline of declaring software behavior exactly once, as reviewed and admitted authority, and treating every other artifact — Gherkin, semantic decisions, generated code, tests, and proof — as a traceable projection of that single declaration.

## The problem this solves

Left unconstrained, a human sentence turns directly into code. Every missing decision — what counts as valid input, how to classify edge cases, what "success" means, which error message to return — gets invented ad hoc by whoever happens to write the implementation. Two developers implementing "the same" feature produce different behavior, different failure modes, and no shared record of which decisions were actually made on purpose.

Canonical Feature Authority inverts this. Before any code exists, the meaning is written down: the condition, the trigger, the expected result, the obligation, the responsibility that owns it, and the signal it must emit. Code is generated *from* that meaning. It is never the place meaning is decided.

## The governing identity

Every artifact in this repository — human-facing markdown, JSON authority records, generated TypeScript, tests, and conformance evaluators — carries the same five-part coordinate:

```json
{
  "featureId": "...",
  "scenarioId": "...",
  "obligationId": "...",
  "responsibilityId": "...",
  "signalId": "..."
}
```

That coordinate may be projected into new representations (a Gherkin `Given/When/Then`, a TypeScript function name, a test assertion). It must never drift — the same scenario cannot mean two different things depending on which file you're reading.

## How to read this repository

Start with [shows-intent-to-execution-spine.ascii.md](shows-intent-to-execution-spine.ascii.md) for the full layer-by-layer path. Then look at one worked capability under `capabilities/` — `validate-feature-scenario-atomicity` — to see every layer populated for a real (if small) example.

See also:

- [defines-authority-projection-boundary.md](defines-authority-projection-boundary.md) — what each layer owns and does not own.
- [defines-capability-first-layout.md](defines-capability-first-layout.md) — why the repository is organized vertically by capability rather than horizontally by artifact type.
- [defines-generated-body-discipline.md](defines-generated-body-discipline.md) — the rules a generated code body must follow.
