@VirtualEngineerQueue @ITOps_Admin @Regression

Feature: Virtual Engineer Queue

    Scenario Outline: Verify user can't assign ticket from alert console when ticket is in virtual engineer queue

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin click on state
        And Admin verifies assign option is not present

        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName       |
            | Automation_01M3 | Solarwinds  | QueueChannel | IAMLISE1PRDDC1 |


    Scenario Outline: Verify user able to  assign ticket from ticket details page when ticket is in virtual engineer queue

        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" clicks on the ticket number
        And "admin" clicks on "Group" radio button
        And "admin" selects user from the team member drop down as "<Group>"
        And "admin" clicks on assign button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed

        Examples:
            | ProjectName     | Group            | TeamMember      | SuccessMessage                | ChannelName | channelJson  | NodeName       |
            | Automation_01M3 | Visibility - UST | Amjathsha Abdul | Tickets assigned successfully | Solarwinds  | QueueChannel | IAMLISE1PRDDC1 |


    Scenario Outline: Verify that user able to close when ticket is in virtual engineer queue

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin click on state
        And "Admin" clicks on "Close" button
        When "Admin" enters closure note as "<ClosureNote>" and click on Ok
        Then "Admin" verifies if "<SuccessMessage>" message is displayed

        Examples:
            | ProjectName     | SuccessMessage                | ChannelName | channelJson  | NodeName             | ClosureNote       |
            | Automation_01M3 | Alerts(s) closed successfully | Solarwinds  | QueueChannel | IAMLWLCPRDDC1-LD3-RP | Closing the Alert |



    Scenario Outline: Verify an autoclosure happens while in virtual engineer queue and in hold state, the 'hold' is overridden and ticket should be closed

        When "Admin" sends "2" new "Recovery" alerts with "<ProjectName>", "<ChannelName>", "<channelJson1>", "<NodeName>"

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name

        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin click on state
        And "Admin" clicks on "Hold" button
        When "Admin" sends "1" new "Recovery" alerts with "<ProjectName>", "<ChannelName>", "<channelJson2>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        Then Admin verifies cluster got closed

        Examples:
            | ProjectName     | ChannelName | channelJson1  | NodeName        | channelJson2  |
            | Automation_01M3 | Solarwinds  | QueueChannel2 | GBSLBA-00A-FPA1 | QueueChannel3 |



    Scenario Outline: Verify an autoclosure not happend while in virtual engineer queue and in hold state, he ticket will carry over the hold state and be moved to the configured default SNOW queue

        When "Admin" sends "2" new "Recovery" alerts with "<ProjectName>", "<ChannelName>", "<channelJson1>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin click on state
        And "Admin" clicks on "Hold" button
        When "Admin" sends "1" new "Recovery" alerts with "<ProjectName>", "<ChannelName>", "<channelJson2>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        Then Admin verifies cluster not closed

        Examples:
            | ProjectName     | ChannelName | channelJson1    | NodeName        | channelJson2    |
            | Automation_01M3 | Solarwinds  | RecoveryPolicy2 | ZACTTV-03A-FPA2 | RecoveryPolicy3 |