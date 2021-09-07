@CreateQueueChannel_IE @ITOps_Milestone_1 @QueueChannel
Feature: Create Queue Channel with Itops IE role

Feature Description Using post method to API we generate Bearer Token

        Scenario Outline: Create Queue Channel
             When "IE" with Username as "<Username>", Password as "<Password>", Creates Queue Channel with channelName as "<channelName>", for the project "<projectName>" with projectId "<projectId>"
        Examples:
                  | Username | Password | channelName | projectId | projectName   |
                  | Itops_IE | qa123    | Channel800  | 1518      | Automation_M3 |


        Scenario Outline: Verify Queue Channel creation
             When "IE" navigates to ITOps home page
              And "IE" enters project name as "<projectName>" in the search field
              And "IE" clicks dot menu icon
              And "IE" clicks edit Project
              And "IE" clicks on channel configuration
             Then new Queue channel must be available in Channel configuration page
             
        Examples:
                  | UserName | Password | projectName   |
                  | Itops_IE | qa123    | Automation_M3 |