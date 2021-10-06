Feature:Recovery Policy & Auto closure


    Scenario Outline: Recovery + Autoclosure functionality

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "Admin" sends "2" new "Recovery" alerts with "<ProjectName>", "<ChannelName>", "<channelJson1>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"
        When "Admin" sends "1" new "Recovery" alerts with "<ProjectName>", "<ChannelName>", "<channelJson2>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<NewClusterSize>"
        Then Admin verifies cluster got closed

        Examples:
            | ProjectName     | AlertName | size | NewClusterSize | ChannelName | channelJson1    | NodeName        | channelJson2    | NodeName        |
            | Automation_01M3 | Alert1    | 2    | 3              | Solarwinds  | RecoveryPolicy2 | SGSGDU-03A-FPA1 | RecoveryPolicy3 | SGSGDU-03A-FPA1 |