import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import {
  assertsSemanticDocumentInvariants,
  createsAuthorityValidator,
  hashesAuthority,
  moduleRepositoryRoot,
  projectsDocumentBytes,
  readsAndValidatesAuthority,
  resolvesOutputPath,
  sha256Bytes
} from "./governed-inspection-document-projection.mjs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const authorityPath = resolve(
  moduleRepositoryRoot,
  "architecture/inspects-projected-body-provenance.authority.json"
);
const { schema, validate } = await createsAuthorityValidator();
const catalog = JSON.parse(
  await readFile(
    resolve(
      moduleRepositoryRoot,
      "schemas/governed-document-schema-catalog.json"
    ),
    "utf8"
  )
);
assert(
  catalog.schemas.includes(
    "governed-inspection-document-authority.schema.json"
  ),
  "Document authority schema is not cataloged"
);
assert(
  catalog.projectors.some(
    projector =>
      projector.projectorId ===
        "canonical-governed-markdown-projector" &&
      projector.projectorVersion === "1.0.0"
  ),
  "Governed Markdown projector is not cataloged"
);
assert(
  catalog.templates.includes(
    "templates/governed-inspection-document-authority.template.json"
  ),
  "Governed inspection document template is not cataloged"
);
const { authority, projected } =
  await readsAndValidatesAuthority(authorityPath);
const { authority: templateAuthority } =
  await readsAndValidatesAuthority(
    resolve(
      moduleRepositoryRoot,
      "templates/governed-inspection-document-authority.template.json"
    )
  );
const outputPath = resolvesOutputPath(
  moduleRepositoryRoot,
  authority.projection.outputPath
);
const observed = await readFile(outputPath);

assert(
  observed.equals(projected),
  "Projected Markdown is not byte-identical to the governed document"
);

const controls = [];
function recordsControl(name, action, expected) {
  try {
    action();
    throw new Error(`${name}: invalid control was accepted`);
  } catch (error) {
    if (error.message === `${name}: invalid control was accepted`) throw error;
    assert(
      expected(error),
      `${name}: unexpected failure: ${error.message}`
    );
    controls.push(name);
  }
}

const extraProperty = structuredClone(authority);
extraProperty.unadmitted = true;
recordsControl(
  "unknown-root-property",
  () => {
    assert(
      !validate(extraProperty),
      "schema accepted an unknown root property"
    );
    throw new Error("DOCUMENT_AUTHORITY_SCHEMA_INVALID");
  },
  error => error.message === "DOCUMENT_AUTHORITY_SCHEMA_INVALID"
);

const embeddedNewline = structuredClone(authority);
const paragraph = embeddedNewline.blocks.find(
  block => block.blockType === "paragraph"
);
paragraph.lines[0] += "\nsmuggled";
recordsControl(
  "embedded-line-ending",
  () => {
    assert(
      !validate(embeddedNewline),
      "schema accepted an embedded line ending"
    );
    throw new Error("DOCUMENT_AUTHORITY_SCHEMA_INVALID");
  },
  error => error.message === "DOCUMENT_AUTHORITY_SCHEMA_INVALID"
);

const headingJump = structuredClone(authority);
headingJump.blocks.find(
  (block, index) => block.blockType === "heading" && index > 0
).level = 6;
recordsControl(
  "heading-level-jump",
  () => assertsSemanticDocumentInvariants(headingJump),
  error => error.message.startsWith("DOCUMENT_HEADING_LEVEL_JUMP")
);

const secondTitle = structuredClone(authority);
secondTitle.blocks[1] = {
  blockType: "heading",
  level: 1,
  text: "Unadmitted second title"
};
recordsControl(
  "second-level-one-title",
  () => assertsSemanticDocumentInvariants(secondTitle),
  error => error.message.startsWith("DOCUMENT_TITLE_COUNT_INVALID")
);

const contentMutation = structuredClone(authority);
contentMutation.blocks.find(
  block => block.blockType === "paragraph"
).lines[0] += " mutation";
recordsControl(
  "output-byte-drift",
  () => {
    const hash = sha256Bytes(projectsDocumentBytes(contentMutation));
    if (hash !== contentMutation.projection.outputByteSha256) {
      throw new Error("DOCUMENT_AUTHORITY_OUTPUT_HASH_MISMATCH");
    }
  },
  error => error.message === "DOCUMENT_AUTHORITY_OUTPUT_HASH_MISMATCH"
);

const lineEndingMutation = structuredClone(authority);
lineEndingMutation.projection.lineEnding =
  authority.projection.lineEnding === "CRLF" ? "LF" : "CRLF";
recordsControl(
  "line-ending-byte-drift",
  () => {
    const bytes = projectsDocumentBytes(lineEndingMutation);
    if (!bytes.equals(observed)) {
      throw new Error("DOCUMENT_PROJECTION_BYTE_DRIFT");
    }
  },
  error => error.message === "DOCUMENT_PROJECTION_BYTE_DRIFT"
);

const blockCounts = authority.blocks.reduce((counts, block) => {
  counts[block.blockType] = (counts[block.blockType] ?? 0) + 1;
  return counts;
}, {});

console.log("Governed inspection document authority is GREEN");
console.log(`Schema: ${schema.$id}`);
console.log(`Catalog: ${catalog.catalogType}`);
console.log(
  "Template output byte SHA-256: " +
    templateAuthority.projection.outputByteSha256
);
console.log(`Authority JCS SHA-256: ${hashesAuthority(authority)}`);
console.log(`Output byte SHA-256: ${sha256Bytes(observed)}`);
console.log(`Blocks: ${authority.blocks.length}`);
console.log(`Block counts: ${JSON.stringify(blockCounts)}`);
console.log(`${controls.length}/${controls.length} negative controls passed`);
