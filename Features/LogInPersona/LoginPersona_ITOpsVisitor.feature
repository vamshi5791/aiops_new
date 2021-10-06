@LoginPersona @ITOps_Milestone_2 @ITOps_Visitor


Feature:Login persona functionalities of ITOps Visitor

     Scenario:   ITOps Visitor is not able to create a new project
          Then "ITOps_Visitor" unable to click create new project

     Scenario: ITOps Visitor is able to  view dashboard

          When "ITOps_Visitor" enters project name in project search field
          And "ITOps_Visitor" clicks on project name and navigates to dashboard
          Then "ITOps_Visitor" able to access dashboard

     Scenario: ITOps Visitor is unable to  view alerts

          Then "ITOps_Visitor" unable to access alerts section

     Scenario: ITOps Visitor is able to  view configuration

          Then "ITOps_Visitor" able to access configuration section

     Scenario: ITOps Visitor is unable to  view infrastructure

          Then "ITOps_Visitor" unable to access infrastructure section


     Scenario: ITOps ITOps Visitor is not able to access the master configuration page
          When "ITOps_Visitor" navigates to ITOps home page
          Then "ITOps_Visitor" verifies edit configuration button is not present

     Scenario:   ITOps Visitor Unbale TO Access Three Dots
          When "ITOps_Visitor" navigates to ITOps home page
          And "ITOps_Visitor" enters project name in project search field
          And "ITOps_Visitor" clicks dot menu icon
          Then "ITOps_Visitor" unable to access dot menu options
      