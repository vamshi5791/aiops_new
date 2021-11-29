@AdvancedFilterM5  @ITOps_Admin @Regression

Feature:  Advanced Filters

    Scenario Outline: Verify user able to select values from incident drop down in advanced filters

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        And "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        When "Admin" clicks on alert state dropdown
        And "Admin" selects alert state dropdown option as "Open"
        And "Admin" clicks on apply button
        Then "Admin" verifies the status column as "<Alert_State>"
        And "Admin" clicks on advanced filter icon
        When "Admin" clicks on alert state dropdown
        And "Admin" selects alert state dropdown option as "Active"
        And "Admin" selects alert state dropdown option as "On Hold"
        And "Admin" clicks on apply button
        Then "Admin" verifies the status column as "<Alert_State3>"
        And "Admin" clicks on advanced filter icon
        When "Admin" clicks on alert state dropdown
        And "Admin" selects alert state dropdown option as "Resolved"
        And "Admin" clicks on apply button
        Then "Admin" verifies the status column as "<Alert_State4>"


        Examples:
            | AdvancedFilters  | SourceAndResource    | StateAndStatus   | DataAndTime   | Alert_State | Alert_State2 | Alert_State3 | Alert_State4 |
            | Advanced Filters | Source and Resources | State and Status | Date and Time | Open        | Active       | On Hold      | Resolved     |
