@PushingAlerts @ITOps_Milestone_1 @ITOps_Admin

Feature: Pushing Alerts through RabbitMQ

        Scenario Outline: Pushing Alerts through RabbitMQ

            
             When User renders the RabbitMQ URL
              And user enters RabbitMQ_Username as "<rabbitMQ_User>", RabbitMQ_Password as "<rabbitMQ_Password>" and clicks on login button
              And clicks on the project "<ProjectName>" "<ProjectNameForAlert>"
              And enters queue name as "<ToQueue>" and routing key as "<RouteKey>"
              And enters AlertName as "<AlertName>", NodeIPAddress as, "<NodeIPAddress>" and ObjectName as "<ObjectName>"
              And enters the payload data and clicks on publish
            Given User with ITOps role renders the URL
              And "admin" selects project and open alerts
             Then enter alertname in search box and verify alert details "<AlertName>"
              

        Examples:
                  | rabbitMQ_User | rabbitMQ_Password | Itops_UserName | Itops_Password | ProjectName      | ProjectNameForAlert              | ToQueue          | RouteKey         | AlertName      | NodeIPAddress | ObjectName |
                  | admin         | j5c6ym6nFm8M2Yia  | Itops_admin    | qa123          | Automation_IB_24 | 1.1465.Automation_IB_16.exchange | 1.1465.UST.queue | 1.1465.UST.queue | AlertName22222 | Demo          | Sample     |



