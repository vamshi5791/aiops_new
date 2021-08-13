@AcknowledgementPolicy @ITOps_Admin @Regression

Feature: Verify Acknowledgement Policy
Feature Description: User verifies Acknowledgement policy operations by ITOps Admin

        Scenario Outline: ITOps Admin creates Acknowledgement Policy
              When "Admin" clicks on configuration tab
              And "Admin" navigate to Acknowledgement Policy
              And Admin clicks on Add "Acknowledgement" Policy
             And Admin enters "Acknowledgement" Policy Name as "<PolicyName>"
              And Admin enters "Acknowledgement" Precedence as "<PolicyPrecedence>"
              And Admin selects "policy" attribute as "<policyAtttribute>"
              And Admin selects "policy" value as "<PolicyValue>"
              And Admin clicks on Save and Add Rule button
             Then verify "success" toaster "<PolicyCreatedSuccessMessage>"
        Examples:
                  | ProjectName   | PolicyName            | PolicyPrecedence | policyAtttribute    | PolicyValue | PolicyCreatedSuccessMessage  |
                  | Automation_02 | AcknowledgementPolicy | 1                | Business Time Alert | True        | Policy successfully created. |


        Scenario Outline: ITOps Admin adds Acknowledgement rule
             When Admin enters "Acknowledgement" rule name as "<RuleName>"
              And Admin selects "rule" attribute as "<ruleAtttribute>"
              And Admin selects "rule" value as "<ruleValue>"
              And Admin clicks on Save button
             Then verify "success" toaster "<RuleCreatedSuccessMessage>"
             When Admin clicks on Activate Policy toggle button
              And Admin clicks on Yes button in confirmation popup
             And Admin clicks on Done button
             Then verify column values in Policy listing page
        Examples:
                  | RuleName        | ruleAtttribute      | ruleValue | RuleCreatedSuccessMessage  |
                  | CorrelationRule | Business Time Alert | True      | Rule Successfully Created. |


        Scenario Outline: ITOps Admin edits existing Acknowledgement Policy from viewMode
              When "Admin" navigate to Acknowledgement Policy
              And "Admin" clicks on policy "<PolicyName>"
              And Admin clicks on edit policy button
              And Admin enters "Alert Correlation" Policy Name as "<UpdatedPolicyName>"
              And Admin selects "policy" attribute as "<policyAtttribute>"
              And Admin selects "policy" value as "<PolicyValue>"
              And Admin clicks on Update Deatils
              And Admin clicks on Yes button in confirmation popup
             Then verify "success" toaster "<PolicyUpdatedSuccessMessage>"
             When clicks on Next button
              And clicks on Edit rule icon
             And Admin enters "Alert Correlation" rule name as "<UpdatedRuleName>"
              And Admin selects "rule" attribute as "<ruleAtttribute>"
              And Admin selects "rule" value as "<ruleValue>"
              And click on Update rule button
              And Admin clicks on Yes button in confirmation popup
             Then verify "success" toaster "<PolicyUpdatedSuccessMessage>"
             When Admin clicks on Done button
        Examples:
                  | PolicyName            | UpdatedPolicyName | policyAtttribute | PolicyValue | UpdatedRuleName        | ruleAtttribute | ruleValue | PolicyUpdatedSuccessMessage                                                               |
                  | AcknowledgementPolicy | PolicynameUpdated | Alert Source     | Forescout   | CorrelationRuleUpdated | Alert Source   | Forescout | The acknowledgement policy change will not have any effect on any existing alert clusters |

        Scenario Outline: ITOps Admin edits existing Acknowledgement Policy from Listing page
              When "Admin" navigate to Acknowledgement Policy
              And "Admin" clicks on edit icon in listing page "<PolicyName>"
              And Admin enters "Alert Correlation" Policy Name as "<UpdatedPolicyName>"
              And Admin selects "policy" attribute as "<policyAtttribute>"
              And Admin selects "policy" value as "<PolicyValue>"
              And Admin clicks on Update Deatils
              And Admin clicks on Yes button in confirmation popup
             And clicks on Next button
              And clicks on Edit rule icon
             And Admin enters "Alert Correlation" rule name as "<UpdatedRuleName>"
              And Admin selects "rule" attribute as "<ruleAtttribute>"
              And Admin selects "rule" value as "<ruleValue>"
              And click on Update rule button
              And Admin clicks on Yes button in confirmation popup
             And Admin clicks on Done button
        Examples:
                  | PolicyName        | UpdatedPolicyName  | policyAtttribute    | PolicyValue | UpdatedRuleName         | ruleAtttribute      | ruleValue |
                  | PolicynameUpdated | PolicynameUpdated1 | Business Time Alert | False       | CorrelationRuleUpdated1 | Business Time Alert | False     |


        Scenario Outline: Admin deletes the existing Acknowledgement Policy
              When "Admin" navigate to Acknowledgement Policy
              And "Admin" clicks on delete icon in listing page "<PolicyName>"
              And Admin clicks on Yes button in confirmation popup
        Examples:
                  | PolicyName         |
                  | PolicynameUpdated1 |
