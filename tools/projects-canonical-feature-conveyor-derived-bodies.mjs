import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const repositoryRoot = resolve(import.meta.dirname, "..");
const authorityPath = resolve(
  repositoryRoot,
  "architecture/end-to-end-canonical-feature-conveyor.authority.json"
);
const authority = JSON.parse(await readFile(authorityPath, "utf8"));
const sha256 = value =>
  `sha256:${createHash("sha256").update(value).digest("hex")}`;

function sourceLine(source, fragment) {
  const index = normalizedSourceLines(source).findIndex(line =>
    line.includes(fragment)
  );
  if (index === -1) {
    throw new Error(`PROJECTED_SOURCE_FRAGMENT_MISSING: ${fragment}`);
  }
  return `${index + 1}-${index + 1}`;
}

function normalizedSourceLines(source) {
  return source.replace(/\r\n/g, "\n").split("\n");
}

function exactSourceLine(source, value) {
  const index = normalizedSourceLines(source).findIndex(
    line => line.trim() === value
  );
  if (index === -1) {
    throw new Error(
      `PROJECTED_SOURCE_EXACT_LINE_MISSING: ${value}`
    );
  }
  return `${index + 1}-${index + 1}`;
}

function sourceRange(source, startFragment, endValue) {
  const lines = normalizedSourceLines(source);
  const start = lines.findIndex(line =>
    line.includes(startFragment)
  );
  const end = lines.findIndex(
    (line, index) => index >= start && line.trim() === endValue
  );
  if (start === -1 || end === -1) {
    throw new Error(
      `PROJECTED_SOURCE_RANGE_MISSING: ${startFragment} -> ${endValue}`
    );
  }
  return `${start + 1}-${end + 1}`;
}

const results = [];
for (const projection of authority.projectionAuthority) {
  const executablePath = resolve(
    repositoryRoot,
    projection.projector.executablePath
  );
  const executableBytes = await readFile(executablePath);
  if (
    sha256(executableBytes) !==
    projection.projector.executableSha256
  ) {
    throw new Error(
      `PRODUCTION_PROJECTOR_EXECUTABLE_MISMATCH: ${projection.bodyId}`
    );
  }
  const productionProjector = await import(
    new URL(`file:///${executablePath.replaceAll("\\", "/")}`)
  );
  if (
    typeof productionProjector
      .derivesCanonicalTypeScriptFromSemanticAuthority !== "function"
  ) {
    throw new Error("PRODUCTION_PROJECTOR_UNAVAILABLE");
  }
  const projects =
    productionProjector
      .derivesCanonicalTypeScriptFromSemanticAuthority;
  const primary = projects(projection.input.projectorRequest);
  const supportingAuthority =
    authority.fileBodyAuthority.supportingTypes.find(
      item =>
        item.artifactPath ===
        projection.expectedArtifact.path.replace(
          /\.ts$/,
          ".type.ts"
        )
    );
  if (!supportingAuthority) {
    throw new Error(
      `SUPPORTING_TYPE_AUTHORITY_MISSING: ${projection.bodyId}`
    );
  }
  const supporting = projects(
    supportingAuthority.projectorRequest
  );
  const source = Buffer.from(primary.sourceBytes).toString("utf8");
  const supportingSource = Buffer.from(
    supporting.sourceBytes
  ).toString("utf8");
  const body = authority.featureBodyAuthority.find(
    candidate => candidate.bodyId === projection.bodyId
  );
  const edgeId = body.operations[0].edgeId;
  const contextName = body.context.parameterName;
  const functionName =
    projection.input.projectorRequest.function.name;
  results.push({
    projectionType: "production-projector-result.v1",
    bodyId: projection.bodyId,
    scenarioId:
      projection.input.projectorRequest.lineage.scenarioId,
    responsibilityId:
      projection.input.projectorRequest.lineage.responsibilityId,
    semanticOperationId: edgeId,
    projector: projection.projector,
    inputSha256: sha256(
      Buffer.from(
        JSON.stringify(projection.input.projectorRequest),
        "utf8"
      )
    ),
    artifactPath: projection.expectedArtifact.path,
    projectedAst: primary.semanticAst,
    projectedSource: source,
    projectedSourceSha256: primary.sourceSha256,
    supportingTypeArtifactPath:
      supportingAuthority.artifactPath,
    supportingTypeAst: supporting.semanticAst,
    supportingTypeSource: supportingSource,
    supportingTypeSourceSha256: supporting.sourceSha256,
    translationProvenance: [
      {
        sourceAuthorityRef:
          `responsibility:${body.responsibilityId}`,
        projectionRuleId:
          "body-to-exported-async-function",
        astPath: "$.statements[0]",
        sourceRange: sourceLine(
          source,
          `function ${functionName}(`
        )
      },
      {
        sourceAuthorityRef:
          `feature-body:${body.bodyId}:context`,
        projectionRuleId: "context-to-parameter",
        astPath: "$.statements[0].parameters[0]",
        sourceRange: sourceLine(
          source,
          `${contextName}: ${projection.typeResolution.contextType}`
        )
      },
      {
        sourceAuthorityRef:
          `feature-body:${body.bodyId}:operations[0]`,
        projectionRuleId: "semantic-edge-to-call",
        astPath:
          "$.statements[0].body.statements[0].expression.expression",
        sourceRange: sourceRange(source, ".invokes(", ");")
      },
      {
        sourceAuthorityRef:
          `feature-body:${body.bodyId}:operations[0].edgeId`,
        projectionRuleId: "edge-id-to-string-literal",
        astPath:
          "$.statements[0].body.statements[0].expression.expression.edgeId",
        sourceRange: sourceLine(source, JSON.stringify(edgeId))
      },
      {
        sourceAuthorityRef:
          `feature-body:${body.bodyId}:operations[0].input`,
        projectionRuleId: "context-input-to-identifier",
        astPath:
          "$.statements[0].body.statements[0].expression.expression.arguments[0]",
        sourceRange: exactSourceLine(source, contextName)
      }
    ]
  });
}

const featureProjection = authority.featureExecutionProjection;
const featureExecutablePath = resolve(
  repositoryRoot,
  featureProjection.projector.executablePath
);
const featureExecutableBytes = await readFile(featureExecutablePath);
if (
  sha256(featureExecutableBytes) !==
  featureProjection.projector.executableSha256
) {
  throw new Error(
    "FEATURE_EXECUTION_PROJECTOR_EXECUTABLE_MISMATCH"
  );
}
const featureProjector = await import(
  new URL(
    `file:///${featureExecutablePath.replaceAll("\\", "/")}`
  )
);
if (
  typeof featureProjector
    .derivesCanonicalTypeScriptFromSemanticAuthority !== "function"
) {
  throw new Error("FEATURE_EXECUTION_PROJECTOR_UNAVAILABLE");
}
const projectedFeature =
  featureProjector.derivesCanonicalTypeScriptFromSemanticAuthority(
    featureProjection.projectorRequest
  );
const featureSource = Buffer.from(
  projectedFeature.sourceBytes
).toString("utf8");
const featureExecution = {
  projectionType: "production-projector-result.v1",
  executionId: authority.featureExecutionAuthority.executionId,
  projector: featureProjection.projector,
  inputSha256: sha256(
    Buffer.from(
      JSON.stringify(featureProjection.projectorRequest),
      "utf8"
    )
  ),
  artifactPath: featureProjection.expectedArtifact.path,
  projectedAst: projectedFeature.semanticAst,
  projectedSource: featureSource,
  projectedSourceSha256: projectedFeature.sourceSha256,
  translationProvenance:
    authority.featureExecutionAuthority.steps.map(step => ({
      sourceAuthorityRef:
        `feature-execution:${authority.featureExecutionAuthority.executionId}:step:${step.sequence}`,
      projectionRuleId:
        step.operation === "return"
          ? "return-assigned-terminal-value"
          : step.operation,
      astPath:
        `$.statements[0].body.statements[${step.sequence - 1}]`,
      sourceRange:
        step.operation === "return"
          ? sourceLine(
              featureSource,
              `return ${step.input.slice(2)}`
            )
          : sourceLine(
              featureSource,
              `const ${step.assign.slice(2)} =`
            )
    }))
};

const derived = {
  derivedProjectionType:
    "canonical-feature-conveyor-derived-projections.v1",
  contractId: authority.contract.contractId,
  featureExecution,
  results
};
const bytes = Buffer.from(`${JSON.stringify(derived, null, 2)}\n`);
const observedHash = sha256(bytes);
const mode = ["--hash", "--write", "--check"].find(option =>
  process.argv.includes(option)
);
if (!mode) {
  throw new Error("Specify --hash, --write, or --check");
}
if (mode === "--hash") {
  console.log(
    `Proposed derived projection SHA-256: ${observedHash}`
  );
  console.log(
    `Admitted derived projection SHA-256: ` +
      `${authority.projection.derivedProjectionSha256}`
  );
  process.exit(0);
}
if (
  authority.projection.derivedProjectionSha256 !== observedHash
) {
  throw new Error(
    `DERIVED_PROJECTION_HASH_MISMATCH: expected ` +
      `${authority.projection.derivedProjectionSha256}, ` +
      `observed ${observedHash}`
  );
}
const outputPath = resolve(
  repositoryRoot,
  authority.projection.derivedProjectionOutputPath
);
if (mode === "--write") {
  await writeFile(outputPath, bytes);
  console.log(
    `Projected derived bodies: ` +
      `${authority.projection.derivedProjectionOutputPath}`
  );
} else {
  const existing = await readFile(outputPath);
  if (!existing.equals(bytes)) {
    throw new Error("DERIVED_PROJECTION_BYTE_DRIFT");
  }
  console.log("Derived body projection is byte-identical");
}
console.log(`Derived projection SHA-256: ${observedHash}`);
