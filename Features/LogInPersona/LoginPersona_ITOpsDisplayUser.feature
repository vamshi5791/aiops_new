@LoginPersona @ITOps_Display_User @Regression

Feature:Login persona functionalities of Display User

     Scenario Outline: ITOps Display User is able to  view dashboard


          And "Admin" enters project name in project search field
          And "admin" clicks on project name and navigates to dashboard
          And "Display_User" able to access dashboard
          Examples:
               | ProjectName      |
               | Automation_IB_24 |

     Scenario Outline: Display User is able to view alerts

          Then "Display_User" able to access alerts section

     Scenario: Display User is unable to  view configuration

          Then "Display_User" unable to access configuration section

     Scenario: Display User is unable to  view infrastructure

          Then "Display_User" unable to access infrastructure section

     Scenario:   ITOps Display_User is not able to create a new project
          When "Display_User" navigates to ITOps home page
          Then "Display_User" unable to click create new project

     Scenario: ITOps Display User is not able to access the master configuration page
          When "Display_User" navigates to ITOps home page
          Then "Display_User" verifies edit configuration button is not present

     Scenario Outline:   ITOps Display_User Unbale TO Access Three Dots
          When "admin" navigates to ITOps home page
          And "Admin" enters project name in project search field
          And "admin" clicks on project name and navigates to dashboard
          And "Display_User" clicks dot menu icon
          When "Display_User" unable to access dot menu options

          Examples:
               | ProjectName      |
               | Automation_IB_24 |