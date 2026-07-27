# governance/

**Admission and conformance enforcement.**

This folder holds the evaluators that decide whether the physical repository matches what canonical, semantic, and projection authority say it should look like. Governance does not author anything — it only observes the repository and returns GREEN or RED.

This is the layer students build first (see [The Student Experience.md, Section 3](../The%20Student%20Experience.md)), because it is the smallest capability that provides the most immediate protection: rejecting any code body that has no admitted canonical lineage, before the repository ever tries to generate one.

## Subfolders

| Folder | Owns |
|---|---|
| `body-admission/` | The first governor: does an observed code body resolve to exactly one admitted feature → scenario → obligation → responsibility chain? |
| `body-lineage/` | Resolves and records *which* chain currently owns a given body, once admission has passed. |
| `ast-conformance/` | Does an admitted body's actual structure match the AST shape declared in `projection-authority/ast/`? |
| `projection-freshness/` | Does an admitted body's digest match the most recent projection receipt, or has it drifted from what was last generated? |
| `topology-conformance/` | Does the declared repository topology (expected features, scenarios, bodies) match the observed physical topology? |

## The rule this folder enforces

> A physical code body cannot exist legitimately without canonical ownership. Governance's job is to prove that ownership — or prove its absence.

## Escalation order

Each evaluator in this folder answers a narrower question than the one after it. Students should build and pass them in this order:

```text
body-admission        → does this body belong to anyone?
body-lineage          → to whom, specifically?
ast-conformance       → is its structure what was authorized?
projection-freshness  → is it still current, or stale?
topology-conformance  → does the whole repository line up, not just this body?
```
