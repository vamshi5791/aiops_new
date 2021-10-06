@TicketinThreshold @ITOps_Milestone_2

Feature: Create Ticketing Threshold by admin
     Feature Description: Admin creats Ticketing Threshold

     @AddNewTicketingThresholdByITOPsADMIN
     Scenario Outline: ITOps Admin should able to Add New Ticketing Threshold


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


     Scenario Outline: ITOps Admin deleting newly created Ticketing Threshold

          When "Admin" clicks on Configuration tab
          And "Admin" navigate to Ticketing Threshold
          And Admin clicks on delete icon
          When "Admin" clicks on yes button

          Examples:
               | SuccessMessage |
               | Threshold deleted successfully. |