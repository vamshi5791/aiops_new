  @ITOps_Admin @Regression @TimeErrorAcknowledgementAlerts

Feature: Verifying TimeError indicator in Acknowledge Alerts
 
  Scenario Outline: Verifying TimeError indicator in Acknowledge Alerts
 
    When "ITOps_Admin" navigates to ITOps home page
    And "Admin" enters project name in project search field and click on enter
    And "Admin" clicks on project name
    When "admin" clicks on Alerts page tab
    And "admin" verifies pushed alert in alert console with "<AlertName>"
    And "admin" verifies pushed alert is in state Acknowledged
    Then "admin" verifies pushed alert has TimeError indicator

    Examples:
      | ProjectName     | AlertName | ChannelName | channelJson  |
      | Automation_S1   | Node3     | Solarwinds  | QueueChannel |