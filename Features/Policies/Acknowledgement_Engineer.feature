@AcknowledgementPolicy @ITOps_Engineer @Regression

Feature: Verify Acknowledgement Policy
      
        Scenario Outline: ITOPs Engineer should be able to check Acknowledgement Policy details
              When "ITOpsEngineer" clicks on configuration
              And "ITOpsEngineer" navigate to Acknowledgement Policy
             Then "ITOpsEngineer" verifies Add policy button
             When "ITOpsEngineer" clicks on policy "<policyname>"
             And click on cancel button
        Examples:
                  | policyname            |
                  | AcknowledgementPolicy |