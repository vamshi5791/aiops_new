@ITOpsAdmin @Regression

Feature: Infrastructure page Files Download

  Feature Description : Device Inventory file and Topology file Download in Infrastructure page

  Scenario Outline: Device Inventory file and Topology file Download in Infrastructure page

    When "ITOps_Admin" navigates to ITOps home page
    And "Admin" enters project name in project search field and click on enter
    And "Admin" clicks on project name
    When "ITOps_Admin" opens infrastructure page
    And  "ITOps_Admin" clicks on Download Device Inventory icon
    And  "ITOps_Admin" clicks on Topology icon
    Then "ITOps_Admin" clicks on Download Topology icon

    Examples:
      | Itops_UserName | Itops_Password | ProjectName   | 
      | Itops_admin    | qa123          | Automation_S1 | 
