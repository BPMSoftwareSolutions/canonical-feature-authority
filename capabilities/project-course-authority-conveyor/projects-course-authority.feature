Feature: Project course authority through a governed conveyor
  As a student projecting an authority-first system
  I want every admitted course authority to move through a governed LLM and deterministic projection conveyor
  So that every executable body has complete canonical lineage and provable projector-only code origin

  Background:
    Given canonical course authority has been admitted
    And the conveyor execution plan has been admitted
    And provider authority is supplied to the generic LLM connector
    And projector authority names one trusted deterministic projector
    And each executable target has a declared structural profile

  @scenario-id:discover-every-admitted-projection-subject
  Scenario: Discover every admitted projection subject
    Given discovery authority identifies the permitted authority roots and schemas
    When the projection subjects are discovered
    Then one complete deterministically ordered projection-subject set is emitted

  @scenario-id:resolve-the-next-authorized-conveyor-stage
  Scenario: Resolve the next authorized conveyor stage
    Given the conveyor plan and current admitted stage state
    When the next stage is resolved
    Then one authorized stage-transition signal is emitted

  @scenario-id:project-one-bounded-model-request
  Scenario: Project one bounded model request
    Given one authorized conveyor stage requires a model submission
    When its model request authority is projected
    Then one complete provider-neutral model request is emitted

  @scenario-id:obtain-one-bounded-model-submission
  Scenario: Obtain one bounded model submission
    Given one complete provider-neutral model request
    When the request is executed by the generic LLM connector
    Then one normalized model-submission testimony is emitted

  @scenario-id:evaluate-a-model-submission-for-admission
  Scenario: Evaluate a model submission for admission
    Given one normalized model submission and its declared admission authority
    When the submission is evaluated
    Then one admission disposition is emitted without altering the submission

  @scenario-id:attest-one-admitted-authority-artifact
  Scenario: Attest one admitted authority artifact
    Given one model submission has an admitted disposition
    When the admitted authority is attested
    Then one signed authority artifact is emitted

  @scenario-id:project-one-admitted-ast-authority
  Scenario: Project one admitted AST authority
    Given one signed semantic authority satisfies its body expectation
    When lossless AST authority is projected
    Then one signed structurally conformant AST authority is emitted

  @scenario-id:invoke-the-trusted-typescript-projector
  Scenario: Invoke the trusted TypeScript projector
    Given one signed AST authority names an authorized TypeScript target
    When the deterministic projector is invoked
    Then one projector-signed TypeScript body is emitted

  @scenario-id:evaluate-projected-body-conformance
  Scenario: Evaluate projected-body conformance
    Given one projector-signed body and its exact AST authority
    When projection conformance is evaluated
    Then one projection-conformance disposition is emitted

  @scenario-id:publish-the-complete-course-lineage-index
  Scenario: Publish the complete course lineage index
    Given every required projection subject has a conformant terminal disposition
    When course lineage is projected
    Then one signed index links every authority, AST, body, hash, and signature

  @scenario-id:stop-downstream-execution-after-red
  Scenario: Stop downstream execution after RED
    Given one conveyor stage has emitted a RED disposition
    When the conveyor transition is resolved
    Then no downstream stage is authorized

  @scenario-id:resume-only-revalidated-admitted-authority
  Scenario: Resume only revalidated admitted authority
    Given one prior-stage artifact is presented for resumption
    When resumability is evaluated
    Then one resumability disposition is emitted

  @scenario-id:execute-the-complete-admitted-conveyor-plan
  Scenario: Execute the complete admitted conveyor plan
    Given one complete conveyor plan is bound to its governed execution port
    When the course authority conveyor is executed
    Then one terminal course-conveyor signal is emitted
