@Assign @ITOps_Admin @Regression

Feature: Assign

    Scenario Outline: Verify Assigning tickets from alert console to individual in ITOps

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "admin" clicks on "Individual" radio button
        And "admin" selects user from the team member drop down as "<Group>", "<TeamMember>"
        And "admin" clicks on assign button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        And Admin click on state
        And Admin verifies Assign state
        And Admin verifies Hold state
        And Admin verifies Resolve state
        And Admin verifies Active state
        Then "admin" Verifies the Alert console for the particular ticket

        Examples:
            | ProjectName     | Group            | TeamMember      | SuccessMessage                | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Visibility - UST | Amjathsha Abdul | Tickets assigned successfully | Solarwinds  | QueueChannel | AUSYCT-28A-SBC1 |

    # # Service now test cases

    Scenario Outline: Verify tickets in Service now after it is assigned in ITOps to a team member
        When "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        When "Admin" gets the ticket number from alert console
        And "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be "Active"
        And "admin" verifies ticket is assigned ITOps to a team member "<TeamMember>"

        Examples:
            | IncidentId | TeamMember  | NodeName        |
            | INC0820489 | Kevin Soman | AUSYCT-28A-SBC1 |

    Scenario Outline: Verify Assigning tickets from alert console to group in ITOps

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "admin" clicks on "Group" radio button
        And "admin" selects user from the team member drop down as "<Group>"
        And "admin" clicks on assign button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" Verifies the Alert console for the particular ticket

        Examples:
            | ProjectName     | Group            | SuccessMessage                | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Visibility - UST | Tickets assigned successfully | Solarwinds  | QueueChannel | ZACTHS-00B-SUA1 |


    #Test case on Hold

    # Scenario Outline: Verify self Assign from Alert Console

    #     And "admin" clicks on Alerts page
    #     And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
    #     And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
    #     #And "admin" clicks on assign option from state drop down as "<AssignOption>"
    #     And "admin" clicks on "To Me" radio button
    #     And "admin" selects user from the team member drop down as "<Group>"
    #     And "admin" clicks on assign button
    #     Then "Admin" verifies if "<SuccessMessage>" message is displayed
    #     And "admin" clicks on Alerts page
    #     Then "admin" Verifies the Alert console for the particular ticket
    #     When "admin" clicks on refresh button in alert console
    #     And "admin" clicks on "State/Action" dropdown
    #     Then "admin" verifies "State/Action" should have further actions like "Hold", "assign"
    #     When "admin" navigates to Tickets page
    #     And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
    #     Then "admin" verifies 'Assigned To' card should have assigned users name and group name
    #     Examples:
    #         | ProjectName     | TicketNumber | AssignOption | Group        |
    #         | Automation_01M3 | INC0819869   | Assign       | ITOpsTesting |

    # # Service now test case

    # Scenario Outline: Verify tickets in Service now after it is self assigned in ITOps from Alert Console

    #     When "admin" login in to service now and search for the incident id as "<IncidentId>"
    #     Then "admin" verifies state of ticket should be Active
    #     And "admin" verifies ticket is assigned to self "<TeamMember>"

    #     Examples:
    #         | IncidentId | TeamMember      |
    #         | INC0817132 | Amjathsha Abdul |

    # Scenario Outline: Verify self Assign from ticket details page

    #     When "admin" navigates to Tickets page
    #     And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
    #     And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
    #     #And "admin" clicks on assign option from state drop down as "<AssignOption>"
    #     And "admin" clicks on "To Me" radio button
    #     And "admin" selects user from the team member drop down as "<Group>"
    #     And "admin" clicks on assign button
    #     Then "Admin" verifies if "<SuccessMessage>" message is displayed
    #     And "admin" clicks on Alerts page
    #     Then "admin" Verifies the Alert console for the particular ticket
    #     When "admin" clicks on refresh button in alert console
    #     And "admin" clicks on "State/Action" dropdown
    #     Then "admin" verifies "State/Action" should have further actions like "Hold", "assign"
    #     When "admin" navigates to Tickets page
    #     And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
    #     Then "admin" verifies 'Assigned To' card should have assigned users name and group name
    #     Examples:
    #         | ProjectName     | TicketNumber | AssignOption | Group        |
    #         | Automation_01M3 | INC0819869   | Assign       | ITOpsTesting |

    # # Service now test case

    # Scenario Outline: Verify tickets in Service now after it is self assigned in ITOps from Alert Console

    #     When "admin" login in to service now and search for the incident id as "<IncidentId>"
    #     Then "admin" verifies state of ticket should be Active
    #     And "admin" verifies ticket is assigned to self "<TeamMember>"

    #     Examples:
    #         | IncidentId | TeamMember      |
    #         | INC0817132 | Amjathsha Abdul |




    # Scenario Outline: Verify Closing tickets from Assigned status in ITOps

    #     When "admin" clicks on Alerts page
    #     And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
    #     And "admin" clicks on "open" option of the ticket
    #     And "admin" clicks on "Close" button
    #     When "admin" enters closure note as "<ClosureNote>" and click on Ok
    #     Then "Admin" verifies if "<SuccessMessage>" message is displayed
    #     When "admin" clicks on refresh button in alert console
    #     Then "admin" verifies "State/Action" should have "closed" option
    #     And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
    #     And "admin" clicks on Closure Notes tab in ticket details page
    #     Then "admin" verifies closure note as "<ClosureNote>"

    #     Examples:
    #         | TicketNumber | SuccessMessage                | ClosureNote     |
    #         | INC0820489   | Alerts(s) closed successfully | Automation Test |

    # # Service now test case

    # Scenario Outline: Verify tickets in Service now after it is closed in ITOps

    #     When "admin" login in to service now and search for the incident id as "<IncidentId>"
    #     Then "admin" verifies state of ticket should be "Resolved"
    #     And "admin" verifies ticket closure note as "<ClosureNote>"

    #     Examples:
    #         | IncidentId | TeamMember      | ClosureNote     |
    #         | INC0820489 | Amjathsha Abdul | Automation Test |

    Scenario Outline: Verify group assign from ticket details page

        When "admin" navigates to Tickets page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        And "admin" clicks on "Group" radio button
        And "admin" selects user from the team member drop down as "<Group>"
        And "admin" clicks on assign button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" verifies Ticket should be assigned to group "<Group>"
        And Admin click on state
        And Admin verifies Assign state
        And Admin verifies Hold state
        Examples:
            | Group            | TicketNumber | SuccessMessage                |
            | Visibility - UST | INC0820489   | Tickets assigned successfully |

    Scenario Outline: Verify individual assign from ticket details page

        When "admin" navigates to Tickets page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        And "admin" clicks on "Individual" radio button
        And "admin" selects user from the team member drop down as "<Group>", "<TeamMember>"
        And "admin" clicks on assign button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" verifies Ticket should be assigned to group "<Group>"
        Then "admin" verifies Ticket should be assigned to TeamMember "<TeamMember>"
        And Admin click on state
        And Admin verifies Assign state
        And Admin verifies Hold state
        And Admin verifies Resolve state


        Examples:
            | Group                 | TicketNumber | SuccessMessage                | TeamMember       |
            | UST - Helpdesk/L1 CAB | INC0820489   | Tickets assigned successfully | Aneesh Jayarajan |

    # Scenario Outline: Verify self assign from ticket  console

    #     When "admin" navigates to Tickets page
    #     And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
    #     And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
    #     And "admin" clicks on "To Me" radio button
    #     And "admin" selects user from the team member drop down as "<SelfAssign>"
    #     And "admin" clicks on assign button
    #     Then "Admin" verifies if "<SuccessMessage>" message is displayed

    #     Examples:
    #         | Group            | TicketNumber | SuccessMessage                | TeamMember      |
    #         | Visibility - UST | INC0819869   | Tickets assigned successfully | Amjathsha Abdul |

    Scenario Outline: Verify group assign from ticket listing page

        When "admin" navigates to Tickets page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        And "admin" clicks on "Group" radio button
        And "admin" selects user from the team member drop down as "<Group>"
        And "admin" clicks on assign button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" verifies Ticket should be assigned to group "<Group>"
        And Admin click on state
        And Admin verifies Assign state
        And Admin verifies Hold state
        
        Examples:
            | Group            | TicketNumber | SuccessMessage                |
            | Visibility - UST | INC0820489   | Tickets assigned successfully |

    Scenario Outline: Verify individual assign from ticket listing page

        When "admin" navigates to Tickets page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        And "admin" clicks on "Individual" radio button
        And "admin" selects user from the team member drop down as "<Group>", "<TeamMember>"
        And "admin" clicks on assign button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" verifies Ticket should be assigned to group "<Group>"
        Then "admin" verifies Ticket should be assigned to TeamMember "<TeamMember>"

        Examples:
            | Group                 | TicketNumber | SuccessMessage                | TeamMember  |
            | UST - Helpdesk/L1 CAB | INC0820489   | Tickets assigned successfully | Kevin Soman |

