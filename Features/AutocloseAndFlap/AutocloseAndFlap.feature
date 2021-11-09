Feature: Auto close and Flap


    Scenario Outline: Changing the ticket status of the flapped ticket to "On Hold" and sending Flapping closure alert

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"

        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin click on state
        And "admin" clicks on "Hold" button
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        Then Admin verifies cluster got closed

        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. |


    Scenario Outline: Sending a down alert change the state in snow to Awaiting Change and then send an up alert


        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" selects the ticket "<IncidentId>" and change the state to "Awaiting Change"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        Then Admin verifies cluster got closed


        Examples:
            | ProjectName     | AlertName | size | NewClusterSize | ChannelName | channelJson1    | NodeName        | channelJson2    | NodeName        | RecoveryJson   |
            | Automation_01M3 | Alert1    | 2    | 3              | Solarwinds  | RecoveryPolicy2 | SGSGDU-03A-FPA1 | RecoveryPolicy3 | SGSGDU-03A-FPA1 | RecoveryPolicy |


    Scenario Outline: Send 3 pair of alerts which must be closed and send another down alert crossing 60 mints time frame


        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"


        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        Then Admin verifies cluster got closed


        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. |

    Scenario Outline: Sending the last alert as "Down" after 3 pair of closures


        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"

        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson1>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson2>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson3>", "<NodeName>"


        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 | channelJson1  | channelJson2  | channelJson3  |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. | QueueChannel5 | QueueChannel6 | QueueChannel7 |

    Scenario Outline: Sending the last alert as "up" after 3 pair of closures


        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"

        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" verifies ticket is created



        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 | channelJson1  | channelJson2  | channelJson3  |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. | QueueChannel5 | QueueChannel6 | QueueChannel7 |
