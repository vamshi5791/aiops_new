@OrderOfSeverity  @ITOps_Admin @Regression

Feature:  Order of severity

    Scenario: Order of severity,  in all filter dropdowns

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        When "Admin" clicks on Alerts page
        And "admin" clicks on Filter by severity drop down
        Then "Admin" verifies the "1""st" severity dropdown option as "Critical"
        Then "Admin" verifies the "2""nd" severity dropdown option as "Major"
        Then "Admin" verifies the "3""rd" severity dropdown option as "Minor"
        Then "Admin" verifies the "4""th" severity dropdown option as "Warning"
        Then "Admin" verifies the "5""th" severity dropdown option as "Ok"
        Then "Admin" verifies the "6""th" severity dropdown option as "Information"
