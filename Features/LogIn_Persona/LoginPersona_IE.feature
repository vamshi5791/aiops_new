@LoginPersona @ITOps_Milestone_2  @LoginPersonaIE


Feature: Login persona functionalities of Installation Engineer 

    Background:

        Given user opens itops application
        And "Installation_Engineer" enters Username, Password and click on Login button "Itops_IE", "qa123"
        And "Installation_Engineer" enters project name in project search feild "Automation_02"
        And "Installation_Engineer" clicks on project name "Automation_02"

@IE_NotAbleToViewDashboard

    Scenario: Installation Engineer is unable to  view dashboard

        And "Installation_Engineer" unable to access dashboard
        Then click on logout button

@IE_NotAbleToViewAlerts

    Scenario: Installation Engineer is unable to  view alerts

        And "Installation_Engineer" unable to access alerts section
        Then click on logout button

@IE_NotAbleToViewConfiguration

    Scenario:33 Installation Engineer is unable to  view configuration

        And "Installation_Engineer" unable to access configuration section
        Then click on logout button

@IE_NotAbleToViewInfrastructure

    Scenario: Installation Engineer is unable to  view infrastructure

        And "Installation_Engineer" unable to access infrastructure section
        Then click on logout button
