@LoginPersona @ITOps_Milestone_2  @LoginPersonaITOpsEngineer


Feature: Login persona functionalities of ITOps Engineer

    Background:

        Given user opens itops application
        And "ITOps_Engineer" enters Username, Password and click on Login button "Itops_engineer", "qa123"
        When "ITOps_Engineer" enters project name in project search feild "Automation_02"
        And "ITOps_Engineer" clicks on project name "Automation_02"

    @Engineer_AbleToViewDashboard

    Scenario: ITOps Engineer is able to  view dashboard

        And "ITOps_Engineer" able to access dashboard
        And click on logout button

    @Engineer_AbleToViewAlerts

    Scenario: ITOps Engineer is able to  view alerts

        And "ITOps_Engineer" able to access alerts section
        And click on logout button

    @Engineer_AbleToViewConfiguration

    Scenario: ITOps Engineer is able to  view configuration

        And "ITOps_Engineer" able to access configuration section
        And click on logout button

    @Engineer_AbleToViewInfrastructure

    Scenario: ITOps Engineer is able to  view infrastructure

        And "ITOps_Engineer" able to access infrastructure section
        And click on logout button
