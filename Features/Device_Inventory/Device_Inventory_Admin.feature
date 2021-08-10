@Device_Inventory_ITOpsAdmin @ITOps_Milestone_2  @ITOps_Milestone_3

Feature: Device Inventory Features

    Feature Description : Device Inventory Features

    Background:

        Given user opens itops application
        And "ITOps_Admin" enters Username, Password and click on Login button "Itops_admin", "qa123"
        When "ITOps_Admin" enters project name in project search feild "Automation_02"
        And "ITOps_Admin" clicks on project name "Automation_02"
        And "ITOps_Admin" opens infrastructure page


    @Search_with_Existing_Device_Name_For_Itops_Admin_Role

    Scenario Outline: Itops Admin searches the device with existing device name.

        And "ITOps_Admin" searches device name "<DeviceName>"
        Then Device details should be displayed "<Device>"
        Then click on logout button


        Examples:
            | Itops_UserName | Itops_Password | projectName   | TestProjectName | DeviceName      | Device          |
            | Itops_admin    | qa123          | Automation_02 | Automation_02   | AUMECO-50A-SBC1 | AUMECO-50A-SBC1 |

    @Search_With_Device_Name_Which_Doesnot_Exist_for_ITOps_Engineer_Role
    Scenario Outline: Itops Admin searches the device with Non Existing device name.

        And "ITOps_Admin" searches device name "<DeviceName>"
        Then Device details should not be displayed "<DeviceDetails>"
        Then click on logout button


        Examples:
            | Itops_UserName | Itops_Password | projectName   | TestProjectName | DeviceName        | DeviceDetails     |
            | Itops_admin    | qa123          | Automation_02 | Automation_02   | GBLNBS-05A-FPA122 | No data available |

    @Device_Details_Page_View_ITOps_Admin
    Scenario Outline:  ITOps Admin view Device Details


        And "ITOps_Admin" searches device name "<DeviceName>"
        And "ITOps_Admin" clicks on resource name in the device inventory list "<ResourceName>"
        Then verifying the resource name is same as in previous page "<ResourceName>"
        And "ITOps_Admin" navigates back to device inventory page
        Then click on logout button



        Examples:
            | Itops_UserName | Itops_Password | projectName   | TestProjectName | ResourceName    | DeviceName      |
            | Itops_admin    | qa123          | Automation_02 | Automation_02   | AUMECO-50A-AOB1 | AUMECO-50A-AOB1 |

    @Adding_New_Device_To_The_System_ITOps_Admin 
    Scenario Outline: ITOps Admin Adds New Device To The System

        And "ITOps_Admin" clicks on add device option
        And "ITOps_Admin" enters resource name "<ResourceName>"
        And "ITOps_Admin" enters resource type "<ResourceType>"
        And "ITOps_Admin" enters site "<Site>"
        And "ITOps_Admin" enters country "<Country>"
        And "ITOps_Admin" enters region "<Region>"
        And "ITOps_Admin" clicks on add device
        Then Success toaster must be shown and device must be added to the list "<SuccessPopUp>"
        Then click on logout button


        Examples:
            | Itops_UserName | Itops_Password | projectName   | TestProjectName | SuccessPopUp                     | ResourceName | ResourceType | Site   | Country | Region |
            | Itops_admin    | qa123          | Automation_02 | Automation_02   | New resource added successfully! | NewSample0234   | Samp3le      | Sample | Sample  | Sample |

@Update_Device_In_Device_Inventory_ITOps_Admin 
Scenario Outline: Itops Admin updates the device in the device inventory.

    And "ITOps_Admin" searches device name "<DeviceName>"
    And "ITOps_Admin" clicks on resource name "<ResourceName>"
    And "ITOps_Admin" edit the resource type "<EditResourceType>"
    Then "ITOps_Admin" verifies the update button is visible
    Then click on logout button



    Examples:
        | Itops_UserName | Itops_Password | projectName   | TestProjectName | DeviceName      | EditResourceType | ResourceName    |
        | Itops_admin    | qa123          | Automation_02 | Automation_02   | AUMECO-50A-SBC1 | AUMECO-50A-SBC1  | AUMECO-50A-SBC1 |


