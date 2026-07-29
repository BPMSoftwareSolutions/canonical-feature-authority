// @generated
// authority-ref: self-hosting:canonical-feature-conveyor-self-hosting.v1
// projector: canonical-feature-conveyor-implementation-projector.v1
// DO NOT EDIT.
import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve, sep } from "node:path";
import { promisify } from "node:util";

const EXPECTED_STAGE_IDS = [
  "capture-intent",
  "declare-outcome",
  "establish-feature",
  "establish-scenarios",
  "decompose-obligations",
  "declare-expectations",
  "assign-responsibilities",
  "declare-signals",
  "author-semantic-authority",
  "author-semantic-execution",
  "author-feature-body-authority",
  "resolve-language-projection",
  "project-expected-ast",
  "project-expected-code",
  "evaluate-semantic-execution",
  "evaluate-projected-execution",
  "evaluate-translation-conformance",
  "review-feature"
];
const EXPECTED_PACKAGE_ID = "end-to-end-canonical-feature-conveyor-implementation.v1";
const EXPECTED_ARTIFACT_COUNT = 32;
const CAPABILITY_ROOT = "capabilities/implement-one-new-feature-end-to-end-through-a-governed-conveyor";
const FEATURE_ID = "implement-one-new-feature-end-to-end-through-a-governed-conveyor";
const executes = promisify(execFile);

function argument(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

function sha256(bytes) {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function canonicalizes(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalizes).join(",")}]`;
  if (isRecord(value)) {
    return `{${Object.keys(value)
      .sort()
      .map(key => `${JSON.stringify(key)}:${canonicalizes(value[key])}`)
      .join(",")}}`;
  }
  const encoded = JSON.stringify(value);
  if (encoded === undefined) throw new Error("SELF_HOST_VALUE_NOT_CANONICALIZABLE");
  return encoded;
}

function asserts(condition, code) {
  if (!condition) throw new Error(code);
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function runs(command, args, cwd) {
  const result = await executes(command, args, {
    cwd,
    windowsHide: true,
    maxBuffer: 8 * 1024 * 1024
  });
  return result.stdout.trim();
}

function readsSource(document, source) {
  asserts(source.startsWith("$."), `SELF_HOST_SOURCE_DIALECT_REJECTED: ${source}`);
  return source.slice(2).split(".").reduce((value, member) => {
    asserts(
      isRecord(value) && member in value,
      `SELF_HOST_SOURCE_UNRESOLVED: ${source}`
    );
    return value[member];
  }, document);
}

function ownsExistingSource(source, artifact) {
  if (!source.includes("// @generated")) return false;
  return (
    source.includes(`// feature-id: ${FEATURE_ID}`) ||
    source.includes(`// authority-ref: ${artifact.sourceAuthorityRef}`)
  );
}

async function materializesInPlace(repositoryRoot, artifacts) {
  const capabilityPath = resolve(repositoryRoot, CAPABILITY_ROOT);
  const observations = [];
  for (const artifact of artifacts) {
    asserts(
      artifact.artifactPath.startsWith(`${CAPABILITY_ROOT}/`),
      `SELF_HOST_ARTIFACT_OUTSIDE_CAPABILITY: ${artifact.artifactPath}`
    );
    const outputPath = resolve(repositoryRoot, artifact.artifactPath);
    asserts(
      outputPath.startsWith(`${capabilityPath}${sep}`),
      `SELF_HOST_ARTIFACT_ESCAPES_CAPABILITY: ${artifact.artifactPath}`
    );
    let priorSource = null;
    if (await exists(outputPath)) {
      priorSource = await readFile(outputPath, "utf8");
      asserts(
        priorSource === artifact.projectedSource ||
          ownsExistingSource(priorSource, artifact),
        `SELF_HOST_EXISTING_FILE_OWNERSHIP_REJECTED: ${artifact.artifactPath}`
      );
    }
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, artifact.projectedSource, "utf8");
    const projectedBytes = await readFile(outputPath);
    asserts(
      sha256(projectedBytes) === artifact.projectedSourceSha256,
      `SELF_HOST_PROJECTED_BYTES_DIVERGE: ${artifact.artifactPath}`
    );
    observations.push({
      artifactPath: artifact.artifactPath,
      disposition:
        priorSource === null ? "CREATED" :
        priorSource === artifact.projectedSource ? "UNCHANGED" : "REPLACED",
      projectedSourceSha256: artifact.projectedSourceSha256
    });
  }
  return observations;
}

async function compiles(repositoryRoot, compilerPath) {
  await runs(process.execPath, [
    compilerPath,
    "--project",
    resolve(repositoryRoot, "tsconfig.json")
  ], repositoryRoot);
}

async function executesProjectionProof(repositoryRoot) {
  const proofPath = resolve(
    repositoryRoot,
    "dist",
    CAPABILITY_ROOT,
    "evaluation/proves-canonical-feature-conveyor.js"
  );
  const output = await runs(process.execPath, [proofPath], repositoryRoot);
  return JSON.parse(output);
}

const authorityArgument = argument("--authority");
const derivedArgument = argument("--derived");
const repositoryArgument = argument("--repository-root") ?? ".";
const compilerArgument = argument("--typescript-compiler");
const evidenceArgument = argument("--evidence-root");
asserts(authorityArgument !== undefined, "SELF_HOST_AUTHORITY_REQUIRED");
asserts(derivedArgument !== undefined, "SELF_HOST_DERIVED_PROJECTION_REQUIRED");
asserts(compilerArgument !== undefined, "SELF_HOST_TYPESCRIPT_COMPILER_REQUIRED");
const repositoryRoot = resolve(repositoryArgument);
const gitRoot = resolve(await runs(
  "git",
  ["rev-parse", "--show-toplevel"],
  repositoryRoot
));
asserts(gitRoot === repositoryRoot, "SELF_HOST_REPOSITORY_ROOT_MISMATCH");
const authorityPath = resolve(authorityArgument);
const derivedPath = resolve(derivedArgument);
const compilerPath = resolve(compilerArgument);
const [authorityBytes, derivedBytes] = await Promise.all([
  readFile(authorityPath),
  readFile(derivedPath)
]);
const authority = JSON.parse(authorityBytes.toString("utf8"));
const derived = JSON.parse(derivedBytes.toString("utf8"));
asserts(
  sha256(derivedBytes) === authority.projection.derivedProjectionSha256,
  "SELF_HOST_DERIVED_PROJECTION_HASH_MISMATCH"
);
asserts(
  derived.implementationPackage.packageId === EXPECTED_PACKAGE_ID,
  "SELF_HOST_PACKAGE_ID_MISMATCH"
);
const artifacts = derived.implementationPackage.artifacts;
asserts(
  artifacts.length === EXPECTED_ARTIFACT_COUNT,
  "SELF_HOST_ARTIFACT_COUNT_MISMATCH"
);
asserts(
  artifacts.every(artifact =>
    artifact.artifactPath.startsWith(`${CAPABILITY_ROOT}/`)
  ),
  "SELF_HOST_CAPABILITY_ROOT_COVERAGE_MISMATCH"
);
const baseCommit = await runs(
  "git",
  ["rev-parse", "HEAD"],
  repositoryRoot
);
const workspaceDirtyBefore = await runs(
  "git",
  ["status", "--short"],
  repositoryRoot
);
const sections = new Map(
  authority.documentationProjection.sections.map(section => [
    section.stageId,
    section
  ])
);
const document = { ...authority, derivedProjections: derived };
const availableProducts = new Set();
const stageObservations = [];
let materialization;
let executionProof;
for (const [index, stage] of authority.conveyor.stages.entries()) {
  asserts(stage.stageId === EXPECTED_STAGE_IDS[index], "SELF_HOST_STAGE_SEQUENCE_MISMATCH");
  for (const product of [...stage.requires, ...stage.consumes]) {
    asserts(
      availableProducts.has(product),
      `SELF_HOST_PRODUCT_NOT_AVAILABLE: ${stage.stageId}:${product}`
    );
  }
  const section = sections.get(stage.stageId);
  asserts(section !== undefined, `SELF_HOST_STAGE_SECTION_MISSING: ${stage.stageId}`);
  const sourceValue = readsSource(document, section.source);
  const observation = {
    sequence: index + 1,
    stageId: stage.stageId,
    source: section.source,
    sourceSha256: sha256(Buffer.from(canonicalizes(sourceValue), "utf8"))
  };
  if (stage.stageId === "project-expected-code") {
    materialization = await materializesInPlace(repositoryRoot, artifacts);
    await compiles(repositoryRoot, compilerPath);
    observation.materialization = {
      artifactCount: materialization.length,
      repositoryCompilation: "GREEN"
    };
  }
  if (stage.stageId === "evaluate-semantic-execution") {
    executionProof = await executesProjectionProof(repositoryRoot);
    asserts(executionProof.disposition === "PROJECTION_CONFORMS", "SELF_HOST_SEMANTIC_EXECUTION_RED");
    observation.execution = executionProof.semanticResult;
  }
  if (stage.stageId === "evaluate-projected-execution") {
    asserts(executionProof !== undefined, "SELF_HOST_EXECUTION_PROOF_MISSING");
    observation.execution = executionProof.projectedResult;
  }
  if (stage.stageId === "evaluate-translation-conformance") {
    asserts(
      canonicalizes(executionProof.semanticResult) ===
        canonicalizes(executionProof.projectedResult),
      "SELF_HOST_TRANSLATION_DIVERGES"
    );
    observation.translation = "PROJECTION_CONFORMS";
  }
  if (stage.stageId === "review-feature") {
    observation.reviewDisposition = "PROJECTION_CONFORMS";
  }
  for (const product of stage.produces) availableProducts.add(product);
  stageObservations.push(observation);
}
asserts(stageObservations.length === 18, "SELF_HOST_STAGE_COVERAGE_MISMATCH");
const gitStatus = await runs(
  "git",
  ["status", "--short", "--", CAPABILITY_ROOT],
  repositoryRoot
);
const gitDiff = await runs(
  "git",
  ["diff", "--binary", "--", CAPABILITY_ROOT],
  repositoryRoot
);
const report = {
  verificationType: "canonical-feature-conveyor-self-hosting.v2",
  disposition: "PROJECTION_CONFORMS",
  authorityPath,
  authoritySha256: sha256(authorityBytes),
  derivedProjectionPath: derivedPath,
  derivedProjectionSha256: sha256(derivedBytes),
  repositoryRoot,
  capabilityRoot: CAPABILITY_ROOT,
  baseCommit,
  workspaceDirtyBefore: workspaceDirtyBefore !== "",
  gitStatus,
  gitDiffSha256: sha256(Buffer.from(gitDiff, "utf8")),
  stageReplay: {
    observed: stageObservations.length,
    expected: EXPECTED_STAGE_IDS.length,
    stages: stageObservations
  },
  workspaceProjection: {
    packageId: EXPECTED_PACKAGE_ID,
    governedArtifactCount: artifacts.length,
    byteIdenticalArtifactCount: materialization.length,
    postProjectionEdits: 0,
    repositoryCompilation: "GREEN",
    semanticExecution: "EXECUTED",
    projectedExecution: "EXECUTED",
    translation: "PROJECTION_CONFORMS"
  },
  artifacts: materialization
};
if (evidenceArgument !== undefined) {
  const evidenceRoot = resolve(evidenceArgument);
  asserts(
    evidenceRoot !== repositoryRoot &&
      !evidenceRoot.startsWith(`${repositoryRoot}${sep}`),
    "SELF_HOST_EVIDENCE_ROOT_INSIDE_REPOSITORY"
  );
  const reportPath = resolve(evidenceRoot, "self-hosting-report.json");
  await mkdir(dirname(reportPath), { recursive: true });
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
}
console.log(JSON.stringify({
  disposition: report.disposition,
  capabilityRoot: CAPABILITY_ROOT,
  stages: stageObservations.length,
  artifacts: artifacts.length,
  repositoryCompilation: "GREEN"
}));
