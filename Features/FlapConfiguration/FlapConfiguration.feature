@FlapConfiguration @ITOps_Milestone_3 @ITOps_Admin

Feature: FlapConfiguration

    Feature Description



    Scenario Outline: Flap scenario
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
        And "Admin" gets the ticket number
        And Verify the comment in the closure note "Ticket closed on recovery alert and duting flap event total 3 has occured"
        # And "admin" enters "AlertName" and clicks on enter "<AlertName>"

        Examples:
            | ProjectName    | AlertName | ChannelName | channelJson  | NodeName        | RecoveryJson   | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
            | Auto_01Resolve | Alert1    | Solarwinds  | QueueChannel | AUMECO-50A-SBC1 | RecoveryPolicy | 2                        | 3                 | Auto Closure Conditions Saved. |


    Scenario Outline: FlapConfiguration
         When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "Admin" clicks on configuration tab
        When user Click on Autoclosure and flapping under Settings section
        Then Verify user is able to enter the values in Number of auto closed clusters "<valueForAutoCloseCluster>" and Time interval in minutes "<TimeIntervalInMin>" fields
        Then Click on update button and verify success message is displayed

        Examples:
            | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
            | 2                        | 30                | Auto Closure Conditions Saved. |