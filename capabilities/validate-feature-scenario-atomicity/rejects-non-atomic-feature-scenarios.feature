Feature: Reject non-atomic feature scenarios

  As a canonical feature author
  I want each scenario to carry one independent obligation
  So that responsibility, signaling, and projection remain unambiguous

  Scenario: Reject a scenario with multiple obligations
    Given a canonical scenario contains multiple independent obligations
    When scenario atomicity is evaluated
    Then the scenario is rejected
    And the scenario atomicity signal is SCENARIO_NOT_ATOMIC

  Scenario: Accept a scenario with one obligation
    Given a canonical scenario contains one independent obligation
    When scenario atomicity is evaluated
    Then the scenario is admitted
    And the scenario atomicity signal is SCENARIO_ATOMIC

  Scenario: Reject a scenario with no obligation
    Given a canonical scenario contains no identifiable obligation
    When scenario atomicity is evaluated
    Then the scenario is rejected
    And the scenario atomicity signal is SCENARIO_NOT_ATOMIC

  Scenario: Reject an ambiguously classified scenario
    Given the obligations of a canonical scenario cannot be classified deterministically
    When scenario atomicity is evaluated
    Then the scenario is rejected
    And the scenario atomicity signal is SCENARIO_ATOMICITY_UNRESOLVED
