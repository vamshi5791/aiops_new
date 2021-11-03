@AlertListingPage @ITOps_Milestone_3 @Regression @ITOps_Admin
Feature:  Alert Listing Page

    Scenario Outline: Verify on alert console rows per page and also defauld value is 10

        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        When "admin" clicks on Alerts page
        And "ITOps_Admin" default value in rows per page is "10"
        And "admin" clicks on rows per page dropdown
        Then "ITOps_admin" verifies rows per page contains "10,20,30,50 and 100"

        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName |
            | Automation_01M3 | Solarwinds  | QueueChannel | Node1    |

    Scenario Outline: Verify that user selected number of alerts are displayed on alert store

        When "admin" clicks on Alerts page
        And "admin" selects rows per page as "<No.Of.Rows>"
        Then "admin" verifies that on alert console "10" alerts are displayed

        Examples:
            | ProjectName     | No.Of.Rows | ChannelName | channelJson  | NodeName |
            | Automation_01M3 | 1          | Solarwinds  | QueueChannel | Node2    |