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

  if (
    authority.documentProfile ===
    "authority-projection-implementation-contract.v1"
  ) {
    assertsImplementationContractInvariants(authority);
  }
}

const requiredImplementationSections = [
  "Status",
  "User story",
  "Acceptance Gherkin",
  "Physical canonical feature authority",
  "Repository spine",
  "Complete artifact set for the normative scenario",
  "Authority identity and projection ledger",
  "Normative evidence schemas",
  "Complete SEJ inputs",
  "Projected TypeScript bodies",
  "Ordered terminal acceptance algorithm",
  "RED dispositions",
  "Manual inspection sequence",
  "Implementation exit condition"
];

function sectionsByHeading(authority) {
  const sections = new Map();
  let current;
  for (const block of authority.blocks) {
    if (block.blockType === "heading" && block.level === 2) {
      current = { heading: block.text, blocks: [] };
      sections.set(block.text, current);
    } else if (current) {
      current.blocks.push(block);
    }
  }
  return sections;
}

function codeBlocks(section, language) {
  return section.blocks.filter(
    block =>
      block.blockType === "fenced-code" &&
      (language === undefined || block.language === language)
  );
}

function parsesJsonCodeBlocks(section) {
  return codeBlocks(section, "json").map(block => {
    try {
      return JSON.parse(block.lines.join("\n"));
    } catch {
      throw new Error(
        `DOCUMENT_CONTRACT_JSON_INVALID: ${section.heading}`
      );
    }
  });
}

function assertsImplementationContractInvariants(authority) {
  const sections = sectionsByHeading(authority);
  let previousIndex = -1;
  for (const heading of requiredImplementationSections) {
    const index = authority.blocks.findIndex(
      block =>
        block.blockType === "heading" &&
        block.level === 2 &&
        block.text === heading
    );
    if (index === -1) {
      throw new Error(
        `DOCUMENT_CONTRACT_SECTION_MISSING: ${heading}`
      );
    }
    if (index <= previousIndex) {
      throw new Error(
        `DOCUMENT_CONTRACT_SECTION_ORDER_MISMATCH: ${heading}`
      );
    }
    previousIndex = index;
  }

  const userStory = codeBlocks(sections.get("User story"), "text")
    .flatMap(block => block.lines)
    .join("\n");
  for (const marker of ["As a ", "I want ", "So that "]) {
    if (!userStory.includes(marker)) {
      throw new Error(
        `DOCUMENT_USER_STORY_INCOMPLETE: ${marker.trim()}`
      );
    }
  }

  const gherkinBlocks = codeBlocks(
    sections.get("Acceptance Gherkin"),
    "gherkin"
  );
  if (gherkinBlocks.length !== 1) {
    throw new Error("DOCUMENT_GHERKIN_BLOCK_COUNT_INVALID");
  }
  const gherkin = gherkinBlocks[0].lines.join("\n");
  for (const marker of ["Feature: ", "  As a ", "  I want ", "  So that "]) {
    if (!gherkin.includes(marker)) {
      throw new Error(`DOCUMENT_GHERKIN_INCOMPLETE: ${marker.trim()}`);
    }
  }
  const observedScenarioIds = [
    ...gherkin.matchAll(/@scenario-id:([a-z][a-z0-9-]*)/g)
  ].map(match => match[1]);
  if (
    JSON.stringify(observedScenarioIds) !==
    JSON.stringify(authority.subject.scenarioIds)
  ) {
    throw new Error("DOCUMENT_GHERKIN_SCENARIO_IDENTITY_MISMATCH");
  }

  const featureAuthorities = parsesJsonCodeBlocks(
    sections.get("Physical canonical feature authority")
  );
  if (featureAuthorities.length !== 1) {
    throw new Error("DOCUMENT_FEATURE_AUTHORITY_COUNT_INVALID");
  }
  const featureAuthority = featureAuthorities[0];
  if (
    featureAuthority.authorityType !== "canonical-feature-authority.v1" ||
    featureAuthority.featureId !== authority.subject.featureId ||
    JSON.stringify(featureAuthority.scenarioIds) !==
      JSON.stringify(authority.subject.scenarioIds)
  ) {
    throw new Error("DOCUMENT_FEATURE_AUTHORITY_IDENTITY_MISMATCH");
  }

  const repositorySpine = codeBlocks(
    sections.get("Repository spine"),
    "text"
  ).flatMap(block => block.lines).join("\n");
  for (const marker of [
    `capabilities/${authority.subject.featureId}/`,
    "projects-capability-authority.json",
    "scenarios/"
  ]) {
    if (!repositorySpine.includes(marker)) {
      throw new Error(`DOCUMENT_REPOSITORY_SPINE_INCOMPLETE: ${marker}`);
    }
  }

  const artifactSet = codeBlocks(
    sections.get("Complete artifact set for the normative scenario"),
    "text"
  ).flatMap(block => block.lines).join("\n");
  for (const marker of [
    "projection-lineage.index.json",
    ".semantic-executable.json",
    ".ts.ast.authority.json",
    ".ts"
  ]) {
    if (!artifactSet.includes(marker)) {
      throw new Error(`DOCUMENT_ARTIFACT_SET_INCOMPLETE: ${marker}`);
    }
  }

  const ledgerObjects = parsesJsonCodeBlocks(
    sections.get("Authority identity and projection ledger")
  );
  const ledger = ledgerObjects.find(
    value =>
      value?.matrixType === "four-body-sej-substitution-matrix.v1"
  );
  if (
    !ledger ||
    JSON.stringify(ledger.entries.map(entry => entry.scenarioId)) !==
      JSON.stringify(authority.subject.scenarioIds)
  ) {
    throw new Error("DOCUMENT_PROJECTION_LEDGER_COVERAGE_MISMATCH");
  }
  const roles = ["primary", "type", "expectation", "conformance"];
  for (const entry of ledger.entries) {
    if (
      JSON.stringify(entry.bodies.map(body => body.bodyRole)) !==
      JSON.stringify(roles)
    ) {
      throw new Error(
        `DOCUMENT_PROJECTION_LEDGER_ROLE_MISMATCH: ${entry.scenarioId}`
      );
    }
  }

  const schemaSection = sections.get("Normative evidence schemas");
  if (
    codeBlocks(schemaSection, "json").length === 0 ||
    !schemaSection.blocks.some(
      block =>
        block.blockType === "fenced-code" &&
        block.lines.some(line => line.includes("schemas/"))
    )
  ) {
    throw new Error("DOCUMENT_NORMATIVE_SCHEMA_PROJECTION_MISSING");
  }

  const sejObjects = parsesJsonCodeBlocks(
    sections.get("Complete SEJ inputs")
  );
  const observedRoles = sejObjects
    .filter(
      value =>
        value?.semanticExecutableType !== undefined &&
        value?.lineage?.scenarioId === authority.subject.scenarioIds[0]
    )
    .map(value => value.bodyRole);
  if (JSON.stringify(observedRoles) !== JSON.stringify(roles)) {
    throw new Error("DOCUMENT_COMPLETE_SEJ_ROLE_COVERAGE_MISMATCH");
  }

  if (
    codeBlocks(
      sections.get("Projected TypeScript bodies"),
      "typescript"
    ).length !== 4
  ) {
    throw new Error("DOCUMENT_PROJECTED_TYPESCRIPT_ROLE_COVERAGE_MISMATCH");
  }
  if (
    codeBlocks(
      sections.get("Ordered terminal acceptance algorithm"),
      "typescript"
    ).length !== 1
  ) {
    throw new Error("DOCUMENT_ACCEPTANCE_ALGORITHM_MISSING");
  }
  const redCodes = parsesJsonCodeBlocks(
    sections.get("RED dispositions")
  );
  if (
    redCodes.length !== 1 ||
    !Array.isArray(redCodes[0]) ||
    redCodes[0].length === 0
  ) {
    throw new Error("DOCUMENT_RED_DISPOSITIONS_INVALID");
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
