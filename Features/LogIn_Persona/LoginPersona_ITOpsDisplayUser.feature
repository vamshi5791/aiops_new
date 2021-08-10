@LoginPersona @ITOps_Milestone_2  


Feature:Login persona functionalities of Display User

    Background:

        Given user opens itops application
        And "Display_User" enters Username, Password and click on Login button "Itops_displayuser", "qa123"
        And "Display_User" enters project name in project search feild "Automation_02"
        And "Display_User" clicks on project name "Automation_02"

    @Display_User_AbleToViewDashboard

    Scenario: Display User is able to  view dashboard

        And "Display_User" able to access dashboard
        And click on logout button

    @Display_User_AbleToViewAlerts

    Scenario: Display User is able to  view alerts

        And "Display_User" able to access alerts section
        And click on logout button

    @Display_User_AbleToViewConfiguration

    Scenario: Display User is unable to  view configuration

        And "Display_User" unable to access configuration section
        And click on logout button

    @Display_User_NotAbleToViewInfrastructure

    Scenario: Display User is unable to  view infrastructure

        And "Display_User" unable to access infrastructure section
        And click on logout button
