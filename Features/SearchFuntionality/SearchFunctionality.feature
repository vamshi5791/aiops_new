@SearchFunctionality @ITOps_Milestone_2 @ITOps_Admin
Feature: Search Functionality with ITOps Admin role

Feature Description : User navigates to alert console page, searches by Node Name, AlertMetric data and Alert Name
                      verifies results should be based on the search input
        
        Scenario Outline: Search by Node Name
              And "admin" clicks on Alerts page
             When "admin" enters "node name" and clicks on enter "<NodeName>"
             Then verify search result should contain all the alerts from the same node name
             
        Examples:
                  | NodeName       |
                  | CNHKGG-00A-KKR |

        Scenario Outline: Search by alert metric
              And "admin" clicks on Alerts page
             When "admin" enters "alertMetric data" and clicks on enter "<AlertMetricData>"
             Then verify search result should contain all the alerts which has alert metric matching the search criteria "<AlertMetricData>"
             
        Examples:
                  | AlertMetricData |
                  | Node Down       |

        Scenario Outline: Search by alert name
              And "admin" clicks on Alerts page
             When "admin" enters "alert name" and clicks on enter "<AlertName>"
             Then verify search result should contain all the alerts which has alert name matching the search criteria "<AlertName>"
            
        Examples:
                  | AlertName           |
                  | New_SolarWind_Alert |