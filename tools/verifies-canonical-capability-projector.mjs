import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import {
  mkdir,
  mkdtemp,
  readFile,
  rm,
  writeFile
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { promisify } from "node:util";

const executes = promisify(execFile);

function argument(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

function assert(condition, code) {
  if (!condition) throw new Error(code);
}

function sha256(bytes) {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

const contractArgument = argument("--contract");
assert(contractArgument, "CAPABILITY_VERIFICATION_CONTRACT_REQUIRED");
const contractPath = resolve(contractArgument);
const projectorPath = resolve(
  import.meta.dirname,
  "projects-canonical-capability-contract.mjs"
);
const authority = JSON.parse(
  await readFile(contractPath, "utf8")
);
const temporaryRoot = await mkdtemp(
  join(tmpdir(), "canonical-capability-projector-")
);
const controls = [];

async function writesContract(name, value) {
  const path = join(temporaryRoot, "contracts", `${name}.json`);
  await mkdir(dirname(path), {recursive: true});
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`);
  return path;
}

async function projects(contract, root, mode) {
  const path = await writesContract(
    `${controls.length}-${mode}`,
    contract
  );
  return executes(
    process.execPath,
    [
      projectorPath,
      "--contract",
      path,
      "--root",
      root,
      mode
    ],
    {cwd: temporaryRoot}
  );
}

async function rejects(name, mutation, expectedCode) {
  const candidate = structuredClone(authority);
  mutation(candidate);
  try {
    await projects(
      candidate,
      join(temporaryRoot, "negative", name),
      "--write"
    );
    throw new Error(`CONTROL_ACCEPTED: ${name}`);
  } catch (error) {
    assert(
      !error.message.startsWith("CONTROL_ACCEPTED"),
      error.message
    );
    const evidence = `${error.stderr ?? ""}\n${error.stdout ?? ""}`;
    assert(
      evidence.includes(expectedCode),
      `CONTROL_WRONG_CODE: ${name}:${evidence}`
    );
    controls.push({name, expectedCode});
  }
}

try {
  const baselineRoot = join(temporaryRoot, "baseline");
  await projects(authority, baselineRoot, "--write");
  await projects(authority, baselineRoot, "--check");

  await rejects(
    "unknown-contract-property",
    candidate => {
      candidate.unadmitted = true;
    },
    "CAPABILITY_CONTRACT_SCHEMA_RED"
  );
  await rejects(
    "artifact-authority-hash-drift",
    candidate => {
      candidate.implementationProjection.artifacts[0].byteSha256 =
        `sha256:${"0".repeat(64)}`;
    },
    "CAPABILITY_ARTIFACT_AUTHORITY_HASH_MISMATCH"
  );
  await rejects(
    "artifact-path-escape",
    candidate => {
      candidate.implementationProjection.artifacts[0].path =
        "../escaped.json";
    },
    "CAPABILITY_CONTRACT_SCHEMA_RED"
  );
  await rejects(
    "scenario-binding-substitution",
    candidate => {
      const artifact =
        candidate.implementationProjection.artifacts.find(
          item => item.role === "scenario-responsibility"
        );
      artifact.scenarioBinding.responsibilityId =
        "unbound-responsibility";
    },
    "CAPABILITY_SCENARIO_ARTIFACT_BINDING_UNKNOWN"
  );
  await rejects(
    "forbidden-external-import",
    candidate => {
      const artifact =
        candidate.implementationProjection.artifacts.find(item =>
          item.projection.tokens?.some(token =>
            token.text.includes("node:crypto")
          )
        );
      const token = artifact.projection.tokens.find(item =>
        item.text.includes("node:crypto")
      );
      token.text = token.text.replace("node:crypto", "left-pad");
      artifact.byteSha256 = sha256(
        Buffer.from(
          artifact.projection.tokens
            .map(item => item.text)
            .join(""),
          "utf8"
        )
      );
    },
    "CAPABILITY_EXTERNAL_IMPORT_FORBIDDEN"
  );
  await rejects(
    "source-token-kind-substitution",
    candidate => {
      const artifact =
        candidate.implementationProjection.artifacts.find(
          item =>
            item.projection.projectionType ===
            "lossless-source-tokens.v1"
        );
      artifact.projection.tokens[0].kind = "Identifier";
    },
    "CAPABILITY_SOURCE_TOKENS_NOT_CANONICAL"
  );

  const undeclaredPath = join(
    baselineRoot,
    authority.implementationProjection.capabilityRoot,
    "unadmitted.txt"
  );
  await writeFile(undeclaredPath, "unadmitted\n");
  try {
    await projects(authority, baselineRoot, "--check");
    throw new Error(
      "CONTROL_ACCEPTED: undeclared-artifact-present"
    );
  } catch (error) {
    assert(
      !error.message.startsWith("CONTROL_ACCEPTED"),
      error.message
    );
    const evidence = `${error.stderr ?? ""}\n${error.stdout ?? ""}`;
    assert(
      evidence.includes("CAPABILITY_UNDECLARED_ARTIFACT_PRESENT"),
      `CONTROL_WRONG_CODE: undeclared-artifact-present:${evidence}`
    );
    controls.push({
      name: "undeclared-artifact-present",
      expectedCode: "CAPABILITY_UNDECLARED_ARTIFACT_PRESENT"
    });
  }

  const genericity = structuredClone(authority);
  const genericFeatureId = "projector-genericity-control";
  genericity.contract.contractId = genericFeatureId;
  genericity.contract.title = "Projector genericity control";
  genericity.canonicalFeatureBody.feature.featureId =
    genericFeatureId;
  genericity.canonicalFeatureBody.feature.title =
    "Projector genericity control";
  genericity.implementationProjection.capabilityRoot =
    `capabilities/${genericFeatureId}`;
  const genericityRoot = join(temporaryRoot, "genericity");
  await projects(genericity, genericityRoot, "--write");
  await projects(genericity, genericityRoot, "--check");

  console.log(JSON.stringify({
    disposition: "GREEN",
    baselineProjection: "GREEN",
    featureNeutralProjection: "GREEN",
    negativeControls: {
      passed: controls.length,
      total: controls.length,
      controls
    }
  }));
} finally {
  const expectedPrefix = join(
    tmpdir(),
    "canonical-capability-projector-"
  );
  assert(
    temporaryRoot.startsWith(expectedPrefix),
    "CAPABILITY_VERIFICATION_TEMP_ROOT_UNSAFE"
  );
  await rm(temporaryRoot, {recursive: true, force: true});
}
