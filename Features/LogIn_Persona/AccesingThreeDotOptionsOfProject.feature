@ITOps_Milestone_2  @LoginPersona 

Feature: Users accessing the three dots of the project

    Feature Description : Verifying whether the Users are having access to three dots of the project

    @ITOps_EngineerUnbaleTOAccessThreeDots

    Scenario:   ITOps Engineer Unbale TO Access Three Dots

        Given user opens itops application
        And "Itops_engineer" enters Username, Password and click on Login button "Itops_engineer", "qa123"
        When "Itops_engineer" enters project name in project search feild "Automation_02"
        When "Itops_engineer" click dotmenu icon
        When "Itops_engineer" unable to access dot menu options
        And click on logout button


    @ITOps_DisplayUserUnbaleTOAccessThreeDots

    Scenario:   ITOps Display_User Unbale TO Access Three Dots

        Given user opens itops application
        And "Display_User" enters Username, Password and click on Login button "Itops_displayuser", "qa123"
        When "Display_User" enters project name in project search feild "Automation_02"
        When "Display_User" click dotmenu icon
        When "Display_User" unable to access dot menu options
        And click on logout button

    @ITOps_VisitorUnbaleTOAccessThreeDots

    Scenario:   ITOps Engineer Unbale TO Access Three Dots

        Given user opens itops application
        And "ITOps_Visitor" enters Username, Password and click on Login button "Itops_visitor", "qa123"
        When "ITOps_Visitor" enters project name in project search feild "Automation_02"
        When "ITOps_Visitor" click dotmenu icon
        When "ITOps_Visitor" unable to access dot menu options
        And click on logout button