@SmartDeskRolesPrivileges  @ITOps_Milestone_4  @Regression @ITOps_Admin

Feature: Smart Desk - Roles/Privileges

    Scenario Outline: Role based page access and privilege for ITOps admin

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"
        And "Admin" navigate to dashboard section
        And "admin" moves to the dashboard frame
        Then "Admin" verifies that the widget "Open Tickets in Service Now" is available in the dashboard
        Then "Admin" verifies that the widget "Mean Time To Repair" is available in the dashboard
        Then "Admin" verifies that the widget "Resolution SLA" is available in the dashboard
        When "Admin" comes out of the dashboard frame
        And "admin" verifies infrastructure page should not be available
        When "admin" navigates to Tickets page
        When "Admin" clicks on the ticket number in ticket console

        When "Admin" navigate to Configuration section
        Then "Admin" able to access configuration section
        And "Admin" clicks on external Teams
        Then "admin" verifies import button before selecting source and group should be disabled
        And "admin" selects source as "Service Now" in external Teams
        And "admin" clicks on choose a group dropdown
        And "admin" search for a group as "UST" in external Teams
        And "Admin" selects group in external Teams "<GroupName>"
        Then "Admin" verifies import button to be enabled on selecting source and group
        And "admin" clicks on all groups dropdown
        And "admin" searches for a group as "<GroupName>" in external Teams
        And "Admin" selects group in external Teams as "<GroupName>"
        And "Admin" verifies Refresh option to be available
        Examples:
            | ProjectName | GroupName                     |
            | Auto_01Desk | UST - REFM TVM Admin Security |