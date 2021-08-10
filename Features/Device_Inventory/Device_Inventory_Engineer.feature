@Device_Inventory_ITOpsEngineer @ITOps_Milestone_2   @ITOps_Milestone_3


Feature: Device Inventory Features

    Feature Description : Device Inventory Features

    Background:

        Given user opens itops application
        And "ITOps_Engineer" enters Username, Password and click on Login button "Itops_engineer", "qa123"
        And "ITOps_Engineer" enters project name in project search feild "Automation_02"
        And "ITOps_Engineer" clicks on project name "Automation_02"
        And "ITOps_Engineer" opens infrastructure page

    @Device_Inventory_Upload
    Scenario Outline: ITOps Engineer unable to find the Upload Icon Button

        Then Verifies that Upload Icon is not present
        Then click on logout button

        Examples:

            | Itops_UserName | Itops_Password | projectName   | TestProjectName | DeviceName      | Device          |
            | Itops_admin    | qa123          | Automation_02 | Automation_02   | AUMECO-50A-SBC1 | AUMECO-50A-SBC1 |

    @Device_Details_Page_View_ITOps_Engineer
    Scenario Outline: ITOps Engineer view Device Details

        And "ITOps_Engineer" searches device name "<DeviceName>"
        And "ITOps_Engineer" clicks on resource name in the device inventory list "<ResourceName>"
        Then verifying the resource name is same as in previous page "<ResourceName>"
        Then "ITOps_Engineer" navigates back to device inventory page
        Then click on logout button

        Examples:
            | Itops_UserName | Itops_Password | projectName   | TestProjectName | ResourceName    | DeviceName      |
            | Itops_engineer | qa123          | Automation_02 | Automation_02   | AUMECO-50A-SBC1 | AUMECO-50A-SBC1 |


    @Adding_New_Device_To_The_System_ITOps_Engineer
    Scenario Outline: ITOps Engineer unable to Add New Device To The System

        And "ITOps_Engineer" unable to find add device option
        Then click on logout button


        Examples:
            | Itops_UserName | Itops_Password | projectName   | TestProjectName |
            | Itops_engineer | qa123          | Automation_02 | Automation_02   |


    @Update_Device_In_Device_Inventory_ITOps_Engineer
    Scenario Outline: Itops Engineer unable to update the device in the device inventory.

        And "ITOps_Engineer" searches device name "<DeviceName>"
        And "ITOps_Engineer" clicks on resource name "<ResourceName>"
        And "ITOps_Engineer" unable to edit the resource type
        Then click on logout button


        Examples:
            | Itops_UserName | Itops_Password | projectName   | TestProjectName | DeviceName      | EditResourceType | ResourceName    |
            | Itops_admin    | qa123          | Automation_02 | Automation_02   | AUMECO-50A-SBC1 | AUMECO-50A-SBC1  | AUMECO-50A-SBC1 |

