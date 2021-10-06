@LoginPersona @ITOps_Admin @Regression

Feature: Login persona functionalities of ITOps Admin

     @Admin_AbleToViewDashboard

     Scenario: ITOps Admin is able to  view Dashboard

          When "Admin" enters project name in project search field
          And "admin" clicks on project name and navigates to dashboard
          Then "ITOps_Admin" able to access dashboard
      
     Scenario: ITOps Admin is able to  view Alerts
          When "ITOps_Admin" clicks on Alerts page
          Then "ITOps_Admin" able to access alerts section

     Scenario: ITOps Admin is able to  view Infrastructure
          When "ITOps_Admin" opens infrastructure page
          Then "ITOps_Admin" able to access infrastructure section

     Scenario: ITOps Admin is able to  view Configuration
          When "ITOps_Admin" navigate to Configuration section
          Then "ITOps_Admin" able to access configuration section


     Scenario Outline:   Veirfying the ITOps Admin is able to edit the project
          When "admin" navigates to ITOps home page
          And "Admin" enters project name in project search field
          And "ITOps_Admin" clicks dot menu icon
          And "ITOps_Admin" clicks edit Project
          And "ITOps_Admin" enters description as "<Description>"
          And "ITOps_Admin" clicks on Update
          Then "ITOps_Admin" verifies if "<SuccessMessage>" message is displayed


          Examples:
               | Description | SuccessMessage              |
               | NewSample   | Project Updated Succesfully |


     Scenario Outline: ITOps Admin is able to access the Master Configuration page
          When "ITOps_Admin" navigates to ITOps home page
          And "ITOps_Admin" clicks on edit configuration button
          Then "ITOps_Admin" is taken to the master configuration page "<MasterText>"

          Examples:
               | MasterText           |
               | Master Configuration |

#    Scenario Outline: ITOps Admin is able to disable the project
#         When "ITOps_Admin" navigates to ITOps home page
#          And "ITOps_Admin" enters project name as "<ProjectName>" in the search field
#          And "ITOps_Admin" clicks dot menu icon
#          And "ITOps_Admin" clicks on deactivate project
#          And "ITOps_Admin" clicks on yes
#         Then Success message "<Toaster>" must be shown once project is "disabled"

#    Examples:
#              | ProjectName      | Toaster                          |
#              | Automation_IB_99 | Project Deactivated Successfully |

#    @IE_Deleting_Project
#    Scenario Outline: ITOps_Admin is able to delete the project
#         When "ITOps_Admin" navigates to ITOps home page
#          And "ITOps_Admin" enters project name as "<projectName>" in the search field
#          And "ITOps_Admin" clicks dot menu icon to delete project
#          And "ITOps_Admin" clicks on delete project
#          And "ITOps_Admin" clicks on yes
#         Then Success message "<Toaster>" must be shown once project is "deleted"

#    Examples:
#              | projectName      | Toaster                      |
#              | Automation_IB_60 | Project Deleted Successfully |