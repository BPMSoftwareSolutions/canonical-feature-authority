// Reference stub — not a working implementation.
//
// Owns the `cfa prove body <path>` command: running a scenario's
// runs-projection-conformance.ts and printing the per-check GREEN/RED
// table (canonical lineage, projection identity, expected path, expected
// digest, AST shape, forbidden constructs) down to a final BODY_CONFORMS
// / BODY_DOES_NOT_CONFORM disposition. See The Student Experience.md,
// Section 12.

export async function evaluatesConformance(bodyPath: string): Promise<void> {
  throw new Error(
    `evaluatesConformance is a documentation stub — see The Student Experience.md, Section 12 (requested: ${bodyPath})`
  );
}
