@SmartDeskRolesPrivileges @Regression @ITOps_Milestone_4 @ITOPS_SmartDeskRoles

Feature: Smart Desk - Roles/Privileges

    Scenario Outline: Role based page access and privilege for Support engineer

        When user enters Username as "Itops_support", Password as "qa123" and clicks on Login button
        Then ITOps home page is displayed

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
        When "SupportEngineer" clicks on the ticket number in ticket console
        When "SupportEngineer" navigate to Configuration section
        Then "SupportEngineer" able to access configuration section
        Then "SupportEngineer" verifies import button to be enabled on selecting source and group
        And "SupportEngineer" verifies Refresh option to be available

        When "user" clicks on logout button

        Examples:
            | ProjectName |
            | Auto_01Desk |