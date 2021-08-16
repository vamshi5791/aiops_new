@FailurePolicy @ITOps_Admin @Regression


Feature: Failure Policy
Feature Description: ITOps Admin verifies Failure policy operations

        Scenario Outline: ITOps Admin creates Failure Policy
             
            
             When "Admin" navigate to Failure Policy
              And Admin clicks on Add "Failure" Policy
              And Admin enters "Failure" Policy Name as "<PolicyName>"
              And Admin enters "Failure" Precedence as "<PolicyPrecedence>"
              And Admin selects "policy" attribute as "<policyAtttribute>"
              And Admin selects "policy" value as "<PolicyValue>"
              And Admin clicks on Save and Add Rule button
             Then verify "success" toaster "<PolicyCreatedSuccessMessage>"

        Examples:
                  | ProjectName   | PolicyName    | PolicyPrecedence | policyAtttribute    | PolicyValue | PolicyCreatedSuccessMessage  |
                  | Automation_02 | FailurePolicy | 1                | Business Time Alert | True        | Policy successfully created. |


        Scenario Outline: ITOps Admin adds Failure Rule

             When Admin enters "Failure" rule name as "<RuleName>"
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


        Scenario Outline: ITOps Admin edits existing Failure Policy from viewMode

             When "Admin" navigate to Failure Policy
              And "Admin" clicks on policy "<PolicyName>"
              And Admin clicks on edit policy button
              And Admin enters "Alert Correlation" Policy Name as "<UpdatedPolicyName>"
              And Admin selects "policy" attribute as "<policyAtttribute>"
              And Admin enters "policy" value as "<PolicyValue>"
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
                  | PolicyName    | UpdatedPolicyName | policyAtttribute | PolicyValue | UpdatedRuleName        | ruleAtttribute | ruleValue |
                  | FailurePolicy | PolicynameUpdated | Alert Name       | 22          | CorrelationRuleUpdated | Alert Source   | Forescout |

        Scenario Outline: ITOps Admin edits existing Failure Policy from Listing page

             
              And "Admin" navigate to Failure Policy
              And "Admin" clicks on edit icon in listing page "<PolicyName>"
              And Admin enters "Alert Correlation" Policy Name as "<UpdatedPolicyName>"
              And Admin selects "policy" attribute as "<policyAtttribute>"
              And Admin selects "policy" value as "<PolicyValue>"
              And Admin clicks on Update Deatils
              And Admin clicks on Yes button in confirmation popup
             When clicks on Next button
              And clicks on Edit rule icon
             When Admin enters "Alert Correlation" rule name as "<UpdatedRuleName>"
              And Admin selects "rule" attribute as "<ruleAtttribute>"
              And Admin selects "rule" value as "<ruleValue>"
              And click on Update rule button
              And Admin clicks on Yes button in confirmation popup
             When Admin clicks on Done button

        Examples:
                  | PolicyName        | UpdatedPolicyName  | policyAtttribute    | PolicyValue | UpdatedRuleName         | ruleAtttribute      | ruleValue |
                  | PolicynameUpdated | PolicynameUpdated1 | Business Time Alert | False       | CorrelationRuleUpdated1 | Business Time Alert | False     |


        Scenario Outline: Admin deletes the existing Failure Policy

              And "Admin" navigate to Failure Policy
              And "Admin" clicks on delete icon in listing page "<PolicyName>"
              And Admin clicks on Yes button in confirmation popup
             Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Examples:
                  | PolicyName         |
                  | PolicynameUpdated1 |
