@AdvancedFilter @ITOps_Milestone_2
Feature:  Advanced Filter

Feature Description: Admin navigates to alert page,
     verifies all the sections are present
     
        Scenario Outline: Verify the advanced filter having 3 sections
            Given ITOps "admin" with username and password as "<UserName>", "<Password>" is in the home page
             When "Admin" enters project name as "<ProjectName>" in the search field
              And "admin" clicks on project name "<ProjectName>"
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
              And "admin" clicks on logout button
        Examples:
                  | Source | Alert_State | SavedFilter | Description | ConfirmationToaster          | DifferentUserName | Toaster                      |
                  | ITSM   | Ticketed    | Automation  | Value 2     | Filter updated successfully. | Itops_engineer    | Filter deleted successfully. |
