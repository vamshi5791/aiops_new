@PushingAlerts @ITOps_Milestone_1

Feature: Pushing Alerts through RabbitMQ

        Scenario Outline: Pushing Alerts through RabbitMQ


             When User renders the RabbitMQ URL
              And user enters RabbitMQ_Username as "<rabbitMQ_User>", RabbitMQ_Password as "<rabbitMQ_Password>" and clicks on login button
              And clicks on the project "<ProjectName>" "<ProjectNameForAlert>"
              And enters queue name as "<ToQueue>" and routing key as "<RouteKey>"
              And enters AlertName as "<AlertName>", NodeIPAddress as, "<NodeIPAddress>" and ObjectName as "<ObjectName>"
              And enters the payload data and clicks on publish
            Given User with ITOps role renders the URL
             When ITOps "admin" with username and password as "<Itops_UserName>", "<Itops_Password>" is in the home page
              And "admin" selects project and open alerts
             Then enter alertname in search box and verify alert details "<Alerts>" "<alertName>"
              And "admin" clicks on logout button

        Examples:
                  | rabbitMQ_User | rabbitMQ_Password | Itops_UserName | Itops_Password | Alerts             | ProjectName   | ProjectNameForAlert          | ToQueue                    | RouteKey                   | alertName          | AlertName          | NodeIPAddress | ObjectName |
                  | admin         | j5c6ym6nFm8M2Yia  | Itops_admin    | qa123          | NewSolarWindAlert1 | Automation_02 | 1.978.Automation_02.exchange | 1.978.Automation_008.queue | 1.978.Automation_008.queue | NewSolarWindAlert1 | NewSolarWindAlert1 | Demo          | Sample     |



