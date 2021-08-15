@RecoveryPolicy @ITOpsEngineer @Regression


Feature: Recovery Policy
      
        Scenario Outline: ITOps Engineer should be able to check Recovery Policy details

            
              And "ITOpsEngineer" navigate to Recovery Policy
             Then "ITOpsEngineer" verifies Add policy button
             When "ITOpsEngineer" clicks on policy "<policyname>"
              And click on cancel button

        Examples:
                  | policyname      |
                  | RecoveryPolicy2 |