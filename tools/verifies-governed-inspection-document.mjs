import { readFile } from "node:fs/promises";
import { relative, resolve, sep } from "node:path";

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

const authorityArgumentIndex = process.argv.indexOf("--authority");
const authorityPath = resolve(
  authorityArgumentIndex === -1
    ? resolve(
        moduleRepositoryRoot,
        "architecture/inspects-projected-body-provenance.authority.json"
      )
    : process.argv[authorityArgumentIndex + 1]
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
const registeredAuthorityPath = relative(
  moduleRepositoryRoot,
  authorityPath
).split(sep).join("/");
assert(
  catalog.authorities.some(
    entry => entry.authority === registeredAuthorityPath
  ),
  `Governed document authority is not cataloged: ${registeredAuthorityPath}`
);
const { authority, projected } =
  await readsAndValidatesAuthority(authorityPath);
assert(
  catalog.profiles.some(
    profile => profile.profileId === authority.documentProfile
  ),
  `Document profile is not cataloged: ${authority.documentProfile}`
);
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

if (
  authority.documentProfile ===
  "authority-projection-implementation-contract.v1"
) {
  const missingSection = structuredClone(authority);
  missingSection.blocks = missingSection.blocks.filter(
    block =>
      !(
        block.blockType === "heading" &&
        block.level === 2 &&
        block.text === "User story"
      )
  );
  recordsControl(
    "schema-required-contract-section",
    () => {
      assert(
        !validate(missingSection),
        "schema accepted a missing strict-profile section"
      );
      throw new Error("DOCUMENT_AUTHORITY_SCHEMA_INVALID");
    },
    error => error.message === "DOCUMENT_AUTHORITY_SCHEMA_INVALID"
  );
  recordsControl(
    "required-contract-section",
    () => assertsSemanticDocumentInvariants(missingSection),
    error =>
      error.message ===
      "DOCUMENT_CONTRACT_SECTION_MISSING: User story"
  );

  const gherkinIdentity = structuredClone(authority);
  const gherkinBlock = gherkinIdentity.blocks.find(
    block =>
      block.blockType === "fenced-code" &&
      block.language === "gherkin"
  );
  const scenarioTagIndex = gherkinBlock.lines.findIndex(
    line => line.includes("@scenario-id:")
  );
  gherkinBlock.lines[scenarioTagIndex] =
    "  @scenario-id:substituted-scenario";
  recordsControl(
    "gherkin-scenario-identity",
    () => assertsSemanticDocumentInvariants(gherkinIdentity),
    error =>
      error.message ===
      "DOCUMENT_GHERKIN_SCENARIO_IDENTITY_MISMATCH"
  );

  const mutableBackground = structuredClone(authority);
  const mutableBackgroundBlock = mutableBackground.blocks.find(
    block =>
      block.blockType === "fenced-code" &&
      block.language === "gherkin"
  );
  const backgroundIndex =
    mutableBackgroundBlock.lines.indexOf("  Background:");
  mutableBackgroundBlock.lines.splice(
    backgroundIndex + 2,
    0,
    "    And one empty instructor-controlled output root"
  );
  recordsControl(
    "mutable-background-state",
    () => assertsSemanticDocumentInvariants(mutableBackground),
    error =>
      error.message.startsWith(
        "DOCUMENT_GHERKIN_BACKGROUND_STATE_NOT_IMMUTABLE"
      )
  );

  const featureAuthorityIdentity = structuredClone(authority);
  const featureHeadingIndex = featureAuthorityIdentity.blocks.findIndex(
    block =>
      block.blockType === "heading" &&
      block.text === "Physical canonical feature authority"
  );
  const featureCodeBlock = featureAuthorityIdentity.blocks
    .slice(featureHeadingIndex + 1)
    .find(
      block =>
        block.blockType === "fenced-code" &&
        block.language === "json"
    );
  const featureIdIndex = featureCodeBlock.lines.findIndex(
    line => line.trim() === `"${authority.subject.featureId}",`
  );
  featureCodeBlock.lines[featureIdIndex] =
    "    \"substituted-feature-id\",";
  recordsControl(
    "canonical-feature-authority-identity",
    () => assertsSemanticDocumentInvariants(featureAuthorityIdentity),
    error =>
      error.message ===
      "DOCUMENT_FEATURE_AUTHORITY_IDENTITY_MISMATCH"
  );

  const missingSejRole = structuredClone(authority);
  const sejHeadingIndex = missingSejRole.blocks.findIndex(
    block =>
      block.blockType === "heading" &&
      block.text === "Complete SEJ inputs"
  );
  const conformanceSejIndex = missingSejRole.blocks.findIndex(
    (block, index) =>
      index > sejHeadingIndex &&
      block.blockType === "fenced-code" &&
      block.language === "json" &&
      block.lines.some(
        line => line.includes("\"bodyRole\": \"conformance\"")
      )
  );
  missingSejRole.blocks.splice(conformanceSejIndex, 1);
  recordsControl(
    "complete-four-body-sej-coverage",
    () => assertsSemanticDocumentInvariants(missingSejRole),
    error =>
      error.message ===
      "DOCUMENT_COMPLETE_SEJ_ROLE_COVERAGE_MISMATCH"
  );

  const missingProjectedBody = structuredClone(authority);
  const projectedHeadingIndex = missingProjectedBody.blocks.findIndex(
    block =>
      block.blockType === "heading" &&
      block.text === "Projected TypeScript bodies"
  );
  const projectedBodyIndex = missingProjectedBody.blocks.findIndex(
    (block, index) =>
      index > projectedHeadingIndex &&
      block.blockType === "fenced-code" &&
      block.language === "typescript"
  );
  missingProjectedBody.blocks.splice(projectedBodyIndex, 1);
  recordsControl(
    "projected-typescript-role-coverage",
    () => assertsSemanticDocumentInvariants(missingProjectedBody),
    error =>
      error.message ===
      "DOCUMENT_PROJECTED_TYPESCRIPT_ROLE_COVERAGE_MISMATCH"
  );

  const storyMutation = structuredClone(authority);
  storyMutation.subject.userStory.iWant += " with an unreviewed extension";
  recordsControl(
    "subject-story-authority-mismatch",
    () => assertsSemanticDocumentInvariants(storyMutation),
    error =>
      error.message.startsWith("DOCUMENT_USER_STORY_INCOMPLETE")
  );

  const duplicatedHeading = structuredClone(authority);
  const userStoryHeadingIndex = duplicatedHeading.blocks.findIndex(
    block =>
      block.blockType === "heading" &&
      block.level === 2 &&
      block.text === "User story"
  );
  duplicatedHeading.blocks.splice(userStoryHeadingIndex + 1, 0, {
    blockType: "heading",
    level: 2,
    text: "User story"
  });
  recordsControl(
    "duplicated-required-heading",
    () => assertsSemanticDocumentInvariants(duplicatedHeading),
    error =>
      error.message ===
      "DOCUMENT_CONTRACT_SECTION_DUPLICATED: User story"
  );

  const duplicatedLedgerFilename = structuredClone(authority);
  const ledgerBlock = duplicatedLedgerFilename.blocks.find(
    block =>
      block.blockType === "fenced-code" &&
      block.language === "json" &&
      block.lines.some(line =>
        line.includes("four-body-sej-substitution-matrix.v1")
      )
  );
  const ledgerValue = JSON.parse(ledgerBlock.lines.join("\n"));
  ledgerValue.entries[1].bodies[0].file =
    ledgerValue.entries[0].bodies[0].file;
  ledgerBlock.lines = JSON.stringify(ledgerValue, null, 2).split("\n");
  recordsControl(
    "projection-ledger-filename-substitution",
    () => assertsSemanticDocumentInvariants(duplicatedLedgerFilename),
    error =>
      error.message.startsWith(
        "DOCUMENT_PROJECTION_LEDGER_FILENAME_DERIVATION_MISMATCH"
      )
  );

  const invalidTypescript = structuredClone(authority);
  const projectedBodiesHeadingIndex = invalidTypescript.blocks.findIndex(
    block =>
      block.blockType === "heading" &&
      block.text === "Projected TypeScript bodies"
  );
  const typeBody = invalidTypescript.blocks
    .slice(projectedBodiesHeadingIndex + 1)
    .filter(
      block =>
        block.blockType === "fenced-code" &&
        block.language === "typescript"
    )[1];
  typeBody.lines[typeBody.lines.length - 1] += "}";
  recordsControl(
    "invalid-projected-typescript",
    () => assertsSemanticDocumentInvariants(invalidTypescript),
    error =>
      error.message ===
      "DOCUMENT_PROJECTED_TYPESCRIPT_SEJ_MISMATCH: type"
  );

  const evidenceCatalogMismatch = structuredClone(authority);
  const evidenceCatalogBlock = evidenceCatalogMismatch.blocks.find(
    block =>
      block.blockType === "fenced-code" &&
      block.language === "json" &&
      block.lines.some(line =>
        line.includes("new-feature-evidence-artifact-catalog.v1")
      )
  );
  const evidenceCatalogValue = JSON.parse(
    evidenceCatalogBlock.lines.join("\n")
  );
  evidenceCatalogValue.entries[1].file =
    "02-substituted-new-feature-request-admission.json";
  evidenceCatalogBlock.lines = JSON.stringify(
    evidenceCatalogValue,
    null,
    2
  ).split("\n");
  recordsControl(
    "evidence-set-catalog-mismatch",
    () => assertsSemanticDocumentInvariants(evidenceCatalogMismatch),
    error => error.message === "DOCUMENT_EVIDENCE_SET_CATALOG_MISMATCH"
  );

  const rootParentMutation = structuredClone(authority);
  const rootEnvelopeBlock = rootParentMutation.blocks.find(
    block =>
      block.blockType === "fenced-code" &&
      block.language === "json" &&
      block.lines.some(line => line.trim() === "\"parent\": null,")
  );
  const rootEnvelopeValue = JSON.parse(rootEnvelopeBlock.lines.join("\n"));
  rootEnvelopeValue.provenance.parent = {
    artifactType: "forbidden-sentinel-parent",
    artifactSha256: "sha256:<forbidden>"
  };
  rootEnvelopeBlock.lines = JSON.stringify(
    rootEnvelopeValue,
    null,
    2
  ).split("\n");
  recordsControl(
    "root-provenance-parent-substitution",
    () => assertsSemanticDocumentInvariants(rootParentMutation),
    error => error.message === "DOCUMENT_ROOT_PROVENANCE_VARIANT_INVALID"
  );

  const artifactTypeEnumMutation = structuredClone(authority);
  const artifactTypeEnumBlock = artifactTypeEnumMutation.blocks.find(
    block =>
      block.blockType === "fenced-code" &&
      block.language === "json" &&
      block.lines.some(line =>
        line.includes("\"portable-new-feature-verification-report\"")
      ) &&
      !block.lines.some(line =>
        line.includes("\"artifactType\":")
      )
  );
  const artifactTypeEnumValue = JSON.parse(
    artifactTypeEnumBlock.lines.join("\n")
  );
  artifactTypeEnumValue.pop();
  artifactTypeEnumBlock.lines = JSON.stringify(
    artifactTypeEnumValue,
    null,
    2
  ).split("\n");
  recordsControl(
    "artifact-type-enum-coverage",
    () => assertsSemanticDocumentInvariants(artifactTypeEnumMutation),
    error =>
      error.message ===
      "DOCUMENT_EVIDENCE_ARTIFACT_TYPE_ENUM_MISMATCH"
  );

  const acceptanceRedCoverage = structuredClone(authority);
  const acceptanceMapBlock = acceptanceRedCoverage.blocks.find(
    block =>
      block.blockType === "fenced-code" &&
      block.language === "json" &&
      block.lines.some(line =>
        line.includes("acceptance-check-red-code-map.v1")
      )
  );
  const acceptanceMapValue = JSON.parse(
    acceptanceMapBlock.lines.join("\n")
  );
  acceptanceMapValue.entries[0].redCodes.pop();
  acceptanceMapBlock.lines = JSON.stringify(
    acceptanceMapValue,
    null,
    2
  ).split("\n");
  recordsControl(
    "acceptance-red-code-coverage",
    () => assertsSemanticDocumentInvariants(acceptanceRedCoverage),
    error =>
      error.message ===
      "DOCUMENT_ACCEPTANCE_RED_MAP_COVERAGE_MISMATCH"
  );

  const malformedSej = structuredClone(authority);
  const primarySejBlock = malformedSej.blocks.find(
    block =>
      block.blockType === "fenced-code" &&
      block.language === "json" &&
      block.lines.some(line =>
        line.includes("\"bodyRole\": \"primary\"")
      ) &&
      block.lines.some(line =>
        line.includes("\"semanticExecutableType\":")
      )
  );
  const primarySejValue = JSON.parse(primarySejBlock.lines.join("\n"));
  primarySejValue.projection.invocation.awaited = false;
  primarySejBlock.lines = JSON.stringify(primarySejValue, null, 2).split(
    "\n"
  );
  recordsControl(
    "sej-schema-shape",
    () => assertsSemanticDocumentInvariants(malformedSej),
    error => error.message === "DOCUMENT_SEJ_SCHEMA_INVALID: primary"
  );
}

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
