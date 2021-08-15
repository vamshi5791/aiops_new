@DisplayConfiguration @ITOps_Engineer @Regression

Feature:  Display Configuration
        
        Scenario: Verify user is not able to change Display Configurations
           
             When "Itops_Engineer" navigate to Configuration section
              And "Itops_Engineer" clicks on Alert Console Display Configuration from LHS menu Settings
             Then "Itops_Egineer" verifies that Primary and secondary sections are present
              And "Itops_Engineer" verifies Up and Down arrows are present in both sections
              And "Itops_Engineer" verifies left and right arrows are present
           