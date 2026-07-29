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

function hasOnlyKeys(value, keys) {
  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.keys(value).length === keys.length &&
    keys.every(key => Object.hasOwn(value, key))
  );
}

function projectsDelegationSource(sej) {
  const projection = sej.projection;
  const contextName = projection.contextParameter.name;
  const invocation = projection.invocation;
  return [
    `export async function ${projection.functionName}(`,
    `  ${contextName}: ${projection.contextParameter.typeReference}`,
    `): Promise<${projection.resultTypeReference}> {`,
    `  return await ${invocation.receiver}.${invocation.operationMember}(` +
      `${invocation.argument.receiver}.${invocation.argument.member});`,
    "}"
  ].join("\n");
}

function projectsTypeSource(
  primarySej,
  expectationSej,
  conformanceSej,
  inputType
) {
  return [
    `export type ${inputType} = unknown;`,
    `export type ${primarySej.projection.resultTypeReference} = unknown;`,
    `export type ${expectationSej.projection.resultTypeReference} = unknown;`,
    `export type ${conformanceSej.projection.resultTypeReference} = unknown;`,
    "",
    `export interface ${primarySej.projection.contextParameter.typeReference} {`,
    `  readonly ${primarySej.projection.invocation.argument.member}: ${inputType};`,
    `  readonly ${primarySej.projection.invocation.operationMember}: (`,
    `    ${primarySej.projection.invocation.argument.member}: ${inputType}`,
    `  ) => Promise<${primarySej.projection.resultTypeReference}>;`,
    "}",
    "",
    `export interface ${expectationSej.projection.contextParameter.typeReference} {`,
    `  readonly ${expectationSej.projection.invocation.argument.member}: unknown;`,
    `  readonly ${expectationSej.projection.invocation.operationMember}: (` +
      `${expectationSej.projection.invocation.argument.member}: unknown) => ` +
      `Promise<${expectationSej.projection.resultTypeReference}>;`,
    "}",
    "",
    `export interface ${conformanceSej.projection.contextParameter.typeReference} {`,
    `  readonly ${conformanceSej.projection.invocation.argument.member}: unknown;`,
    `  readonly ${conformanceSej.projection.invocation.operationMember}: (`,
    `    ${conformanceSej.projection.invocation.argument.member}: unknown`,
    `  ) => Promise<${conformanceSej.projection.resultTypeReference}>;`,
    "}"
  ].join("\n");
}

function assertsImplementationContractInvariants(authority) {
  const sections = sectionsByHeading(authority);
  let previousIndex = -1;
  for (const heading of requiredImplementationSections) {
    const indexes = authority.blocks
      .map((block, index) => ({ block, index }))
      .filter(
        entry =>
          entry.block.blockType === "heading" &&
          entry.block.level === 2 &&
          entry.block.text === heading
      )
      .map(entry => entry.index);
    if (indexes.length === 0) {
      throw new Error(
        `DOCUMENT_CONTRACT_SECTION_MISSING: ${heading}`
      );
    }
    if (indexes.length !== 1) {
      throw new Error(
        `DOCUMENT_CONTRACT_SECTION_DUPLICATED: ${heading}`
      );
    }
    const index = indexes[0];
    /* c8 ignore next 7 */
    if (
      !authority.blocks.some(
      block =>
        block.blockType === "heading" &&
        block.level === 2 &&
        block.text === heading
      )
    ) {
      throw new Error(`DOCUMENT_CONTRACT_SECTION_MISSING: ${heading}`);
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
    .join(" ")
    .replace(/\s+/g, " ");
  for (const marker of [
    `As a ${authority.subject.userStory.asA}`,
    `I want ${authority.subject.userStory.iWant}`,
    `So that ${authority.subject.userStory.soThat}`
  ]) {
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
  const normalizedGherkin = gherkin.replace(/\s+/g, " ");
  for (const marker of [
    `Feature: ${authority.subject.title}`,
    `As a ${authority.subject.userStory.asA}`,
    `I want ${authority.subject.userStory.iWant}`,
    `So that ${authority.subject.userStory.soThat}`
  ]) {
    if (!normalizedGherkin.includes(marker)) {
      throw new Error(`DOCUMENT_GHERKIN_STORY_MISMATCH: ${marker}`);
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
  const backgroundStart = gherkinBlocks[0].lines.indexOf("  Background:");
  const firstScenarioTag = gherkinBlocks[0].lines.findIndex(
    line => line.startsWith("  @scenario-id:")
  );
  if (
    backgroundStart === -1 ||
    firstScenarioTag === -1 ||
    backgroundStart >= firstScenarioTag
  ) {
    throw new Error("DOCUMENT_GHERKIN_BACKGROUND_MISSING");
  }
  const backgroundSteps = gherkinBlocks[0].lines
    .slice(backgroundStart + 1, firstScenarioTag)
    .filter(line => line.trim() !== "");
  if (
    backgroundSteps.length === 0 ||
    !backgroundSteps[0].startsWith("    Given ") ||
    backgroundSteps.slice(1).some(line => !line.startsWith("    And "))
  ) {
    throw new Error("DOCUMENT_GHERKIN_BACKGROUND_STEP_INVALID");
  }
  const mutableBackgroundPattern =
    /\b(empty|admitted|admission|disposition|materialization|execution|regeneration|lineage|terminal)\b/i;
  const mutableBackground = backgroundSteps.find(line =>
    mutableBackgroundPattern.test(line)
  );
  if (mutableBackground) {
    throw new Error(
      `DOCUMENT_GHERKIN_BACKGROUND_STATE_NOT_IMMUTABLE: ` +
        `${mutableBackground.trim()}`
    );
  }
  const scenarioStarts = gherkinBlocks[0].lines
    .map((line, index) => ({ line, index }))
    .filter(entry => entry.line.startsWith("  Scenario:"));
  for (const [scenarioIndex, start] of scenarioStarts.entries()) {
    const end =
      scenarioStarts[scenarioIndex + 1]?.index ??
      gherkinBlocks[0].lines.length;
    const steps = gherkinBlocks[0].lines
      .slice(start.index + 1, end)
      .filter(line => /^(    Given |    And |    When |    Then )/.test(line));
    const givenIndex = steps.findIndex(line => line.startsWith("    Given "));
    const whenIndexes = steps
      .map((line, index) => ({ line, index }))
      .filter(entry => entry.line.startsWith("    When "))
      .map(entry => entry.index);
    const thenIndexes = steps
      .map((line, index) => ({ line, index }))
      .filter(entry => entry.line.startsWith("    Then "))
      .map(entry => entry.index);
    if (
      givenIndex !== 0 ||
      whenIndexes.length !== 1 ||
      thenIndexes.length !== 1 ||
      !(givenIndex < whenIndexes[0] && whenIndexes[0] < thenIndexes[0]) ||
      steps
        .slice(1, whenIndexes[0])
        .some(line => !line.startsWith("    And ")) ||
      thenIndexes[0] !== whenIndexes[0] + 1 ||
      steps
        .slice(thenIndexes[0] + 1)
        .some(line => !line.startsWith("    And "))
    ) {
      throw new Error(
        `DOCUMENT_GHERKIN_SCENARIO_TRANSITION_INVALID: ${start.line.trim()}`
      );
    }
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
    featureAuthority.title !== authority.subject.title ||
    JSON.stringify(featureAuthority.userStory) !==
      JSON.stringify(authority.subject.userStory) ||
    featureAuthority.governingObligation !==
      authority.subject.governingObligation ||
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
  const entryKeys = [
    "scenarioId",
    "obligationId",
    "expectationId",
    "responsibilityId",
    "signalId",
    "semanticOperationId",
    "operationMember",
    "inputMember",
    "inputType",
    "resultType",
    "functionName",
    "contextType",
    "baseName",
    "bodies"
  ];
  const uniqueFields = [
    "scenarioId",
    "obligationId",
    "expectationId",
    "responsibilityId",
    "signalId",
    "semanticOperationId",
    "functionName",
    "contextType",
    "baseName"
  ];
  for (const field of uniqueFields) {
    const values = ledger.entries.map(entry => entry[field]);
    if (new Set(values).size !== values.length) {
      throw new Error(`DOCUMENT_PROJECTION_LEDGER_DUPLICATE: ${field}`);
    }
  }
  const allBodyFiles = [];
  for (const entry of ledger.entries) {
    if (!hasOnlyKeys(entry, entryKeys)) {
      throw new Error(
        `DOCUMENT_PROJECTION_LEDGER_ENTRY_SCHEMA_INVALID: ${entry.scenarioId}`
      );
    }
    if (
      JSON.stringify(entry.bodies.map(body => body.bodyRole)) !==
      JSON.stringify(roles)
    ) {
      throw new Error(
        `DOCUMENT_PROJECTION_LEDGER_ROLE_MISMATCH: ${entry.scenarioId}`
      );
    }
    const expectedFiles = [
      `${entry.baseName}.ts`,
      `${entry.baseName}.type.ts`,
      `${entry.baseName}.expectation.ts`,
      `runs-${entry.baseName}-conformance.ts`
    ];
    if (
      JSON.stringify(entry.bodies.map(body => body.file)) !==
      JSON.stringify(expectedFiles) ||
      entry.bodies.some(
        body =>
          !hasOnlyKeys(body, ["bodyRole", "file"])
      )
    ) {
      throw new Error(
        `DOCUMENT_PROJECTION_LEDGER_FILENAME_DERIVATION_MISMATCH: ` +
          `${entry.scenarioId}`
      );
    }
    allBodyFiles.push(...expectedFiles);
  }
  if (new Set(allBodyFiles).size !== allBodyFiles.length) {
    throw new Error("DOCUMENT_PROJECTION_LEDGER_FILENAME_DUPLICATE");
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
  const normativeEntry = ledger.entries[0];
  const requiredSejKeys = [
    "semanticExecutableType",
    "bodyRole",
    "structuralProfile",
    "bodyId",
    "artifact",
    "lineage",
    "projection",
    "constraints"
  ];
  const constraintKeys = [
    "forbidBranching",
    "forbidIteration",
    "forbidDtoConstruction",
    "forbidSemanticLiterals",
    "forbidDirectEffects",
    "forbidLocalErrorPolicy"
  ];
  for (const sej of sejObjects) {
    if (
      !hasOnlyKeys(sej, requiredSejKeys) ||
      !hasOnlyKeys(sej.artifact, ["relativePath"]) ||
      !hasOnlyKeys(sej.lineage, [
        "featureId",
        "scenarioId",
        "obligationId",
        "expectationId",
        "responsibilityId",
        "signalId",
        "semanticOperationId"
      ]) ||
      !hasOnlyKeys(sej.constraints, constraintKeys) ||
      constraintKeys.some(key => sej.constraints[key] !== true)
    ) {
      throw new Error(`DOCUMENT_SEJ_SCHEMA_INVALID: ${sej.bodyRole}`);
    }
    if (sej.bodyRole === "type") {
      if (
        sej.semanticExecutableType !== "declaration-only-context.v1" ||
        !hasOnlyKeys(sej.projection, ["declarations"]) ||
        !Array.isArray(sej.projection.declarations) ||
        sej.projection.declarations.length === 0 ||
        sej.projection.declarations.some(
          declaration =>
            typeof declaration !== "string" ||
            !/^[A-Za-z_$][\w$]*$/.test(declaration)
        )
      ) {
        throw new Error("DOCUMENT_SEJ_SCHEMA_INVALID: type");
      }
    } else if (
      sej.semanticExecutableType !== "prebound-member-delegation.v1" ||
      !hasOnlyKeys(sej.projection, [
        "functionName",
        "contextParameter",
        "resultTypeReference",
        "invocation"
      ]) ||
      !hasOnlyKeys(sej.projection.contextParameter, [
        "name",
        "typeReference"
      ]) ||
      !hasOnlyKeys(sej.projection.invocation, [
        "receiver",
        "operationMember",
        "argument",
        "awaited",
        "returnResult"
      ]) ||
      !hasOnlyKeys(sej.projection.invocation.argument, [
        "receiver",
        "member"
      ]) ||
      sej.projection.invocation.awaited !== true ||
      sej.projection.invocation.returnResult !== true
    ) {
      throw new Error(`DOCUMENT_SEJ_SCHEMA_INVALID: ${sej.bodyRole}`);
    }
    for (const field of [
      "scenarioId",
      "obligationId",
      "expectationId",
      "responsibilityId",
      "signalId",
      "semanticOperationId"
    ]) {
      if (sej.lineage[field] !== normativeEntry[field]) {
        throw new Error(
          `DOCUMENT_SEJ_LINEAGE_MISMATCH: ${sej.bodyRole}.${field}`
        );
      }
    }
    if (sej.lineage.featureId !== authority.subject.featureId) {
      throw new Error(`DOCUMENT_SEJ_LINEAGE_MISMATCH: ${sej.bodyRole}.featureId`);
    }
    const body = normativeEntry.bodies.find(
      candidate => candidate.bodyRole === sej.bodyRole
    );
    if (!sej.artifact.relativePath.endsWith(`/${body.file}`)) {
      throw new Error(`DOCUMENT_SEJ_ARTIFACT_MISMATCH: ${sej.bodyRole}`);
    }
  }
  const primarySej = sejObjects.find(sej => sej.bodyRole === "primary");
  if (
    primarySej.projection.functionName !== normativeEntry.functionName ||
    primarySej.projection.contextParameter?.typeReference !==
      normativeEntry.contextType ||
    primarySej.projection.resultTypeReference !== normativeEntry.resultType ||
    primarySej.projection.invocation?.operationMember !==
      normativeEntry.operationMember ||
    primarySej.projection.invocation?.argument?.member !==
      normativeEntry.inputMember
  ) {
    throw new Error("DOCUMENT_PRIMARY_SEJ_PROJECTION_MISMATCH");
  }

  const projectedTypescript = codeBlocks(
    sections.get("Projected TypeScript bodies"),
    "typescript"
  );
  if (projectedTypescript.length !== 4) {
    throw new Error("DOCUMENT_PROJECTED_TYPESCRIPT_ROLE_COVERAGE_MISMATCH");
  }
  const expectedPrimary = projectsDelegationSource(primarySej);
  if (projectedTypescript[0].lines.join("\n") !== expectedPrimary) {
    throw new Error("DOCUMENT_PROJECTED_TYPESCRIPT_SEJ_MISMATCH: primary");
  }
  const typeSej = sejObjects.find(sej => sej.bodyRole === "type");
  const expectationSej = sejObjects.find(
    sej => sej.bodyRole === "expectation"
  );
  const conformanceSej = sejObjects.find(
    sej => sej.bodyRole === "conformance"
  );
  const projectedDeclarations = [
    ...projectedTypescript[1].lines
      .join("\n")
      .matchAll(/\bexport\s+(?:type|interface)\s+([A-Za-z_$][\w$]*)/g)
  ].map(match => match[1]);
  if (
    projectedDeclarations.length !== typeSej.projection.declarations.length ||
    new Set(projectedDeclarations).size !== projectedDeclarations.length ||
    typeSej.projection.declarations.some(
      declaration => !projectedDeclarations.includes(declaration)
    )
  ) {
    throw new Error("DOCUMENT_PROJECTED_TYPESCRIPT_SEJ_MISMATCH: type");
  }
  if (
    projectedTypescript[1].lines.join("\n") !==
    projectsTypeSource(
      primarySej,
      expectationSej,
      conformanceSej,
      normativeEntry.inputType
    )
  ) {
    throw new Error("DOCUMENT_PROJECTED_TYPESCRIPT_SEJ_MISMATCH: type");
  }
  for (const [role, blockIndex] of [
    ["expectation", 2],
    ["conformance", 3]
  ]) {
    const sej = sejObjects.find(candidate => candidate.bodyRole === role);
    if (
      projectedTypescript[blockIndex].lines.join("\n") !==
      projectsDelegationSource(sej)
    ) {
      throw new Error(`DOCUMENT_PROJECTED_TYPESCRIPT_SEJ_MISMATCH: ${role}`);
    }
  }
  for (const [index, block] of projectedTypescript.entries()) {
    const source = block.lines.join("\n");
    let depth = 0;
    for (const token of source.match(/[{}]/g) ?? []) {
      depth += token === "{" ? 1 : -1;
      if (depth < 0) break;
    }
    if (depth !== 0 || !/\bexport\b/.test(source)) {
      throw new Error(
        `DOCUMENT_PROJECTED_TYPESCRIPT_SYNTAX_INVALID: ${roles[index]}`
      );
    }
  }

  const evidenceFiles = codeBlocks(
    sections.get("Evidence artifact set"),
    "text"
  )[0].lines.filter(line => /^\d{2}[a-z]?-.+\.json$/.test(line));
  const evidenceCatalog = parsesJsonCodeBlocks(
    sections.get("Normative evidence schemas")
  ).find(
    value =>
      value?.catalogType === "new-feature-evidence-artifact-catalog.v1"
  );
  if (!evidenceCatalog) {
    throw new Error("DOCUMENT_EVIDENCE_CATALOG_MISSING");
  }
  const evidenceEntries = evidenceCatalog.entries;
  for (const field of ["file", "artifactType", "schema"]) {
    const values = evidenceEntries.map(entry => entry[field]);
    if (new Set(values).size !== values.length) {
      throw new Error(`DOCUMENT_EVIDENCE_CATALOG_DUPLICATE: ${field}`);
    }
  }
  if (
    JSON.stringify(evidenceEntries.map(entry => entry.file)) !==
    JSON.stringify(evidenceFiles)
  ) {
    throw new Error("DOCUMENT_EVIDENCE_SET_CATALOG_MISMATCH");
  }
  for (const [index, entry] of evidenceEntries.entries()) {
    if (
      !hasOnlyKeys(entry, [
        "file",
        "artifactType",
        "schema",
        "parentArtifactType",
        "signerRole"
      ]) ||
      (index === 0
        ? entry.parentArtifactType !== null
        : entry.parentArtifactType !==
          evidenceEntries[index - 1].artifactType)
    ) {
      throw new Error(
        `DOCUMENT_EVIDENCE_CATALOG_CHAIN_MISMATCH: ${entry.file}`
      );
    }
  }
  const normativeSchemaPaths = codeBlocks(
    sections.get("Normative evidence schemas"),
    "text"
  )[0].lines
    .filter(line => line.startsWith("schemas/"))
    .map(line => line.slice("schemas/".length));
  for (const entry of evidenceEntries) {
    if (!normativeSchemaPaths.includes(entry.schema)) {
      throw new Error(
        `DOCUMENT_EVIDENCE_SCHEMA_NOT_NORMATIVE: ${entry.schema}`
      );
    }
  }
  const existingArtifactTypes = new Set([
    "model-request-authority",
    "independent-provider-exchange-attestation",
    "model-produced-semantic-authority"
  ]);
  const artifactTypeAdditions = parsesJsonCodeBlocks(schemaSection).find(
    value =>
      Array.isArray(value) &&
      value.every(item => typeof item === "string")
  );
  const expectedArtifactTypeAdditions = evidenceEntries
    .map(entry => entry.artifactType)
    .filter(artifactType => !existingArtifactTypes.has(artifactType));
  if (
    !artifactTypeAdditions ||
    JSON.stringify(artifactTypeAdditions) !==
      JSON.stringify(expectedArtifactTypeAdditions)
  ) {
    throw new Error("DOCUMENT_EVIDENCE_ARTIFACT_TYPE_ENUM_MISMATCH");
  }
  const evidenceEnvelopeObjects = parsesJsonCodeBlocks(schemaSection);
  const rootEnvelope = evidenceEnvelopeObjects.find(
    value => value?.provenance?.parent === null
  );
  if (
    !rootEnvelope ||
    rootEnvelope.provenance.artifactType !==
      evidenceEntries[0].artifactType ||
    rootEnvelope.provenance.artifactSha256 !==
      rootEnvelope.provenance.lineageRootSha256 ||
    !Object.hasOwn(rootEnvelope, "payload")
  ) {
    throw new Error("DOCUMENT_ROOT_PROVENANCE_VARIANT_INVALID");
  }
  const nonRootWrapper = evidenceEnvelopeObjects.find(
    value =>
      value?.allOf?.[1]?.properties?.provenance?.properties?.parent
        ?.type === "object"
  );
  if (!nonRootWrapper) {
    throw new Error("DOCUMENT_NON_ROOT_PROVENANCE_VARIANT_MISSING");
  }
  const acceptanceSection = sections.get(
    "Ordered terminal acceptance algorithm"
  );
  const acceptanceBlocks = codeBlocks(acceptanceSection, "typescript");
  if (acceptanceBlocks.length !== 1) {
    throw new Error("DOCUMENT_ACCEPTANCE_ALGORITHM_MISSING");
  }
  const acceptanceChecks = acceptanceBlocks[0].lines
    .map(line => /^\s{2}([A-Za-z_$][\w$]*)\(\);$/.exec(line)?.[1])
    .filter(Boolean);
  const acceptanceMaps = parsesJsonCodeBlocks(acceptanceSection).filter(
    value => value?.mapType === "acceptance-check-red-code-map.v1"
  );
  if (acceptanceMaps.length !== 1) {
    throw new Error("DOCUMENT_ACCEPTANCE_RED_MAP_MISSING");
  }
  const acceptanceMap = acceptanceMaps[0];
  if (
    !hasOnlyKeys(acceptanceMap, ["mapType", "entries"]) ||
    !Array.isArray(acceptanceMap.entries) ||
    JSON.stringify(acceptanceMap.entries.map(entry => entry.check)) !==
      JSON.stringify(acceptanceChecks) ||
    acceptanceMap.entries.some(
      entry =>
        !hasOnlyKeys(entry, ["check", "redCodes"]) ||
        !Array.isArray(entry.redCodes) ||
        entry.redCodes.length === 0
    )
  ) {
    throw new Error("DOCUMENT_ACCEPTANCE_RED_MAP_CHECK_MISMATCH");
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
  const mappedRedCodes = acceptanceMap.entries.flatMap(
    entry => entry.redCodes
  );
  if (
    new Set(mappedRedCodes).size !== mappedRedCodes.length ||
    JSON.stringify([...mappedRedCodes].sort()) !==
      JSON.stringify([...redCodes[0]].sort())
  ) {
    throw new Error("DOCUMENT_ACCEPTANCE_RED_MAP_COVERAGE_MISMATCH");
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
