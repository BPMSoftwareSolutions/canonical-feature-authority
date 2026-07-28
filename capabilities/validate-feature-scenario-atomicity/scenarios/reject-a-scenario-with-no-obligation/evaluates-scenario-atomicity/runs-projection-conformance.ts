// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-scenarios-reject-a-scenario-with-no-obligation-evaluates-scenario-atomicity-runs-projection-conformance
// authority-sha256: sha256:4ad8c730e16458db2d69d27c4ff0c3d6b97262f8ec18554adb233559d93a04bd
// body-sha256: sha256:32fef30df0432e9e504f1d1b8724a737aaa9301d5f4fbe363bdde33896f5e32e
// projection-signature: ed25519:f4MEswsC/e0QaEDia1r3yOtoSwVGYIExIt/HcG9i7lmq3K0WihQmv/tejdokRn9yYCbzDr2EybzhyTGrZCezBA==
// DO NOT EDIT.
import { observesGeneratedBody } from "../../../../../conformance/observes-generated-body.js";
import { parsesGeneratedBodyAst } from "../../../../../conformance/parses-generated-body-ast.js";
import { comparesExpectedAndObservedTopology } from "../../../../../conformance/compares-expected-and-observed-topology.js";
import { detectsForbiddenBodyStructures } from "../../../../../conformance/detects-forbidden-body-structures.js";
import { evaluatesCapabilityConformance } from "../../../../../conformance/evaluates-capability-conformance.js";

export async function runsProjectionConformance() {
  const observedBody = await observesGeneratedBody(
    "capabilities/validate-feature-scenario-atomicity/scenarios/reject-a-scenario-with-no-obligation/evaluates-scenario-atomicity/evaluates-scenario-atomicity.ts"
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
