@Dashboard @ITOps_IE @Regression

Feature: Login persona functionalities of Installation Engineer

    Scenario Outline: Verify that Installation Engineer don't have access to Dashboard
        When "Installation_Engineer" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        And "Installation_Engineer" unable to access dashboard
        Examples:
            | ProjectName      |
            | Automation_IB_24 |