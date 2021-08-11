@InfrastructureTopology_ITOpsAdmin @ITOps_Milestone_2
Feature: Device Inventory Features

  Feature Description : Device Inventory Features


  #  @Topology_Upload
  #  Scenario Outline: Topology Upload
  # Given user opens itops application
  # And "ITOps_Admin" enters Username, Password and click on Login button "Itops_admin", "qa123"
  # When "ITOps_Admin" enters project name in project search feild "Automation_02"
  # And "ITOps_Admin" clicks on project name "Automation_02"
  # And "ITOps_Admin" opens infrastructure page
  # And "ITOps_Admin" clicks on Topology icon
  # And "ITOps_Admin" clicks on import
  # And "ITOps_Admin" selects the valid file to be uploaded
  # And "ITOps_Admin" clicks on upload button
  # And "ITOps_Admin" verifies the device is visible



  #    Examples:
  # | Itops_UserName | Itops_Password | projectName   | TestProjectName |
  # | Itops_admin    | qa123          | Automation_02 | Automation_02   |


  @ITOps_Admin_Search_With_Non_Existing_Device_Name
  Scenario Outline: ITOps_Admin_Search_With_Non_Existing_Device_Name

    And "ITOps_Admin" clicks on Topology icon
    And "ITOps_Admin" searches device name "<DeviceName>"
    Then device should not be available "<Device>"
    Then click on logout button



    Examples:
      | DeviceName      | Device          |
      | AUSYCT-28A-SBC2 | ausyct-28a-sbc1 |


# @ITOps_Admin_Search_With_Existing_Device_Name
# Scenario Outline: ITOps_Admin_Search_With_Existing_Device_Name

# And "ITOps_Admin" clicks on Topology icon
#     And "ITOps_Admin" searches device name "<DeviceName>"
#     Then device should be available "<Device>"
#     Then click on logout button



#     Examples:
#    | DeviceName      | Device          |
#     | AUSYCT-28A-SBC1 | ausyct-28a-sbc1 |


# @Delete_Topology
# Scenario: Delete_Topology View

# And "ITOps_Admin" clicks on Topology icon
#     And "ITOps_Admin" clicks the delete topology icon
#     And "ITOps_Admin" clicks on yes for conformation


