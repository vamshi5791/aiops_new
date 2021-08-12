@AdvancedFilter  @ITOps_Admin @Regression
Feature:  Advanced Filter

Feature Description: Admin navigates to alert page,
     verifies all the sections are present
     
        Scenario Outline: Verify the advanced filter having 3 sections
        
              And "admin" clicks on Alerts page
             When "admin" clicks on advanced filter icon
             Then "admin" verifies heading as "<AdvancedFilters>"
              And "admin" verifies Source and Resource section heading as "<SourceAndResource>"
              And "admin" verifies State and Status,Date and Time sections heading as "<StateAndStatus>" and "<DataAndTime>"
        Examples:
                  | UserName    | Password | ProjectName      | AdvancedFilters  | SourceAndResource    | StateAndStatus   | DataAndTime   |
                  | Itops_admin | qa123    | Automation_IB_16 | Advanced Filters | Source and Resources | State and Status | Date and Time |

        Scenario Outline: Verifying ITOps admin is able to apply the saved filter again

              And "admin" enters source as "<Source>" and alert state as "<Alert_State>"
              And "admin" clicks on apply button
             Then "admin" verifies user redirects to alert console
              And "admin" verifies the Data shown is solarwinds and ticketed alerts only
        Examples:
                  | Source     | Alert_State |
                  | Solarwinds | Ticketed    |

        Scenario Outline: Verify date time filter
             When "admin" clicks on advanced filter icon
              And "admin" enters in last fields as "<InLast>" and select Duration type "<DurationType>"
              And "admin" clicks on apply button
             Then "admin" verifies user redirects to alert console
              And "admin" verifies last "10" Days alerts are displayed in the console
              And "admin" verifies Remove all button is present
        Examples:
                  | InLast | DurationType |
                  | 10     | Days         |
       
        
 #Ajay        
        Scenario Outline: Verify that Itops_admin is able to Verify severity drop down severity conditions which are selected in advance filter

              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon
             When "ITOps_Admin" selects alert severity dropdown
              And "ITOps_Admin" selects Warning
              And "ITOps_Admin" clicks on apply button
             Then verifies severity condition in severity dropdown "<severityCondition>"
              And "ITOps_Admin" clicks on remove all button

        Examples:
                  | UserName    | Password | ProjectName   | severityCondition |
                  | Itops_admin | qa123    | Automation_02 | Warning           |

        Scenario Outline: Verify that Itops_admin is able to add some more severity conditions
              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon

             When "ITOps_Admin" selects alert severity dropdown
              And "ITOps_Admin" selects Warning
              And "ITOps_Admin" selects Ok
              And "ITOps_Admin" clicks on apply button
             Then "ITOps_Admin" clicks on filter by severity dropdown
             Then "ITOps_Admin" selects Warning
              And "ITOps_Admin" clicks on remove all button

        Examples:
                  | severityCondition |
                  | Warning           |

        Scenario Outline: Verify that Itops_admin is able to remove severity conditions
              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon

             When "ITOps_Admin" selects alert severity dropdown
              And "ITOps_Admin" selects Warning
              And "ITOps_Admin" selects Ok
              And "ITOps_Admin" clicks on apply button
             Then "ITOps_Admin" deletes the warning severity condition from alert console
             Then "ITOps_Admin" deletes the ok severity condition from alert console
        Examples:
                  | severityCondition |
                  | Warning           |

        Scenario Outline: Verify that Itops_admin is able to add some more severity conditions on top of saved filters.
              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon

              And "ITOps_Admin" selects saved filter "<SavedFilter>"
              And "ITOps_Admin" clicks on apply button
             Then "ITOps_Admin" clicks on filter by severity dropdown
              And "ITOps_Admin" selects Warning
              And "ITOps_Admin" clicks on remove all button

        Examples:
                  | severityCondition | SavedFilter |
                  | Warning           | IB          |

        Scenario Outline: Verify that Itops_admin is able to remove severity conditions from saved filters
              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon
              And "ITOps_Admin" selects saved filter "<SavedFilter>"
              And "ITOps_Admin" clicks on apply button
              And "ITOps_Admin" deletes the solarwinds condition from alert console
             Then "ITOps_Admin" verifies solarwinds filter is not visible
              And "ITOps_Admin" clicks on remove all button
        Examples:
                  | SavedFilter |
                  | IB          |
        Scenario Outline: Verify user is able to perform search operations on the filter conditions which we selected
              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon

             When "ITOps_Admin" selects alert severity dropdown
              And "ITOps_Admin" selects Warning
              And "ITOps_Admin" selects Information
              And "ITOps_Admin" clicks on apply button
              And "ITOps_Admin" searches alert condition "<alertName>"
              And "ITOps_Admin" clicks on remove all button

        Examples:
                  | SavedFilter | alertName  |
                  | IB          | Solarwinds |

        Scenario Outline: Verify user is able to perform search operations on entire alert console after removing filters
              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon

             When "ITOps_Admin" selects alert severity dropdown
              And "ITOps_Admin" selects Warning
              And "ITOps_Admin" selects Information
              And "ITOps_Admin" clicks on apply button
              And "ITOps_Admin" clicks on remove all button
              And "ITOps_Admin" searches alert condition "<alertName>"

        Examples:
                  | SavedFilter | alertName  |
                  | IB          | Solarwinds |

        Scenario Outline: Verify when user applied Saved filter and some more severity conditions and navigated to other page and came back, only saved filter exist
              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon
              And "ITOps_Admin" selects saved filter "<SavedFilter>"
              And "ITOps_Admin" clicks on Mark as default
             Then "ITOps_Admin" clicks on filter by severity dropdown
              And "ITOps_Admin" selects Warning
              And "ITOps_Admin" opens infrastructure page
              And "ITOps_Admin" clicks on Alerts page
             Then "ITOps_Admin" Verifies Warning filter is not applied
             
 
        Examples:
                  | SelectFilter | SavedFilter |
                  | Warning      | IB          |



#Gopi
        Scenario Outline:Verify that user is able to view edit and delete option in Advanced Filter section
             When "admin" clicks on advanced filter icon
             When "admin" clicks on Edit icon for "<SavedFilter>" filter
             Then "admin" verifies that edit and delete options are present
              And "admin" edits "<Source>" filter criteria
              And "admin" click on Update and Apply
              And "admin" clicks on Yes on confirmation pop up
             Then "admin" verifies "<ConfirmationToaster>" shown
              And "admin" verifies data in UI
             When "admin" clicks on advanced filter icon
             When "admin" clicks on Delete icon for "<SavedFilter>" filter
              And "admin" clicks on Yes on confirmation pop up
             Then "admin" verifies "<Toaster>" shown
             Then "admin" verifies deleted "<SavedFilter>" filter is removed from the filter dropdown in console
        Examples:
                  | Source | Alert_State | SavedFilter | Description | ConfirmationToaster          | DifferentUserName | Toaster                      |
                  | ITSM   | Ticketed    | IB          | Value 2     | Filter updated successfully. | Itops_engineer    | Filter deleted successfully. |
        
        Scenario Outline:Verify creating default filter for Alert Console
           
              And "admin" clicks on Alerts page
             When "admin" clicks on advanced filter icon
              And "admin" enters source as "<Source>" and alert state as "<Alert_State>"
              And "admin" clicks on Save filter button
              And "admin" enters filter name as "<FilterName>" and Description as "<Description>"
              And "admin" clicks on Make as default checkbox
              And "admin" clicks on save and apply button
             Then "admin" verifies if "<SuccessMessage>" message is displayed
              And verify alert console should show results based on default filter applied
              And "Installation Engineer" clicks on logout button
            Given ITOps "admin" with username and password as "<DifferentUserName>", "<Password>" is in the home page
             When "Admin" enters project name as "<ProjectName>" in the search field
              And "admin" clicks on project name "<ProjectName>"
              And "admin" clicks on Alerts page
             Then verify alert console should show results based on default filter applied
              And "Installation Engineer" clicks on logout button
            Given ITOps "admin" with username and password as "<UserName>", "<Password>" is in the home page
             When "Admin" enters project name as "<ProjectName>" in the search field
              And "admin" clicks on project name "<ProjectName>"
              And "admin" clicks on Alerts page
             Then verify alert console should not show results based on previous default filter.
        Examples:
                  | UserName    | Password | ProjectName      | Source     | Alert_State | FilterName | Description | SuccessMessage             | DifferentUserName |
                  | Itops_admin | qa123    | Automation_IB_16 | Solarwinds | Ticketed    | IB         | Value 2     | Filter saved successfully. | Itops_engineer    |
