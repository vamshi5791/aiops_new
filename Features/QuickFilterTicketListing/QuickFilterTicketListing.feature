 @ITOps_Admin @Regression @QuickFilterTicketListing

Feature: Verifying QuickFilter in Ticket Listing Page
 
 Scenario Outline: Verifying 'Assigned  To - Me' and 'Assigned To None' QuickFilter in Ticket Listing Page
    
    When "ITOps_Admin" navigates to ITOps home page
    And "Admin" enters project name in project search field and click on enter
    And "Admin" clicks on project name
    When "admin" clicks on Ticket Listing page
    And  "admin" clicks on QuickFilter
    And  "admin" clicks on Assign to me QuickFilter
    Then "admin" verifies the Ticket  data and clicks on RemoveAll chip 
    Then "admin"  clicks on QuickFilter
    And  "admin" clicks on Assign to none QuickFilter
    And  "admin" verifies page data

    Examples:
      | ProjectName     | AlertName | ChannelName | channelJson  |
      | Automation_S1   | Node3     | Solarwinds  | QueueChannel |

  Scenario Outline: Verifying QuickFilter fields in Ticket Listing Page

    And  "admin" clicks on QuickFilter icon
    And  "Admin" clicks on Assigned Group in QuickFilter
    And  "admin" clicks on Filter by Priority field in QuickFilter
    And  "admin" clicks on Filter by Status Type field in QuickFilter
    And  "admin" Removes Assigned Group in QuickFilter
    And  "admin" reapply Filter
    Then "admin" removes chip And verifies data 
    
    Examples:
      | ProjectName     | AlertName | ChannelName | channelJson  |
      | Automation_S1   | Node3     | Solarwinds  | QueueChannel |
