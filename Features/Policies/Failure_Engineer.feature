@FailurePolicy @ITOps_Engineer @Regression

Feature: Failure Policy

      Scenario Outline: ITOps Engineer should be able to check Failure Policy details



            When "ITOpsEngineer" navigate to Failure Policy
            And "ITOpsEngineer" clicks on policy "<policyname>"
            And "ITOpsEngineer" must be able to see the policy and rules in read only mode
            And click on cancel button

            Examples:
                  | policyname     |
                  | FailurePolicy2 |