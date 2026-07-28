// @generated
// projection-id: project-evaluates-scenario-atomicity-body
// responsibility-id: evaluates-scenario-atomicity
// signal-id: scenario-atomicity
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
