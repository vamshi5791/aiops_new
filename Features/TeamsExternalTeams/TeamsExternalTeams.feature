@TeamsExternalTeams @Regression

Feature: Teams > External Teams

    # Scenario Outline: Verify External Team import from ITSM tool as ITOps Admin

    #     When "Admin" navigates to ITOps home page
    #     And "Admin" enters project name in project search field and click on enter
    #     And "Admin" clicks on project name
    #     And "Admin" navigate to Configuration section
    #     And "Admin" clicks on external Teams
    #     And "admin" selects source as "Service Now" in external Teams
    #     And "admin" clicks on choose a group dropdown
    #     And "admin" search for a group as "ITOps" in external Teams
    #     And "Admin" verifies all the groups having "ITOpsTesting" should be displayed
    #     And "Admin" selects group in external Teams "<GroupName>"
    #     And "Admin" clicks on import button in external teams
    #     Then "Admin" verifies if "<SuccessMessage>" message is displayed

    #     Examples:
    #         | GroupName    | SuccessMessage        |
    #         | ITOpsTesting | User sync successful. |

    Scenario Outline: Verify the imported section in External teams for ITOps admin


        When "Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        And "Admin" navigate to Configuration section
        And "Admin" clicks on external Teams

        And "admin" clicks on all groups dropdown
        And "admin" searches for a group as "<GroupName>" in external Teams
        And "Admin" selects group in external Teams as "<GroupName>"

        Then "Admin" verifies Search option to be available
        And "Admin" verifies Refresh option to be available
        And "Admin" clicks on sort button
        And "Admin" verifies user list should be sorted alphabetically
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
        And "Admin" verifies user matching search should be displayed and his group also should be shown

        Examples:
            | GroupName                 | UserName          | SuccessMessage        |
            | UST - Enterprise Security | Chandranhari Nair | User sync successful. |


    Scenario Outline: Verify the imported section in External teams for ITOps admin


        When "Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        And Admin click on state in ticket console
        And "Admin" verifies groups shown in dropdown

        And "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And Admin click on state
        And "admin" clicks on "Assign" button
        And "admin" clicks on "Individual" radio button
        And "Admin" verifies groups shown in dropdown