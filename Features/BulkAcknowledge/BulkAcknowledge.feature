@BulkAcknowledgementAlertProcessing  @ITOps_Milestone_3 @ITOps_Admin

Feature: Verify the bulk acknowledgement in alert console

    Scenario Outline: Verify the bulk acknowledgement in alert console


        Given User pushes an solarwinds alert
        Given User pushes an solarwinds alert


        Given User with ITOps role renders the URL
        And "admin" selects project and open alerts "<ProjectName>"
        Then enter alertname in search box and verify alert details "<AlertName>"


        Given User clicks on alert cluster
        Given User selects select all check box
        Given User clicks on cancel
        And Admin click on state
        And Admin selects acknowledge
        And Admin click on state
        And Admin verifies Close state

        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 2    |


    Scenario Outline: Verify the bulk acknowledgement in alert console with multiple alerts


        Given User pushes an solarwinds alert
        Given User pushes an solarwinds alert
        Given User clicks on alert cluster
        Given User selects select all check box
        Given User clicks on cancel
        And Admin click on state
        And Admin verifies acknowledge option is not present

        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 2    |