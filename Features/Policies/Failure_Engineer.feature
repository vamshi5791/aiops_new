@FailurePolicy @ITOps_Engineer @Regression

Feature: Failure Policy
      
        Scenario Outline: ITOps Engineer should be able to check Failure Policy details

            
            
              And "ITOpsEngineer" navigate to Failure Policy
             When "ITOpsEngineer" clicks on policy "<policyname>"
              And click on cancel button

        Examples:
                  | policyname     |
                  | FailurePolicy2 |