@CreateQueueChannel_Admin @ITOps_Milestone_1 @QueueChannel
Feature: Create Queue Channel with Itops Admin role

     Scenario Outline: Create Queue Channel
          When "Admin" with Username as "<Username>", Password as "<Password>", Creates Queue Channel with channelName as "<channelName>", for the project "<projectName>" with projectId "<projectId>"
          Examples:
               | Username        | Password | channelName | projectId | projectName   |
               | Itops_admin_new | qa123    | Channel600  | 1518      | Automation_M3 |

     Scenario Outline: Verify Queue Channel
          When "admin" navigates to ust home page
          And "Admin" enters project name as "<projectName>" in the search field
          And "Admin" clicks dot menu icon
          And "Admin" clicks edit Project
          And "Admin" clicks on channel configuration
          Then new Queue channel must be available in Channel configuration page
          Examples:
               | UserName    | Password | projectName   |
               | itops_admin | qa123    | Automation_M3 |

