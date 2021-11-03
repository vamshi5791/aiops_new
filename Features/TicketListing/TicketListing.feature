@TicketListing @ITOps_Admin @Regression

Feature: Ticket Listing

    Scenario: Verify the ticket listing display page

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "admin" navigates to Tickets page
        Then "admin" verifies the ticket console must have "Ticket ID", "Title", "Priority", "Description"
        And "admin" verifies the ticket console also must have "Created Time And Date", "Updated Time And Date", "Category", "Status / Action"
        And "admin" verifies the created time and date, updated time and Date must have sort options
        And "admin" verifies the auto refresh and search options must be present
        And "admin" verifies the pagination and rows per page options must be present
        And "admin" verifies the quick filter option must be present

    Scenario Outline: Verify the ticket store is present in the project with tickets from ITOPS

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" verifies ticket status in "alert console" as "assigned"
        When "admin" navigates to Tickets page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" verifies ticket status in ticket console as "Assigned"

        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName |
            | Automation_01M3 | Solarwinds  | QueueChannel | IAMGSBC1 |


    Scenario: Verify the ticket store is present in the project with tickets from ServiceNow

        When "ITOps_Admin" Login to service now as ninetyone user and create a incident
        When "admin" navigates to Tickets page
        And "admin" enters "Ticket number" in ticket console and clicks on enter
        And "Admin" verifies ticket must be listed in Ticket console
        And "admin" clicks on Alerts page
        And "admin" enters "Ticket number" in ticket console and clicks on enter
        And "Admin" verifies ticket must not be available in alert console



    Scenario Outline: Verify the ticket store after re-assignment

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "admin" navigates to Tickets page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin click on state in ticket console
        And "admin" clicks on assign button
        And "admin" clicks on "Group" radio button
        And "admin" selects user from the team member drop down as "<Group>"
        And "admin" clicks on assign button on the popup
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        And "Admin" verifies ticket status in "ticket console" as "Open"
        And Admin click on state in ticket console
        And "Admin" verifies the options for the tickets in ticket store must have "Assign", "Assign"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" verifies ticket status in "alert console" as "ticketed"
        And Admin click on state
        And "Admin" verifies the options for the tickets in alert store must have "Hold", "Assign"

        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName        | Group            | SuccessMessage                |
            | Automation_01M3 | Solarwinds  | QueueChannel | ZADBNP-01A-SBC1 | Visibility - UST | Tickets assigned successfully |

#on hold

    # Scenario Outline: Verify the actions performed in alert store and ticket store are mutually applied-(Assign)

    #     When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
    #     When "admin" navigates to Tickets page
    #     And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
    #     And "Admin" clicks on the ticket number
    #     And "admin" clicks on "To Me" radio button
    #     And Admin click on state
    #     And "Admin" verifies the ticket store it must be assigned with 'Assigned to username'
    #     And "Admin" verifies the options for the tickets in ticket store
    #     And "admin" clicks on Alerts page
    #     And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
    #     And "Admin" verifies the alert store it must be assigned with 'assigned by username'

    #     Examples:
    #         | ProjectName     | ChannelName | channelJson  | NodeName        |
    #         | Automation_01M3 | Solarwinds  | QueueChannel | AUSYCT-28A-SBC1 |


    Scenario Outline: Verify the actions performed in alert store and ticket store are mutually applied(hold)

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "admin" navigates to Tickets page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin click on state in ticket console
        And "admin" clicks on "Hold" button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        And Admin click on state in ticket console
        And "Admin" verifies the options for the tickets in alert store must have "Assign", "Resolve"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        Then "admin" Verifies the Alert console for the particular ticket status as "on hold"
        And Admin click on state
        And "Admin" verifies the options for the tickets in alert store must have "Assign", "Close"

        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName        | SuccessMessage                |
            | Automation_01M3 | Solarwinds  | QueueChannel | ZADBNP-00A-FPA2 | Ticket(s) holded successfully |

    Scenario Outline: Verify the actions performed in alert store and ticket store are mutually applied(Resolve)

        When "admin" navigates to Tickets page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin click on state in ticket console
        And "admin" clicks on "Resolve" button
        And "admin" enters resolve note as "<ResolveNote>"
        And "admin" clicks on resolve button after entering closure note
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        And "admin" verifies the options for the tickets as "Resolved"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "admin" verifies the options for the tickets as "Closed"

        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName        | SuccessMessage               | ResolveNote    |
            | Automation_01M3 | Solarwinds  | QueueChannel | ZACTHS-03A-SSA2 | Ticket resolved successfully | Automation ust |





