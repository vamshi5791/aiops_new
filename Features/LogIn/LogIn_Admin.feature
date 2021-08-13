@Login @ITOps_Admin @Regression

Feature: Login with ITOpsAdmin

Feature Description : Verifying Login functionality for ITOpsAdmin
       
        Scenario Outline: Successful Login with ITOpsAdmin
            Given User with ITOps role renders the URL
             When user enters Username as "<UserName>", Password as "<Password>" and clicks on Login button
             Then ITOps home page is displayed
        Examples:
                  | UserName    | Password |
                  | Itops_admin | qa123    |