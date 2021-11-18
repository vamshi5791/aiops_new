@SmartDeskRolesPrivileges @Regression @ITOps_Milestone_4 @ITOPS_SmartDeskRoles

Feature: Smart Desk - Roles/Privileges

    Scenario Outline: Role based page access and privilege for Support engineer

        When "SupportEngineer" navigates to ITOps home page
        And "SupportEngineer" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "SupportEngineer" clicks on project name "<ProjectName>"
        And "SupportEngineer" navigate to dashboard section
        And "SupportEngineer" moves to the dashboard frame
        Then "SupportEngineer" verifies that the widget "Open Tickets in Service Now" is available in the dashboard
        Then "SupportEngineer" verifies that the widget "Mean Time To Repair" is available in the dashboard
        Then "SupportEngineer" verifies that the widget "Resolution SLA" is available in the dashboard
        When "SupportEngineer" comes out of the dashboard frame
        When "SupportEngineer" navigates to Tickets page
        When "SupportEngineer" clicks on quick filter
        And "SupportEngineer" selects filter by status type as "Assigned"
        When "SupportEngineer" get the ticket number from ticket console
        And "SupportEngineer" enters the ticket number in search field
        And Admin click on state in ticket console
        Then "SupportEngineer" verifies recommended resolution should be available
        And "SupportEngineer" clicks on assign button
        And "SupportEngineer" clicks on "Individual" radio button
        And "SupportEngineer" selects user from the team member drop down as "<Group>", "<TeamMember>"
        And "SupportEngineer" clicks on assign button on the popup
        Then "SupportEngineer" verifies if "<SuccessMessage>" message is displayed
        And Admin click on state in ticket console
        And "SupportEngineer" clicks on "Hold" button
        Then "SupportEngineer" verifies if "<HoldSuccessMessage>" message is displayed
        And Admin click on state in ticket console
        And "SupportEngineer" clicks on "Resolve" button
        And "SupportEngineer" enters resolve note as "<ResolveNote>"
        And "SupportEngineer" clicks on resolve button after entering closure note
        Then "SupportEngineer" verifies if "<ResolveSuccessMessage>" message is displayed
        When "SupportEngineer" clicks on the ticket number in ticket console
        And "SupportEngineer" verifies infrastructure page should not be available
        Then "SupportEngineer" able to access configuration section
        When "SupportEngineer" navigate to Configuration section
        Then "SupportEngineer" verifies import button should not be available

        Examples:
            | ProjectName | SuccessMessage                | Group            | TeamMember      | HoldSuccessMessage            | ResolveSuccessMessage        |
            | Auto_01Desk | Tickets assigned successfully | Visibility - UST | Amjathsha Abdul | Ticket(s) holded successfully | Ticket resolved successfully |