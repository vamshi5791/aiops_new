@IE_Disabling_Project @ITOps_Milestone_1


Feature: IE able to disable the Project

        Scenario Outline: Installation Engineer is able to disable the project

            Given ITOps "IE" with username and password as "<UserName>", "<Password>" is in the home page
              When "IE" enters project name as "<projectName>" in the search field
             When "IE" clicks dot menu icon
             When "IE" clicks on deactivate project
             When "IE" clicks on yes
             Then Success message for Project is "disabled" must be shown as a toaster "<Toaster>"
              And "IE" clicks on logout button

        Examples:
                  | UserName | Password | ProjectName    | Toaster                          |
                  | Itops_IE | qa123    | Automation_IB_06 | Project Deactivated Successfully |



