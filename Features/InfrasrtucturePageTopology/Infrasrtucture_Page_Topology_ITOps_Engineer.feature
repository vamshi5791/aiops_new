@InfrastructureTopology @ITOpsEngineer  @Regression
Feature: Device Inventory Features

      Feature Description : Device Inventory Features

      @Topology_View
      Scenario Outline: Topology View
            When "ITOps_Engineer" enters project name in project search feild "<ProjectName>"
            And "ITOps_Engineer" clicks on project name "<ProjectName>"
            And "ITOps_Engineer" opens infrastructure page
            And "ITOps_Engineer" clicks on Topology icon
            And "ITOps_Engineer" verifies the delete option is not visible
            And "ITOps_Engineer" verifies the upload option is not visible
            Then click on logout button
            Examples:
                  | ProjectName   |
                  | Automation_02 |


      # @ITOps_Engineer_Search_With_Existing_Device_Name

      # Scenario Outline: ITOps Engineer search with existing Device Name

      #       And "ITOps_Engineer" clicks on Topology icon
      #       And "Itops_engineer" searches device name "<DeviceName>"
      #       Then device should be available "<Device>"
      #       Then click on logout button



      #       Examples:
      #             | DeviceName      | Device          |
      #             | AUSYCT-28A-SBC1 | ausyct-28a-sbc1 |
