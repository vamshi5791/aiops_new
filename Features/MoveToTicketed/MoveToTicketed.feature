@MoveToTicketed  @ITOps_Milestone_3 @ITOps_Admin

Feature: Alerts moved to ticketed

    Scenario Outline: Alerts moved to Acknowledged

        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | 2    | Solarwinds  | QueueChannel | AUMECO-50A-AOB1 |

    Scenario Outline: Alerts moved to Ticketed

        When "Admin" sends "1" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"
        And Admin click on state
        And Admin verifies Assign state
        And "Admin" clicks on the ticket number
        Then "Admin" verifies Ticket should be assigned to group "<Group>"
        Then "Admin" verifies Ticket should be assigned to TeamMember "<TeamMember>"

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | Group                             | TeamMember              | NodeName        |
            | Automation_01M3 | Alert1    | 3    | Solarwinds  | QueueChannel | NinetyOne Infrastructure Networks | ITOps Virtual  Engineer | AUMECO-50A-AOB1 |

    Scenario Outline: Verify Admin able to push one more alert and verify the cluster size

        When "Admin" sends "1" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | 4    | Solarwinds  | QueueChannel | AUMECO-50A-AOB1 |

    Scenario Outline: Verify Admin able to push one more similar alert after 2 minutes

        When "Admin" sends "1" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | 5    | Solarwinds  | QueueChannel | AUMECO-50A-AOB1 |

    Scenario Outline: Verify Admin able to push one recovery alert and 2 acknowledge alert within 30 mins

        When "Admin" sends "1" new "Recovery" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryChannelJson>", "<NodeName>"
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<SolarwindsChannelJson>", "<NodeName>"
        And "Admin" clicks on Alerts page
        And "admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"

        Examples:
            | ProjectName     | AlertName | size | ChannelName | SolarwindsChannelJson | RecoveryChannelJson | NodeName        |
            | Automation_01M3 | Alert1    | 3    | Solarwinds  | QueueChannel          | RecoveryPolicy      | BWGAFG-01A-RVG1 |

    Scenario Outline: Verify Admin able to push one more acknowledge alert within 30 mins

        When "Admin" sends "1" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"
        And Admin click on state
        And Admin verifies Assign state
        And "Admin" clicks on the ticket number
        Then "Admin" verifies Ticket should be assigned to group "<Group>"
        Then "Admin" verifies Ticket should be assigned to TeamMember "<TeamMember>"

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | Group                             | TeamMember              | NodeName        |
            | Automation_01M3 | Alert1    | 4    | Solarwinds  | QueueChannel | NinetyOne Infrastructure Networks | ITOps Virtual  Engineer | BWGAFG-01A-RVG1 |



    Scenario Outline: Verify sending 2 alerts first and another alert after 2 minutes

        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"
        When "Admin" sends "1" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<NewClusterSize>"

        Examples:
            | ProjectName     | AlertName | size | NewClusterSize | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | 2    | 3              | Solarwinds  | QueueChannel | GBLNGS-08A-SUA1 |

    Scenario Outline: Verify sending 2 solarwinds alerts and then 3 solarwinds alerts after 3 mins

        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "Admin" waits "1" minute to reach ticket threshold time
        And "Admin" waits "1" minute to reach ticket threshold time
        And "Admin" waits "1" minute to reach ticket threshold time
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"
        When "Admin" sends "3" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<NewClusterSize>"
        And Admin click on state
        And "admin" clicks on "Assign" button
        And "admin" clicks on "Individual" radio button
        And "admin" selects user from the team member drop down as "<Group>", "<TeamMember>"
        And "admin" clicks on assign button on the popup
        Then "Admin" verifies if "<Toaster>" message is displayed
        And Admin click on state
        And "Admin" clicks on "Hold" button

        Examples:
            | ProjectName     | AlertName | size | NewClusterSize | ChannelName | channelJson  | NodeName        | Group            | TeamMember      | Toaster                       |
            | Automation_01M3 | Alert1    | 2    | 3              | Solarwinds  | QueueChannel | CNHKIF-36A-SSC1 | Visibility - UST | Amjathsha Abdul | Tickets assigned successfully |

    Scenario Outline: Verify sending 3 solarwinds alerts within 30 minutes

        When "Admin" sends "3" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"
        And Admin click on state
        And Admin verifies Assign state
        And Admin verifies Active state


        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | 3    | Solarwinds  | QueueChannel | GGSPDC-01A-AOB1 |

    Scenario Outline: Verify sending 1 alert matching the acknowledgement rule

        When "Admin" sends "1" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"
        And Admin click on state
        And Admin verifies Acknowledge state

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | 1    | Solarwinds  | QueueChannel | ZAPRMP-00A-FPA2 |

    Scenario Outline: Admin sends two more alerts similar to the above alert

        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"
        And Admin click on state
        And Admin verifies Assign state
        And Admin verifies Active state
        And "Admin" clicks on the ticket number
        Then "Admin" verifies Ticket should be assigned to group "<Group>"
        Then "Admin" verifies Ticket should be assigned to TeamMember "<TeamMember>"

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | Group                             | TeamMember              | NodeName        |
            | Automation_01M3 | Alert1    | 3    | Solarwinds  | QueueChannel | NinetyOne Infrastructure Networks | ITOps Virtual  Engineer | ZAPRMP-00A-FPA2 |


    Scenario Outline: Acknowledged to ticketed- with no time frame

        When "Admin" sends "1" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | 4    | Solarwinds  | QueueChannel | ZAPRMP-00A-FPA2 |

