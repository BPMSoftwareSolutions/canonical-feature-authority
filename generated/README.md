# generated/

**Disposable physical output.**

Everything in this folder is produced by a projector reading `projection-authority/` records. Nothing here is hand-authored, and nothing here is a source of truth about anything.

If a file in this folder disappeared and was regenerated from its projection authority, the repository would be no worse off. That disposability is the point: it is what lets `governance/` treat any file here that *doesn't* trace back to an admitted projection as contamination, not as "someone's code."

## Subfolders

| Folder | Owns |
|---|---|
| `typescript/` | Generated TypeScript source files, each carrying a header comment identifying its scenario, responsibility, signal, and originating projection (see [07 - Generated TypeScript.md](../07%20-%20Generated%20TypeScript.md)). |

## The rule this folder enforces

> Every file here is a projection, not an authorship. If it can't be traced to a projection record, it doesn't belong.
