@BusinessTimezoneInAllRules  @ITOps_Admin

Feature: businessTimezone in all rules/policies

    Scenario Outline: Verify that business time zone is applicable in Correlation, acknowledgement , reocvery and failure policies

        When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>", "<channelJson>"
        When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>", "<channelJson>"
        When "Admin" sends "1" new Http alerts with "<NodeName>", "<AlertSeverity>", "<channelJson>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        Then "admin" verifies created ticket in alert console

        Examples:
            | AlertSeverity | channelJson  | NodeName        |
            | Major         | QueueChannel | GGSPDC-01A-SBC1 |
