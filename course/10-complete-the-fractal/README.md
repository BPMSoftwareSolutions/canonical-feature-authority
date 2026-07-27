# 10 — Complete the Fractal

*Corresponds to Section 10 of [The Student Experience.md](../../The%20Student%20Experience.md).*

## Goal

You built one governance body in phases 01–09: does a code body have canonical lineage? This phase adds the remaining governors, each one narrower in scope than a full reimplementation of the last, until together they can produce a complete conformance receipt for the repository.

## The remaining bodies

```text
Body 2 — Verify expected body location
  Does the body exist at its projected path?

Body 3 — Verify projected body digest
  Do the body bytes match the current projection receipt?

Body 4 — Verify body AST conformance
  Does the body contain only allowed structural forms?

Body 5 — Verify scenario atomicity
  Does each scenario carry one coherent obligation?

Body 6 — Verify responsibility coverage
  Does each obligation resolve to one responsibility?

Body 7 — Verify semantic authority coverage
  Does each responsibility have the required semantic authority?

Body 8 — Project code bodies
  Can the admitted responsibility be projected into the target language?

Body 9 — Verify expected versus observed topology
  Do the declared and physical repository topologies conform?

Body 10 — Produce the complete conformance receipt
  Can the repository truthfully claim canonical feature closure?
```

## The fractal

```text
Each body governs one obligation.

Together, the bodies govern the process
that creates and governs future bodies.
```

Notice that Body 1 (the lineage governor from phases 02–09) doesn't get replaced by Body 2 — it becomes one check among several that all run together. Each new body in this list is built with exactly the same discipline as Body 1: one obligation, one responsibility, one GREEN/RED signal, registered lineage, a projected implementation, and a negative control proving it actually catches the failure it claims to catch.

## What you produce

- One `governance/` evaluator per remaining body, placed in the matching subfolder (`ast-conformance/`, `projection-freshness/`, `topology-conformance/`, etc.).
- A final `proof/conformance/` receipt that runs all ten bodies together and states the bounded claim from Section 14 of [The Student Experience.md](../../The%20Student%20Experience.md).

## This is also the on-ramp to the capstone

Once all ten bodies exist and pass, you're ready for the adversarial capstone: deliberately breaking each guarantee one at a time (orphan body, hand-edited generated file, non-atomic scenario, stale projection, ...) and confirming the repository catches every one of them, then restoring authority and watching the repository return to GREEN.

## Reference

- Sections 10, 13, and 14 of [The Student Experience.md](../../The%20Student%20Experience.md).
