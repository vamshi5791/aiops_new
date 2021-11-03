@AcknowledgementAlertProcessing  @ITOps_Milestone_3 @ITOps_Admin

Feature: Acknowledge Alert Processing

    Scenario Outline: Pushing two acknowledgement alerts


        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"
        And Admin click on state
        And "admin" clicks on "Acknowledge" button

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | 2    | Solarwinds  | QueueChannel | USNYFA-37A-SBC1 |


    Scenario Outline: Pushing another acknowledgement alert

        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"


        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | 3    | Solarwinds  | QueueChannel | USNYFA-37A-SBC1 |