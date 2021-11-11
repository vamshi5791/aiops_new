@CustomFieldsInAlertIndex  @ITOps_Admin

Feature: Alerts moved to ticketed

    Scenario Outline: Make sure that user is able to add a new field in index and it is available in the application

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "Admin" navigate to Configuration section
        And "Admin" clicks on Alert Console Display Configuration from LHS menu Settings
        When "Admin" verifies newly added field is available in the display configuration
        When "Admin" navigates to Alerts section to verify the console
        Then "Admin" verifies the "<IndexName>" in alert console

        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | PolicyName | PolicyPrecedence | policyAtttribute    | PolicyValue | PolicyCreatedSuccessMessage  | IndexName       |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | Custom     | 6                | Business Time Alert | True        | Policy successfully created. | AlertPriorityIB |
