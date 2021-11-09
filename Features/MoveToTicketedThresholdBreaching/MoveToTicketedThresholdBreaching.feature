@MoveToTicketedThresholdBreaching   @ITOps_Admin

Feature: Alerts moved to ticketed

    Scenario Outline: To check whether threshold time calculation is done based on difference between first alert time and last alert time.

        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        And "Admin" sets the ticketing threshold to 3
        When "Admin" sends "1" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"

        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size1>"

        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And verify cluster size must be "<size2>"

        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And verify cluster size must be "<size3>"

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        | size2 | size3 |
            | Automation_01M3 | Alert1    | 3    | Solarwinds  | QueueChannel | AUMECO-50A-AOB1 | 4     | 5     |

    Scenario Outline: Verify closing the created ticketed cluster after threshold breach and sent alerts again.

        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        When "Admin" sends "1" new alert from mail
        And "Admin" verifies ticket is not generated
        When "Admin" sends "1" new alert from mail
        And "Admin" verifies ticket is not generated
        When "Admin" sends "1" new alert from mail
        And "Admin" verifies ticket is generated


        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        | size2 | size3 |
            | Automation_01M3 | Alert1    | 3    | Solarwinds  | QueueChannel | AUMECO-50A-AOB1 | 4     | 5     |

    Scenario Outline: Verify sending 3 email alerts within 20 mints assign the paricular ticket and the send a 4th one with same alert service and computer name

        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        When "Admin" sends "1" new alert from mail
        And "Admin" verifies ticket is not generated
        When "Admin" sends "1" new alert from mail
        And "Admin" verifies ticket is not generated
        When "Admin" sends "1" new alert from mail
        And "Admin" verifies ticket is generated
        And "Admin" assigns the ticket
        When "Admin" sends "1" new alert from mail
        And verify cluster size must be "<size>"


        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | 4    | Solarwinds  | QueueChannel | AUMECO-50A-AOB1 |
