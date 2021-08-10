@TicketinThreshold @ITOps_Milestone_2

Feature: Creats Ticketing Threshold by admin
Feature Description: Admin creats Ticketing Threshold

        @AddNewTicketingThresholdByITOPsADMIN
        Scenario Outline: ITOps Admin should able to Add New Ticketing Threshold

            Given ITOps "Admin" is in the home page, "<UserName>", "<Password>"
             When "Admin" enters project name in project search feild "<projectName>"
             When "Admin" clicks on Project "<projectName>"
              And "Admin" clicks on configuration
              And "Admin" navigate to Ticketing Threshold
              And Admin selects Source "<source>"
              And Admin enters Cluster Size "<clustersize>"
              And Admin enters Time Interval "<timeInterval>"
              And Admin clicks on Add Threshold button
              And click on logout button
        
        Examples:
                  | UserName    | Password | projectName   | source    | clustersize | timeInterval |
                  | Itops_admin | qa123    | Automation_02 | Forescout | 3           | 60           |


        @AddNewTicketingThresholdByITOPsEngineer
        Scenario Outline: ITOps Engineer should not be able to Add New Ticketing threshold Policy

            Given ITOps "ITOps Engineer" is in the home page, "<UserName>", "<Password>"
             When "ITOps Engineer" enters project name in project search feild "<projectName>"
             When "ITOps Engineer" clicks on Project "<projectName>"
              And "ITOps Engineer" clicks on configuration
              And "ITOps Engineer" navigate to Ticketing Threshold
             Then Verify Add New Threshold button for ITOps Engineer

        Examples:
                  | UserName       | Password | projectName   |
                  | Itops_Engineer | qa123    | Automation_02 |

    
