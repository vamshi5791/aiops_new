@SeverityMapping_ITOpsEnginner @ITOps_Engineer @Regression

Feature:Severity Mapping

Feature Description :Severity Mapping

        Scenario Outline: Verifying ITOps Enginner is able to Configure New Severity Mapping

            #  When "admin" navigates to ITOps home page
            #  When "Admin" enters project name as "<ProjectName>" in the search field
            #   And "admin" clicks on project name "<ProjectName>"
             When "ITOps_Enginner" clicks on Configuration tab
              And "ITOps_Enginner" clicks on Severity Mapping
             Then "ITOps_Enginner" verifies Source Severity text feild as "<SourceSeverity>"
              And "ITOps_Enginner" verifies SO Severity as "<SOSeverity>"
              And "ITOps_Enginner" verifies Updated time as "<time>"
              And "ITOps_Enginner" verifies +Add Severity icon is not available "<AddSeverity>"
              And "ITOps_Enginner" verifies Delete icon is not available
              And "ITOps_Enginner" verifies Add New Source icon is not available "<NewSource>"
              And "ITOps_Enginner" verifies Edit icon is not available
              And "ITOps_Enginner" verifies the Time as "<Time>"

        Examples:
                  | UserName       | Password | ProjectName      | SourceSeverity1 | SourceSeverity2 | SourceSeverity  | SOSeverity  | time         | AddSeverity  | NewSource      | Time        |
                  | Itops_engineer | qa123    | Automation_IB_24 | 23              | 34              | SOURCE SEVERITY | SO SEVERITY | UPDATED TIME | Add Severity | Add New Source | 02 Sep 2021 |


