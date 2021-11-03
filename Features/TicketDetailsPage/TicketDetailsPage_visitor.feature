@TicketDetailsPage @ITOps_Visitor @Regression

Feature: Ticket Details page

    Scenario: Verify ITOPS Visitor don't have access to ticket details page

        When "ITOps_Visitor" navigates to ITOps home page
        And "ITOps_Visitor" enters project name in project search field and click on enter
        And "ITOps_Visitor" clicks on project name
        Then "ITOps_Visitor" verifies the Tickets page