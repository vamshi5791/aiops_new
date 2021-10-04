@InfrastructureTopology @ITOpsEngineer  @Regression
Feature: Device Inventory Features

      Feature Description : Device Inventory Features

      @Topology_View
      Scenario Outline: Topology View

            When "ITOps_Engineer" opens infrastructure page
            And "ITOps_Engineer" clicks on Topology icon
            And "ITOps_Engineer" verifies the delete option is not visible
            And "ITOps_Engineer" verifies the upload option is not visible


            Examples:
                  | ProjectName   |
                  | Automation_02 |


      # @ITOps_Engineer_Search_With_Existing_Device_Name

      # Scenario Outline: ITOps_Engineer_Search_With_Existing_Device_Name

      #       And "ITOps_Engineer" clicks on Topology icon
      #       And "Itops_engineer" searches device name "<DeviceName>"
      #       Then device should be available "<Device>"



      #       Examples:
      #             | DeviceName      | Device          |
      #             | AUSYCT-28A-SBC1 | ausyct-28a-sbc1 |
