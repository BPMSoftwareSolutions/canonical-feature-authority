import { readFile, writeFile } from "node:fs/promises";
import { relative, resolve, sep } from "node:path";

import {
  assertsSemanticDocumentInvariants,
  createsAuthorityValidator,
  moduleRepositoryRoot,
  resolvesOutputPath,
  sha256Bytes
} from "./governed-inspection-document-projection.mjs";

function readsRequiredArgument(name) {
  const index = process.argv.indexOf(name);
  const value = index === -1 ? undefined : process.argv[index + 1];
  if (!value) throw new Error(`Missing required argument: ${name}`);
  return value;
}

function parsesCanonicalBlocks(text) {
  const normalized = text.replaceAll("\r\n", "\n");
  const lines = normalized.endsWith("\n")
    ? normalized.slice(0, -1).split("\n")
    : normalized.split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    if (lines[index] === "") {
      throw new Error(`Unexpected blank line at line ${index + 1}`);
    }
    const heading = /^(#{1,6}) (.+)$/.exec(lines[index]);
    if (heading) {
      blocks.push({
        blockType: "heading",
        level: heading[1].length,
        text: heading[2]
      });
      index++;
    } else {
      const fence = /^```([A-Za-z][A-Za-z0-9_+.-]*)$/.exec(lines[index]);
      if (fence) {
        const content = [];
        index++;
        while (index < lines.length && lines[index] !== "```") {
          content.push(lines[index]);
          index++;
        }
        if (index === lines.length) {
          throw new Error("Unclosed fenced-code block");
        }
        index++;
        blocks.push({
          blockType: "fenced-code",
          language: fence[1],
          lines: content
        });
      } else {
        const paragraph = [];
        while (index < lines.length && lines[index] !== "") {
          if (/^(?:#{1,6} |```)/.test(lines[index])) {
            throw new Error(
              `Non-canonical block transition at line ${index + 1}`
            );
          }
          paragraph.push(lines[index]);
          index++;
        }
        blocks.push({
          blockType: "paragraph",
          lines: paragraph
        });
      }
    }
    if (index < lines.length) {
      if (lines[index] !== "") {
        throw new Error(`Missing block separator at line ${index + 1}`);
      }
      index++;
      if (index < lines.length && lines[index] === "") {
        throw new Error(`Multiple block separators at line ${index + 1}`);
      }
    }
  }
  return blocks;
}

const repositoryRoot = resolve(
  process.argv.includes("--root")
    ? readsRequiredArgument("--root")
    : moduleRepositoryRoot
);
const sourcePath = resolve(readsRequiredArgument("--source"));
const authorityPath = resolve(readsRequiredArgument("--authority"));
const documentId = readsRequiredArgument("--document-id");
const bytes = await readFile(sourcePath);
const text = bytes.toString("utf8");

const hasCrLf = text.includes("\r\n");
const withoutCrLf = text.replaceAll("\r\n", "");
if (withoutCrLf.includes("\r") || (hasCrLf && withoutCrLf.includes("\n"))) {
  throw new Error("Source document has mixed or invalid line endings");
}
const normalizedText = text.replaceAll("\r\n", "\n");
if (!normalizedText.endsWith("\n")) {
  throw new Error("Source document must end with one newline");
}
if (normalizedText.endsWith("\n\n")) {
  throw new Error("Source document must not end with a blank line");
}

const blocks = parsesCanonicalBlocks(normalizedText);
const first = blocks[0];
if (first?.blockType !== "heading" || first.level !== 1) {
  throw new Error("Source document must begin with one level-one heading");
}
const outputPath = relative(repositoryRoot, sourcePath).split(sep).join("/");
const authority = {
  authorityType: "governed-inspection-document-authority.v1",
  documentId,
  title: first.text,
  projection: {
    projectorId: "canonical-governed-markdown-projector",
    projectorVersion: "1.0.0",
    outputPath,
    mediaType: "text/markdown",
    encoding: "UTF-8",
    lineEnding: hasCrLf ? "CRLF" : "LF",
    blockSeparator: "blank-line",
    terminalNewline: true,
    outputByteSha256: sha256Bytes(bytes)
  },
  blocks
};

resolvesOutputPath(repositoryRoot, authority.projection.outputPath);
const { validate } = await createsAuthorityValidator();
if (!validate(authority)) {
  throw new Error(
    `Adopted authority is schema-invalid: ${validate.errors
      .map(error => `${error.instancePath} ${error.message}`)
      .join("; ")}`
  );
}
assertsSemanticDocumentInvariants(authority);

await writeFile(
  authorityPath,
  `${JSON.stringify(authority, null, 2)}\n`,
  "utf8"
);
console.log(`Adopted document authority: ${authorityPath}`);
console.log(`Blocks: ${blocks.length}`);
console.log(`Output byte SHA-256: ${authority.projection.outputByteSha256}`);
