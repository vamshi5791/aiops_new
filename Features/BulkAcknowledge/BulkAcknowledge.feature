@BulkAcknowledgementAlertProcessing  @ITOps_Milestone_3 @ITOps_Admin

Feature: Verify the bulk acknowledgement in alert console

    Scenario Outline: Verify the bulk acknowledgement in alert console

        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        Given User clicks on alert cluster
        Given User selects select all check box
        Given User clicks on cancel
        And Admin click on state
        And "admin" clicks on "Acknowledge" button


        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | 2    | Solarwinds  | QueueChannel | CNHKIF-36A-SSC1 |


    Scenario Outline: Verify the bulk acknowledgement in alert console with multiple alerts


        When "Admin" sends "3" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        Given User clicks on alert cluster
        Given User selects select all check box
        Given User clicks on cancel
        And Admin click on state
        And Admin verifies acknowledge option is not present

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | NodeName        |
            | Automation_01M3 | Alert1    | 3    | Solarwinds  | QueueChannel | GBLNGS-05B-SUA1 |

    Scenario Outline: Verify the bulk acknowledgement in alert console - in filter results

        When "admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "Admin" enters resource name as "<ResourceName>"
        And "Admin" clicks on apply button
        And "Admin" clicks on checkbox
        And "Admin" clicks on three dots button
        And "Admin" clicks on Acknowledge
        # And Admin verifies Acknowledge state
        And "Admin" clicks on remove all button
        Then "Admin" clicks on filter by severity dropdown
        And "Admin" selects Major
        And "Admin" clicks on checkbox
        And "Admin" clicks on three dots button
        And "Admin" clicks on Acknowledge
        # And Admin verifies Acknowledge state

        Examples:
            | ProjectName     | AlertName | size | ResourceName    |
            | Automation_01M3 | Alert1    | 2    | CNHKGG-00A-SSC1 |