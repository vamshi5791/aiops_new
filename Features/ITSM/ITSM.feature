@Hold @ITOps_Admin @Regression

Feature: ITSM

    Scenario Outline: Verify that ITSM tickets created directly in Service now can be taken to ITOps application


        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name

        When "ITOps_Admin" Login to service now as ninetyone user and create a incident
        When "ITOps_Admin" Search in ticket Console after "6" minutes

        Examples:
            | ProjectName     | IncidentId | SuccessMessage                |
            | Automation_01M3 | INC0819593 | Ticket(s) holded successfully |

    Scenario Outline: Verify service now ticket status changes to onhold status such as -on hold, Alert state should be changed to On hold

        When "ITOps_Admin" selects the ticket "<IncidentId>" and change the state to "On Hold"
        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be "On Hold"
        When "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "Admin" clicks on incident status dropdown
        And "Admin" verifies the dropdown values as "Open"
        And "Admin" verifies the dropdown values as "Active"
        And "Admin" verifies the dropdown values as "On Hold"
        And "Admin" verifies the dropdown values as "Resolved"
        And "Admin" clicks on "On Hold" option from the list of options
        And "Admin" clicks on apply button
        # And "Admin" verifies corresponding ticket should be showned in the filter results "On Hold"
        # When "admin" navigates to Tickets page
        # And "admin" enters "Ticket number" and clicks on enter "<IncidentId>"
        # And "admin" clicks on ticket number "<IncidentId>" from state column of a ticket
        Then "admin" verifies Corresponding ticket should be shown in filter results with status as "<StatusInAlert>"


        Examples:
            | ProjectName     | IncidentId | StatusInAlert |
            | Automation_01M3 | INC0820381 | On Hold       |

    Scenario Outline: Verify service now ticket status changes to onhold status such as - Awaiting change, Alert state should be changed to On hold

        When "ITOps_Admin" selects the ticket "<IncidentId>" and change the state to "Awaiting Change"
        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be "Awaiting Change"
        When "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "Admin" clicks on incident status dropdown
        And "Admin" verifies the dropdown values as "Open"
        And "Admin" verifies the dropdown values as "Active"
        And "Admin" verifies the dropdown values as "On Hold"
        And "Admin" verifies the dropdown values as "Resolved"
        And "Admin" clicks on "On Hold" option from the list of options
        And "Admin" clicks on apply button
        # When "admin" navigates to Tickets page
        # And "admin" enters "Ticket number" and clicks on enter "<IncidentId>"
        # And "admin" clicks on ticket number "<IncidentId>" from state column of a ticket
        Then "admin" verifies Corresponding ticket should be shown in filter results with status as "<StatusInAlert>"

        Examples:
            | ProjectName     | IncidentId | StatusInAlert |
            | Automation_01M3 | INC0820381 | On Hold       |
    Scenario Outline: Verify service now ticket status changes to onhold status such as - Awaiting Customer IT, Alert status should be changed to On hold

        When "ITOps_Admin" selects the ticket "<IncidentId>" and change the state to "Awaiting Customer IT"
        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be "Awaiting Customer IT"
        When "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "Admin" clicks on incident status dropdown
        And "Admin" verifies the dropdown values as "Open"
        And "Admin" verifies the dropdown values as "Active"
        And "Admin" verifies the dropdown values as "On Hold"
        And "Admin" verifies the dropdown values as "Resolved"
        And "Admin" clicks on "On Hold" option from the list of options
        And "Admin" clicks on apply button
        # When "admin" navigates to Tickets page
        # And "admin" enters "Ticket number" and clicks on enter "<IncidentId>"
        # And "admin" clicks on ticket number "<IncidentId>" from state column of a ticket
        Then "admin" verifies Corresponding ticket should be shown in filter results with status as "<StatusInAlert>"

        Examples:
            | ProjectName     | IncidentId | StatusInAlert |
            | Automation_01M3 | INC0820381 | On Hold       |
    Scenario Outline: Verify service now ticket status changes to onhold status such as - Awaiting problem, Alert state should be changed to On hold

        When "ITOps_Admin" selects the ticket "<IncidentId>" and change the state to "Awaiting Problem"
        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be "Awaiting Problem"
        When "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "Admin" clicks on incident status dropdown
        And "Admin" verifies the dropdown values as "Open"
        And "Admin" verifies the dropdown values as "Active"
        And "Admin" verifies the dropdown values as "On Hold"
        And "Admin" verifies the dropdown values as "Resolved"
        And "Admin" clicks on "On Hold" option from the list of options
        And "Admin" clicks on apply button
        # When "admin" navigates to Tickets page
        # And "admin" enters "Ticket number" and clicks on enter "<IncidentId>"
        # And "admin" clicks on ticket number "<IncidentId>" from state column of a ticket
        Then "admin" verifies Corresponding ticket should be shown in filter results with status as "<StatusInAlert>"

        Examples:
            | ProjectName     | IncidentId | StatusInAlert |
            | Automation_01M3 | INC0820381 | On Hold       |

    Scenario Outline: Verify service now ticket status changes to onhold status such as - Awaiting User info, Alert status should be changed to On hold

        When "ITOps_Admin" selects the ticket "<IncidentId>" and change the state to "Awaiting User Info"
        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be "Awaiting User Info"
        When "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "Admin" clicks on incident status dropdown
        And "Admin" verifies the dropdown values as "Open"
        And "Admin" verifies the dropdown values as "Active"
        And "Admin" verifies the dropdown values as "On Hold"
        And "Admin" verifies the dropdown values as "Resolved"
        And "Admin" clicks on "On Hold" option from the list of options
        And "Admin" clicks on apply button
        # When "admin" navigates to Tickets page
        # And "admin" enters "Ticket number" and clicks on enter "<IncidentId>"
        # And "admin" clicks on ticket number "<IncidentId>" from state column of a ticket
        Then "admin" verifies Corresponding ticket should be shown in filter results with status as "<StatusInAlert>"

        Examples:
            | ProjectName     | IncidentId | StatusInAlert |
            | Automation_01M3 | INC0820381 | On Hold       |

    Scenario Outline: Verify service now ticket status changes to onhold status such as - Awaiting Vendor, Alert status should be changed to On hold

        When "ITOps_Admin" selects the ticket "<IncidentId>" and change the state to "Awaiting Vendor"
        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be "Awaiting Vendor"
        When "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "Admin" clicks on incident status dropdown
        And "Admin" verifies the dropdown values as "Open"
        And "Admin" verifies the dropdown values as "Active"
        And "Admin" verifies the dropdown values as "On Hold"
        And "Admin" verifies the dropdown values as "Resolved"
        And "Admin" clicks on "On Hold" option from the list of options
        And "Admin" clicks on apply button
        # When "admin" navigates to Tickets page
        # And "admin" enters "Ticket number" and clicks on enter "<IncidentId>"
        # And "admin" clicks on ticket number "<IncidentId>" from state column of a ticket
        Then "admin" verifies Corresponding ticket should be shown in filter results with status as "<StatusInAlert>"

        Examples:
            | ProjectName     | IncidentId | StatusInAlert |
            | Automation_01M3 | INC0820381 | On Hold       |

    Scenario Outline: Verify that tickets assigned in Service now is reflected back in ITOps

        When "ITOps_Admin" selects the ticket "<IncidentId>" and change the state to "Active"
        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be "Active"
        When "admin" navigates to Tickets page
        And "admin" enters "Ticket number" and clicks on enter "<IncidentId>"
        And "admin" clicks on ticket number "<IncidentId>" from state column of a ticket
        Then "admin" verifies Corresponding ticket should be shown in filter results with status as "<StatusInAlert>"

        Examples:
            | ProjectName     | IncidentId | StatusInAlert |
            | Automation_01M3 | INC0820381 | Assigned      |




    Scenario Outline: Verify closing a ticket from ticketed state as resolved in service now is reflected back in ITOps

        When "ITOps_Admin" selects the ticket "<IncidentId>" and change the state to "On Hold"
        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be "On Hold"
        When "admin" navigates to Tickets page
        And "admin" enters "Ticket number" and clicks on enter "<IncidentId>"
        And "admin" clicks on ticket number "<IncidentId>" from state column of a ticket
        Then "admin" verifies Corresponding ticket should be shown in filter results with status as "<StatusInAlert>"

        Examples:
            | ProjectName     | IncidentId | StatusInAlert |
            | Automation_01M3 | INC0820381 | On Hold       |

    Scenario Outline: Verify closing a ticket from hold state as resolved in service now is reflected back in ITOps

        When "ITOps_Admin" selects the ticket "<IncidentId>", state as "Resolved", category as "Skype for Business", subcategory as "Conference Call", close code as "Monitoring Incident", Enter close note as "USTIB" and update
        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be "Resolved"
        When "admin" navigates to Tickets page
        And "admin" enters "Ticket number" and clicks on enter "<IncidentId>"
        And "admin" clicks on ticket number "<IncidentId>" from state column of a ticket
        Then "admin" verifies Corresponding ticket should be shown in filter results with status as "<StatusInAlert>"

        Examples:
            | ProjectName     | IncidentId | StatusInAlert |
            | Automation_01M3 | INC0820381 | Resolved      |

    Scenario Outline:Verify closing a resolved ticket

        When "ITOps_Admin" selects the ticket "<IncidentId>" and change the state to "On Hold"
        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be "On Hold"
        When "admin" navigates to Tickets page
        And "admin" enters "Ticket number" and clicks on enter "<IncidentId>"
        And "admin" clicks on ticket number "<IncidentId>" from state column of a ticket
        Then "admin" verifies Corresponding ticket should be shown in filter results with status as "<StatusInAlert>"

        Examples:
            | ProjectName     | IncidentId | StatusInAlert |
            | Automation_01M3 | INC0820381 | On Hold       |

    Scenario Outline:Verify closing a ticked from assigned state as resolved in service now is reflected back in ITOps

        When "ITOps_Admin" selects the ticket "<IncidentId>", state as "Resolved", category as "Skype for Business", subcategory as "Conference Call", close code as "Monitoring Incident", Enter close note as "USTIB" and update
        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be "Resolved"
        When "admin" navigates to Tickets page
        And "admin" enters "Ticket number" and clicks on enter "<IncidentId>"
        And "admin" clicks on ticket number "<IncidentId>" from state column of a ticket
        Then "admin" verifies Corresponding ticket should be shown in filter results with status as "<StatusInAlert>"

        Examples:
            | ProjectName     | IncidentId | StatusInAlert |
            | Automation_01M3 | INC0820381 | Resolved      |


    Scenario: Verify that ITSM tickets created directly in Service now can be taken to ITOps application

        When "admin" navigates to Tickets page
        And "admin" enters "Ticket number" in ticket console and clicks on enter
        Then "admin" verifies ticket console should display new Service now ticket created with "Title", "Description", "Category", "Priority" and "Created Time And Date"
        And "admin" clicks on Alerts page
        And "admin" enters "Ticket number" in ticket console and clicks on enter
        And "admin" verifies ticket number in alert console

    Scenario Outline: Verify resolving a ticket from Active state as resolved in Service now is reflected back in ITOps
        When "ITOps_Admin" selects the ticket "<IncidentId>", state as "Resolved", close code as "Monitoring Incident", Enter close note as "USTIB" and update
        When "admin" login in to service now and search for the incident id as "<IncidentId>"
        Then "admin" verifies state of ticket should be "Resolved"
        #code for 3rd step line number 36
        When "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "Admin" clicks on incident status dropdown
        And "Admin" verifies the dropdown values as "Open"
        And "Admin" verifies the dropdown values as "Active"
        And "Admin" verifies the dropdown values as "On Hold"
        And "Admin" verifies the dropdown values as "Resolved"
        And "Admin" clicks on "Resolved" option from the list of options
        And "Admin" clicks on apply button
        And Admin click on state
        And "admin" clicks on "Close" button
        When "admin" enters closure note as "<ClosureNote>" and click on Ok
        Then "Admin" verifies if "<SuccessMessage>" message is displayed

        # When "ITOps_Admin" selects the ticket "<IncidentId>" and change the state to "Active"
        # When "admin" login in to service now and search for the incident id as "<IncidentId>"
        # Then "admin" verifies state of ticket should be "Active"
        # When "admin" navigates to Tickets page
        # And "admin" enters "Ticket number" and clicks on enter "<IncidentId>"
        # And "admin" clicks on ticket number "<IncidentId>" from state column of a ticket
        Then "admin" verifies Corresponding ticket should be shown in filter results with status as "<StatusInAlert>"

        Examples:
            | ProjectName     | IncidentId | StatusInAlert | SuccessMessage                | ClosureNote     |
            | Automation_01M3 | INC0820381 | Resolved      | Alerts(s) closed successfully | Automation Test |