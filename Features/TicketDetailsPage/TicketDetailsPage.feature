@TicketDetailsPage @ITOps_Admin @Regression

Feature: Ticket Details page

    Scenario: Verify the ticket details page

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "admin" navigates to Tickets page
        When "Admin" clicks on the ticket number in ticket console
        Then "admin" verifies the ticket id
        Then "admin" verifies the close icon after ticket id
        Then "admin" verifies the page must have "STATUS"
        Then "admin" verifies the page must have "LAST UPDATED TIME"
        Then "admin" verifies the page must have "LAST UPDATED BY"
        Then "admin" verifies the page must have "ASSIGNED TO"
        Then "admin" verifies the page must have "Description"
        Then "admin" verifies the page must have Conversation tab
        Then "admin" verifies the page must have "Assigned To"
        Then "admin" verifies the page must have "Similar Tickets"

    Scenario: Navigation to ticket details page

        When "admin" navigates to Tickets page
        When "Admin" clicks on the ticket number in ticket console
        Then "admin" verifies the Ticket details page must be opened as a new tab
        And "admin" clicks on Alerts page
        When "Admin" clicks on the ticket number
        Then "admin" verifies the Ticket details page must be opened as a new tab


    Scenario: Priority field in ticket details page

        When "admin" navigates to Tickets page
        When "Admin" get the ticket number from ticket console
        Then "admin" update the impact status to "High" and urgency status to "High" in service now
        Then "admin" verifies the priority must be "1 - Critical"


    Scenario: Ticket status in Status tab in ticket details page

        When "admin" navigates to Tickets page
        When "Admin" get the ticket number from ticket console
        And "admin" enters the ticket number in search field
        Then "admin" gets the status of ticket
        When "Admin" clicks on the ticket number in ticket console
        Then "admin" verifies the status must have same status


    Scenario: Actions available in the Status tab in the ticket details page

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Open"
        And Admin click on state in ticket console
        Then "Admin" verifies ticket status in alert console as "Assign"

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        And Admin click on state in ticket console
        Then "Admin" verifies ticket status in alert console as "Assign"
        Then "Admin" verifies ticket status in alert console as "Hold"
        Then "Admin" verifies ticket status in alert console as "Resolve"

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "On Hold"
        And Admin click on state in ticket console
        Then "Admin" verifies ticket status in alert console as "Assign"
        Then "Admin" verifies ticket status in alert console as "Resolve"

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Resolved"
        Then "Admin" verifies ticket status in alert console as "Resolved"

    Scenario Outline: Title,last updated time , Last updated by , assigned to tab ,Description , Conversation in the ticket details page

        When "admin" navigates to Tickets page
        And "Admin" enters "Ticket Number" and clicks on enter "<TicketNumber>"
        Then "admin" verifies the last updated time in ticket details page with the time in activities section in the servicenow ticket "<TicketNumber>"
        And "admin" verifies the Assigned to in ticket details page with the assignment Group and assigned To in the servicenow ticket "itops_admin"
        When "Admin" clicks on the ticket number in ticket console
        Then "admin" verifies the page must have "Similar Tickets"
        

        Examples:
            | TicketNumber |
            | INC0825301   |

    Scenario Outline: Verify the 'Assign' from Status tab in ticket details page

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        When "Admin" get the ticket number from ticket console
        And "admin" enters the ticket number in search field
        And Admin click on state in ticket console
        And "admin" clicks on "Assign" button
        And "admin" clicks on "Individual" radio button
        And "admin" selects user from the team member drop down as "<Group>", "<TeamMember>"
        And "admin" clicks on assign button on the popup
        Then "Admin" verifies if "<Toaster>" message is displayed
        When "Admin" clicks on the ticket number in ticket console
        Then "Admin" verifies Ticket should be assigned to group "<Group>"
        Then "Admin" verifies Ticket should be assigned to TeamMember "<TeamMember>"

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        When "Admin" get the ticket number from ticket console
        And "admin" enters the ticket number in search field
        And Admin click on state in ticket console
        And "admin" clicks on "Assign" button
        And "admin" clicks on "Group" radio button
        And "admin" selects user from the team member drop down as "<Group>"
        And "admin" clicks on assign button on the popup
        Then "Admin" verifies if "<Toaster>" message is displayed
        When "Admin" clicks on the ticket number in ticket console
        Then "Admin" verifies Ticket should be assigned to group "<Group>"

        Examples:
            | Group            | TeamMember      | Toaster                       |
            | Visibility - UST | Amjathsha Abdul | Tickets assigned successfully |


    Scenario Outline: Verify the 'Hold' from Status tab in ticket details page

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        And Admin click on state in ticket console
        And "admin" clicks on "Hold" button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        When "Admin" clicks on the ticket number in ticket console
        Then "admin" verifies the status must have "On Hold" in ticket details page

        Examples:
            | SuccessMessage                |
            | Ticket(s) holded successfully |

    Scenario Outline: Verify the 'Resolve' from Status tab in ticket details page

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        And Admin click on state in ticket console
        And "admin" clicks on "Resolve" button
        And "admin" enters resolve note as "<ResolveNote>"
        And "admin" clicks on resolve button after entering closure note
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        When "Admin" clicks on the ticket number in ticket console
        Then "admin" verifies the status must have "Resolved" in ticket details page

        Examples:
            | SuccessMessage               | ResolveNote    |
            | Ticket resolved successfully | Automation ust |

    Scenario Outline: Verify Similar tickets tab in ticket details page - AIOps View

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"

        When "admin" navigates to Tickets page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin click on state in ticket console
        And "admin" clicks on "Assign" button
        And "admin" clicks on "Individual" radio button
        And "admin" selects user from the team member drop down as "<Group>", "<TeamMember>"
        And "admin" clicks on assign button on the popup
        Then "Admin" verifies if "<Toaster>" message is displayed

        When "admin" navigates to Tickets page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin click on state in ticket console
        And "admin" clicks on "Resolve" button
        And "admin" enters resolve note as "<ResolveNote>"
        And "admin" clicks on resolve button after entering closure note
        Then "Admin" verifies if "<SuccessMessage>" message is displayed

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NewNodeName>"
        When "admin" navigates to Tickets page
        And "Admin" enters "NodeName" and clicks on enter "<NewNodeName>"
        When "Admin" clicks on the ticket number in ticket console
        Then "admin" verifies the page must have "Similar Tickets"
        Then "admin" verifies similar tickets tab has "TICKET ID" and "TITLE"
        When "Admin" gives right click on the ticket id and click on the Open link in new tab

        Examples:
            | ProjectName   | ChannelName | channelJson      | NodeName      | Toaster                       | SuccessMessage               | Group            | TeamMember      | NewNodeName     |
            | Automation_M3 | Solarwinds  | alertNameChannel | IAMCTUFPRDDC1 | Tickets assigned successfully | Ticket resolved successfully | Visibility - UST | Amjathsha Abdul | IAMCFSCPRDDC1-1 |

    Scenario Outline: Similar ticket details from ticket details page - AIOps Desk/Resolve

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "admin" navigates to Tickets page
        And "Admin" enters "NodeName" and clicks on enter "<NewNodeName>"
        When "Admin" clicks on the ticket number in ticket console
        Then "admin" verifies the page must have "Similar Tickets"
        Then "admin" verifies similar tickets tab has "TICKET ID" and "TITLE"
        When "Admin" gives right click on the ticket id and click on the Open link in new tabS

        Examples:
            | ProjectName   | ChannelName | channelJson      | NodeName      | Toaster                       | SuccessMessage               | Group            | TeamMember      | NewNodeName     |
            | Automation_M3 | Solarwinds  | alertNameChannel | IAMCTUFPRDDC1 | Tickets assigned successfully | Ticket resolved successfully | Visibility - UST | Amjathsha Abdul | IAMCFSCPRDDC1-1 |