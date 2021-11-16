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
        And "admin" selects filter by status type as "On Hold"
        And "admin" selects filter by status type as "Resolved"
        And "Admin" clicks on filter by priority dropdown
        And Admin selects moderate filter
        And Admin selects Low filter
        And "Admin" removes the Ticket "RemoveTicketPriority"
        And "Admin" removes the Ticket "RemoveTicketState"
        And "Admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "ITOps_Admin" clicks on remove all button
        And "Admin" clicks on Quick filter icon
        When "Admin" clicks on quick filter dropdown
        And "Admin" verifies the "2""nd" quick filter Option as "Open"
        And "Admin" verifies the "4""th" quick filter Option as "Assigned"
        And "Admin" verifies the "6""th" quick filter Option as "On Hold"
        And "Admin" verifies the "8""th" quick filter Option as "Resolved"
        And "admin" selects filter by status type as "On Hold"
        And "Admin" enters "TicketNumber" and clicks on enter "<TicketNumberOnHold>"

        Examples:
            | TicketNumber | RemoveTicketPriority | RemoveTicketState | TicketNumberOnHold |
            | INC0831771   | 4 - Low              | Resolved          | INC0831771         |

