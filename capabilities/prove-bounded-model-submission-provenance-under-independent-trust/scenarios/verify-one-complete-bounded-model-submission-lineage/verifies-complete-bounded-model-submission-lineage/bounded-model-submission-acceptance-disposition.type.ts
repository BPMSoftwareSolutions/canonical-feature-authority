// @generated
// projector-id: declarative-typescript-body-projector
// projector-key-id: sha256:92efc0c88120a59b8f8ba0f5b252177ee5b260a6eb3e0ce0f23f62119703ab09
// projection-id: project-bounded-model-submission-acceptance-disposition-type-from-26cace8314b0165f455a96b0e9b80d24f6fe169ed95530cbfcba8673eed1609d
// authority-sha256: sha256:a17cb53f40eef88f624aca054a4ccc9786b543168a9b403f29ddd7cc9a5f20cf
// body-sha256: sha256:f84e04248ced90364ddb7dd325609d2a92caabf966b0ee7ba61436de6bef5f35
// projection-signature: ed25519:MiILPz6LsI1SP1OcV4MBJtPnOvJR1/AwXYaGjQGWdoz2SOF+t1m0TAGuAUEsY2Xg4YbPcT+kvEqXdYIdqDZMAA==
// DO NOT EDIT.
export type CompleteBoundedModelSubmissionLineage = unknown;
export type BoundedModelSubmissionAcceptanceDisposition = unknown;
export type ExpectationSignal = unknown;
export type ProjectionConformanceSignal = unknown;

export interface VerifiesCompleteBoundedModelSubmissionLineageContext {
  readonly lineage: CompleteBoundedModelSubmissionLineage;
  readonly evaluate: (
    input: CompleteBoundedModelSubmissionLineage
  ) => Promise<BoundedModelSubmissionAcceptanceDisposition>;
}

export interface ProvesCompleteBoundedModelSubmissionLineageExpectationContext {
  readonly expectation: unknown;
  readonly prove: (expectation: unknown) => Promise<ExpectationSignal>;
}

export interface RunsCompleteBoundedModelSubmissionLineageConformanceContext {
  readonly subject: unknown;
  readonly evaluate: (
    subject: unknown
  ) => Promise<BoundedModelSubmissionAcceptanceDisposition>;
}
