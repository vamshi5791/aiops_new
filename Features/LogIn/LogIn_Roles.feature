@LogIn @ITOps_Milestone_1
Feature: Login with all ITOps user roles

Feature Description : Verifying Login functionality for all ITOps user roles

        Scenario Outline: Successful Login with ITOps user roles

            Given User with ITOps role renders the URL
             When user enters Username as "<UserName>", Password as "<Password>" and clicks on Login button
             Then ITOps home page is displayed
              And "user" clicks on logout button

        Examples:
                  | UserName | Password |
                  | Itops_IE | qa123    |
                  | Itops_admin_new   | qa123    |
                  | Itops_visitor     | qa123    |
                  | Itops_displayuser | qa123    |
                  | Itops_engineer    | qa123    |

