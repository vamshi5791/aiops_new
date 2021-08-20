 @AlertCorrelationPolicy @ITOps_Admin @Regressionn

 
Feature: Verify Acknowledgement Policy
Feature Description: ITOpsAdmin verifies Acknowledgement Policy operations

        Scenario Outline: ITOps Admin creates Acknowledgement policy

          #    When "Admin" enters project name as "<ProjectName>" in the search field
          #     And "admin" clicks on project name "<ProjectName>"
          #    When "Admin" clicks on configuration tab
             When "Admin" navigate to Acknowledgement Policy
              And Admin clicks on Add "Acknowledgement" Policy
              And Admin enters "Acknowledgement" Policy Name as "<PolicyName>"
              And Admin enters "Acknowledgement" Precedence as "<PolicyPrecedence>"
              And Admin selects "policy" attribute as "<policyAtttribute>"
              And Admin selects "policy" value as "<PolicyValue>"
              And Admin clicks on Save and Add Rule button
             Then verify "success" toaster "<PolicyCreatedSuccessMessage>"

        Examples:
                  | ProjectName      | PolicyName | PolicyPrecedence | policyAtttribute    | PolicyValue | PolicyCreatedSuccessMessage  |
                  | Automation_IB_24 | Automation | 1                | Business Time Alert | True        | Policy successfully created. |


        Scenario Outline: ITOps Admin adds Acknowledgement rule

             When Admin enters "Acknowledgement" rule name as "<RuleName>"
              And Admin selects "rule" attribute as "<ruleAtttribute>"
              And Admin selects "rule" value as "<ruleValue>"
              And Admin clicks on Save button
             Then verify "success" toaster "<RuleCreatedSuccessMessage>"
             When Admin clicks on Activate Policy toggle button
              And Admin clicks on Yes button in confirmation popup
             Then verify "success" toaster "<ActivatedToggle>"
              And Admin clicks on Done button
             #Then verify "success" toaster "<ActivatedToggle>"
             Then verify column values in Policy listing page

        Examples:
                  | RuleName        | ruleAtttribute      | ruleValue | RuleCreatedSuccessMessage  | ActivatedToggle             |
                  | CorrelationRule | Business Time Alert | True      | Rule Successfully Created. | Status updated successfully |


        Scenario Outline: ITOps Admin edits existing Acknowledgement policy from viewMode

             #When "ITOps_Admin" navigate to Alert Correlation Policy
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
                  | PolicyName | UpdatedPolicyName | policyAtttribute | PolicyValue | UpdatedRuleName        | ruleAtttribute | ruleValue | RuleCreatedSuccessMessage                                                                 |
                  | Automation | Automation IB     | Alert Name       | 22          | CorrelationRuleUpdated | Alert Source   | Forescout | The acknowledgement policy change will not have any effect on any existing alert clusters |

        Scenario Outline: ITOps Admin edits existing Acknowledgement Policy from Listing page


             #When "ITOps_Admin" navigate to Alert Correlation Policy
              And "Admin" clicks on edit icon in listing page "<PolicyName>"
              And Admin enters "Acknowledgement" Policy Name as "<UpdatedPolicyName>"
              And Admin selects "policy" attribute as "<policyAtttribute>"
              And Admin selects "policy" value as "<PolicyValue>"
              And Admin clicks on Update Deatils
              And Admin clicks on Yes button in confirmation popup
             Then verify "success" toaster "<RuleCreatedSuccessMessage>"
              And clicks on Next button
              And clicks on Edit rule icon
              And Admin enters "Acknowledgement" rule name as "<UpdatedRuleName>"
              And Admin selects "rule" attribute as "<ruleAtttribute>"
              And Admin selects "rule" value as "<ruleValue>"
              And click on Update rule button
              And Admin clicks on Yes button in confirmation popup
             Then verify "success" toaster "<RuleCreatedSuccessMessage>"
              And Admin clicks on Done button

        Examples:
                  | PolicyName    | UpdatedPolicyName | policyAtttribute    | PolicyValue | UpdatedRuleName         | ruleAtttribute      | ruleValue | RuleCreatedSuccessMessage                                                                 |
                  | Automation IB | Automation IB     | Business Time Alert | False       | CorrelationRuleUpdated1 | Business Time Alert | False     | The acknowledgement policy change will not have any effect on any existing alert clusters |


        Scenario Outline: Admin deletes the existing Acknowledgement Policy

              And "Admin" navigate to Acknowledgement Policy
              And "Admin" clicks on delete icon in listing page "<PolicyName>"
              And Admin clicks on Yes button in confirmation popup
             Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Examples:
                  | PolicyName    | SuccessMessage              |
                  | Automation IB | Policy deleted successfully |
