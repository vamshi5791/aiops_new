@AlertConsole @ITOps_Admin @Regression

Feature: Alert console

    Scenario Outline: Verify sending alerts and ensure correlation works

        When "admin" pushes an solarwinds alert with "<ProjectName>", "<ChannelName>", "<channelJson>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name as "<ProjectName>" in the search field
        And "admin" clicks on project name "<ProjectName>"
        And "admin" clicks on Alerts page
        And "admin" enters "AlertName" and clicks on enter "<AlertName>"
        And "admin" verifies the severity strip color
        And "admin" verifies the ticket number
        Then "Admin" sends "3" more alerts satisfying correlation policy "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And "admin" enters "AlertName" and clicks on enter "<AlertName>"
        When "admin" verifies Cluster occurrence badge position is right aligned to Alert Name
        Then "admin" verifies launch icon present inside Cluster occurrence badge

        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  |
            | Automation_01M3 | AlertUST  | Solarwinds  | QueueChannel |


    Scenario Outline:Verify cluster popup and Severity strip color(with alerts from a single device) for cluster

        When "admin" clicks on Alerts page
        And "admin" enters "AlertName" and clicks on enter "<AlertName>"
        And "admin" clicks on the cluster count for the ticketed alert from previous step
        Then "admin" verifies the checkbox against each alert
        Then "Admin" Verifies launch icon corresponding to each alert
        And "admin" clicks on cancel button

        Examples:
            | AlertName |
            | AlertUST  |
 #service now
    Scenario Outline: Verify ticket details in service now after correlation for alerts with source other than Forescout

        When "admin" clicks on Alerts page
        And "admin" gets ticket number for the previously alert
        Then "admin" verifies Short description of the ticket should be as defined in template
        And "admin" verifies Assigned To field value in the ticket should be as defined in template
        And "admin" verifies Assignment Group of the ticket should be as defined in template
        And "admin" verifies Caller id of the ticket should be as defined in the template
        Examples:
            | TicketNumber | ShortDescription                   |
            | INC0817767   | [ solarwinds ] Test Alert Message3 |   
 #service now
 
    Scenario Outline: Verify ticket details in service now after correlation for alerts with source Forescout

        When "admin" clicks on Alerts page
        And "admin" gets ticket number for the previously alert
        Then "admin" verifies Short description of the ticket should be as defined in template
        And "admin" verifies Assigned To field value in the ticket should be as defined in template
        And "admin" verifies Assignment Group of the ticket should be as defined in template
        And "admin" verifies Caller id of the ticket should be as defined in the template
        Examples:
            | TicketNumber | ShortDescription                   |
            | INC0817767   | [ solarwinds ] Test Alert Message3 |

    Scenario Outline: Verify ticket details page for a new ticket created

        When "admin" clicks on Alerts page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        Then "admin" verifies  Description of ticket to be shown in Description section.
        And "admin" verifies Four cards - STATUS, LAST UPDATED TIME, LAST UPDATED BY, ASSIGNED TO should be displayed with data.
        And "admin" verifies STATUS in the card should be Active
        And "admin" verifies Conversation section should contain individual entries of alerts added to base alert

        Examples:
            | TicketNumber | ShortDescription                   |
            | INC0817767   | [ solarwinds ] Test Alert Message3 |