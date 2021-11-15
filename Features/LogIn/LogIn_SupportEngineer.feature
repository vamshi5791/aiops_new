@Login @ITOpsSupportEngineer @Regression

Feature: Login with ITOps Support Engineer

    Feature Description : Verifying Login functionality for ITOps Support Engineer

    Scenario Outline: Successful Login with ITOps Support Engineer

        Given User with ITOps role renders the URL
        When user enters Username as "<UserName>", Password as "<Password>" and clicks on Login button
        Then ITOps home page is displayed

        Examples:
            | UserName      | Password |
            | Itops_support | qa123    |