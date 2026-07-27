# proof/

**Testimony of what was observed.**

Where `governance/` holds the *evaluators*, this folder holds their *evidence and output*: fixtures to evaluate against, the receipts those evaluations produce, and the deliberately broken cases that prove the evaluators actually catch problems rather than always returning GREEN.

## Subfolders

| Folder | Owns |
|---|---|
| `fixtures/` | Sample repository states — bodies, authority records, and registries — used as input to governance evaluators during labs and the capstone. |
| `receipts/` | Conformance receipts produced by a governance run, each comparing expected topology to observed topology (see [09 - Projection and Conformance Proof.md](../09%20-%20Projection%20and%20Conformance%20Proof.md)). |
| `negative-controls/` | Deliberately contaminated fixtures — an orphan body, a hand-edited generated file, a non-atomic scenario — each paired with the RED disposition it must produce. |
| `conformance/` | The final, whole-repository conformance claim: every admitted body checked against every rule at once. |

## The rule this folder enforces

> A GREEN signal is only meaningful if a corresponding RED case exists and was actually observed turning red. `negative-controls/` is what keeps `receipts/` honest.

This is also where the capstone (Section 13 of [The Student Experience.md](../The%20Student%20Experience.md)) lives operationally: each adversarial step in the capstone checklist is a fixture in `negative-controls/` with an expected receipt in `receipts/`.
