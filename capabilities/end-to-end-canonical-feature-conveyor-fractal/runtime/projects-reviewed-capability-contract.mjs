import { execFile } from "node:child_process";
import { createHash, randomBytes } from "node:crypto";
import {
  mkdir,
  readdir,
  readFile,
  rmdir,
  unlink,
  writeFile
} from "node:fs/promises";
import { dirname, relative, resolve, sep } from "node:path";
import process from "node:process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

import Ajv2020 from "../projection/ajv-2020.bundle.mjs";

const executes = promisify(execFile);
const capabilityDirectory = resolve(import.meta.dirname, "..");
const requestSchemaPath = resolve(
  capabilityDirectory,
  "schema/canonical-feature-conveyor-contract.schema.json"
);
const producedAuthoritySchemaPath = resolve(
  capabilityDirectory,
  "schema/model-produced-capability-authority.schema.json"
);

function sha256(bytes) {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function asserts(condition, code) {
  if (!condition) throw new Error(code);
}

function canonicalizes(value) {
  if (Array.isArray(value)) {
    return `[${value.map(canonicalizes).join(",")}]`;
  }
  if (isRecord(value)) {
    return `{${Object.keys(value)
      .sort()
      .map(key => `${JSON.stringify(key)}:${canonicalizes(value[key])}`)
      .join(",")}}`;
  }
  const encoded = JSON.stringify(value);
  if (encoded === undefined) {
    throw new Error("CAPABILITY_VALUE_NOT_CANONICALIZABLE");
  }
  return encoded;
}

function parsesCommand(command) {
  const tokens = [];
  let token = "";
  let quote = null;
  for (let index = 0; index < command.length; index += 1) {
    const character = command[index];
    if (quote !== null) {
      if (character === quote) {
        quote = null;
      } else if (character === "\\" && index + 1 < command.length) {
        index += 1;
        token += command[index];
      } else {
        token += character;
      }
      continue;
    }
    if (character === '"' || character === "'") {
      quote = character;
      continue;
    }
    if (/\s/.test(character)) {
      if (token !== "") {
        tokens.push(token);
        token = "";
      }
      continue;
    }
    token += character;
  }
  asserts(quote === null, "CAPABILITY_ACCEPTANCE_COMMAND_QUOTE_UNCLOSED");
  if (token !== "") tokens.push(token);
  asserts(tokens.length > 0, "CAPABILITY_ACCEPTANCE_COMMAND_EMPTY");
  return tokens;
}

function stripsJsonFence(value) {
  const trimmed = value.trim();
  const match = /^```(?:json)?\s*([\s\S]*?)\s*```$/i.exec(trimmed);
  return match === null ? trimmed : match[1];
}

function normalizedArtifactPath(path) {
  return path.replaceAll("/", sep);
}

function isDescendant(root, candidate) {
  return candidate.startsWith(`${root}${sep}`);
}

function importsFrom(source) {
  const specifiers = [];
  const patterns = [
    /\bfrom\s+["']([^"']+)["']/g,
    /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g,
    /\bimport\s+["']([^"']+)["']/g
  ];
  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) {
      specifiers.push(match[1]);
    }
  }
  return specifiers;
}

function canonicalImplementationArtifacts(request) {
  const featureId = request.canonicalFeatureBody.feature.featureId;
  const scenarioBodies = request.canonicalFeatureBody.scenarios.map(
    scenario => {
      const responsibilityId =
        scenario.responsibility.responsibilityId;
      return {
        path:
          `scenarios/${scenario.scenarioId}/` +
          `${responsibilityId}/${responsibilityId}.mjs`,
        mediaType: "text/javascript"
      };
    }
  );
  return [
    {
      path: "package.json",
      mediaType: "application/json"
    },
    ...scenarioBodies,
    {
      path: `composition/executes-${featureId}.mjs`,
      mediaType: "text/javascript"
    },
    {
      path: `runtime/invokes-${featureId}.mjs`,
      mediaType: "text/javascript"
    }
  ];
}

function assertsProducedAuthorityMatchesRequest(
  request,
  contractSha256,
  challengeNonce,
  produced
) {
  const featureId = request.canonicalFeatureBody.feature.featureId;
  asserts(
    request.contract.contractId === featureId,
    "CAPABILITY_REQUEST_IDENTITY_DIVERGES"
  );
  asserts(
    produced.featureId === featureId,
    "CAPABILITY_PRODUCED_FEATURE_ID_DIVERGES"
  );
  asserts(
    produced.contractSha256 === contractSha256,
    "CAPABILITY_PRODUCED_CONTRACT_HASH_DIVERGES"
  );
  asserts(
    produced.challengeNonce === challengeNonce,
    "CAPABILITY_PRODUCED_CHALLENGE_DIVERGES"
  );
  const scenarios = request.canonicalFeatureBody.scenarios;
  asserts(
    produced.semanticPlan.length === scenarios.length &&
      produced.semanticPlan.every((step, index) => {
        const scenario = scenarios[index];
        return (
          step.sequence === index + 1 &&
          step.scenarioId === scenario.scenarioId &&
          step.responsibilityId ===
            scenario.responsibility.responsibilityId
        );
      }),
    "CAPABILITY_PRODUCED_SEMANTIC_PLAN_DIVERGES"
  );
  const artifactPaths = produced.artifacts.map(artifact => artifact.path);
  const requiredArtifacts = canonicalImplementationArtifacts(request);
  const requiredByPath = new Map(
    requiredArtifacts.map(artifact => [artifact.path, artifact])
  );
  asserts(
    produced.artifacts.length === requiredArtifacts.length &&
      produced.artifacts.every(artifact => {
        const required = requiredByPath.get(artifact.path);
        return (
          required !== undefined &&
          artifact.mediaType === required.mediaType
        );
      }),
    "CAPABILITY_CANONICAL_FILE_BODY_LAYOUT_DIVERGES"
  );
  asserts(
    produced.runtime.entrypoint ===
      `runtime/invokes-${featureId}.mjs`,
    "CAPABILITY_CANONICAL_RUNTIME_ENTRYPOINT_DIVERGES"
  );
  const syntheticCapabilityRoot = resolve(
    "canonical-capability-root-sentinel"
  );
  asserts(
    new Set(artifactPaths).size === artifactPaths.length,
    "CAPABILITY_PRODUCED_ARTIFACT_PATH_DUPLICATED"
  );
  asserts(
    new Set(produced.artifacts.map(artifact => artifact.artifactId)).size ===
      produced.artifacts.length,
    "CAPABILITY_PRODUCED_ARTIFACT_ID_DUPLICATED"
  );
  asserts(
    produced.artifacts.some(
      artifact => artifact.path === produced.runtime.entrypoint
    ),
    "CAPABILITY_PRODUCED_ENTRYPOINT_MISSING"
  );
  for (const artifact of produced.artifacts) {
    asserts(
      !artifact.path.includes("\\") &&
        !artifact.path.startsWith("/") &&
        !/^[A-Za-z]:/.test(artifact.path) &&
        !artifact.path.split("/").includes(".."),
      `CAPABILITY_PRODUCED_ARTIFACT_PATH_REJECTED: ${artifact.path}`
    );
    if (artifact.mediaType !== "text/javascript") continue;
    asserts(
      artifact.source.includes("// @generated") &&
        artifact.source.includes(`// feature-id: ${featureId}`),
      `CAPABILITY_PRODUCED_SOURCE_LINEAGE_MISSING: ${artifact.path}`
    );
    for (const moduleSpecifier of importsFrom(artifact.source)) {
      asserts(
        moduleSpecifier.startsWith("node:") ||
          moduleSpecifier.startsWith("."),
        `CAPABILITY_PRODUCED_EXTERNAL_IMPORT_REJECTED: ${artifact.path}:${moduleSpecifier}`
      );
      if (!moduleSpecifier.startsWith(".")) continue;
      const importedPath = resolve(
        dirname(resolve(syntheticCapabilityRoot, artifact.path)),
        normalizedArtifactPath(moduleSpecifier)
      );
      asserts(
        isDescendant(syntheticCapabilityRoot, importedPath),
        `CAPABILITY_PRODUCED_IMPORT_ESCAPES_ROOT: ${artifact.path}:${moduleSpecifier}`
      );
    }
  }
}

function authoringInstruction(
  request,
  acceptance,
  producedAuthoritySchema,
  contractSha256,
  challengeNonce,
  repair
) {
  return [
    "You are the authoring stage of a governed canonical feature conveyor.",
    "Return one JSON object only. Do not use Markdown fences.",
    "The object must conform exactly to the supplied output JSON Schema.",
    `featureId must be ${request.canonicalFeatureBody.feature.featureId}.`,
    `contractSha256 must be ${contractSha256}.`,
    `challengeNonce must be ${challengeNonce}.`,
    "Target Node.js 20 ESM and use only node: built-in modules.",
    "Every JavaScript artifact must begin with // @generated and",
    `// feature-id: ${request.canonicalFeatureBody.feature.featureId}.`,
    "Artifact paths are relative to the feature capability root.",
    "Do not import from outside that capability root.",
    "Produce a real executable CLI, not a fixture-specific answer.",
    "Implement every scenario and stable failure behavior in the request.",
    "The semanticPlan must contain exactly one ordered entry per scenario.",
    "The runtime entrypoint must be one of the emitted artifacts.",
    "Emit exactly the canonical implementation artifact paths listed below.",
    "Each scenario implementation belongs to its scenario/responsibility root.",
    "Do not emit bin, lib, src, helper, test, or alternate topology artifacts.",
    "Acceptance is evidence, not permission to hard-code its rows.",
    ...(repair === undefined
      ? []
      : [
          "The prior candidate was RED. Correct the implementation.",
          `Prior RED observation: ${repair}`
        ]),
    "",
    "REVIEWED CAPABILITY REQUEST:",
    JSON.stringify(request),
    "",
    "ACCEPTANCE CONTRACT:",
    JSON.stringify(acceptance),
    "",
    "CANONICAL IMPLEMENTATION ARTIFACT PATHS:",
    JSON.stringify(canonicalImplementationArtifacts(request)),
    "",
    "OUTPUT JSON SCHEMA:",
    JSON.stringify(producedAuthoritySchema)
  ].join("\n");
}

async function invokesAuthoringModel({
  apiKey,
  model,
  request,
  acceptance,
  producedAuthoritySchema,
  contractSha256,
  challengeNonce,
  repair
}) {
  const providerRequest = {
    contents: [
      {
        role: "user",
        parts: [
          {
            text: authoringInstruction(
              request,
              acceptance,
              producedAuthoritySchema,
              contractSha256,
              challengeNonce,
              repair
            )
          }
        ]
      }
    ],
    generationConfig: {
      responseMimeType: "application/json",
      temperature: 0,
      maxOutputTokens: 32768
    }
  };
  const requestBytes = Buffer.from(JSON.stringify(providerRequest), "utf8");
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": apiKey
      },
      body: requestBytes
    }
  );
  const responseBytes = Buffer.from(await response.arrayBuffer());
  asserts(
    response.ok,
    `CAPABILITY_AUTHORING_PROVIDER_RED: ${response.status}:${responseBytes.toString("utf8")}`
  );
  const envelope = JSON.parse(responseBytes.toString("utf8"));
  const text = envelope.candidates?.[0]?.content?.parts
    ?.map(part => part.text ?? "")
    .join("");
  asserts(
    typeof text === "string" && text.trim() !== "",
    "CAPABILITY_AUTHORING_PROVIDER_TEXT_MISSING"
  );
  return {
    requestBytes,
    responseBytes,
    providerRequestId: response.headers.get("x-request-id"),
    producedText: stripsJsonFence(text)
  };
}

async function readsJson(path, code) {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch (error) {
    throw new Error(`${code}: ${error.message}`);
  }
}

async function walksFiles(root) {
  const files = [];
  async function visits(directory) {
    let entries;
    try {
      entries = await readdir(directory, {
        withFileTypes: true
      });
    } catch (error) {
      if (error.code === "ENOENT") return;
      throw error;
    }
    for (const entry of entries) {
      const entryPath = resolve(directory, entry.name);
      if (entry.isDirectory()) {
        await visits(entryPath);
      } else if (entry.isFile()) {
        files.push(entryPath);
      }
    }
  }
  await visits(root);
  return files;
}

async function removesEmptyDirectories(root) {
  async function visits(directory) {
    let entries;
    try {
      entries = await readdir(directory, {
        withFileTypes: true
      });
    } catch (error) {
      if (error.code === "ENOENT") return;
      throw error;
    }
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      await visits(resolve(directory, entry.name));
    }
    if (directory === root) return;
    try {
      await rmdir(directory);
    } catch (error) {
      if (
        error.code !== "ENOTEMPTY" &&
        error.code !== "ENOENT"
      ) {
        throw error;
      }
    }
  }
  await visits(root);
}

async function readsPriorManifest(capabilityRoot, featureId) {
  const manifestPath = resolve(
    capabilityRoot,
    "authority/projected-artifact-manifest.json"
  );
  try {
    const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
    asserts(
      manifest.manifestType ===
        "projected-capability-artifact-manifest.v1" &&
        manifest.featureId === featureId &&
        Array.isArray(manifest.artifacts),
      "CAPABILITY_PRIOR_MANIFEST_INVALID"
    );
    return manifest;
  } catch (error) {
    if (error.code === "ENOENT") return undefined;
    throw error;
  }
}

async function createsValidators() {
  const [requestSchema, producedAuthoritySchema] = await Promise.all([
    readsJson(requestSchemaPath, "CAPABILITY_REQUEST_SCHEMA_INVALID"),
    readsJson(
      producedAuthoritySchemaPath,
      "CAPABILITY_PRODUCED_AUTHORITY_SCHEMA_INVALID"
    )
  ]);
  const ajv = new Ajv2020({
    allErrors: true,
    strict: false
  });
  return {
    validatesRequest: ajv.compile(requestSchema),
    validatesProducedAuthority: ajv.compile(producedAuthoritySchema),
    producedAuthoritySchema
  };
}

function validationError(code, validator) {
  return new Error(`${code}: ${JSON.stringify(validator.errors ?? [])}`);
}

async function materializesProducedAuthority({
  repositoryRoot,
  request,
  requestBytes,
  producedAuthority
}) {
  const featureId = request.canonicalFeatureBody.feature.featureId;
  const capabilitiesRoot = resolve(repositoryRoot, "capabilities");
  const capabilityRoot = resolve(capabilitiesRoot, featureId);
  asserts(
    isDescendant(capabilitiesRoot, capabilityRoot),
    "CAPABILITY_MATERIALIZATION_ROOT_ESCAPES"
  );
  const priorManifest = await readsPriorManifest(
    capabilityRoot,
    featureId
  );
  const existingFiles = await walksFiles(capabilityRoot);
  const authorityPaths = [
    "authority/reviewed-capability-request.json",
    "authority/model-produced-capability-authority.json",
    "authority/projected-artifact-manifest.json"
  ];
  const priorArtifactPaths = new Set(
    priorManifest?.artifacts.map(artifact => artifact.path) ?? []
  );
  const priorGovernedPaths = new Set([
    ...authorityPaths,
    ...priorArtifactPaths
  ]);
  for (const existingFile of existingFiles) {
    const existingRelativePath = relative(
      capabilityRoot,
      existingFile
    ).replaceAll("\\", "/");
    asserts(
      priorManifest !== undefined &&
        priorGovernedPaths.has(existingRelativePath),
      `CAPABILITY_EXISTING_UNGOVERNED_FILE_REJECTED: ${existingRelativePath}`
    );
  }
  const nextArtifactPaths = new Set(
    producedAuthority.artifacts.map(artifact => artifact.path)
  );
  for (const stalePath of priorArtifactPaths) {
    if (nextArtifactPaths.has(stalePath)) continue;
    const staleArtifactPath = resolve(
      capabilityRoot,
      normalizedArtifactPath(stalePath)
    );
    asserts(
      isDescendant(capabilityRoot, staleArtifactPath),
      `CAPABILITY_STALE_ARTIFACT_ESCAPES_ROOT: ${stalePath}`
    );
    try {
      await unlink(staleArtifactPath);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  await mkdir(resolve(capabilityRoot, "authority"), {
    recursive: true
  });
  const materialized = [];
  for (const artifact of producedAuthority.artifacts) {
    const artifactPath = resolve(
      capabilityRoot,
      normalizedArtifactPath(artifact.path)
    );
    asserts(
      isDescendant(capabilityRoot, artifactPath),
      `CAPABILITY_ARTIFACT_ESCAPES_ROOT: ${artifact.path}`
    );
    await mkdir(dirname(artifactPath), { recursive: true });
    await writeFile(artifactPath, artifact.source, "utf8");
    const observedBytes = await readFile(artifactPath);
    asserts(
      observedBytes.toString("utf8") === artifact.source,
      `CAPABILITY_MATERIALIZED_BYTES_DIVERGE: ${artifact.path}`
    );
    materialized.push({
      artifactId: artifact.artifactId,
      path: artifact.path,
      sha256: sha256(observedBytes),
      bytes: observedBytes.length
    });
  }
  const requestPath = resolve(
    capabilityRoot,
    "authority/reviewed-capability-request.json"
  );
  const producedAuthorityPath = resolve(
    capabilityRoot,
    "authority/model-produced-capability-authority.json"
  );
  const manifestPath = resolve(
    capabilityRoot,
    "authority/projected-artifact-manifest.json"
  );
  await Promise.all([
    writeFile(requestPath, requestBytes),
    writeFile(
      producedAuthorityPath,
      `${JSON.stringify(producedAuthority, null, 2)}\n`,
      "utf8"
    ),
    writeFile(
      manifestPath,
      `${JSON.stringify(
        {
          manifestType: "projected-capability-artifact-manifest.v1",
          featureId,
          capabilityRoot: `capabilities/${featureId}`,
          artifacts: materialized
        },
        null,
        2
      )}\n`,
      "utf8"
    )
  ]);
  await removesEmptyDirectories(capabilityRoot);
  return {
    featureId,
    capabilityRoot,
    capabilityRootRelative: `capabilities/${featureId}`,
    requestPath,
    producedAuthorityPath,
    manifestPath,
    artifacts: materialized
  };
}

async function assertsJavaScriptSyntax(materialization, producedAuthority) {
  for (const artifact of producedAuthority.artifacts) {
    if (
      artifact.mediaType !== "text/javascript" ||
      !(
        artifact.path.endsWith(".mjs") ||
        artifact.path.endsWith(".js")
      )
    ) {
      continue;
    }
    await executes(
      process.execPath,
      [
        "--check",
        resolve(
          materialization.capabilityRoot,
          normalizedArtifactPath(artifact.path)
        )
      ],
      {
        cwd: materialization.capabilityRoot,
        windowsHide: true
      }
    );
  }
}

async function assertsMaterializationUnchanged(materialization) {
  for (const artifact of materialization.artifacts) {
    const artifactPath = resolve(
      materialization.capabilityRoot,
      normalizedArtifactPath(artifact.path)
    );
    const observedBytes = await readFile(artifactPath);
    asserts(
      sha256(observedBytes) === artifact.sha256,
      `CAPABILITY_ARTIFACT_CHANGED_DURING_ACCEPTANCE: ${artifact.path}`
    );
  }
}

async function executesAcceptance({
  acceptance,
  acceptancePath,
  materialization,
  producedAuthority
}) {
  asserts(
    isRecord(acceptance) &&
      typeof acceptance.command === "string" &&
      Number.isInteger(acceptance.expectedExitCode) &&
      "expectedStdout" in acceptance,
    "CAPABILITY_ACCEPTANCE_CONTRACT_INVALID"
  );
  const [commandName, ...arguments_] = parsesCommand(acceptance.command);
  asserts(
    commandName === producedAuthority.runtime.commandName,
    "CAPABILITY_ACCEPTANCE_COMMAND_NAME_DIVERGES"
  );
  const entrypoint = resolve(
    materialization.capabilityRoot,
    normalizedArtifactPath(producedAuthority.runtime.entrypoint)
  );
  let observation;
  try {
    const result = await executes(
      process.execPath,
      [entrypoint, ...arguments_],
      {
        cwd: dirname(acceptancePath),
        timeout: 30000,
        windowsHide: true,
        maxBuffer: 10 * 1024 * 1024
      }
    );
    observation = {
      exitCode: 0,
      stdout: result.stdout,
      stderr: result.stderr
    };
  } catch (error) {
    observation = {
      exitCode:
        typeof error.code === "number"
          ? error.code
          : typeof error.status === "number"
            ? error.status
            : 1,
      stdout: error.stdout ?? "",
      stderr: error.stderr ?? error.message
    };
  }
  asserts(
    observation.exitCode === acceptance.expectedExitCode,
    `CAPABILITY_ACCEPTANCE_EXIT_CODE_DIVERGES: ${JSON.stringify(observation)}`
  );
  let stdout;
  try {
    stdout = JSON.parse(observation.stdout);
  } catch {
    throw new Error(
      `CAPABILITY_ACCEPTANCE_STDOUT_NOT_JSON: ${JSON.stringify(observation)}`
    );
  }
  asserts(
    canonicalizes(stdout) === canonicalizes(acceptance.expectedStdout),
    `CAPABILITY_ACCEPTANCE_STDOUT_DIVERGES: ${JSON.stringify(observation)}`
  );
  return {
    disposition: "GREEN",
    command: acceptance.command,
    exitCode: observation.exitCode,
    stdoutSha256: sha256(Buffer.from(observation.stdout, "utf8")),
    stderrSha256: sha256(Buffer.from(observation.stderr, "utf8"))
  };
}

function conciseFailure(error) {
  const message = error instanceof Error ? error.message : String(error);
  return message.length <= 6000 ? message : message.slice(0, 6000);
}

export async function projectsReviewedCapabilityContract(options) {
  const repositoryRoot = resolve(options.repositoryRoot);
  const contractPath = resolve(options.contractPath);
  const acceptancePath = resolve(options.acceptancePath);
  const evidenceRoot = resolve(options.evidenceRoot);
  asserts(
    !isDescendant(repositoryRoot, evidenceRoot) &&
      evidenceRoot !== repositoryRoot,
    "CAPABILITY_EVIDENCE_ROOT_INSIDE_REPOSITORY"
  );
  const [requestBytes, request, acceptance, validators] =
    await Promise.all([
      readFile(contractPath),
      readsJson(contractPath, "CAPABILITY_REQUEST_JSON_INVALID"),
      readsJson(
        acceptancePath,
        "CAPABILITY_ACCEPTANCE_JSON_INVALID"
      ),
      createsValidators()
    ]);
  if (!validators.validatesRequest(request)) {
    throw validationError(
      "CAPABILITY_REQUEST_SCHEMA_RED",
      validators.validatesRequest
    );
  }
  const contractSha256 = sha256(requestBytes);
  const apiKey = options.apiKey;
  asserts(
    typeof apiKey === "string" && apiKey !== "",
    "CAPABILITY_AUTHORING_API_KEY_MISSING"
  );
  const model = options.model ?? "gemini-flash-latest";
  const maximumAttempts = options.maximumAttempts ?? 3;
  asserts(
    Number.isInteger(maximumAttempts) &&
      maximumAttempts >= 1 &&
      maximumAttempts <= 3,
    "CAPABILITY_AUTHORING_ATTEMPT_COUNT_INVALID"
  );
  await mkdir(evidenceRoot, { recursive: true });
  const attempts = [];
  let repair;
  for (let attempt = 1; attempt <= maximumAttempts; attempt += 1) {
    const challengeNonce = randomBytes(32).toString("base64url");
    try {
      const provider = await invokesAuthoringModel({
        apiKey,
        model,
        request,
        acceptance,
        producedAuthoritySchema:
          validators.producedAuthoritySchema,
        contractSha256,
        challengeNonce,
        repair
      });
      const requestEvidencePath = resolve(
        evidenceRoot,
        `attempt-${attempt}-provider-request.json`
      );
      const responseEvidencePath = resolve(
        evidenceRoot,
        `attempt-${attempt}-provider-response.json`
      );
      await Promise.all([
        writeFile(requestEvidencePath, provider.requestBytes),
        writeFile(responseEvidencePath, provider.responseBytes)
      ]);
      let producedAuthority;
      try {
        producedAuthority = JSON.parse(provider.producedText);
      } catch (error) {
        throw new Error(
          `CAPABILITY_PRODUCED_AUTHORITY_JSON_INVALID: ${error.message}`
        );
      }
      if (
        !validators.validatesProducedAuthority(producedAuthority)
      ) {
        throw validationError(
          "CAPABILITY_PRODUCED_AUTHORITY_SCHEMA_RED",
          validators.validatesProducedAuthority
        );
      }
      assertsProducedAuthorityMatchesRequest(
        request,
        contractSha256,
        challengeNonce,
        producedAuthority
      );
      const materialization = await materializesProducedAuthority({
        repositoryRoot,
        request,
        requestBytes,
        producedAuthority
      });
      asserts(
        materialization.artifacts.length > 0,
        "CAPABILITY_ZERO_ARTIFACT_PROJECTION_REJECTED"
      );
      await assertsJavaScriptSyntax(
        materialization,
        producedAuthority
      );
      const acceptanceObservation = await executesAcceptance({
        acceptance,
        acceptancePath,
        materialization,
        producedAuthority
      });
      await assertsMaterializationUnchanged(materialization);
      attempts.push({
        attempt,
        disposition: "GREEN",
        challengeNonce,
        requestBytesSha256: sha256(provider.requestBytes),
        responseBytesSha256: sha256(provider.responseBytes),
        providerRequestId: provider.providerRequestId
      });
      const report = {
        reportType:
          "reviewed-capability-contract-projection-report.v1",
        disposition: "PROJECTION_CONFORMS",
        observedAt: new Date().toISOString(),
        featureId: materialization.featureId,
        contractPath,
        contractSha256,
        contractConsumed: true,
        acceptancePath,
        model,
        attempts,
        materialization: {
          capabilityRoot: materialization.capabilityRootRelative,
          artifactCount: materialization.artifacts.length,
          artifacts: materialization.artifacts,
          authorityPath: relative(
            repositoryRoot,
            materialization.producedAuthorityPath
          ).replaceAll("\\", "/"),
          manifestPath: relative(
            repositoryRoot,
            materialization.manifestPath
          ).replaceAll("\\", "/")
        },
        acceptance: acceptanceObservation,
        credentialBytesPersisted: false
      };
      const reportPath = resolve(
        evidenceRoot,
        "capability-projection-report.json"
      );
      await writeFile(
        reportPath,
        `${JSON.stringify(report, null, 2)}\n`,
        "utf8"
      );
      return {
        ...report,
        reportPath
      };
    } catch (error) {
      repair = conciseFailure(error);
      attempts.push({
        attempt,
        disposition: "RED",
        challengeNonce,
        code: repair
      });
      if (attempt === maximumAttempts) {
        const report = {
          reportType:
            "reviewed-capability-contract-projection-report.v1",
          disposition: "PROJECTION_RED",
          observedAt: new Date().toISOString(),
          contractPath,
          contractSha256,
          contractConsumed: true,
          acceptancePath,
          model,
          attempts,
          credentialBytesPersisted: false
        };
        await writeFile(
          resolve(
            evidenceRoot,
            "capability-projection-report.json"
          ),
          `${JSON.stringify(report, null, 2)}\n`,
          "utf8"
        );
        throw new Error(repair);
      }
    }
  }
  throw new Error("CAPABILITY_AUTHORING_ATTEMPTS_EXHAUSTED");
}

function argument(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

async function main() {
  const command = process.argv[2];
  asserts(command === "project", "CAPABILITY_COMMAND_MUST_BE_PROJECT");
  const contractPath = argument("--contract");
  const acceptancePath = argument("--acceptance");
  const repositoryRoot = argument("--repository-root");
  const evidenceRoot = argument("--evidence-root");
  asserts(contractPath !== undefined, "CAPABILITY_CONTRACT_PATH_REQUIRED");
  asserts(
    acceptancePath !== undefined,
    "CAPABILITY_ACCEPTANCE_PATH_REQUIRED"
  );
  asserts(
    repositoryRoot !== undefined,
    "CAPABILITY_REPOSITORY_ROOT_REQUIRED"
  );
  asserts(
    evidenceRoot !== undefined,
    "CAPABILITY_EVIDENCE_ROOT_REQUIRED"
  );
  const result = await projectsReviewedCapabilityContract({
    contractPath,
    acceptancePath,
    repositoryRoot,
    evidenceRoot,
    model: argument("--model"),
    maximumAttempts:
      argument("--maximum-attempts") === undefined
        ? undefined
        : Number(argument("--maximum-attempts")),
    apiKey: process.env["LOC_GEMINI_API_KEY"]
  });
  process.stdout.write(
    `${JSON.stringify({
      disposition: result.disposition,
      featureId: result.featureId,
      contractConsumed: result.contractConsumed,
      capabilityRoot: result.materialization.capabilityRoot,
      artifactCount: result.materialization.artifactCount,
      acceptance: result.acceptance.disposition,
      reportPath: result.reportPath
    })}\n`
  );
}

const invokedPath =
  process.argv[1] === undefined
    ? undefined
    : resolve(process.argv[1]);
if (
  invokedPath !== undefined &&
  invokedPath === fileURLToPath(import.meta.url)
) {
  main().catch(error => {
    process.stderr.write(
      `canonical-feature-conveyor: ${conciseFailure(error)}\n`
    );
    process.exitCode = 1;
  });
}
