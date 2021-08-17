@AlertCorrelationPolicy @ITOps_Engineer @Regression

Feature: Alert Correlation Policy

        Scenario Outline: ITOPs Engineer should be able to check Alert Correlation Policy details

             When "ITOpsEngineer" navigates to ust home page
             When "ITOpsEngineer" enters project name as "<ProjectName>" in the search field
              And "ITOpsEngineer" clicks on project name "<ProjectName>"
             When "Itops_Engineer" navigate to Configuration section
              And "ITOPsEngineer" navigate to Alert Correlation Policy
             Then "ITOPsEngineer" verifies Add policy button
             When "ITOPsEngineer" clicks on policy "<policyname>"
             # And "Admin" clicks on edit icon in listing page "<PolicyName>"
              And click on cancel button

        Examples:
                  | policyname              | ProjectName      |
                  | AlertCorrelationPolicy2 | Automation_IB_16 |