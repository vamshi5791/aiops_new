Feature:Ticket Template

    Feature Description : Ticket Template

    Scenario Outline: Verify creating ticket template with AND and OR operator with each field taking different values using Rules works accordingly for incoming alerts

        When "Admin" sends "1" new "LogicMonitor" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "admin" clicks on Alerts page
        And "Admin" enters "Logic Monitor" and clicks on enter "<Source>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets severity level from ticket details page and verifies as "<SeverityLevel>"

        Examples:
            | ProjectName     | ChannelName                         | channelJson                     | NodeName      | Source       | SeverityLevel |
            | Automation_01M3 | LMWithBusinessTimezoneQueueProjTest | LogicMonitorAlertsPriorityMajor | IAMCEMSPRDDC1 | LogicMonitor | Moderate      |