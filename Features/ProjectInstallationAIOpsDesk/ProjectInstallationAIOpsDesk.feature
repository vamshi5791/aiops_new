@ProjectInstallationAIOpsResolve&Desk @ITOps_Milestone_4 @Regression @ITOps_Admin
Feature: Project installation - Additions to AIOps Resolve/Desk

    Feature Description  Ticket Dump Configurations - Desk Project/AI Resolve Project

    Scenario Outline: Verify entering correct ticket configuration for Desk/Resolve project - required for installing the project successfully
        When "ITOps_Admin" navigates to ITOps home page
        And "Admin" enters project name as "<ProjectName>"
        And "Admin" clicks dot menu icon
        And "Admin" clicks edit Project
        And  "Admin" clicks on Project Configuration Page
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
        When "Admin" verifies changes in dump with new records or change in existing records in dump gets added to the project ES, support-ticrr "<project_id>", "<ticket_summary >", "<area>"

        Examples:
            | ProjectName   | Hostname                                              | FilePath                                                       | project_id | area               | ticket_summary                        | SourceUserName    | SourcePassword | TicketNumberColumnName | WorkNotesColumnName | ShortDescriptionColumnName | CategoryColumnName | SubCategoryColumnName | LongDescription | Toaster                        |
            | Automation_M3 | smartops-k8s-dev-ftp-server.eastus.cloudapp.azure.com | /home/smartops-ftp-user/supportPWF/tickets_harrods_2020_v6.csv | 1677       | Skype for Business | Restore the deleted article in system | smartops-ftp-user | Value1         | TicketId               | ResolutionNote      | Subject                    | Category Tier 1    | Category Tier 2       | Description     | Project Configurations Updated |

