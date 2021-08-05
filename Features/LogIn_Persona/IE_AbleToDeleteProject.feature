@IE_Deleting_Project @ITOps_Milestone_1


Feature: IE able to delete the project

        Scenario Outline: Installation Engineer is able to delete the project

            Given ITOps "IE" with username and password as "<UserName>", "<Password>" is in the home page
             When "IE" enters project name as "<projectName>" in the search field
             When "IE" clicks dot menu icon
              And "IE" clicks on delete project
              And "IE" clicks on yes
             Then Success message must be shown as "<Toaster>" once project is "deleted"
              And "IE" clicks on logout button


        Examples:
                  | UserName | Password | projectName | Toaster                      |
                  | Itops_IE | qa123    | test        | Project Deleted Successfully |



