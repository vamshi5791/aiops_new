Feature:Recovery Policy & Auto closure


    Scenario Outline: Recovery + Autoclosure functionality

        When "Admin" sends "2" new "Recovery" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"
        When "Admin" sends "1" "Recovery" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"


        Examples:
            | ProjectName     | AlertName | size | NewClusterSize | ChannelName | channelJson  |
            | Automation_01M3 | Alert1    | 2    | 3              | Solarwinds  | QueueChannel |