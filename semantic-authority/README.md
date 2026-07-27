# semantic-authority/

**What the behavior means.**

This folder declares what a responsibility does *before* any code exists to do it: what it observes, what it decides, what it is allowed to conclude, and what counts as success or failure. It is the layer that stands between "we have a responsibility name" and "we have a function."

Nothing here is TypeScript, Python, or any other target language. It is target-language-agnostic meaning that a projector later renders into a specific language.

## Subfolders

| Folder | Owns |
|---|---|
| `observations/` | What facts a responsibility is authorized to observe as input. |
| `decisions/` | The evaluation rule that turns observed facts into a disposition. |
| `projections/` | How a decision's result is projected into the responsibility's returned signal. |
| `execution-models/` | The ordered steps a responsibility performs — semantic edges invoked, not code statements. |
| `iterations/` | Revisions to a semantic authority record as understanding of the responsibility matures. |
| `failure-policies/` | What a responsibility must do when its inputs or dependencies are not in an evaluable state. |
| `ports/` | The named external capabilities (semantic edges) a responsibility is permitted to invoke. |
| `proof-requirements/` | What evidence a responsibility's signal must carry to be considered provable, not just asserted. |

## The rule this folder enforces

> A responsibility's meaning is fully decided here. A code body may only embody this meaning — it may never supply meaning of its own.

See [05 - Semantic Authority.md](../05%20-%20Semantic%20Authority.md) for the worked example, including the `forbiddenBehaviors` pattern every record in this folder should carry.
