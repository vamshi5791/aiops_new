@ITOps_Admin @Regression

Feature: Validation - While Self , group and Individual assignment


    Scenario: Verify that while doing self assignment group selection is mandatory

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "admin" navigates to Tickets page

        And Admin click on state in ticket console
        And "admin" clicks on assign button
        And "admin" verifies Assign to pop up should be displayed
        Then "Admin" self assign should not be possible without group

    # Scenario: Verify that while doing self assigment default group is displayed if there is no any other groups in drop down

    #     And "admin" clicks on "Individual" radio button
    #     And "admin" verifies Assign to pop up should be displayed
    #     And "admin" clicks on the member dropdown
    #     Then "Admin" verifies Member drop should contains only users list who are having access to selected group name "Amjathsha Abdul", "Kevin Soman"

    Scenario: Verify group assignment group drop down contains only imported groups

        And "admin" clicks on "Group" radio button
        And "admin" clicks on the group dropdown
        And "admin" verifies Assign to pop up should be displayed
        Then "Admin" verifies group drop down should contains imported groups through external teams option "Visibility - UST", "UST - Helpdesk/L1 CAB"

    Scenario: Verify member drop down consists members who are part of selected group

        And "admin" clicks on "Individual" radio button
        And "admin" verifies Assign to pop up should be displayed
        And "admin" clicks on the member dropdown
        Then "Admin" verifies Member drop should contains only users list who are having access to selected group name "Amjathsha Abdul", "Kevin Soman"
        And "admin" clicks on assign to cancel popup button