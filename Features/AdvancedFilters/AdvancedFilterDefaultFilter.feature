@Advanced @ITOps_Milestone_2 @Regression
Feature:  Advanced Filter

Feature Description : Verify creating default filter for Alert Console
        @AdvancedCreatingDefaultFilter
        Scenario Outline:Verify creating default filter for Alert Console
            Given ITOps "admin" with username and password as "<UserName>", "<Password>" is in the home page
             When "Admin" enters project name as "<ProjectName>" in the search field
              And "admin" clicks on project name "<ProjectName>"
              And "admin" clicks on Alerts page
             When "admin" clicks on advanced filter icon
              And "admin" enters source as "<Source>" and alert state as "<Alert_State>"
              And "admin" clicks on Save filter button
              And "admin" enters filter name as "<FilterName>" and Description as "<Description>"
              And "admin" clicks on Make as default checkbox
              And "admin" clicks on save and apply button
             Then "admin" verifies if "<SuccessMessage>" message is displayed
              And verify alert console should show results based on default filter applied
              And "Installation Engineer" clicks on logout button
            Given ITOps "admin" with username and password as "<DifferentUserName>", "<Password>" is in the home page
             When "Admin" enters project name as "<ProjectName>" in the search field
              And "admin" clicks on project name "<ProjectName>"
              And "admin" clicks on Alerts page
             Then verify alert console should show results based on default filter applied
              And "Installation Engineer" clicks on logout button
            Given ITOps "admin" with username and password as "<UserName>", "<Password>" is in the home page
             When "Admin" enters project name as "<ProjectName>" in the search field
              And "admin" clicks on project name "<ProjectName>"
              And "admin" clicks on Alerts page
             Then verify alert console should not show results based on previous default filter.
        Examples:
                  | UserName    | Password | ProjectName      | Source     | Alert_State | FilterName   | Description | SuccessMessage             | DifferentUserName |
                  | Itops_admin | qa123    | Automation_IB_16 | Solarwinds | Ticketed    | Automation12 | Value 2     | Filter saved successfully. | Itops_engineer    |
