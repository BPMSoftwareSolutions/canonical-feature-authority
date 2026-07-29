import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import Ajv2020 from "ajv/dist/2020.js";

const repositoryRoot = resolve(import.meta.dirname, "..");
const schemaPath = resolve(
  repositoryRoot,
  "schemas/canonical-feature-conveyor-contract.schema.json"
);
const authorityPath = resolve(
  repositoryRoot,
  process.argv[2] ??
    "architecture/end-to-end-canonical-feature-conveyor.authority.json"
);

function assert(condition, code) {
  if (!condition) throw new Error(code);
}

function unique(values, code) {
  assert(new Set(values).size === values.length, code);
}

function contiguous(steps, code) {
  assert(
    steps.every((step, index) => step.sequence === index + 1),
    code
  );
}

const schema = JSON.parse(await readFile(schemaPath, "utf8"));
const authority = JSON.parse(await readFile(authorityPath, "utf8"));
const ajv = new Ajv2020({
  allErrors: true,
  strict: true
});
assert(ajv.validateSchema(schema), "CONVEYOR_SCHEMA_NOT_META_VALID");
const validate = ajv.compile(schema);
if (!validate(authority)) {
  throw new Error(
    `CONVEYOR_AUTHORITY_SCHEMA_INVALID\n${ajv.errorsText(
      validate.errors,
      { separator: "\n" }
    )}`
  );
}

const expectedStageIds = [
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
const stages = authority.conveyor.stages;
assert(
  JSON.stringify(stages.map(stage => stage.stageId)) ===
    JSON.stringify(expectedStageIds),
  "CONVEYOR_STAGE_ORDER_MISMATCH"
);

const producedAt = new Map();
for (const [index, stage] of stages.entries()) {
  for (const product of [...stage.requires, ...stage.consumes]) {
    assert(
      producedAt.has(product) && producedAt.get(product) < index,
      `CONVEYOR_STAGE_PRODUCT_NOT_AVAILABLE: ${stage.stageId}:${product}`
    );
  }
  for (const product of stage.produces) {
    assert(
      !producedAt.has(product),
      `CONVEYOR_PRODUCT_HAS_MULTIPLE_PRODUCERS: ${product}`
    );
    producedAt.set(product, index);
  }
}

const state = authority.conveyor.constructionState;
const currentIndex = expectedStageIds.indexOf(state.currentStage);
assert(currentIndex !== -1, "CONVEYOR_CURRENT_STAGE_UNKNOWN");
assert(
  JSON.stringify(state.completedStages) ===
    JSON.stringify(expectedStageIds.slice(0, currentIndex)),
  "CONVEYOR_COMPLETED_STAGE_PREFIX_MISMATCH"
);
assert(
  JSON.stringify(state.eligibleNextStages) ===
    JSON.stringify([state.currentStage]),
  "CONVEYOR_ELIGIBLE_STAGE_MISMATCH"
);

const forbiddenIntentTechnology =
  /\b(TypeScript|JavaScript|AST|function|class|file|path|framework|provider)\b/i;
for (const value of [
  authority.intent.actor,
  authority.intent.trigger,
  authority.intent.need,
  authority.intent.purpose,
  ...authority.intent.constraints.map(constraint => constraint.text)
]) {
  assert(
    !forbiddenIntentTechnology.test(value),
    "CONVEYOR_INTENT_CONTAINS_IMPLEMENTATION_TECHNOLOGY"
  );
}

const scenarios = authority.canonicalFeatureBody.scenarios;
unique(
  scenarios.map(scenario => scenario.scenarioId),
  "CONVEYOR_SCENARIO_ID_DUPLICATE"
);
for (const field of [
  ["obligation", "obligationId"],
  ["expectation", "expectationId"],
  ["responsibility", "responsibilityId"],
  ["responsibility", "semanticOperationId"],
  ["signal", "signalId"]
]) {
  unique(
    scenarios.map(scenario => scenario[field[0]][field[1]]),
    `CONVEYOR_${field[1].toUpperCase()}_DUPLICATE`
  );
}
for (const scenario of scenarios) {
  assert(
    scenario.expectation.signalId === scenario.signal.signalId,
    `CONVEYOR_EXPECTATION_SIGNAL_MISMATCH: ${scenario.scenarioId}`
  );
}

const semantics = new Map(
  authority.semanticAuthority.map(item => [item.responsibilityId, item])
);
const bodies = new Map(
  authority.featureBodyAuthority.map(item => [item.responsibilityId, item])
);
const projections = new Map(
  authority.projectionAuthority.map(item => [item.bodyId, item])
);
assert(
  semantics.size === scenarios.length,
  "CONVEYOR_SEMANTIC_AUTHORITY_COVERAGE_MISMATCH"
);
assert(
  bodies.size === scenarios.length,
  "CONVEYOR_FEATURE_BODY_COVERAGE_MISMATCH"
);
assert(
  projections.size === scenarios.length,
  "CONVEYOR_PROJECTION_AUTHORITY_COVERAGE_MISMATCH"
);

const projectedSources = [];
for (const scenario of scenarios) {
  const responsibility = scenario.responsibility;
  const semantic = semantics.get(responsibility.responsibilityId);
  const body = bodies.get(responsibility.responsibilityId);
  assert(
    semantic !== undefined,
    `CONVEYOR_SEMANTIC_AUTHORITY_MISSING: ${responsibility.responsibilityId}`
  );
  assert(
    body !== undefined,
    `CONVEYOR_FEATURE_BODY_MISSING: ${responsibility.responsibilityId}`
  );
  contiguous(
    semantic.execution.steps,
    `CONVEYOR_SEMANTIC_EXECUTION_SEQUENCE_INVALID: ${responsibility.responsibilityId}`
  );
  contiguous(
    body.operations,
    `CONVEYOR_FEATURE_BODY_SEQUENCE_INVALID: ${body.bodyId}`
  );
  assert(
    body.operations[0].edgeId === responsibility.semanticOperationId,
    `CONVEYOR_BODY_EDGE_MISMATCH: ${body.bodyId}`
  );
  assert(
    body.operations[1].value === `$.${body.operations[0].assign}`,
    `CONVEYOR_BODY_RETURN_MISMATCH: ${body.bodyId}`
  );

  const projection = projections.get(body.bodyId);
  assert(
    projection !== undefined &&
      projection.translation.sourceBodyId === body.bodyId,
    `CONVEYOR_PROJECTION_BODY_MISMATCH: ${body.bodyId}`
  );
  const declaration =
    projection.expectedProjection.ast.statements[0];
  const returnStatement = declaration.body.statements[0];
  const call = returnStatement.expression.expression;
  const edgeLiteral = call.arguments[0];
  const contextArgument = call.arguments[1];
  assert(
    declaration.parameters[0].name === body.context.parameterName,
    `CONVEYOR_AST_CONTEXT_MISMATCH: ${body.bodyId}`
  );
  assert(
    edgeLiteral.kind === "StringLiteral" &&
      edgeLiteral.value === body.operations[0].edgeId,
    `CONVEYOR_AST_EDGE_MISMATCH: ${body.bodyId}`
  );
  assert(
    contextArgument.kind === "Identifier" &&
      contextArgument.name === body.context.parameterName,
    `CONVEYOR_AST_INPUT_MISMATCH: ${body.bodyId}`
  );
  const forbiddenKinds = new Set([
    "IfStatement",
    "SwitchStatement",
    "ForStatement",
    "WhileStatement",
    "ObjectLiteralExpression",
    "NewExpression"
  ]);
  const serializedAst = JSON.stringify(
    projection.expectedProjection.ast
  );
  for (const kind of forbiddenKinds) {
    assert(
      !serializedAst.includes(`"kind":"${kind}"`),
      `CONVEYOR_AST_FORBIDDEN_KIND: ${body.bodyId}:${kind}`
    );
  }
  const parameter = declaration.parameters[0];
  const source = [
    `export async function ${declaration.name}(`,
    `  ${parameter.name}: ${parameter.typeReference}`,
    `): Promise<${declaration.returnType.typeReference}> {`,
    `  return await ${call.callee.receiver.name}.${call.callee.member}(`,
    `    ${JSON.stringify(edgeLiteral.value)},`,
    `    ${contextArgument.name}`,
    "  );",
    "}"
  ].join("\n");
  projectedSources.push({
    bodyId: body.bodyId,
    source
  });
}

if (authority.contract.status !== "draft") {
  assert(
    authority.projection.outputByteSha256 !== null,
    "CONVEYOR_ADMITTED_PROJECTION_HASH_MISSING"
  );
}

console.log("Canonical feature conveyor authority is GREEN");
console.log(`Contract: ${authority.contract.contractId}`);
console.log(`Stages: ${stages.length}/${expectedStageIds.length}`);
console.log(`Scenarios: ${scenarios.length}`);
console.log(`Semantic authorities: ${semantics.size}`);
console.log(`Feature bodies: ${bodies.size}`);
console.log(`Expected ASTs: ${projections.size}`);
console.log(`AST-derived source bodies: ${projectedSources.length}`);
