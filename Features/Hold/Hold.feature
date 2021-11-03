@Hold @ITOps_Admin @Regression

Feature: Hold

    Scenario Outline: Hold

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin click on state
        And "admin" clicks on "Hold" button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        When "admin" clicks on refresh button in alert console
        Then "admin" Verifies the Alert console for the particular ticket status as "on hold"

        Examples:
            | ProjectName     | TicketNumber | SuccessMessage                | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | INC0820433   | Ticket(s) holded successfully | Solarwinds  | QueueChannel2 | ZACTHS-03A-SSA1 |


    Scenario Outline: Hold from select all

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "admin" clicks on the checkbox of the ticket
        And "admin" clicks on 3 dots in top left
        And "admin" clicks on "Hold" button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        When "admin" clicks on refresh button in alert console
        Then "admin" Verifies the Alert console for the particular ticket status as "on hold"
        And "admin" clicks on the checkbox of the ticket
        And "admin" clicks on 3 dots in top left
        Then "admin" verifies "State/Action" should have further actions like "Assign", "Close"

        Examples:
            | ProjectName     | TicketNumber | SuccessMessage                | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | INC0820433   | Ticket(s) holded successfully | Solarwinds  | QueueChannel2 | GBLNGS-LGA-SUA1 |

    Scenario Outline: Hold - in ServieNow


        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin click on state
        And "admin" clicks on "Hold" button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        When "admin" clicks on refresh button in alert console
        Then "admin" Verifies the Alert console for the particular ticket status as "on hold"
        And "Admin" gets the ticket number from alert console
        Then "admin" verifies the ticket status in service now "On Hold"
        Examples:
            | ProjectName     | TicketNumber | SuccessMessage                | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | INC0820433   | Ticket(s) holded successfully | Solarwinds  | QueueChannel2 | GGSPDC-01A-AOB1 |

    Scenario Outline: Hold to close

        When "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin click on state
        And "admin" clicks on "Close" button
        When "admin" enters closure note as "<ClosureNote>" and click on Ok
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        And "Admin" gets the ticket number from alert console
        Then "admin" verifies the ticket closure note in service now "<ClosureNote>"
        Examples:
            | ProjectName     | SuccessMessage                | ClosureNote     | NodeName        |
            | Automation_01M3 | Alerts(s) closed successfully | Automation Test | GGSPDC-01A-AOB1 |
