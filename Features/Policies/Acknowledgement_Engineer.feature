@AcknowledgementPolicy @ITOps_Engineer @Regression

Feature: Verify Acknowledgement Policy
      
        Scenario Outline: ITOPs Engineer should be able to check Acknowledgement Policy details

            
             When "Itops_Engineer" navigate to Configuration section
              And "ITOpsEngineer" navigate to Acknowledgement Policy
             When "ITOpsEngineer" clicks on policy "<policyname>"
              And click on cancel button

        Examples:
                  | policyname             |
                  | AcknowledgementPolicy2 |