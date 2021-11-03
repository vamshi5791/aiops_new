@LoginPersona @ITOps_IE @Regression

Feature: Login persona functionalities of Installation Engineer

     Scenario Outline:   Veirfying the IE is able to edit the project
          When "Installation_Engineer" navigates to ITOps home page
          And "Installation_Engineer" enters project name in project search field
          And "Installation_Engineer" clicks dot menu icon
          And "Installation_Engineer" clicks edit Project
          And "Installation_Engineer" enters description as "<Description>"
          And "Installation_Engineer" clicks on Update
          Then "Installation_Engineer" verifies if "<SuccessMessage>" message is displayed

          Examples:
               | Description | SuccessMessage              |
               | NewSample   | Project Updated Successfully |

     Scenario Outline: Installation Engineer is able to access the Master Configuration page
          When "Installation_Engineer" navigates to ITOps home page
          And "Installation_Engineer" clicks on edit configuration button
          Then "Installation_Engineer" is taken to the master configuration page "<MasterText>"

          Examples:
               | MasterText           |
               | Master Configuration |

     Scenario: ITOps Installation Engineer is not able to view Dashboard
          When "Installation_Engineer" navigates to ITOps home page
          And "Installation_Engineer" enters project name in project search field
          And "Installation_Engineer" clicks on project name and navigates to dashboard
          Then "Installation_Engineer" unable to access dashboard

     Scenario: Installation Engineer is unable to  view Alerts

          Then "Installation_Engineer" unable to access alerts section

     Scenario: Installation Engineer is unable to  view Infrastructure

          Then "Installation_Engineer" unable to access infrastructure section

     Scenario: Installation Engineer is unable to  view Configuration

          Then "Installation_Engineer" unable to access configuration section




