@SeverityDropdown @ITOps_Milestone_2 @Regression @ITOps_Admin
Feature:  SeverityDropdown


      Scenario Outline:Verify search operation on top of severity condition from severity drop down

            When "admin" clicks on Alerts page
            Then "admin" clicks on filter by severity dropdown
            And "admin" selects severity condition as "<Severity>"
            And "admin" enters "AlertName" and clicks on enter "<AlertName>"
            Then "admin" verifies search should be performed on top of the severity filter applied "<Severity>"

            Examples:
                  | UserName    | Password | ProjectName     | AlertName | Toaster              | Severity |
                  | Itops_admin | qa123    | Automation_01M3 | alert 01  | Auto refresh enabled | Minor    |

      Scenario Outline: Verify applied severity condition will be there after auto refresh


            And "admin" clicks on Alerts page
            Then "admin" clicks on filter by severity dropdown
            And "admin" selects severity condition as "<Severity>"
            And "admin" clicks on auto refresh button
            Then "admin" verifies that applied severity condition should be there after refresh also "<Severity>"

            Examples:
                  | Severity |
                  | Minor    |