@DownloadAlerts  @ITOps_DisplayUser @Regression

Feature: Download Alerts


Scenario Outline: Verify the user is able to download the alerts In csv file

   When "admin" clicks on Alerts page
   And "admin" clicks on download icon button
   And "admin" reads data from alerts console
   And "admin" reads data from downloaded csv file
   Then "admin" verifies the data displayed is same as UI

       Examples:
           |  ProjectName  |
           |Automation_01M3|
