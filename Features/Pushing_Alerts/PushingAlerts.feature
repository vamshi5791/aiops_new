@PushingAlerts @ITOps_Milestone_1 @ITOps_Admin

Feature: Pushing Alerts through RabbitMQ

        Scenario Outline: Pushing Alerts through RabbitMQ

             When "admin" navigates to ust home page
             When User renders the RabbitMQ URL
              And user enters RabbitMQ_Username as "<rabbitMQ_User>", RabbitMQ_Password as "<rabbitMQ_Password>" and clicks on login button
              And clicks on the project "<ProjectName>" "<ProjectNameForAlert>"
              And enters queue name as "<ToQueue>" and routing key as "<RouteKey>"
              And enters AlertName as "<AlertName>", NodeIPAddress as, "<NodeIPAddress>" and ObjectName as "<ObjectName>"
              And enters the payload data and clicks on publish
            Given User with ITOps role renders the URL
              And "admin" selects project and open alerts
             Then enter alertname in search box and verify alert details "<Alerts>" "<alertName>"
              And "admin" clicks on logout button

        Examples:
                  | rabbitMQ_User | rabbitMQ_Password | Itops_UserName | Itops_Password | Alerts             | ProjectName      | ProjectNameForAlert              | ToQueue          | RouteKey         | alertName          | AlertName          | NodeIPAddress | ObjectName |
                  | admin         | j5c6ym6nFm8M2Yia  | Itops_admin    | qa123          | NewSolarWindAlert1 | Automation_IB_16 | 1.1225.Automation_IB_16.exchange | 1.1225.UST.queue | 1.1225.UST.queue | NewSolarWindAlert1 | NewSolarWindAlert1 | Demo          | Sample     |



