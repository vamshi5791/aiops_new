@LoginPersona @ITOps_Engineer @Regression

Feature:Login persona functionalities of ITOps_Engineer

        Scenario: ITOps ITOps Engineer is not able to access the Master Configuration page
            # When "ITOpsEngineer" navigates to ust home page
             Then "ITOpsEngineer" verifies edit configuration button is not present

        Scenario:   ITOps Engineer is not able to create a new project
             When "ITOpsEngineer" navigates to ust home page
             Then "ITOpsEngineer" unable to click create new project
        Scenario Outline: ITOps Engineer is able to  view dashboard

             When "ITOpsEngineer" enters project name as "<ProjectName>" in the search field
              And "ITOpsEngineer" clicks on project name "<ProjectName>"
             Then "ITOpsEngineer" able to access dashboard
        Examples:
                  | ProjectName      |
                  | Automation_IB_24 |

        Scenario Outline: ITOps Engineer is able to  view Alerts

             Then "ITOpsEngineer" able to access alerts section

        Scenario: ITOps Engineer is able to  view Configuration

             Then "ITOpsEngineer" able to access configuration section

        Scenario: ITOps Engineer is able to  view Infrastructure

             Then "ITOpsEngineer" able to access infrastructure section

        Scenario Outline:   ITOps ITOps_Engineer Unbale TO Access Three Dots
             When "ITOpsEngineer" navigates to ust home page
              And "ITOpsEngineer" enters project name as "<ProjectName>" in the search field
              And "ITOpsEngineer" clicks dot menu icon
             Then "ITOpsEngineer" unable to access dot menu options
        Examples:
                  | ProjectName      |
                  | Automation_IB_24 |

        