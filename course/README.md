# course/

The ten labs students work through, in order. Each phase builds one piece of the repository's own governance, using a single running example — teaching the code-body-admission governor described in [The Student Experience.md](../The%20Student%20Experience.md).

This is a different worked example than the one traced in the root-level [01 - Human Intent.md](../01%20-%20Human%20Intent.md) through [10 - The Complete Canonical Path.md](../10%20-%20The%20Complete%20Canonical%20Path.md) lessons (which follow `evaluates-scenario-atomicity`). Read the root-level lessons first for the concepts; use this course to build them yourself against a second example, `resolves-code-body-canonical-lineage` — the governor that rejects any code body without an admitted canonical lineage.

## The phases

| # | Folder | Lab |
|---|--------|-----|
| 01 | [01-experience-projection/](01-experience-projection/) | Run a projector against an already-authored authority record and get back one generated file, before authoring anything yourself. |
| 02 | [02-establish-feature-authority/](02-establish-feature-authority/) | Manually author the feature, scenario, obligation, and responsibility identities for the code-body-admission governor. |
| 03 | [03-analyze-scenario-intent/](03-analyze-scenario-intent/) | Check the authored scenario for atomicity before writing any semantic authority for it. |
| 04 | [04-design-semantic-transistors/](04-design-semantic-transistors/) | Design the one-obligation, one-responsibility, one-signal "transistor" this governor will be. |
| 05 | [05-author-semantic-authority/](05-author-semantic-authority/) | Write the semantic authority record: observation, evaluation, GREEN/RED dispositions, evidence requirements. |
| 06 | [06-project-code-bodies/](06-project-code-bodies/) | Turn the semantic authority into a code-body projection authority record and project a TypeScript body from it. |
| 07 | [07-inspect-generated-ast/](07-inspect-generated-ast/) | Inspect the generated body's AST as a governance surface, not just as output. |
| 08 | [08-establish-body-lineage/](08-establish-body-lineage/) | Register the generated body's lineage so the repository knows which authority chain owns it. |
| 09 | [09-enforce-conformance/](09-enforce-conformance/) | Run the first body against a second, unregistered file and watch the repository reject it — the first self-governing moment. |
| 10 | [10-complete-the-fractal/](10-complete-the-fractal/) | Add the remaining governance bodies (AST conformance, projection freshness, topology conformance) and produce a full conformance receipt. |

## Governing constraint

Every phase produces artifacts that live in the top-level pillar folders (`canonical-authority/`, `semantic-authority/`, `projection-authority/`, `generated/`, `governance/`, `proof/`) — a phase folder itself holds only the lab's instructions and worked notes, never the authority records themselves. This keeps the "what phase am I in" structure separate from "what does the repository actually contain," which is the same separation the finished repository maintains between teaching material and governed content.
