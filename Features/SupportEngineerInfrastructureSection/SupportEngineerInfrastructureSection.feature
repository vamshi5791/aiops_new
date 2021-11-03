@TicketDetailsPage @ITOps_IE @Regression

Feature: Support Engineer to Infrastructure Section/Configuration Section/Alert Console

    Scenario: verify support engineer user having view access to infrastructure section/Configuration section - AI Resolve

        When "suport_engineer" navigates to ITOps home page
        And "suport_engineer" enters project name in project search field and click on enter
        And "suport_engineer" clicks on project name
        Then "suport_engineer" able to access alerts section

        Then "suport_engineer" able to access Tickets section
        Then "suport_engineer" able to access infrastructure section
        Then "suport_engineer" able to access configuration section
