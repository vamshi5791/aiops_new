Feature:Ticket Template

    Feature Description : Ticket Template

    Scenario Outline: Verify creating ticket template with AND and OR operator with each field taking different values using Rules works accordingly for incoming alerts

        When "Admin" sends "1" new "LogicMonitor" alerts with "<ProjectName>", "<ChannelName>", "<channelJsonMajor>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "admin" clicks on Alerts page
        And "Admin" enters "Logic Monitor" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets severity level from ticket details page and verifies as "<SeverityLevelMajor>"

        When "Admin" sends "1" new "LogicMonitor" alerts with "<ProjectName>", "<ChannelName>", "<channelJsonCritical>", "<NodeNameCritical>"
        When "admin" clicks on Alerts page
        And "Admin" enters "Logic Monitor" and clicks on enter "<NodeNameCritical>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets severity level from ticket details page and verifies as "<SeverityLevelCritical>"

        When "Admin" sends "1" new "LogicMonitor" alerts with "<ProjectName>", "<ChannelName>", "<channelJsonWarning>", "<NodeNameWarning>"
        When "admin" clicks on Alerts page
        And "Admin" enters "Logic Monitor" and clicks on enter "<NodeNameWarning>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets severity level from ticket details page and verifies as "<SeverityLevelWarning>"



        Examples:
            | ProjectName     | ChannelName                         | channelJsonMajor                | NodeName      | Source       | SeverityLevelMajor | channelJsonWarning        | channelJsonCritical                | NodeNameWarning | NodeNameCritical | SeverityLevelWarning | SeverityLevelCritical |
            | Automation_01M3 | LMWithBusinessTimezoneQueueProjTest | LogicMonitorAlertsPriorityMajor | IAMCEMSPRDDC1 | LogicMonitor | Moderate           | LogicMonitorAlertsWarning | LogicMonitorAlertsPriorityCritical | IAMCFSCPRDVIP   | IAMHSBC1         | Low                  | Moderate              |