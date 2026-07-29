import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import {
  access,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  stat,
  writeFile
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, relative, resolve, sep } from "node:path";
import { promisify } from "node:util";

import {
  projectsCanonicalFeatureImplementationPackage
} from "./canonical-feature-conveyor-implementation-package.mjs";

const repositoryRoot = resolve(import.meta.dirname, "..");
const authorityPath = resolve(
  repositoryRoot,
  "architecture/end-to-end-canonical-feature-conveyor.authority.json"
);
const authority = JSON.parse(await readFile(authorityPath, "utf8"));
const projected =
  await projectsCanonicalFeatureImplementationPackage(authority);
const executes = promisify(execFile);
const governedRoots = ["composition", "evaluation", "runtime", "src"];

function sha256(bytes) {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function argument(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

function normalizesArtifactPath(path) {
  return path.split("/").join(sep);
}

function displayPath(path) {
  return path.split(sep).join("/");
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function assertsEmptyRoot(root) {
  if (!(await exists(root))) return;
  const metadata = await stat(root);
  if (!metadata.isDirectory()) {
    throw new Error(`IMPLEMENTATION_TARGET_NOT_DIRECTORY: ${root}`);
  }
  if ((await readdir(root)).length !== 0) {
    throw new Error(`IMPLEMENTATION_TARGET_OVERWRITE_FORBIDDEN: ${root}`);
  }
}

async function materializes(root) {
  await assertsEmptyRoot(root);
  await mkdir(root, { recursive: true });
  for (const artifact of projected.artifacts) {
    const outputPath = resolve(
      root,
      normalizesArtifactPath(artifact.artifactPath)
    );
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, artifact.projectedSource, "utf8");
  }
}

async function listsGovernedFiles(root) {
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
        files.push(displayPath(relative(root, path)));
      }
    }
  };
  for (const governedRoot of governedRoots) {
    await visits(resolve(root, governedRoot));
  }
  return files.sort();
}

async function compares(root, embedded) {
  const governedArtifacts = projected.artifacts.filter(
    artifact => !embedded || artifact.family !== "package-support"
  );
  const expectedPaths = new Set(
    governedArtifacts.map(artifact => artifact.artifactPath)
  );
  const results = [];
  for (const artifact of governedArtifacts) {
    const observedPath = resolve(
      root,
      normalizesArtifactPath(artifact.artifactPath)
    );
    if (!(await exists(observedPath))) {
      results.push({
        artifactPath: artifact.artifactPath,
        family: artifact.family,
        sourceAuthorityRef: artifact.sourceAuthorityRef,
        projectorCapability: artifact.projectorCapability,
        posture: "PROJECTABLE",
        comparison: "MISSING",
        expectedSha256: artifact.projectedSourceSha256,
        observedSha256: null
      });
      continue;
    }
    const observedSource = await readFile(observedPath, "utf8");
    results.push({
      artifactPath: artifact.artifactPath,
      family: artifact.family,
      sourceAuthorityRef: artifact.sourceAuthorityRef,
      projectorCapability: artifact.projectorCapability,
      posture: "PROJECTABLE",
      comparison:
        observedSource === artifact.projectedSource
          ? "BYTE_IDENTICAL"
          : "BYTE_DRIFT",
      expectedSha256: artifact.projectedSourceSha256,
      observedSha256: sha256(Buffer.from(observedSource, "utf8"))
    });
  }
  const unexpected = (await listsGovernedFiles(root)).filter(
    path => !expectedPaths.has(path)
  );
  const counts = Object.fromEntries(
    ["BYTE_IDENTICAL", "BYTE_DRIFT", "MISSING"].map(comparison => [
      comparison,
      results.filter(result => result.comparison === comparison)
        .length
    ])
  );
  return {
    comparisonType:
      "canonical-feature-conveyor-implementation-comparison.v1",
    packageId: projected.packageId,
    comparedRoot: root,
    mode: embedded ? "embedded-manual-build" : "isolated-projection",
    topologySha256: projected.topologySha256,
    summary: {
      expectedArtifacts: governedArtifacts.length,
      ...counts,
      unexpectedGovernedFiles: unexpected.length
    },
    artifacts: results,
    unexpectedGovernedFiles: unexpected
  };
}

async function compiles(root) {
  const compilerPath = resolve(
    repositoryRoot,
    "node_modules/typescript/bin/tsc"
  );
  try {
    await executes(
      process.execPath,
      [compilerPath, "--project", resolve(root, "tsconfig.json")],
      {
        cwd: root,
        windowsHide: true,
        maxBuffer: 1024 * 1024 * 8
      }
    );
  } catch (error) {
    const output = `${error.stdout ?? ""}${error.stderr ?? ""}`.trim();
    throw new Error(
      `IMPLEMENTATION_TYPESCRIPT_COMPILE_FAILED${
        output === "" ? "" : `\n${output}`
      }`
    );
  }
}

async function validatesExecutableJavaScript(root) {
  for (const artifact of projected.artifacts) {
    if (!artifact.artifactPath.endsWith(".mjs")) continue;
    try {
      await executes(
        process.execPath,
        [
          "--check",
          resolve(
            root,
            normalizesArtifactPath(artifact.artifactPath)
          )
        ],
        {
          cwd: root,
          windowsHide: true,
          maxBuffer: 1024 * 1024 * 8
        }
      );
    } catch (error) {
      const output =
        `${error.stdout ?? ""}${error.stderr ?? ""}`.trim();
      throw new Error(
        `IMPLEMENTATION_JAVASCRIPT_CHECK_FAILED${
          output === "" ? "" : `\n${output}`
        }`
      );
    }
  }
}

async function provesExecution(root) {
  const proofPath = resolve(
    root,
    "dist/evaluation/proves-canonical-feature-conveyor.js"
  );
  try {
    const { stdout } = await executes(
      process.execPath,
      [proofPath],
      {
        cwd: root,
        windowsHide: true,
        maxBuffer: 1024 * 1024 * 8
      }
    );
    const proof = JSON.parse(stdout.trim());
    if (
      proof.disposition !==
      authority.implementationArtifactAuthority.executionProof
        .expectedDisposition
    ) {
      throw new Error("unexpected terminal disposition");
    }
    return proof;
  } catch (error) {
    throw new Error(
      `IMPLEMENTATION_EXECUTION_PROOF_FAILED: ${error.message}`
    );
  }
}

async function writesProjectionVerificationReport(
  root,
  comparison,
  proof
) {
  const reportPath = resolve(
    root,
    ".verification/projection-verification-report.json"
  );
  await mkdir(dirname(reportPath), { recursive: true });
  await writeFile(
    reportPath,
    `${JSON.stringify(
      {
        verificationType:
          "canonical-feature-conveyor-projection-verification.v1",
        packageId: projected.packageId,
        authorityPath:
          "architecture/end-to-end-canonical-feature-conveyor.authority.json",
        targetRoot: root,
        topologySha256: projected.topologySha256,
        disposition: "PROJECTION_CONFORMS",
        checks: {
          declaredArtifacts: projected.artifacts.length,
          byteIdenticalArtifacts:
            comparison.summary.BYTE_IDENTICAL,
          unexpectedGovernedFiles:
            comparison.summary.unexpectedGovernedFiles,
          strictTypeScriptCompilation: "GREEN",
          semanticProjectedExecutionEquivalence: "GREEN"
        },
        artifacts: projected.artifacts.map(artifact => ({
          artifactPath: artifact.artifactPath,
          sourceAuthorityRef: artifact.sourceAuthorityRef,
          projectorCapability: artifact.projectorCapability,
          projector: artifact.projector,
          projectedSourceSha256:
            artifact.projectedSourceSha256
        })),
        executionProof: proof
      },
      null,
      2
    )}\n`,
    "utf8"
  );
}

function printsSummary(report) {
  console.log(
    `${report.mode}: ` +
      `${report.summary.BYTE_IDENTICAL}/` +
      `${report.summary.expectedArtifacts} byte-identical, ` +
      `${report.summary.BYTE_DRIFT} drifted, ` +
      `${report.summary.MISSING} missing, ` +
      `${report.summary.unexpectedGovernedFiles} unexpected`
  );
}

const mode = [
  "--plan",
  "--validate",
  "--write",
  "--check",
  "--compare"
].find(option => process.argv.includes(option));
if (mode === undefined) {
  throw new Error(
    "Specify --plan, --validate, --write, --check, or --compare"
  );
}

if (mode === "--plan") {
  console.log(`${JSON.stringify(projected, null, 2)}\n`);
} else if (mode === "--validate") {
  const temporaryRoot = await mkdtemp(
    resolve(tmpdir(), "canonical-feature-implementation-")
  );
  try {
    await materializes(temporaryRoot);
    const report = await compares(temporaryRoot, false);
    if (
      report.summary.BYTE_IDENTICAL !==
        report.summary.expectedArtifacts ||
      report.summary.unexpectedGovernedFiles !== 0
    ) {
      throw new Error("TEMPORARY_IMPLEMENTATION_PROJECTION_DRIFT");
    }
    await compiles(temporaryRoot);
    await validatesExecutableJavaScript(temporaryRoot);
    await provesExecution(temporaryRoot);
    printsSummary(report);
    console.log("Strict TypeScript compilation: GREEN");
    console.log("Executable JavaScript syntax: GREEN");
    console.log("Semantic/projected execution equivalence: GREEN");
  } finally {
    await rm(temporaryRoot, { recursive: true });
  }
} else {
  const rootArgument =
    argument("--output-root") ?? argument("--root");
  if (rootArgument === undefined) {
    throw new Error("Implementation root argument is required");
  }
  const root = resolve(rootArgument);
  if (mode === "--write") {
    await materializes(root);
    const report = await compares(root, false);
    if (
      report.summary.BYTE_IDENTICAL !==
        report.summary.expectedArtifacts ||
      report.summary.unexpectedGovernedFiles !== 0
    ) {
      throw new Error("MATERIALIZED_IMPLEMENTATION_PROJECTION_DRIFT");
    }
    await compiles(root);
    await validatesExecutableJavaScript(root);
    const proof = await provesExecution(root);
    await writesProjectionVerificationReport(root, report, proof);
    printsSummary(report);
    console.log("Strict TypeScript compilation: GREEN");
    console.log("Executable JavaScript syntax: GREEN");
    console.log("Semantic/projected execution equivalence: GREEN");
  } else {
    const embedded =
      mode === "--compare" || process.argv.includes("--embedded");
    const report = await compares(root, embedded);
    const reportPath = argument("--report");
    if (reportPath !== undefined) {
      const absoluteReportPath = resolve(reportPath);
      await mkdir(dirname(absoluteReportPath), { recursive: true });
      await writeFile(
        absoluteReportPath,
        `${JSON.stringify(report, null, 2)}\n`,
        "utf8"
      );
    }
    printsSummary(report);
    if (mode === "--check") {
      if (
        report.summary.BYTE_IDENTICAL !==
          report.summary.expectedArtifacts ||
        report.summary.unexpectedGovernedFiles !== 0
      ) {
        throw new Error("IMPLEMENTATION_PROJECTION_CHECK_FAILED");
      }
      if (!embedded) {
        await compiles(root);
        await validatesExecutableJavaScript(root);
        const proof = await provesExecution(root);
        if (process.argv.includes("--write-verification-report")) {
          await writesProjectionVerificationReport(
            root,
            report,
            proof
          );
        }
        console.log("Strict TypeScript compilation: GREEN");
        console.log("Executable JavaScript syntax: GREEN");
        console.log("Semantic/projected execution equivalence: GREEN");
      }
    }
  }
}
