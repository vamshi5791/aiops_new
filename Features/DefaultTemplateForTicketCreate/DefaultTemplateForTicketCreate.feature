@DefaultTemplateForTicketCreate @Regression @itops_admin

Feature: DefaultAndCustomTemplateForTicketCreate

    Feature Description: Make sure that custom template is used for ticket creation even if default template is present

    Scenario Outline: Pushing Alerts through RabbitMQ for custom template usage

        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        And "admin" clicks on Alerts page
        And "admin" enters "AlertName" and clicks on enter "<AlertName>"
        Then "admin" verifies pushed alert in alert console with "<AlertName>"

        Examples:
            | ProjectName  | AlertName | ChannelName          | channelJson                | NodeName        |
            | AIOPS_Auto_1 | Alert3    | SolarwindsQueue_1650 | CreateTicketCustomTemplate | LULUMT-00A-FPA1 |

    @VerifyTheAssignedroupInTicketDetailsPage
    Scenario Outline:Verify the assigned group is the group mentioned in the custom template

        When "admin" clicks on Alerts page
        And  "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" clicks on the ticket number
        Then "Admin" verifies Ticket should be assigned to group "<Group>"

        Examples:
            | Group         | NodeName        |
            | NinetyOne NOC | LULUMT-00A-FPA1 |

   # @ResolveTicketAfterVerification
    Scenario Outline: Resolve the verified ticket manually

        When "Admin" clicks on status tab drop down
        And "Admin" selects resolve from dropdown
        And "Admin" enters the closure note "<ClosureNote>"
        Then "Admin" click on resolve button

        Examples:
            | ClosureNote                    |
            | Manual close - Automation Test |