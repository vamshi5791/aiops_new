@DeviceDetails @ITOps_Admin @Regression

Feature: Device Details for the existing Device

    Feature Description : Verifing Device Details for the existing Device

    Scenario Outline: Itops Admin searches the device with existing device name.

        When "Admin" navigates to ITOps home page
        And "Admin" enters project name as "<ProjectName>" in the search field
        And "Admin" clicks on project name "<ProjectName>"
        And "Admin" opens infrastructure page
        And "Admin" searches device name "<DeviceName>"
        And "ITOps_Admin" clicks on resource name in the device inventory list

        Then Device details should be displayed "<Device>"
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
        Then "Admin" verifies the Alert Name column in Device Availability
        Then "Admin" verifies the Mtbf column in Device Availability
        Then "Admin" verifies the Port column in Connections
        Then "Admin" verifies the Dest Hostname column in Connections
        Then "Admin" verifies the Status column in Connections


        Examples:
            | ProjectName      | DeviceName      | Device          | 
            | Automation_IB_24 | AUSYGR-00A-SSC1 | AUSYGR-00A-SSC1 |