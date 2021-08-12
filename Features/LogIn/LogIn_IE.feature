@Login @ITOps_IE @Regression

Feature: Login with ITOpsIE

Feature Description : Verifying Login functionality for ITOpsIE
       
        Scenario Outline: Successful Login with ITOpsIE

            Given User with ITOps role renders the URL
             When user enters Username as "<UserName>", Password as "<Password>" and clicks on Login button
             Then ITOps home page is displayed

        Examples:
                  | UserName | Password |
                  | Itops_IE | qa123    |