@SeverityMapping_ITOpsEnginner @ITOps_Engineer @Regression

Feature:Severity Mapping

    Feature Description :Severity Mapping

    Scenario Outline: Verifying ITOps Enginner is able to Configure New Severity Mapping

        When "ITOps_Enginner" clicks on Configuration tab
        And "ITOps_Enginner" clicks on Severity Mapping
        Then "ITOps_Enginner" verifies Source Severity text feild as "<SourceSeverity>"
        And "ITOps_Enginner" verifies SO Severity as "<SOSeverity>"
        And "ITOps_Enginner" verifies Updated time as "<time>"
        When "ITOps_Enginner" verifies +Add Severity icon is not available "<AddSeverity>"
        And "ITOps_Enginner" verifies Delete icon is not available
        And "ITOps_Enginner" verifies Add New Source icon is not available "<NewSource>"
        And "ITOps_Enginner" verifies Edit icon is not available

        Examples:
            | UserName       | Password | ProjectName      | SourceSeverity1 | SourceSeverity2 | SourceSeverity  | SOSeverity  | time         | AddSeverity  | NewSource      |
            | Itops_engineer | qa123    | Automation_IB_24 | 23              | 34              | SOURCE SEVERITY | SO SEVERITY | UPDATED TIME | Add Severity | Add New Source |


