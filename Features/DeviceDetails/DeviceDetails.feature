@DeviceDetails @ITOps_Admin @Regression

Feature: Device Details for the existing Device

    Feature Description : Verifing Device Details for the existing Device

    Scenario Outline: Itops Admin searches the device with existing device name.

        When "Admin" opens infrastructure page
        And "Admin" searches device name "<DeviceName>"
        And "ITOps_Admin" clicks on resource name in the device inventory list "<Device>"
        Then Verify Green Up arrow against Device Name
        Then "Admin" verifies the Resource Type column
        Then "Admin" verifies the Resource Group column
        Then "Admin" verifies the IP Address column
        Then "Admin" verifies the Mac address column
        Then "Admin" verifies the Vendor column
        Then "Admin" verifies the Model column
        Then "Admin" verifies the Maintanence Mode column
        Then "Admin" verifies the Country column
        Then "Admin" verifies the Site column
        Then "Admin" verifies the Region column
        Then "Admin" verifies the Critical column
        Then "Admin" verifies the Warning column
        Then "Admin" verifies the Ok column
        Then "Admin" verifies the Major column
        Then "Admin" verifies the Minor column
        Then "Admin" verifies the Info column
        Then "Admin" verifies the Total column
        Then "Admin" verifies alert count "<AlertCount>"
        Then "Admin" verifies the Alert Name column in Device Availability
        Then "Admin" verifies the Mtbf column in Device Availability
        Then "Admin" verifies the Port column in Connections
        Then "Admin" verifies the Dest Hostname column in Connections
        Then "Admin" verifies the Status column in Connections


        Examples:
            | ProjectName     | DeviceName      | Device          | AlertName | AlertCount |
            | Automation_01M3 | AUMECO-50A-AOB1 | AUMECO-50A-AOB1 | Alert1    | 5          |



    Scenario Outline: Itops Admin Verify Device Details section with alert count

        When "Admin" opens infrastructure page
        And "Admin" searches device name "<DeviceName>"
        And "ITOps_Admin" clicks on resource name in the device inventory list "<Device>"
        Then "Admin" verifies the Warning column
        Then "Admin" verifies the Ok column
        Then "Admin" verifies the Major column
        When "ITOps_Admin" clicks on Alerts page
        # And Admin click on state
        # And "Admin" clicks on "Close" button


        And "Admin" opens infrastructure page
        And "Admin" searches device name "<DeviceName>"
        And "ITOps_Admin" clicks on resource name in the device inventory list "<Device>"
        Then "Admin" verifies the Warning column
        Then "Admin" verifies the Ok column
        Then "Admin" verifies the Major column


        Examples:
            | ProjectName     | DeviceName      | Device          |
            | Automation_01M3 | AUSYGR-00A-SSC1 | AUSYGR-00A-SSC1 |