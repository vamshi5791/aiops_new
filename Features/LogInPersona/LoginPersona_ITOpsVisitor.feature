@LoginPersona @ITOps_Visitor @Regression

Feature:Login persona functionalities of ITOps Visitor

        Scenario Outline: ITOps Visitor is able to  view Dashboard

             When "ITOpsVisitor" enters project name as "<ProjectName>" in the search field
              And "ITOpsVisitor" clicks on project name "<ProjectName>"
              And "ITOpsVisitor" able to access dashboard
        Examples:
                  | ProjectName      |
                  | Automation_IB_16 |

        Scenario Outline: ITOps Visitor is able t view Alerts
              When "ITOpsVisitor" clicks on Alerts page
              And "ITOpsVisitor" able to access alerts section

        Scenario: ITOps Visitor is unable to view Configuration
              When "ITOpsVisitor" navigate to Configuration section
              And "ITOpsVisitor" unable to access configuration section

        Scenario: ITOps Visitor is unable to view Infrastructure
              When "ITOps_Visitor" opens infrastructure page
              And "ITOps_Visitor" unable to access infrastructure section

        Scenario:   ITOps Visitor is not able to create a new project
             When "ITOps_Visitor" navigates to ust home page
             And "ITOps_Visitor" unable to click create new project

        Scenario: ITOps ITOps Visitor is not able to access the Master Configuration page
             When "ITOps_Visitor" navigates to ust home page
             Then "ITOps_Visitor" verifies edit configuration button is not present

        Scenario Outline:   ITOps Visitor Unbale TO Access Three Dots
             When "ITOps_Visitor" navigates to ust home page
             And "ITOps_Visitor" enters project name as "<ProjectName>" in the search field
              And "ITOps_Visitor" clicks dot menu icon
             And "ITOps_Visitor" unable to access dot menu options
              And "admin" clicks on logout button
        Examples:
                  | ProjectName   |
                  | Automation_02 |