@SmartDeskRolesPrivileges @RecommendedResolutionsAutomatedorManual @Regression  @ITOps_Milestone_4 @ITOps_Admin

Feature: Smart Desk - Roles/Privileges

    Scenario Outline: Verify Recommended Resolutions option is available only to ITOps Admin/Support Engineer in AIOps Desk project

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"
        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        And Admin click on state in ticket console
        Then "Admin" verifies recommended resolution should be available

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "Auto_01Resolve" in project search field and click on enter
        And "Admin" clicks on project name "Auto_01Resolve"
        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        And Admin click on state in ticket console
        Then "Admin" verifies recommended resolution should be available

        When "user" clicks on logout button
        When user enters Username as "Itops_engineer", Password as "qa123" and clicks on Login button
        Then ITOps home page is displayed

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "Auto_01Resolve" in project search field and click on enter
        And "Admin" clicks on project name "Auto_01Resolve"
        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        And Admin click on state in ticket console
        Then "Admin" verifies recommended resolution should be available

        When "user" clicks on logout button
        When user enters Username as "Itops_support", Password as "qa123" and clicks on Login button
        Then ITOps home page is displayed

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"
        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        And Admin click on state in ticket console
        Then "Admin" verifies ticket status in alert console as "Recommended R..."

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "Auto_01Resolve" in project search field and click on enter
        And "Admin" clicks on project name "Auto_01Resolve"
        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        And Admin click on state in ticket console
        Then "Admin" verifies recommended resolution should be available

        Examples:
            | ProjectName |
            | Auto_01Desk |


    Scenario Outline: Verify Recommended Resolutions from Ticket listing is shown only for tickets in on hold/Assigned/Resolved tickets AIOps Desk/Resolve project

        When "user" clicks on logout button

        When user enters Username as "Itops_admin", Password as "qa123" and clicks on Login button
        Then ITOps home page is displayed

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Open"
        And Admin click on state in ticket console
        Then "Admin" verifies recommended resolution should not be available

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        And Admin click on state in ticket console
        Then "Admin" verifies recommended resolution should be available

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "On Hold"
        And Admin click on state in ticket console
        Then "Admin" verifies recommended resolution should be available

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Resolved"
        And Admin click on state in ticket console
        Then "Admin" verifies recommended resolution should not be available

        Examples:
            | ProjectName |
            | Auto_01Desk |



    Scenario Outline: Verify Recommended Resolutions from Ticket listing is not shown for AIOps view project

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Open"
        And Admin click on state in ticket console
        Then "Admin" verifies recommended resolution should not be available

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        And Admin click on state in ticket console
        Then "Admin" verifies recommended resolution should not be available

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "On Hold"
        And Admin click on state in ticket console
        Then "Admin" verifies recommended resolution should not be available

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Resolved"
        And Admin click on state in ticket console
        Then "Admin" verifies recommended resolution should not be available


        Examples:
            | ProjectName     |
            | Automation_01M3 |



    Scenario Outline: Verify Recommended Resolutions shown in ticket details page for tickets in Assigned/Onhold having Resolutions from ticket dump

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"
        When "Admin" get the ticket number from ticket console
        When "admin" updates the ticket in service now category as "Skype for Business", Short Description as "<ShortDescription>" and update
        And Admin click on state in ticket console
        Then "Admin" verifies recommended resolution should be available
        When "Admin" clicks on the ticket number in ticket console

        Then "admin" Recommended Resolutions section shows - TICKET ID RESOLUTION, RESOLUTION QUALITY
        And "admin" verifies Resolve and Cancel button to be available with Resolve as selected by default
        And "Admin" verifies Ticket ID, Resolution selected and its Resolution quality should be shown

        Examples:
            | ProjectName | IncidentId | StatusInAlert | ShortDescription                                  |
            | Auto_01Desk | INC0820381 | Resolved      | Solarwinds] Restore the deleted article in system |

    Scenario Outline: Verify Recommended Resolutions shown in ticket listing page for tickets in Resolved status having Resolutions previously

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"

        When "Admin" clicks on the ticket number in ticket console
        And Admin click on state in details page
        And "admin" clicks on "Resolve" button in ticket details page
        And "admin" enters resolve note as "<ResolveNote>"
        And "admin" clicks on resolve button after entering closure note
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" verifies no recommended resolution available should be shown

        Examples:
            | ProjectName | ResolveNote | SuccessMessage               |
            | Auto_01Desk | IBUST       | Ticket resolved successfully |



    Scenario Outline: Verify Ticket Details page > Recommended Resolutions > Ticket Resolution poup in ticket listing page has Automated option Disabed if ticket is not assigned to self

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"


        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"

        When "Admin" get the ticket number from ticket console
        And "admin" enters the ticket number in search field
        When "admin" updates the ticket in service now category as "Skype for Business", Short Description as "<ShortDescription>" and update
        When "Admin" clicks on the ticket number in ticket console
        And "admin" clicks on ticket id in recommended resolution section
        Then "admin" verifies ticket resolution popup
        And "admin" verifies resolve button is enabled
        And "admin" clicks on "Resolve" button
        And "admin" verifies automated Radio button is disabled and Manual option is selected by default
        And "admin" verifies resolution for the selected ticket is shown as closure note
        And "Admin" clicks on cancel button
        Examples:
            | ProjectName | ShortDescription                                  |
            | Auto_01Desk | Solarwinds] Restore the deleted article in system |

    Scenario Outline: Verify Manual Resolving of a ticket via Ticket Details page >  Recommended Resolutions

        When "admin" navigates to Tickets page
        When "Admin" clicks on quick filter
        And "admin" selects filter by status type as "Assigned"

        When "Admin" get the ticket number from ticket console
        And "admin" enters the ticket number in search field
        When "admin" updates the ticket in service now category as "Skype for Business", Short Description as "<ShortDescription>" and update
        When "Admin" clicks on the ticket number in ticket console
        And "admin" clicks on ticket id in recommended resolution section
        And "admin" clicks on "Resolve" button
        And "admin" verifies closure note editable
        And "admin" enters closure note on ticket resolution popup as "<ClosureNote>"
        And "admin" clicks on "Resolve" button
        Then "Admin" verifies if any "<SuccessMessage>" message is displayed

        Examples:
            | ClosureNote | SuccessMessage               | ShortDescription                                  |
            | IBUST       | Ticket resolved successfully | Solarwinds] Restore the deleted article in system |























































