Feature: Prove bounded-model-submission provenance under independent trust
  As an independent conveyor verifier
  I want provider exchange, projection, and execution evidence verified
    outside the submitted trust domain
  So that only one reproducible bounded-model-submission lineage receives GREEN

  @scenario-id:attest-one-independently-observed-provider-exchange
  Scenario: Attest one independently observed provider exchange
    Given one fresh instructor challenge and one admitted provider-neutral model request
    When its provider exchange is observed by instructor-controlled infrastructure
    Then one signed independent-provider-exchange attestation is emitted

  @scenario-id:reproduce-one-bounded-model-submission-body
  Scenario: Reproduce one bounded-model-submission body
    Given one admitted bounded-model-submission SEJ, AST, and transformer graph
    When its recorded transformer build is independently replayed
    Then one byte-identical projector-signed bounded-model-submission body is emitted

  @scenario-id:observe-one-bounded-model-submission-execution
  Scenario: Observe one bounded-model-submission execution
    Given one projector-signed bounded-model-submission body and its admitted connector binding
    When the body is executed through an instructor-controlled observation port
    Then one signed raw bounded-model-submission execution observation is emitted

  @scenario-id:verify-one-complete-bounded-model-submission-lineage
  Scenario: Verify one complete bounded-model-submission lineage
    Given one provider attestation, reproducible body, and raw execution observation
    When their complete authority lineage is independently evaluated
    Then one signed bounded-model-submission acceptance disposition is emitted
