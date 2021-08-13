@LoginPersona @ITOps_Admin @Regression

Feature: Login persona functionalities of ITOps Admin

        @Admin_AbleToViewDashboard

        Scenario Outline: ITOps Admin is able to  view Dashboard

             When "ITOps_Admin" enters project name as "<ProjectName>" in the search field
              And "ITOps_Admin" clicks on project name "<ProjectName>"
              And "ITOps_Admin" able to access dashboard
        Examples:
                  | ProjectName      |
                  | Automation_IB_16 |
        Scenario: ITOps Admin is able to  view Alerts
              When "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" able to access alerts section

        Scenario: ITOps Admin is able to  view Configuration
              When "ITOps_Admin" navigate to Configuration section
              And "ITOps_Admin" able to access configuration section

        Scenario: ITOps Admin is able to  view Infrastructure
              When "ITOps_Admin" opens infrastructure page
              And "ITOps_Admin" able to access infrastructure section

        Scenario Outline:   Veirfying the ITOps Admin is able to edit the project
             When "ITOps_Admin" navigates to ust home page
             And "ITOps_Admin" enters project name as "<ProjectName>" in the search field
              And "ITOps_Admin" clicks dot menu icon
              And "ITOps_Admin" clicks edit Project
              And "ITOps_Admin" enters description as "<Description>"
             And "ITOps_Admin" clicks on Update
             Then "ITOps_Admin" verifies if "<SuccessMessage>" message is displayed
        Examples:
                  | ProjectName      | Description | SuccessMessage              |
                  | Automation_IB_16 | NewSample   | Project Updated Succesfully |

        Scenario Outline: ITOps Admin is able to access the Master Configuration page
             When "ITOps_Admin" navigates to ust home page
             And "ITOps_Admin" clicks on edit configuration button
             Then "ITOps_Admin" is taken to the master configuration page "<MasterText>"  
        Examples:
                  | MasterText           |
                  | Master Configuration |