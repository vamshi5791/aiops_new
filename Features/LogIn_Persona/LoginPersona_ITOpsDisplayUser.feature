@LoginPersona @ITOps_Milestone_2


Feature:Login persona functionalities of Display User


    @Display_User_AbleToViewDashboard

    Scenario: Display User is able to  view dashboard
        Given user opens itops application
        And "Display_User" enters Username, Password and click on Login button "Itops_displayuser", "qa123"
        And "Display_User" enters project name in project search feild "Automation_02"
        And "Display_User" clicks on project name "Automation_02"
        And "Display_User" able to access dashboard


    Scenario: Display User is able to  view alerts

        And "Display_User" able to access alerts section

    Scenario: Display User is unable to  view configuration

        And "Display_User" unable to access configuration section

    Scenario: Display User is unable to  view infrastructure

        And "Display_User" unable to access infrastructure section

    Scenario:   ITOps Engineer is not able to create a new project

        When "Display_User" unable to click create new project

    Scenario: ITOps Display User is not able to access the master configuration page

        Then "Display_User" verifies edit configuration button is not present

    Scenario:   ITOps Display_User Unbale TO Access Three Dots

        When "Display_User" enters project name in project search feild "Automation_02"
        When "Display_User" click dotmenu icon
        When "Display_User" unable to access dot menu options