@LoginPersona @ITOps_Milestone_2 @ITOps_Visitor


Feature:Login persona functionalities of ITOps Visitor

        Scenario Outline: ITOps Visitor is able to  view dashboard

             When "ITOps_Visitor" enters project name as "<ProjectName>" in the search field
              And "ITOps_Visitor" clicks on project name "<ProjectName>"
              And "ITOps_Visitor" able to access dashboard
        Examples:
                  | ProjectName      |
                  | Automation_IB_16 |

        Scenario: ITOps Visitor is not able to  view alerts

              And "ITOps_Visitor" unable to access alerts section

        Scenario: ITOps Visitor is able to  view configuration

              And "ITOps_Visitor" able to access configuration section

        Scenario: ITOps Visitor is unable to  view infrastructure

              And "ITOps_Visitor" unable to access infrastructure section

        Scenario:   ITOps Visitor is not able to create a new project
             When "ITOps_Visitor" navigates to ust home page
             When "ITOps_Visitor" unable to click create new project

        Scenario: ITOps ITOps Visitor is not able to access the master configuration page
             When "ITOps_Visitor" navigates to ust home page
             Then "ITOps_Visitor" verifies edit configuration button is not present

        Scenario Outline:   ITOps Visitor Unbale TO Access Three Dots
             When "ITOps_Visitor" navigates to ust home page
             When "ITOps_Visitor" enters project name as "<ProjectName>" in the search field
              And "ITOps_Visitor" clicks dot menu icon
             When "ITOps_Visitor" unable to access dot menu options
        Examples:
                  | ProjectName      |
                  | Automation_IB_16 |