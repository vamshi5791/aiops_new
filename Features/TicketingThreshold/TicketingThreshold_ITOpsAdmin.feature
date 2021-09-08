@TicketinThreshold @ITOps_Milestone_2

Feature: Create Ticketing Threshold by admin
     Feature Description: Admin creats Ticketing Threshold

     @AddNewTicketingThresholdByITOPsADMIN
     Scenario Outline: ITOps Admin should able to Add New Ticketing Threshold

          When "admin" navigates to ITOps home page
          And "Admin" enters project name as "Automation_IB_24" in the search field
          And "admin" clicks on project name "Automation_IB_24"
          And "Admin" clicks on Configuration tab
          When "Admin" navigate to Ticketing Threshold
          And Admin selects Source "<source>"
          And Admin enters Cluster Size "<clustersize>"
          And Admin enters Time Interval "<timeInterval>"
          And Admin clicks on Add Threshold button
          Then "Admin" verifies if "<SuccessMessage>" message is displayed
          Examples:
               | source    | clustersize | timeInterval | SuccessMessage                |
               | Forescout | 3           | 60           | Threshold added successfully. |





