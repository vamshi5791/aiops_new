@IE_Disabling_Project


Feature:Login Persona Functionalities

    Scenario Outline: Installation Engineer is able to disable the project

        Given ITOps Installation Engineer is in the home page, "<UserName>", "<Password>"
        When IE clicks on three dots of a project "<ProjectName>"
        When IE clicks on deactivate project
        When IE clicks on yes
        Then Success message for Project is disabled must be shown as a toaster "<Toaster>"
        And click on logout button

        Examples:
            | UserName | Password | ProjectName    | Toaster                          |
            | Itops_IE | qa123    | ProTestTestTSIV | Project Deactivated Successfully |



