@Dashboard @ITOps_Admin @Regression

Feature:  Dashboard
     #1
     Scenario Outline: ITOPS Dashboard - verify Top 10 Alerts widget

          When "ITOps_Admin" navigates to ITOps home page
          And "Admin" enters project name as "<ProjectName>" in the search field
          And "Admin" clicks on project name "<ProjectName>"
          # And "Admin" navigate to dashboard section
          # And "admin" moves to the dashboard frame
          # Then "Admin" verifies that the widget "Top 10 Alerts" is available in the dashboard
          # And "Admin" gets alert name from Top Alerts
          # When "Admin" comes out of the dashboard frame
          # When "Admin" clicks on Alerts page
          # When "Admin" clicks on advanced filter icon
          # And "Admin" enters in last fields as "<InLast>" and select Duration type "<DurationType>"
          # And "Admin" clicks on apply button
          # # And "admin" selects rows per page as "<No.Of.Rows>"
          # And "admin" enters alert name
          # And "admin" gets the number of "alerts" in alert console page "<AlertName>"
          # And "Admin" navigate to dashboard section
          # And "admin" moves to the dashboard frame
          # Then "Admin" verifies that the widget "Top 10 Alerts" is available in the dashboard
          # And "Admin" verifies Alert count should match in both Top "10" Alerts widget and Alert index

          Examples:
               | ProjectName     | No.Of.Rows | InLast | DurationType | AlertName   |
               | Automation_01M3 | 100        | 14     | Days         | Test Alert1 |
     #2
     # Scenario Outline: ITOPS Dashboard - verify Alert Trend  widget

     #      # When "Admin" clicks on Alerts page
     #      # When "Admin" clicks on advanced filter icon
     #      # And "admin" selects alert state as "<Alert_State>"
     #      # And "Admin" enters in last fields as "<InLast>" and select Duration type "<DurationType>"
     #      # And "Admin" clicks on apply button
     #      # And "admin" selects rows per page as "<No.Of.Rows>"
     #      # And "admin" gets the number of "alerts" in alert console page "<Alert_State>"
     #      And "Admin" navigate to dashboard section
     #      Then "Admin" verifies that the widget "Alert Trend" is available in the dashboard
     #      When "Admin" comes out of the dashboard frame
     #      # When "Admin" clicks on Alerts page

     #      Examples:
     #           | ProjectName     | No.Of.Rows | InLast | DurationType | Alert_State |
     #           | Btest_RES_Aug30 | 100        | 14     | Days         | Closed      |

     # # 4
     # Scenario Outline: Dasshboard - Alerts-Open vs closed

     #      When "Admin" navigate to dashboard section
     #      And "admin" moves to the dashboard frame
     #      Then "Admin" verifies that the widget "Alerts Clusters - Open Vs Closed" is available in the dashboard
     #      And "Admin" verifies the date filter is "<DateFilter>" by default
     #      And "Admin" verifies the total alert count is "<TotalCount>"
     #      When "Admin" comes out of the dashboard frame
     #      Examples:
     #           | DateFilter   | TotalCount | OpenClusterCount | ClosedClusterCount | AlertState | AlertName |
     #           | last 14 days | 14         | 6                | 8                  | Closed     | Closed    |













     #5
     Scenario Outline: Dasshboard - Open vs closed(Top 10 alerts)
          When "Admin" navigate to dashboard section
          And "admin" moves to the dashboard frame
          Then "Admin" verifies that the widget "Open vs closed(Top 10 alerts)" is available in the dashboard
          When "Admin" comes out of the dashboard frame
          Examples:
               | Severity | source     |
               | Critical | Solarwinds |

     #6
     Scenario Outline: Dashboard - Mean time to repair

          When "Admin" navigate to dashboard section
          And "admin" moves to the dashboard frame
          Then "Admin" verifies that the widget "Mean Time To Repair" is available in the dashboard
          And "Admin" verifies the date filter is "last 14 days" by default
          And "Admin" X axis value must be date fields
          And "Admin" Y axis values left side incidents
          And "Admin" Y Axis values right side average time
          And "Admin" only the selected severity and source data must be available in the chart
          When "Admin" comes out of the dashboard frame
          Examples:
               | Severity | source     |
               | Critical | Solarwinds |
     # #8
     Scenario: Dashboard -Resolution SLA

          When "Admin" navigate to dashboard section
          And "admin" moves to the dashboard frame
          Then "Admin" verifies that the widget "Resolution SLA" is available in the dashboard
          And "Admin" verifies the date filter is "last 14 days" by default
          And "Admin" verifies that Hours selection option is present in the widget
          And "Admin" verifies the dropdown has "1" to "10" numbers
          When "Admin" comes out of the dashboard frame

     Scenario Outline: Dashboard- Source device mapping
          When "Admin" navigate to dashboard section
          And "admin" moves to the dashboard frame
          Then "Admin" verifies that the widget "Source Device Mapping" is available in the dashboard
          And "Admin" verifies the date filter is "last 14 days" by default
          When "Admin" selects a severity as "<Severity>" and source as "<source>" and make sure only data related to that are displayed -open vs closed
          When "Admin" comes out of the dashboard frame

          Examples:
               | Severity | source     |
               | Critical | Solarwinds |

     Scenario Outline: Verify Dashboard widget - Top 10 noise creating devices

          When "Admin" navigate to dashboard section
          And "admin" moves to the dashboard frame
          Then "Admin" verifies that the widget "Top 10 Noise Creating Devices" is available in the dashboard
          And "Admin" Column names should be "Host Name" and "Count"
          And "Admin" Count should be the count of Alerts for each Device from alert index
          When "Admin" selects a severity as "<Severity>" and source as "<source>" and make sure only data related to that are displayed -open vs closed
          When "Admin" comes out of the dashboard frame
          Examples:
               | Severity | source     |
               | Critical | Solarwinds |
     Scenario Outline: Verify Dashboard widget - Alert Pattern

          When "Admin" navigate to dashboard section
          And "admin" moves to the dashboard frame
          Then "Admin" verifies that the widget "Alert Pattern" is available in the dashboard
          When "Admin" selects a severity as "<Severity>" and source as "<source>" and make sure only data related to that are displayed -open vs closed
          And "Admin" selects date more than one month
          Then "Admin" verifies Date should be on X axis and Alert names on Y axis.
          And "Admin" verifies Top5 alert names from each day should be shown on Y axis
          When "Admin" comes out of the dashboard frame
          Examples:
               | Severity | source     |
               | Critical | Solarwinds |