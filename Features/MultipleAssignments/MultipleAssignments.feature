@MultipleAssignments @ITOps_Admin @Regression

Feature: ITOps admin Multiple Assignments from Alert Console

    Scenario Outline: Verify that selecting multiple tickets and assign to team member works for ITOps admin

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And "admin" clicks on select all checkbox for the ticket number "<TicketNumber01>", "<TicketNumber02>"
        And "admin" clicks on 3 dots in top left
        And "admin" clicks on "Assign" button
        Then "admin" verify the alert console for corresponding ticket cluster
        And "admin" verifies the ticket is assigned "By itops_admin"
        When "Admin" clicks on the ticket number
        Then "admin" verifies ticket is assigned to "<TeamMember>"

        Examples:
            | ProjectName     | TicketNumber | Group            | TeamMember      | SuccessMessage                | ChannelName | channelJson  |
            | Automation_01M3 | INC0819624   | Visibility - UST | Amjathsha Abdul | Tickets assigned successfully | Solarwinds  | QueueChannel |

    # Scenario Outline: Verify that selecting multiple tickets and self assign works


    #     When "admin" clicks on Alerts page
    #     And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
    #     And "admin" clicks on select all checkbox for the ticket number "<TicketNumber01>", "<TicketNumber02>"
    #     And "admin" clicks on 3 dots in top left
    #     And "admin" clicks on "Assign" button
    #     And "admin" clicks on "To Me" radio button
    #     And "admin" selects user from the team member drop down as "<Group>"
    #      And "admin" clicks on assign button
    #     Then "Admin" verifies if "<SuccessMessage>" message is displayed
    #     Then "admin" verify the alert console for corresponding ticket cluster
    #     And "admin" clicks on a ticket and verify the ticket details page

    #     Examples:
    #         | ProjectName     | TicketNumber | AssignOption | Group            | TeamMember          | SuccessMessage                |
    #         | Automation_01M3 | INC0819624   | Assign       | Visibility - UST | Nimsoft Integration | Tickets assigned successfully |


    Scenario Outline: selecting multiple tickets of state Ticketed/Hold only can be selected for performing assign from 3 dots in Alert Console

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And "admin" clicks on select all checkbox for the ticket number "<TicketNumber01>", "<TicketNumber02>"
        And "admin" clicks on 3 dots in top left
        And "admin" clicks on "Assign" button
        Then "admin" verify the alert console for corresponding ticket cluster
        And "admin" verifies the ticket is assigned "By itops_admin"
        When "Admin" clicks on the ticket number
        Then "admin" verifies ticket is assigned to "<Group>"

        Examples:
            | ProjectName     | Group            | SuccessMessage                | ChannelName | channelJson  |
            | Automation_01M3 | Visibility - UST | Tickets assigned successfully | Solarwinds  | QueueChannel |

