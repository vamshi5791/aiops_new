@AlertCorrelationPolicy @ITOps_Admin @Regressionn

Feature: Verify Alert Correlation Policy
     Feature Description: ITOpsAdmin verifies Alert Correlation Policy operations

     Scenario Outline: ITOps Admin creates Alert Correlation policy
          When "admin" navigates to ITOps home page
          And "Admin" enters project name in project search field
          And "admin" clicks on project name and navigates to dashboard
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
               | ProjectName   | PolicyName | PolicyPrecedence | policyAtttribute    | PolicyValue | PolicyCreatedSuccessMessage  |
               | Automation_M3 | Automation | 6                | Business Time Alert | True        | Policy successfully created. |


     Scenario Outline: ITOps Admin adds Alert Correlation rule

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

          Examples:
               | RuleName        | ruleAtttribute      | ruleValue | RuleCreatedSuccessMessage  | ActivatedToggle             |
               | CorrelationRule | Business Time Alert | True      | Rule Successfully Created. | Status updated successfully |


     Scenario Outline: ITOps Admin edits existing Alert Correlation policy from viewMode

          And "Admin" clicks on policy "<PolicyName>"
          And Admin clicks on edit policy button
          And Admin enters "Alert Correlation" Policy Name as "<UpdatedPolicyName>"
          And Admin selects "policy" attribute as "<policyAtttribute>"
          And Admin enters "policy" value as "<PolicyValue>"
          And Admin clicks on Update Deatils
          And Admin clicks on Yes button in confirmation popup
          Then verify "success" toaster "<RuleCreatedSuccessMessage>"
          And clicks on Next button
          And clicks on Edit rule icon
          And Admin enters "Alert Correlation" rule name as "<UpdatedRuleName>"
          And Admin selects "rule" attribute as "<ruleAtttribute>"
          And Admin selects "rule" value as "<ruleValue>"
          And click on Update rule button
          And Admin clicks on Yes button in confirmation popup
          Then verify "success" toaster "<RuleCreatedSuccessMessage>"
          And Admin clicks on Done button

          Examples:
               | PolicyName | UpdatedPolicyName | policyAtttribute | PolicyValue | UpdatedRuleName        | ruleAtttribute | ruleValue | RuleCreatedSuccessMessage                                                                   |
               | Automation | Automation IB     | Alert Name       | 22          | CorrelationRuleUpdated | Alert Source   | Forescout | The alert correlation policy change will not have any effect on any existing alert clusters |

     Scenario Outline: ITOps Admin edits existing Alert Correlation Policy from Listing page

          And "Admin" clicks on policy "<PolicyName>"
          And Admin clicks on edit policy button
          When Admin enters "Alert Correlation" Policy Name as "<UpdatedPolicyName>"
          And Admin selects "policy" attribute as "<policyAtttribute>"
          And Admin selects "policy" value as "<PolicyValue>"
          And Admin clicks on Update Deatils
          And Admin clicks on Yes button in confirmation popup
          Then verify "success" toaster "<RuleCreatedSuccessMessage>"
          And clicks on Next button
          And clicks on Edit rule icon
          And Admin enters "Alert Correlation" rule name as "<UpdatedRuleName>"
          And Admin selects "rule" attribute as "<ruleAtttribute>"
          And Admin selects "rule" value as "<ruleValue>"
          And click on Update rule button
          And Admin clicks on Yes button in confirmation popup
          Then verify "success" toaster "<RuleCreatedSuccessMessage>"
          And Admin clicks on Done button

          Examples:
               | PolicyName    | UpdatedPolicyName | policyAtttribute    | PolicyValue | UpdatedRuleName         | ruleAtttribute      | ruleValue | RuleCreatedSuccessMessage      |
               | Automation IB | Automation IB     | Business Time Alert | False       | CorrelationRuleUpdated1 | Business Time Alert | False     | on any existing alert clusters |

     Scenario Outline: Verify correlation policy cannot be activated when all rules are inactive

          When "Admin" clicks on configuration tab
          And "Admin" clicks on policy "<PolicyName>"
          And Admin clicks on edit policy button
          And Admin clicks on set rules
          When Admin clicks on toggle button
          And Admin clicks on Yes button in confirmation popup
          Then verify "success" toaster "<SuccesToaster>"
          When Admin clicks on Activate Policy toggle button
          And Admin clicks on Yes button in confirmation popup
          Then verify "error" toaster "<ErrorToaster>"
          And Admin clicks on Done button
          When Admin clicks on toggle button
          And Admin clicks on Yes button in confirmation popup
          Then verify "error" toaster "<ErrorToaster>"


          Examples:
               | PolicyName    | ErrorToaster                                                            | SuccesToaster                                      |
               | Automation IB | The policy cannot be turned active as it does not have any active rules | Rule: CorrelationRuleUpdated1 updated successfully |


     Scenario Outline: Admin deletes the existing Alert Correlation Policy

          When "ITOps_Admin" navigate to Alert Correlation Policy
          And "Admin" clicks on delete icon in listing page "<PolicyName>"
          And Admin clicks on Yes button in confirmation popup
          Then "Admin" verifies if "<SuccessMessage>" message is displayed
          Examples:
               | PolicyName    | SuccessMessage              |
               | Automation IB | Policy deleted successfully |
