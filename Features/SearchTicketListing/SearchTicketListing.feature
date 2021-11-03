@ITOps_Admin @Regression

Feature: Search - Ticket Listing

    Scenario Outline: Verify user able to search ticket console with key attributes

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "admin" navigates to Tickets page

        Then "Admin" verifies search box is available to perform search operation
        And "Admin" enters "Title" and clicks on enter "<Title>"
        Then "Admin" verifies data should be displayed as per search keyword "<Title>"
        Examples:
            | Title                       |
            | [ Solarwinds ] automationib |
