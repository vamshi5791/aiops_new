Feature:Ticket Template

    Feature Description : Ticket Template

    Scenario Outline: Verify that ticket getting created should have details as per the ticket template

        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "admin" clicks on Alerts page
         And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description
        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Solarwinds  | QueueChannel | ZAPEWF-00B-SBC1 |