@AlertStore

Feature: Split functionality

    Scenario Outline: Search by Node Name

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name

        And "admin" clicks on Alerts page
        And "admin" enters "Node name" and clicks on enter " CNHKGG-00A-SSC1"
        Then verify search result should contain all the alerts from the same node name " CNHKGG-00A-SSC1"
        And "admin" clicks on Alerts page
        And "admin" enters "Node name" and clicks on enter "CNHKGG-00A-SSC1 "
        Then verify search result should contain all the alerts from the same node name "CNHKGG-00A-SSC1 "
        And "admin" clicks on Alerts page
        And "ITOps_Admin" enters value "<Value>" in auto refresh textbox


        Examples:
            | NodeName        | ProjectName     | Value |
            | CNHKGG-00A-SSC1 | Btest_RES_Aug30 | 1     |