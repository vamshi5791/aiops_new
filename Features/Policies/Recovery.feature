@RecoveryPolicy @ITOps_Milestone_2

Feature: Recovery policy operations
    Feature Description: Admin creats Recovery policy

    @AddNewRecoveryPolicyByITOPsADMIN
    Scenario Outline: ITOps Admin should be able to add new recovery policy

        Given ITOps "ITOps_Admin" is in the home page, "<UserName>", "<Password>"
        When "ITOps_Admin" enters project name in project search feild "<ProjectName>"
        And "ITOps_Admin" clicks on Project "<ProjectName>"
        And "ITOps_Admin" clicks on configuration
        And "ITOps_Admin" navigate to Recovery Policy
        And Admin clicks on Add "Alert Correlation" Policy
        When Admin enters "Alert Correlation" Policy Name as "<PolicyName>"
        And Admin enters "Alert Correlation" Precedence as "<PolicyPrecedence>"
        And Admin selects "policy" attribute as "<PolicyAtttribute>"
        And Admin selects "policy" value as "<PolicyValue>"
        And Admin clicks on Save and Add Rule button
        Then verify "success" toaster "<PolicyCreatedSuccessMessage>"
        Examples:
            | UserName    | Password | ProjectName   | PolicyName     | PolicyPrecedence | PolicyAtttribute    | PolicyValue | PolicyCreatedSuccessMessage  |
            | Itops_admin | qa123    | Automation_02 | Recoverypolicy | 1                | Business Time Alert | True        | Policy successfully created. |


    @AddNewRecoveryRuleByITOPsAdmin
    Scenario Outline: ITOps Admin should be able to add New Recovery rule

        When Admin enters "Alert Correlation" rule name as "<RuleName>"
        And Admin selects "rule" attribute as "<RuleAtttribute>"
        And Admin enters "rule" value as "<EnterRuleValue>"
        And Admin clicks on Save button
        When Admin clicks on Activate Policy toggle button
        And Admin clicks on Yes button in confirmation popup
        When Admin clicks on Done button
        Then verify column values in Policy listing page
        Then click on logout button

        Examples:
            | RuleName     | RuleAtttribute | EnterRuleValue |
            | Recoveryrule | Resource Group | 2              |


    @VerifyNewlyCreatedPolicyByITOPsEngineer
    Scenario Outline: ITOPs Engineer should be able to check policy details

        Given ITOps "ITOPsEngineer" is in the home page, "<UserName>", "<Password>"
        When "ITOPsEngineer" enters project name in project search feild "<ProjectName>"
        And "ITOPsEngineer" clicks on Project "<ProjectName>"
        And "ITOPsEngineer" clicks on configuration
        And "Admin" navigate to Recovery Policy
        Then "ITOPs Engineer" verifies Add policy button
        When "ITOPsEngineer" clicks on policy "<PolicyName>"
        # Then "ITOPs Engineer" verifies policy information
        When click on cancel button
        Then click on logout button
        Examples:
            | UserName       | Password | ProjectName   | PolicyName     |
            | Itops_Engineer | qa123    | Automation_02 | Recoverypolicy |

    @EditExistingRecoveryPolicy
    Scenario Outline: ITOps Admin edits existing recovery policy details

        Given ITOps "ITOps_Admin" is in the home page, "<UserName>", "<Password>"
        When "ITOps_Admin" enters project name in project search feild "<ProjectName>"
        And "ITOps_Admin" clicks on Project "<ProjectName>"
        And "ITOps_Admin" clicks on configuration
        And "ITOps_Admin" navigate to Recovery Policy
        And "ITOps_Admin" clicks on policy "<PolicyName>"
        And Admin clicks on edit policy button
        And Admin enters "Alert Correlation" Policy Name as "<UpdatedPolicyName>"
        And Admin selects "policy" attribute as "<PolicyAtttribute>"
        And Admin enters "Policy" value as "<EnterPolicyValue>"
        And Admin clicks on Update Details
        And Admin clicks on Yes button in confirmation popup
        When clicks on Next button
        And clicks on Edit rule icon
        When Admin enters "Alert Correlation" rule name as "<UpdatedRuleName>"
        And Admin selects "rule" attribute as "<RuleAtttribute>"
        And Admin enters "rule" value as "<EnterRuleValue>"
        And click on Update rule button
        And Admin clicks on Yes button in confirmation popup
        When Admin clicks on Done button
        Then click on logout button
        Examples:
            | UserName    | Password | ProjectName   | PolicyName     | UpdatedPolicyName | PolicyAtttribute | EnterPolicyValue | UpdatedRuleName        | RuleAtttribute | EnterRuleValue |
            | Itops_admin | qa123    | Automation_02 | Recoverypolicy | PolicynameUpdated | Resource Type    | 3                | CorrelationRuleUpdated | Resource Type  | 3              |


    @DeleteRecoveryPolicy
    Scenario Outline:Itops Admin should able to delete Acknowledgement Policy

        Given ITOps "ITOps_Admin" is in the home page, "<UserName>", "<Password>"
        When "ITOps_Admin" enters project name in project search feild "<ProjectName>"
        And "ITOps_Admin" clicks on Project "<ProjectName>"
        And "ITOps_Admin" clicks on configuration
        And "ITOps_Admin" navigate to Recovery Policy
        And "ITOps_Admin" clicks on delete icon in listing page "<PolicyName>"
        And Admin clicks on Yes button in confirmation popup
        Then click on logout button


        Examples:
            | UserName    | Password | ProjectName   | PolicyName        |
            | Itops_admin | qa123    | Automation_02 | PolicynameUpdated |

