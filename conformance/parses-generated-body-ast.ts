// Reference stub — not a working implementation.
//
// Owns parsing observed source text into the AST shape that
// projects-typescript-ast.json (Layer 17) can be compared against. See
// Canonical Feature Authority File-System Spine.md, Layer 20-21.

export interface ObservedAst {
  readonly kind: string;
  readonly [key: string]: unknown;
}

export async function parsesGeneratedBodyAst(source: string): Promise<ObservedAst> {
  throw new Error(
    "parsesGeneratedBodyAst is a documentation stub — see Canonical Feature Authority File-System Spine.md, Layer 20-21"
  );
}
