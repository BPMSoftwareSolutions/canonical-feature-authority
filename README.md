# Canonical Feature Authority

A documentation-only course for students learning how to build **intent-driven, deterministic systems** — software where behavior is declared once, as canonical authority, and every downstream artifact (readable specs, code, runtime signals, and proofs) is a traceable projection of that single declaration.

There is no runnable code in this repository. Every lesson is a Markdown file, and every example in those files is illustrative JSON, Gherkin, or TypeScript meant to be read, not executed. The directory structure below the lessons mirrors what a *real* implementation of this architecture would look like, so students can place their own worked examples in the same shape a production repository would use — but the folders themselves start out holding only structure and README stubs, not working code.

## Who this is for

University students (and instructors) who want a rigorous mental model for a specific architectural discipline: separating *what a system is authorized to do* from *how that behavior happens to be implemented*. No prior familiarity with any particular framework is assumed — the lessons are self-contained and build their vocabulary from first principles.

## The core idea

Traditional development often lets a human sentence turn directly into code, with all the missing decisions (edge cases, error handling, what "success" even means) getting invented ad hoc by whoever writes the implementation. This course teaches the opposite discipline:

```text
One scenario
    ↓
One obligation
    ↓
One responsibility
    ↓
One expected result
    ↓
One observable RED/GREEN signal
    ↓
One downstream body lineage
    ↓
One coherent proof boundary
```

A single human need is followed through **one continuous, named example** — rejecting a feature scenario that bundles more than one independent obligation — as it passes through every layer of the architecture. By the end, students see that the same scenario, obligation, responsibility, and signal identity persist unchanged from a plain-English sentence all the way to a passing conformance proof.

## How to read this repo

Start with the overview, then work through the numbered lessons in order:

| # | File | What it covers |
|---|------|-----------------|
| — | [From Feature Authority to Projected Code.md](From%20Feature%20Authority%20to%20Projected%20Code.md) | The whole walkthrough end-to-end in one document — read this first as a map of the full path. |
| 01 | [01 - Human Intent.md](01%20-%20Human%20Intent.md) | Where every scenario starts: an unreviewed human sentence, and why it must not directly become code. |
| 02 | [02 - Canonical Feature Authority.md](02%20-%20Canonical%20Feature%20Authority.md) | The machine-readable source of truth that a reviewed intent becomes. |
| 02 | [02 - Canonical-Feature-Authority - student walkthrough.md](02%20-%20Canonical-Feature-Authority%20-%20student%20walkthrough.md) | A dedicated, slower-paced walkthrough of section 2 for students who want the extra detail. |
| 03 | [03 - Gherkin Projection.md](03%20-%20Gherkin%20Projection.md) | Projecting canonical authority into human-readable Gherkin — and why Gherkin is a *projection*, not the source. |
| 04 | [04 - Expectation Projection.md](04%20-%20Expectation%20Projection.md) | Declaring what must exist downstream (responsibility, signal, body, proof) if the scenario is implemented correctly. |
| 05 | [05 - Semantic Authority.md](05%20-%20Semantic%20Authority.md) | Declaring what a responsibility *means* — its evaluation rules and forbidden behaviors — before any code is written. |
| 06 | [06 - Code-Body Projection Authority.md](06%20-%20Code-Body%20Projection%20Authority.md) | The structured, declarative authority that dictates exactly what code structure must be rendered. |
| 07 | [07 - Generated TypeScript.md](07%20-%20Generated%20TypeScript.md) | The actual generated code — a disposable, tagged projection of the structure declared in 06. |
| 08 | [08 - Observed Signal.md](08%20-%20Observed%20Signal.md) | What the running system emits at runtime, and how RED/GREEN dispositions are interpreted. |
| 09 | [09 - Projection and Conformance Proof.md](09%20-%20Projection%20and%20Conformance%20Proof.md) | Comparing expected topology against observed topology to produce a conformance receipt. |
| 10 | [10 - The Complete Canonical Path.md](10%20-%20The%20Complete%20Canonical%20Path.md) | The full path retraced end to end, with the identity that must never drift across layers. |

## Repository layout

Beyond the reading list above, the repository is organized to mirror the architecture it teaches — each top-level folder owns exactly one layer of authority, matching the separation the lessons describe:

```text
canonical-feature-authority/
├── course/                 10 hands-on labs, in order — see course/README.md
├── canonical-authority/    what should exist, and why (features, scenarios, obligations, ...)
├── semantic-authority/     what the behavior means (decisions, execution models, ...)
├── projection-authority/   how a body is structurally rendered (AST, TypeScript rendering, ...)
├── generated/              disposable physical output — projected, never hand-authored
├── governance/             admission and conformance enforcement over the above
├── proof/                  fixtures, receipts, and negative controls evidencing governance runs
└── tools/student-cli/      the guided command surface described for working the labs
```

Each of those folders has its own README explaining what it owns and what it explicitly does not own. Start with [course/README.md](course/README.md) if you want the hands-on path — it walks through building a real (if small) governance body, phase by phase, using the same discipline the reading lessons describe. See [The Student Experience.md](The%20Student%20Experience.md) for the full pedagogical design behind this layout, including the capstone exercise.

## The governing rule

Every lesson enforces the same constraint on the running example:

> One scenario owns one obligation, one responsibility, one expected result, and one observable signal.

Layers are strictly separated by what they own. Canonical authority owns *meaning* — condition, trigger, expected result, obligation, responsibility, signal. It never owns *syntax* — TypeScript formatting, SDK calls, or runtime library choices. That separation is what makes every downstream artifact a deterministic projection instead of a fresh reinterpretation.

## What to look for while reading

Each lesson repeats a small set of recurring artifacts so the same identities stay traceable across every layer:

- **Artifact tags** — every JSON example carries an `artifactKind`, `layer`, and `proofRole`, so you can always tell what kind of authority you're looking at and how it was produced.
- **"What this layer owns" / "does not own"** — most lessons draw an explicit boundary around the layer's responsibility.
- **Forbidden behaviors** — several layers enumerate what a projector or agent is *not* allowed to do (e.g., rewrite a feature, merge obligations, silently repair authority), which is as important to the model as what it must do.
- **The same five identifiers** — `featureId`, `scenarioId`, `obligationId`, `responsibilityId`, and `signalId` recur in every lesson. Watching them stay identical from lesson 1 to lesson 10 is the point of the course.

## Contributing

This is a documentation-only repository. Contributions should stay in the same spirit: Markdown lessons that trace a concrete example through the full canonical path, with explicit artifact tags and clearly stated ownership boundaries at each layer.
