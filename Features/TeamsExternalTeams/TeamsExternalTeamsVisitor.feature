@TeamsExternalTeams @Regression

Feature: Teams > External Teams

    Scenario Outline: Verify External Team imported from ITSM tool for Support engineer/ITOps Visitor

        And "Admin" navigate to Configuration section
        And "Admin" clicks on external Teams

        And "Admin" clicks on sort button
        Then "Admin" searches for user in search box as "<UserName>"

        And "admin" searches for a group as "<GroupName>" in external Teams
        And "Admin" selects group in external Teams as "<GroupName>"

        Then "Admin" verifies import button should not be available

        Then "Admin" verifies Search option to be available
        And "Admin" verifies sort option to be available
        And "Admin" verifies Refresh option should not be available
        Examples:
            | GroupName                 | UserName          |
            | UST - Enterprise Security | Chandranhari Nair |
