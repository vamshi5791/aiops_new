@VerifyItopsDisplayUserNotAbleToDownloadTheAlerts  @ITOps_DisplayUser @Regression


Feature: Verify ITOps Display User Not Able To Download The Alerts

        Scenario Outline: Verify ITOps Display User Not Able To Download The Alerts


            # Given user opens itops application
            #   And "ITOps_DisplayUser" enters Username, Password and click on Login button "<Itops_UserName>", "<Itops_Password>"
             When "ITOpsDisplayUser" enters project name in project search feild "<projectName>"
              And "ITOpsDisplayUser" clicks on project name "<TestProjectName>"
              And ITOps_DisplayUser unable to find the Download Alerts button
              # And click on logout button


        Examples:
                  | Itops_UserName | Itops_Password | projectName   | TestProjectName |
                  | Itops_admin    | qa123          | Automation_02 | Automation_02   |



