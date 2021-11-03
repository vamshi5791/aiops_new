@CapturingUserIdAndGroupId

Feature: Capturing User Id and Group Id

    Scenario Outline: Verify Assigning tickets from alert console to individual in ITOps

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number generated

        Then Admin verifies userID is stored in alert store "<userID>"
        Then Admin verifies groupID is stored in alert store "<groupID>"
        Then Admin verifies user name is stored in alert store "<userName>"
        Then Admin verifies group name is stored in alert store "<groupName>"

        Then Admin verifies userID is stored in ticket store "<userID>"
        Then Admin verifies groupID is stored in ticket store "<groupID>"
        Then Admin verifies user name is stored in ticket store "<userName>"
        Then Admin verifies group name is stored in ticket store "<groupName>"


        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName        | userID                  | groupID                           | userName                | groupName                         |
            | Automation_01M3 | Solarwinds  | QueueChannel | AUSYCT-28A-SBC1 | ITOps Virtual  Engineer | NinetyOne Infrastructure Networks | ITOps Virtual  Engineer | NinetyOne Infrastructure Networks |


    Scenario Outline: Verify that 'reassignement group name' is displayed in the itops ticket details page after reassignemnt scenario

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number generated

        Then Admin verifies userID is stored in alert store "<userID>"
        Then Admin verifies groupID is stored in alert store "<groupID>"
        Then Admin verifies user name is stored in alert store "<userName>"
        Then Admin verifies group name is stored in alert store "<groupName>"


        Then Admin verifies userID is stored in ticket store "<userID>"
        Then Admin verifies groupID is stored in ticket store "<groupID>"
        Then Admin verifies user name is stored in ticket store "<userName>"
        Then Admin verifies group name is stored in ticket store "<groupName>"
        # Then Admin verifies ticket status in alert store is "Ticketed"
        # When "admin" navigates to Tickets page
        # And "admin" enters "Ticket number" and clicks on enter "<NodeName>"

        # Then Admin verifies ticket status in ticket store is "Opened"

        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName        | userID                  | groupID                           | userName                | groupName                         |
            | Automation_01M3 | Solarwinds  | QueueChannel | AUSYCT-28A-SBC1 | ITOps Virtual  Engineer | NinetyOne Infrastructure Networks | ITOps Virtual  Engineer | NinetyOne Infrastructure Networks |


    Scenario Outline: Verifying the initial assignment with user id is working fine

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number generated
        When "Admin" verifies new ticket is assigned to group "<Assignment_group_id>"
        And "Admin" verifies new ticket is assigned to "<Assigned_to_id>"

        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName        | Assigned_to_id          | Assignment_group_id               |
            | Automation_01M3 | Solarwinds  | QueueChannel | AUSYCT-28A-SBC1 | ITOps Virtual  Engineer | NinetyOne Infrastructure Networks |


    Scenario Outline: Performing Split scenario and verifying group id is working fine

        When "Admin" sends "5" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number generated
        Then Admin verifies userID is stored in alert store "<userID>"
        Then Admin verifies groupID is stored in alert store "<groupID>"
        Then Admin verifies user name is stored in alert store "<userName>"
        Then Admin verifies group name is stored in alert store "<groupName>"
        Then Admin verifies userID is stored in ticket store "<userID>"
        Then Admin verifies groupID is stored in ticket store "<groupID>"
        Then Admin verifies user name is stored in ticket store "<userName>"
        Then Admin verifies group name is stored in ticket store "<groupName>"
        And "admin" clicks on the cluster count for the ticketed alert from previous step
        And "Admin" selects first alert from pop up
        And "Admin" selects second alert from pop up
        And "Admin" selects create ticket from pop up
        And "Admin" clicks on confirm
        Then "Admin" verifies if "<SuccessMessage>" message is displayed
        And "Admin" clicks on the ticket number
        Then "Admin" verifies Ticket should be assigned to group "<Group>"


        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName      | userID                  | groupID                           | userName                | groupName                         | Group        | SuccessMessage          |
            | Automation_01M3 | Solarwinds  | QueueChannel | IAMLEMSPRDDC1 | ITOps Virtual  Engineer | NinetyOne Infrastructure Networks | ITOps Virtual  Engineer | NinetyOne Infrastructure Networks | ITOpsTesting | Split cluster completed |


    Scenario Outline: Reassignment ticket from ServiceNow and verify the index

        When "Admin" sends "3" new "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<NodeName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "NodeName" and clicks on enter "<NodeName>"
        And "Admin" gets the ticket number generated
        And "Admin" changes the assign to and assign to group from ITSM "<AssignTo>","<AssignToGroup>"

        Examples:
            | ProjectName     | ChannelName | channelJson  | NodeName        | userID | groupID | userName                | groupName                         | AssignTo     | AssignToGroup |
            | Automation_01M3 | Solarwinds  | QueueChannel | AUSYCT-28A-SBC1 | ed     | de      | ITOps Virtual  Engineer | NinetyOne Infrastructure Networks | Manju Harish | ITOpsDev      |
