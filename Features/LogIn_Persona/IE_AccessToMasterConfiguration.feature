@IE_Accessing_Master_Configuration_Page @ITOps_Milestone_1 @MasterConfiguration

Feature: Installation Engineer is able to access the master configuration page

    Scenario Outline:   Installation Engineer is able to access the master configuration page

        Given ITOps "IE" with username and password as "<UserName>", "<Password>" is in the home page
        When "IE" clicks on edit configuration button
        Then user is taken to the master configuration page "<MasterText>"
        And "IE" clicks on logout button

        Examples:
            | UserName | Password | MasterText           |
            | Itops_IE | qa123    | Master Configuration |

