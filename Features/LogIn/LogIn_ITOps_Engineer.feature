@Login @ITOpsEngineer @Regression

Feature: Login with ITOps Engineer

Feature Description : Verifying Login functionality for ITOps Engineer
       
        Scenario Outline: Successful Login with ITOps Engineer
            Given User with ITOps role renders the URL
             When user enters Username as "<UserName>", Password as "<Password>" and clicks on Login button
             Then ITOps home page is displayed
        Examples:
                  | UserName       | Password |
                  | Itops_engineer | qa123    |