@FailurePolicy @ITOps_Engineer @Regression

Feature: Failure Policy
      
        Scenario Outline: ITOps Engineer should be able to check Failure Policy details

            
              When "ITOpsEngineer" clicks on configuration
              And "ITOpsEngineer" navigate to Failure Policy
             Then "ITOpsEngineer" verifies Add policy button
             When "ITOpsEngineer" clicks on policy "<policyname>"
             And click on cancel button

        Examples:
                  | policyname            |
                  | AcknowledgementPolicy |