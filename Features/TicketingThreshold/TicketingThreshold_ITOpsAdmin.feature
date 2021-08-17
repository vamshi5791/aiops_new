@TicketinThreshold @ITOps_Milestone_2

Feature: Creats Ticketing Threshold by admin
Feature Description: Admin creats Ticketing Threshold

        @AddNewTicketingThresholdByITOPsADMIN
        Scenario Outline: ITOps Admin should able to Add New Ticketing Threshold

              And "Admin" navigate to Ticketing Threshold
              And Admin enter clicks on Add New Threshold button
              And Admin selects Source "<source>"
              And Admin enters Cluster Size "<clustersize>"
              And Admin enters Time Interval "<timeInterval>"
              And Admin clicks on Add Threshold button
            
        Examples:
                  | source    | clustersize | timeInterval |
                  | Forescout | 3           | 60           |





