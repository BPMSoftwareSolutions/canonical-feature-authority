import { mkdtemp, readFile, readdir, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { relative, resolve } from "node:path";
import { spawn } from "node:child_process";

const repositoryRoot = resolve(import.meta.dirname, "..");
const projectorRoot = resolve(
  repositoryRoot,
  "../declarative-typescript-body-projector"
);
const temporaryRoot = await mkdtemp(
  resolve(tmpdir(), "bounded-model-provenance-")
);
const npmCli = process.env.npm_execpath;

function runs(command, args, cwd) {
  return new Promise((accept, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: "inherit",
      shell: false
    });
    child.on("error", reject);
    child.on("exit", code => {
      if (code === 0) accept();
      else reject(new Error(`${command} exited with ${code}`));
    });
  });
}

function runsNpm(args, cwd) {
  if (npmCli !== undefined) {
    return runs(process.execPath, [npmCli, ...args], cwd);
  }
  return runs("npm", args, cwd);
}

async function discoversFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await discoversFiles(path));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}

try {
  const materializer = resolve(
    repositoryRoot,
    "tools/materializes-bounded-model-submission-provenance-contract.mjs"
  );
  await runs(
    process.execPath,
    [materializer, "--output-root", temporaryRoot],
    repositoryRoot
  );
  await runsNpm(
    [
      "run",
      "adopt-ast-tree",
      "--",
      "--source-root",
      resolve(
        temporaryRoot,
        "capabilities/prove-bounded-model-submission-provenance-under-independent-trust"
      ),
      "--schema",
      resolve(projectorRoot, "contracts/lossless-typescript-ast-projection.schema.json"),
      "--key-id",
      "sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09",
      "--projector-id",
      "declarative-typescript-body-projector"
    ],
    projectorRoot
  );
  await runs(
    process.execPath,
    [
      materializer,
      "--output-root",
      temporaryRoot,
      "--finalize-ast"
    ],
    repositoryRoot
  );
  await runsNpm(
    [
      "run",
      "project-authority-tree",
      "--",
      "--authority-root",
      temporaryRoot,
      "--output-root",
      temporaryRoot,
      "--signing-key",
      resolve(projectorRoot, ".projector-keys/classroom-ed25519-private.pem"),
      "--trusted-keys",
      resolve(repositoryRoot, "projection-authority/trusted-projector-keys.json"),
      "--adopt-existing"
    ],
    projectorRoot
  );
  await runs(
    process.execPath,
    [
      resolve(
        repositoryRoot,
        "tools/verifies-bounded-model-submission-provenance-contract.mjs"
      ),
      "--root",
      temporaryRoot
    ],
    repositoryRoot
  );

  const generatedRoots = [
    "capabilities/prove-bounded-model-submission-provenance-under-independent-trust",
    ...[
      "independent-provider-exchange-attestation.schema.json",
      "bounded-model-submission-body-reproduction.schema.json",
      "bounded-model-submission-execution-observation.schema.json",
      "complete-bounded-model-submission-lineage.schema.json",
      "bounded-model-submission-acceptance-disposition.schema.json"
    ].map(name => `schemas/${name}`)
  ];
  for (const generatedRoot of generatedRoots) {
    const temporaryPath = resolve(temporaryRoot, generatedRoot);
    const temporaryFiles = (await stat(temporaryPath)).isDirectory()
      ? await discoversFiles(temporaryPath)
      : [temporaryPath];
    for (const temporaryFile of temporaryFiles) {
      const relativePath = relative(temporaryRoot, temporaryFile);
      const repositoryFile = resolve(repositoryRoot, relativePath);
      const [generated, committed] = await Promise.all([
        readFile(temporaryFile),
        readFile(repositoryFile)
      ]);
      if (!generated.equals(committed)) {
        throw new Error(`Clean regeneration drift: ${relativePath}`);
      }
    }
  }
  console.log("Clean empty-root regeneration is byte-identical to the repository");
} finally {
  await rm(temporaryRoot, { recursive: true, force: true });
}
