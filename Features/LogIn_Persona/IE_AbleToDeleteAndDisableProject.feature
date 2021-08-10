@IEDeteleAndDiableProjects  @ITOps_Milestone_2


Feature:IE able to delete and disable the project

        Background:

            Given ITOps "Installation Engineer" is in the home page, "<UserName>", "<Password>"
             When "IE" enters project name in project search feild "<projectName>"
             When "IE" click dotmenu icon

        @IE_Deleting_Project

        Scenario Outline: Installation Engineer is able to delete the project

              And "IE" click on delete project
              And "IE" clicks on yes
             Then Success message for Project is "deleted" must be shown as a toaster "<Toaster>"
              And click on logout button

        Examples:
                  | UserName | Password | projectName      | Toaster                      |
                  | Itops_IE | qa123    | Automation_IB_01 | Project Deleted Successfully |


        @IE_Disabling_Project

        Scenario Outline: Installation Engineer is able to disable the project

             When "IE" clicks on deactivate project
             When "IE" clicks on yes
             Then Success message for Project is "disabled" must be shown as a toaster "<Toaster>"
              And click on logout button

        Examples:
                  | UserName | Password | ProjectName   | Toaster                          |
                  | Itops_IE | qa123    | Automation_09 | Project Deactivated Successfully |