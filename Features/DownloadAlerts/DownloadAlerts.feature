@DownloadAlerts  @ITOps_DisplayUser @Regression


Feature: Download Alerts

    Scenario Outline: Verify the user is able to download the alerts In csv file


        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name as "<ProjectName>" in the search field
        And "admin" clicks on project name "<ProjectName>"
        And "admin" clicks on Alerts page
        And "admin" clicks on download icon
        And "admin" reads data from alerts console
        And "admin" reads data from downloaded csv file
        Then "admin" verifies the data displayed is same as UI

        Examples:
            | ProjectName     |
            | Automation_02M3 |



