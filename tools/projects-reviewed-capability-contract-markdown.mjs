import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import Ajv2020 from "../capabilities/end-to-end-canonical-feature-conveyor-fractal/projection/ajv-2020.bundle.mjs";

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

function code(language, value) {
  const content = typeof value === "string" ? value : JSON.stringify(value, null, 2);
  return `\`\`\`${language}\n${content}\n\`\`\``;
}

function gherkin(body) {
  const { feature, background, scenarios } = body;
  const lines = [
    `Feature: ${feature.title}`,
    `  As a ${feature.userStory.asA}`,
    `  I want ${feature.userStory.iWant}`,
    `  So that ${feature.userStory.soThat}`,
    "",
    "  Background:"
  ];
  background.forEach((statement, index) => {
    lines.push(`    ${index === 0 ? "Given" : "And"} ${statement.text}`);
  });
  for (const scenario of scenarios) {
    lines.push("", `  @scenario-id:${scenario.scenarioId}`);
    lines.push(`  Scenario: ${scenario.title}`);
    scenario.behavior.given.forEach((statement, index) => {
      lines.push(`    ${index === 0 ? "Given" : "And"} ${statement.text}`);
    });
    lines.push(`    When ${scenario.behavior.when.text}`);
    scenario.behavior.then.forEach((statement, index) => {
      lines.push(`    ${index === 0 ? "Then" : "And"} ${statement.text}`);
    });
  }
  return lines.join("\n");
}

function verifiesSemantics(authority) {
  const { contract, intent, canonicalFeatureBody: body } = authority;
  assert(contract.contractId === body.feature.featureId, "CAPABILITY_CONTRACT_FEATURE_ID_MISMATCH");
  assert(contract.title === body.feature.title, "CAPABILITY_CONTRACT_FEATURE_TITLE_MISMATCH");
  assert(intent.actor === body.feature.userStory.asA, "CAPABILITY_INTENT_ACTOR_STORY_MISMATCH");
  const scenarioIds = body.scenarios.map(item => item.scenarioId);
  assert(new Set(scenarioIds).size === scenarioIds.length, "CAPABILITY_SCENARIO_ID_DUPLICATED");
  for (const scenario of body.scenarios) {
    assert(
      scenario.expectation.signalId === scenario.signal.signalId,
      `CAPABILITY_EXPECTATION_SIGNAL_MISMATCH: ${scenario.scenarioId}`
    );
    assert(
      scenario.responsibility.responsibilityId === scenario.scenarioId,
      `CAPABILITY_RESPONSIBILITY_SCENARIO_MISMATCH: ${scenario.scenarioId}`
    );
    assert(
      scenario.responsibility.semanticOperationId === scenario.responsibility.responsibilityId,
      `CAPABILITY_SEMANTIC_OPERATION_RESPONSIBILITY_MISMATCH: ${scenario.scenarioId}`
    );
    const fields = scenario.signal.resultShape.fields.map(field => field.name);
    assert(new Set(fields).size === fields.length, `CAPABILITY_SIGNAL_FIELD_DUPLICATED: ${scenario.scenarioId}`);
  }
}

function projects(authority) {
  const { contract, intent, outcome, canonicalFeatureBody: body } = authority;
  const blocks = [];
  const heading = (level, text) => blocks.push(`${"#".repeat(level)} ${text}`);
  const paragraph = (...lines) => blocks.push(lines.join("\n"));

  heading(1, `${contract.title} Contract`);
  heading(2, "Status");
  blocks.push(code("text", [
    `CONTRACT STATUS: ${contract.status.toUpperCase()}`,
    `CONTRACT TYPE: ${contract.contractType}`,
    `SCHEMA VERSION: ${contract.schemaVersion}`,
    "IMPLEMENTATION STATUS: NOT YET CLAIMED"
  ].join("\n")));

  heading(2, "Future-state preview");
  blocks.push(code("text", [
    "Presentation Schema + Presentation Contract + Projection Profile",
    "                            |",
    "                            v",
    "                 Resolved Projection Plan",
    "                            |",
    "                            v",
    "               Generic SVG Projection Kernel",
    "                            |",
    "                            v",
    "          Canonical SVG + Conformance Receipt"
  ].join("\n")));

  heading(2, "Reviewed intent");
  paragraph(
    `Actor: ${intent.actor}`,
    `Trigger: ${intent.trigger}`,
    `Need: ${intent.need}`,
    `Purpose: ${intent.purpose}`
  );

  heading(2, "Governed constraints");
  blocks.push(code("json", {constraints: intent.constraints}));

  heading(2, "Required outcome");
  paragraph(outcome.statement);
  blocks.push(code("json", {outcomeId: outcome.outcomeId, observableState: outcome.observableState}));

  heading(2, "User story");
  blocks.push(code("text", [
    `As a ${body.feature.userStory.asA}`,
    `I want ${body.feature.userStory.iWant}`,
    `So that ${body.feature.userStory.soThat}`
  ].join("\n")));
  paragraph(`Governing obligation: ${body.feature.governingObligation}`);

  heading(2, "Acceptance Gherkin");
  blocks.push(code("gherkin", gherkin(body)));

  heading(2, "Canonical authority graph");
  blocks.push(code("text", body.scenarios.flatMap((scenario, index) => [
    `${index + 1}. scenario/${scenario.scenarioId}`,
    `   -> obligation/${scenario.obligation.obligationId}`,
    `   -> responsibility/${scenario.responsibility.responsibilityId}`,
    `   -> semantic-operation/${scenario.responsibility.semanticOperationId}`,
    `   -> signal/${scenario.signal.signalId}`,
    `   -> expectation/${scenario.expectation.expectationId}`,
    `   -> disposition/${scenario.expectation.expectedDisposition}`
  ]).join("\n")));

  heading(2, "Scenario authority");
  for (const scenario of body.scenarios) {
    heading(3, scenario.scenarioId);
    blocks.push(code("json", {
      obligation: scenario.obligation,
      responsibility: scenario.responsibility,
      signal: scenario.signal,
      expectation: scenario.expectation
    }));
  }

  heading(2, "Canonical file body system");
  blocks.push(code("text", [
    `capabilities/${body.feature.featureId}/`,
    "  authority/",
    "    reviewed-capability-request.json",
    "    model-produced-capability-authority.json",
    "    projected-artifact-manifest.json",
    "  scenarios/",
    ...body.scenarios.flatMap(scenario => [
      `    ${scenario.scenarioId}/`,
      `      ${scenario.responsibility.responsibilityId}/`,
      `        ${scenario.responsibility.responsibilityId}.ts`,
      `        ${scenario.responsibility.responsibilityId}.type.ts`,
      `        ${scenario.responsibility.responsibilityId}.expectation.ts`,
      `        ${scenario.responsibility.responsibilityId}.conformance.ts`
    ])
  ].join("\n")));

  heading(2, "Conveyor admission boundary");
  paragraph(
    "This reviewed contract is the admitted input to the canonical feature conveyor.",
    "It does not embed model-produced semantic authority, AST, code, or implementation",
    "evidence. Those downstream artifacts must be projected by the conveyor and bound",
    "back to this exact contract rather than authored into a parallel schema."
  );

  heading(2, "Implementation exit condition");
  paragraph(
    "The capability is complete only when the canonical conveyor consumes this exact",
    "contract, projects a non-empty capability-local artifact set, executes acceptance",
    "against a real SVG output, reproduces identical SVG bytes from identical authority,",
    "and independently issues the expected terminal receipt with exhaustive RED controls."
  );
  return Buffer.from(`${blocks.join("\n\n")}\n`, "utf8");
}

const modes = ["--hash", "--write", "--check"].filter(mode => process.argv.includes(mode));
assert(modes.length === 1, "Specify exactly one of --hash, --write, or --check");
const contractPath = resolve(argument("--contract") ?? "");
const outputPath = resolve(argument("--output") ?? "");
assert(argument("--contract") !== undefined, "CAPABILITY_CONTRACT_PATH_REQUIRED");
assert(argument("--output") !== undefined, "CAPABILITY_DOCUMENT_OUTPUT_PATH_REQUIRED");
const schemaPath = resolve(
  import.meta.dirname,
  "../schemas/canonical-feature-conveyor-contract.schema.json"
);
const [schema, authority] = await Promise.all([
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
assert(validate(authority), `CAPABILITY_CONTRACT_SCHEMA_RED: ${ajv.errorsText(validate.errors)}`);
verifiesSemantics(authority);
const projected = projects(authority);
if (modes[0] === "--hash") {
  console.log(`Contract byte SHA-256: ${sha256(await readFile(contractPath))}`);
  console.log(`Projected Markdown SHA-256: ${sha256(projected)}`);
} else if (modes[0] === "--write") {
  await writeFile(outputPath, projected);
  console.log(`Projected document: ${outputPath}`);
  console.log(`Projected Markdown SHA-256: ${sha256(projected)}`);
} else {
  const observed = await readFile(outputPath);
  assert(observed.equals(projected), "CAPABILITY_DOCUMENT_PROJECTION_BYTE_DRIFT");
  console.log(`Document projection is byte-identical: ${outputPath}`);
  console.log(`Projected Markdown SHA-256: ${sha256(projected)}`);
}
