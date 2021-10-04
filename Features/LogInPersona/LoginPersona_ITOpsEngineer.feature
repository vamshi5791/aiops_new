@LoginPersona @ITOps_Engineer @Regression

Feature:Login persona functionalities of ITOps_Engineer

     Scenario: ITOps ITOps Engineer is not able to access the Master Configuration page
          # When "ITOpsEngineer" navigates to ITOps home page
          Then "ITOpsEngineer" verifies edit configuration button is not present

     Scenario:   ITOps Engineer is not able to create a new project
          When "ITOpsEngineer" navigates to ITOps home page
          Then "ITOpsEngineer" unable to click create new project
     Scenario Outline: ITOps Engineer is able to  view dashboard

          And "Admin" enters project name in project search field
          And "admin" clicks on project name and navigates to dashboard
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
          When "admin" navigates to ITOps home page
          And "Admin" enters project name in project search field
          And "ITOpsEngineer" clicks dot menu icon
          Then "ITOpsEngineer" unable to access dot menu options
          Examples:
               | ProjectName      |
               | Automation_IB_24 |

