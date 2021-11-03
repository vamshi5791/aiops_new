@SNOWDescription @Regression

Feature: The 1st Alert which is eligible for ticketing should be considered as SNOW description while creating SNOW ticket

    Scenario Outline: Verify first ticket eligible for ticketing only is included SNOW description while creating a ticket - 2 Up alerts and 1 down alert

        When "Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name

        # When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        # And "admin" clicks on Alerts page
        # And "admin" enters "Node Name" and clicks on enter "<NodeName>"
        # And Admin click on state
        # And "Admin" verifies the options for the tickets in alert store must have "Close", "Close"
        # When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJsonDownAlert>", "<NodeName>"
        # And "admin" clicks on Alerts page
        # And "admin" enters "Node Name" and clicks on enter "<NodeName>"
        # And "Admin" gets the ticket number from alert console

        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson          | NodeName        | channelJsonDownAlert   |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannelUpAlerts | AUSYGR-00A-SSC2 | QueueChannelDownAlerts |


    # Scenario Outline: Verify first ticket eligible for ticketing only is included SNOW description while creating a ticket - 3rd ack alert moves to ticketing.


    #     When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
    #     And "admin" clicks on Alerts page
    #     And "admin" enters "Node Name" and clicks on enter "<NodeName>"
    #     And Admin click on state
    #     And "Admin" verifies the options for the tickets in alert store must have "Acknowledge", "Acknowledge"
    #     When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
    #     And "admin" clicks on Alerts page
    #     And "admin" enters "Node Name" and clicks on enter "<NodeName>"
    #     And "Admin" gets the ticket number from alert console


    #     Examples:
    #         | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        |
    #         | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | GBPRCR-00A-FPA1 |


    Scenario Outline: Verify during cluster split, split should not be successful if the new cluster or old cluster has only up alerts.

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJsonDownAlert>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "Node Name" and clicks on enter "<NodeName>"
        And "admin" clicks on the cluster count for the ticketed alert from previous step
        And "Admin" selects "3" alert checkbox from pop up
        And "Admin" selects "4" alert checkbox from pop up
        And "Admin" selects create ticket from pop up
        And "Admin" clicks on confirm
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson          | NodeName        | channelJsonDownAlert   | SuccessMessage          |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannelUpAlerts | ZAPRMP-00A-FPA2 | QueueChannelDownAlerts | Split cluster completed |


    Scenario Outline: Verify that when split is done, ticket created for the new cluster should be the first down alert selected to split.

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJsonDownAlert>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "Node Name" and clicks on enter "<NodeName>"
        And "admin" clicks on the cluster count for the ticketed alert from previous step
        And "Admin" selects "4" alert checkbox from pop up
        And "Admin" selects "2" alert checkbox from pop up
        And "Admin" selects create ticket from pop up
        And "Admin" clicks on confirm
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson          | NodeName      | channelJsonDownAlert   | SuccessMessage          |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannelUpAlerts | IAMCTUFPRDDC1 | QueueChannelDownAlerts | Split cluster completed |


    Scenario Outline: Verify during cluster split,tkt creating alert of the parent cluster is also moved to new cluster,original cluster tkt long desc updated with next down alert in the original cluster with its alert created time in First occur details

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJsonDownAlert>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "Node Name" and clicks on enter "<NodeName>"
        And "admin" clicks on the cluster count for the ticketed alert from previous step
        And "Admin" selects "4" alert checkbox from pop up
        And "Admin" selects "2" alert checkbox from pop up
        And "Admin" selects create ticket from pop up
        And "Admin" clicks on confirm
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson          | NodeName        | channelJsonDownAlert   | SuccessMessage          |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannelUpAlerts | AUSYGR-00A-SSC2 | QueueChannelDownAlerts | Split cluster completed |

