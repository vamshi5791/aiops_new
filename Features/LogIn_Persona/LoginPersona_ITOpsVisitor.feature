@LoginPersona @ITOps_Milestone_2


Feature: Login persona functionalities of ITOps Visitor
    @Visitor_AbleToViewDashboard

    Scenario: ITOps Visitor is able to  view dashboard

        Given user opens itops application
        And "ITOps_Visitor" enters Username, Password and click on Login button "Itops_visitor", "qa123"
        And "ITOps_Visitor" enters project name in project search feild "Automation_02"
        And "ITOps_Visitor" clicks on project name "Automation_02"
        And "ITOps_Visitor" able to access dashboard

    Scenario: ITOps Visitor is unable to  view alerts

        And "ITOps_Visitor" unable to access alerts section

    Scenario: ITOps Visitor is unable to  view configuration

        And "ITOps_Visitor" able to access configuration section

    Scenario: ITOps Visitor is unable to  view infrastructure

        And "ITOps_Visitor" unable to access infrastructure section

    Scenario:   ITOps Engineer is not able to create a new project

        When "ITOps_Visitor" unable to click create new project

    Scenario: ITOps Visitor is not able to access the master configuration page

        Then "ITOps_Visitor" verifies edit configuration button is not present

    Scenario:   ITOps Engineer Unbale TO Access Three Dots

        When "ITOps_Visitor" enters project name in project search feild "Automation_02"
        When "ITOps_Visitor" click dotmenu icon
        When "ITOps_Visitor" unable to access dot menu options