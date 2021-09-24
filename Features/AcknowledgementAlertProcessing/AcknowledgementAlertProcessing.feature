@AcknowledgementAlertProcessing  @ITOps_Milestone_3 @ITOps_Admin

Feature: Acknowledge Alert Processing

    Scenario Outline: Pushing two acknowledgement alerts


        Given User pushes an solarwinds alert
        Given User pushes an solarwinds alert
        Given User with ITOps role renders the URL
        And "Admin" selects project and open alerts "<ProjectName>"
        Then enter alertname in search box and verify alert details "<AlertName>"
        And verify cluster size must be "<size>"
        And Admin click on state
        And Admin selects acknowledge




        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 2    |



    Scenario Outline: Pushing another acknowledgement alert

        Given User pushes an solarwinds alert
        Given User with ITOps role renders the URL
        And "Admin" selects project and open alerts "<ProjectName>"
        Then enter alertname in search box and verify alert details "<AlertName>"
        And verify cluster size must be "<size>"


        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 3    |