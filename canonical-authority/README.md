# canonical-authority/

**What should exist, and why.**

This is the source of truth for the repository. Every feature, scenario, obligation, responsibility, and signal identity that any other folder refers to is declared here first — nowhere else.

Nothing in this folder is executable. It is the admitted, reviewed record of intent: what has been authorized to exist, not how it behaves or how it is implemented.

## Subfolders

| Folder | Owns |
|---|---|
| `features/` | Canonical feature authority records — the top-level capability a scenario belongs to. |
| `scenarios/` | One atomic scenario each: its condition, trigger, expected result, and expected signal. |
| `obligations/` | The single independent obligation a scenario is evaluated against. |
| `responsibilities/` | The named responsibility that owns evaluating one obligation. |
| `signals/` | The GREEN/RED signal identity a responsibility is authorized to emit. |
| `body-lineage/` | The registered link from a responsibility to the one code body permitted to embody it. |

## The rule this folder enforces

> A scenario, obligation, responsibility, or signal is only real if it is recorded here. Nothing downstream may invent one.

See [01 - Human Intent.md](../01%20-%20Human%20Intent.md) and [02 - Canonical Feature Authority.md](../02%20-%20Canonical%20Feature%20Authority.md) for the worked example this folder's records are drawn from.
