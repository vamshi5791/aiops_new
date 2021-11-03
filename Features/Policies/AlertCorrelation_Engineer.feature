@AlertCorrelationPolicy @ITOps_Engineer @Regression

Feature: Alert Correlation Policy

        Scenario Outline: ITOPs Engineer should be able to check Alert Correlation Policy details

  
             When "Itops_Engineer" navigate to Configuration section
              And "ITOPsEngineer" navigate to Alert Correlation Policy
             When "ITOPsEngineer" clicks on policy "<policyname>"
            And "ITOpsEngineer" must be able to see the policy and rules in read only mode
              And click on cancel button

        Examples:
                  | policyname              | ProjectName      |
                  | AlertCorrelationPolicy2 | Automation_IB_24 |