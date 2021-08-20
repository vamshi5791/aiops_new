@RefreshOption @ITOps_Milestone_2 @Regression @ITOps_Admin
Feature:  Refresh Option
 
Feature Description: User navigates to alert console page, enters refresh value in minutes
              and verifies that page gets refreshed on mention value

        Scenario Outline: Verify auto refresh functionality
           
             When "admin" clicks on Alerts page
              And "ITOps_Admin" enters value "<Value>" in auto refresh textbox
              And "ITOps_Admin" clicks on tick button
             Then verify a success message should be displayed "<Toaster>"
              And verify that page gets refreshed on every "<Value>" minutes and data got added if any
             

        Examples:
                  | UserName    | Password | ProjectName   | Value | Toaster              |
                  | Itops_admin | qa123    | Automation_02 | 1     | Auto refresh enabled |

