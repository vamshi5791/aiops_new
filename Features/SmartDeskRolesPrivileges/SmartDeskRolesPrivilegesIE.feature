@SmartDeskRolesPrivileges @Regression

Feature: Smart Desk - Roles/Privileges

    Scenario Outline: Role based page access and privilege for Installation engineer

        When "IE" navigates to ITOps home page
        And "IE" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "IE" clicks on project name "<ProjectName>"
        Then "IE" verifies no access to pages should be present
        Examples:
            | ProjectName |
            | Auto_01Desk |