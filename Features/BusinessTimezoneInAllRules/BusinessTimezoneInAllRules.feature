@BusinessTimezoneInAllRules  @ITOps_Admin

Feature: Alerts moved to ticketed

    Scenario Outline: Verify that business time zone is applicable in Correlation, acknowledgement , reocvery and failure policies

        When "Admin" sends "3" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        Then "admin" verifies created ticket in alert console

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | 2    | Solarwinds  | QueueChannel | AUMECO-50A-AOB1 |
