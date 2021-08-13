@RefreshOption  @ITOps_Admin @Regression

Feature:  Refresh Option
 
Feature Description: User navigates to Alert Console page, enters refresh value in minutes
              and verifies that page gets refreshed on mention value

        Scenario Outline: Verify Auto Refresh functionality
              And "Admin" clicks on Alerts page
              And "Admin" enters value "<Value>" in auto refresh textbox
              And "Admin" clicks on tick button
             Then verify a success message should be displayed "<Toaster>"
              And verify that page gets refreshed on every "<Value>" minutes and data got added if any
        Examples:
                  | UserName    | Password | ProjectName   | Value | Toaster              |
                  | Itops_admin | qa123    | Automation_02 | 1     | Auto refresh enabled |

