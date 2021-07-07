@CreateQueueChannel
Feature: Create Queue Channel Itops Admin role

    Feature Description Using post method to API we generate Bearer Token

    Scenario Outline: Create Queue Channel
        When Installation Engineer Creates Queue Channel "<Username>", "<Password>", "<channelName>", "<projectId>", "<projectName>"
        Examples:
            | Username        | Password | channelName   | projectId | projectName |
            | Itops_admin_new | qa123    | TestIEChannel | 879       | ProjectTeam |


    Scenario Outline: Verify Queue Channel creation
        Given ITOps Admin is in the home page, "<UserName>", "<Password>"
        When Installation Engineer click dotmenu icon "<ProjectName>"
        When Installation Engineer click editProject
        When Installation Engineer clicks on channel configuration
        Then new Queue channel must be available in Channel configuration page "<QueueChannelName>"
        And click on logout button
        Examples:
            | UserName | Password | QueueChannelName | ProjectName |
            | Itops_IE | qa123    | TestIEChannel    | ProjectTeam |