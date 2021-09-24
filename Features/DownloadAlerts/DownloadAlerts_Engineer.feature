@DownloadAlerts  @ITOps_DisplayUser @Regression

Feature: Download Alerts

    Scenario Outline: Verify the user is able to download the alerts In csv file

        When "ITOps_Engineer" navigates to ITOps home page
        And "ITOps_Engineer" enters project name as "<ProjectName>" in the search field
        And "ITOps_Engineer" clicks on project name "<ProjectName>"
        And "ITOps_Engineer" clicks on Alerts page
        And "ITOps_Engineer" clicks on download icon
        And "ITOps_Engineer" reads data from alerts console
        And "ITOps_Engineer" reads data from downloaded csv file
        Then "ITOps_Engineer" verifies the data displayed is same as UI

        Examples:
            | ProjectName     |
            | Automation_02M3 |