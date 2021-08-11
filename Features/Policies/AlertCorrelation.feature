@ITOps_Admin   @ITOps_Milestone_2

Feature: Verify AlertCorrelation policy details
Feature Description: User verifies AlertCorrelation policy

        Scenario Outline: ITOps Admin creates AlertCorrelation policy
           
              And "ITOps_Admin" navigate to Alert Correlation Policy
              And Admin clicks on Add "AlertCorrelation" Policy
             When Admin enters "AlertCorrelation" Policy Name as "<PolicyName>"
              And Admin enters "AlertCorrelation" Precedence as "<PolicyPrecedence>"
              And Admin selects "policy" attribute as "<policyAtttribute>"
              And Admin selects "policy" value as "<PolicyValue>"
              And Admin clicks on Save and Add Rule button
             Then verify "success" toaster "<PolicyCreatedSuccessMessage>"

        Examples:
                  | ProjectName   | PolicyName             | PolicyPrecedence | policyAtttribute    | PolicyValue | PolicyCreatedSuccessMessage  |
                  | Automation_02 | AlertCorrelationPolicy | 1                | Business Time Alert | True        | Policy successfully created. |


        Scenario Outline: ITOps Admin adds AlertCorrelation rule

             When Admin enters "AlertCorrelation" rule name as "<RuleName>"
              And Admin selects "rule" attribute as "<ruleAtttribute>"
              And Admin selects "rule" value as "<ruleValue>"
              And Admin clicks on Save button
             Then verify "success" toaster "<RuleCreatedSuccessMessage>"
             When Admin clicks on Activate Policy toggle button
              And Admin clicks on Yes button in confirmation popup
             When Admin clicks on Done button
             Then verify column values in Policy listing page

        Examples:
                  | RuleName        | ruleAtttribute      | ruleValue | RuleCreatedSuccessMessage  |
                  | CorrelationRule | Business Time Alert | True      | Rule Successfully Created. |


        Scenario Outline: ITOps Admin edits existing AlertCorrelation policy from viewMode

              And "ITOps_Admin" navigate to Alert Correlation Policy
              And "Admin" clicks on policy "<PolicyName>"
              And Admin clicks on edit policy button
              And Admin enters "Alert Correlation" Policy Name as "<UpdatedPolicyName>"
              And Admin selects "policy" attribute as "<policyAtttribute>"
              And Admin enters "policy" value as "<PolicyValue>"
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
                  | PolicyName             | UpdatedPolicyName | policyAtttribute | PolicyValue | UpdatedRuleName        | ruleAtttribute | ruleValue |
                  | AlertCorrelationPolicy | PolicynameUpdated | Alert Name       | 22          | CorrelationRuleUpdated | Alert Source   | Forescout |

        Scenario Outline: ITOps Admin edits existing AlertCorrelation policy from Listing page


              And "ITOps_Admin" navigate to Alert Correlation Policy
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


        Scenario Outline: Admin deletes the existing policy

              And "ITOps_Admin" navigate to Alert Correlation Policy
              And "Admin" clicks on delete icon in listing page "<PolicyName>"
              And Admin clicks on Yes button in confirmation popup

        Examples:
                  | PolicyName         |
                  | PolicynameUpdated1 |
