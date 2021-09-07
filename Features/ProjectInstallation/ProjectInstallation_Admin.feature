@ProjectInstallation  @ITOps_Admin @Regression

Feature: Project Installation with ITOps Admin role

Feature Description : Once the login is done with ITOps_Admin role,
              Admin must be able to create the project and install it.
     Project must be in ready state in Project Listing page.

        @CreateProject
        Scenario Outline: Project Creation

             When "Admin" navigates to ITOps home page
             When "Admin" clicks on create project button
              And "Admin" enters project name as "<ProjectName>"
              And "Admin" enters description as "<Description>"
              And "Admin" clicks on create button
             Then "<Toaster>" message should be displayed and "Admin" should navigate to project configuration page
        Examples:
                  | UserName    | Password | ProjectName      | Description       | Toaster                     |
                  | Itops_admin | qa123    | Automation_IB_70 | Release1.4Project | Project Created Succesfully |

        @GeneralConfiguration
        Scenario Outline: General Configuration
          # When "Admin" enters Service now hostname as "<ServiceNowHost>"
          # And "Admin" enters Service now Username as "<ServiceNowUserName>"
          # And "Admin" enters Service now Password as "<ServicenowPassword>"
              And "Admin" enters Response SLA Threshold Count as "<ThresholdCount>"
          # And "Admin" enters ITSM Name as "<ITSMName>"
          # And "Admin" enters ITSM Version as "<ITSMVersion>"
          # And "Admin" selects ITSM TimeZone as "<ITSMTimeZone>"
              And "Admin" selects ITOps Flavor as "<ITopsFlavor>"
              And "Admin" clicks on Save button in General Configuration page
             Then Success message "<Toaster>" must be shown for "General Configuration"
        Examples:
                  | ServiceNowHost                       | ServiceNowUserName | ServiceNowPassworde | ThresholdCount | ITSMName    | ITSMVersion | ITSMTimeZone | ITopsFlavor | Toaster                        |
                  | https://ustglobaldev.service-now.com | ustglobal          | 1234                | 01.00          | USTTestITSM | 1.01        | IST          | Smart NOC   | Project Configurations Updated |
        @SchedulerConfiguration
        Scenario Outline: Scheduler Configuration
             When "Admin" clicks on Schedular configuration
              And "Admin" selects Schedule Interval for Correlation as "<Correlation>"
              And "Admin" selects Scheduler Interval for auto closure of flap clusters as "<AutoClosure>"
              And "Admin" select Scheduler Interval for alert analytics as "<AlertAnalytics>"
              And "Admin" select Scheduled interval for Batch Prediction as "<BatchPrediction>"
              And "Admin" clicks on Save button in Scheduler Configuration page
             Then Success message "<Toaster>" must be shown for "Scheduler Configuration"
        Examples:
                  | Correlation    | AutoClosure    | AlertAnalytics | BatchPrediction | Toaster                        |
                  | Every 4 months | Every 3 months | Every 4 months | Every 6 months  | Project Configurations Updated |

        @ErrorResponseConfiguration
        Scenario Outline: Error Response Configuration
             When "Admin" clicks on Error Response Configuration
              And "Admin" enters From Email Account as "<FromEmail>"
              And "Admin" enters From Email Account Password as "<FromEmailAcountPassword>"
              And "Admin" enters To Email Address as "<ToEmailAddress>"
              And "Admin" clicks on Save button in Error Response Configuration page
             Then Success message "<Toaster>" must be shown for "Error Response Configuration"
        Examples:
                  | FromEmail  | Password | ToEmailAddress | Toaster                        |
                  | abc@ib.com | 1234     | def@ib.com     | Project Configurations Updated |
        @SurgeConfiguration
        Scenario Outline: Surge Configuration
             When "Admin" clicks on Surge Configuration
              And "Admin" enters Surge Start Percentile as "<StartPercentile>"
              And "Admin" enters Surge Start Percentile Threshold as "<StartPercentileThreshold>"
              And "Admin" enters Surge End Percentile as "<EndPercentile>"
              And "Admin" enters Surge End Percentile Threshold as "<EndPercentileThreshold>"
              And "Admin" enters Surge Patterns as "<SurgePatterns>"
              And "Admin" enters Surge Pattern Match Threshold as "<SurgePatternMatchThreshold>"
              And "Admin" enters Surge Analytics Interval as "<SurgeAnalyticsInterval>"
              And "Admin" enters Surge First Run Count as "<SurgeFirstRunCount>"
              And "Admin" enters Surge First Run Count Interval as "<SurgeFirstRunCountInterval>"
              And "Admin" clicks on Save button in Surge Configuration page
             Then Success message "<Toaster>" must be shown for "Surge Configuration"
        Examples:
                  | StartPercentile | StartPercentileThreshold | EndPercentile | EndPercentileThreshold | SurgePatterns | SurgePatternMatchThreshold | SurgeAnalyticsInterval | SurgeFirstRunCount | SurgeFirstRunCountInterval | Toaster                        |
                  | 50              | 50                       | 50            | 50                     | 50            | 50                         | 50                     | 50                 | 50                         | Project Configurations Updated |

        @TicketDumpConfiguration
        Scenario Outline: Ticket Dump Configuration
             When "Admin" clicks on Ticket Dump Configuration
              And "Admin" enters Ticket Dump Source Hostname as "<Hostname>"
              And "Admin" enters Ticket Dump Source File Path as "<FilePath>"
              And "Admin" enters Source Username as "<SourceUserName>"
              And "Admin" enters Source Password as "<SourcePassword>"
              And "Admin" enters Ticket Number Column Name in dump file as "<TicketNumberColumnName>"
              And "Admin" enters Work Notes column name in column file as "<WorkNotesColumnName>"
              And "Admin" enters Short Description column name in dump file as "<ShortDescriptionColumnName>"
              And "Admin" enters Category column name in dump file as "<CategoryColumnName>"
              And "Admin" enters Sub Category column name in dump file as "<SubCategoryColumnName>"
              And "Admin" enters Long Description column name in dump file as "<LongDescription>"
              And "Admin" clicks on Save button in Ticket Dump Configuration page
             Then Success message "<Toaster>" must be shown for "Ticket Dump Configuration"
        Examples:
                  | Hostname | FilePath | SourceUserName | SourcePassword | TicketNumberColumnName | WorkNotesColumnName | ShortDescriptionColumnName | CategoryColumnName | SubCategoryColumnName | LongDescription | Toaster                        |
                  | Value1   | Value2   | Value3         | Value1         | Value 2                | Value 3             | Value 1                    | Value 2            | Value 3               | Value           | Project Configurations Updated |
        @ChannelConfiguration
        Scenario Outline: Channel Configuration
             When "Admin" clicks on Channel Configuration
              And "Admin" Clicks on create new Channel
              And "Admin" enter Channel Name "<ChannelName>"
              And "Admin" Selects channel type as "<ChannelType>"
              And "Admin" selects channel integration type as "<ChannelIntegration>"
              And "Admin" enters Email Id as "<EmailId>"
              And "Admin" enters Client Id as "<ClientID>"
              And "Admin" enters Client secret Id as "<ClientSecret>"
              And "Admin" enters Tenant Id as "<TenantID>"
              And "Admin" Enters Automation story as "<AutomationStory>"
              And "Admin" clicks on check box
              And "Admin" enters lIst size as "<ListSize>"
              And "Admin" clicks on Save and Configure button
             Then Success message "<Toaster>" must be shown for "Channel Configuration"
        Examples:
                  | ChannelName | ChannelType | ChannelIntegration | EmailId                        | ClientID                             | ClientSecret                       | TenantID                             | AutomationStory | ListSize | Toaster                      |
                  | UST Channel | EMAIL       | outlook            | smartopsautosvc@ust-global.com | b73e5fe3-e49a-4d49-9ada-1e8741a6e034 | _1NdG.t_JC.~DM39Y04XZhr1ifKPcGxT2y | a4431f4b-c207-4733-9530-34c08a9b2b8d | UST             | 2        | Channel created Successfully |

        @EmailChannelAuthentication
        Scenario Outline: Successful Authentication of email channel
             When "Admin" clicks on authenticate
              And "Admin" selects account "<MailId>"
              And "Admin" clicks next
              And "Admin" enters Password "<Password>"
              And "Admin" clicks on sign in
             Then Success message "<Toaster>" must be shown for "Email Channel Authentication"
        Examples:
                  | MailId                         | Password      | Toaster                      |
                  | smartopsautosvc@ust-global.com | Support@12334 | OAuth authentication success |
        @AddUser
        Scenario Outline: Add User
             When "Admin" is in Add User page
              And "Admin" selects user as "<UserName>"
              And "Admin" selects role as "<Role>"
              And "Admin" clicks on Add User button
             Then User must be added and listed in the below list and success message "<Toaster>" must be shown
        Examples:
                  | UserName        | Role           | Toaster     |
                  | Kishor Macharla | itops_engineer | User added. |
        @ProjectInstallation
        Scenario Outline: Project Installation
             When "Admin" clicks on Install button
             Then Project must be in "<ProjectStatus>" state in Project Listing Page

        Examples:
                  | ProjectStatus |
                  | Ready         |