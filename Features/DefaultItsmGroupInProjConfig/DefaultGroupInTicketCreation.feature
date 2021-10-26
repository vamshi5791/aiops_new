@DefaultAssignmentGroup @itops_admin @Regression

Feature: Usage of default assignment group in ITSM configurations

    Feature Description: The default gorup details in the ITSM configuration is used for
    ticket creation when no assignment group is present in the template

    Scenario Outline: Add default assignment group in the Project configuration ITSM tab

        When "admin" navigates to ITOps home page
        And "Admin" enters project name in project search field
        And "Admin" clicks dot menu icon
        And "Admin" clicks edit Project
        And "Admin" should navigate to project configuration page
        And "Admin" click on the ITSM configuration
        And "Admin" enter the "<DefaultGroupId>" in the default assignment group textbox
        And "Admin" clicks on the save button in the ITSM configurations Tab
        Then Success message "<Toaster>" must be shown for "ITSM Configuration"

        Examples:
            | DefaultGroupId                   | Toaster                        |
            | 00312f9a37f102007f0565e2b3990e3f | Project Configurations Updated |


    @UpdateProjectInstallation
    Scenario Outline: Update project
        When "Admin" is in project configuration page
        And "Admin" click on Add user tab
        And "Admin" clicks on update Install button
        Then "<ProjectName>" must be in "<ProjectStatus>" state in Project Listing Page

        Examples:
            | ProjectStatus |ProjectName     |
            | Ready         |AIOPS_Auto_1|

    @PushAlertForDefaultGroupTest

    Scenario Outline: Pushing Alerts through RabbitMQ

        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        And "admin" clicks on Alerts page
        And "admin" enters "AlertName" and clicks on enter "<AlertName>"
        Then "admin" verifies pushed alert in alert console with "<AlertName>"

        Examples:
            | ProjectName  | AlertName | ChannelName          | channelJson  | NodeName        |
            | AIOPS_Auto_1 | Alert1    | SolarwindsQueue_1650 | QueueChannel | NAWHTH-01A-FPA1 | 

    @VerifyTheAssignedroupInTicketDetailsPage

    Scenario Outline:Verify the assigned group is the default group mentioned in ITSM configurations

        When "admin" clicks on Alerts page
        And  "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" clicks on the ticket number
        Then "Admin" verifies Ticket should be assigned to group "<Group>"

        Examples:
            | Group             | NodeName        |
            | UST - LCA Queries | NAWHTH-01A-FPA1 |

    @ResolveTicketAfterVerification
    Scenario Outline: Resolve the verified ticket manually

        When "Admin" clicks on status tab drop down
        And "Admin" selects resolve from dropdown
        And "Admin" enters the closure note "<ClosureNote>"
        Then "Admin" click on resolve button

        Examples:
            | ClosureNote                    |
            | Manual close - Automation Test |
    @PushAlertForTemplateGroupTest

    Scenario Outline: Pushing alerts through RabbitMQ; To verify that if Assignment group is present in the template it must be used for ticket creation.

        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "AlertName" and clicks on enter "<AlertName>"
        Then "admin" verifies pushed alert in alert console with "<AlertName>"

        Examples:
            | ProjectName  | AlertName | ChannelName          | channelJson       | NodeName        |
            | AIOPS_Auto_1 | Alert2    | SolarwindsQueue_1650 | TemplateGroupJson | CNHKGG-00A-SSC1 |

    @VerifyTheAssignedroupInTicketDetailsPageAsTemplateGroup

    Scenario Outline:Verify the assigned group is the group mentioned in ticket template

        When "admin" clicks on Alerts page
        And  "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" clicks on the ticket number
        Then "Admin" verifies Ticket should be assigned to group "<Group>"

        Examples:
            | Group                             | NodeName        |
            | NinetyOne Infrastructure Networks | CNHKGG-00A-SSC1 |

    @ResolveTicketAfterVerification
    Scenario Outline: Resolve the verified ticket manually

        When "Admin" clicks on status tab drop down
        And "Admin" selects resolve from dropdown
        And "Admin" enters the closure note "<ClosureNote>"
        Then "Admin" click on resolve button

        Examples:
            | ClosureNote                    |
            | Manual close - Automation Test |