@TicketinThreshold  @ITOps_Admin @Regression


Feature: Creats Ticketing Threshold by admin
Feature Description: Admin creats Ticketing Threshold

        @AddNewTicketingThresholdByITOPsADMIN
        Scenario Outline: ITOps Admin should able to Add New Ticketing Threshold
              And "Admin" navigate to Ticketing Threshold
              And Admin selects Source "<source>"
              And Admin enters Cluster Size "<clustersize>"
              And Admin enters Time Interval "<timeInterval>"
              And Admin clicks on Add Threshold button
              And "Admin" clicks on logout button
        Examples:
                  | projectName   | source    | clustersize | timeInterval |
                  | Automation_02 | Forescout | 3           | 60           |

