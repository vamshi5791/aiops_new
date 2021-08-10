@LoginPersona @ITOps_Milestone_2  


Feature: Veirfying the users are able to edit the project

    @IE_AbleToEditTheProject

    Scenario Outline:   Veirfying the IE is able to edit the project

        Given user opens itops application
        And "Installation_Engineer" enters Username, Password and click on Login button "Itops_IE", "qa123"
        And "Installation_Engineer" enters project name in project search feild "Automation_02"
        When "Installation_Engineer" click dotmenu icon
        When "Installation_Engineer" click editProject
        And "Installation_Engineer" enters description as "<Description>"
        When "Installation_Engineer" clicks on Update
        Then click on logout button

        Examples:
            | Description |
            | NewSample   |

    @ITOpsAdminAbleToEditTheProject

    Scenario Outline:   Veirfying the ITOps Admin is able to edit the project

        Given user opens itops application
        And "ITOps_Admin" enters Username, Password and click on Login button "ITOps_admin", "qa123"
        And "ITOps_Admin" enters project name in project search feild "Automation_02"
        When "ITOps_Admin" click dotmenu icon
        When "ITOps_Admin" click editProject
        And "ITOps_Admin" enters description as "<Description>"
        When "ITOps_Admin" clicks on Update
        Then click on logout button

        Examples:
            | Description |
            | NewSample   |