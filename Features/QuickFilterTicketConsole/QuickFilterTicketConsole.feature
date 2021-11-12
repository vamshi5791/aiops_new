@QuickFilterTicketConsole @ITOps_Admin @Regression

Feature:  Verify Quick filter on Ticket Console and order of ticket state

    Feature Description:  Verify Quick filter on Ticket Console and order of ticket state

    Scenario Outline: Verify Quick filter on Ticket Console and order of ticket state

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "admin" navigates to Tickets page
        And "Admin" clicks on advanced filter icon
        When "Admin" clicks on quick filter dropdown
        And "admin" selects filter by status type as "On Hold"
        And "admin" selects filter by status type as "Resolved"
        And "Admin" clicks on filter by priority dropdown
        And Admin selects critical filter
        And Admin selects high filter
        And "Admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "ITOps_Admin" clicks on remove all button
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "On Hold"
        And "Admin" clicks on filter by priority dropdown
        And Admin selects critical filter



        Examples:
            | TicketNumber |
            | INC0822555   |

