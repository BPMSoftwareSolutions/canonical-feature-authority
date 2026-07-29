import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { isAbsolute, relative, resolve } from "node:path";

import Ajv2020 from "ajv/dist/2020.js";

const moduleRepositoryRoot = resolve(import.meta.dirname, "..");
const schemaPath = resolve(
  moduleRepositoryRoot,
  "schemas/governed-inspection-document-authority.schema.json"
);

export function canonicalizes(value) {
  if (Array.isArray(value)) {
    return `[${value.map(canonicalizes).join(",")}]`;
  }
  if (value !== null && typeof value === "object") {
    return `{${Object.keys(value)
      .sort()
      .map(key => `${JSON.stringify(key)}:${canonicalizes(value[key])}`)
      .join(",")}}`;
  }
  return JSON.stringify(value);
}

export function sha256Bytes(bytes) {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

export function hashesAuthority(authority) {
  return sha256Bytes(Buffer.from(canonicalizes(authority), "utf8"));
}

export async function createsAuthorityValidator() {
  const schema = JSON.parse(await readFile(schemaPath, "utf8"));
  const ajv = new Ajv2020({
    allErrors: true,
    strict: true,
    validateFormats: true
  });
  if (!ajv.validateSchema(schema)) {
    throw new Error(
      `Document authority schema is not meta-valid: ${ajv.errorsText()}`
    );
  }
  return {
    schema,
    validate: ajv.compile(schema)
  };
}

export function assertsSemanticDocumentInvariants(authority) {
  const first = authority.blocks[0];
  if (
    first.blockType !== "heading" ||
    first.level !== 1 ||
    first.text !== authority.title
  ) {
    throw new Error(
      "DOCUMENT_TITLE_MISMATCH: first block must be the level-one title"
    );
  }

  let previousHeadingLevel = 1;
  let levelOneCount = 0;
  for (const [index, block] of authority.blocks.entries()) {
    if (block.blockType === "heading") {
      if (block.level === 1) levelOneCount++;
      if (block.level > previousHeadingLevel + 1) {
        throw new Error(
          `DOCUMENT_HEADING_LEVEL_JUMP: block ${index}`
        );
      }
      previousHeadingLevel = block.level;
    }
    const lines =
      block.blockType === "heading" ? [block.text] : block.lines;
    for (const line of lines) {
      if (line !== line.trimEnd()) {
        throw new Error(
          `DOCUMENT_TRAILING_WHITESPACE: block ${index}`
        );
      }
    }
  }
  if (levelOneCount !== 1) {
    throw new Error(
      "DOCUMENT_TITLE_COUNT_INVALID: exactly one level-one heading is required"
    );
  }
}

export function projectsDocumentBytes(authority) {
  assertsSemanticDocumentInvariants(authority);
  const eol = authority.projection.lineEnding === "CRLF" ? "\r\n" : "\n";
  const blocks = authority.blocks.map(block => {
    if (block.blockType === "heading") {
      return `${"#".repeat(block.level)} ${block.text}`;
    }
    if (block.blockType === "paragraph") {
      return block.lines.join(eol);
    }
    return [
      `\`\`\`${block.language}`,
      ...block.lines,
      "```"
    ].join(eol);
  });
  return Buffer.from(`${blocks.join(`${eol}${eol}`)}${eol}`, "utf8");
}

export function resolvesOutputPath(repositoryRoot, outputPath) {
  if (isAbsolute(outputPath)) {
    throw new Error("DOCUMENT_OUTPUT_PATH_ABSOLUTE");
  }
  const candidate = resolve(repositoryRoot, outputPath);
  const relationship = relative(repositoryRoot, candidate);
  if (
    relationship === "" ||
    relationship.startsWith("..") ||
    isAbsolute(relationship)
  ) {
    throw new Error("DOCUMENT_OUTPUT_PATH_ESCAPES_ROOT");
  }
  return candidate;
}

export async function readsAndValidatesAuthority(
  authorityPath,
  { verifyOutputHash = true } = {}
) {
  const authority = JSON.parse(await readFile(authorityPath, "utf8"));
  const { validate } = await createsAuthorityValidator();
  if (!validate(authority)) {
    throw new Error(
      `DOCUMENT_AUTHORITY_SCHEMA_INVALID: ${validate.errors
        .map(error => `${error.instancePath} ${error.message}`)
        .join("; ")}`
    );
  }
  assertsSemanticDocumentInvariants(authority);
  const projected = projectsDocumentBytes(authority);
  const observedHash = sha256Bytes(projected);
  if (
    verifyOutputHash &&
    observedHash !== authority.projection.outputByteSha256
  ) {
    throw new Error(
      "DOCUMENT_AUTHORITY_OUTPUT_HASH_MISMATCH: " +
        `expected ${authority.projection.outputByteSha256}, ` +
        `observed ${observedHash}`
    );
  }
  return { authority, projected };
}

export { moduleRepositoryRoot, schemaPath };
