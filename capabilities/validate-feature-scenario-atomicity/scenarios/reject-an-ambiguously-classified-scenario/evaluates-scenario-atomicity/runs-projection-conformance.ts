// @generated
// bodyId: evaluates-scenario-atomicity-body
// conformance-authority: evaluates-projection-conformance.sej.json
// DO NOT EDIT.

import { observesGeneratedBody } from "../../../../../conformance/observes-generated-body.js";
import { parsesGeneratedBodyAst } from "../../../../../conformance/parses-generated-body-ast.js";
import { comparesExpectedAndObservedTopology } from "../../../../../conformance/compares-expected-and-observed-topology.js";
import { detectsForbiddenBodyStructures } from "../../../../../conformance/detects-forbidden-body-structures.js";
import { evaluatesCapabilityConformance } from "../../../../../conformance/evaluates-capability-conformance.js";

export async function runsProjectionConformance() {
  const observedBody = await observesGeneratedBody(
    "capabilities/validate-feature-scenario-atomicity/scenarios/reject-an-ambiguously-classified-scenario/evaluates-scenario-atomicity/evaluates-scenario-atomicity.ts"
  );

  const observedAst = await parsesGeneratedBodyAst(observedBody);

  await detectsForbiddenBodyStructures(observedAst);

  const topologyComparison = await comparesExpectedAndObservedTopology({
    expectationPath: "../expects-scenario-rejection.expectation.json",
    bodyExpectationPath: "./expects-evaluates-scenario-atomicity-body.json",
    fileBodyAuthorityPath: "./declares-evaluates-scenario-atomicity-body.json",
    astAuthorityPath: "./projects-typescript-ast.json",
    observedAst
  });

  return evaluatesCapabilityConformance(topologyComparison);
}
