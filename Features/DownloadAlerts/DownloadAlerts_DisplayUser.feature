@DownloadAlerts  @ITOps_DisplayUser @Regression

Feature: Download Alerts

    Scenario Outline: Verify the itops_displayuser user is not able to download the alerts In csv file

        When "DisplayUser" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        And "DisplayUser" clicks on Alerts page
        Then "DisplayUser" verifies that download option should not be present

        Examples:
            | ProjectName      |
            | Automation_IB_24 |