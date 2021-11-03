@AlertConsole @ITOps_Admin @Regression

Feature: Alert console

    Scenario Outline: Verify sending alerts and ensure correlation works

        When "Admin" sends "1" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "admin" verifies the severity strip color
        And "admin" verifies the ticket number
        When "Admin" sends "1" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        When "admin" verifies Cluster occurrence badge position is right aligned to Alert Name
        Then "admin" verifies launch icon present inside Cluster occurrence badge

        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | ZAPEWF-00B-AOB1 |


    Scenario Outline:Verify cluster popup and Severity strip color(with alerts from a single device for cluster

        When "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "admin" clicks on the cluster count for the ticketed alert from previous step
        And "admin" verifies base alert checkbox must be disabled
        Then "Admin" Verifies launch icon corresponding to each alert
        Examples:
            | AlertName | NodeName        |
            | AlertUST  | ZAPEWF-00B-AOB1 |

    Scenario Outline: Verify ticket details in service now after correlation for alerts with source other than Forescout

        When "Admin" sends "3" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description
        Examples:
            | TicketNumber | ShortDescription    | ProjectName     | AlertName | ChannelName | channelJson  | NodeName   |
            | INC0817767   | Test Alert Message3 | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | IAMLSBCPRD |


    Scenario Outline: Verify ticket details in service now after correlation for alerts with source Forescout

        When "Admin" sends "3" new "Forescout" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number from alert console
        Then "admin" verifies Short description of the ticket should be as defined in template "<ShortDescription>"
        And "admin" verifies Assignment Group of the ticket should be as defined in template "<AssignmentGroup>"

        Examples:
            | ProjectName     | AssignmentGroup | ShortDescription                                                                                               | ChannelName | channelJson               | NodeName        |
            | Automation_01M3 | ITOpsTesting    | [ Forescout ] CounterACT: Change to VLAN 680 - Splunk Agent Not Installed. Device has been NAC'd - 10.64.48.80 | Forescout   | ForescoutWithMessageandIP | ZAPEWF-00A-FPA2 |

    Scenario Outline: Verify ticket details page for a new ticket created

        When "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description
        Then "admin" verifies status in the card should be "Open"
        Then "admin" verifies the page must have "STATUS"
        Then "admin" verifies the page must have "LAST UPDATED TIME"
        Then "admin" verifies the page must have "LAST UPDATED BY"
        Then "admin" verifies the page must have "ASSIGNED TO"
        Then "admin" verifies description of ticket to be shown in Description section
        Then "admin" verifies No of days ago the conversation section was added should be shown


        Examples:
            | TicketNumber | ShortDescription                   | NodeName        |
            | INC0817767   | [ solarwinds ] Test Alert Message3 | ZAPEWF-00B-AOB1 |