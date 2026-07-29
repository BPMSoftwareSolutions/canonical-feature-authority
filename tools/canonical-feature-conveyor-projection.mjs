import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import Ajv2020 from "ajv/dist/2020.js";

export const repositoryRoot = resolve(import.meta.dirname, "..");
const schemaPath = resolve(
  repositoryRoot,
  "schemas/canonical-feature-conveyor-contract.schema.json"
);

export function sha256(bytes) {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function json(value) {
  return ["```json", ...JSON.stringify(value, null, 2).split("\n"), "```"];
}

function typescript(source) {
  return ["```typescript", ...source.split("\n"), "```"];
}

function text(lines) {
  return ["```text", ...lines, "```"];
}

function bullet(statements) {
  return statements.map(value => `- ${value.text ?? value}`);
}

const stageTitles = {
  "capture-intent": "Intent",
  "declare-outcome": "Desired outcome",
  "establish-feature": "Canonical feature",
  "establish-scenarios": "Scenarios",
  "decompose-obligations": "Obligations",
  "declare-expectations": "Expectations",
  "assign-responsibilities": "Responsibilities",
  "declare-signals": "Signals",
  "author-semantic-authority": "Semantic authority",
  "author-semantic-execution": "Semantic execution",
  "author-feature-body-authority": "Feature-body authority",
  "resolve-language-projection": "Language projection authority",
  "project-expected-ast": "Expected AST",
  "project-expected-code": "Expected code projection",
  "evaluate-semantic-execution": "Direct semantic evaluation",
  "evaluate-projected-execution": "Projected-body evaluation",
  "evaluate-translation-conformance": "Translation conformance",
  "review-feature": "Review disposition"
};

function stageInstruction(stage, number) {
  return [
    `## ${number}. ${stageTitles[stage.stageId]}`,
    "",
    ...text([
      `Stage ID: ${stage.stageId}`,
      `Purpose: ${stage.purpose}`,
      `Authorized inputs: ${stage.consumes.length === 0 ? "none" : stage.consumes.join(", ")}`,
      `Required prior products: ${stage.requires.length === 0 ? "none" : stage.requires.join(", ")}`,
      `Required output: ${stage.produces.join(", ")}`,
      `Stop condition: ${stage.completionCondition}`
    ]),
    "",
    "Review questions:",
    "",
    ...stage.reviewQuestions.map(question => `- ${question}`)
  ];
}

function rendersExpression(expression) {
  if (expression.kind === "Identifier") return expression.name;
  if (expression.kind === "StringLiteral") {
    return JSON.stringify(expression.value);
  }
  if (expression.kind === "PropertyAccessExpression") {
    return `${rendersExpression(expression.receiver)}.${expression.member}`;
  }
  throw new Error(`UNSUPPORTED_AST_EXPRESSION: ${expression.kind}`);
}

export function rendersTypescript(ast) {
  const declaration = ast.statements[0];
  const parameter = declaration.parameters[0];
  const returned = declaration.body.statements[0];
  const call = returned.expression.expression;
  return [
    `export async function ${declaration.name}(`,
    `  ${parameter.name}: ${parameter.typeReference}`,
    `): Promise<${declaration.returnType.typeReference}> {`,
    `  return await ${rendersExpression(call.callee)}(`,
    ...call.arguments.map(
      (argument, index) =>
        `    ${rendersExpression(argument)}${
          index === call.arguments.length - 1 ? "" : ","
        }`
    ),
    "  );",
    "}"
  ].join("\n");
}

function rendersGherkin(authority) {
  const { feature, background, scenarios } =
    authority.canonicalFeatureBody;
  const lines = [
    "```gherkin",
    `Feature: ${feature.title}`,
    `  As a ${feature.userStory.asA}`,
    `  I want ${feature.userStory.iWant}`,
    `  So that ${feature.userStory.soThat}`,
    "",
    "  Background:",
    `    Given ${background[0].text}`,
    ...background.slice(1).map(fact => `    And ${fact.text}`)
  ];
  for (const scenario of scenarios) {
    lines.push(
      "",
      `  @scenario-id:${scenario.scenarioId}`,
      `  Scenario: ${scenario.title}`,
      `    Given ${scenario.behavior.given[0].text}`,
      ...scenario.behavior.given
        .slice(1)
        .map(given => `    And ${given.text}`),
      `    When ${scenario.behavior.when.text}`,
      `    Then ${scenario.behavior.then[0].text}`,
      ...scenario.behavior.then
        .slice(1)
        .map(outcome => `    And ${outcome.text}`)
    );
  }
  lines.push("```");
  return lines;
}

function sectionJsonByScenario(authority, field) {
  const lines = [];
  for (const scenario of authority.canonicalFeatureBody.scenarios) {
    lines.push(
      `### ${scenario.scenarioId}`,
      "",
      ...json({
        scenarioId: scenario.scenarioId,
        [field]: scenario[field]
      }),
      ""
    );
  }
  return lines.slice(0, -1);
}

function semanticWithoutExecution(value) {
  const { execution, ...semantic } = value;
  return semantic;
}

function stage(authority, stageId) {
  const index = authority.conveyor.stages.findIndex(
    candidate => candidate.stageId === stageId
  );
  if (index === -1) throw new Error(`CONVEYOR_STAGE_MISSING: ${stageId}`);
  return {
    definition: authority.conveyor.stages[index],
    number: index + 1
  };
}

function beginsStage(lines, authority, stageId) {
  const selected = stage(authority, stageId);
  lines.push(
    ...stageInstruction(selected.definition, selected.number),
    ""
  );
}

export function projectsMarkdown(authority) {
  const lines = [
    `# ${authority.contract.title}`,
    "",
    ...json(authority.contract),
    "",
    "The contract is authored, rendered, implemented, evaluated, and reviewed",
    "in the same causal conveyor order. A later stage may consume only products",
    "admitted by earlier stages.",
    "",
    "## Construction state",
    "",
    ...json(authority.conveyor.constructionState),
    ""
  ];

  beginsStage(lines, authority, "capture-intent");
  lines.push(
    `Actor: ${authority.intent.actor}`,
    "",
    `Trigger: ${authority.intent.trigger}`,
    "",
    `Need: ${authority.intent.need}`,
    "",
    `Purpose: ${authority.intent.purpose}`,
    "",
    "Constraints:",
    "",
    ...bullet(authority.intent.constraints),
    ""
  );

  beginsStage(lines, authority, "declare-outcome");
  lines.push(
    `Outcome ID: \`${authority.outcome.outcomeId}\``,
    "",
    authority.outcome.statement,
    "",
    "Observable state:",
    "",
    ...bullet(authority.outcome.observableState),
    ""
  );

  beginsStage(lines, authority, "establish-feature");
  lines.push(
    ...json(authority.canonicalFeatureBody.feature),
    "",
    "User-story projection:",
    "",
    ...text([
      `As a ${authority.canonicalFeatureBody.feature.userStory.asA}`,
      `I want ${authority.canonicalFeatureBody.feature.userStory.iWant}`,
      `So that ${authority.canonicalFeatureBody.feature.userStory.soThat}`
    ]),
    ""
  );

  beginsStage(lines, authority, "establish-scenarios");
  lines.push(...rendersGherkin(authority), "");

  beginsStage(lines, authority, "decompose-obligations");
  lines.push(...sectionJsonByScenario(authority, "obligation"), "");

  beginsStage(lines, authority, "declare-expectations");
  lines.push(...sectionJsonByScenario(authority, "expectation"), "");

  beginsStage(lines, authority, "assign-responsibilities");
  lines.push(...sectionJsonByScenario(authority, "responsibility"), "");

  beginsStage(lines, authority, "declare-signals");
  lines.push(...sectionJsonByScenario(authority, "signal"), "");

  beginsStage(lines, authority, "author-semantic-authority");
  for (const semantic of authority.semanticAuthority) {
    lines.push(
      `### ${semantic.responsibilityId}`,
      "",
      ...json(semanticWithoutExecution(semantic)),
      ""
    );
  }

  beginsStage(lines, authority, "author-semantic-execution");
  for (const semantic of authority.semanticAuthority) {
    lines.push(
      `### ${semantic.responsibilityId}`,
      "",
      ...json({
        responsibilityId: semantic.responsibilityId,
        execution: semantic.execution
      }),
      ""
    );
  }

  beginsStage(lines, authority, "author-feature-body-authority");
  for (const body of authority.featureBodyAuthority) {
    lines.push(`### ${body.bodyId}`, "", ...json(body), "");
  }

  beginsStage(lines, authority, "resolve-language-projection");
  for (const projection of authority.projectionAuthority) {
    lines.push(
      `### ${projection.bodyId}`,
      "",
      ...json({
        bodyId: projection.bodyId,
        target: projection.target,
        translation: projection.translation
      }),
      ""
    );
  }

  beginsStage(lines, authority, "project-expected-ast");
  for (const projection of authority.projectionAuthority) {
    lines.push(
      `### ${projection.bodyId}`,
      "",
      ...json(projection.expectedProjection.ast),
      ""
    );
  }

  beginsStage(lines, authority, "project-expected-code");
  for (const projection of authority.projectionAuthority) {
    lines.push(
      `### ${projection.translation.artifactPath}`,
      "",
      ...typescript(
        rendersTypescript(projection.expectedProjection.ast)
      ),
      ""
    );
  }

  beginsStage(lines, authority, "evaluate-semantic-execution");
  lines.push(
    ...json(authority.evaluationAuthority.semanticEvaluation),
    ""
  );

  beginsStage(lines, authority, "evaluate-projected-execution");
  lines.push(
    ...json(authority.evaluationAuthority.projectedEvaluation),
    ""
  );

  beginsStage(lines, authority, "evaluate-translation-conformance");
  lines.push(
    ...json({
      translationEvaluation:
        authority.evaluationAuthority.translationEvaluation,
      terminalDetermination:
        authority.evaluationAuthority.terminalDetermination
    }),
    ""
  );

  beginsStage(lines, authority, "review-feature");
  lines.push(
    "Review questions:",
    "",
    ...authority.reviewAuthority.questions.map(
      question => `- ${question}`
    ),
    "",
    "Translation tie-out:",
    "",
    "| Canonical authority | Expected AST | Expected code |",
    "| --- | --- | --- |",
    ...authority.reviewAuthority.translationTieOut.map(
      row =>
        `| ${row.authority.replaceAll("|", "\\|")} | ` +
        `${row.ast.replaceAll("|", "\\|")} | ` +
        `${row.code.replaceAll("|", "\\|")} |`
    ),
    "",
    `Admission rule: ${authority.reviewAuthority.admissionRule}`,
    ""
  );

  const eol =
    authority.projection.lineEnding === "CRLF" ? "\r\n" : "\n";
  return Buffer.from(lines.join(eol), "utf8");
}

export async function readsConveyorAuthority(authorityPath) {
  const schema = JSON.parse(await readFile(schemaPath, "utf8"));
  const authority = JSON.parse(await readFile(authorityPath, "utf8"));
  const ajv = new Ajv2020({
    allErrors: true,
    strict: true
  });
  const validate = ajv.compile(schema);
  if (!validate(authority)) {
    throw new Error(
      `CONVEYOR_AUTHORITY_SCHEMA_INVALID\n${ajv.errorsText(
        validate.errors,
        { separator: "\n" }
      )}`
    );
  }
  return authority;
}
