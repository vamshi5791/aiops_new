@ITSMComments @ITOps_Admin @Regression

Feature: Comments in ITSM

    Scenario Outline: Verify comments in ITSM when user performed assign

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "admin" navigates to Tickets page

        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        When "Admin" get the ticket number from ticket console

        And "admin" enters the ticket number in search field
        And Admin click on state in ticket console
        And "admin" clicks on assign button
        And "admin" clicks on "Individual" radio button
        And "admin" selects user from the team member drop down as "<Group>", "<TeamMember>"
        And "admin" clicks on assign button on the popup
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" verifies comments in ITSM assigned by "itops_admin" for "<TicketNumber>"

        Examples:
            | Group            | SuccessMessage                | TeamMember      | TicketNumber |
            | Visibility - UST | Tickets assigned successfully | Amjathsha Abdul | INC0825300   |

    Scenario Outline: Verify comments in ITSM when user performed hold

        And Admin click on state in ticket console
        And "admin" clicks on "Hold" button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed

        Then "admin" verifies comments in ITSM updated by "itops_admin" for "<TicketNumber>"

        Examples:
            | NodeName             | SuccessMessage                | TicketNumber |
            | IAMLWLCPRDDC1-LD6-RP | Ticket(s) holded successfully | INC0826605   |

    Scenario Outline: Verify comments in ITSM when user performed resolve

        And Admin click on state in ticket console
        And "admin" clicks on "Resolve" button
        And "admin" enters resolve note as "<ResolveNote>"
        And "admin" clicks on resolve button after entering closure note
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" verifies comments in ITSM resolved by "itops_admin" for "<TicketNumber>"

        Examples:
            | NodeName             | SuccessMessage               | ResolveNote    | TicketNumber |
            | IAMLWLCPRDDC1-LD6-RP | Ticket resolved successfully | Automation ust | INC0825315   |































