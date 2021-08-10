@LoginPersona @ITOps_Milestone_2
Feature: Login persona functionalities of ITOps Admin

    Background:

        Given user opens itops application
        And "ITOps_Admin" enters Username, Password and click on Login button "Itops_admin", "qa123"
        When "ITOps_Admin" enters project name in project search feild "Automation_02"
        And "ITOps_Admin" clicks on project name "Automation_02"

    @Admin_AbleToViewDashboard

    Scenario: ITOps Admin is able to  view dashboard

        And "ITOps_Admin" able to access dashboard
        And click on logout button

    @Admin_AbleToViewAlerts

    Scenario: ITOps Admin is able to  view alerts

        And "ITOps_Admin" able to access alerts section
        And click on logout button

    @Admin_AbleToViewConfiguration

    Scenario: ITOps Admin is able to  view configuration

        And "ITOps_Admin" able to access configuration section
        And click on logout button

    @Admin_AbleToViewInfrastructure

    Scenario: ITOps Admin is able to  view infrastructure

        And "ITOps_Admin" able to access infrastructure section
        And click on logout button
