@DisplayConfiguration @ITOps_Milestone_2 @ITOps_Admin
Feature:  Display Configuration
 
Feature Description : Verifying Display Configuration functionalities
        @Display
        Scenario Outline: Verify whether itops_admin is able to view display configuration settings
         
              And "admin" clicks on Alert Console Display Configuration from LHS menu Settings
             Then "admin" verifies that Primary and secondary sections are present
              And "admin" verifies Up and Down arrows are present in both sections
              And "admin" verifies left and right arrows are present

        Examples:
                  | UserName    | Password | ProjectName      |
                  | Itops_admin | qa123    | Automation_IB_16 |
        Scenario: Default buttons in display configuration page
             Then "admin" verifies Save configuration and cancel buttons are present
              And "admin" verifies Save configuration button disabled by default
     
        Scenario Outline: Verify the default fields in Primary section
             Then "admin" verifies all the primary section fields are present
             When "admin" clicks on "<FieldName>" from primary section
              And "admin" clicks on Right Arrow key to move the field to secondary section
              And "admin" verifies "<FieldName>" is not moved to secondary section
        Examples:
                  | FieldName |
                  | alertID   |
        Scenario Outline:Verify user is able to change display name of Primary fields
             When "admin" clicks on a field name and edits the name as "<DisplayName>" in primary section
              And "admin" clicks on Save configuration button
             Then "admin" verifies if "<SuccessMessage>" message is displayed
        Examples:
                  | DisplayName | SuccessMessage                            |
                  | Test        | Alert Console Settings saved Successfully |

        Scenario Outline:Verify user is able to change display name of Secondary  fields
             When "admin" clicks on a field name and edits the name as "<DisplayName>" in secondary section
              And "admin" clicks on Save configuration button
             Then "admin" verifies if "<SuccessMessage>" message is displayed

        Examples:
                  | DisplayName | SuccessMessage                            |
                  | Value       | Alert Console Settings saved Successfully |
   
        Scenario Outline: ReOrdering of Primary section fields
             When "admin" selects a "<FieldName>" and clicks on Up arrow to reOrder
              And "admin" clicks on Save configuration button
             Then "admin" verifies if "<SuccessMessage>" message is displayed
              And "admin" verifies "<DisplayOrderUP>" of the "<FieldName>" is as per the new order
             When "admin" selects a "<FieldName>" and clicks on down arrow to reOrder
              And "admin" clicks on Save configuration button
             Then "admin" verifies if "<SuccessMessage>" message is displayed
              And "admin" verifies "<DisplayOrderDown>" of the "<FieldName>" is as per the new order
        Examples:
                  | FieldName | DisplayOrderUP | DisplayOrderDown | SuccessMessage                            |
                  | nodeName  | 5              | 6                | Alert Console Settings saved Successfully |
       
        Scenario Outline: Verify user is able to interchange primary fields and secondary fields
             When "admin" selects "<FieldName>" in the primary section and clicks on Left arrow button
              And "admin" clicks on Save configuration button
             Then "admin" verifies if "<SuccessMessage>" message is displayed
             When "admin" navigates to Alerts section to verify the console
             Then "admin" verifies the "<DisplayName>" present in secondary section
              And "admin" navigate to Configuration section
              And "admin" clicks on Alert Console Display Configuration from LHS menu Settings

        Examples:
                  | FieldName    | DisplayName | SuccessMessage                            |
                  | alertMessage | Test        | Alert Console Settings saved Successfully |
     
        Scenario Outline: Active and Inactive fields in secondary section
             When "admin" selects "<FieldName>" and clicks on toggle bar to inactive the field in Secondary section
              And "admin" clicks on Save configuration button
             Then "admin" verifies if "<SuccessMessage>" message is displayed
        Examples:
                  | FieldName    | SuccessMessage                            |
                  | alertMessage | Alert Console Settings saved Successfully |
      
        Scenario Outline: Maximum fields in Primary section
             When "admin" selects "<FiledName_1>", "<FiledName_2>", "<FiledName_3>", "<FiledName_4>", "<FiledName_5>" and "<FiledName_6>" from Secondary to Primary section
             Then if number of fields are more than 16, "<Toaster>" message should be displayed
              And "IE" clicks on logout button
        Examples:
                  | FiledName_1   | FiledName_2 | FiledName_3 | FiledName_4 | FiledName_5 | FiledName_6  | Toaster                                                                 |
                  | resourceGroup | connectedTo | region      | site        | portNumber  | resourceType | The maximum number of columns that can be added as primary column is 16 |
     
       