@AlertListingPage @ITOps_Milestone_3 @Regression @ITOps_Admin
Feature:  Alert Listing Page

    Scenario Outline: Verify on alert console rows per page and also defauld value is 10

        When "admin" clicks on Alerts page
        And "ITOps_Admin" default value in rows per page is "10"
        And "admin" clicks on rows per page dropdown
        Then "ITOps_admin" verifies rows per page contains "10,20,30,50 and 100"

        Examples:
            | ProjectName     |
            | Automation_01M3 |

    Scenario Outline: Verify that user selected number of alerts are displayed on alert store

        When "Admin" sends "1" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        When "admin" clicks on Alerts page
        And "admin" selects rows per page as "<No.Of.Rows>"
        Then "admin" verifies that on alert console "1" alerts are displayed

        Examples:
            | ProjectName     | No.Of.Rows | ChannelName | channelJson  |
            | Automation_01M3 | 10         | Solarwinds  | QueueChannel |