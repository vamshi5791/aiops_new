@CustomFieldsInAlertIndex  @ITOps_Admin

Feature: Alerts moved to ticketed

    Scenario Outline: Make sure that user is able to add a new field in index and it is available in the application

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"

        When "Admin" add a new field to index Using API "<IndexName>","<Property>","<Label>"
        When "Admin" navigate to Configuration section

        When "Admin" navigate to Alert Correlation Policy
        And Admin clicks on Add "AlertCorrelation" Policy
        And Admin enters "AlertCorrelation" Policy Name as "<PolicyName>"
        And Admin enters "AlertCorrelation" Precedence as "<PolicyPrecedence>"
        And Admin selects "policy" attribute as "<policyAtttribute>"
        And Admin selects "policy" value as "<PolicyValue>"
        And Admin clicks on Save and Add Rule button
        Then verify "success" toaster "<PolicyCreatedSuccessMessage>"

        When Admin enters "AlertCorrelation" rule name as "<RuleName>"
        And Admin selects "rule" attribute as "<ruleAtttribute>"
        And Admin selects "rule" value as "<ruleValue>"
        And Admin clicks on Save button
        Then verify "success" toaster "<RuleCreatedSuccessMessage>"
        When Admin clicks on Activate Policy toggle button
        And Admin clicks on Yes button in confirmation popup
        Then verify "success" toaster "<ActivatedToggle>"
        And Admin clicks on Done button
        Then verify column values in Policy listing page


        And "Admin" clicks on Alert Console Display Configuration from LHS menu Settings
        When "Admin" verifies newly added field is available in the display configuration
        When "Admin" navigates to Alerts section to verify the console
        #verifiy alert has data
        Then "Admin" verifies the "<Label>" in alert console


        Examples:
            | ProjectName     | AlertName | ChannelName | channelJson  | NodeName        | PolicyPrecedence | PolicyValue | PolicyCreatedSuccessMessage  | IndexName     | Property    | Label           | PolicyName    | policyAtttribute | RuleName        | ruleAtttribute  | ruleValue | RuleCreatedSuccessMessage  | ActivatedToggle             |
            | Automation_01M3 | Alert1    | Solarwinds  | QueueChannel | CNHKGG-00A-SSC1 | 6                | True        | Policy successfully created. | alerts_1519_1 | Property1IB | AlertPriorityIB | Custom Fields | AlertPriorityIB  | CorrelationRule | AlertPriorityIB | True      | Rule Successfully Created. | Status updated successfully |
