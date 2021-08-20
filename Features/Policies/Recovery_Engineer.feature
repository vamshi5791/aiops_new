@RecoveryPolicy @ITOpsEngineer @Regression


Feature: Recovery Policy
      
        Scenario Outline: ITOps Engineer should be able to check Recovery Policy details

            
             When "ITOpsEngineer" navigate to Recovery Policy
              And "ITOpsEngineer" clicks on policy "<policyname>"
              And click on cancel button

        Examples:
                  | policyname      |
                  | RecoveryPolicy2 |