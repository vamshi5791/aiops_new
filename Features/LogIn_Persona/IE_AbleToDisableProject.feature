@IE_Disabling_Project @ITOps_Milestone_1


Feature: IE able to disable the Project

        Scenario Outline: Installation Engineer is able to disable the project

            Given ITOps "IE" with username and password as "<UserName>", "<Password>" is in the home page
            When "IE" enters project name as "<ProjectName>" in the search field
            When "IE" clicks dot menu icon
            And "IE" clicks on deactivate project
            And "IE" clicks on yes
            Then Success message must be shown as "<Toaster>" once project is "disabled"
            And "IE" clicks on logout button
 
        Examples:
                  | UserName | Password | ProjectName    | Toaster                          |
                  | Itops_IE | qa123    | Automation_IB_010 | Project Deactivated Successfully |



