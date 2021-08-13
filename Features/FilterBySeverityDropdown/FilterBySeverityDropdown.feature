@FilterBySeverityDropdown @ITOps_Admin @Regression


Feature: Verify filter by severity drop down

Feature Description : User navigates to Alert Console page, selects the severity from the dropdown
              and results should be based on the filters
 
        Scenario Outline: Verify filter by severity drop down
             When "Admin" clicks on Alerts page
              And "Admin" clicks on Filter by severity drop down
              And "Admin" selects Severity - OK and Warning "<Ok>", "<Warning>"
             Then verify Severity drop down should have values as - Ok, Warning, Minor, Major, Critical,Information
              And verify UI should show chips with filter condition with close option
              And "Admin" verifies Remove all button is present
              And verify data should be alerts with OK and warning severity only
        Examples:
                  | UserName    | Password | Severity_1 | Severity_2 | Alert_State | FilterName | Description | Toaster                    | DifferentUserName |
                  | Itops_admin | qa123    | Ok         | Warning    | Ticketed    | Automation | Value 2     | Filter saved successfully. | Itops_engineer    |
