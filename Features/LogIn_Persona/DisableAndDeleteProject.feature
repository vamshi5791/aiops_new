@ITOps_Milestone_1 @ITOps_IE @DisableAndDelete

Feature: IE disable and delete the Project for IE role

        @IE_Disabling_Project
        Scenario Outline: Installation Engineer is able to disable the project

            Given ITOps "IE" with username and password as "<UserName>", "<Password>" is in the home page
             When "IE" enters project name as "<ProjectName>" in the search field
             When "IE" clicks dot menu icon
              And "IE" clicks on deactivate project
              And "IE" clicks on yes
             Then Success message "<Toaster>" must be shown once project is "disabled"
              And "IE" clicks on logout button
 
        Examples:
                  | UserName | Password | ProjectName      | Toaster                          |
                  | Itops_IE | qa123    | Automation_IB_03 | Project Deactivated Successfully |

        @IE_Deleting_Project
        Scenario Outline: Installation Engineer is able to delete the project

            Given ITOps "IE" with username and password as "<UserName>", "<Password>" is in the home page
             When "IE" enters project name as "<projectName>" in the search field
             When "IE" clicks dot menu icon to delete project
              And "IE" clicks on delete project
              And "IE" clicks on yes
             Then Success message "<Toaster>" must be shown once project is "deleted"
              And "IE" clicks on logout button

        Examples:
                  | UserName | Password | projectName      | Toaster                      |
                  | Itops_IE | qa123    | Automation_IB_12 | Project Deleted Successfully |



