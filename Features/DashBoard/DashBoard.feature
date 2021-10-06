@Dashboard @ITOps_Admin @Regression

Feature:  Dashboard
     Scenario Outline: ITOPS Dashboard - verify Top 10 Alerts widget

          When "ITOps_Admin" navigates to ITOps home page
          And "Admin" enters project name in project search field and click on enter
          And "admin" clicks on project name
          And "Admin" navigate to dashboard section
          And "admin" moves to the dashboard frame
          Then "Admin" verifies that the widget "Top 10 Alerts" is available in the dashboard
          And "Admin" gets alert name from Top Alerts
          When "Admin" comes out of the dashboard frame
          When "Admin" clicks on Alerts page
          When "Admin" clicks on advanced filter icon
          And "Admin" enters in last fields as "<InLast>" and select Duration type "<DurationType>"
          And "Admin" clicks on apply button
          And "admin" enters alert name
          And "admin" gets the number of "alerts" in alert console page "<AlertName>"
          And "Admin" navigate to dashboard section
          And "admin" moves to the dashboard frame
          Then "Admin" verifies that the widget "Top 10 Alerts" is available in the dashboard
          And "Admin" verifies Alert count should match in both Top "10" Alerts widget and Alert index
          When "Admin" comes out of the dashboard frame
          Examples:
               | No.Of.Rows | InLast | DurationType | AlertName   |
               | 100        | 14     | Days         | Test Alert1 |
     Scenario Outline: ITOPS Dashboard - verify Open tickets in service now  widget

          When "Admin" navigate to dashboard section
          And "admin" moves to the dashboard frame
          Then "Admin" verifies that the widget "Alert Trend" is available in the dashboard
          And "Admin" verifies the total open alerts count using project id as "<ProjectID>"
          When "Admin" comes out of the dashboard frame

          Examples:
               | ProjectID |
               | 1519      |
     Scenario Outline: ITOPS Dashboard - verify Alert Trend widget

          When "Admin" navigate to dashboard section
          And "admin" moves to the dashboard frame
          Then "Admin" verifies that the widget "Alert Trend" is available in the dashboard
          When "Admin" comes out of the dashboard frame

          Examples:
               | ProjectName     | No.Of.Rows | InLast | DurationType | Alert_State |
               | Btest_RES_Aug30 | 100        | 14     | Days         | Closed      |

     # Scenario Outline: Dasshboard - Alerts-Open vs closed

     #      When "Admin" navigate to dashboard section
     #      And "admin" moves to the dashboard frame
     #      Then "Admin" verifies that the widget "Alerts Clusters - Open Vs Closed" is available in the dashboard
     #      And "Admin" verifies the date filter is "<DateFilter>" by default
     #      When "Admin" comes out of the dashboard frame
     #      When "Admin" clicks on Alerts page
     #      And "admin" gets the number of "alerts" in alert console page "<AlertName>"
     #      And "Admin" navigate to dashboard section
     #      And "admin" moves to the dashboard frame
     #      And "Admin" verifies the total alert count is "<TotalCount>"
     #      When "Admin" comes out of the dashboard frame
     #      Examples:
     #           | DateFilter   | TotalCount | OpenClusterCount | ClosedClusterCount | AlertState | AlertName |
     #           | last 14 days | 14         | 6                | 8                  | Closed     | Closed    |


     Scenario Outline: Dasshboard - Open vs closed(Top 10 alerts)
          When "Admin" navigate to dashboard section
          And "admin" moves to the dashboard frame
          Then "Admin" verifies that the widget "Open vs closed(Top 10 alerts)" is available in the dashboard
          When "Admin" comes out of the dashboard frame
          Examples:
               | Severity | source     |
               | Critical | Solarwinds |

     Scenario Outline: Dashboard - Mean time to repair

          When "Admin" navigate to dashboard section
          And "admin" moves to the dashboard frame
          Then "Admin" verifies that the widget "Mean Time To Repair" is available in the dashboard
          And "Admin" verifies the date filter is "last 14 days" by default
          And "Admin" X axis value must be date fields
          And "Admin" Y axis values left side incidents
          And "Admin" Y Axis values right side average time
          When "Admin" comes out of the dashboard frame
          Examples:
               | Severity | source     |
               | Critical | Solarwinds |

     Scenario Outline: Dashboard - Mean time to repair- calculation

          When "Admin" navigate to dashboard section
          When "Admin" comes out of the dashboard frame
          Examples:
               | Severity | source     |
               | Critical | Solarwinds |

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
          When "Admin" comes out of the dashboard frame
          Examples:
               | Severity | source     |
               | Critical | Solarwinds |

     Scenario Outline: MTBF calculation for top 5 alerts are shown for each device

          When "Admin" navigate to dashboard section
          And "admin" moves to the dashboard frame
          And "admin" gets device name from the widget
          Then "Admin" clicks on a device name
          And "Admin" verifies Title of popup should be "Alert details of <Device name>"
          And "Admin" verifies left side should include label "MTBF for Top Alerts"
          And "Admin" verifies right side should include label "Total Alerts : <count of total alerts for the selected device>"
          And "Admin" verifies column headings should be "ALERT NAME", "COUNT", "MTBF"
          And "admin" verifies the MTBF calculation result
          When "Admin" comes out of the dashboard frame
          Examples:
               | Severity | source     |
               | Critical | Solarwinds |