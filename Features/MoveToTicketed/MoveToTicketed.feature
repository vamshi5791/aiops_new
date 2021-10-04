@MoveToTicketed  @ITOps_Milestone_3 @ITOps_Admin

Feature: Alerts moved to ticketed

    Scenario Outline: 158-161 Alerts moved to Acknowledged

        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "admin" clicks on project name
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  |
            | Automation_01M3 | Alert1    | 2    | Solarwinds  | QueueChannel |


    Scenario Outline: Alerts moved to Ticketed

        When "Admin" sends "1" "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"
        And Admin click on state
        And Admin verifies Hold state


        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  |
            | Automation_01M3 | Alert1    | 3    | Solarwinds  | QueueChannel |


    Scenario Outline: Verify Admin able to push one more alert and verify the cluster size

        When "Admin" sends "1" "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"


        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  |
            | Automation_01M3 | Alert1    | 4    | Solarwinds  | QueueChannel |


    Scenario Outline: 161 Verify Admin able to push one more similar alert after 2 minutes

        When "Admin" sends "1" "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"


        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  |
            | Automation_01M3 | Alert1    | 5    | Solarwinds  | QueueChannel |


    Scenario Outline: 162-163 Verify Admin able to push one recovery alert and 2 acknowledge alert within 30 mins

        When "Admin" sends "1" new "Recovery" alerts with "<ProjectName>", "<ChannelName>", "<RecoveryChannelJson>"
        When "Admin" sends "2" "Solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<SolarwindsChannelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"

        Examples:
            | ProjectName     | AlertName | size | ChannelName | SolarwindsChannelJson | RecoveryChannelJson |
            | Automation_01M3 | Alert1    | 3    | Solarwinds  | QueueChannel          | RecoveryPolicy      |

    Scenario Outline: 163 Verify Admin able to push one more acknowledge alert within 30 mins

        When "Admin" sends "1" "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"
        And Admin click on state
        And Admin verifies Hold state

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  |
            | Automation_01M3 | Alert1    | 4    | Solarwinds  | QueueChannel |


    Scenario Outline: 164 Verify sending 2 alerts first and another alert after 2 minutes


        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"
        When "Admin" sends "1" "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<NewClusterSize>"


        Examples:
            | ProjectName     | AlertName | size | NewClusterSize | ChannelName | channelJson  |
            | Automation_01M3 | Alert1    | 2    | 3              | Solarwinds  | QueueChannel |


    Scenario Outline: 165 Acknowledged to ticketed - Ticket processing


        When "Admin" sends "2" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"
        When "Admin" sends "3" "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<NewClusterSize>"
        And Admin click on state
        And "Admin" clicks on "Hold" button


        Examples:
            | ProjectName     | AlertName | size | NewClusterSize | ChannelName | channelJson  |
            | Automation_01M3 | Alert1    | 2    | 3              | Solarwinds  | QueueChannel |


    Scenario Outline: 166 Acknowledged to ticketed - Ticket processing


        When "Admin" sends "3" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"
        And Admin click on state
        And "Admin" clicks on "Assign" button

        Examples:
            | ProjectName     | AlertName | size |
            | Automation_01M3 | Alert1    | 3    |

    Scenario Outline: 167-169 Acknowledged to ticketed- with no time frame

        When "Admin" sends "1" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"
        And Admin click on state
        And Admin verifies Acknowledge state

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  |
            | Automation_01M3 | Alert1    | 1    | Solarwinds  | QueueChannel |

    Scenario Outline: 168 Acknowledged to ticketed- with no time frame

        When "Admin" sends "2" "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"
        And Admin click on state
        And Admin verifies Hold state

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  |
            | Automation_01M3 | Alert1    | 3    | Solarwinds  | QueueChannel |



    Scenario Outline: 169 Acknowledged to ticketed- with no time frame


        When "Admin" sends "1" "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>"
        And "admin" clicks on Alerts page
        And verify cluster size must be "<size>"


        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  |
            | Automation_01M3 | Alert1    | 4    | Solarwinds  | QueueChannel |


