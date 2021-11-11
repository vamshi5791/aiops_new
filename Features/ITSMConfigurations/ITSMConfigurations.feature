@ITSMConfigurations  @ITOps_Admin @Regression

Feature: ITSM Configurations


    Scenario Outline: Verify ITSM Configuration fields should be filled as per PDD when installing a project for ticket creation/updation or retrieving ticket details from service now


        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks dot menu icon
        And "Admin" clicks edit Project
        And "Admin" clicks on project Configuration
        And "Admin" clicks on ITSM Configuration


        And "Admin" enters "ITSM Name" as "<DefaultAssignmentGroup>"
        And "Admin" enters "ITSM Version" as "<TicketNumber>"
        And "Admin" enters "ITSM Host" as "<ITSMHost>"
        And "Admin" enters "ITSM Username" as "<ITSMUsername>"
        And "Admin" enters "ITSM Password" as "<ITSMPassword>"
        And "Admin" enters "ITSM Username" as "<ITSMUsername>"
        # And "Admin" selects ITSM TimeZone as "IST"

        And "Admin" enters "Default Assignment Group" as "<DefaultAssignmentGroup>"
        And "Admin" enters "Ticket Number" as "<TicketNumber>"
        And "Admin" enters "Ticket Status" as "<TicketStatus>"
        And "Admin" enters "Short Description" as "<ShortDescription>"

        And "Admin" enters "Long Description" as "<LongDescription>"
        And "Admin" enters "Category" as "<Category>"
        And "Admin" enters "Ticket Priority" as "<TicketPriority>"
        And "Admin" enters "Sys Id" as "<SysId>"

        And "Admin" enters "Assigned To" as "<AssignedTo>"
        And "Admin" enters "Assigned To User Id" as "<AssignedToUserId>"
        And "Admin" enters "Assigned Group" as "<AssignedGroup>"
        And "Admin" enters "Assigned Group Id" as "<AssignedGroupId>"

        And "Admin" enters "Closure Notes" as "<ClosureNotes>"
        And "Admin" enters "Created Time" as "<CreatedTime>"
        And "Admin" enters "Updated Time" as "<UpdatedTime>"
        And "Admin" enters "Created By" as "<CreatedBy>"

        And "Admin" enters "Updated By" as "<UpdatedBy>"
        And "Admin" enters "Resolved By" as "<ResolvedBy>"
        And "Admin" enters "Resolved Time" as "<ResolvedTime>"
        And "Admin" enters "Comments" as "<Comments>"

        And "Admin" enters "Sub Category" as "<SubCategory>"
        And "Admin" enters "Caller Id" as "<CallerId>"
        And "Admin" enters "Urgency" as "<Urgency>"
        And "Admin" enters "Ticket Severity" as "<TicketSeverity>"
        And "Admin" enters "Ticket Business Duration" as "<TicketBusinessDuration>"
        And "Admin" enters "Ticket Business Time Left" as "<TicketBusinessTimeLeft>"
        And "Admin" enters "Work Notes" as "<WorkNotes>"

        # Then Success message "<Toaster>" must be shown for "Scheduler Configuration"

        Examples:
            | ProjectName   | Toaster                        |
            | Automation_M3 | Project Configurations Updated |