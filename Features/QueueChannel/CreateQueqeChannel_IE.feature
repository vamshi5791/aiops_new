@CreateQueueChannel_IE @ITOps_Milestone_1 @QueueChannel
Feature: Create Queue Channel with Itops IE role

Feature Description Using post method to API we generate Bearer Token

        Scenario Outline: Create Queue Channel
             When "IE" with Username as "<Username>", Password as "<Password>", Creates Queue Channel with channelName as "<channelName>", for the project "<projectName>" with projectId "<projectId>"
        Examples:
                  | Username        | Password | channelName    | projectId | projectName      |
                  | Itops_admin_new | qa123    | TestIEChannell | 1225      | Automation_IB_16 |


        Scenario Outline: Verify Queue Channel creation
           
             When "IE" enters project name as "<projectName>" in the search field
             When "IE" clicks dot menu icon
             When "IE" clicks edit Project
             When "IE" clicks on channel configuration
             Then new Queue channel must be available in Channel configuration page
             
        Examples:
                  | UserName | Password | projectName      |
                  | Itops_IE | qa123    | Automation_IB_16 |