@InfrastructureTopology @ITOpsAdmin @Regression

Feature: Device Inventory Features

  Feature Description : Device Inventory Features


   @Topology_Upload
  Scenario Outline: Topology Upload

    When "Admin" navigates to ust home page
    And "Admin" enters project name as "<ProjectName>" in the search field
    And "Admin" clicks on project name "<ProjectName>"
    And "ITOps_Admin" opens infrastructure page
    And "ITOps_Admin" clicks on Topology icon
    And "ITOps_Admin" clicks on import
    And "ITOps_Admin" selects the valid file to be uploaded
    And "ITOps_Admin" clicks on upload button



    Examples:
      | Itops_UserName | Itops_Password | ProjectName   | TestProjectName |
      | Itops_admin    | qa123          | Automation_01M3 | Automation_02   |


  @ITOpsAdminSearchWithNonExistingDeviceName
  Scenario Outline: ITOpsAdminSearchWithNonExistingDeviceName

    When "ITOps_Admin" clicks on Topology icon
    And "ITOps_Admin" searches device name "<DeviceName>"
    Then device should not be available "<Device>"
    Then click on logout button



    Examples:
      | DeviceName      | Device          |
      | AUSYCT-28A-SBC2 | ausyct-28a-sbc1 |


# @ITOps_Admin_Search_With_Existing_Device_Name
# Scenario Outline: ITOps_Admin_Search_With_Existing_Device_Name

# When "ITOps_Admin" clicks on Topology icon
#     And "ITOps_Admin" searches device name "<DeviceName>"
#     Then device should be available "<Device>"
#     Then click on logout button



#     Examples:
#    | DeviceName      | Device          |
#     | AUSYCT-28A-SBC1 | ausyct-28a-sbc1 |


@Delete_Topology
Scenario: Delete_Topology View

When "ITOps_Admin" clicks on Topology icon
    And "ITOps_Admin" clicks the delete topology icon
    And "ITOps_Admin" clicks on yes for conformation


