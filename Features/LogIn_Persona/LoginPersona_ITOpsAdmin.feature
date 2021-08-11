@LoginPersona @ITOps_Milestone_2 @ITOps_Admin
Feature: Login persona functionalities of ITOps Admin

        @Admin_AbleToViewDashboard

        Scenario: ITOps Admin is able to  view dashboard

             When "Admin" enters project name as "Automation_IB_16" in the search field
              And "admin" clicks on project name "Automation_IB_16"
              And "ITOps_Admin" able to access dashboard

        Scenario: ITOps Admin is able to  view alerts
              And "admin" clicks on Alerts page
              And "ITOps_Admin" able to access alerts section

        Scenario: ITOps Admin is able to  view configuration
              And "Itops_engineer" navigate to Configuration section
              And "ITOps_Admin" able to access configuration section

        Scenario: ITOps Admin is able to  view infrastructure
              And "ITOps_Admin" opens infrastructure page
              And "ITOps_Admin" able to access infrastructure section

        Scenario Outline:   Veirfying the ITOps Admin is able to edit the project
             When "admin" navigates to ust home page
             When "Admin" enters project name as "Automation_IB_16" in the search field
              And "Admin" clicks dot menu icon
              And "Admin" clicks edit Project
              And "ITOps_Admin" enters description as "<Description>"
             When "ITOps_Admin" clicks on Update
             Then "ITOps_Admin" verifies if "<SuccessMessage>" message is displayed
            

        Examples:
                  | Description | SuccessMessage              |
                  | NewSample   | Project Updated Succesfully |


        Scenario Outline: ITOps Admin is able to access the master configuration page
             When "admin" navigates to ust home page
             When "ITOps_Admin" clicks on edit configuration button
             Then "ITOps_Admin" is taken to the master configuration page "<MasterText>"
             
        Examples:
                  | MasterText           |
                  | Master Configuration |