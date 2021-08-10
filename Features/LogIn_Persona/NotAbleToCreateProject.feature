@NotAbleToCreateProject @LoginPersona @ITOps_Milestone_2  


Feature: Verifying the users able to create new project

    Feature Description : Verifying the users able to create new project

    @ITOpsEngineerNotAbleToCreateProject
    Scenario:   ITOps Engineer is not able to create a new project

        Given user opens itops application
        And "Installation_Engineer" enters Username, Password and click on Login button "Itops_engineer", "qa123"
        When "Installation_Engineer" unable to click create new project
        And click on logout button

    @ITOpsDisplayUserNotAbleToCreateProject
    Scenario:   ITOps Engineer is not able to create a new project

        Given user opens itops application
        And "Display_User" enters Username, Password and click on Login button "Itops_displayuser", "qa123"
        When "Display_User" unable to click create new project
        And click on logout button

    @ITOpsVisitorNotAbleToCreateProject
    Scenario:   ITOps Engineer is not able to create a new project

        Given user opens itops application
        And "ITOps_Visitor" enters Username, Password and click on Login button "Itops_visitor", "qa123"
        When "ITOps_Visitor" unable to click create new project
        And click on logout button