@DownloadAlerts  @ITOps_DisplayUser @Regression

Feature: Download Alerts with Itops Engineer

    Scenario Outline: Verify the ITOps Engineer is able to download the alerts In csv file

        When "Admin" sends "1" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Engineer" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        And "ITOps_Engineer" clicks on Alerts page
        And "ITOps_Engineer" clicks on download icon
        And "ITOps_Engineer" reads data from alerts console
        And "ITOps_Engineer" reads data from downloaded csv file
        Then "ITOps_Engineer" verifies the data displayed is same as UI

        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Solarwinds  | QueueChannel | IAMLFSCPRDDC1-2 |