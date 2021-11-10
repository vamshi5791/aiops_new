@DefaultTemplateForTicketCreateAdmin @Regression

Feature: Default template for ticket create

    Scenario Outline: Make sure that ticket creation happens even  if only default template is present in the project

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "Node Name" and clicks on enter "<NodeName>"
        Then "admin" verifies created ticket number
        When "Admin" sends "3" new "verba" alerts with "<ProjectName>", "<VerbaChannelName>", "<VerbaChannelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "Node Name" and clicks on enter "<NodeName>"
        Then "admin" verifies created ticket number
        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName        | VerbaChannelName | VerbaChannelJson  | VerbaNodeName   |
            | Automation_01M3 | Solarwinds  | QueueChannel | ZACTHS-03A-SSA1 | VerbaNew         | VerbaWitNoMessage | AUSYGR-00A-SSC2 |


    Scenario Outline: Make sure that ticket creeation occurss aftere edit and saving the default template

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"

         When "Admin" sends "3" new "verba" alerts with "<ProjectName>", "<VerbaChannelName>", "<VerbaChannelJson>", "<NodeName>"
       

        And "admin" clicks on Alerts page
        And "admin" enters "Node Name" and clicks on enter "<NodeName>"
        And "admin" clicks on the cluster count for the ticketed alert from previous step
        And "Admin" selects "4" alert checkbox from pop up
        And "Admin" selects "2" alert checkbox from pop up
        And "Admin" selects create ticket from pop up
        And "Admin" clicks on confirm
        Then "Admin" verifies if "<SuccessMessage>" message is displayed

        And "admin" clicks on Alerts page
        And "admin" enters "Node Name" and clicks on enter "<NodeName>"
        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName        | VerbaChannelName | VerbaChannelJson  | VerbaNodeName |
            | Automation_01M3 | Solarwinds  | QueueChannel | ZACTHS-03A-SSA1 | VerbaNew         | VerbaWitNoMessage | 123           |