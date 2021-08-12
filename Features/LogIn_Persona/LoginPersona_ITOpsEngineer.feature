@LoginPersona @ITOps_Milestone_2 @ITOps_Engineer


Feature:Login persona functionalities of ITOps_Engineer


        Scenario Outline: ITOps Engineer is able to  view dashboard

             When "ITOps_Engineer" enters project name as "<ProjectName>" in the search field
              And "ITOps_Engineer" clicks on project name "<ProjectName>"
              And "ITOps_Engineer" able to access dashboard
        Examples:
                  | ProjectName      |
                  | Automation_IB_16 |


        Scenario Outline: ITOps Engineer is able to  view alerts
              And "ITOps_Engineer" clicks on Alerts page
              And "ITOps_Engineer" able to access alerts section

        Scenario: ITOps Engineer is unable to  view configuration
              And "Itops_engineer" navigate to Configuration section
              And "ITOps_Engineer" unable to access configuration section

        Scenario: ITOps Engineer is unable to  view infrastructure
              And "ITOps_ITOps_Engineer" opens infrastructure page
              And "ITOps_Engineer" unable to access infrastructure section

        Scenario:   ITOps Engineer is not able to create a new project
             When "ITOps_Engineer" navigates to ust home page
             When "ITOps_Engineer" unable to click create new project

        Scenario: ITOps ITOps Engineer is not able to access the master configuration page
             When "ITOps_Engineer" navigates to ust home page
             Then "ITOps_Engineer" verifies edit configuration button is not present

        Scenario Outline:   ITOps ITOps_Engineer Unbale TO Access Three Dots
             When "ITOps_Engineer" navigates to ust home page
             When "ITOps_Engineer" enters project name as "<ProjectName>" in the search field
              And "ITOps_Engineer" clicks dot menu icon
             When "ITOps_Engineer" unable to access dot menu options
        Examples:
                  | ProjectName   |
                  | Automation_02 |