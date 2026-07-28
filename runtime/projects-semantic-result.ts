// Reference stub — not a working implementation.
//
// Owns turning a resolved disposition into the canonical signal object
// (per projects-scenario-atomicity-signal.sej.json) that a generated body
// returns. Test files in this repository import
// `createsIndependentObligation` and `createsUnclassifiableObligation`
// from here as fixture builders for obligation-classification input.

export function createsIndependentObligation(obligationId: string) {
  return {
    obligationId,
    independentlyEvaluable: true as const
  };
}

export function createsUnclassifiableObligation(obligationId: string) {
  return {
    obligationId,
    independentlyEvaluable: "unresolved" as const
  };
}

export function projectsSemanticResult() {
  throw new Error(
    "projectsSemanticResult is a documentation stub — see architecture/defines-authority-projection-boundary.md"
  );
}
