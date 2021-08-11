@LoginPersona @ITOps_Milestone_2  @LoginPersonaITOpsEngineer


Feature: Login persona functionalities of ITOps Engineer

    @Engineer_AbleToViewDashboard

    Scenario: ITOps Engineer is able to  view dashboard
        Given user opens itops application
        And "ITOps_Engineer" enters Username, Password and click on Login button "Itops_engineer", "qa123"
        When "ITOps_Engineer" enters project name in project search feild "Automation_02"
        And "ITOps_Engineer" clicks on project name "Automation_02"
        And "ITOps_Engineer" able to access dashboard

    Scenario: ITOps Engineer is able to  view alerts

        And "ITOps_Engineer" able to access alerts section

    Scenario: ITOps Engineer is able to  view configuration

        And "ITOps_Engineer" able to access configuration section

    Scenario: ITOps Engineer is able to  view infrastructure

        And "ITOps_Engineer" able to access infrastructure section

    Scenario:   ITOps Engineer is not able to create a new project

        When "Installation_Engineer" unable to click create new project

    Scenario Outline: ITOps Engineer is not able to access the master configuration page

        Then "ITOps_Engineer" verifies edit configuration button is not present

    Scenario:   ITOps Engineer Unbale TO Access Three Dots

        When "Itops_engineer" enters project name in project search feild "Automation_02"
        When "Itops_engineer" click dotmenu icon
        When "Itops_engineer" unable to access dot menu options