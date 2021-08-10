@Accessing_Master_Configuration_Page  @LoginPersona @ITOps_Milestone_2

Feature: Verifying LogIn functionalities for all ITOps user roles
Feature Description : Verifying LogIn functionalities for all ITOps user roles


        @IE_Accessing_Master_Configuration_Page

        Scenario Outline: Installation Engineer is able to access the master configuration page

            Given user opens itops application
              And "Installation_Engineer" enters Username, Password and click on Login button "Itops_IE", "qa123"
             When "Installation_Engineer" clicks on edit configuration button
             Then "Installation_Engineer" is taken to the master configuration page "<MasterText>"
              And click on logout button

        Examples:
                  | MasterText           |
                  | Master Configuration |


        @ITOpsAdmin_Accessing_Master_Configuration_Page

        Scenario Outline: ITOps Admin is able to access the master configuration page

            Given user opens itops application
              And "ITOps_Admin" enters Username, Password and click on Login button "Itops_admin", "qa123"
             When "ITOps_Admin" clicks on edit configuration button
             Then "ITOps_Admin" is taken to the master configuration page "<MasterText>"
              And click on logout button

        Examples:
                  | MasterText           |
                  | Master Configuration |

        @ITOpsDisplayUser_Accessing_Master_Configuration_Page

        Scenario Outline: ITOps Display User is not able to access the master configuration page

            Given user opens itops application
              And "Display_User" enters Username, Password and click on Login button "Itops_displayuser", "qa123"
             Then "Display_User" verifies edit configuration button is not present
              And click on logout button

        Examples:
                  | MasterText           |
                  | Master Configuration |

        @ITOpsEngineer_Accessing_Master_Configuration_Page

        Scenario Outline: ITOps Engineer is not able to access the master configuration page

            Given user opens itops application
              And "ITOps_Engineer" enters Username, Password and click on Login button "Itops_engineer", "qa123"
             Then "ITOps_Engineer" verifies edit configuration button is not present
              And click on logout button

        Examples:
                  | MasterText           |
                  | Master Configuration |

        @ITOpsVisitor_Accessing_Master_Configuration_Page

        Scenario Outline: ITOps Visitor is not able to access the master configuration page

            Given user opens itops application
              And "ITOps_Visitor" enters Username, Password and click on Login button "Itops_visitor", "qa123"
             Then "ITOps_Visitor" verifies edit configuration button is not present
              And click on logout button

        Examples:
                  | MasterText           |
                  | Master Configuration |

