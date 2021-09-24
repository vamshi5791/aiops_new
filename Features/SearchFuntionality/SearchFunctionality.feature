@SearchFunctionality @ITOps_Milestone_2 @ITOps_Admin
Feature: Search Functionality with ITOps Admin role

     Feature Description : User navigates to alert console page, searches by Node Name, AlertMetric data and Alert Name
     verifies results should be based on the search input

     Scenario Outline: Search by Node Name
          When "admin" navigates to ITOps home page
          And "Admin" enters project name as "<ProjectName>" in the search field
          And "admin" clicks on project name "<ProjectName>"
          And "admin" clicks on Alerts page
          And "admin" enters "node name" and clicks on enter "<NodeName>"
          Then verify search result should contain all the alerts from the same node name "<NodeName>"

          Examples:
               | NodeName        | ProjectName     |
               | CNHKGG-00A-SSC1 | Btest_RES_Aug30 |

     Scenario Outline: Search by alert metric
          When "admin" clicks on Alerts page
          And "admin" enters "alertMetric data" and clicks on enter "<AlertMetricData>"
          Then verify search result should contain all the alerts which has alert metric matching the search criteria "<AlertMetricData>"

          Examples:
               | AlertMetricData |
               | Node Down       |

     Scenario Outline: Search by alert name

          When "admin" clicks on Alerts page
          And "admin" enters "alert name" and clicks on enter "<AlertName>"
          Then verify search result should contain all the alerts which has alert name matching the search criteria "<AlertName>"
          And "admin" verifies BA label should be displayed along with base alert id in the 'Alert ID section' of child
          And "admin" verifies Severity strip should be shown for individual alert which is shown in search result, not cluster severity
          And "admin" verifies All console data should be for individual alerts data not cluster data
          And "admin" verifies Last alert time, "state/action" should be displayed
          Examples:
               | AlertName     |
               | Test case 29b |