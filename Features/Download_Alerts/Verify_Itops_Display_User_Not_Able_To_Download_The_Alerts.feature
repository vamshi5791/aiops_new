@Verify_Itops_Display_User_Not_Able_To_Download_The_Alerts  @ITOps_Milestone_2

Feature: Verify_Itops_Display_User_Not_Able_To_Download_The_Alerts

        Scenario Outline: Verify_Itops_Display_User_Not_Able_To_Download_The_Alerts


            Given user opens itops application
              And "ITOps_DisplayUser" enters Username, Password and click on Login button "<Itops_UserName>", "<Itops_Password>"
             When "ITOps_DisplayUser" enters project name in project search feild "<projectName>"
              And "Admin" clicks on project name "<TestProjectName>"
              And ITOps_DisplayUser unable to find the Download Alerts button
              And click on logout button


        Examples:
                  | Itops_UserName | Itops_Password | projectName   | TestProjectName |
                  | Itops_admin    | qa123          | Automation_02 | Automation_02   |



