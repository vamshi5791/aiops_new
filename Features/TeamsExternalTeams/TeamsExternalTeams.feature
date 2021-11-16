@TeamsExternalTeams @Regression @MileStone4 @ItOpsAdmin

Feature: Teams > External Teams

    Scenario Outline: Verify External Team import from ITSM tool as ITOps Admin

        When "Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        And "Admin" navigate to Configuration section
        And "Admin" clicks on external Teams
        And "admin" selects source as "Service Now" in external Teams
        And "admin" clicks on choose a group dropdown
        And "admin" search for a group as "ITOps" in external Teams
        And "Admin" verifies all the groups having "ITOpsPTTesting" should be displayed
        And "Admin" selects group in external Teams "<GroupName>"
        And "Admin" clicks on import button in external teams
        Then "Admin" verifies if "<SuccessMessage>" message is displayed

        Examples:
            | GroupName      | SuccessMessage              |
            | ITOpsPTTesting | Users imported successfully |

    Scenario Outline: Verify the imported section in External teams for ITOps admin

        When "Admin" navigate to Configuration section
        And "Admin" clicks on external Teams

        And "admin" clicks on all groups dropdown
        And "admin" searches for a group as "<GroupName>" in external Teams
        And "Admin" selects group in external Teams as "<GroupName>"

        Then "Admin" verifies Search option to be available
        And "Admin" verifies Refresh option to be available
        Then "Admin" verifies the all team member names are in alphabetical
        Then "Admin" searches for user in search box as "<UserName>"
        And "Admin" navigate to Configuration section

        And "Admin" clicks on external Teams
        And "admin" clicks on all groups dropdown
        And "admin" searches for a group as "All Groups" in external Teams
        And "Admin" selects group in external Teams as "All Groups"

        Then "Admin" verifies Search option to be available
        And "Admin" verifies sort option to be available
        And "Admin" verifies Refresh option should not be available
        Then "Admin" searches for user in search box as "<UserName>"
        And "Admin" verifies user matching search should be displayed and his group also should be shown "<UserName>", "<Group>"

        Examples:
            | GroupName    | UserName          |
            | ITOpsTesting | Chandranhari Nair |


    Scenario Outline: Verify that only imported groups and its users should be available in assign dropdowns.

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        And Admin click on state in ticket console
        And "admin" clicks on "Assign" button
        And "admin" clicks on "Individual" radio button
        And "admin" clicks on choose a group dropdown on assign to popup
        And "Admin" verifies groups shown in dropdown "UST - Enterprise Security", "Visibility - UST"
        And "Admin" clicks on cancel button
        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        And Admin click on state in ticket console
        And "admin" clicks on "Assign" button
        And "admin" clicks on "Group" radio button
        And "admin" clicks on choose a group dropdown on assign to popup
        And "Admin" verifies groups shown in dropdown "UST - Enterprise Security", "Visibility - UST"
        And "Admin" clicks on cancel button

        Examples:
            | GroupName                 | UserName          |
            | UST - Enterprise Security | Chandranhari Nair |
