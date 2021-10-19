  @ITOps_Admin @Regression @TimeErrorAcknowledgementAlerts

Feature: Verifying TimeError indicator in Acknowledge Alerts
 
  Scenario Outline: Verifying TimeError indicator in Acknowledge Alerts

   When "admin" clicks on Alerts page tab in "<ProjectName>"
    And "admin" verifies pushed alert in alert console with "<AlertName>"
    And "admin" verifies pushed alert is in state Acknowledged
    Then "admin" verifies pushed alert has TimeError indicator

    Examples:
      | ProjectName     | AlertName | ChannelName | channelJson  |
      | Automation_S1   | Node3     | Solarwinds  | QueueChannel |