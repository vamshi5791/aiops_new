@DefaultTemplateForTicketReassignment @Regression

Feature: Default template for ticket reassignment

    Scenario Outline: Make sure that reassignment is happening with default template for tickets created using default template and custom templates

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"
        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        Then "admin" verifies created ticket number

        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"

        When "Admin" sends "2" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"

        When "admin" clicks on Alerts page
        When "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "admin" clicks on "Group" radio button
        And "admin" selects user from the team member drop down as "<Group>"
        And "admin" clicks on assign button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed

        And Admin click on state
        And "admin" clicks on "Hold" button
        Then "Admin" verifies if "<SuccessMessage>" message is displayed

        And Admin click on state
        And "admin" clicks on "Close" button
        When "admin" enters closure note as "<ClosureNote>" and click on Ok
        Then "Admin" verifies if "<SuccessMessage>" message is displayed


        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName        | VerbaChannelName | VerbaChannelJson  | VerbaNodeName |
            | Automation_01M3 | Solarwinds  | QueueChannel | ZACTHS-03A-SSA1 | VerbaNew         | VerbaWitNoMessage | 123           |



    Scenario Outline: Verify the behavior if no default template is present for reassignment

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"


        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        Then "admin" verifies created ticket number

    Scenario Outline: Verify the behavior if no default template is present for reassignment

        When "Admin" navigates to ITOps home page
        And "Admin" enters "project name" as "<ProjectName>" in project search field and click on enter
        And "Admin" clicks on project name "<ProjectName>"


        When "Admin" sends "1" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        Then "admin" verifies created ticket number














































































