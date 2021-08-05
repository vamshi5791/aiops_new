@CreateQueueChannel_Admin @ITOps_Milestone_1 @QueueChannel
Feature: Create Queue Channel with Itops Admin role

Feature Description Using post method to API we generate Bearer Token

        Scenario Outline: Create Queue Channel
             When "Admin" Creates Queue Channel "<Username>", "<Password>", "<channelName>", "<projectId>", "<projectName>"
        Examples:
                  | Username        | Password | channelName    | projectId | projectName   |
                  | Itops_admin_new | qa123    | Automation_009 | 978       | Automation_02 |

        Scenario Outline: Verify Queue Channel creation
            Given ITOps "Admin" with username and password as "<UserName>", "<Password>" is in the home page
             When "IE" enters project name as "<projectName>" in the search field
             When "Admin" clicks dot menu icon
             When "Admin" clicks edit Project
             When "Admin" clicks on channel configuration
             Then new Queue channel must be available in Channel configuration page "<QueueChannelName>"
              And "admin" clicks on logout button
        Examples:
                  | UserName    | Password | QueueChannelName | projectName   |
                  | itops_admin | qa123    | Automation_009   | Automation_02 |

