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


    #     And "Admin" renders the Service now API
    #     And "Admin" verifies ticket is assigned to the configured group
    #     And "Admin" verifies ticket Assigned to field must be blank
    #     And "Admin" verifies ticket status must be Ticketed in ITOPS


    #     Examples:
    #         | ProjectName     | AlertName | size |
    #         | Automation_01M3 | Alert1    | 2    |

    # Scenario Outline: Assign all the alerts corresponding tickets to a virtual engineer in ITSM- move to ticketed.

    #     Given User pushes an solarwinds alert
    #     Given User pushes an solarwinds alert
    #     Given User pushes an solarwinds alert
    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     And "Admin" renders the Service now API
    #     And "Admin" verifies ticket is assigned to ITOPS Virtual Engineer
    #     And "Admin" verifies ticket is assigned to group NinetyOne NOC
    #     And "Admin" verifies ticket Staus must be Assigned
    #     And "Admin" verifies ticket is assigned to the configured group
    #     And "Admin" verifies ticket Assigned to field must be blank
    #     And "Admin" verifies ticket status must be Ticketed in ITOPS


    #     Examples:
    #         | ProjectName     | AlertName | size |
    #         | Automation_01M3 | Alert1    | 2    |


    # Scenario Outline: Virtual engineer assignment- Split and ticketing

    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     Given User clicks on alert cluster
    #     And Admin clicks on first cluster checkbox
    #     And Admin clicks on create ticket
    #     And Admin clicks on confirm button


    #     And "Admin" verifies ticket must  be assigned to ITOpsTesting


    #     Examples:
    #         | ProjectName     | AlertName | size |
    #         | Automation_01M3 | Alert1    | 2    |