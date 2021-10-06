@PushingAlerts @ITOps_Milestone_1 @ITOps_Admin

Feature: Pushing Alerts through RabbitMQ

  Scenario Outline: Pushing Alerts through RabbitMQ

    When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
    When "ITOps_Admin" navigates to ITOps home page
    And "Admin" enters project name in project search field and click on enter
    And "admin" clicks on project name
    And "admin" clicks on Alerts page
    And "admin" enters "AlertName" and clicks on enter "<AlertName>"
    Then "admin" verifies pushed alert in alert console with "<AlertName>"

    Examples:
      | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        |
      | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | AUSYGR-00A-SSC2 |



