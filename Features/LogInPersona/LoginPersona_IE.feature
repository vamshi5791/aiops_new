@LoginPersona @ITOps_IE @Regression

Feature: Login persona functionalities of Installation Engineer

        @IE_NotAbleToViewDashboard

        Scenario Outline: ITOps Installation Engineer is unable to view Dashboard

             When "Installation_Engineer" enters project name as "<ProjectName>" in the search field
              And "Installation_Engineer" clicks on project name "<ProjectName>"
              And "Installation_Engineer" unable to access dashboard
        Examples:
                  | ProjectName      |
                  | Automation_02 |


        Scenario: Installation Engineer is unable to  view Alerts
            
              And "Installation_Engineer" unable to access alerts section


        Scenario: Installation Engineer is unable to  view Infrastructure
          
              And "Installation_Engineer" unable to access infrastructure section

        Scenario: Installation Engineer is unable to  view Configuration
            
              And "Installation_Engineer" unable to access configuration section


        Scenario Outline:   Veirfying the IE is able to edit the project

             When "Installation_Engineer" navigates to ust home page
              And "Installation_Engineer" enters project name as "<ProjectName>" in the search field
              And "Installation_Engineer" clicks dot menu icon
              And "Installation_Engineer" clicks edit Project
              And "Installation_Engineer" enters description as "<Description>"
              And "Installation_Engineer" clicks on Update
             Then "Installation_Engineer" verifies if "<SuccessMessage>" message is displayed

        Examples:
                  | ProjectName      | Description |
                  | Automation_IB_16 | NewSample   |

        Scenario Outline: Installation Engineer is able to access the Master Configuration page
             When "Installation_Engineer" navigates to ust home page
              And "Installation_Engineer" clicks on edit configuration button
             Then "Installation_Engineer" is taken to the master configuration page "<MasterText>"

        Examples:
                  | MasterText           |
                  | Master Configuration |

     #    Scenario Outline: Installation Engineer is able to disable the project
     #         When "Installation_Engineer" navigates to ust home page
     #          And "Installation_Engineer" enters project name as "<ProjectName>" in the search field
     #          And "Installation_Engineer" clicks dot menu icon
     #          And "Installation_Engineer" clicks on deactivate project
     #          And "Installation_Engineer" clicks on yes
     #         Then Success message "<Toaster>" must be shown once project is "disabled"
 
     #    Examples:
     #              | ProjectName      | Toaster                          |
     #              | Automation_IB_31 | Project Deactivated Successfully |

     #    @IE_Deleting_Project
     #    Scenario Outline: Installation Engineer is able to delete the project
     #         When "Installation_Engineer" navigates to ust home page
     #          And "Installation_Engineer" enters project name as "<projectName>" in the search field
     #          And "Installation_Engineer" clicks dot menu icon to delete project
     #          And "Installation_Engineer" clicks on delete project
     #          And "Installation_Engineer" clicks on yes
     #         Then Success message "<Toaster>" must be shown once project is "deleted"

     #    Examples:
     #              | projectName     | Toaster                      |
     #              | ProjectAuto1427 | Project Deleted Successfully |



