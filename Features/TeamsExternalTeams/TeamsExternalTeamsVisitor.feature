@TeamsExternalTeams @Regression

Feature: Teams > External Teams

    Scenario Outline: Verify External Team imported from ITSM tool for Support engineer/ITOps Visitor

        And "Admin" navigate to Configuration section
        And "Admin" clicks on external Teams

        And "Admin" clicks on sort button
        And "admin" clicks on all groups dropdown
        And "admin" searches for a group as "<GroupName>" in external Teams
        And "Admin" selects group in external Teams as "<GroupName>"
        Then "Admin" verifies import button should not be available
        Then "Admin" verifies Search option to be available
        And "Admin" verifies sort option to be available
        And "Admin" verifies Refresh option should not be available
        Examples:
            | GroupName                     | UserName          |
            | UST - REFM TVM Admin Security | Chandranhari Nair |
