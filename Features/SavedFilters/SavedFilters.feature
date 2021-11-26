@SavedFilter @ITOps_Milestone_2 @ITOps_Admin
Feature: Saved Filters

     Feature Description : User navigates to alert console page and creates the filters in advanced section and
     verifies all the results should be based on applied filters


     @SavedFilterSaveAndApplyTheFilter
     Scenario Outline:  Verifying the ITOps admin is able to save and apply the filter

          And "admin" clicks on Alerts page
          And "admin" clicks on advanced filter icon
          And "admin" enters source as "<Source>" and alert state as "<Alert_State>"
          And "admin" clicks on Save filter button
          And "admin" enters filter name as "<FilterName>" and Description as "<Description>"
          And "admin" clicks on save and apply button
          Then "admin" verifies if "<Toaster>" message is displayed

          And "admin" clicks on advanced filter icon
          And "admin" enters source as "<Source>" and alert state as "<Alert_State>"
          And "admin" clicks on Save filter button
          And "admin" enters filter name as "<FilterName>" and Description as "<Description>"
          And "admin" clicks on save and apply button
          
          And "admin" clicks on advanced filter icon
          And "admin" enters source as "<Source>" and alert state as "<Alert_State>"
          And "admin" clicks on Save filter button
          And "admin" enters filter name as "<FilterName>" and Description as "<Description>"
          And "admin" clicks on save and apply button


          Examples:
               | ProjectName      | Source     | Alert_State | FilterName | Description | Toaster                    |
               | Automation_IB_24 | Solarwinds | Ticketed    | IB         | Value 2     | Filter saved successfully. |

     @SavedFilterApplyTheSavedFilterAgain
     Scenario Outline: Verifying ITOps admin is able to apply the saved filter again

          When "admin" clicks on Alerts page
          And "admin" clicks on advanced filter icon
          And "admin" Clicks on Saved Filter from advanced filter section "<SavedFilter>"
          Then verify Apply and cancel buttons should be present
          And Verify the filter conditions are retrieved and click on Apply
          And verify Data shown should be based on the filter conditions "<Source>"

          Examples:
               | SavedFilter | Source     |
               | IB          | Solarwinds |
     @SavedFilterChipsOnUI
     Scenario Outline: Alert console UI should show all filter conditions as chips

          When "admin" clicks on Alerts page
          And "admin" clicks on saved filters "<SavedFilter>"
          And "admin" verifies Remove all button is present
          Then Chips should have a close button

          Examples:
               | SavedFilter |
               | IB          |
     @SavedFilterAbleToRemoveAllFilterConditions
     Scenario Outline: Verify user is able to remove all filter conditions via alert console once applied

          When "admin" clicks on Alerts page
          And "admin" clicks on saved filters "<SavedFilter>"
          And "admin" clicks on Remove all link next to the chips displayed from Alert console
          Then verify data should be reset to default set without any filter applied "<TestSource>"
          And verify All filter condition chips should be removed from UI

          Examples:
               | SavedFilter | TestSource |
               | IB          | Solarwinds |
     @SavedFilterAbleToRemoveAnyFilterConditions
     Scenario Outline: Verify user is able to remove any filter conditions via alert console once applied
          When "admin" clicks on Alerts page
          And "admin" clicks on saved filters "<SavedFilter>"
          And "admin" clicks on close button from any of the chip displayed
          Then verify closed chips should not be displayed in UI
          And verify data should be reset to default set without any filter applied "<TestSource>"

          Examples:
               | SavedFilter | TestSource |
               | IB          | Solarwinds |
     @SavedFilterAvailability
     Scenario Outline: Saved filters availability

          When "admin" clicks on Alerts page
          And "admin" clicks on advanced filter icon
          Then verify all saved filters are displayed on left side "<FIlterName>"
          And verify filter name, description and Created time should be displayed "<FIlterName>", "<Description>", "<CreatedTime>"
          And verify Expand button should be present for each saved filter
          Examples:
               | FIlterName | Description | CreatedTime          |
               | IB         | Value 2     | 08/5/2021 2:42:47 PM |