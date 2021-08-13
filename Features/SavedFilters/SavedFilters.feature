@SavedFilter  @ITOps_Admin @Regression

Feature: Saved Filters
  
Feature Description : User navigates to Alert Console page and creates the filters in Advanced Section and
                      verifies all the results should be based on applied filters
       
        @SavedFilterSaveAndApplyTheFilter
        Scenario Outline:  Verifying the ITOps Admin is able to save and apply the filter
             When "Admin" navigates to ust home page
             And "Admin" enters project name as "<ProjectName>" in the search field
              And "Admin" clicks on project name "<ProjectName>"
              And "Admin" clicks on Alerts page
             And "Admin" clicks on advanced filter icon
              And "Admin" enters source as "<Source>" and alert state as "<Alert_State>"
              And "Admin" clicks on Save filter button
              And "Admin" enters filter name as "<FilterName>" and Description as "<Description>"
              And "Admin" clicks on save and apply button
             Then "Admin" verifies if "<Toaster>" message is displayed    
        Examples:
                  | ProjectName      | Source     | Alert_State | FilterName | Description | Toaster                    |
                  | Automation_IB_16 | Solarwinds | Ticketed    | IB         | Value 2     | Filter saved successfully. |
        
        @SavedFilterApplyTheSavedFilterAgain
        Scenario Outline: Verifying ITOps admin is able to apply the saved filter again
              And "admin" clicks on Alerts page
             When "admin" clicks on advanced filter icon
              And "admin" Clicks on Saved Filter from advanced filter section "<SavedFilter>"
             Then verify Apply and cancel buttons should be present
              And Verify the filter conditions are retrieved and click on Apply
              And verify Data shown should be based on the filter conditions "<Source>"     
        Examples:
                  | SavedFilter | Source     |
                  | IB          | Solarwinds |

        @SavedFilterChipsOnUI
        Scenario Outline: Alert Console UI should show all filter conditions as chips
              And "admin" clicks on Alerts page
              And "admin" clicks on saved filters "<SavedFilter>"
              And "admin" verifies Remove all button is present
              And Chips should have a close button
        Examples:
                  | SavedFilter |
                  | IB          |

        @SavedFilterAbleToRemoveAllFilterConditions
        Scenario Outline: Verify user is able to remove all filter conditions via alert console once applied
              And "admin" clicks on Alerts page
              And "admin" clicks on saved filters "<SavedFilter>"
              And "admin" clicks on Remove all link next to the chips displayed from Alert console
             Then verify data should be reset to default set without any filter applied "<TestSource>"
             Then verify All filter condition chips should be removed from UI
              And Saved filter drop down should not show the filter name
        Examples:
                  | SavedFilter | TestSource |
                  | IB          | Solarwinds |

        @SavedFilterAbleToRemoveAnyFilterConditions
        Scenario Outline: Verify user is able to remove any filter conditions via Alert Console once applied
              And "admin" clicks on Alerts page
              And "admin" clicks on saved filters "<SavedFilter>"
              And "admin" clicks on close button from any of the chip displayed
             Then verify closed chips should not be displayed in UI
              And verify data should be reset to default set without any filter applied "<TestSource>"    
        Examples:
                  | SavedFilter | TestSource |
                  | IB          | Solarwinds |
                  
        @SavedFilterAvailability
        Scenario Outline: Saved filters availability
              And "admin" clicks on Alerts page
             When "admin" clicks on advanced filter icon
             Then verify all saved filters are displayed on left side "<FIlterName>"
              And verify filter name, description and Created time should be displayed "<FIlterName>", "<Description>", "<CreatedTime>"
              And verify Expand button should be present for each saved filter
        Examples:
                  | FIlterName | Description | CreatedTime          |
                  | IB         | Value 2     | 08/5/2021 2:42:47 PM |