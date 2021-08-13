@LoginPersona @ITOpsDisplayUser @Regression

Feature:Login persona functionalities of Display User

        Scenario Outline: ITOps Display User is able to  view Dshboard
             When "DisplayUser" enters project name as "<ProjectName>" in the search field
              And "DisplayUser" clicks on project name "<ProjectName>"
              And "DisplayUser" able to access dashboard
        Examples:
                  | ProjectName      |
                  | Automation_IB_16 |

        Scenario Outline: ITOps Display User is able to  view Alerts
              When "DisplayUser" clicks on Alerts page
              And "DisplayUser" able to access alerts section

        Scenario: ITOps Display User is unable to  view Configuration
              When "Display_User" navigate to Configuration section
              And "Display_User" unable to access configuration section

        Scenario: ITOps Display User is unable to  view Infrastructure
              When "DisplayUser" opens infrastructure page
              And "DisplayUser" unable to access infrastructure section

        Scenario:   ITOps Display User is not able to create a new project
             When "DisplayUser" navigates to ust home page
             And "DisplayUser" unable to click create new project

        Scenario: ITOps Display User is not able to access the Master Configuration page
             When "DisplayUser" navigates to ust home page
             Then "DisplayUser" verifies edit configuration button is not present

        Scenario Outline:   ITOps Display User Unbale TO Access Three Dots
             When "DisplayUser" navigates to ust home page
             And "DisplayUser" enters project name as "<ProjectName>" in the search field
              And "DisplayUser" clicks dot menu icon
             And "DisplayUser" unable to access dot menu options
              And "admin" clicks on logout button
        Examples:
                  | ProjectName   |
                  | Automation_02 |