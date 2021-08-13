@CreateQueueChannel_IE  @ITOps_IE @Regression

Feature: Create Queue Channel with Itops IE role

Feature Description Using post method to API we generate Bearer Token

        Scenario Outline: Create Queue Channel
             When "ITOpsIE" with Username as "<Username>", Password as "<Password>", Creates Queue Channel with channelName as "<channelName>", for the project "<projectName>" with projectId "<projectId>"
        Examples:
                  | Username        | Password | channelName    | projectId | projectName   |
                  | Itops_admin_new | qa123    | TestIEChannell | 978       | Automation_02 |

        Scenario Outline: Verify Queue Channel creation
             When "ITOpsIE" enters project name as "<projectName>" in the search field
             When "ITOpsIE" clicks dot menu icon
             When "ITOpsIE" clicks edit Project
             When "ITOpsIE" clicks on channel configuration
             Then new Queue channel must be available in Channel configuration page        
        Examples:
                  | UserName | Password | projectName   |
                  | Itops_IE | qa123    | Automation_02 |