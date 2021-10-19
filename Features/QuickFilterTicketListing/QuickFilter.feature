@ITOps_Admin @Regression @QuickFilterTicketListing

Feature: Verifying QuickFilter fields in Ticket Listing Page

 Scenario Outline: Verifying QuickFilter fields in Ticket Listing Page

    When "admin" clicks on Tickets tab in "<ProjectName>"
    And  "admin" clicks on QuickFilter icon
    And  "admin" clicks on Filter by Status Type field in QuickFilter
    And  "admin" clicks on Filter by Priority field in QuickFilter
    Then "admin" verifies the Ticket data  
    
    Examples:
      | ProjectName     | AlertName | ChannelName | channelJson  |
      | Automation_S1   | Node3     | Solarwinds  | QueueChannel |
