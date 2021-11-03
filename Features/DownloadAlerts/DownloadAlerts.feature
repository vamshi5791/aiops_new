@DownloadAlerts  @ITOps_DisplayUser @Regression

Feature: Download Alerts


    Scenario Outline: Verify the user is able to download the alerts In csv file

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        When "admin" clicks on Alerts page
        And "admin" clicks on download icon button
        And "admin" reads data from alerts console
        And "admin" reads data from downloaded csv file
        Then "admin" verifies the data displayed is same as UI

        Examples:
            | ProjectName     |
            | Automation_01M3 |
