@ITOps_Engineer @Regression

Feature: Acknowledgement Policy
      
        Scenario Outline: ITOPs Engineer should be able to check Acknowledgement Policy details

            
              And "ITOPsEngineer" clicks on configuration
              And "ITOPsEngineer" navigate to Acknowledgement Policy
             Then "ITOPsEngineer" verifies Add policy button
             When "ITOPsEngineer" clicks on policy "<policyname>"
             When click on cancel button

        Examples:
                  | policyname            |
                  | AcknowledgementPolicy |