@FailurePolicy @ITOps_Milestone_2

Feature: Verify failure policy details
    Feature Description: User verifies the failure policy details

    @AddNewFailurePolicyByITOpsADMIN
    Scenario Outline: ITOps Admin adds new failure policy and rules

        Given ITOps "ITOps_Admin" is in the home page, "<UserName>", "<Password>"
        When "ITOps_Admin" enters project name in project search feild "<ProjectName>"
        And "ITOps_Admin" clicks on Project "<ProjectName>"
        And "ITOps_Admin" clicks on configuration
        And "ITOps_Admin" navigate to Failure Policy
        And Admin clicks on Add "Failure" Policy
        Then verify plus icon for adding "CorrelationPolicy"
        And verify default value in Operator dropdown
        And verify values in operator dropdown
        When Admin enters "Failure" Policy Name as "<PolicyName>"
        And Admin enters "Failure" Precedence as "<PolicyPrecedence>"
        And Admin selects "policy" attribute as "<PolicyAtttribute>"
        And Admin selects "policy" value as "<PolicyValue>"
        And Admin clicks on Save and Add Rule button
        Then verify "success" toaster "<PolicyCreatedSuccessMessage>"
        And verify plus icon for adding "Rule"
        When Admin enters "Failure" rule name as "<RuleName>"
        And Admin selects "rule" attribute as "<RuleAtttribute>"
        And Admin selects "rule" value as "<RuleValue>"
        And Admin clicks on Save button
        Then verify "success" toaster "<RuleCreatedSuccessMessage>"
        When Admin clicks on Activate Policy toggle button
        And Admin clicks on Yes button in confirmation popup
        Then verify "success" toaster "<StatusUpdatedSuccessfully>"
        When Admin clicks on Done button
        Then verify column values in Policy listing page
        Examples:
            | UserName    | Password | ProjectName   | PolicyName    | PolicyPrecedence | PolicyAtttribute    | PolicyValue | PolicyCreatedSuccessMessage  | RuleName    | RuleAtttribute      | RuleValue | RuleCreatedSuccessMessage  | StatusUpdatedSuccessfully   |
            | Itops_admin | qa123    | Automation_02 | Failurepolicy | 1                | Business Time Alert | True        | Policy successfully created. | FailureRule | Business Time Alert | True      | Rule Successfully Created. | Status updated successfully |

    @VerifyNewlyCreatedFailurePolicy
    Scenario Outline: ITOps Admin verifies newly created failure policy

        Then verify column values in Policy listing page
        And verify edit and delete icons in policy listing "<Policyname>"
        When "ITOPs Admin" clicks on policy "<Policyname>"
        When click on cancel button
        Then click on logout button
        Examples:
            | Policyname    |
            | Failurepolicy |

    @VerifyFailurePolicyByITOpsEngineer
    Scenario Outline: ITOps Engineer should be able to view failure policy details

        Given ITOps "ITOPsEngineer" is in the home page, "<UserName>", "<Password>"
        When "ITOPsEngineer" enters project name in project search feild "<ProjectName>"
        And "ITOPsEngineer" clicks on Project "<ProjectName>"
        And "ITOPsEngineer" clicks on configuration
        And "ITOPsEngineer" navigate to Failure Policy
        Then "ITOPs Engineer" verifies Add policy button
        When "ITOPsEngineer" clicks on policy "<Policyname>"
        Then click on logout button
        Examples:
            | UserName       | Password | ProjectName   | Policyname    |
            | Itops_Engineer | qa123    | Automation_02 | Failurepolicy |

    @AddMultipleRulesForAFailurePolicy
    Scenario Outline: ITOps Admin adds multiple rules while creating failure policy

        Given ITOps "ITOps_Admin" is in the home page, "<UserName>", "<Password>"
        When "ITOps_Admin" enters project name in project search feild "<ProjectName>"
        And "ITOps_Admin" clicks on Project "<ProjectName>"
        And "ITOps_Admin" clicks on configuration
        And "ITOps_Admin" navigate to Failure Policy
        And Admin clicks on Add "Failure" Policy
        And Admin enters "Failure" Policy Name as "<PolicyName>"
        And Admin enters "Failure" Precedence as "<PolicyPrecedence>"
        And Admin selects "policy" attribute as "<PolicyAtttribute>"
        And Admin selects "policy" value as "<PolicyValue>"
        And Admin clicks on Save and Add Rule button
        When Admin enters "Failure" rule name as "<RuleNameValue2>"
        And Admin selects "rule" attribute as "<RuleAtttribute>"
        And Admin selects "rule" value as "<RuleValue>"
        And Admin clicks on Save button
        And Admin clicks Add New Rule button
        And Admin enters "Failure" rule name as "<RuleNameValue3>"
        And Admin selects "rule" attribute as "<RuleAtttribute2>"
        And Admin selects "rule" value as "<RuleValue2>"
        And Admin clicks on Save button
        When Admin clicks on Activate Policy toggle button
        And Admin clicks on Yes button in confirmation popup
        When Admin clicks on Done button
        Then verify column values in Policy listing page
        Then click on logout button
        Examples:
            | UserName    | Password | ProjectName   | PolicyName      | PolicyPrecedence | PolicyAtttribute    | PolicyValue | RuleNameValue2 | RuleNameValue3 | RuleAtttribute      | RuleValue | RuleAtttribute2 | RuleValue2 |
            | Itops_admin | qa123    | Automation_02 | Failurepolicy02 | 2                | Business Time Alert | True        | Rule02         | Rule03         | Business Time Alert | True      | Alert Severity  | Critical   |

    # @VerifyDuplicateFailurePrecedence
    # Scenario Outline: ITOps Admin verifies duplicate policy precedence

    #     Given ITOps "Admin" is in the home page, "<UserName>", "<Password>"
    #     When "ITOps_Admin" enters project name in project search feild "<ProjectName>"
    #     And "ITOps_Admin" clicks on Project "<ProjectName>"
    #     And "ITOps_Admin" clicks on configuration
    #     And "ITOps_Admin" navigate to Failure Policy
    #     And "ITOps_Admin" clicks on policy "<PolicyName>"
    #     And Admin clicks on edit policy button
    #     And Admin enters "Failure" Precedence as "<PolicyPrecedence>"
    #     And Admin clicks on Update Details
    #     And Admin clicks on Yes button in confirmation popup
    #     Then verify "Error" toaster "<ErrorMessage>"
    #     And Admin enters "Failure" Precedence as "<UnassignedPolicyPrecedence>"
    #     And Admin clicks on Update Details
    #     And Admin clicks on Yes button in confirmation popup
    #     When clicks on Next button
    #     And clicks on Edit rule icon
    #     When Admin enters "Failure" rule name as "<UpdatedRuleName>"
    #     And click on Update rule button
    #     And Admin clicks on Yes button in confirmation popup
    #     When Admin clicks on Done button
    #     Then click on logout button
    #     Examples:
    #         | UserName    | Password | ProjectName   | PolicyName    | PolicyPrecedence | UnassignedPolicyPrecedence | UpdatedRuleName        | ErrorMessage                                    |
    #         | Itops_admin | qa123    | Automation_02 | Failurepolicy | 2                | 9                          | UpdatedCorrelationRule | The precedence value has already been assigned. |

    # @EditExistingFailurePolicy
    # Scenario Outline: ITOps Admin edit existing policy details

    #     Given ITOps "Admin" is in the home page, "<UserName>", "<Password>"
    #     When "ITOps_Admin" enters project name in project search feild "<ProjectName>"
    #     And "ITOps_Admin" clicks on Project "<ProjectName>"
    #     And "ITOps_Admin" clicks on configuration
    #     And "ITOps_Admin" navigate to Failure Policy
    #     And "ITOps_Admin" clicks on policy "<PolicyName>"
    #     And Admin clicks on edit policy button
    #     And Admin enters "Failure" Policy Name as "<UpdatedPolicyName>"
    #     And Admin selects "policy" attribute as "<PolicyAtttribute>"
    #     And Admin selects "policy" value as "<PolicyValue>"
    #     And Admin clicks on Update Details
    #     And Admin clicks on Yes button in confirmation popup
    #     Then verify "success" toaster "<PolicyUpdatedSuccessMessage>"
    #     When clicks on Next button
    #     And clicks on Edit rule icon
    #     When Admin enters "Failure" rule name as "<UpdatedRuleName>"
    #     And Admin selects "rule" attribute as "<RuleAtttribute>"
    #     And Admin selects "rule" value as "<RuleValue>"
    #     And click on Update rule button
    #     And Admin clicks on Yes button in confirmation popup
    #     When Admin clicks on Done button
    #     Then click on logout button


    #     Examples:
    #         | UserName    | Password | ProjectName   | PolicyName    | UpdatedPolicyName | PolicyAtttribute | PolicyValue | UpdatedRuleName        | RuleAtttribute | RuleValue | PolicyUpdatedSuccessMessage                                               |
    #         | Itops_admin | qa123    | Automation_02 | Failurepolicy | PolicynameUpdated | Alert Source     | Forescout   | CorrelationRuleUpdated | Alert Source   | Forescout | The failure policy change will not have any effect on any existing alerts |

    @VerifyFailurePolicyCannotBeActivatedWhenAllRulesAreInactive
    Scenario Outline: ITOps Admin verifies activate policy in listing page when all rules are inactive

        Given ITOps "ITOps_Admin" is in the home page, "<UserName>", "<Password>"
        When "ITOps_Admin" enters project name in project search feild "<ProjectName>"
        And "ITOps_Admin" clicks on Project "<ProjectName>"
        And "ITOps_Admin" clicks on configuration
        And "ITOps_Admin" clicks on policy "<Policyname>"
        And Admin clicks on edit policy button
        When clicks on Next button
        And clicks on active rule toggle button
        And Admin clicks on Yes button in confirmation popup
        When Admin clicks on Done button
        And clicks on status toggle button "<PolicyName>"
        And Admin clicks on Yes button in confirmation popup
        Then verify "Error" toaster "<ErrorMessage>"
        Examples:
            | UserName    | Password | ProjectName   | PolicyName    | RuleName | ruleAtttribute      | ruleValue | ErrorMessage                                                            |
            | Itops_admin | qa123    | Automation_02 | Failurepolicy | testrule | Business Time Alert | True      | The policy cannot be turned active as it does not have any active rules |

