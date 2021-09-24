@RecoveryPolicy @ITOpsEngineer @Regression


Feature: Recovery Policy
      
        Scenario Outline: ITOps Engineer should be able to check Recovery Policy details

            
             When "ITOpsEngineer" navigate to Recovery Policy
              And "ITOpsEngineer" clicks on policy "<policyname>"
            And "ITOpsEngineer" must be able to see the policy and rules in read only mode
              And click on cancel button

        Examples:
                  | policyname      |
                  | RecoveryPolicy2 |