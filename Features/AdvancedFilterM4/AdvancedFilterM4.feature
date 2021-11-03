@AdvancedFilterM4  @ITOps_Admin @Regression

Feature:  Advanced Filters

    Feature Description: Admin navigates to alert page,
    verifies all the sections are present

    Scenario Outline: verify advance filter with cluster type

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        When "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects cluster type dropdown
        And "ITOps_Admin" selects ticketed
        And "Admin" clicks on apply button
        And "Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects cluster type dropdown
        And "ITOps_Admin" selects non ticketed
        And "Admin" clicks on apply button

        # And "admin" reads data from alerts console
        # Then "admin" verifies the data displayed is same as UI


        And "ITOps_Admin" clicks on remove all button

        Examples:
            | UserName    | Password | ProjectName      | AdvancedFilters  | SourceAndResource    | StateAndStatus   | DataAndTime   |
            | Itops_admin | qa123    | Automation_IB_24 | Advanced Filters | Source and Resources | State and Status | Date and Time |

    Scenario Outline: verify advance filter with severity

        When "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects alert severity dropdown
        And "ITOps_Admin" selects Ok
        And "ITOps_Admin" clicks on apply button
        And "ITOps_Admin" clicks on remove all button
        And "Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects alert severity dropdown
        And "ITOps_Admin" selects Warning
        And "ITOps_Admin" selects Ok
        And "ITOps_Admin" clicks on apply button
        And "ITOps_Admin" clicks on remove all button
        And "Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects alert severity dropdown
        And "ITOps_Admin" selects selects all
        And "ITOps_Admin" clicks on apply button

        Examples:
            | UserName    | Password | ProjectName      | AdvancedFilters  | SourceAndResource    | StateAndStatus   | DataAndTime   |
            | Itops_admin | qa123    | Automation_IB_24 | Advanced Filters | Source and Resources | State and Status | Date and Time |

    Scenario Outline: verify advance filter with cluster type

        When "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects alert severity dropdown
        And "ITOps_Admin" selects Ok
        And "ITOps_Admin" selects source dropdown
        And "ITOps_Admin" selects Solarwinds
        And "ITOps_Admin" enters resource name as "<ResourceName>"
        And "Admin" enters in last fields as "<InLast>" and select Duration type "<DurationType>"
        And "Admin" clicks on apply button
        And "ITOps_Admin" enters value "<Value>" in auto refresh textbox

        Examples:
            | UserName    | Password | ProjectName      | AdvancedFilters  | SourceAndResource    | StateAndStatus   | DataAndTime   | InLast | DurationType | ResourceName | minutes | Value |
            | Itops_admin | qa123    | Automation_IB_24 | Advanced Filters | Source and Resources | State and Status | Date and Time | 1      | Days         | Alert1       | 1       | 1     |


    Scenario Outline: Verify advanced filter with single ,multiple and all sources

        When "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects source dropdown
        And "ITOps_Admin" selects Solarwinds
        And "ITOps_Admin" clicks on apply button
        And "ITOps_Admin" clicks on remove all button
        And "Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects source dropdown
        And "ITOps_Admin" selects Solarwinds
        And "ITOps_Admin" selects Verba
        And "ITOps_Admin" clicks on apply button
        And "ITOps_Admin" clicks on remove all button
        And "Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects source dropdown
        And "ITOps_Admin" selects selects all
        And "ITOps_Admin" clicks on apply button

        Examples:
            | UserName    | Password | ProjectName      | AdvancedFilters  | SourceAndResource    | StateAndStatus   | DataAndTime   |
            | Itops_admin | qa123    | Automation_IB_24 | Advanced Filters | Source and Resources | State and Status | Date and Time |


    Scenario Outline: Verify  advance filter with single alert state, multiple and all


        When "Admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects alert severity dropdown
        And "ITOps_Admin" selects Ok
        And "ITOps_Admin" selects source dropdown
        And "ITOps_Admin" selects Solarwinds
        And "ITOps_Admin" enters resource name as "<ResourceName>"
        And "ITOps_Admin" clicks on apply button
        And "ITOps_Admin" clicks on remove all button
        And "Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects alert severity dropdown
        And "ITOps_Admin" selects Ok
        And "ITOps_Admin" selects Warning
        And "ITOps_Admin" selects source dropdown
        And "ITOps_Admin" selects Solarwinds
        And "ITOps_Admin" selects Verba
        And "ITOps_Admin" enters resource name as "<ResourceName>"
        And "ITOps_Admin" clicks on apply button
        And "ITOps_Admin" clicks on remove all button
        And "Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects alert severity dropdown
        And "ITOps_Admin" selects selects all
        And "ITOps_Admin" selects source dropdown
        And "ITOps_Admin" selects selects all
        And "ITOps_Admin" enters resource name as "<ResourceName>"
        And "ITOps_Admin" clicks on apply button
        And "ITOps_Admin" clicks on remove all button


        Examples:
            | UserName    | Password | ProjectName      | AdvancedFilters  | SourceAndResource    | StateAndStatus   | DataAndTime   |
            | Itops_admin | qa123    | Automation_IB_24 | Advanced Filters | Source and Resources | State and Status | Date and Time |

