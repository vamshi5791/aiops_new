@AdvancedFiltersITOpsAdmin @ITOps_Milestone_2

Feature: Verifying Advanced Filters for Admin role

Feature Description : Verifying Advanced Filters for Admin role

        Scenario Outline: Verify that Itops_admin is able to Verify severity drop down severity conditions which are selected in advance filter


            Given ITOps "ITOps_Admin" with username and password as "<UserName>", "<Password>" is in the home page
             When "ITOps_Admin" enters project name as "<ProjectName>" in the search field
              And "ITOps_Admin" clicks on project name "<ProjectName>"
              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon
             When "ITOps_Admin" selects alert severity dropdown
              And "ITOps_Admin" selects Warning
              And "ITOps_Admin" clicks on apply button
             Then verifies severity condition in severity dropdown "<severityCondition>"
              And "ITOps_Admin" clicks on remove all button

        Examples:
                  | UserName    | Password | ProjectName   | severityCondition |
                  | Itops_admin | qa123    | Automation_02 | Warning           |

        Scenario Outline: Verify that Itops_admin is able to add some more severity conditions
              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon

             When "ITOps_Admin" selects alert severity dropdown
              And "ITOps_Admin" selects Warning
              And "ITOps_Admin" selects Ok
              And "ITOps_Admin" clicks on apply button
             Then "ITOps_Admin" clicks on filter by severity dropdown
             Then "ITOps_Admin" selects Warning
              And "ITOps_Admin" clicks on remove all button

        Examples:
                  | severityCondition |
                  | Warning           |

        Scenario Outline: Verify that Itops_admin is able to remove severity conditions
              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon

             When "ITOps_Admin" selects alert severity dropdown
              And "ITOps_Admin" selects Warning
              And "ITOps_Admin" selects Ok
              And "ITOps_Admin" clicks on apply button
             Then "ITOps_Admin" deletes the warning severity condition from alert console
             Then "ITOps_Admin" deletes the ok severity condition from alert console
        Examples:
                  | severityCondition |
                  | Warning           |

        Scenario Outline: Verify that Itops_admin is able to add some more severity conditions on top of saved filters.
              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon

              And "ITOps_Admin" selects saved filter "<SavedFilter>"
              And "ITOps_Admin" clicks on apply button
             Then "ITOps_Admin" clicks on filter by severity dropdown
              And "ITOps_Admin" selects Warning
              And "ITOps_Admin" clicks on remove all button

        Examples:
                  | severityCondition | SavedFilter |
                  | Warning           | IB          |

        Scenario Outline: Verify that Itops_admin is able to remove severity conditions from saved filters
              And "ITOps_Admin" clicks on Alerts page
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
              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon

             When "ITOps_Admin" selects alert severity dropdown
              And "ITOps_Admin" selects Warning
              And "ITOps_Admin" selects Information
              And "ITOps_Admin" clicks on apply button
              And "ITOps_Admin" searches alert condition "<alertName>"
              And "ITOps_Admin" clicks on remove all button

        Examples:
                  | SavedFilter | alertName  |
                  | IB          | Solarwinds |

        Scenario Outline: Verify user is able to perform search operations on entire alert console after removing filters
              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon

             When "ITOps_Admin" selects alert severity dropdown
              And "ITOps_Admin" selects Warning
              And "ITOps_Admin" selects Information
              And "ITOps_Admin" clicks on apply button
              And "ITOps_Admin" clicks on remove all button
              And "ITOps_Admin" searches alert condition "<alertName>"

        Examples:
                  | SavedFilter | alertName  |
                  | IB          | Solarwinds |

        Scenario Outline: Verify when user applied Saved filter and some more severity conditions and navigated to other page and came back, only saved filter exist
              And "ITOps_Admin" clicks on Alerts page
              And "ITOps_Admin" clicks on advanced filter icon
              And "ITOps_Admin" selects saved filter "<SavedFilter>"
              And "ITOps_Admin" clicks on Mark as default
             Then "ITOps_Admin" clicks on filter by severity dropdown
              And "ITOps_Admin" selects Warning
              And "ITOps_Admin" opens infrastructure page
              And "ITOps_Admin" clicks on Alerts page
             Then "ITOps_Admin" Verifies Warning filter is not applied
              And "ITOps_Admin" clicks on logout button
 
        Examples:
                  | SelectFilter | SavedFilter |
                  | Warning      | IB          |