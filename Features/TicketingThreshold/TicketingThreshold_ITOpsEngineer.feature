@TicketinThreshold @ITOps_Milestone_2 @ITOps_Engineer

Feature: Creats Ticketing Threshold by Engineer
Feature Description: Engineer creats Ticketing Threshold

        @AddNewTicketingThresholdByITOPsEngineer
        Scenario Outline: ITOps Engineer should not be able to Add New Ticketing threshold Policy
             When "Itops_Engineer" navigate to Configuration section
              And "ITOps Engineer" navigate to Ticketing Threshold
             Then Verify Add New Threshold button for ITOps Engineer
              And "admin" clicks on logout button
        Examples:
                  | UserName       | Password |
                  | Itops_Engineer | qa123    |