@InfrastructureTopology_ITOpsEngineer  @ITOps_Milestone_2
Feature: Device Inventory Features

Feature Description : Device Inventory Features

        Background:

            Given user opens itops application
              And "ITOps_Engineer" enters Username, Password and click on Login button "Itops_engineer", "qa123"
             When "ITOps_Engineer" enters project name in project search feild "Automation_02"
              And "ITOps_Engineer" clicks on project name "Automation_02"
              And "ITOps_Engineer" opens infrastructure page
              And "ITOps_Engineer" clicks on Topology icon



        @Topology_View
        Scenario Outline: Topology View

              And "ITOps_Engineer" verifies the delete option is not visible
              And "ITOps_Engineer" verifies the upload option is not visible
             Then click on logout button



        Examples:
                  | Itops_UserName | Itops_Password | projectName   | TestProjectName |
                  | ITOps_Engineer | qa123          | Automation_02 | Automation_02   |


    # @ITOps_Engineer_Search_With_Existing_Device_Name 

    # Scenario Outline: ITOps_Engineer_Search_With_Existing_Device_Name

    #     And "Itops_engineer" searches device name "<DeviceName>"
    #     Then device should be available "<Device>"
    #     Then click on logout button



    #     Examples:
    #         | Itops_UserName | Itops_Password | projectName   | TestProjectName | DeviceName      | Device          |
    #         | Itops_engineer | qa123          | Automation_02 | Automation_02   | AUSYCT-28A-SBC1 | ausyct-28a-sbc1 |
