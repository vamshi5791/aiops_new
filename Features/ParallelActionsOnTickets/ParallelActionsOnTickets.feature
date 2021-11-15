@ParallelActionsOnTickets @ITOps_Milestone_4 @Regression @ITOps_Admin
Feature: Parallel Actions On Tickets

    Feature Description

    Scenario Outline: Verify Closing ticket in Service now and Assign to team member from ITOps ticket details page fastly within seconds
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter

        And "admin" clicks on project name
        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        When "Admin" get the ticket number from ticket console
        And "admin" enters the ticket number in search field
        When "Resolve" ticket "<IncidentId>" in "service now" by changing state as "Resolved", category as "Skype for Business", subcategory as "Conference Call", close code as "Monitoring Incident", Enter close note as "USTIB"
        When "admin" navigates to Tickets page
        And "admin" enters the ticket number in search field
        And Admin click on state in ticket console
        And "admin" clicks on "Assign" button
        And "admin" clicks on "Individual" radio button
        And "admin" selects user from the team member drop down as "<Group>", "<TeamMember>"
        And "admin" clicks on assign button on the popup
        Then "Admin" verifies if "<ErrorMessage>" message is displayed
        And "admin" clicks on Alerts page
        And "admin" enters the ticket number in search field
        Then "admin" verifies ticket status as "closed" "By system"
        Examples:
            | IncidentId | ErrorMessage                | Group            | TeamMember      |
            | INC0820381 | Ticket(s) Assignment failed | Visibility - UST | Amjathsha Abdul |

    Scenario Outline: Verify closing tickets in service now and perform hold from ITOps alert console fastly within seconds

        And "admin" clicks on Alerts page
        And "ITOps_Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects Alert State as "Assigned"
        And "ITOps_Admin" clicks on apply button
        And "Admin" gets the ticket number from alert console
        And "admin" enters the ticket number in search box
        When "Closing" ticket number in "service now" by changing state as "Resolved", category as "Skype for Business", subcategory as "Conference Call", close code as "Monitoring Incident", Enter close note as "USTIB"
        And Admin click on state
        And "admin" clicks on "Hold" button
        Then "Admin" verifies if "<ErrorMessage>" message is displayed
        Examples:
            | ErrorMessage          |
            | Ticket(s) Hold failed |

    Scenario Outline: Verify Closing ticket in Service now and do hold from  ticket console fastly within seconds
        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        When "Admin" get the ticket number from ticket console
        And "admin" enters the ticket number in search field
        When "Resolve" ticket "<IncidentId>" in "service now" by changing state as "Resolved", category as "Skype for Business", subcategory as "Conference Call", close code as "Monitoring Incident", Enter close note as "USTIB"
        When "admin" navigates to Tickets page
        And "admin" enters the ticket number in search field
        And Admin click on state in ticket console
        And "admin" clicks on "Hold" button
        Then "Admin" verifies if "<ErrorMessage>" message is displayed

        Examples:
            | ProjectName     | IncidentId | ErrorMessage          |
            | Automation_01M3 | INC0820381 | Ticket(s) Hold failed |