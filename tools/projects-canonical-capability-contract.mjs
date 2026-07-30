import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import {
  dirname,
  isAbsolute,
  posix,
  relative,
  resolve,
  sep
} from "node:path";

import Ajv2020 from "ajv/dist/2020.js";
import {
  LanguageVariant,
  SyntaxKind,
  formatSyntaxKind
} from "typescript/unstable/ast";
import { createScanner } from "typescript/unstable/ast/scanner";

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

function canonicalJsonValue(value) {
  if (Array.isArray(value)) {
    return value.map(canonicalJsonValue);
  }
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map(key => [key, canonicalJsonValue(value[key])])
    );
  }
  return value;
}

function canonicalSourceTokens(source) {
  const scanner = createScanner(
    false,
    LanguageVariant.Standard,
    source
  );
  const tokens = [];
  for (
    let token = scanner.scan();
    token !== SyntaxKind.EndOfFile;
    token = scanner.scan()
  ) {
    tokens.push({
      kind: formatSyntaxKind(token),
      text: source.slice(
        scanner.getTokenStart(),
        scanner.getTokenEnd()
      )
    });
  }
  return tokens;
}

function nodeEncoding(serialization) {
  assert(
    serialization.encoding === "UTF-8",
    "CAPABILITY_SERIALIZATION_ENCODING_UNSUPPORTED"
  );
  return "utf8";
}

function lineEnding(serialization) {
  assert(
    serialization.lineEnding === "LF",
    "CAPABILITY_SERIALIZATION_LINE_ENDING_UNSUPPORTED"
  );
  return "\n";
}

function artifactBytes(artifact) {
  const projection = artifact.projection;
  if (projection.projectionType === "canonical-json-value.v1") {
    const serialization = projection.serialization;
    assert(
      serialization.keyOrder === "lexicographic",
      "CAPABILITY_JSON_KEY_ORDER_UNSUPPORTED"
    );
    return Buffer.from(
      `${JSON.stringify(
        canonicalJsonValue(projection.value),
        null,
        serialization.indentSpaces
      )}${
        serialization.terminalNewline
          ? lineEnding(serialization)
          : ""
      }`,
      nodeEncoding(serialization)
    );
  }
  if (projection.projectionType === "utf8-text.v1") {
    const serialization = projection.serialization;
    assert(
      !projection.text.includes("\r") &&
        !projection.text.endsWith("\n"),
      `CAPABILITY_TEXT_AUTHORITY_NOT_NORMALIZED: ${artifact.artifactId}`
    );
    const text = serialization.terminalNewline
      ? `${projection.text}${lineEnding(serialization)}`
      : projection.text;
    return Buffer.from(text, nodeEncoding(serialization));
  }
  if (projection.projectionType === "lossless-source-tokens.v1") {
    const serialization = projection.serialization;
    assert(
      projection.tokens.every(
        token =>
          /^[A-Za-z][A-Za-z0-9]*$/.test(token.kind) &&
          token.text.length > 0
      ),
      `CAPABILITY_SOURCE_TOKEN_INVALID: ${artifact.artifactId}`
    );
    const source = projection.tokens
      .map(token => token.text)
      .join("");
    assert(
      serialization.assembly === "token-sequence" &&
        !source.includes("\r"),
      `CAPABILITY_SOURCE_SERIALIZATION_UNSUPPORTED: ${artifact.artifactId}`
    );
    lineEnding(serialization);
    assert(
      JSON.stringify(canonicalSourceTokens(source)) ===
        JSON.stringify(projection.tokens),
      `CAPABILITY_SOURCE_TOKENS_NOT_CANONICAL: ${artifact.artifactId}`
    );
    return Buffer.from(source, nodeEncoding(serialization));
  }
  throw new Error(
    `CAPABILITY_ARTIFACT_PROJECTION_TYPE_UNSUPPORTED: ${artifact.artifactId}`
  );
}

async function filesBelow(root) {
  const files = [];
  async function visit(directory, prefix) {
    let entries;
    try {
      entries = await readdir(directory, {withFileTypes: true});
    } catch (error) {
      if (error.code === "ENOENT") return;
      throw error;
    }
    for (const entry of entries) {
      const artifactPath = prefix
        ? `${prefix}/${entry.name}`
        : entry.name;
      const absolutePath = resolve(directory, entry.name);
      if (entry.isDirectory()) {
        await visit(absolutePath, artifactPath);
      } else if (entry.isFile()) {
        files.push(artifactPath);
      } else {
        throw new Error(
          `CAPABILITY_NON_FILE_ARTIFACT_FORBIDDEN: ${artifactPath}`
        );
      }
    }
  }
  await visit(root, "");
  return files.sort();
}

function sourceImportSpecifiers(tokens) {
  const specifiers = [];
  const significant = tokens.filter(
    token => !token.kind.endsWith("Trivia")
  );
  const stringValue = token => {
    assert(
      token?.kind === "StringLiteral" &&
        /^(['"])[^\\]*\1$/.test(token.text),
      "CAPABILITY_IMPORT_SPECIFIER_NOT_CANONICAL"
    );
    return token.text.slice(1, -1);
  };
  const findsBeforeSemicolon = (start, kind) => {
    for (
      let candidateIndex = start;
      candidateIndex < significant.length;
      candidateIndex += 1
    ) {
      if (significant[candidateIndex].kind === "SemicolonToken") {
        return -1;
      }
      if (significant[candidateIndex].kind === kind) {
        return candidateIndex;
      }
    }
    return -1;
  };
  for (let index = 0; index < significant.length; index += 1) {
    const token = significant[index];
    if (token.kind === "ImportKeyword") {
      const next = significant[index + 1];
      if (next?.kind === "StringLiteral") {
        specifiers.push(stringValue(next));
        continue;
      }
      if (next?.kind === "OpenParenToken") {
        specifiers.push(stringValue(significant[index + 2]));
        continue;
      }
      if (next?.kind === "DotToken") {
        continue;
      }
      const fromIndex = findsBeforeSemicolon(
        index + 1,
        "FromKeyword"
      );
      assert(
        fromIndex !== -1,
        "CAPABILITY_IMPORT_DECLARATION_NOT_CANONICAL"
      );
      specifiers.push(stringValue(significant[fromIndex + 1]));
    } else if (token.kind === "ExportKeyword") {
      const next = significant[index + 1];
      if (
        !["AsteriskToken", "OpenBraceToken", "TypeKeyword"].includes(
          next?.kind
        )
      ) {
        continue;
      }
      const fromIndex = findsBeforeSemicolon(
        index + 1,
        "FromKeyword"
      );
      if (fromIndex !== -1) {
        specifiers.push(stringValue(significant[fromIndex + 1]));
      }
    } else if (
      token.kind === "Identifier" &&
      token.text === "require" &&
      significant[index + 1]?.kind === "OpenParenToken"
    ) {
      specifiers.push(stringValue(significant[index + 2]));
    }
  }
  return specifiers;
}

function verifiesContractSemantics(contract) {
  const body = contract.canonicalFeatureBody;
  const projection = contract.implementationProjection;
  assert(
    contract.contract.contractId === body.feature.featureId,
    "CAPABILITY_CONTRACT_FEATURE_ID_MISMATCH"
  );
  assert(
    contract.contract.title === body.feature.title,
    "CAPABILITY_CONTRACT_FEATURE_TITLE_MISMATCH"
  );
  assert(
    contract.intent.actor === body.feature.userStory.asA,
    "CAPABILITY_INTENT_ACTOR_STORY_MISMATCH"
  );

  const graph = contract.documentationProjection.futureStateGraph;
  const nodeIds = graph.nodes.map(node => node.nodeId);
  assert(
    new Set(nodeIds).size === nodeIds.length,
    "CAPABILITY_DOCUMENT_GRAPH_NODE_DUPLICATED"
  );
  const nodeIdSet = new Set(nodeIds);
  assert(
    graph.edges.every(
      edge =>
        nodeIdSet.has(edge.fromNodeId) &&
        nodeIdSet.has(edge.toNodeId)
    ),
    "CAPABILITY_DOCUMENT_GRAPH_EDGE_UNBOUND"
  );

  const scenarioById = new Map(
    body.scenarios.map(scenario => [scenario.scenarioId, scenario])
  );
  for (const scenario of body.scenarios) {
    assert(
      scenario.responsibility.responsibilityId === scenario.scenarioId,
      `CAPABILITY_RESPONSIBILITY_SCENARIO_MISMATCH: ${scenario.scenarioId}`
    );
    assert(
      scenario.responsibility.semanticOperationId ===
        scenario.responsibility.responsibilityId,
      `CAPABILITY_SEMANTIC_OPERATION_RESPONSIBILITY_MISMATCH: ${scenario.scenarioId}`
    );
    assert(
      scenario.expectation.signalId === scenario.signal.signalId,
      `CAPABILITY_EXPECTATION_SIGNAL_MISMATCH: ${scenario.scenarioId}`
    );
  }

  const scenarioArtifacts = projection.artifacts.filter(
    artifact => artifact.role === "scenario-responsibility"
  );
  for (const artifact of scenarioArtifacts) {
    const binding = artifact.scenarioBinding;
    const scenario = scenarioById.get(binding.scenarioId);
    assert(
      scenario !== undefined &&
        scenario.responsibility.responsibilityId ===
          binding.responsibilityId,
      `CAPABILITY_SCENARIO_ARTIFACT_BINDING_UNKNOWN: ${artifact.artifactId}`
    );
    assert(
      artifact.path.startsWith(
        `scenarios/${binding.scenarioId}/${binding.responsibilityId}/`
      ),
      `CAPABILITY_SCENARIO_ARTIFACT_PATH_MISMATCH: ${artifact.artifactId}`
    );
  }
  for (const scenario of body.scenarios) {
    assert(
      scenarioArtifacts.some(
        artifact =>
          artifact.scenarioBinding.scenarioId === scenario.scenarioId &&
          artifact.scenarioBinding.responsibilityId ===
            scenario.responsibility.responsibilityId
      ),
      `CAPABILITY_SCENARIO_IMPLEMENTATION_MISSING: ${scenario.scenarioId}`
    );
  }
  assert(
    new Set(
      projection.runtimeOutputs.map(output => output.outputId)
    ).size === projection.runtimeOutputs.length,
    "CAPABILITY_RUNTIME_OUTPUT_ID_DUPLICATED"
  );
  assert(
    new Set(
      projection.runtimeOutputs.map(output => output.path)
    ).size === projection.runtimeOutputs.length,
    "CAPABILITY_RUNTIME_OUTPUT_PATH_DUPLICATED"
  );
  for (const output of projection.runtimeOutputs) {
    assert(
      scenarioById.has(output.producedByScenarioId),
      `CAPABILITY_RUNTIME_OUTPUT_SCENARIO_UNBOUND: ${output.outputId}`
    );
  }

  const artifactById = new Map(
    projection.artifacts.map(artifact => [
      artifact.artifactId,
      artifact
    ])
  );
  assert(
    new Set(
      projection.entrypoints.map(entrypoint => entrypoint.entrypointId)
    ).size === projection.entrypoints.length,
    "CAPABILITY_ENTRYPOINT_ID_DUPLICATED"
  );
  for (const entrypoint of projection.entrypoints) {
    const artifact = artifactById.get(entrypoint.artifactId);
    assert(
      artifact !== undefined &&
        ["runtime", "verification"].includes(artifact.role),
      `CAPABILITY_ENTRYPOINT_ARTIFACT_UNBOUND: ${entrypoint.entrypointId}`
    );
  }
}

const modes = ["--write", "--check"].filter(mode =>
  process.argv.includes(mode)
);
assert(modes.length === 1, "Specify exactly one of --write or --check");
const contractArgument = argument("--contract");
assert(contractArgument !== undefined, "CAPABILITY_CONTRACT_PATH_REQUIRED");
const repositoryRoot = resolve(argument("--root") ?? ".");
const contractPath = resolve(contractArgument);
const schemaPath = resolve(
  import.meta.dirname,
  "../schemas/canonical-feature-conveyor-contract.schema.json"
);
const [schema, contract] = await Promise.all([
  readFile(schemaPath, "utf8").then(JSON.parse),
  readFile(contractPath, "utf8").then(JSON.parse)
]);
const ajv = new Ajv2020({
  allErrors: true,
  strict: true,
  allowUnionTypes: true
});
assert(ajv.validateSchema(schema), `CAPABILITY_SCHEMA_NOT_META_VALID: ${ajv.errorsText()}`);
const validate = ajv.compile(schema);
assert(
  validate(contract),
  `CAPABILITY_CONTRACT_SCHEMA_RED: ${ajv.errorsText(validate.errors)}`
);
verifiesContractSemantics(contract);

const featureId = contract.canonicalFeatureBody.feature.featureId;
const projection = contract.implementationProjection;
assert(
  projection.capabilityRoot === `capabilities/${featureId}`,
  "CAPABILITY_PROJECTION_ROOT_FEATURE_ID_MISMATCH"
);
assert(
  !isAbsolute(projection.capabilityRoot),
  "CAPABILITY_PROJECTION_ROOT_ABSOLUTE"
);
const capabilityRoot = resolve(repositoryRoot, projection.capabilityRoot);
const relativeCapabilityRoot = relative(repositoryRoot, capabilityRoot);
assert(
  relativeCapabilityRoot !== "" &&
    !relativeCapabilityRoot.startsWith(`..${sep}`) &&
    relativeCapabilityRoot !== ".." &&
    !isAbsolute(relativeCapabilityRoot),
  "CAPABILITY_PROJECTION_ROOT_ESCAPES_REPOSITORY"
);
const artifactIds = new Set();
const artifactPaths = new Set();
const projected = projection.artifacts.map(artifact => {
  assert(
    !artifactIds.has(artifact.artifactId),
    `CAPABILITY_ARTIFACT_ID_DUPLICATED: ${artifact.artifactId}`
  );
  assert(
    !artifactPaths.has(artifact.path),
    `CAPABILITY_ARTIFACT_PATH_DUPLICATED: ${artifact.path}`
  );
  artifactIds.add(artifact.artifactId);
  artifactPaths.add(artifact.path);
  const outputPath = resolve(capabilityRoot, artifact.path.split("/").join(sep));
  const relativeOutputPath = relative(capabilityRoot, outputPath);
  assert(
    relativeOutputPath !== "" &&
      !relativeOutputPath.startsWith(`..${sep}`) &&
      relativeOutputPath !== ".." &&
      !isAbsolute(relativeOutputPath),
    `CAPABILITY_ARTIFACT_PATH_ESCAPES_ROOT: ${artifact.path}`
  );
  const bytes = artifactBytes(artifact);
  assert(
    sha256(bytes) === artifact.byteSha256,
    `CAPABILITY_ARTIFACT_AUTHORITY_HASH_MISMATCH: ${artifact.path}`
  );
  return {artifact, outputPath, bytes};
});
const runtimeOutputByPath = new Map(
  projection.runtimeOutputs.map(output => [output.path, output])
);
for (const output of projection.runtimeOutputs) {
  assert(
    !artifactPaths.has(output.path),
    `CAPABILITY_RUNTIME_OUTPUT_COLLIDES_WITH_ARTIFACT: ${output.path}`
  );
  const absoluteOutputPath = resolve(
    capabilityRoot,
    output.path.split("/").join(sep)
  );
  const relativeOutputPath = relative(
    capabilityRoot,
    absoluteOutputPath
  );
  assert(
    relativeOutputPath !== "" &&
      !relativeOutputPath.startsWith(`..${sep}`) &&
      relativeOutputPath !== ".." &&
      !isAbsolute(relativeOutputPath),
    `CAPABILITY_RUNTIME_OUTPUT_PATH_ESCAPES_ROOT: ${output.path}`
  );
}

const allowedRuntimeImports = new Set(
  projection.dependencyPolicy.allowedRuntimeImports
);
for (const item of projected) {
  if (
    item.artifact.projection.projectionType !==
    "lossless-source-tokens.v1"
  ) {
    continue;
  }
  for (const specifier of sourceImportSpecifiers(
    item.artifact.projection.tokens
  )) {
    if (specifier.startsWith(".")) {
      const resolvedImport = posix.normalize(
        posix.join(posix.dirname(item.artifact.path), specifier)
      );
      assert(
        !resolvedImport.startsWith("../") &&
          artifactPaths.has(resolvedImport),
        `CAPABILITY_LOCAL_IMPORT_UNDECLARED: ${item.artifact.path}:${specifier}`
      );
    } else {
      assert(
        allowedRuntimeImports.has(specifier),
        `CAPABILITY_EXTERNAL_IMPORT_FORBIDDEN: ${item.artifact.path}:${specifier}`
      );
    }
  }
}

const existingFiles = await filesBelow(capabilityRoot);
const unexpectedFiles = existingFiles.filter(
  path =>
    !artifactPaths.has(path) &&
    !runtimeOutputByPath.has(path)
);
assert(
  unexpectedFiles.length === 0,
  `CAPABILITY_UNDECLARED_ARTIFACT_PRESENT: ${unexpectedFiles.join(",")}`
);
const observedRuntimeOutputPaths = existingFiles.filter(path =>
  runtimeOutputByPath.has(path)
);
for (const path of observedRuntimeOutputPaths) {
  const output = runtimeOutputByPath.get(path);
  const observed = await readFile(
    resolve(capabilityRoot, path.split("/").join(sep))
  );
  assert(
    sha256(observed) === output.expectedByteSha256,
    `CAPABILITY_RUNTIME_OUTPUT_BYTE_DRIFT: ${path}`
  );
}

for (const item of projected) {
  if (modes[0] === "--write") {
    await mkdir(dirname(item.outputPath), {recursive: true});
    await writeFile(item.outputPath, item.bytes);
  } else {
    let observed;
    try {
      observed = await readFile(item.outputPath);
    } catch (error) {
      if (error.code === "ENOENT") {
        throw new Error(
          `CAPABILITY_DECLARED_ARTIFACT_MISSING: ${item.artifact.path}`
        );
      }
      throw error;
    }
    assert(
      observed.equals(item.bytes),
      `CAPABILITY_ARTIFACT_BYTE_DRIFT: ${item.artifact.path}`
    );
  }
}

const finalFiles = await filesBelow(capabilityRoot);
assert(
  [...artifactPaths].every(path => finalFiles.includes(path)) &&
    finalFiles.every(
      path =>
        artifactPaths.has(path) ||
        runtimeOutputByPath.has(path)
    ),
  "CAPABILITY_ARTIFACT_SET_DIVERGES_FROM_CONTRACT"
);

console.log(
  `${modes[0] === "--write" ? "Projected" : "Verified"} ` +
    `${projected.length}/${projected.length} contract-declared artifacts`
);
console.log(
  `Observed runtime outputs: ${observedRuntimeOutputPaths.length}/` +
    `${projection.runtimeOutputs.length} declared and hash-conformant`
);
console.log(`Capability root: ${projection.capabilityRoot}`);
