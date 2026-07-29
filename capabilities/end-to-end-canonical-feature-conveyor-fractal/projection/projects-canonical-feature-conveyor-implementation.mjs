import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import {
  access,
  mkdir,
  readFile,
  readdir,
  writeFile
} from "node:fs/promises";
import { dirname, relative, resolve, sep } from "node:path";
import { promisify } from "node:util";

import {
  projectsCanonicalFeatureImplementationPackage
} from "./canonical-feature-conveyor-implementation-package.mjs";

const toolRepositoryRoot = resolve(import.meta.dirname, "../../..");
const authorityPath = resolve(
  toolRepositoryRoot,
  "architecture/end-to-end-canonical-feature-conveyor.authority.json"
);
const authority = JSON.parse(await readFile(authorityPath, "utf8"));
const projected =
  await projectsCanonicalFeatureImplementationPackage(authority);
const executes = promisify(execFile);
const workspaceAuthority =
  authority.implementationArtifactAuthority
    .workspaceProjectionAuthority;
const capabilityRoot = workspaceAuthority.capabilityRoot;
const featureId =
  authority.canonicalFeatureBody.feature.featureId;
const governedSubdirectories = [
  "composition",
  "evaluation",
  "projection",
  "runtime",
  "scenarios"
];

function sha256(bytes) {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function argument(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

function normalizedArtifactPath(path) {
  return path.split("/").join(sep);
}

function displayedPath(path) {
  return path.split(sep).join("/");
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
  try {
    const result = await executes(command, args, {
      cwd,
      windowsHide: true,
      maxBuffer: 8 * 1024 * 1024
    });
    return result.stdout.trim();
  } catch (error) {
    const output =
      `${error.stdout ?? ""}${error.stderr ?? ""}`.trim();
    throw new Error(
      `WORKSPACE_COMMAND_FAILED: ${command} ${args.join(" ")}${
        output === "" ? "" : `\n${output}`
      }`
    );
  }
}

async function runsGitDifference(args, cwd) {
  try {
    const result = await executes("git", args, {
      cwd,
      windowsHide: true,
      maxBuffer: 32 * 1024 * 1024
    });
    return result.stdout;
  } catch (error) {
    if (error.code === 1) return error.stdout ?? "";
    const output =
      `${error.stdout ?? ""}${error.stderr ?? ""}`.trim();
    throw new Error(
      `WORKSPACE_GIT_DIFF_FAILED: git ${args.join(" ")}${
        output === "" ? "" : `\n${output}`
      }`
    );
  }
}

async function resolvesRepositoryRoot(rootArgument) {
  asserts(
    argument("--output-root") === undefined,
    "ALTERNATE_IMPLEMENTATION_ROOT_FORBIDDEN"
  );
  const requestedRoot = resolve(rootArgument ?? ".");
  const observedRoot = resolve(
    await runs(
      "git",
      ["rev-parse", "--show-toplevel"],
      requestedRoot
    )
  );
  asserts(
    requestedRoot === observedRoot,
    `GOVERNED_REPOSITORY_ROOT_MISMATCH: ${requestedRoot}`
  );
  asserts(
    observedRoot === toolRepositoryRoot,
    `IMPLEMENTATION_AUTHORITY_REPOSITORY_MISMATCH: ${observedRoot}`
  );
  return observedRoot;
}

function assertsGovernedCoordinates(repositoryRoot) {
  asserts(
    workspaceAuthority.repositoryRoot === ".",
    "WORKSPACE_REPOSITORY_ROOT_AUTHORITY_INVALID"
  );
  asserts(
    workspaceAuthority.projectionMode === "working-tree" &&
      workspaceAuthority.reviewSurface === "git-diff" &&
      workspaceAuthority.alternateFileTopologies === "forbidden",
    "WORKSPACE_PROJECTION_POLICY_INVALID"
  );
  const capabilityPath = resolve(repositoryRoot, capabilityRoot);
  const seen = new Set();
  for (const artifact of projected.artifacts) {
    asserts(
      artifact.ownership === "projector-owned",
      `ARTIFACT_OWNERSHIP_INVALID: ${artifact.artifactPath}`
    );
    asserts(
      artifact.existingFilePolicy ===
        "REPLACE_IF_GENERATED_LINEAGE_MATCHES",
      `ARTIFACT_EXISTING_FILE_POLICY_INVALID: ${artifact.artifactPath}`
    );
    asserts(
      artifact.artifactPath.startsWith(`${capabilityRoot}/`),
      `ARTIFACT_OUTSIDE_CAPABILITY_ROOT: ${artifact.artifactPath}`
    );
    const outputPath = resolve(
      repositoryRoot,
      normalizedArtifactPath(artifact.artifactPath)
    );
    asserts(
      outputPath.startsWith(`${capabilityPath}${sep}`),
      `ARTIFACT_PATH_ESCAPES_CAPABILITY_ROOT: ${artifact.artifactPath}`
    );
    asserts(
      !seen.has(artifact.artifactPath),
      `DUPLICATE_ARTIFACT_COORDINATE: ${artifact.artifactPath}`
    );
    seen.add(artifact.artifactPath);
  }
  asserts(
    projected.artifacts.length === 69,
    "CAPABILITY_ARTIFACT_COUNT_MISMATCH"
  );
}

function ownsExistingSource(source, artifact) {
  if (!source.includes("// @generated")) return false;
  return (
    source.includes(`// feature-id: ${featureId}`) ||
    source.includes(
      `// authority-ref: ${artifact.sourceAuthorityRef}`
    )
  );
}

async function materializesInPlace(repositoryRoot) {
  const observations = [];
  for (const artifact of projected.artifacts) {
    const outputPath = resolve(
      repositoryRoot,
      normalizedArtifactPath(artifact.artifactPath)
    );
    let priorSource = null;
    if (await exists(outputPath)) {
      priorSource = await readFile(outputPath, "utf8");
      asserts(
        priorSource === artifact.projectedSource ||
          ownsExistingSource(priorSource, artifact),
        `EXISTING_FILE_OWNERSHIP_REJECTED: ${artifact.artifactPath}`
      );
    }
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, artifact.projectedSource, "utf8");
    const observedBytes = await readFile(outputPath);
    asserts(
      sha256(observedBytes) === artifact.projectedSourceSha256,
      `PROJECTED_BYTES_DIVERGE: ${artifact.artifactPath}`
    );
    observations.push({
      artifactPath: artifact.artifactPath,
      disposition:
        priorSource === null
          ? "CREATED"
          : priorSource === artifact.projectedSource
            ? "UNCHANGED"
            : "REPLACED",
      projectedSourceSha256: artifact.projectedSourceSha256
    });
  }
  return observations;
}

async function listsGovernedFiles(repositoryRoot) {
  const files = [];
  const visits = async directory => {
    if (!(await exists(directory))) return;
    for (const entry of await readdir(directory, {
      withFileTypes: true
    })) {
      const path = resolve(directory, entry.name);
      if (entry.isDirectory()) {
        await visits(path);
      } else if (entry.isFile()) {
        files.push(
          displayedPath(relative(repositoryRoot, path))
        );
      }
    }
  };
  for (const subdirectory of governedSubdirectories) {
    await visits(
      resolve(repositoryRoot, capabilityRoot, subdirectory)
    );
  }
  return files.sort();
}

async function listsTargetSprawl(repositoryRoot) {
  const authorityRefs = new Set(
    projected.artifacts.map(
      artifact => artifact.sourceAuthorityRef
    )
  );
  const candidates = (
    await runs(
      "git",
      ["ls-files", "-co", "--exclude-standard"],
      repositoryRoot
    )
  )
    .split(/\r?\n/)
    .filter(Boolean);
  const sprawl = [];
  for (const candidate of candidates) {
    if (
      candidate.startsWith(`${capabilityRoot}/`) ||
      !/\.(?:json|mjs|ts)$/.test(candidate)
    ) {
      continue;
    }
    const absolutePath = resolve(
      repositoryRoot,
      normalizedArtifactPath(candidate)
    );
    if (!(await exists(absolutePath))) continue;
    const source = await readFile(absolutePath, "utf8");
    const generatedTargetSource =
      /\.(?:mjs|ts)$/.test(candidate) &&
      source.includes("// @generated") &&
      (
        source.includes(`// feature-id: ${featureId}`) ||
        [...authorityRefs].some(authorityRef =>
          source.includes(`// authority-ref: ${authorityRef}`)
        )
      );
    let targetProjectionAuthority = false;
    if (candidate.endsWith(".json")) {
      try {
        const document = JSON.parse(source);
        targetProjectionAuthority =
          document?.lineage?.featureId === featureId;
      } catch {
        targetProjectionAuthority = false;
      }
    }
    if (generatedTargetSource || targetProjectionAuthority) {
      sprawl.push(candidate);
    }
  }
  return sprawl.sort();
}

async function compares(repositoryRoot) {
  const expectedPaths = new Set(
    projected.artifacts.map(artifact => artifact.artifactPath)
  );
  const results = [];
  for (const artifact of projected.artifacts) {
    const observedPath = resolve(
      repositoryRoot,
      normalizedArtifactPath(artifact.artifactPath)
    );
    if (!(await exists(observedPath))) {
      results.push({
        artifactPath: artifact.artifactPath,
        family: artifact.family,
        sourceAuthorityRef: artifact.sourceAuthorityRef,
        comparison: "MISSING",
        expectedSha256: artifact.projectedSourceSha256,
        observedSha256: null
      });
      continue;
    }
    const observedBytes = await readFile(observedPath);
    results.push({
      artifactPath: artifact.artifactPath,
      family: artifact.family,
      sourceAuthorityRef: artifact.sourceAuthorityRef,
      comparison:
        sha256(observedBytes) === artifact.projectedSourceSha256
          ? "BYTE_IDENTICAL"
          : "BYTE_DRIFT",
      expectedSha256: artifact.projectedSourceSha256,
      observedSha256: sha256(observedBytes)
    });
  }
  const unexpected = (await listsGovernedFiles(repositoryRoot))
    .filter(path => !expectedPaths.has(path));
  const targetSprawl =
    await listsTargetSprawl(repositoryRoot);
  const counts = Object.fromEntries(
    ["BYTE_IDENTICAL", "BYTE_DRIFT", "MISSING"].map(
      comparison => [
        comparison,
        results.filter(
          result => result.comparison === comparison
        ).length
      ]
    )
  );
  return {
    comparisonType:
      "canonical-feature-conveyor-working-tree-comparison.v2",
    packageId: projected.packageId,
    repositoryRoot,
    capabilityRoot,
    mode: "governed-repository-working-tree",
    topologySha256: projected.topologySha256,
    summary: {
      expectedArtifacts: projected.artifacts.length,
      ...counts,
      unexpectedGovernedFiles: unexpected.length,
      targetArtifactsOutsideCapabilityRoot:
        targetSprawl.length
    },
    artifacts: results,
    unexpectedGovernedFiles: unexpected,
    targetArtifactsOutsideCapabilityRoot: targetSprawl
  };
}

async function compilesRepository(repositoryRoot) {
  const compilerPath = resolve(
    repositoryRoot,
    "node_modules/typescript/bin/tsc"
  );
  await runs(
    process.execPath,
    [
      compilerPath,
      "--project",
      resolve(repositoryRoot, "tsconfig.json")
    ],
    repositoryRoot
  );
}

async function validatesExecutableJavaScript(repositoryRoot) {
  for (const artifact of projected.artifacts) {
    if (!artifact.artifactPath.endsWith(".mjs")) continue;
    await runs(
      process.execPath,
      [
        "--check",
        resolve(
          repositoryRoot,
          normalizedArtifactPath(artifact.artifactPath)
        )
      ],
      repositoryRoot
    );
  }
}

async function provesExecution(repositoryRoot) {
  const proofPath = resolve(
    repositoryRoot,
    "dist",
    capabilityRoot,
    "evaluation/proves-canonical-feature-conveyor.js"
  );
  const output = await runs(
    process.execPath,
    [proofPath],
    repositoryRoot
  );
  const proof = JSON.parse(output);
  asserts(
    proof.disposition ===
      authority.implementationArtifactAuthority.executionProof
        .expectedDisposition,
    "IMPLEMENTATION_EXECUTION_PROOF_RED"
  );
  return proof;
}

async function capturesGitState(repositoryRoot) {
  const [baseCommit, status, nameStatus, diff] =
    await Promise.all([
      runs("git", ["rev-parse", "HEAD"], repositoryRoot),
      runs(
        "git",
        [
          "status",
          "--short",
          "--untracked-files=all",
          "--",
          capabilityRoot
        ],
        repositoryRoot
      ),
      runs(
        "git",
        ["diff", "--name-status", "--", capabilityRoot],
        repositoryRoot
      ),
      runs(
        "git",
        ["diff", "--binary", "--", capabilityRoot],
        repositoryRoot
      )
    ]);
  const untrackedPaths = status
    .split(/\r?\n/)
    .filter(line => line.startsWith("?? "))
    .map(line => line.slice(3));
  const untrackedPatches = [];
  for (const path of untrackedPaths) {
    untrackedPatches.push(
      await runsGitDifference(
        ["diff", "--no-index", "--binary", "--", "NUL", path],
        repositoryRoot
      )
    );
  }
  const reviewPatch = [diff, ...untrackedPatches]
    .filter(Boolean)
    .join("\n");
  return {
    baseCommit,
    status,
    nameStatus,
    trackedGitDiffSha256:
      sha256(Buffer.from(diff, "utf8")),
    untrackedPaths,
    gitDiffSha256:
      sha256(Buffer.from(reviewPatch, "utf8"))
  };
}

async function writesVerificationReport(
  repositoryRoot,
  evidenceRootArgument,
  dirtyBefore,
  gitState,
  materialization,
  comparison,
  proof
) {
  if (evidenceRootArgument === undefined) return null;
  const evidenceRoot = resolve(evidenceRootArgument);
  asserts(
    evidenceRoot !== repositoryRoot &&
      !evidenceRoot.startsWith(`${repositoryRoot}${sep}`),
    "EVIDENCE_ROOT_INSIDE_REPOSITORY_FORBIDDEN"
  );
  const reportPath = resolve(
    evidenceRoot,
    "working-tree-projection-report.json"
  );
  const report = {
    verificationType:
      "canonical-feature-conveyor-working-tree-projection.v2",
    disposition: "PROJECTION_CONFORMS",
    authorityPath:
      "architecture/end-to-end-canonical-feature-conveyor.authority.json",
    repositoryRoot,
    capabilityRoot,
    baseCommit: gitState.baseCommit,
    workspaceDirtyBefore: dirtyBefore !== "",
    workspaceDirtyBeforeStatus: dirtyBefore,
    projectedPaths: materialization.map(
      artifact => artifact.artifactPath
    ),
    createdPaths: materialization
      .filter(artifact => artifact.disposition === "CREATED")
      .map(artifact => artifact.artifactPath),
    modifiedPaths: materialization
      .filter(artifact => artifact.disposition === "REPLACED")
      .map(artifact => artifact.artifactPath),
    unchangedPaths: materialization
      .filter(artifact => artifact.disposition === "UNCHANGED")
      .map(artifact => artifact.artifactPath),
    gitStatus: gitState.status,
    gitNameStatus: gitState.nameStatus,
    trackedGitDiffSha256: gitState.trackedGitDiffSha256,
    untrackedPaths: gitState.untrackedPaths,
    gitDiffSha256: gitState.gitDiffSha256,
    topologySha256: projected.topologySha256,
    compileDisposition: "GREEN",
    executionDisposition: "GREEN",
    comparison,
    executionProof: proof
  };
  await mkdir(dirname(reportPath), { recursive: true });
  await writeFile(
    reportPath,
    `${JSON.stringify(report, null, 2)}\n`,
    "utf8"
  );
  return reportPath;
}

function assertsConforms(report) {
  asserts(
    report.summary.BYTE_IDENTICAL ===
      report.summary.expectedArtifacts &&
      report.summary.BYTE_DRIFT === 0 &&
      report.summary.MISSING === 0 &&
      report.summary.unexpectedGovernedFiles === 0 &&
      report.summary.targetArtifactsOutsideCapabilityRoot === 0,
    "IMPLEMENTATION_WORKING_TREE_CHECK_FAILED"
  );
}

function printsSummary(report) {
  console.log(
    `${report.mode}: ` +
      `${report.summary.BYTE_IDENTICAL}/` +
      `${report.summary.expectedArtifacts} byte-identical, ` +
      `${report.summary.BYTE_DRIFT} drifted, ` +
      `${report.summary.MISSING} missing, ` +
      `${report.summary.unexpectedGovernedFiles} unexpected, ` +
      `${report.summary.targetArtifactsOutsideCapabilityRoot} sprawled`
  );
}

const mode = [
  "--plan",
  "--validate",
  "--write",
  "--check",
  "--compare"
].find(option => process.argv.includes(option));
asserts(
  mode !== undefined,
  "Specify --plan, --validate, --write, --check, or --compare"
);

if (mode === "--plan") {
  console.log(`${JSON.stringify(projected, null, 2)}\n`);
} else {
  const repositoryRoot = await resolvesRepositoryRoot(
    argument("--root")
  );
  assertsGovernedCoordinates(repositoryRoot);
  if (mode === "--validate") {
    console.log(
      `Capability-root policy: GREEN (${projected.artifacts.length}/${projected.artifacts.length})`
    );
    console.log("Projection source hashes: GREEN");
  } else if (mode === "--write") {
    const dirtyBefore = await runs(
      "git",
      ["status", "--short", "--untracked-files=all"],
      repositoryRoot
    );
    const materialization =
      await materializesInPlace(repositoryRoot);
    const comparison = await compares(repositoryRoot);
    assertsConforms(comparison);
    await compilesRepository(repositoryRoot);
    await validatesExecutableJavaScript(repositoryRoot);
    const proof = await provesExecution(repositoryRoot);
    const gitState = await capturesGitState(repositoryRoot);
    const reportPath = await writesVerificationReport(
      repositoryRoot,
      argument("--evidence-root"),
      dirtyBefore,
      gitState,
      materialization,
      comparison,
      proof
    );
    printsSummary(comparison);
    console.log("Repository TypeScript compilation: GREEN");
    console.log("Repository execution equivalence: GREEN");
    console.log(`Git review surface: ${capabilityRoot}`);
    if (reportPath !== null) {
      console.log(`Evidence: ${reportPath}`);
    }
  } else {
    const comparison = await compares(repositoryRoot);
    printsSummary(comparison);
    if (mode === "--check") {
      assertsConforms(comparison);
      await compilesRepository(repositoryRoot);
      await validatesExecutableJavaScript(repositoryRoot);
      await provesExecution(repositoryRoot);
      console.log("Repository TypeScript compilation: GREEN");
      console.log("Repository execution equivalence: GREEN");
    }
    const reportPath = argument("--report");
    if (reportPath !== undefined) {
      const absoluteReportPath = resolve(reportPath);
      asserts(
        absoluteReportPath !== repositoryRoot &&
          !absoluteReportPath.startsWith(
            `${repositoryRoot}${sep}`
          ),
        "COMPARISON_REPORT_INSIDE_REPOSITORY_FORBIDDEN"
      );
      await mkdir(dirname(absoluteReportPath), {
        recursive: true
      });
      await writeFile(
        absoluteReportPath,
        `${JSON.stringify(comparison, null, 2)}\n`,
        "utf8"
      );
    }
  }
}
