@QuickFilterTicketConsole @ITOps_Admin @Regression

Feature:  Verify Quick filter on Ticket Console and order of ticket state

    Feature Description:  Verify Quick filter on Ticket Console and order of ticket state

    Scenario Outline: Verify Quick filter on Ticket Console and order of ticket state

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "admin" navigates to Tickets page
        And "admin" verify QuickFilter is present on ticket listing page
        And "admin" Clear the existing filters
        And "Admin" clicks on Quick filter icon
        When "Admin" clicks on quick filter dropdown
        And "admin" selects filter by status type "On Hold"
        And "admin" selects filter by status type "Resolved"
        And "Admin" clicks on filter by priority dropdown
        And Admin selects moderate filter
        And Admin selects Low filter
        And "Admin" closes the quick filter drop down
        Then "admin" verifies created ticket in alert console
        And "Admin" verifies the selected filters "On Hold" are present in chip
        And "Admin" verifies the selected filters "Resolved" are present in chip
        And "Admin" verifies the selected filters "3 - Moderate" are present in chip
        And "Admin" verifies the selected filters "4 - Low" are present in chip
        When "Admin" removes the Ticket "<RemoveTicketPriority>"
        And "Admin" removes the Ticket "<RemoveTicketState>"
        And "Admin" enters "TicketNumber" and clicks on enter "<ResolvedTicketNum>"
        Then "admin" verifies that ticket should not be created in alert console
        When "Admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        Then "admin" verifies that ticket should not be created in alert console
        When "ITOps_Admin" clicks on remove all button
        And "Admin" clicks on Quick filter icon
        Then "admin" clicks on the filter by status type dropdown
        And "Admin" verifies the "2""nd" quick filter Option as "Open"
        And "Admin" verifies the "4""th" quick filter Option as "Active"
        And "Admin" verifies the "6""th" quick filter Option as "On Hold"
        And "Admin" verifies the "8""th" quick filter Option as "Resolved"
        And "admin" selects filter by status type as "On Hold"
        And "admin" clicks on the filter by priority type dropdown
        And "Admin" closes the quick filter drop down
        And "Admin" enters "TicketNumber" and clicks on enter "<TicketNumberOnHold>"
        And "Admin" verifies the priority as "<priority>" and state as "<state>"

        Examples:
            | TicketNumber | RemoveTicketPriority | RemoveTicketState | TicketNumberOnHold | priority | state   | ResolvedTicketNum |
            | INC0831771   | Resolved             | 4 - Low           | INC0831837         | 4-Low    | On Hold | INC0833057        |

