@TicketinThreshold @ITOps_Milestone_2

Feature: Create Ticketing Threshold by admin
Feature Description: Admin creats Ticketing Threshold

        @AddNewTicketingThresholdByITOPsADMIN
        Scenario Outline: ITOps Admin should able to Add New Ticketing Threshold

             When "Admin" navigate to Ticketing Threshold
              And Admin selects Source "<source>"
              And Admin enters Cluster Size "<clustersize>"
              And Admin enters Time Interval "<timeInterval>"
              And Admin clicks on Add Threshold button
             Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Examples:
                  | source    | clustersize | timeInterval | SuccessMessage                |
                  | Forescout | 3           | 60           | Threshold added successfully. |





