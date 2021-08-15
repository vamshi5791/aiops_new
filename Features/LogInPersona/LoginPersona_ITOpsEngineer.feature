@LoginPersona @ITOps_Engineer @Regression

Feature:Login persona functionalities of ITOps_Engineer


      Scenario Outline: ITOps Engineer is able to  view dashboard

            When "ITOpsEngineer" enters project name as "<ProjectName>" in the search field
            And "ITOpsEngineer" clicks on project name "<ProjectName>"
            And "ITOpsEngineer" able to access dashboard
            Examples:
                  | ProjectName   |
                  | Automation_IB_46 |

      Scenario Outline: ITOps Engineer is able to  view Alerts

            And "ITOpsEngineer" able to access alerts section

      Scenario: ITOps Engineer is able to  view Configuration

            And "ITOpsEngineer" able to access configuration section

      Scenario: ITOps Engineer is able to  view Infrastructure

            And "ITOpsEngineer" able to access infrastructure section

      Scenario:   ITOps Engineer is not able to create a new project
            When "ITOpsEngineer" navigates to ust home page
            And "ITOpsEngineer" able to click create new project

      # Scenario: ITOps ITOps Engineer is not able to access the Master Configuration page
      #       When "ITOpsEngineer" navigates to ust home page
      #       Then "ITOpsEngineer" verifies edit configuration button is not present

#   Scenario Outline:   ITOps ITOps_Engineer Unbale TO Access Three Dots
#        When "ITOpsEngineer" navigates to ust home page
#         And "ITOpsEngineer" enters project name as "<ProjectName>" in the search field
#         And "ITOpsEngineer" clicks dot menu icon
#         And "ITOpsEngineer" unable to access dot menu options
#         And "admin" clicks on logout button
#   Examples:
#             | ProjectName   |
#             | Automation_02 |