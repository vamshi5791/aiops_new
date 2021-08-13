@Login @ITOpsVisitor @Regression

Feature: Login with ITOps Visitor

Feature Description : Verifying Login functionality for ITOps Visitor
       
        Scenario Outline: Successful Login with ITOps Visitor
            Given User with ITOps role renders the URL
             When user enters Username as "<UserName>", Password as "<Password>" and clicks on Login button
             Then ITOps home page is displayed
        Examples:
                  | UserName    | Password |
                  | Itops_visitor | qa123    |