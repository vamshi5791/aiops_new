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
        When "admin" verifies Cluster occurrence badge position is right aligned to Alert Name
        Then "admin" verifies launch icon present inside Cluster occurrence badge

        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | ZAPEWF-00B-AOB1 |


    Scenario Outline:Verify cluster popup and Severity strip color(with alerts from a single device) for cluster

        When "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "admin" clicks on the cluster count for the ticketed alert from previous step
        Then "Admin" Verifies launch icon corresponding to each alert
        And "admin" clicks on cancel button

        Examples:
            | AlertName | NodeName        |
            | AlertUST  | ZAPEWF-00B-AOB1 |

    Scenario Outline: Verify ticket details in service now after correlation for alerts with source other than Forescout

        When "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description
        Examples:
            | TicketNumber | ShortDescription                   | NodeName        |
            | INC0817767   | [ solarwinds ] Test Alert Message3 | ZAPEWF-00B-AOB1 |


    Scenario Outline: Verify ticket details in service now after correlation for alerts with source Forescout

        When "Admin" sends "3" new "Forescout" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number from alert console
        Then "admin" verifies Short description of the ticket should be as defined in template "<ShortDescription>"
        And "admin" verifies Assignment Group of the ticket should be as defined in template "<AssignmentGroup>"

        Examples:
            | ProjectName     | AssignmentGroup | ShortDescription            | ChannelName | channelJson               | NodeName        |
            | Automation_01M3 | ITOpsTesting    | [ Solarwinds ] Sample Alert | Forescout   | ForescoutWithMessageandIP | ZAPEWF-00A-FPA2 |

    Scenario Outline: Verify ticket details page for a new ticket created

        When "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | TicketNumber | ShortDescription                   | NodeName        |
            | INC0817767   | [ solarwinds ] Test Alert Message3 | ZAPEWF-00A-FPA2 |