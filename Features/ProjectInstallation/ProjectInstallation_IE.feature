@ProjectCreation
Feature: Project Installation- Installation_Engineer

    Feature Description Project Installation with ITOPS_IE role
          
@CreateProject
     Scenario Outline: Project Creation  
         Given LogIn with ITOps role is available "<url>"
         When enter Username, Password and click on login button "<UserName>", "<Password>" 
         And click on create project
         And Enter project name "<projectname>"
         And Enter description "<description>"
         And Click on create button
         Then user is taken to the project configuration
    Examples: 
            | UserName | Password | projectname | description |
            | Itops_IE | qa123 | ProjectTeam | Release1.4Project | 
@GeneralConfiguration
Scenario Outline: General Configuration
          When enter ConfigDetails "<ServiceNowHost>", "<ServicenowUserName>", "<ServicenowPassworde>", "<ThresholdCount>", "<TestITSM>", "<ITSMversion>"
          And click save general config button
          Then Success message for General Configuration must be shown as a toaster
          Examples:
           | ServiceNowHost | ServicenowUserName | ServicenowPassworde | ThresholdCount | TestITSM | ITSMversion |
           | https://ustglobaldev.service-now.com | ustglobal | 1234 | 01.00 | USTTestITSM | 1.01 |   
@Schedularconfiguration
Scenario: Schedular configuration
           When click on Schedular configuration
        And select correlation interval duration
        And select cluster interval duration
        And select analytics duration
        And select prediction duration
        And click save schedule config button
        Then Success message for Schedular Configuration must be shown as a toaster
@ResponceConfiguration
Scenario: Error Responce Configuration
        When click on Error Responce Configuration
         And enter fromemail "abc@ib.com"
         And enter emailPassword "1234"
         And enter toemail "def@ib.com"
         And click save Error config button    
        Then Success message for Error Responce Configuration must be shown as a toaster         
@TicketDum
Scenario: TicketDum
        When click on Ticket Dump Configuration
        And enter Ticket Dump Source Hostname "TestIB"
        And enter Dump Source File Path "TestIB"
        And enter Source Username "TestIB"
        And enter Source Password "TestIB"
        And enter Ticket number column name in dump file "TestIB"
        And enter Work Notes column name in column file "TestIB"
        And enter Short Description column name in dump file "TestIB"
        And enter Category column name in dump file "TestIB"
        And enter Sub Category column name in dump file "TestIB"
        And click save ticket dump config button
        Then Success message for Ticket Dump Configuration must be shown as a toaster
@ChannelConfiguration
Scenario Outline: Channel Configuration
        When Click on Channel Configuration
        And Click on create new Channel
        And Enter channel name "UST Channel"
        And Click on Select channel type
        And click on EMAIL
        And enter Email Id "<Email Id>"
        And enter Client Id "<Client ID>"
        And enter Client secret Id "<Client secret>"
        And enter Tenant Id "<Tenant ID>"
        And Enter Automation story "<Automation story>"
        And click on check box 
        And Enter lIst size "<ListSize>"
        And Click on save and configure button
        Examples:
         | ChannelName | Email Id | Client ID | Client secret | Tenant ID | Automation story |ListSize |
         | UST Channel | ustib@gmail.com  | 1234 | 1234 | 1234 | UST | 2 |
@AddUser
Scenario: Add User
        When click on Add User
        And Click on Select User
        And select role
        And Add user details 
        And click on Add User
        Then User must be added and listed in the below list
@ProjectInstallation
Scenario: Project Installation
        When Click on Install
        Then Project must be installed