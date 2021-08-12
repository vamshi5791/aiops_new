@DisplayConfiguration @ITOps_Milestone_2 @ITOps_Engineer
Feature:  Display Configuration
        
        Scenario: Verify user is not able to change Display Configurations
           
             When "Itops_engineer" navigate to Configuration section
              And "Itops_engineer" clicks on Alert Console Display Configuration from LHS menu Settings
             Then "Itops_engineer" verifies that Primary and secondary sections are present
              And "Itops_engineer" verifies Up and Down arrows are present in both sections
              And "Itops_engineer" verifies left and right arrows are present
           