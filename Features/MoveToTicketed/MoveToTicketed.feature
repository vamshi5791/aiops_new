@MoveToTicketed  @ITOps_Milestone_3 @ITOps_Admin

Feature: Alerts moved to ticketed

    # Scenario Outline: 158-161 Alerts moved to Acknowledged

    #     Given User pushes an solarwinds alert
    #     Given User pushes an solarwinds alert
    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     And verify cluster size must be "<size>"

    #     Examples:
    #         | ProjectName     | AlertName | size |
    #         | Automation_01M3 | Alert1    | 2    |

    # Scenario Outline: Alerts moved to Ticketed

    #     Given User pushes an solarwinds alert
    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     And verify cluster size must be "<size>"
    #     And Admin click on state
    #     And Admin verifies Hold state
    #     And Admin verifies Close state



    #     Examples:
    #         | ProjectName     | AlertName | size |
    #         | Automation_01M3 | Alert1    | 3    |


    # Scenario Outline: Verify Admin able to push one more alert and verify the cluster size

    #     Given User pushes an solarwinds alert
    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     And verify cluster size must be "<size>"


    #     Examples:
    #         | ProjectName     | AlertName | size |
    #         | Automation_01M3 | Alert1    | 4    |


    # Scenario Outline: 161 Verify Admin able to push one more similar alert after 2 minutes

    #     Given User pushes an solarwinds alert
    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     And verify cluster size must be "<size>"


    #     Examples:
    #         | ProjectName     | AlertName | size |
    #         | Automation_01M3 | Alert1    | 5    |


    Scenario Outline: 162-163 Verify Admin able to push one recovery alert and 2 acknowledge alert within 30 mins

        Given User pushes an recovery alert
        Given User pushes an solarwinds alert
        Given User pushes an solarwinds alert
        Given User with ITOps role renders the URL
        And "admin" selects project and open alerts "<ProjectName>"
        Then enter alertname in search box and verify alert details "<AlertName>"
        And verify cluster size must be "<size>"


        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 3    |

    # Scenario Outline: 163 Verify Admin able to push one more acknowledge alert within 30 mins

    #     Given User pushes an solarwinds alert
    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     And verify cluster size must be "<size>"
    #     And Admin click on state
    #     And Admin verifies Hold state
    #     And Admin verifies Close state


    #     Examples:
    #         | ProjectName     | AlertName | size |
    #         | Automation_01M3 | Alert1    | 4    |


    # Scenario Outline: 164 Verify sending 2 alerts firt and another alert after 2 minutes


    #     Given User pushes an solarwinds alert
    #     Given User pushes an solarwinds alert
    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     And verify cluster size must be "<size>"
    #     Given User pushes an solarwinds alert
    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     And verify cluster size must be "<NewClusterSize>"


    #     Examples:
    #         | ProjectName     | AlertName | size | NewClusterSize |
    #         | Automation_01M3 | Alert1    | 2    | 3              |


    # Scenario Outline: 165 Acknowledged to ticketed - Ticket processing


    #     Given User pushes an solarwinds alert
    #     Given User pushes an solarwinds alert
    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     And verify cluster size must be "<size>"
    #     Given User pushes an solarwinds alert
    #     Given User pushes an solarwinds alert
    #     Given User pushes an solarwinds alert
    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     And verify cluster size must be "<NewClusterSize>"
    #     And Admin click on state
    #     And "Admin" clicks on "Hold" button


    #     Examples:
    #         | ProjectName     | AlertName | size | NewClusterSize |
    #         | Automation_01M3 | Alert1    | 2    | 3              |


    # Scenario Outline: 166 Acknowledged to ticketed - Ticket processing


    #     Given User pushes an solarwinds alert
    #     Given User pushes an solarwinds alert
    #     Given User pushes an solarwinds alert
    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     And verify cluster size must be "<size>"
    #     And Admin click on state
    #     And "Admin" clicks on "Assign" button



    #     Examples:
    #         | ProjectName     | AlertName | size |
    #         | Automation_01M3 | Alert1    | 3    |


    # Scenario Outline: 167-169 Acknowledged to ticketed- with no time frame


    #     Given User pushes an solarwinds alert
    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     And verify cluster size must be "<size>"
    #     And Admin click on state
    #     And Admin verifies Acknowledge state

    #     Examples:
    #         | ProjectName     | AlertName | size |
    #         | Automation_01M3 | Alert1    | 1    |


    # Scenario Outline: 168 Acknowledged to ticketed- with no time frame


    #     Given User pushes an solarwinds alert
    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     And verify cluster size must be "<size>"
    #     And Admin click on state
    #     And Admin verifies Hold state
    #     And Admin verifies Close state

    #     Examples:
    #         | ProjectName     | AlertName | size |
    #         | Automation_01M3 | Alert1    | 2    |


    # Scenario Outline: 169 Acknowledged to ticketed- with no time frame


    #     Given User pushes an solarwinds alert
    #     Given User with ITOps role renders the URL
    #     And "admin" selects project and open alerts "<ProjectName>"
    #     Then enter alertname in search box and verify alert details "<AlertName>"
    #     And verify cluster size must be "<size>"


    #     Examples:
    #         | ProjectName     | AlertName | size |
    #         | Automation_01M3 | Alert1    | 3    |

