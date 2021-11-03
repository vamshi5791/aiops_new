@TicketListing @ITOps_Admin @Regression

Feature: Ticket Listing

    Scenario: Verify the ticket listing display page - Installation Engineer

        When "ITOps_IE" navigates to ITOps home page
        And "ITOps_IE" enters project name in project search field and click on enter
        And "ITOps_IE" clicks on project name
        Then "ITOps_IE" verifies the Tickets page