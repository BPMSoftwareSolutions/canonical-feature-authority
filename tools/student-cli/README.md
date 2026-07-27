# tools/student-cli/

**The guided command surface students use instead of manually wiring authority records.**

`The Student Experience.md` (Section 12) describes a `cfa` command students run to move a scenario through the whole path without hand-editing every file in `canonical-authority/`, `semantic-authority/`, and `projection-authority/` directly:

```bash
cfa begin      --feature <id> --scenario <id>     # capture intent, start the chain
cfa analyze scenario <id>                          # check atomicity before authoring anything
cfa scaffold authority --scenario <id>              # generate the canonical authority records
cfa project body --responsibility <id> --target ts  # project the code body
cfa prove body <path>                               # run governance + emit a conformance receipt
```

**Status: not yet implemented.** This folder is a placeholder for that CLI. Nothing runnable exists here yet — the repository is currently documentation-only, and the labs in `course/` can be worked through by hand-authoring the JSON/TypeScript records the lessons show, without this tool.

When the CLI is built, this README should be replaced with real install and usage instructions, and the command reference above should move to match whatever the implementation actually supports.
