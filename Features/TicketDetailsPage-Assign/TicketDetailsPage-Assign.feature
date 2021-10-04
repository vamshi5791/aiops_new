@Ticket Details Page- Assign @ITOps_Milestone_2 @Regression @ITOps_Admin
Feature: Ticket Details Page- Assign

  Scenario Outline: Verify that user able to assign ticket to team member
    When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
    When "admin" clicks on Alerts page
    And "Admin" gets the ticket number
    And "Admin" clicks on the ticket number
    And "admin" clicks on "Individual" radio button
    And "admin" selects user from the team member drop down as "<Group>", "<TeamMember>"
    And "admin" clicks on assign button
    Then "Admin" verifies if "<SuccessMessage>" message is displayed
    And "admin" Verifies ticket is assigned to team member
    Examples:
      | ProjectName     | TicketNumber | Group            | TeamMember      | SuccessMessage                | ChannelName | channelJson  |
      | Automation_01M3 | INC0820433   | Visibility - UST | Amjathsha Abdul | Tickets assigned successfully | Solarwinds  | QueueChannel |

  #Test case on Hold

  # Scenario Outline:Verify that user able to assign ticket to self
  #  When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
  #   When "admin" clicks on Alerts page
  #   And "Admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
  #   And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
  #   And "admin" clicks on "To me" radio button
  #   And "admin" clicks on assign button
  #   Then "Admin" verifies if "<SuccessMessage>" message is displayed
  #   And "ITOps_Admin" Verifies that ticket is assigned to self

  #   Examples:
  #     | TicketNumber | Group            | SuccessMessage                |
  #     | INC0819624   | Visibility - UST | Tickets assigned successfully |


  #Test case on Hold

  # Scenario Outline:Verify that user able to assign ticket to self when ticket is on hold
  #   When "admin" clicks on Alerts page
  #   And "Admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
  #   And "Admin" verifies on ticket number when ticket status is hold
  #   And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
  #   And "admin" clicks on assign "To me" radio button
  #   And "admin" clicks on assign button
  #   Then "Admin" verifies if "<SuccessMessage>" message is displayed
  #   And "admin" assigned to me button is disabled

  #   Examples:
  #     | TicketNumber | Group            | SuccessMessage                |
  #     | INC0819624   | Visibility - UST | Tickets assigned successfully |


  Scenario Outline:Verify that user able to assign ticket to team member when ticket is on hold

    When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
    And "admin" clicks on Alerts page
    And Admin click on state
    And "admin" clicks on "Hold" button
    Then "Admin" verifies if "<SuccessMessage>" message is displayed
    And "admin" clicks on Alerts page
    And "Admin" gets the ticket number
    And "Admin" clicks on the ticket number
    And "admin" clicks on "Individual" radio button
    And "admin" selects user from the team member drop down as "<Group>", "<TeamMember>"
    And "Admin" clicks on assign button
    Then "Admin" verifies if "<SuccessMessage>" message is displayed
    And "admin" Verifies ticket is assigned to team member

    Examples:
      | TicketNumber | Group            | TeamMember          | SuccessMessage                | ChannelName | channelJson  |
      | INC0820433   | Visibility - UST | Nimsoft Integration | Tickets assigned successfully | Solarwinds  | QueueChannel |


  #Test case on Hold

  # Scenario Outline:Verify subtext when user performed self assigned subtext
  #   When "admin" clicks on Alerts page
  #   And "Admin" enters "TicketNumber" and clicks on enter "<TicketNumber>"
  #   And "admin" clicks on ticket number "<TicketNumber>" from state column of a ticket
  #   And "admin" clicks on assign "To me" radio button
  #   And "admin" clicks on assign button
  #   Then "Admin" verifies if "<SuccessMessage>" message is displayed
  #   And "admin" assigned to me button is disabled
  #   And "Admin" verifies text displayed like "self assign"
  #   Examples:
  #     | TicketNumber | Group            | SuccessMessage                |
  #     | INC0819624   | Visibility - UST | Tickets assigned successfully |


  Scenario Outline:verify subtext when user perfrmed team member assignment
    When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
    When "admin" clicks on Alerts page
    And "Admin" gets the ticket number
    And "Admin" clicks on the ticket number
    And "admin" clicks on "Individual" radio button
    And "admin" selects user from the team member drop down as "<Group>", "<TeamMember>"
    And "admin" clicks on assign button
    Then "Admin" verifies if "<SuccessMessage>" message is displayed
    And "admin" assigned to me button is disabled
    And "Admin" verifies text displayed like "Ticket has been assigned to team member"
    Examples:
      | TicketNumber | Group            | TeamMember      | SuccessMessage                | ChannelName | channelJson  |
      | INC0820433   | Visibility - UST | Amjathsha Abdul | Tickets assigned successfully | Solarwinds  | QueueChannel |