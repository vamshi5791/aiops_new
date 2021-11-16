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
        And "Admin" clicks on advanced filter icon
        Then "Admin" clicks on severity dropdown
        Then "Admin" verifies the "1""st" severity dropdown option as "Critical"
        Then "Admin" verifies the "2""nd" severity dropdown option as "Major"
        Then "Admin" verifies the "3""rd" severity dropdown option as "Minor"
        Then "Admin" verifies the "4""th" severity dropdown option as "Warning"
        Then "Admin" verifies the "5""th" severity dropdown option as "Ok"
        Then "Admin" verifies the "6""th" severity dropdown option as "Information"
        And "Admin" clicks on apply button
        And "Admin" navigate to dashboard section
        And "admin" moves to the dashboard frame
        Then "Admin" verifies that the widget "Top 10 Alerts" is available in the dashboard
        And "Admin" clicks on severity label
        Then "Admin" verifies the "1""st" severity option as "All"
        Then "Admin" verifies the "2""nd" severity option as "Critical"
        Then "Admin" verifies the "3""rd" severity option as "Major"
        Then "Admin" verifies the "4""th" severity option as "Minor"
        Then "Admin" verifies the "5""th" severity option as "Warning"
        Then "Admin" verifies the "6""th" severity option as "Ok"
        Then "Admin" verifies the "7""th" severity option as "Information"
        When "Admin" comes out of the dashboard frame

