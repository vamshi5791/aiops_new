@TicketDetailsPage @ITOps_IE @Regression

Feature: Ticket Details page

    Scenario: Verify ITOPS IE don't have access to ticket details page

        When "IE" navigates to ITOps home page
        And "IE" enters project name in project search field and click on enter
        And "IE" clicks on project name
        Then "IE" verifies the Tickets page