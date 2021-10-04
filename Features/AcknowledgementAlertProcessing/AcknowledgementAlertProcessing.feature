@AcknowledgementAlertProcessing  @ITOps_Milestone_3 @ITOps_Admin

Feature: Acknowledge Alert Processing

    Scenario Outline: Pushing two acknowledgement alerts


        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"
        And Admin click on state
        And "admin" clicks on "Acknowledge" button

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  |
            | Automation_01M3 | Alert1    | 2    | Solarwinds  | QueueChannel |


    Scenario Outline: Pushing another acknowledgement alert

        When "Admin" sends "1" "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"


        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  |
            | Automation_01M3 | Alert1    | 3    | Solarwinds  | QueueChannel |