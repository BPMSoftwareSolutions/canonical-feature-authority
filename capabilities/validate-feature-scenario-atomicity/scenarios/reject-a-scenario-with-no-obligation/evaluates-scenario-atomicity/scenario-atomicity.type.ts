// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-scenarios-reject-a-scenario-with-no-obligation-evaluates-scenario-atomicity-scenario-atomicity-type
// authority-sha256: sha256:c735196f1c04a0273ae4d1700d23a5eea48c21f2ca8fa9b53a60058b95071f45
// body-sha256: sha256:de4ebdb0e5e5f45b0340802475ab465a9d5e5a159d1abce8fa1a79625c229857
// projection-signature: ed25519:SFYwj0YJOzQkC9LzNI8rpj6/8Zr1DZa7lqvBPNiZT+IImScbhlAwD9jTKL/Ax7/jOTDQvy81VE/sYVCjxZ7OAg==
// DO NOT EDIT.
export interface CanonicalScenario {
  readonly scenarioId: string;
  readonly obligations: ReadonlyArray<{
    readonly obligationId: string;
    readonly independentlyEvaluable: boolean | "unresolved";
  }>;
}

export interface SemanticEdgeRuntime {
  invokes<TInput, TOutput>(edgeId: string, input: TInput): Promise<TOutput>;
}

export interface EvaluateScenarioAtomicityContext {
  readonly scenario: CanonicalScenario;
  readonly edges: SemanticEdgeRuntime;
}

export type ScenarioAtomicityDisposition =
  | "SCENARIO_ATOMIC"
  | "SCENARIO_NOT_ATOMIC"
  | "SCENARIO_ATOMICITY_UNRESOLVED";

export interface ScenarioAtomicitySignal {
  readonly signalId: "scenario-atomicity";
  readonly disposition: ScenarioAtomicityDisposition;
  readonly color: "GREEN" | "RED";
  readonly blocking: boolean;
}
