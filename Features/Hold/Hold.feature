@Hold @ITOps_Admin @Regression

Feature: Hold

    Scenario Outline: Hold

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name as "<ProjectName>" in the search field
        And "admin" clicks on project name "<ProjectName>"
        And "admin" clicks on Alerts page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on ticket State dropdown
        And "admin" clicks on "Hold" button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        When "admin" clicks on refresh button in alert console
        Then "admin" Verifies the Alert console for the particular ticket status as "on hold"

        Examples:
            | ProjectName     | TicketNumber | SuccessMessage                |
            | Automation_01M3 | INC0819593   | Ticket(s) holded successfully |


    Scenario Outline: Hold from select all

        When "admin" clicks on Alerts page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on the checkbox of the ticket
        And "admin" clicks on ticket State dropdown
        And "admin" clicks on "Hold" button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        When "admin" clicks on refresh button in alert console
        Then "admin" Verifies the Alert console for the particular ticket status as "on hold"
        And "admin" clicks on ticket State dropdown
        Then "admin" verifies "State/Action" should have further actions like "Assign", "Close"

        Examples:
            | TicketNumber | SuccessMessage                |
            | INC0819592   | Ticket(s) holded successfully |

    Scenario Outline: Hold - in ServieNow


        When "admin" clicks on Alerts page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on the checkbox of the ticket
        And "admin" clicks on ticket State dropdown
        And "admin" clicks on "Hold" button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        When "admin" clicks on refresh button in alert console
        Then "admin" Verifies the Alert console for the particular ticket status as "on hold"
        When "admin" Go to serviceNow and verify the ticket is in On Hold status
        Examples:
            | TicketNumber | SuccessMessage                |
            | INC0819589   | Ticket(s) holded successfully |


    Scenario Outline: Hold to close

        When "admin" clicks on Alerts page
        And "admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
        And "admin" clicks on ticket State dropdown
        And "admin" clicks on "Close" button
        When "admin" enters closure note as "<ClosureNote>" and click on Ok
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        # When "admin" in servicnow that ticket is closed and closure note is added
        Examples:
            | TicketNumber | SuccessMessage                | ClosureNote     |
            | INC0819594   | Alerts(s) closed successfully | Automation Test |
