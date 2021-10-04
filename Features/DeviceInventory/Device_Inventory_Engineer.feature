@DeviceInventory @ITOps_Engineer @Regression

Feature: Device Inventory Features

     Feature Description : Device Inventory Features

     @Device_Inventory_Upload
     Scenario Outline: ITOps Engineer unable to find the Upload Icon Button
     
          When "ITOps_Engineer" opens infrastructure page
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

     Scenario Outline: Itops Engineer searches the device with Non Existing device name.

          When "ITOps_Engineer" opens infrastructure page
          And "ITOps_Engineer" searches device name "<DeviceName>"
          Then Device details should not be displayed "<DeviceDetails>"


          Examples:
               | DeviceName        | DeviceDetails     |
               | GBLNBS-05A-FPA122 | No data available |

     Scenario Outline:  ITOps Admin Configure columns in device inventory

          When "ITOps_Engineer" opens infrastructure page
          And "ITOps_Engineer" clicks on Configure columns option
          And "ITOps_Engineer" selects resource name column
          And "ITOps_Engineer" clicks on close button
          When "ITOps_Engineer" clicks on logout button
          Given User with ITOps role renders the URL
          When user enters Username as "Itops_engineer", Password as "qa123" and clicks on Login button
          And "ITOps_Engineer" enters project name as "<ProjectName>" in the search field
          And "ITOps_Engineer" clicks on project name "<ProjectName>"
          And "ITOps_Engineer" opens infrastructure page
          Then "ITOps_Engineer" verifies the Mac address column is present or not


          Examples:
               | UserName    | Password | ProjectName      |
               | Itops_admin | qa123    | Automation_IB_24 |