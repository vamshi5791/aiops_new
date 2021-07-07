@PushingAlerts

Feature: Pushing Alerts

  Scenario Outline: Successfully send Alerts


    Given User opens rabbitMQ
    When user enters Username and Password "<userName2>", "<password2>"
    And user clicks on Login button
    And user clicks on the project "<ProjectName>"
    And user enters to the queue "<ToQueue>"
    And user enters the routing key "<RouteKey>"
    And user enters the payload
    And user clicks on publish
    And user opens itops application
    And admin enters Username, Password and click on Login button "<UserName>", "<Password>"
    And admin selects project and open alerts "<ProjectNAME>"
    Then Success message for alerts displayed in alert console "<Alerts>"
    And click on logout button
    Examples:
      | userName2 | password2        | UserName    | Password | Alerts | ProjectName | ProjectNAME | ToQueue                         | RouteKey                        |
      | admin     | j5c6ym6nFm8M2Yia | Itops_admin | qa123    | Alerts | ProjectTeam | ProjectTeam | 1.879.testGopichannel9999.queue | 1.879.testGopichannel9999.queue |