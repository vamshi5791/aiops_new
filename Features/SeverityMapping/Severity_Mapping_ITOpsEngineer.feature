@SeverityMapping_ITOpsEnginner @ITOps_Milestone_2

Feature:Severity Mapping

      Feature Description :Severity Mapping

      Scenario Outline: Verifying ITOps Enginner is able to Configure New Severity Mapping

            # Given ITOps "Admin" with username and password as "<UserName>", "<Password>" is in the home page
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


