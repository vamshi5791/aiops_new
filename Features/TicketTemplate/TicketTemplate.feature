Feature:Ticket Template

    Feature Description : Ticket Template

    Scenario Outline: Verify that ticket getting created should have details as per the ticket template

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description
        Then "admin" verifies Comments of the ticket should be as defined in template "<Comments>"
        And "admin" verifies Assigned To field value in the ticket should be as defined in template "<AssignedTo>"
        And "admin" verifies Assignment Group of the ticket should be as defined in the template "<AssignmentGroup>"
        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName        | Comments | AssignedTo              | AssignmentGroup                   |
            | Automation_01M3 | Solarwinds  | QueueChannel | ZAPEWF-00B-SBC1 | IB       | ITOps Virtual  Engineer | NinetyOne Infrastructure Networks |