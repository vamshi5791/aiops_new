@ITOps_Admin
Feature: Login with all ITOps user roles

Feature Description : Verifying Login functionality for all ITOps user roles
       
        Scenario Outline: Successful Login with ITOps user roles

            Given User with ITOps role renders the URL
             When user enters Username as "<UserName>", Password as "<Password>" and clicks on Login button
             Then ITOps home page is displayed

        Examples:
                  | UserName    | Password |
                  | Itops_admin | qa123    |