@DeviceInventory @ITOps_Engineer @Regression

Feature: Device Inventory Features

Feature Description : Device Inventory Features

        @Device_Inventory_Upload
        Scenario Outline: ITOps Engineer unable to find the Upload Icon Button
             When "ITOps_Engineer" navigates to ust home page
              And "ITOps_Engineer" enters project name as "<ProjectName>" in the search field
              And "Admin" clicks on project name "<ProjectName>"
              And "ITOps_Engineer" opens infrastructure page
             Then Verifies that Upload Icon is not present

        Examples:

                  | ProjectName      |
                  | Automation_IB_24 |

        Scenario Outline: ITOps Engineer view Device Details

             When "ITOps_Engineer" opens infrastructure page
              And "ITOps_Engineer" searches device name "<DeviceName>"
              And "ITOps_Engineer" clicks on resource name in the device inventory list "<ResourceName>"
             Then verifying the resource name is same as in previous page "<ResourceName>"
              And "ITOps_Engineer" navigates back to device inventory page

        Examples:
                  | ResourceName    | DeviceName      |
                  | AUMECO-50A-SBC1 | AUMECO-50A-SBC1 |

        Scenario: ITOps Engineer unable to Add New Device To The System

             When "ITOps_Engineer" opens infrastructure page
              And "ITOps_Engineer" unable to find add device option


        Scenario Outline: Itops Engineer unable to update the device in the device inventory.

             When "ITOps_Engineer" opens infrastructure page
              And "ITOps_Engineer" searches device name "<DeviceName>"
              And "ITOps_Engineer" clicks on resource name "<ResourceName>"
              And "ITOps_Engineer" unable to edit the resource type


        Examples:
                  | DeviceName      | ResourceName    |
                  | AUMECO-50A-SBC1 | AUMECO-50A-SBC1 |

