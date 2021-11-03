@SplitFunctionality  @ITOps_Milestone_3 @ITOps_Admin

Feature: Split functionality

    Scenario Outline: Verify the split functionality - Normal alerts

        When "Admin" sends "5" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"
        And "admin" clicks on the cluster count for the ticketed alert from previous step
        And "Admin" selects first alert from pop up
        And "Admin" selects second alert from pop up
        And "Admin" selects create ticket from pop up
        And "Admin" clicks on confirm
        # And verify base cluster size must be "<size>"
        And "Admin" gets the ticket number
        And "Admin" gets the base ticket number

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson   | NodeName        | NewClusterSize |
            | Automation_01M3 | Alert1    | 5    | Solarwinds  | QueueChannel2 | AUMECO-50A-AOB1 | 3              |

    Scenario Outline: Verify the split functionality - existing Ticket verification

        When "Admin" verifies ticket is assigned to group "<Assignment_group_id>"
        And "Admin" verifies ticket is assigned to "<Assigned_to_id>"
        And "Admin" verifies number of occurence is for "<TicketNumberOf3Alerts>" is "<occurence>"

        Examples:
            | ProjectName     | AlertName | size | TicketNumberOf3Alerts | Assigned_to_id          | Assignment_group_id               | occurence |
            | Automation_01M3 | Alert1    | 5    | INC0821870            | ITOps Virtual  Engineer | NinetyOne Infrastructure Networks | 3         |

    Scenario Outline: Verify the split functionality - New Ticket verification

        When "Admin" verifies new ticket is assigned to group "<Assignment_group_id>"
        And "Admin" verifies new ticket is assigned to "<Assigned_to_id>"
        And "Admin" verifies number of occurence is for "<TicketNumberOf2Alerts>" is "<occurence>"

        Examples:
            | ProjectName     | AlertName | size | TicketNumberOf2Alerts | Assigned_to_id | Assignment_group_id               | occurence |
            | Automation_01M3 | Alert1    | 5    | INC0821871            |                | NinetyOne Infrastructure Networks | 2         |

    Scenario Outline: Verify the split functionality - Acknowledge alerts

        When "Admin" sends "5" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        # And verify cluster size must be "<size>"
        And "admin" clicks on the cluster count for the ticketed alert from previous step
        And "Admin" selects first alert from pop up
        And "Admin" selects second alert from pop up
        And "Admin" selects create ticket from pop up
        And "Admin" clicks on confirm
        And "Admin" gets the ticket number
        And "Admin" gets the base ticket number

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        | NewClusterSize |
            | Automation_01M3 | Alert1    | 5    | Solarwinds  | QueueChannel | LULUMT-00A-FPA1 | 3              |

    Scenario Outline: Verify the split functionality - existing Ticket verification for Acknowledge alerts

        When "Admin" verifies ticket is assigned to group "<Assignment_group_id>"
        And "Admin" verifies ticket is assigned to "<Assigned_to_id>"
        And "Admin" verifies number of occurence is for "<TicketNumberOf3Alerts>" is "<occurence>"

        Examples:
            | ProjectName     | AlertName | size | TicketNumberOf3Alerts | Assigned_to_id          | Assignment_group_id               | occurence |
            | Automation_01M3 | Alert1    | 5    | INC0821870            | ITOps Virtual  Engineer | NinetyOne Infrastructure Networks | 3         |

    Scenario Outline: Verify the split functionality - New Ticket verification

        When "Admin" verifies new ticket is assigned to group "<Assignment_group_id>"
        And "Admin" verifies new ticket is assigned to "<Assigned_to_id>"
        And "Admin" verifies number of occurence is for "<TicketNumberOf2Alerts>" is "<occurence>"

        Examples:
            | ProjectName     | AlertName | size | TicketNumberOf2Alerts | Assigned_to_id | Assignment_group_id               | occurence |
            | Automation_01M3 | Alert1    | 5    | INC0821871            |                | NinetyOne Infrastructure Networks | 2         |

    Scenario Outline: Verify the split functionality - Acknowledge alerts but not ticketed

        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        # And "Admin" sets the ticketing threshold to 3
        And "Admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And verify cluster size must be "<size>"
        And "admin" clicks on the cluster count for the ticketed alert from previous step
        And "Admin" selects all alerts from pop up
        And "Admin" selects create ticket from pop up
        And "Admin" clicks on confirm
        
        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        | NewClusterSize |
            | Automation_01M3 | Alert1    | 2    | Solarwinds  | QueueChannel | ZAJBGD-04B-FPA1 | 3              |