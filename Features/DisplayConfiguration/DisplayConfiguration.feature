@DisplayConfiguration @ITOps_Admin @Regression

Feature:  Display Configuration

     Feature Description : Verifying Display Configuration functionalities
     @Display
     Scenario Outline: Verify whether itops_admin is able to view Display Configuration settings

          When "Admin" clicks on Alert Console Display Configuration from LHS menu Settings
          Then "Admin" verifies that Primary and secondary sections are present
          And "Admin" verifies Up and Down arrows are present in both sections
          And "Admin" verifies left and right arrows are present

          Examples:
               | UserName    | Password | ProjectName      |
               | Itops_admin | qa123    | Automation_IB_16 |
     Scenario: Default buttons in Display Configuration page
          Then "Admin" verifies Save configuration and cancel buttons are present
          And "Admin" verifies Save configuration button disabled by default

     Scenario Outline: Verify the default fields in Primary section
          Then "Admin" verifies all the primary section fields are present
          When "Admin" clicks on "<FieldName>" from primary section
          And "Admin" clicks on Right Arrow key to move the field to secondary section
          And "Admin" verifies "<FieldName>" is not moved to secondary section
          Examples:
               | FieldName |
               | alertID   |
     Scenario Outline:Verify user is able to change display name of Primary fields
          When "Admin" clicks on a field name and edits the name as "<DisplayName>" in primary section
          And "Admin" clicks on Save configuration button
          Then "Admin" verifies if "<SuccessMessage>" message is displayed
          When "Admin" navigates to Alerts section to verify the console
          And "Admin" navigate to Configuration section
          And "Admin" clicks on Alert Console Display Configuration from LHS menu Settings
          Examples:
               | DisplayName | SuccessMessage                            |
               | Test        | Alert Console Settings saved Successfully |

     Scenario Outline:Verify user is able to change display name of Secondary  fields
          When "Admin" clicks on a field name and edits the name as "<DisplayName>" in secondary section
          And "Admin" clicks on Save configuration button
          Then "Admin" verifies if "<SuccessMessage>" message is displayed
          When "Admin" navigates to Alerts section to verify the console
          Then "Admin" verifies the "<DisplayName>" present in secondary section
          And "Admin" navigate to Configuration section
          And "Admin" clicks on Alert Console Display Configuration from LHS menu Settings
          Examples:
               | DisplayName | SuccessMessage                            |
               | Test       | Alert Console Settings saved Successfully |

     Scenario Outline: ReOrdering of Primary section fields
          When "Admin" selects a "<FieldName>" and clicks on Up arrow to reOrder
          And "Admin" clicks on Save configuration button
          Then "Admin" verifies if "<SuccessMessage>" message is displayed
          And "Admin" verifies "<DisplayOrderUP>" of the "<FieldName>" is as per the new order
          When "Admin" selects a "<FieldName>" and clicks on down arrow to reOrder
          And "Admin" clicks on Save configuration button
          Then "Admin" verifies if "<SuccessMessage>" message is displayed
          And "Admin" verifies "<DisplayOrderDown>" of the "<FieldName>" is as per the new order
          Examples:
               | FieldName | DisplayOrderUP | DisplayOrderDown | SuccessMessage                            |
               | nodeName  | 6              | 7                | Alert Console Settings saved Successfully |

     Scenario Outline: Verify user is able to interchange primary fields and secondary fields
          When "Itops_Engineer" navigate to Configuration section
          When "Admin" clicks on Alert Console Display Configuration from LHS menu Settings
          When "Admin" selects "<FieldName>" in the primary section and clicks on Left arrow button
          And "Admin" clicks on Save configuration button
          Then "Admin" verifies if "<SuccessMessage>" message is displayed
          When "Admin" navigates to Alerts section to verify the console
          Then "Admin" verifies the "<DisplayName>" present in secondary section
          And "Admin" navigate to Configuration section
          And "Admin" clicks on Alert Console Display Configuration from LHS menu Settings

          Examples:
               | FieldName    | DisplayName | SuccessMessage                            |
               | alertMessage | Test        | Alert Console Settings saved Successfully |

     Scenario Outline: Active and Inactive fields in secondary section
          When "Itops_Engineer" navigate to Configuration section
          When "Admin" clicks on Alert Console Display Configuration from LHS menu Settings
          When "Admin" selects "<FieldName>" and clicks on toggle bar to inactive the field in Secondary section
          And "Admin" clicks on Save configuration button
          Then "Admin" verifies if "<SuccessMessage>" message is displayed
          Examples:
               | FieldName    | SuccessMessage                            |
               | objectStatus | Alert Console Settings saved Successfully |

     Scenario Outline: Maximum fields in Primary section
          When "Itops_Engineer" navigate to Configuration section
          When "Admin" clicks on Alert Console Display Configuration from LHS menu Settings
          When "Admin" selects "<FiledName_1>", "<FiledName_2>", "<FiledName_3>", "<FiledName_4>", "<FiledName_5>" and "<FiledName_6>" from Secondary to Primary section
          Then if number of fields are more than 16, "<Toaster>" message should be displayed

          Examples:
               | FiledName_1   | FiledName_2 | FiledName_3 | FiledName_4 | FiledName_5 | FiledName_6  | Toaster                                                                 |
               | resourceGroup | connectedTo | region      | site        | portNumber  | resourceType | The maximum number of columns that can be added as primary column is 17 |

