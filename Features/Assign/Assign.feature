@Assign @ITOps_Admin @Regression

Feature: Assign

    Scenario Outline: Verify Assigning tickets from alert console to individual in ITOps

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name as "<ProjectName>" in the search field
        And "admin" clicks on project name "<ProjectName>"
        And "admin" clicks on Alerts page
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        And "admin" clicks on "Individual" radio button
        And "admin" selects user from the team member drop down as "<Group>", "<TeamMember>"
        And "admin" clicks on assign button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" Verifies the Alert console for the particular ticket


        Examples:
            | ProjectName     | TicketNumber | AssignOption | Group            | TeamMember      | SuccessMessage                |
            | Automation_01M3 | INC0819869   | Assign       | Visibility - UST | Amjathsha Abdul | Tickets assigned successfully |

    Scenario Outline: Verify Assigning tickets from alert console to group in ITOps


        And "admin" clicks on Alerts page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        # And "admin" clicks on assign option from state drop down as "<AssignOption>"
        And "admin" clicks on "Group" radio button
        And "admin" selects user from the team member drop down as "<Group>"
        And "admin" clicks on assign button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" Verifies the Alert console for the particular ticket

        Examples:
            | TicketNumber | AssignOption | Group            |
            | INC0819869   | Assign       | Visibility - UST |

    Scenario Outline: Verify self Assign from Alert Console

        And "admin" clicks on Alerts page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        #And "admin" clicks on assign option from state drop down as "<AssignOption>"
        And "admin" clicks on "To Me" radio button
        And "admin" selects user from the team member drop down as "<Group>"
        And "admin" clicks on assign button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        And "admin" clicks on Alerts page
        Then "admin" Verifies the Alert console for the particular ticket
        When "admin" clicks on refresh button in alert console
        And "admin" clicks on "State/Action" dropdown
        Then "admin" verifies "State/Action" should have further actions like "Hold", "assign"
        When "admin" navigates to Tickets page
        Then "admin" verifies 'Assigned To' card should have assigned users name and group name
        Examples:
            | ProjectName     | TicketNumber | AssignOption | Group        |
            | Automation_01M3 | INC0819869   | Assign       | ITOpsTesting |
    
    Scenario Outline: Verify Closing tickets from Assigned status in ITOps

        When "admin" clicks on Alerts page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on "open" option of the ticket
        And "admin" clicks on "Close" button
        When "admin" enters closure note as "<ClosureNote>" and click on Ok
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        When "admin" clicks on refresh button in alert console
        Then "admin" verifies "State/Action" should have "closed" option
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        And "admin" clicks on Closure Notes tab in ticket details page
        Then "admin" verifies closure note as "<ClosureNote>"

        Examples:
            | ProjectName   | TicketNumber | SuccessMessage                | ClosureNote     |
            | Automation_M3 | INC0817122   | Alerts(s) closed successfully | Automation Test |

    
    Scenario Outline: Verify group assign from ticket details page
        When "admin" navigates to Tickets page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        And "admin" clicks on "Group" radio button
        And "admin" selects user from the team member drop down as "<Group>"
        And "admin" clicks on assign button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" verifies Ticket should be assigned to group "<Group>"
        Examples:
            | Group            | TicketNumber | SuccessMessage                |
            | Visibility - UST | INC0819869   | Tickets assigned successfully |

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

        Examples:
            | Group            | TicketNumber | SuccessMessage                | TeamMember          |
            | Visibility - UST | INC0819869   | Tickets assigned successfully | Nimsoft Integration |

    Scenario Outline: Verify self assign from ticket  console

        When "admin" navigates to Tickets page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        And "admin" clicks on "To Me" radio button
        And "admin" selects user from the team member drop down as "<SelfAssign>"
        And "admin" clicks on assign button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed

        Examples:
            | Group            | TicketNumber | SuccessMessage                | TeamMember      |
            | Visibility - UST | INC0819869   | Tickets assigned successfully | Amjathsha Abdul |

    Scenario Outline: Verify group assign from ticket listing page

        When "admin" navigates to Tickets page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        And "admin" clicks on "Group" radio button
        And "admin" selects user from the team member drop down as "<Group>"
        And "admin" clicks on assign button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" verifies Ticket should be assigned to group "<Group>"
        Examples:
            | Group            | TicketNumber | SuccessMessage                |
            | Visibility - UST | INC0819869   | Tickets assigned successfully |

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
            | Group            | TicketNumber | SuccessMessage                | TeamMember      |
            | Visibility - UST | INC0819869   | Tickets assigned successfully | Amjathsha Abdul |


    # Service now test cases

    Scenario Outline: Verify tickets in Service now after it is assigned in ITOps to a team member

        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be Active
        And "admin" verifies ticket is assigned ITOps to a team member "<TeamMember>"

        Examples:
            | IncidentId | TeamMember      |
            | INC0819574 | Amjathsha Abdul |


    Scenario Outline: Verify tickets in Service now after it is self assigned in ITOps from Alert Console

        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be Active
        And "admin" verifies ticket is assigned to self "<TeamMember>"

        Examples:
            | IncidentId | TeamMember      |
            | INC0817132 | Amjathsha Abdul |

    Scenario Outline: Verify tickets in Service now after it is self assigned in ITOps from Ticket details page

        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be Active
        And "admin" verifies ticket is assigned to self "<TeamMember>"

        Examples:
            | IncidentId | TeamMember      |
            | INC0817132 | Amjathsha Abdul |

    Scenario Outline: Verify tickets in Service now after it is closed in ITOps

        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies the Close Notes for the ticket as "<CloseNote>"
        And "admin" verifies state of ticket should be Resolved
        Examples:
            | IncidentId | CloseNote       |
            | INC0817132 | Amjathsha Abdul |