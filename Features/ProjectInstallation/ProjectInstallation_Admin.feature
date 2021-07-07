@ProjectCreation_Admin
Feature: Project Installation with Itops Admin role

        Feature Description Once the login is done with ITOPS_Admin role,
        Admin must be able to create the project and install it.
        Project must be in ready state in Project Listing page.

        @CreateProject
        Scenario Outline: Project Creation
                Given ITOps Admin is in the home page, "<UserName>", "<Password>"
                When admin clicks on create project button
                And admin enters project name as "<ProjectName>"
                And admin enters description as "<Description>"
                And admin clicks on create button
                Then user is taken to the project configuration page "<Toaster>"
                Examples:
                        | UserName    | Password | ProjectName  | Description       | Toaster                    |
                        | Itops_admin | qa123    | ProTestTestTSIV | Release1.4Project | Project Saved Successfully |
        @GeneralConfiguration
        Scenario Outline: General Configuration
                When admin enters Service now hostname as "<ServiceNowHost>"
                And admin enters Service now Username as "<ServiceNowUserName>"
                And admin enters Service now Password as "<ServicenowPassword>"
                And admin enters Response SLA Threshold Count as "<ThresholdCount>"
                And admin enters ITSM Name as "<ITSMName>"
                And admin enters ITSM Version as "<ITSMVersion>"
                And admin selects ITSM TimeZone as "<ITSMTimeZone>"
                And admin selects ITIops Flavor as "<ITopsFlavor>"
                And admin clicks on Save button in General Configuration page
                Then Success message for General Configuration must be shown  as a toaster "<Toaster>"
                Examples:
                        | ServiceNowHost                       | ServiceNowUserName | ServiceNowPassworde | ThresholdCount | ITSMName    | ITSMVersion | ITSMTimeZone | ITopsFlavor | Toaster                        |
                        | https://ustglobaldev.service-now.com | ustglobal          | 1234                | 01.00          | USTTestITSM | 1.01        | IST          | Smart NOC   | Project Configurations Updated |
        @SchedulerConfiguration
        Scenario Outline: Scheduler Configuration
                When admin clicks on Schedular configuration
                And admin selects Schedule Interval for Correlation as "<Correlation>"
                And admin selects Scheduler Interval for auto closure of flap clusters as "<AutoClosure>"
                And admin select Scheduler Interval for alert analytics as "<AlertAnalytics>"
                And admin select Scheduled interval for Batch Prediction as "<BatchPrediction>"
                And admin clicks on Save button in Scheduler Configuration page
                Then Success message for Scheduler Configuration must be shown as a toaster "<Toaster>"
                Examples:
                        | Correlation    | AutoClosure    | AlertAnalytics | BatchPrediction | Toaster                        |
                        | Every 4 months | Every 3 months | Every 4 months | Every 6 months  | Project Configurations Updated |

        @ErrorResponseConfiguration
        Scenario Outline: Error Response Configuration
                When admin clicks on Error Response Configuration
                And admin enters From Email Account as "<FromEmail>"
                And admin enters From Email Acount Password as "<FromEmailAcountPassword>"
                And admin enters To Email Address as "<ToEmailAddress>"
                And admin clicks on Save button in Error Response Configuration page
                Then Success message for Error Response Configuration must be shown as a toaster "<Toaster>"
                Examples:
                        | FromEmail  | Password | ToEmailAddress | Toaster                        |
                        | abc@ib.com | 1234     | def@ib.com     | Project Configurations Updated |
        @SurgeConfiguration
        Scenario Outline: Surge Configuration
                When Admin clicks on Surge Configuration
                And Admin enters Surge Start Percentile as "<StartPercentile>"
                And Admin enters Surge Start Percentile Threshold as "<StartPercentileThreshold>"
                And Admin enters Surge End Percentile as "<EndPercentile>"
                And Admin enters Surge End Percentile Threshold as "<EndPercentileThreshold>"
                And Admin enters Surge Patterns as "<SurgePatterns>"
                And Admin enters Surge Pattern Match Threshold as "<SurgePatternMatchThreshold>"
                And Admin enters Surge Analytics Interval as "<SurgeAnalyticsInterval>"
                And Admin enters Surge First Run Count as "<SurgeFirstRunCount>"
                And Admin enters Surge First Run Count Interval as "<SurgeFirstRunCountInterval>"
                And admin clicks on Save button in Surge Configuration page
                Then Success message for Surge Configuration must be shown as a toaster "<Toaster>"
                Examples:
                        | StartPercentile | StartPercentileThreshold | EndPercentile | EndPercentileThreshold | SurgePatterns | SurgePatternMatchThreshold | SurgeAnalyticsInterval | SurgeFirstRunCount | SurgeFirstRunCountInterval | Toaster                        |
                        | 50              | 50                       | 50            | 50                     | 50            | 50                         | 50                     | 50                 | 50                         | Project Configurations Updated |

        @TicketDumpConfiguration
        Scenario Outline: Ticket Dump Configuration
                When admin clicks on Ticket Dump Configuration
                And admin enters Ticket Dump Source Hostname as "<Hostname>"
                And admin enters Ticket Dump Source File Path as "<FilePath>"
                And admin enters Source Username as "<SourceUserName>"
                And admin enters Source Password as "<SourcePassword>"
                And admin enters Ticket Number Column Name in dump file as "<TicketNumberColumnName>"
                And admin enters Work Notes column name in column file as "<WorkNotesColumnName>"
                And admin enters Short Description column name in dump file as "<ShortDescriptionColumnName>"
                And admin enters Category column name in dump file as "<CategoryColumnName>"
                And admin enters Sub Category column name in dump file as "<SubCategoryColumnName>"
                And admin enters Long Description column name in dump file as "<LongDescription>"
                And admin clicks on Save button in Ticket Dump Configuration page
                Then Success message for Ticket Dump Configuration must be shown as a toaster "<Toaster>"
                Examples:
                        | Hostname | FilePath | SourceUserName | SourcePassword | TicketNumberColumnName | WorkNotesColumnName | ShortDescriptionColumnName | CategoryColumnName | SubCategoryColumnName | LongDescription | Toaster                        |
                        | Value1   | Value2   | Value3         | Value1         | Value 2                | Value 3             | Value 1                    | Value 2            | Value 3               | Value           | Project Configurations Updated |
        @ChannelConfiguration
        Scenario Outline: Channel Configuration
                When admin clicks on Channel Configuration
                And admin Clicks on create new Channel
                And admin enter Channel Name "<ChannelName>"
                And admin Selects channel type as "<ChannelType>"
                And admin selects channel integration type as "<ChannelIntegration>"
                And admin enters Email Id as "<EmailId>"
                And admin enters Client Id as "<ClientID>"
                And admin enters Client secret Id as "<ClientSecret>"
                And admin enters Tenant Id as "<TenantID>"
                And Enter Automation story as "<AutomationStory>"
                And admin clicks on check box
                And admin enters lIst size as "<ListSize>"
                And admin clicks on Save and Configure button
                Then Success message for Channel Configuration must be shown as a toaster "<Toaster>"
                Examples:
                        | ChannelName | ChannelType | ChannelIntegration | EmailId            | ClientID                             | ClientSecret | TenantID                             | AutomationStory | ListSize | Toaster                      |
                        | UST Channel | EMAIL       | outlook            | ustib123@gmail.com | b73e5fe3-e49a-4d49-9ada-1e8741a6e034 | 1234         | a4431f4b-c207-4733-9530-34c08a9b2b8d | UST             | 2        | Channel created Successfully |

        @EmailChannelAuthentication
        Scenario Outline: Successful Authentication of email channel
                When admin clicks on authenticate
                And admin selects account "<MailId>"
                And admin clicks next
                And admin enters Password "<Password>"
                And admin clicks on sign in
                Then Success message for OAuth authentication must be shown as a toaster "<Toaster>"
                Examples:
                        | MailId                         | Password      | Toaster                |
                        | smartopsautosvc@ust-global.com | Support@12334 | Channel Authentication |
        @AddUser
        Scenario Outline: Add User
                When admin is in Add User page
                And admin selects user as "<UserName>"
                And admin selects role as "<Role>"
                And admin clicks on Add User button
                Then User must be added and listed in the below list with a toaster "<Toaster>"
                Examples:
                        | UserName        | Role        | Toaster     |
                        | Kishor Macharla | itops_admin | User added. |
        @ProjectInstallation
        Scenario Outline: Project Installation
                When admin clicks on Install button
                Then Project must be in ready state in Project Listring Page "<ProjectStatus>"
                And click on logout button
                Examples:
                        | ProjectStatus |
                        | Ready         |