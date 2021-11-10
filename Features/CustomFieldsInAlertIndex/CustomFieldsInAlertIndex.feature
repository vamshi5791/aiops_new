@CustomFieldsInAlertIndex  @ITOps_Admin

Feature: Alerts moved to ticketed

    Scenario Outline: Make sure that user is able to add a new field in index and it is available in the application

        When "Admin" adds new field to the index
        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        When "ITOps_Admin" verifies newly added field is available in the display configuration
        When "Admin" clicks on configuration tab
        When "Admin" navigate to Alert Correlation Policy
        And Admin clicks on Add "AlertCorrelation" Policy
        And Admin enters "AlertCorrelation" Policy Name as "<PolicyName>"
        And Admin enters "AlertCorrelation" Precedence as "<PolicyPrecedence>"
        And Admin selects "policy" attribute as "<policyAtttribute>"
        And Admin selects "policy" value as "<PolicyValue>"
        And Admin clicks on Save and Add Rule button
        Then verify "success" toaster "<PolicyCreatedSuccessMessage>"


        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | PolicyName | PolicyPrecedence | policyAtttribute    | PolicyValue | PolicyCreatedSuccessMessage  |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | Custom     | 6                | Business Time Alert | True        | Policy successfully created. |
