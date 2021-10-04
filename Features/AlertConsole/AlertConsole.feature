@AlertConsole @ITOps_Admin @Regression

Feature: Alert console

    Scenario Outline: Verify sending alerts and ensure correlation works

        When "Admin" sends "1" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And "admin" verifies the severity strip color
        And "admin" verifies the ticket number
        When "Admin" sends "3" "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        When "admin" verifies Cluster occurrence badge position is right aligned to Alert Name
        Then "admin" verifies launch icon present inside Cluster occurrence badge

        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel |


    Scenario Outline:Verify cluster popup and Severity strip color(with alerts from a single device) for cluster

        When "admin" clicks on Alerts page
        And "admin" clicks on the cluster count for the ticketed alert from previous step
        Then "admin" verifies the checkbox against each alert
        Then "Admin" Verifies launch icon corresponding to each alert
        And "admin" clicks on cancel button

        Examples:
            | AlertName |
            | AlertUST  |

    Scenario Outline: Verify ticket details in service now after correlation for alerts with source other than Forescout

        When "admin" clicks on Alerts page
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description
        Examples:
            | TicketNumber | ShortDescription                   |
            | INC0817767   | [ solarwinds ] Test Alert Message3 |

    Scenario Outline: Verify ticket details in service now after correlation for alerts with source Forescout

        #When "Admin" sends "3" new "Forescout" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And "Admin" gets the ticket number from alert console
        Then "admin" verifies Short description of the ticket should be as defined in template "<ShortDescription>"
        And "admin" verifies Assignment Group of the ticket should be as defined in template "<AssignmentGroup>"
        #And "admin" verifies Caller id of the ticket should be as defined in the template "<CallerID>"

        Examples:
            | ProjectName     | AssignmentGroup | ShortDescription                                                                                               | ChannelName | channelJson               |
            | Automation_01M3 | ITOpsTesting    | [ Forescout ] CounterACT: Change to VLAN 680 - Splunk Agent Not Installed. Device has been NAC'd - 10.64.48.80 | Forescout   | ForescoutWithMessageandIP |

    Scenario Outline: Verify ticket details page for a new ticket created

        When "admin" clicks on Alerts page
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | TicketNumber | ShortDescription                   |
            | INC0817767   | [ solarwinds ] Test Alert Message3 |