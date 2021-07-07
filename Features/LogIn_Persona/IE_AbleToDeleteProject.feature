@IE_Deleting_Project


Feature: Login Persona Functionalities

     Scenario Outline: Installation Engineer is able to delete the project

          Given ITOps Installation Engineer is in the home page, "<UserName>", "<Password>"
          When IE click on three dots of a project "<ProjectName>"
          And IE click on delete project
          And IE click on yes
          Then Success message for Project is deleted must be shown as a toaster "<Toaster>"
          And click on logout button


          Examples:
               | UserName | Password | ProjectName | Toaster                      |
               | Itops_IE | qa123    | ProjectIB12 | Project Deleted Successfully |



