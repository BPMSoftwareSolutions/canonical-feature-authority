# course/

Twelve lessons, taken in order, that walk a student through the entire canonical path — from "why should this capability exist?" to "prove the repository rejects contamination." Each lesson is written as a student simulation: what the student is shown, what they predict, what they get wrong, what turns RED or GREEN, and what they can prove by the end.

This uses its own running example, distinct from the `evaluates-scenario-atomicity` example in the root-level [01 - Human Intent.md](../01%20-%20Human%20Intent.md) through [10 - The Complete Canonical Path.md](../10%20-%20The%20Complete%20Canonical%20Path.md) lessons, and distinct from the `validate-feature-scenario-atomicity` capability under [capabilities/](../capabilities/). Read the root-level lessons and `Canonical Feature Authority File-System Spine.md` first for the concepts — this course exists to make a student *experience* them, deliberately out of the "natural" build order, starting with a projection instead of a human need.

## Student mental model across the course

```text
Beginning:
"I am learning to generate code."

Middle:
"I am learning to establish authority."

End:
"I am building a repository that rejects unauthorized meaning."
```

## The lessons

| # | Lesson | Layers | What the student learns |
|---|--------|--------|--------------------------|
| 01 | [01-experience-projection/](01-experience-projection/) — Project Your First Deterministic Body | 16–18 | JSON is authority. TypeScript is projection. |
| 02 | 02-discover-human-need/ — Discover the Human Need | 1–2 | A problem statement explains the capability, but it does not authorize implementation. |
| 03 | 03-establish-canonical-behavior/ — Establish Canonical Behavior | 3 | The feature owns the behavioral promise. |
| 04 | 04-analyze-scenario-atomicity/ — Analyze Scenario Atomicity | 4 | An innocent-looking `And` may hide another obligation. |
| 05 | 05-establish-obligation-and-expectation/ — Establish Obligation and Expectation | 5–6 | Truth and expected behavior are related, but they are not the same authority. |
| 06 | 06-assign-worker-and-signal/ — Assign the Worker and Signal | 7–9 | The responsibility identifies who owns the truth. The signal communicates the result. |
| 07 | 07-author-semantic-authority/ — Put Meaning in Semantic Authority | 10–13 | The semantic layer must become rich enough that the code body has nothing left to decide. |
| 08 | 08-establish-legal-body/ — Establish the Legal Body | 14–15 | The expectation says what body must exist. The file-body authority says exactly where and how it may exist. |
| 09 | 09-project-and-inspect-code/ — Project and Inspect Code | 16–18 | Generated code is not independently authored implementation. It is native embodiment of admitted authority. |
| 10 | 10-execute-canonical-expectation/ — Execute the Canonical Expectation | 19 | Testing the semantic resolver alone does not prove the generated body. |
| 11 | 11-evaluate-operational-conformance/ — Evaluate Operational Conformance | 20–21 | Proof remains in the operational path, not in a passive documentation forest. |
| 12 | 12-adversarial-capstone/ — Adversarial Capstone | all | A governance system is not proven because the happy path works. It is proven because contamination reliably turns RED. |

## Lesson format

Every lesson follows the same classroom rhythm:

```text
1. What I am shown
2. What I think it means
3. What I am asked to do
4. What I submit
5. What the system evaluates
6. What turns RED or GREEN
7. What mistake I am likely to make
8. What the instructor reveals
9. What artifact survives
10. What I can now prove
```

## Governing constraint

Lessons deliberately run out of the "natural" build order — Lesson 1 starts at projection (Layers 16–18), not human need (Layers 1–2) — because experiencing a deterministic projection first makes every later lesson about *authority* land harder. Each lesson's artifacts live inside that lesson's own folder (e.g. `01-experience-projection/lesson-01/`), separate from the real worked capability under `capabilities/`, so a student's in-progress or intentionally-contaminated exercise files never get mistaken for governed repository content.

## Project every course body

Keep this repository and `declarative-typescript-body-projector` as sibling
directories under the same parent, install each repository once with
`npm install`, initialize the local classroom projector identity once, and
project from the course repository:

```text
npm run init:projection
npm run project:bodies
```

If the private key is absent on a fresh workstation, initialization creates a
new local key, updates the trusted public-key authority, and rotates the
`keyId` admitted by every AST authority before projection.

The command discovers every adjacent `*.ts.ast.authority.json` contract and
projects all 40 TypeScript bodies. Each contract contains the lossless compiler
token stream and AST topology. Each emitted body is its own receipt: its header
contains the projector ID, trusted key ID, authority hash, body hash, and
Ed25519 signature. No separate receipt file is created.

Before accepting student work, verify that no projected body was hand-edited:

```text
npm run check:bodies
```

The check reconstructs each body from AST authority and verifies its embedded
signature with `projection-authority/trusted-projector-keys.json`. Missing,
stale, hand-altered, incorrectly signed, invalid, and duplicate-target
projections fail the command.
