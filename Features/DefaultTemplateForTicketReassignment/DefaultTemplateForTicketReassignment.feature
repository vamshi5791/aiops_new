@DefaultTemplateForTicketReassignment @Regression

Feature: Default template for ticket reassignment

    Scenario Outline: Make sure that reassignment is happening with default template for tickets created using default template and custom templates

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"
        When "admin" creates "reassignment" template "<TemplateName>" for project id as "<ProjectId>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        Then "admin" verifies created ticket in alert console


        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        Then "admin" verifies created ticket in alert console

        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        Then "admin" verifies created ticket in alert console

        And Admin click on state
        And "admin" clicks on "Hold" button
        Then "Admin" verifies if "<HoldSuccessMessage>" message is displayed
        And "Admin" gets the ticket number
       

        And Admin click on state
        And "admin" clicks on "Close" button
        When "admin" enters closure note as "<ClosureNote>" and click on Ok
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        Then "admin" verifies comments in ITSM resolved by "itops_admin" for "<TicketNumber>"


        Examples:
            | ProjectName    | Group            | ChannelName | channelJson  | NodeName        | VerbaChannelName | VerbaChannelJson  | VerbaNodeName | AssignSuccessMessage          | HoldSuccessMessage            | CloseSuccessMessage           | TemplateName               | ProjectId |
            | Auto_01Resolve | Visibility - UST | Solarwinds  | QueueChannel | ZACTHS-03A-SSA1 | VerbaNew         | VerbaWitNoMessage | 123           | Tickets assigned successfully | Ticket(s) holded successfully | Alerts(s) closed successfully | CustomReassignmentTemplate | 1677      |



    Scenario Outline: Make sure that if a custom template is present it must override the default template for reassignement

        When "admin" creates "reassignment" template "<TemplateName>" for project id as "<ProjectId>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<FirstResourceName>"
        When "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<FirstResourceName>"
        Then "admin" verifies created ticket in alert console
        And "admin" deletes "reassignment" template using template name "<TemplateName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<SecondResourceName>"
        When "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<SecondResourceName>"
        Then "admin" verifies created ticket in alert console
        Examples:
            | ProjectName    | ChannelName | channelJson               | FirstResourceName | SecondResourceName | TemplateName               | ProjectId |
            | Auto_01Resolve | Forescout   | ForescoutWithMessageandIP | ZACTHS-03A-SSA1   | AUSYCT-28A-FPA1    | CustomReassignmentTemplate | 1677      |

    Scenario Outline: Verify the behavior if no default template is present for reassignment

        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<FirstResourceName>"
        When "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        Then "admin" creates "reassignment" template "<TemplateName>" for project id as "<ProjectId>"
        And "admin" deletes "reassignment" template using template name "<TemplateName>"
        Examples:
            | ProjectName    | ChannelName | channelJson               | FirstResourceName | TemplateName               | ProjectId |
            | Auto_01Resolve | Forescout   | ForescoutWithMessageandIP | ZACTHS-03A-SSA1   | CustomReassignmentTemplate | 1677      |

    Scenario Outline: Verify the behavior if default template has no reassignment group mentioned in the reassignment template

        When "Admin" sends "1" new "Forescout" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<FirstResourceName>"
        When "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<FirstResourceName>"
        And "Admin" clicks on the ticket number
        Then "Admin" Verifies after reassignment threshold it should be assigned to the default group mentioned in the project configuration page as "<Group>"
        Examples:
            | ProjectName    | ChannelName | channelJson               | FirstResourceName | Group        |
            | Auto_01Resolve | Forescout   | ForescoutWithMessageandIP | ZACTHS-03A-SSA1   | ITOpsTesting |









































































