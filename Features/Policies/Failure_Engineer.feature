@ITOps_Engineer @Regression

Feature: Failure Policy
      
        Scenario Outline: ITOPs Engineer should be able to check Failure Policy details

            
              And "ITOPsEngineer" clicks on configuration
              And "ITOPsEngineer" navigate to Failure Policy
             Then "ITOPsEngineer" verifies Add policy button
             When "ITOPsEngineer" clicks on policy "<policyname>"
             When click on cancel button

        Examples:
                  | policyname            |
                  | AcknowledgementPolicy |