@LoginPersona @ITOps_Milestone_2 @ITOps_Visitor


Feature:Login persona functionalities of ITOps Visitor

     Scenario:   ITOps Visitor is not able to create a new project
          Then "ITOps_Visitor" unable to click create new project

     Scenario Outline: ITOps Visitor is able to  view dashboard

          And "Admin" enters project name in project search field
          And "admin" clicks on project name and navigates to dashboard
          Then "ITOps_Visitor" able to access dashboard
          Examples:
               | ProjectName      |
               | Automation_IB_24 |

     Scenario: ITOps Visitor is unable to  view alerts

          Then "ITOps_Visitor" unable to access alerts section

     Scenario: ITOps Visitor is able to  view configuration

          Then "ITOps_Visitor" able to access configuration section

     Scenario: ITOps Visitor is unable to  view infrastructure

          Then "ITOps_Visitor" unable to access infrastructure section


     Scenario: ITOps ITOps Visitor is not able to access the master configuration page
          When "ITOps_Visitor" navigates to ITOps home page
          Then "ITOps_Visitor" verifies edit configuration button is not present

     Scenario Outline:   ITOps Visitor Unbale TO Access Three Dots
          When "admin" navigates to ITOps home page
          And "Admin" enters project name in project search field
          And "ITOps_Visitor" clicks dot menu icon
          Then "ITOps_Visitor" unable to access dot menu options
          Examples:
               | ProjectName      |
               | Automation_IB_24 |