@ShortDescriptionOfTickets  @ITOps_Milestone_3 @ITOps_Admin

Feature: Verifying Short Description Of Tickets

    Scenario Outline: Verify Short description of tickets created for SW with alerts having AlertMessage

        When "Admin" sends "3" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<ResourceName>"

        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name in project search field and click on enter
        And "Admin" clicks on project name

        And "admin" clicks on Alerts page
        And "Admin" enters "ResourceName" and clicks on enter "<ResourceName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson  | ResourceName    |
            | Automation_01M3 | Alert1    | 2    | Solarwinds  | QueueChannel | GBLNGS-05A-SSC1 |


    Scenario Outline: Verify Short description of tickets created for SW with alerts having no AlertMessage

        When "Admin" sends "3" new "solarwinds" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<ResourceName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "ResourceName" and clicks on enter "<ResourceName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson        | ResourceName          |
            | Automation_01M3 | Alert1    | 2    | Solarwinds  | AlertWithNoMessage | CGBSLO39-6120-SDWAN-1 |

    Scenario Outline: Verify Short description of tickets created for Verba with alerts having AlertMessage

        When "Admin" sends "3" new "Verba" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<ResourceName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "ResourceName" and clicks on enter "<ResourceName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson     | ResourceName          |
            | Automation_01M3 | Alert1    | 2    | VerbaNew    | VerbaWitMessage | CGBSLO39-6120-SDWAN-2 |

    Scenario Outline: Verify Short description of tickets created for Verba with alerts having no AlertMessage

        When "Admin" sends "3" new "Verba" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<ResourceName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "ResourceName" and clicks on enter "<ResourceName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson       | ResourceName    |
            | Automation_01M3 | Alert1    | 2    | VerbaNew    | VerbaWitNoMessage | ZACTHS-00B-SUA1 |

    Scenario Outline: Verify Short description of tickets created for Forescout with alerts having AlertMessage and IP

        When "Admin" sends "3" new "Forescout" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<ResourceName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "ResourceName" and clicks on enter "<ResourceName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson               | ResourceName    |
            | Automation_01M3 | Alert1    | 2    | Forescout   | ForescoutWithMessageandIP | ZACTHS-03A-SSA2 |

    Scenario Outline: Verify Short description of tickets created for Forescout with alerts having no AlertMessage and no IP

        When "Admin" sends "3" new "Forescout" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<ResourceName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "ResourceName" and clicks on enter "<ResourceName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson                   | ResourceName    |
            | Automation_01M3 | Alert1    | 2    | Forescout   | ForescoutWithNoMessageandNoIP | ZACTHS-03A-SSC1 |

    Scenario Outline: Verify Short description of tickets created for Forescout with alerts having no AlertMessage and IP

        When "Admin" sends "3" new "Forescout" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<ResourceName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "ResourceName" and clicks on enter "<ResourceName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson                 | ResourceName    |
            | Automation_01M3 | Alert1    | 2    | Forescout   | ForescoutWithNoMessageandIP | ZAELAS-00A-FPA1 |

    Scenario Outline: Verify Short description of tickets created for Forescout with alerts having AlertMessage and no IP

        When "Admin" sends "3" new "Forescout" alerts with "<ProjectName>", "<ChannelName>", "<channelJson>", "<ResourceName>"
        And "admin" clicks on Alerts page
        And "Admin" enters "ResourceName" and clicks on enter "<ResourceName>"
        And "Admin" gets the ticket number
        And "Admin" clicks on the ticket number
        And "Admin" gets the short description
        Given User verifies short description in service now
        And "Admin" verifies the short description

        Examples:
            | ProjectName     | AlertName | size | ChannelName | channelJson                 | ResourceName    |
            | Automation_01M3 | Alert1    | 2    | Forescout   | ForescoutWithMessageandNoIP | GBSLBA-00A-SSC2 |
