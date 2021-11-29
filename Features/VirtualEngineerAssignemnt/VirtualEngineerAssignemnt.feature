@VirtualEngineerAssignemnt  @ITOps_Milestone_3 @ITOps_Admin

Feature: Verifying Virtual engineer assignemnt

    Scenario Outline: Verify Virtual engineer assignemnt

        When "Admin" verifies ticket is assigned to group NinetyOne NOC "<TicketNumber>" "<Assignment_group_id>"
        And "Admin" verifies ticket is assigned to ITOPS Virtual Engineer "<TicketNumber>" "<Assigned_to_id>"
        And "Admin" verifies ticket Staus must be Assigned


        Examples:
            | ProjectName     | AlertName | size | TicketNumber | Assigned_to_id          | Assignment_group_id               |
            | Automation_01M3 | Alert1    | 2    | INC0820205   | ITOps Virtual  Engineer | NinetyOne Infrastructure Networks |

    # Scenario Outline: Re Assign all the alerts corresponding tickets to a valid group in ITSM.


    #     And "Admin" verifies ticket is assigned to the configured group
    #     And "Admin" verifies ticket Assigned to field must be blank
    #     And "Admin" verifies ticket status must be Ticketed in ITOPS


    #     Examples:
    #         | ProjectName     | AlertName | size |
    #         | Automation_01M3 | Alert1    | 2    |

    Scenario Outline: Assign all the alerts corresponding tickets to a virtual engineer in ITSM

        When "Admin" sends "3" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        Then enter alertname in search box and verify alert details "<AlertName>"
        When "Admin" verifies ticket is assigned to group "<Assignment_group_id>"
        And "Admin" verifies ticket is assigned to "<Assigned_to_id>"
        Then "admin" verifies state of ticket should be "Active"


        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson   | NodeName        | Assigned_to_id          | Assignment_group_id               |
            | Automation_01M3 | Alert1    | 2    | Solarwinds  | QueueChannel2 | AUMECO-50A-AOB1 | ITOps Virtual  Engineer | NinetyOne Infrastructure Networks |


    Scenario Outline: Virtual engineer assignment- Split and ticketing

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        Then enter alertname in search box and verify alert details "<AlertName>"
        Given User clicks on alert cluster
        And "admin" clicks on the cluster count for the ticketed alert from previous step
        And "Admin" selects create ticket from pop up
        And "Admin" clicks on confirm
        And "Admin" gets the ticket number from alert console
        And "admin" verifies Assignment Group of the ticket should be as defined in template "<AssignmentGroup>"


        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 2    |