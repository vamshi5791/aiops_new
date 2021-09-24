@MultipleAssignments @ITOps_Admin @Regression

Feature: ITOps admin Multiple Assignments from Alert Console

    #Multiple Assignments from Alert Console

    Scenario Outline: Verify that selecting multiple tickets and assign to team member works for ITOps admin

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name as "<ProjectName>" in the search field
        And "admin" clicks on project name "<ProjectName>"
        And "admin" clicks on Alerts page
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        And "admin" clicks on select all checkbox for the ticket number "<TicketNumber01>", "<TicketNumber02>"
        And "admin" clicks on 3 dots in top left
        And "admin" clicks on "Assign" button
        And "admin" clicks on "Individual" radio button
        And "admin" selects user from the team member drop down as "<Group>", "<TeamMember>"
        And "admin" clicks on assign button on the popup
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" verify the alert console for corresponding ticket cluster
        And "admin" clicks on a ticket and verify the ticket details page

        Examples:
            | ProjectName     | TicketNumber | AssignOption | Group            | TeamMember      | SuccessMessage                |
            | Automation_01M3 | INC0819624   | Assign       | Visibility - UST | Amjathsha Abdul | Tickets assigned successfully |

    Scenario Outline: Verify that selecting multiple tickets and self assign works


        When "admin" clicks on Alerts page
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        And "admin" clicks on select all checkbox for the ticket number "<TicketNumber01>", "<TicketNumber02>"
        And "admin" clicks on 3 dots in top left
        And "admin" clicks on "Assign" button
        And "admin" clicks on "To Me" radio button
        And "admin" selects user from the team member drop down as "<Group>"
        And "admin" clicks on assign button on the popup
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" verify the alert console for corresponding ticket cluster
        And "admin" clicks on a ticket and verify the ticket details page

        Examples:
            | ProjectName     | TicketNumber | AssignOption | Group            | TeamMember          | SuccessMessage                |
            | Automation_01M3 | INC0819624   | Assign       | Visibility - UST | Nimsoft Integration | Tickets assigned successfully |


    Scenario Outline: selecting multiple tickets of state Ticketed/Hold only can be selected for performing assign from 3 dots in Alert Console

        When "admin" clicks on Alerts page
        When "Admin" clicks on advanced filter icon
        And "admin" selects alert state as "<Alert_State>"
        And "Admin" clicks on apply button
        And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
        And "admin" clicks on select all checkbox for the ticket number "<TicketNumber01>", "<TicketNumber02>"
        And "admin" clicks on 3 dots in top left
        And "admin" clicks on "Assign" button
        And "admin" clicks on "Group" radio button
        And "admin" selects user from the team member drop down as "<Group>"
        And "admin" clicks on assign button on the popup
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" verify the alert console for corresponding ticket cluster
        And "admin" clicks on a ticket and verify the ticket details page

        Examples:
            | Alert_State | TicketNumber01 | TicketNumber02 | Group            | TeamMember      | SuccessMessage                |
            | Assigned    | INC0819624     | 167440050156   | Visibility - UST | Amjathsha Abdul | Tickets assigned successfully |

