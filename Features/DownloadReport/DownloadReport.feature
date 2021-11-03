@DownloadReports

Feature: Download Reports

    Scenario Outline: Verify the user is able to download the alerts In csv file

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name
        When "admin" clicks on Alerts page
        Then "ITOps_Admin" clicks on filter by severity dropdown
        And "ITOps_Admin" selects Major
        And "admin" clicks on download icon button
        And "admin" reads data from downloaded csv file
        Then "admin" verifies the data displayed is same as UI
        And "ITOps_Admin" clicks on remove all button
        And "ITOps_Admin" clicks on remove all button

        Examples:
            | ProjectName     |
            | Automation_01M3 |

    Scenario Outline: Verify the user is able to download the alerts In csv file

        When "admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects source dropdown
        And "ITOps_Admin" selects Solarwinds
        And "ITOps_Admin" enters resource name as "<ResourceName>"
        And "Admin" clicks on apply button
        And "admin" clicks on download icon button
        And "admin" reads data from alerts console
        And "admin" reads data from downloaded csv file
        Then "admin" verifies the data displayed is same as UI
        And "ITOps_Admin" clicks on remove all button

        Examples:
            | ProjectName     | ResourceName    |
            | Automation_01M3 | IAMLFSCPRDDC1-2 |

    Scenario Outline: Verify the user is able to download the alerts In csv file

        When "admin" clicks on Alerts page
        And "Admin" clicks on advanced filter icon
        And "ITOps_Admin" selects Alert State as "On Hold"
        And "Admin" enters in last fields as "<InLast>" and select Duration type "<DurationType>"
        And "Admin" clicks on apply button
        And "admin" clicks on download icon button
        And "admin" reads data from alerts console
        And "admin" reads data from downloaded csv file
        Then "admin" verifies the data displayed is same as UI
        And "ITOps_Admin" clicks on remove all button

        Examples:
            | ProjectName     | InLast | DurationType |
            | Automation_01M3 | 1      | Days         |