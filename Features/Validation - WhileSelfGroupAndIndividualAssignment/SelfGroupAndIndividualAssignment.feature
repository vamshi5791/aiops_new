@ITOps_Admin @Regression @SelfGroupAndIndividualAssignment

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

    # # Scenario: Verify that while doing self assigment default group is displayed if there is no any other groups in drop down

    # #     And "admin" clicks on "Individual" radio button
    # #     And "admin" verifies Assign to pop up should be displayed
    # #     And "admin" clicks on the member dropdown
    # #     Then "Admin" verifies Member drop should contains only users list who are having access to selected group name "Amjathsha Abdul", "Kevin Soman"

    Scenario: Verify group assignment group drop down contains only imported groups

        And "Admin" navigate to Configuration section
        And "Admin" clicks on external Teams
        And "admin" clicks on all groups dropdown
        And "admin" gets all the groups dropdown
        When "admin" navigates to Tickets page
        And Admin click on state in ticket console
        And "admin" clicks on assign button
        And "admin" clicks on "Group" radio button
        And "admin" verifies Assign to pop up should be displayed
        And "admin" clicks on the group dropdown
        Then "Admin" verifies group drop down should contains imported groups through external teams option
        And "admin" clicks on assign to cancel popup button

    Scenario Outline: Verify member drop down consists members who are part of selected group

        And "Admin" navigate to Configuration section
        And "Admin" clicks on external Teams
        And "admin" clicks on all groups dropdown
        And "admin" searches for a group as "UST - Helpdesk/L1 CAB" in external Teams
        And "Admin" selects group in external Teams as "UST - Helpdesk/L1 CAB"
        And "admin" gets all the members from selected group
        When "admin" navigates to Tickets page
        And Admin click on state in ticket console
        And "admin" clicks on assign button
        And "admin" clicks on "Individual" radio button
        And "admin" verifies Assign to pop up should be displayed
        And "admin" selects user from the team member drop down as "<Group>"
        And "admin" clicks on choose a team member dropdown
        Then "Admin" verifies Member drop should contains only users list who are having access to selected group name
        And "admin" clicks on assign to cancel popup button

        Examples:
            | GroupName      | Group                 |
            | ISMS Approvers | UST - Helpdesk/L1 CAB |



