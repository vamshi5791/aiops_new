@TicketinThreshold  @ITOps_Engineer @Regression


Feature: Creats Ticketing Threshold by Engineer
Feature Description: Engineer creats Ticketing Threshold

        @AddNewTicketingThresholdByITOPsEngineer
        Scenario Outline: ITOps Engineer should not be able to Add New Ticketing threshold Policy
              And "ITOps Engineer" clicks on configuration
              And "ITOps Engineer" navigate to Ticketing Threshold
             Then Verify Add New Threshold button for ITOps Engineer
        Examples:
                  | UserName       | Password | projectName   |
                  | Itops_Engineer | qa123    | Automation_02 |