@ITOps_Engineer @Regression

Feature: Alert Correlation Policy
      
        Scenario Outline: ITOPs Engineer should be able to check Alert Correlation Policy details

            
              And "ITOPsEngineer" clicks on configuration
              And "ITOPsEngineer" navigate to Alert Correlation Policy
             Then "ITOPsEngineer" verifies Add policy button
             When "ITOPsEngineer" clicks on policy "<policyname>"
             When click on cancel button

        Examples:
                  | policyname            |
                  | AcknowledgementPolicy |