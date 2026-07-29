# Governed Inspection Documentation Projection Contract

## Status

```text
CONTRACT VERSION: 1.0.0
AUTHORITY SCHEMA: governed-inspection-document-authority.v1
PROJECTOR: canonical-governed-markdown-projector@1.0.0
```

## Purpose

This contract defines one constrained Markdown format for governed inspection
documents. JSON authority owns the document's meaning and ordered content. The
projector owns Markdown punctuation, block separation, line endings, encoding,
and the terminal newline.

The initial conformance subject is:

```text
authority:
architecture/inspects-projected-body-provenance.authority.json

projection:
architecture/inspects-projected-body-provenance.md
```

The authority must project the existing Markdown byte-for-byte. After adoption,
the JSON authority is the editable source and the Markdown is disposable.

## Normative artifacts

```text
schema:
schemas/governed-inspection-document-authority.schema.json

projection library:
tools/governed-inspection-document-projection.mjs

projector:
tools/projects-governed-inspection-document.mjs

adoption tool:
tools/adopts-governed-inspection-document.mjs

verifier:
tools/verifies-governed-inspection-document.mjs

reusable authority template:
templates/governed-inspection-document-authority.template.json
```

## Authority grammar

The root authority declares:

```text
authority type and stable document ID
one document title
one deterministic projection contract
one ordered non-empty block sequence
```

Version 1 admits exactly three block types:

```text
heading
  projector emits "#" repeated level times, one space, then text

paragraph
  projector emits the declared non-empty lines without reflow

fenced-code
  projector emits three backticks plus language, declared content lines,
  and a three-backtick closing fence
```

General Markdown is intentionally not admitted. Lists, tables, HTML, alternate
fences, implicit headings, trailing whitespace, and embedded line endings
require a later schema and projector version. Inspection documents may express
structured lists and tables inside `text` fenced-code blocks, as the adopted
provenance contract does.

## Document profiles

The schema admits two explicit profiles:

```text
canonical-markdown.v1
  validates deterministic Markdown structure and byte projection

authority-projection-implementation-contract.v1
  validates deterministic Markdown plus the complete implementation-contract
  authority and projection spine
```

The strict implementation-contract profile requires a `subject` containing one
feature ID and an ordered non-empty scenario-ID set.

It also requires these level-two sections in this order:

```text
Status
User story
Acceptance Gherkin
Physical canonical feature authority
Repository spine
Complete artifact set for the normative scenario
Authority identity and projection ledger
Normative evidence schemas
Complete SEJ inputs
Projected TypeScript bodies
Ordered terminal acceptance algorithm
RED dispositions
Manual inspection sequence
Implementation exit condition
```

Validation cross-checks:

```text
the user story contains As a, I want, and So that
the Gherkin contains Feature, As a, I want, So that, and ordered scenario tags
the Gherkin scenario tags equal subject.scenarioIds
the Gherkin Background contains only shared immutable Given and And facts
each Gherkin scenario contains an ordered Given, one When, and one Then
the parsed canonical feature authority equals the declared subject
the repository spine contains the subject feature root and canonical authority
the normative artifact set contains lineage, SEJ, AST, and TypeScript roles
the projection ledger covers every declared scenario in order
every ledger scenario contains primary, type, expectation, and conformance
ledger identities and projected filenames are unique and mechanically derived
the normative scenario contains four complete parseable SEJ inputs
every SEJ has the admitted closed shape, lineage, constraints, and artifact path
the document contains four syntactically valid projected TypeScript bodies
the primary, expectation, and conformance bodies reproduce their SEJs exactly
the type body declares exactly the names admitted by its SEJ
the evidence artifact set, schemas, types, parents, and signer roles form one
  schema-closed catalog
the root evidence artifact has a null parent and every later parent is exact
the acceptance algorithm has one ordered check-to-RED map
every RED disposition is assigned to exactly one ordered acceptance check
the RED disposition block is a non-empty JSON array
```

Failure of any strict-profile invariant is a document-conformance failure even
when the Markdown bytes otherwise reproduce.

JSON Schema and executable validation have distinct normative jobs. Draft
2020-12 validates the closed authority envelope, block grammar, profile,
subject shape, and exactly-once presence of every required strict-profile
heading before any content is interpreted. The JavaScript invariant
validator then parses governed code blocks and enforces relationships JSON
Schema cannot express across Markdown blocks: exact story identity, Gherkin
causality, filename derivation, SEJ-to-body reproduction, evidence-chain
closure, and algorithm-to-RED coverage. Both layers are mandatory; passing
only one is not conformance.

## Canonical byte projection

The projector must:

```text
validate the authority against Draft 2020-12
reject properties not admitted by the schema
require the first block to be the one level-one document title
require exactly one level-one heading
reject a heading-level jump
reject trailing whitespace
emit UTF-8 without a byte-order mark
emit the declared LF or CRLF line ending
emit exactly one empty line between blocks
emit exactly one terminal newline
compare the projected byte SHA-256 with projection.outputByteSha256
```

The projector must never infer content from the existing Markdown target. Check
mode reads the target only after projection and requires byte equality.

## Authority and output hashes

Authority identity is:

```text
sha256(RFC8785-JCS(complete parsed authority JSON))
```

Projection identity is:

```text
sha256(exact emitted Markdown bytes)
```

The output byte hash is stored in the authority. Changing content, block order,
formatting policy, or line endings without updating that admitted hash is RED.

## Adoption boundary

Adoption is a one-time migration operation for an existing canonical document.
The adoption tool may read Markdown and emit initial JSON authority only when
the source already conforms to the constrained grammar.

It must reject:

```text
mixed line endings
missing or multiple terminal newlines
missing or multiple blank-line block separators
an unclosed or untyped fenced-code block
a non-heading first block
non-canonical block transitions
```

Adoption is not part of normal projection. Once the authority is reviewed, all
subsequent Markdown changes must originate in JSON authority.

## Required verification

The conformance verifier must prove:

```text
the schema is Draft 2020-12 meta-valid
the authority validates
semantic document invariants hold
the stored output hash matches independently projected bytes
the repository Markdown is byte-identical to those bytes
authority and projection hashes are reported
negative controls fail for the expected reason
```

Required negative controls are:

```text
unknown root property
embedded line ending
heading-level jump
second level-one title
content mutation without a new admitted output hash
line-ending mutation
```

Strict implementation contracts add:

```text
required-section removal
Gherkin scenario-identity substitution
mutable stage state inserted into the Gherkin Background
canonical feature-authority identity substitution
missing four-body SEJ role
missing projected TypeScript role
subject story mutation
duplicated required heading
ledger filename substitution
syntactically invalid projected TypeScript
evidence-set/catalog mismatch
root provenance parent substitution
artifact-type enum omission
missing algorithm-to-RED coverage
malformed SEJ projection shape
```

## Reusable ecosystem workflow

To govern another inspection document:

```text
1. Copy the validated authority template.
2. Assign a new documentId, title, and outputPath.
3. Replace the ordered blocks with the new contract content.
4. Run hash mode to calculate the proposed output bytes and SHA-256.
5. Admit that SHA-256 in projection.outputByteSha256.
6. Run schema, invariant, byte-identity, and negative-control verification.
7. Review JSON authority; treat Markdown as a disposable projection.
```

An ecosystem implementation may wrap the authority in a signed provenance
envelope. That wrapper must not change the v1 block grammar or Markdown byte
projection.

The repository commands for the initial subject are:

```text
npm run hash:governed-document
npm run project:governed-document
npm run check:governed-document
npm run verify:governed-document
```

## Terminal dispositions

```text
GREEN
  schema, semantic invariants, stored output hash, and target bytes agree

RED - DOCUMENT_AUTHORITY_SCHEMA_INVALID
RED - DOCUMENT_TITLE_MISMATCH
RED - DOCUMENT_TITLE_COUNT_INVALID
RED - DOCUMENT_HEADING_LEVEL_JUMP
RED - DOCUMENT_TRAILING_WHITESPACE
RED - DOCUMENT_OUTPUT_PATH_ABSOLUTE
RED - DOCUMENT_OUTPUT_PATH_ESCAPES_ROOT
RED - DOCUMENT_AUTHORITY_OUTPUT_HASH_MISMATCH
RED - DOCUMENT_PROJECTION_BYTE_DRIFT
```
