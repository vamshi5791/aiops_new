@DeviceInventory @ITOps_Admin @Regression

Feature: Device Inventory Features

Feature Description : Device Inventory Features

        Scenario Outline: Itops Admin searches the device with existing device name.

             When "Admin" navigates to ust home page
             And "Admin" enters project name as "<ProjectName>" in the search field
              And "Admin" clicks on project name "<ProjectName>"
              And "ITOps_Admin" opens infrastructure page
              And "ITOps_Admin" searches device name "<DeviceName>"
             Then Device details should be displayed "<Device>"


        Examples:
                  | ProjectName   | DeviceName      | Device          |
                  | Automation_02 | AUMECO-50A-SBC1 | AUMECO-50A-SBC1 |

        Scenario Outline: Itops Admin searches the device with Non Existing device name.

              When "ITOps_Admin" opens infrastructure page
              And "ITOps_Admin" searches device name "<DeviceName>"
             Then Device details should not be displayed "<DeviceDetails>"


        Examples:
                  | DeviceName        | DeviceDetails     |
                  | GBLNBS-05A-FPA122 | No data available |

        Scenario Outline:  ITOps Admin view Device Details

              When "ITOps_Admin" opens infrastructure page
              And "ITOps_Admin" searches device name "<DeviceName>"
              And "ITOps_Admin" clicks on resource name in the device inventory list "<ResourceName>"
             Then verifying the resource name is same as in previous page "<ResourceName>"
              And "ITOps_Admin" navigates back to device inventory page



        Examples:
                  | ResourceName    | DeviceName      |
                  | AUMECO-50A-AOB1 | AUMECO-50A-AOB1 |

        Scenario Outline: ITOps Admin Adds New Device To The System

              When "ITOps_Admin" opens infrastructure page
              And "ITOps_Admin" clicks on add device option
              And "ITOps_Admin" enters resource name "<ResourceName>"
              And "ITOps_Admin" enters resource type "<ResourceType>"
              And "ITOps_Admin" enters site "<Site>"
              And "ITOps_Admin" enters country "<Country>"
              And "ITOps_Admin" enters region "<Region>"
              And "ITOps_Admin" clicks on add device
             Then Success toaster must be shown and device must be added to the list "<SuccessPopUp>"


        Examples:
                  | SuccessPopUp                     | ResourceName | ResourceType | Site   | Country | Region |
                  | New resource added successfully! | Alert1234     | Samp3le      | Sample | Sample  | Sample |

        Scenario Outline: Itops Admin updates the device in the device inventory.

              When "ITOps_Admin" opens infrastructure page
              And "ITOps_Admin" searches device name "<DeviceName>"
              And "ITOps_Admin" clicks on resource name "<ResourceName>"
              And "ITOps_Admin" edit the resource type "<EditResourceType>"
             Then "ITOps_Admin" verifies the update button is visible


        Examples:
                  | DeviceName      | EditResourceType | ResourceName    |
                  | AUMECO-50A-SBC1 | AUMECO-50A-SBC1  | AUMECO-50A-SBC1 |


