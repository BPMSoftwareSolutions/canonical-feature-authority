# projection-authority/

**How the body is structurally rendered.**

This folder declares the exact structure a code body must have — its declarations, parameters, statements, and return shape — before the language projector renders it into source text. It is the last authority layer before generated code; nothing after this folder is allowed to introduce new decisions.

## Subfolders

| Folder | Owns |
|---|---|
| `ast/` | The declarative, language-agnostic shape a body must take: function declarations, parameters, statement sequence, forbidden constructs. |
| `typescript/` | The TypeScript-specific rendering rules the projector applies to an AST record (import style, `async`/`await` conventions, ESM output). |
| `body-registry/` | The mapping from each admitted responsibility to its expected file path and projection identity — what governance later checks the physical repository against. |

## The rule this folder enforces

> If it isn't declared in an AST record here, the projector may not generate it — no matter how reasonable it looks in the moment.

See [06 - Code-Body Projection Authority.md](../06%20-%20Code-Body%20Projection%20Authority.md) for the worked example, and Section 7 of [The Student Experience.md](../The%20Student%20Experience.md) for how the AST becomes a governance surface, not just an implementation detail.
