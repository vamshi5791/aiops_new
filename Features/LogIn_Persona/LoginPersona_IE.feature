@LoginPersona @ITOps_Milestone_2


Feature: Login persona functionalities of Installation Engineer

        @IE_NotAbleToViewDashboard

        Scenario: Installation Engineer is unable to  view dashboard

             When "Admin" enters project name as "Automation_IB_16" in the search field
              And "admin" clicks on project name "Automation_IB_16"
              And "Installation_Engineer" unable to access dashboard


      #   Scenario: Installation Engineer is unable to  view alerts

      #         And "Installation_Engineer" unable to access alerts section


      #   Scenario:33 Installation Engineer is unable to  view configuration

      #         And "Installation_Engineer" unable to access configuration section


      #   Scenario: Installation Engineer is unable to  view infrastructure

      #         And "Installation_Engineer" unable to access infrastructure section

      #   Scenario Outline:   Veirfying the IE is able to edit the project

      #         And "Installation_Engineer" enters project name in project search feild "Automation_02"
      #        When "Installation_Engineer" click dotmenu icon
      #        When "Installation_Engineer" click editProject
      #         And "Installation_Engineer" enters description as "<Description>"
      #        When "Installation_Engineer" clicks on Update

      #   Examples:
      #             | Description |
      #             | NewSample   |

      #   Scenario Outline: Installation Engineer is able to access the master configuration page

      #        When "Installation_Engineer" clicks on edit configuration button
      #        Then "Installation_Engineer" is taken to the master configuration page "<MasterText>"

      #   Examples:
      #             | MasterText           |
      #             | Master Configuration |
      #   Scenario Outline: Installation Engineer is able to disable the project

      #        When "IE" enters project name as "<ProjectName>" in the search field
      #        When "IE" clicks dot menu icon
      #         And "IE" clicks on deactivate project
      #         And "IE" clicks on yes
      #        Then Success message "<Toaster>" must be shown once project is "disabled"
 
      #   Examples:
      #             | ProjectName      | Toaster                          |
      #             | Automation_IB_08 | Project Deactivated Successfully |

      #   @IE_Deleting_Project
      #   Scenario Outline: Installation Engineer is able to delete the project

      #        When "IE" enters project name as "<projectName>" in the search field
      #        When "IE" clicks dot menu icon to delete project
      #         And "IE" clicks on delete project
      #         And "IE" clicks on yes
      #        Then Success message "<Toaster>" must be shown once project is "deleted"

      #   Examples:
      #             | projectName      | Toaster                      |
      #             | Automation_IB_21 | Project Deleted Successfully |



