@TicketListingPage-DefaultView @ITOps_Milestone_4 @Regression @ITOps_Admin
Feature: Ticket Listing Page- DefaultView and filters

  Feature Description : Ticket Listing Page DefaultView and filters

  Scenario Outline: Verify user accessing Ticket Listing page should have Assigned To Assigned group dropdown values as expected
    When "ITOps_Admin" navigates to ITOps home page
    And "Admin" enters project name in project search field and click on enter
    And "Admin" clicks on project name
    And "Admin" clicks on Tickets page
    And "Admin" clicks on  Quick Filter icon
    And "Admin" clicks on Assigned To dropdown
    Then Verify Assigned To dropdown should have values as None, Me, Others
    And "Admin" clicks on Assigned Group dropdown
    Then Verify Assigned Group dropdown should have values None, My Groups
    And Verify "<MyGroupName>" is shown as disabled below My Groups
    And GroupNames shown below should be Groups of tickets in ticket store for "<ProjectId>"

    Examples:
      | ProjectName    | MyGroupName    | ProjectId   |
      | MtestAug09Res  | ITOpsTesting   | 1206        |

Scenario Outline: Verify default view in ticket listing page where loggedin user belong to 1 group and tickets assigned to that group
    When "Admin" clicks on Tickets page
    And "Admin" clicks on  Quick Filter icon
    Then Quick filter to have My Groups selected in Assigned Group dropdown
    Then Verify filter Chips shown in UI should be Assigned group : "<MyGroupName>"
    And Verify Tickets listing displays only tickets assigned to "<MyGroupName>" for "<ProjectId>" sorted based on Updated Date and Time
    
    
    Examples:
      | ProjectName    | MyGroupName    | ProjectId  |
      | MtestAug09Res  | ITOpsTesting   | 1206       |

Scenario Outline: Verify removing default view filter in ticket listing page for loggedin user belong to 1 group and tickets assigned to that group
    When "Admin" clicks on Tickets page
    And Removes default filter chip shown "<MyGroupName>"
    Then Verify No filter chip available in UI
    And "Admin" clicks on  Quick Filter icon
    Then Quick filter to have My Groups unselected in Assigned Group dropdown
    And Verify Tickets listing displays all Tickets from ticket store sorted based on Updated Date and Time for "<ProjectId>"
    
    
    Examples:
      | ProjectName    | MyGroupName    | ProjectId  |
      | MtestAug09Res  | ITOpsTesting   | 1206       |

    