@LoginPersona @ITOps_Display_User @Regression

Feature:Login persona functionalities of Display User

        Scenario Outline: ITOps Display User is able to  view dashboard

             When "Display_User" enters project name as "<ProjectName>" in the search field
              And "Display_User" clicks on project name "<ProjectName>"
              And "Display_User" able to access dashboard
        Examples:
                  | ProjectName      |
                  | Automation_IB_16 |

        Scenario Outline: Display User is able to view alerts
             
              And "Display_User" able to access alerts section

        Scenario: Display User is unable to  view configuration

              And "Display_User" unable to access configuration section

        Scenario: Display User is unable to  view infrastructure
             
              And "Display_User" unable to access infrastructure section

        Scenario:   ITOps Engineer is not able to create a new project
             When "Display_User" navigates to ust home page
             When "Display_User" unable to click create new project

        Scenario: ITOps Display User is not able to access the master configuration page
             When "Display_User" navigates to ust home page
             Then "Display_User" verifies edit configuration button is not present
              #And "admin" clicks on logout button
      #   Scenario Outline:   ITOps Display_User Unbale TO Access Three Dots
      #        When "Display_User" navigates to ust home page
      #        When "Display_User" enters project name as "<ProjectName>" in the search field
      #         And "Display_User" clicks dot menu icon
      #        When "Display_User" unable to access dot menu options
      #         And "admin" clicks on logout button
      #   Examples:
      #             | ProjectName   |
      #             | Automation_02 |