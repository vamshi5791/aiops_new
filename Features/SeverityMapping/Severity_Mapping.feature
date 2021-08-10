@SeverityMapping_ITOpsAdmin @ITOps_Milestone_2

Feature:Severity Mapping

Feature Description :Severity Mapping

        Scenario Outline: Verifying Admin is able to Configure New Severity Mapping


            Given ITOps "Admin" with username and password as "<UserName>", "<Password>" is in the home page
             When "Admin" enters project name as "<ProjectName>" in the search field
              And "Admin" clicks on project name "<ProjectName>"
              And "Admin" clicks on Configuration tab
              And "Admin" clicks on Severity Mapping
              And "Admin" clicks on Add new source button
              And "Admin" clicks on source dropdown and select a source
              And "Admin" enters source Severity as "<SourceSeverity1>"
              And "Admin" clicks on SO Severity dropdown and selects Information
              And "Admin" clicks on + button
              And "Admin" enters next source Severity as "<SourceSeverity2>"
              And "Admin" clicks on next SO Severity dropdown and selects Information
              And "Admin" clicks on Add Source button
             Then Success message for Severity Mapping must be shown in popup "<popup>"


        Examples:
                  | UserName    | Password | ProjectName   | SourceSeverity1 | SourceSeverity2 | popup                                              |
                  | Itops_admin | qa123    | Automation_02 | 2323            | 324             | Severity mapping details are successfully Inserted |


        Scenario Outline: Verifying Admin is able to Configure New Severity Mapping

             Then "Admin" verifies Source Severity text feild as "<SourceSeverity>"
             Then "Admin" verifies SO Severity as "<SOSeverity>"
             Then "Admin" verifies Updated time as "<time>"
             Then "Admin" verifies +Add Severity as "<AddSeverity>"
             Then "Admin" verifies Delete icon
             Then "Admin" verifies Add New Source as "<NewSource>"
             Then "Admin" verifies Edit icon
             Then "Admin" verifies Delete icon of specefic Severity
             Then "Admin" verifies the Time as "<Time>"



        Examples:
                  | Itops_UserName | Itops_Password | ProjectName   | SourceSeverity1 | SourceSeverity2 | SourceSeverity  | SOSeverity  | time         | AddSeverity  | NewSource      | Time        |
                  | Itops_admin    | qa123          | Automation_02 | 23              | 34              | SOURCE SEVERITY | SO SEVERITY | UPDATED TIME | Add Severity | Add New Source | 14 Jul 2021 |



        Scenario Outline: Verifying Admin is able to Configure New Severity Mapping


              And "Admin" clicks on Add new source button
              And "Admin" clicks on source dropdown and select a source
              And "Admin" enters source Severity as "<SourceSeverity1>"
              And "Admin" clicks on SO Severity dropdown and selects Information
              And "Admin" clicks on Add Source button
             Then Error message for creating duplicate source must be shown in popup "<Error_popup>"

        Examples:
                  | Itops_UserName | Itops_Password | ProjectName   | SourceSeverity1 | SourceSeverity2 | Error_popup           |
                  | Itops_admin    | qa123          | Automation_02 | 23              | 34              | Source already exists |



        Scenario Outline: Adding additional source severity within the another source

              And "Admin" clicks on Severity Mapping
              And 'Admin' clicks on cancel button
              And 'Admin' clicks on Add new source button
              And 'Admin' clicks on source dropdown and select a source
              And 'Admin' enters source Severity as "<SourceSeverity1>"
              And 'Admin' clicks on SO Severity dropdown and selects Information
              And 'Admin' clicks on Add Source button
             Then Success message for Verifyimg adding additional source severity within the another source must be shown in popup "<popup>"


        Examples:
                  | Itops_UserName | Itops_Password | ProjectName   | SourceSeverity1 | label                                                                   | popup                 |
                  | Itops_admin    | qa123          | Automation_02 | 2623            | When severity is not available, please enter 'Empty' as Source Severity | Source already exists |

        Scenario Outline: Verify adding additional source severity within the same source


              And "Admin" clicks on Severity Mapping
              And 'Admin' clicks on cancel button
              And "Admin" clicks on + Add Severity button
              And "Admin" enters source Severity as "<SourceSeverity1>"
              And "Admin" clicks on SO Severity dropdown and selects Information
              And "Admin" clicks on save and add new button
              And "Admin" enters source Severity as "<SourceSeverity2>"
              And "Admin" clicks on SO Severity dropdown and selects Information
              And "Admin" click on save button
             Then Success message for Verifyimg adding additional source severity within the same source must be shown in popup "<popup>"


        Examples:
                  | Itops_UserName | Itops_Password | ProjectName   | SourceSeverity1 | SourceSeverity2 | popup                                   |
                  | Itops_admin    | qa123          | Automation_02 | 264             | 3773            | New severity mapping successfully added |

        Scenario Outline: Verifying that Admin is able to create duplicate source severity and SO severity

              And "Admin" clicks on Severity Mapping
              And 'Admin' clicks on edit button
              And 'Admin' changes source Severity as "<SourceSeverity>"
              And 'Admin' clicks on save button
              And 'Admin' clicks on yes button
             Then Error message for creating duplicate source severity must be shown in popup "<Error_popup>"
              And 'Admin' clicks on edit button
              And 'Admin' changes another source Severity as "<SourceSeverity2>"
              And 'Admin' clicks on save button
              And 'Admin' clicks on yes button
             Then Success message for updating Severity Mapping must be shown in popup "<Success_popup>"
              And "Admin" clicks on logout button



        Examples:
                  | Itops_UserName | Itops_Password | ProjectName   | SourceSeverity | SourceSeverity2 | Error_popup                                         | Success_popup         |
                  | Itops_admin    | qa123          | Automation_02 | 23             | 32              | Severity mapping for Source Severity already exists | Successfully Updated. |


        Scenario Outline: Verifying ITOps Enginner is able to Configure New Severity Mapping

            Given ITOps "Admin" with username and password as "<UserName>", "<Password>" is in the home page
             When "Admin" enters project name as "<ProjectName>" in the search field
              And "Admin" clicks on project name "<ProjectName>"
              And "ITOps_Enginner" clicks on Configuration tab
              And "ITOps_Enginner" clicks on Severity Mapping
             Then "ITOps_Enginner" verifies Source Severity text feild as "<SourceSeverity>"
             Then "ITOps_Enginner" verifies SO Severity as "<SOSeverity>"
             Then "ITOps_Enginner" verifies Updated time as "<time>"
             Then "ITOps_Enginner" verifies +Add Severity icon is not available "<AddSeverity>"
             Then "ITOps_Enginner" verifies Delete icon is not available
             Then "ITOps_Enginner" verifies Add New Source icon is not available "<NewSource>"
             Then "ITOps_Enginner" verifies Edit icon is not available
             Then "ITOps_Enginner" verifies the Time as "<Time>"
              And "ITOps_Enginner" clicks on logout button



        Examples:
                  | UserName       | Password | ProjectName   | SourceSeverity1 | SourceSeverity2 | SourceSeverity  | SOSeverity  | time         | AddSeverity  | NewSource      | Time        |
                  | Itops_engineer | qa123    | Automation_02 | 23              | 34              | SOURCE SEVERITY | SO SEVERITY | UPDATED TIME | Add Severity | Add New Source | 14 Jul 2021 |


