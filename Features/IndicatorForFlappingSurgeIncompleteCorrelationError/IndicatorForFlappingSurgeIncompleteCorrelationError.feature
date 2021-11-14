@IndicatorForFlappingSurgeIncompleteCorrelationError @ITOps_Milestone_3 @ITOps_Admin

Feature: Indicator for flapping cluster/surge cluster/incomplete correlation error

    Scenario Outline: Flap Indicator

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        # When "Admin" clicks on configuration tab
        # When user Click on Autoclosure and flapping under Settings section
        # Then Verify user is able to enter the values in Number of auto closed clusters "<valueForAutoCloseCluster>" and Time interval in minutes "<TimeIntervalInMin>" fields
        # Then Click on update button and verify success message is displayed
        # Then "Admin" verifies if "<SuccessMessage>" message is displayed
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"

        And "admin" clicks on Alerts page
        And "admin" enters "AlertName" and clicks on enter "<AlertName>"
        And Admin verifies flap Indicator


        And "Admin" gets the ticket number
        And Verify the comment in the closure note "Ticket closed on recovery alert and duting flap event total 3 has occured"

        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | AUMECO-50A-FPA2 | FlapChannel  | 2                        | 3                 | Auto Closure Conditions Saved. |


    Scenario Outline: Time Error indicator

        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<TimeErrorJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "AlertName" and clicks on enter "<AlertName>"
        And Admin verifies Time error indicator


        Examples:
            | ProjectName     | AlertName       | ChannelName | channelJson  | NodeName        | TimeErrorJson | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
            | Automation_01M3 | AUMECO-50A-FPA2 | Solarwinds  | QueueChannel | AUMECO-50A-FPA2 | TimeErrorJson | 2                        | 3                 | Auto Closure Conditions Saved. |


    Scenario Outline: Combination of Correlation Error indicator and Time Error indicator

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "AlertName" and clicks on enter "<NodeName>"
        And Admin verifies correlation error indicator

        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<TimeErrorJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "AlertName" and clicks on enter "<NodeName>"
        And Admin verifies Time error indicator

        Examples:
            | ProjectName    | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | TimeErrorJson |
            | AutoIB_Resolve | Alert1    | Solarwinds1 | QueueChannel | AUMECO-50A-SBC1 | RecoveryPolicy | TimeErrorJson |


    Scenario Outline: Surge Indicator

        When "Admin" sends "5" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "5" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "5" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "5" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "5" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "5" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" sends "5" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "AlertName" and clicks on enter "<AlertName>"
        And "Admin" verifies Surge indicator


        Examples:
            | ProjectName    | AlertName | ChannelName | channelJson  | NodeName        |
            | Auto_01Resolve | Alert1    | Solarwinds  | QueueChannel | AUMECO-50A-SBC1 |