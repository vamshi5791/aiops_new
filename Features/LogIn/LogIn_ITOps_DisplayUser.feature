@Login @ITOps_DisplayUser @Regression

Feature: Login with ITOps Display User

Feature Description : Verifying Login functionality for ITOps Display User
       
        Scenario Outline: Successful Login with ITOps Display User
            Given User with ITOps role renders the URL
             When user enters Username as "<UserName>", Password as "<Password>" and clicks on Login button
             Then ITOps home page is displayed
        Examples:
                  | UserName          | Password |
                  | Itops_displayuser | qa123    |