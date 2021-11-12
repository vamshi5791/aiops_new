@AdvancedFilterM4  @ITOps_Admin @Regression

Feature:  Advanced Filters

    Feature Description: Admin navigates to alert page,
    verifies all the sections are present


    Scenario Outline: verify advance filter with cluster type
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "Admin" clicks on source type dropdown
        And "Admin" select the "<sourcename>" checkbox from the list
        And "Admin" clicks on apply button
        And "Admin" verifies the status column as "<sourcename>"

        And "Admin" clicks on advanced filter icon
        And "Admin" clicks on source type dropdown
        And "Admin" select all the checkbox from the list
        And "Admin" clicks on apply button
        And "Admin" verifies the status column status as "<sourcenameall>"

        Examples:
            | UserName    | Password | ProjectName      | AdvancedFilters  | SourceAndResource    | StateAndStatus   | DataAndTime   | sourcename | sourcenameall |
            | Itops_admin | qa123    | Automation_IB_24 | Advanced Filters | Source and Resources | State and Status | Date and Time | Solarwinds | Deselect All  |

    Scenario Outline: Verify advance filter with severity , Assigned to and Assigned group
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        When "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        Then "Admin" verifies heading as "<AdvancedFilters>"
        And "Admin" verifies Source and Resource section heading as "<SourceAndResource>"
        And "Admin" verifies State and Status,Date and Time sections heading as "<StateAndStatus>" and "<DataAndTime>"
        Then "Admin" clicks on severity dropdown
        Then "Admin" selects the severity level as "<Severity>"
        Then "Admin" clicks on severity dropdown
        And "Admin" assigns to selected Name as "<AssignedName>"
        And "Admin" clicks on apply button
        And "Admin" verifies the status column as "<Severity>"
        And "Admin" clicks on advanced filter icon
        Then "Admin" clicks on severity dropdown
        And "Admin" selects the severity level as "<FirstSeverity>"
        And "Admin" selects the severity level as "<SecondSeverity>"
        Then "Admin" clicks on severity dropdown
        And "Admin" assigns to selected group as "<AssignedGroup>"
        And "Admin" clicks on apply button
        And "Admin" verifies the status column as "<Severity>"
        And "Admin" clicks on advanced filter icon
        Then "Admin" clicks on severity dropdown
        Then "Admin" selects the severity level as "<AllSeverity>"
        Then "Admin" clicks on severity dropdown
        And "Admin" assigns to selected Name as "<AssignedName1>"
        And "Admin" assigns to selected group as "<AssignedGroup2>"
        And "Admin" clicks on apply button
        And "Admin" verifies the status column as "<Severity>"

        Examples:
            | UserName    | Password | ProjectName      | AdvancedFilters  | SourceAndResource    | StateAndStatus   | DataAndTime   | Severity | AssignedName     | FirstSeverity | SecondSeverity | AssignedGroup     | AllSeverity | AssignedName1    | AssignedGroup2            |
            | Itops_admin | qa123    | Automation_IB_24 | Advanced Filters | Source and Resources | State and Status | Date and Time | Critical | Aneesh Jayarajan | Critical      | Ok             | UST - LCA Queries | Select All  | Aneesh Jayarajan | UST - Enterprise Security |

# Scenario Outline: verify advance filter with severity

#     When "Admin" clicks on Alerts page
#     And "Admin" clicks on advanced filter icon
#     And "ITOps_Admin" selects alert severity dropdown
#     And "ITOps_Admin" selects Ok
#     And "ITOps_Admin" clicks on apply button
#     And "ITOps_Admin" clicks on remove all button
#     And "Admin" clicks on advanced filter icon
#     And "ITOps_Admin" selects alert severity dropdown
#     And "ITOps_Admin" selects Warning
#     And "ITOps_Admin" selects Ok
#     And "ITOps_Admin" clicks on apply button
#     And "ITOps_Admin" clicks on remove all button
#     And "Admin" clicks on advanced filter icon
#     And "ITOps_Admin" selects alert severity dropdown
#     And "ITOps_Admin" selects selects all
#     And "ITOps_Admin" clicks on apply button

#     Examples:
#         | UserName    | Password | ProjectName      | AdvancedFilters  | SourceAndResource    | StateAndStatus   | DataAndTime   |
#         | Itops_admin | qa123    | Automation_IB_24 | Advanced Filters | Source and Resources | State and Status | Date and Time |

# Scenario Outline: verify advance filter with cluster type

#     When "Admin" clicks on Alerts page
#     And "Admin" clicks on advanced filter icon
#     And "ITOps_Admin" selects alert severity dropdown
#     And "ITOps_Admin" selects Ok
#     And "ITOps_Admin" selects source dropdown
#     And "ITOps_Admin" selects Solarwinds
#     And "ITOps_Admin" enters resource name as "<ResourceName>"
#     And "Admin" enters in last fields as "<InLast>" and select Duration type "<DurationType>"
#     And "Admin" clicks on apply button
#     And "ITOps_Admin" enters value "<Value>" in auto refresh textbox

#     Examples:
#         | UserName    | Password | ProjectName      | AdvancedFilters  | SourceAndResource    | StateAndStatus   | DataAndTime   | InLast | DurationType | ResourceName | minutes | Value |
#         | Itops_admin | qa123    | Automation_IB_24 | Advanced Filters | Source and Resources | State and Status | Date and Time | 1      | Days         | Alert1       | 1       | 1     |


# Scenario Outline: Verify advanced filter with single ,multiple and all sources

#     When "Admin" clicks on Alerts page
#     And "Admin" clicks on advanced filter icon
#     And "ITOps_Admin" selects source dropdown
#     And "ITOps_Admin" selects Solarwinds
#     And "ITOps_Admin" clicks on apply button
#     And "ITOps_Admin" clicks on remove all button
#     And "Admin" clicks on advanced filter icon
#     And "ITOps_Admin" selects source dropdown
#     And "ITOps_Admin" selects Solarwinds
#     And "ITOps_Admin" selects Verba
#     And "ITOps_Admin" clicks on apply button
#     And "ITOps_Admin" clicks on remove all button
#     And "Admin" clicks on advanced filter icon
#     And "ITOps_Admin" selects source dropdown
#     And "ITOps_Admin" selects selects all
#     And "ITOps_Admin" clicks on apply button

#     Examples:
#         | UserName    | Password | ProjectName      | AdvancedFilters  | SourceAndResource    | StateAndStatus   | DataAndTime   |
#         | Itops_admin | qa123    | Automation_IB_24 | Advanced Filters | Source and Resources | State and Status | Date and Time |


# Scenario Outline: Verify  advance filter with single alert state, multiple and all


#     When "Admin" clicks on Alerts page
#     And "Admin" clicks on advanced filter icon
#     And "ITOps_Admin" selects alert severity dropdown
#     And "ITOps_Admin" selects Ok
#     And "ITOps_Admin" selects source dropdown
#     And "ITOps_Admin" selects Solarwinds
#     And "ITOps_Admin" enters resource name as "<ResourceName>"
#     And "ITOps_Admin" clicks on apply button
#     And "ITOps_Admin" clicks on remove all button
#     And "Admin" clicks on advanced filter icon
#     And "ITOps_Admin" selects alert severity dropdown
#     And "ITOps_Admin" selects Ok
#     And "ITOps_Admin" selects Warning
#     And "ITOps_Admin" selects source dropdown
#     And "ITOps_Admin" selects Solarwinds
#     And "ITOps_Admin" selects Verba
#     And "ITOps_Admin" enters resource name as "<ResourceName>"
#     And "ITOps_Admin" clicks on apply button
#     And "ITOps_Admin" clicks on remove all button
#     And "Admin" clicks on advanced filter icon
#     And "ITOps_Admin" selects alert severity dropdown
#     And "ITOps_Admin" selects selects all
#     And "ITOps_Admin" selects source dropdown
#     And "ITOps_Admin" selects selects all
#     And "ITOps_Admin" enters resource name as "<ResourceName>"
#     And "ITOps_Admin" clicks on apply button
#     And "ITOps_Admin" clicks on remove all button


#     Examples:
#         | UserName    | Password | ProjectName      | AdvancedFilters  | SourceAndResource    | StateAndStatus   | DataAndTime   |
#         | Itops_admin | qa123    | Automation_IB_24 | Advanced Filters | Source and Resources | State and Status | Date and Time |




# ------------------------------------------------------------------

