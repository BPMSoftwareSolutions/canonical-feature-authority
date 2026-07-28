// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-capabilities-validate-feature-scenario-atomicity-scenarios-accept-a-scenario-with-one-obligation-evaluates-scenario-atomicity-scenario-atomicity-type
// authority-sha256: sha256:9d316c9ab29fc8da22be984fe8a6997cd3b7ead5ce804984c01084f438f58f33
// body-sha256: sha256:de4ebdb0e5e5f45b0340802475ab465a9d5e5a159d1abce8fa1a79625c229857
// projection-signature: ed25519:Qt/5B4yh7JoXKr6gMQBQj0UR4voUChS6eLD36cfw0tb/WvJHnM1FFfGdOv0Bx8CEf+L9YEmadmNSSOvWogbeDw==
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
