@LoginPersona @ITOps_Milestone_2  


Feature: Login persona functionalities of ITOps Visitor

    Background:

        Given user opens itops application
        And "ITOps_Visitor" enters Username, Password and click on Login button "Itops_visitor", "qa123"
        And "ITOps_Visitor" enters project name in project search feild "Automation_02"
        And "ITOps_Visitor" clicks on project name "Automation_02"

    @Visitor_AbleToViewDashboard

    Scenario: ITOps Visitor is able to  view dashboard

        And "ITOps_Visitor" able to access dashboard
        And click on logout button

    @Visitor_NotAbleToViewAlerts

    Scenario: ITOps Visitor is unable to  view alerts

        And "ITOps_Visitor" unable to access alerts section
        And click on logout button

    @Visitor_NotAbleToViewConfiguration

        Scenario: ITOps Visitor is unable to  view configuration

            And "ITOps_Visitor" able to access configuration section
            And click on logout button

    @Visitor_NotAbleToViewInfrastructure

    Scenario: ITOps Visitor is unable to  view infrastructure

        And "ITOps_Visitor" unable to access infrastructure section
        And click on logout button
