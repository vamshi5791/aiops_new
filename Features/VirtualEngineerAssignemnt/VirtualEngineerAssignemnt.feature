@VirtualEngineerAssignemnt  @ITOps_Milestone_3 @ITOps_Admin

Feature: Verifying Virtual engineer assignemnt

    Scenario Outline: Verify Virtual engineer assignemnt


        And "Admin" renders the Service now API
        And "Admin" verifies ticket is assigned to ITOPS Virtual Engineer
        And "Admin" verifies ticket is assigned to group NinetyOne NOC
        And "Admin" verifies ticket Staus must be Assigned


        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 2    |

    Scenario Outline: Re Assign all the alerts corresponding tickets to a valid group in ITSM.


        And "Admin" renders the Service now API
        And "Admin" verifies ticket is assigned to the configured group
        And "Admin" verifies ticket Assigned to field must be blank
        And "Admin" verifies ticket status must be Ticketed in ITOPS


        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 2    |

    Scenario Outline: Assign all the alerts corresponding tickets to a virtual engineer in ITSM- move to ticketed.

        Given User pushes an solarwinds alert
        Given User pushes an solarwinds alert
        Given User pushes an solarwinds alert
        Given User with ITOps role renders the URL
        And "admin" selects project and open alerts "<ProjectName>"
        Then enter alertname in search box and verify alert details "<AlertName>"
        And "Admin" renders the Service now API
        And "Admin" verifies ticket is assigned to ITOPS Virtual Engineer
        And "Admin" verifies ticket is assigned to group NinetyOne NOC
        And "Admin" verifies ticket Staus must be Assigned
        And "Admin" verifies ticket is assigned to the configured group
        And "Admin" verifies ticket Assigned to field must be blank
        And "Admin" verifies ticket status must be Ticketed in ITOPS


        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 2    |

    Scenario Outline: Virtual engineer assignment- Split and ticketing


        And "Admin" renders the Service now API
        And "Admin" verifies ticket must not be assigned to virtual engineer;
        And "Admin" verifies ticket must  be assigned to group(ITOpsTesting)


        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 2    |