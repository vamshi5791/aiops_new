@ITOpsAdmin_Accessing_Master_Configuration_Page @ITOps_Milestone_1 @MasterConfiguration

Feature: ITOps Admin is able to access the master configuration page

        Scenario Outline: ITOps Admin is able to access the master configuration page

            Given ITOps "Admin" with username and password as "<UserName>", "<Password>" is in the home page
            When ITOps "Admin" clicks on edit configuration button
            Then "Admin" is taken to the master configuration page "<MasterText>"
            And "Admin" clicks on logout button

        Examples:
                  | UserName    | Password | MasterText           |
                  | Itops_admin | qa123    | Master Configuration |

