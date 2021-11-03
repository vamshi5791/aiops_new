@TicketListing @ITOps_Admin @Regression

Feature: Ticket Listing

    Scenario: Verify the ticket listing display page - ITOPS visitor

        When "ITOps_visitor" navigates to ITOps home page
        And "ITOps_visitor" enters project name in project search field and click on enter
        And "ITOps_visitor" clicks on project name
        Then "ITOps_visitor" verifies the Tickets page