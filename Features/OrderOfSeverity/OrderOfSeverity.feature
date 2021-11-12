@OrderOfSeverity  @ITOps_Admin @Regression

Feature:  Order of severity

    Scenario Outline: Order of severity,  in all filter dropdowns

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        When "Admin" clicks on Alerts page

        And "admin" clicks on Filter by severity drop down
        And "Admin" verifies critical filter from dropdown
        And "Admin" verifies major filter from dropdown
        And "Admin" verifies minor filter from dropdown
        And "Admin" verifies warning filter from dropdown
        And "Admin" verifies ok filter from dropdown
        And "Admin" verifies information filter from dropdown

        Examples:
            | UserName    | Password | ProjectName     |
            | Itops_admin | qa123    | Automation_01M3 |