@FlapConfiguration @ITOps_Milestone_3 @ITOps_Admin

Feature: FlapConfiguration

    Feature Description

    Scenario Outline: FlapConfiguration
        When "admin" navigates to ITOps home page
        And "Admin" enters project name in project search field
        And "admin" clicks on project name and navigates to dashboard
        When "Admin" clicks on configuration tab
        When user Click on Autoclosure and flapping under Settings section
        Then Verify user is able to enter the values in Number of auto closed clusters "<valueForAutoCloseCluster>" and Time interval in minutes "<TimeIntervalInMin>" fields
        Then Click on update button and verify success message is displayed
        Then "Admin" verifies if "<SuccessMessage>" message is displayed

        Examples:
            | valueForAutoCloseCluster | TimeIntervalInMin | SuccessMessage                 |
            | 2                        | 30                | Auto Closure Conditions Saved. |
