@AdvancedFilter  @ITOps_Admin @Regression
Feature:  Advanced Filter

     Feature Description: Admin navigates to alert page,
     verifies all the sections are present

     Scenario Outline: Verify the Advanced Filter having 3 sections

          When "Admin" clicks on Alerts page
          And "Admin" clicks on advanced filter icon
          Then "Admin" verifies heading as "<AdvancedFilters>"
          And "Admin" verifies Source and Resource section heading as "<SourceAndResource>"
          And "Admin" verifies State and Status,Date and Time sections heading as "<StateAndStatus>" and "<DataAndTime>"

          Examples:
               | UserName    | Password | ProjectName      | AdvancedFilters  | SourceAndResource    | StateAndStatus   | DataAndTime   |
               | Itops_admin | qa123    | Automation_IB_24 | Advanced Filters | Source and Resources | State and Status | Date and Time |

     Scenario Outline: Verifying ITOps admin is able to apply the Saved Filter again

          When "Admin" enters source as "<Source>" and alert state as "<Alert_State>"
          And "Admin" clicks on apply button
          Then "Admin" verifies user redirects to alert console
          And "Admin" verifies the Data shown is solarwinds and ticketed alerts only "<Source>"
          Examples:
               | Source     | Alert_State |
               | Solarwinds | Ticketed    |

     Scenario Outline: Verify Date Time Filter
          When "Admin" clicks on advanced filter icon
          And "Admin" enters in last fields as "<InLast>" and select Duration type "<DurationType>"
          And "Admin" clicks on apply button
          Then "Admin" verifies user redirects to alert console
          And "Admin" verifies last "10" Days alerts are displayed in the console
          And "Admin" verifies Remove all button is present
          Examples:
               | InLast | DurationType |
               | 10     | Days         |

     Scenario Outline: Verify that ItopsAdmin is able to Verify severity drop down severity conditions which are selected in Advance Filter

          When "ITOps_Admin" clicks on Alerts page
          And "ITOps_Admin" clicks on advanced filter icon
          And "ITOps_Admin" selects alert severity dropdown
          And "ITOps_Admin" selects Warning
          And "ITOps_Admin" clicks on apply button
          And "ITOps_Admin" verifies data shown should be only related to OK and Warning
          Then verifies severity condition in severity dropdown "<severityCondition>"
          And "ITOps_Admin" clicks on remove all button

          Examples:
               | UserName    | Password | ProjectName   | severityCondition |
               | Itops_admin | qa123    | Automation_02 | Warning           |

     Scenario Outline: Verify that ItopsAdmin is able to add some more severity conditions
          When "ITOps_Admin" clicks on Alerts page
          And "ITOps_Admin" clicks on advanced filter icon
          And "ITOps_Admin" selects alert severity dropdown
          And "ITOps_Admin" selects Warning
          And "ITOps_Admin" selects Ok
          And "ITOps_Admin" clicks on apply button
          And "ITOps_Admin" verifies data shown should be only related to OK and Warning
          Then "ITOps_Admin" clicks on filter by severity dropdown
          And "ITOps_Admin" selects Warning
          And "ITOps_Admin" clicks on remove all button

          Examples:
               | severityCondition |
               | Warning           |

     Scenario Outline: Verify that ItopsAdmin is able to remove severity conditions
          When "ITOps_Admin" clicks on Alerts page
          And "ITOps_Admin" clicks on advanced filter icon
          And "ITOps_Admin" selects alert severity dropdown
          And "ITOps_Admin" selects Warning
          And "ITOps_Admin" selects Ok
          And "ITOps_Admin" clicks on apply button
          And "ITOps_Admin" verifies data shown should be only related to OK and Warning
          Then "ITOps_Admin" deletes the warning severity condition from alert console
          And "ITOps_Admin" deletes the ok severity condition from alert console
          Examples:
               | severityCondition |
               | Warning           |

     Scenario Outline: Verify that ItopsAdmin is able to add some more severity conditions on top of saved filters.
          When "ITOps_Admin" clicks on Alerts page
          And "ITOps_Admin" clicks on advanced filter icon
          And "ITOps_Admin" selects saved filter "<SavedFilter>"
          And "ITOps_Admin" clicks on apply button
          Then "ITOps_Admin" clicks on filter by severity dropdown
          And "ITOps_Admin" selects Warning
          And "ITOps_Admin" clicks on remove all button

          Examples:
               | severityCondition | SavedFilter |
               | Warning           | IB          |

     Scenario Outline: Verify that ItopsAdmin is able to remove severity conditions from saved filters
          When "ITOps_Admin" clicks on Alerts page
          And "ITOps_Admin" clicks on advanced filter icon
          And "ITOps_Admin" selects saved filter "<SavedFilter>"
          And "ITOps_Admin" clicks on apply button
          And "ITOps_Admin" deletes the solarwinds condition from alert console
          Then "ITOps_Admin" verifies solarwinds filter is not visible
          And "ITOps_Admin" clicks on remove all button
          Examples:
               | SavedFilter |
               | IB          |
     Scenario Outline: Verify user is able to perform search operations on the filter conditions which we selected
          When "ITOps_Admin" clicks on Alerts page
          And "ITOps_Admin" clicks on advanced filter icon
          And "ITOps_Admin" selects alert severity dropdown
          And "ITOps_Admin" selects Warning
          And "ITOps_Admin" selects Information
          And "ITOps_Admin" clicks on apply button
          And "ITOps_Admin" searches alert condition "<alertName>"
          And "ITOps_Admin" clicks on remove all button

          Examples:
               | SavedFilter | alertName  |
               | IB          | Solarwinds |

     Scenario Outline: Verify user is able to perform search operations on entire alert console after removing filters
          When "ITOps_Admin" clicks on Alerts page
          And "ITOps_Admin" clicks on advanced filter icon
          And "ITOps_Admin" selects alert severity dropdown
          And "ITOps_Admin" selects Warning
          And "ITOps_Admin" selects Information
          And "ITOps_Admin" clicks on apply button
          And "ITOps_Admin" clicks on remove all button
          And "ITOps_Admin" searches alert condition "<alertName>"

          Examples:
               | SavedFilter | alertName  |
               | IB          | Solarwinds |

     Scenario Outline: Verify when user applied Saved filter and some more severity conditions and navigated to other page and came back, only saved filter exist
          When "ITOps_Admin" clicks on Alerts page
          And "ITOps_Admin" clicks on advanced filter icon
          And "ITOps_Admin" selects saved filter "<SavedFilter>"
          And "ITOps_Admin" clicks on Mark as default
          Then "ITOps_Admin" clicks on filter by severity dropdown
          And "ITOps_Admin" selects Warning
          And "ITOps_Admin" opens infrastructure page
          And "ITOps_Admin" clicks on Alerts page
          Then "ITOps_Admin" Verifies Warning filter is not applied


          Examples:
               | SelectFilter | SavedFilter |
               | Warning      | IB          |

     Scenario Outline:Verify creating default filter for Alert Console

          And "admin" clicks on Alerts page
          And "Admin" clicks on advanced filter icon
          When "Admin" clicks on Delete icon for "<SavedFilter>" filter
          And "Admin" clicks on Yes on confirmation pop up
          Then "Admin" verifies "<Toaster>" shown
          And "admin" clicks on cancel button in advance filter console

          Examples:
               | UserName    | Password | ProjectName      | SavedFilter | Toaster                      |
               | Itops_admin | qa123    | Automation_IB_24 | IB          | Filter deleted successfully. |