@SmartDeskRolesPrivileges @Regression

Feature: Smart Desk - Roles/Privileges

    Scenario Outline: Role based page access and privilege for ITOps Visitor

        When "Itops_visitor" navigates to ITOps home page
        And "Itops_visitor" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Itops_visitor" clicks on project name "<ProjectName>"
        And "Itops_visitor" navigate to dashboard section
        And "Itops_visitor" moves to the dashboard frame
        Then "Itops_visitor" verifies that the widget "Open Tickets in Service Now" is available in the dashboard
        Then "Itops_visitor" verifies that the widget "Mean Time To Repair" is available in the dashboard
        Then "Itops_visitor" verifies that the widget "Resolution SLA" is available in the dashboard
        When "Itops_visitor" comes out of the dashboard frame
        When "Itops_visitor" navigates to Tickets page
        Then "Itops_visitor" able to access configuration section
        And "Itops_visitor" verifies infrastructure page should not be available

        Examples:
            | ProjectName |
            | Auto_01Desk |