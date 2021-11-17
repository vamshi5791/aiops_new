@DefaultTemplateForTicketCreateAdmin @Regression

Feature: Default template for ticket create

    Scenario Outline: Make sure that ticket creation happens even  if only default template is present in the project

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "Node Name" and clicks on enter "<NodeName>"
        Then "admin" verifies created ticket in alert console
        When "Admin" sends "3" new "verba" alerts with "<ProjectName>", "<VerbaChannelName>", "<VerbaChannelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "admin" enters "Node Name" and clicks on enter "<NodeName>"

        #Split and verify the ticket creation
        And "admin" clicks on the cluster count for the ticketed alert from previous step
        And "Admin" selects "1" alert checkbox from pop up
        #And "Admin" selects "2" alert checkbox from pop up
        And "Admin" selects create ticket from pop up
        And "Admin" clicks on confirm
        Then "Admin" verifies if "<SuccessMessage>" message is displayed

        Then "admin" verifies created ticket in alert console
        Examples:
            | ProjectName    | ChannelName | channelJson  | NodeName        | VerbaChannelName | VerbaChannelJson  | VerbaNodeName   |
            | Auto_01Resolve | Solarwinds  | QueueChannel | GBLNGS-08A-SUA2 | VerbaNew         | VerbaWitNoMessage | AUSYGR-00A-SSC2 |


    Scenario Outline: Make sure that ticket creeation occurss aftere edit and saving the default template

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"

        When "Admin" sends "1" new "Forescout" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<FirstResourceName>"
        And "admin" clicks on Alerts page
        And "admin" enters "Node Name" and clicks on enter "<FirstResourceName>"
        Then "admin" verifies created ticket in alert console

        Then "admin" Edit the default template and change the assignment group "<assignment group_Id>"

        When "Admin" sends "1" new "Forescout" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<SecondResourceName>"

        And "admin" clicks on Alerts page
        And "admin" enters "Node Name" and clicks on enter "<SecondResourceName>"
        Then "admin" verifies created ticket in alert console

        Examples:
            | ProjectName    | ChannelName | channelJson               | FirstResourceName | SecondResourceName | assignment group_Id              |
            | Auto_01Resolve | Forescout   | ForescoutWithMessageandIP | ZACTHS-03A-SSA1   | AUSYCT-28A-FPA1    | ee199611db12e4104d2e62cb139619ee |