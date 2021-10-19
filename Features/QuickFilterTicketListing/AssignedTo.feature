 @ITOps_Admin @Regression @QuickFilterTicketListing

Feature: Verifying 'Assigned To Me' and 'Assigned To None' QuickFilter in Ticket Listing Page
 
  Scenario Outline: Verifying 'Assigned  To - Me' and 'Assigned To None' QuickFilter in Ticket Listing Page

    When "admin" clicks on Ticket Listing page in "<ProjectName>"
    And  "admin" clicks on QuickFilter
    And  "admin" clicks on Assign to me QuickFilter
    Then "admin" verifies the Ticket  data and clicks on RemoveAll chip 
    Then "admin"  clicks on QuickFilter
    And  "admin" clicks on Assign to none QuickFilter
    And  "admin" verifies page data

    Examples:
      | ProjectName     | AlertName | ChannelName | channelJson  |
      | Automation_S1   | Node3     | Solarwinds  | QueueChannel |
