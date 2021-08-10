@AddNewacknowledgementPolicyByITOpsADMIN   @ITOps_Milestone_2

Feature: Verify acknowledgement policy details
Feature Description: User verifies acknowledgement policy

        Scenario Outline: ITOps Admin creates acknowledgement policy

            Given ITOps "admin" with username and password as "<UserName>", "<Password>" is in the home page
             When "Admin" enters project name as "<ProjectName>" in the search field
              And "admin" clicks on project name "<ProjectName>"
              And "Admin" clicks on configuration tab
              And "Admin" navigate to Acknowledgement Policy
              And Admin clicks on Add "Acknowledgement" Policy
             When Admin enters "Acknowledgement" Policy Name as "<PolicyName>"
              And Admin enters "Acknowledgement" Precedence as "<PolicyPrecedence>"
              And Admin selects "policy" attribute as "<policyAtttribute>"
              And Admin selects "policy" value as "<PolicyValue>"
              And Admin clicks on Save and Add Rule button
             Then verify "success" toaster "<PolicyCreatedSuccessMessage>"

        Examples:
                  | UserName    | Password | ProjectName   | PolicyName            | PolicyPrecedence | policyAtttribute    | PolicyValue | PolicyCreatedSuccessMessage  |
                  | Itops_admin | qa123    | Automation_02 | AcknowledgementPolicy | 1                | Business Time Alert | True        | Policy successfully created. |


        Scenario Outline: ITOps Admin adds Acknowledgement rule

             When Admin enters "Acknowledgement" rule name as "<RuleName>"
              And Admin selects "rule" attribute as "<ruleAtttribute>"
              And Admin selects "rule" value as "<ruleValue>"
              And Admin clicks on Save button
             Then verify "success" toaster "<RuleCreatedSuccessMessage>"
             When Admin clicks on Activate Policy toggle button
              And Admin clicks on Yes button in confirmation popup
             When Admin clicks on Done button
             Then verify column values in Policy listing page
 
        Examples:
                  | RuleName        | ruleAtttribute      | ruleValue | RuleCreatedSuccessMessage  | StatusUpdatedSuccessfully   |
                  | CorrelationRule | Business Time Alert | True      | Rule Successfully Created. | Status updated successfully |


     #    Scenario Outline: ITOPs Engineer should be able to check acknowledgement policy details

     #          And "ITOPsEngineer" navigate to Acknowledgement Policy
     #         Then "ITOPs Engineer" verifies Add policy button
     #         When "ITOPsEngineer" clicks on policy "<policyname>"
     #         When click on cancel button

     #    Examples:
     #              | UserName       | Password | projectName   | policyname            |
     #              | Itops_Engineer | qa123    | Automation_02 | AcknowledgementPolicy |


     #    Scenario Outline: ITOps Admin edits existing acknowledgement policy from viewMode

     #          And "Admin" navigate to Acknowledgement Policy
     #          And "Admin" clicks on policy "<PolicyName>"
     #          And Admin clicks on edit policy button
     #          And Admin enters "Alert Correlation" Policy Name as "<UpdatedPolicyName>"
     #          And Admin selects "policy" attribute as "<policyAtttribute>"
     #          And Admin selects "policy" value as "<PolicyValue>"
     #          And Admin clicks on Update Deatils
     #          And Admin clicks on Yes button in confirmation popup
     #         When clicks on Next button
     #          And clicks on Edit rule icon
     #         When Admin enters "Alert Correlation" rule name as "<UpdatedRuleName>"
     #          And Admin selects "rule" attribute as "<ruleAtttribute>"
     #          And Admin selects "rule" value as "<ruleValue>"
     #          And click on Update rule button
     #          And Admin clicks on Yes button in confirmation popup
     #         When Admin clicks on Done button

     #    Examples:
     #              | UserName    | Password | projectName   | PolicyName            | UpdatedPolicyName | policyAtttribute | PolicyValue | UpdatedRuleName        | ruleAtttribute | ruleValue | PolicyUpdatedSuccessMessage                                                               |
     #              | Itops_admin | qa123    | Automation_02 | AcknowledgementPolicy | PolicynameUpdated | Alert Source     | Forescout   | CorrelationRuleUpdated | Alert Source   | Forescout | The acknowledgement policy change will not have any effect on any existing alert clusters |

     #    Scenario Outline: ITOps Admin edits existing acknowledgement policy from Listing page


     #          And "Admin" navigate to Acknowledgement Policy
     #          And "Admin" clicks on edit icon in listing page "<PolicyName>"
     #          And Admin enters "Alert Correlation" Policy Name as "<UpdatedPolicyName>"
     #          And Admin selects "policy" attribute as "<policyAtttribute>"
     #          And Admin selects "policy" value as "<PolicyValue>"
     #          And Admin clicks on Update Deatils
     #          And Admin clicks on Yes button in confirmation popup
     #         When clicks on Next button
     #          And clicks on Edit rule icon
     #         When Admin enters "Alert Correlation" rule name as "<UpdatedRuleName>"
     #          And Admin selects "rule" attribute as "<ruleAtttribute>"
     #          And Admin selects "rule" value as "<ruleValue>"
     #          And click on Update rule button
     #          And Admin clicks on Yes button in confirmation popup
     #         When Admin clicks on Done button

     #    Examples:
     #              | UserName    | Password | projectName   | PolicyName        | UpdatedPolicyName  | policyAtttribute    | PolicyValue | UpdatedRuleName         | ruleAtttribute      | ruleValue | PolicyUpdatedSuccessMessage                                                                 |
     #              | Itops_admin | qa123    | Automation_02 | PolicynameUpdated | PolicynameUpdated1 | Business Time Alert | False       | CorrelationRuleUpdated1 | Business Time Alert | False     | The alert correlation policy change will not have any effect on any existing alert clusters |


     #    Scenario Outline: Admin deletes the existing policy

     #          And "Admin" navigate to Acknowledgement Policy
     #          And "Admin" clicks on delete icon in listing page "<PolicyName>"
     #          And Admin clicks on Yes button in confirmation popup
     #          And "Admin" clicks on logout button


     #    Examples:
     #              | UserName    | Password | ProjectName   | PolicyName         |
     #              | Itops_admin | qa123    | Automation_02 | PolicynameUpdated1 |
