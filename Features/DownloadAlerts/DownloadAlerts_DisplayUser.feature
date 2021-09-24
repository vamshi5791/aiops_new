@DownloadAlerts  @ITOps_DisplayUser @Regression

Feature: Download Alerts

    Scenario Outline: Verify the itops_displayuser user is not able to download the alerts In csv file

        When "DisplayUser" navigates to ITOps home page
        And "DisplayUser" enters project name as "<ProjectName>" in the search field
        And "DisplayUser" clicks on project name "<ProjectName>"
        And "DisplayUser" clicks on Alerts page
        Then "DisplayUser" verifies that download option should not be present

        Examples:
            | ProjectName      |
            | Automation_IB_24 |