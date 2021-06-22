import { ElementFinder, element, by } from "protractor";

export class ProjectConfig {

//project creation 
    
    clickOnCreateProject: ElementFinder;
    projectname: ElementFinder;
    description: ElementFinder;
    btnCreate: ElementFinder;

    //General configuration 
        txtServiceNowHost: ElementFinder;
        txtServiceUsername: ElementFinder;
        pwdServicePassword: ElementFinder;
        txtThresholdCount: ElementFinder;
        txtITSMname: ElementFinder;
        txtITSMversion: ElementFinder;
        drpTimeZone: ElementFinder;
        drpITOPsflavour: ElementFinder;
        btn_saveGeneralConfig: ElementFinder;
 //Schecular Configuration       
        lnkSchedularConfiguration: ElementFinder;
        correlationInterval: ElementFinder;
        clusterInterval: ElementFinder;
        analyticsInterval: ElementFinder;
        predictionInterval: ElementFinder;
    btnSaveSchedularConfig: ElementFinder;
 //Error response ocnfiguration   
        lnkErrorConfiguration: ElementFinder;
        txtFromEmail: ElementFinder;
        pwdFromEmail: ElementFinder;
        txtToEmail: ElementFinder;
        btnSaveErrorConfig: ElementFinder
  //Ticket Dump Configuratin    
        lnkDumpConfiguration: ElementFinder;
        txtTicketDumpSourceHostname: ElementFinder;
        txtDumpSourceFilePath: ElementFinder; 
        txtSourceUsername: ElementFinder;
        txtSourcePassword: ElementFinder;
        txtTicketNumberColumnNameInDumpFile: ElementFinder;
        txtWorkNotesColumnNameInColumnFile: ElementFinder;
        txtShortDescriptionColumnNameInDumpFile: ElementFinder;
        txtCategoryColumnNameInDumpFile: ElementFinder;
        txtSubCategoryColumnNameInDumpFile: ElementFinder;
        btnSaveTicketConfig: ElementFinder
//Channel Configuration
        channelConfiguration : ElementFinder;
    createNewChannel : ElementFinder;
    channelType : ElementFinder;
    channelName : ElementFinder;
    channelIntegrationType : ElementFinder;
    emailId: ElementFinder;
    txtPassword: ElementFinder;
    clientId : ElementFinder;
    clientSecret : ElementFinder;
    tenantId : ElementFinder;
    automationStory : ElementFinder;
    checkProcessListAsList : ElementFinder;
    enterListSize : ElementFinder;
        saveAndConfigure: ElementFinder;
//Add User    
        btnAddUser: ElementFinder
        LstSelectUser: ElementFinder
        rdoSelectRole: ElementFinder
        btnAddUserDetails: ElementFinder
        btnInstall: ElementFinder
    constructor() {
//project creation             
        this.clickOnCreateProject = element(by.xpath('//span[text()="Create New Project"]'));
        this.projectname = element(by.xpath('//input[@name="pjctName"]'));
        this.description  = element(by.xpath('//legend[text()="Project Description"]//following::textarea'));
        this.btnCreate = element(by.xpath('//span[text()="Create"]'));
        
//General configuration            
          this.txtServiceNowHost = element(by.xpath('//legend[text()="Servicenow Host"]//following-sibling::input'));
          this.txtServiceUsername = element(by.xpath('//legend[text()="Servicenow Username"]//following-sibling::input'));
          this.pwdServicePassword = element(by.xpath('//legend[text()="Servicenow Password"]//following-sibling::input'));
          this.txtThresholdCount = element(by.xpath('//legend[text()="Response SLA Threshold Count"]//following-sibling::input'));
          this.txtITSMname = element(by.xpath('//legend[text()="ITSM Name"]//following-sibling::input'));
          this.txtITSMversion = element(by.xpath('//legend[text()="ITSM Version"]//following-sibling::input'));
          this.drpTimeZone = element(by.xpath('//legend[text()="ITSM Time Zone"]//following-sibling::div/span'));
          this.drpITOPsflavour = element(by.xpath('//legend[text()="ITOps Flavor"]//following-sibling::div/span'));
          this.btn_saveGeneralConfig = element(by.xpath('//span[text()="Scheduler Configurations "]//preceding::button'));
 //Schecular Configuration         
            this.lnkSchedularConfiguration = element(by.xpath('//span[text()="Scheduler Configurations "]'));
            this.correlationInterval = element(by.xpath('//label[text()="Schedule Interval for Correlation (Use 6-digit cron)"]//following-sibling::section//fieldset//span'));
            this.clusterInterval = element(by.xpath('//label[text()="Scheduler Interval for auto closure of flap clusters (Use 6-digit cron)"]//following-sibling::section//fieldset//span'));
            this.analyticsInterval = element(by.xpath('//label[text()="Scheduler Interval for alert analytics"]//following-sibling::section//fieldset//span'));
            this.predictionInterval = element(by.xpath('//label[text()="Scheduled interval for Batch Prediction"]//following-sibling::section//fieldset//span'));
            this.btnSaveSchedularConfig = element(by.xpath("//span[text()='Scheduler Configurations ']/ancestor::div[contains(@class, 'smo-accordion-header ')]//following-sibling::div//span[text()='Save']"));
 //Error response ocnfiguration          
            this.lnkErrorConfiguration = element(by.xpath('//span[text()="Error response configurations "]')); 
            this.txtFromEmail = element(by.xpath('//legend[text()="From Email Account"]//following-sibling::input'));
            this.pwdFromEmail = element(by.xpath('//legend[text()="From Email Account Password"]//following-sibling::input'));
            this.txtToEmail = element(by.xpath('//legend[text()="To Email Address"]//following-sibling::input'));
            this.btnSaveErrorConfig = element(by.xpath("//span[text()='Error response configurations ']/ancestor::div[contains(@class, 'smo-accordion-header ')]//following-sibling::div//span[text()='Save']"));
  //Ticket Dump Configuratin          
            this.lnkDumpConfiguration = element(by.xpath('//span[text()="Ticket Dump Configurations "]'));
            this.txtTicketDumpSourceHostname = element(by.xpath('//legend[text()="Ticket Dump Source Hostname"]//following-sibling::input'));
            this.txtDumpSourceFilePath = element(by.xpath('//legend[text()="Ticket Dump Source File Path"]//following-sibling::input'));
            this.txtSourceUsername = element(by.xpath('//legend[text()="Source Username"]//following-sibling::input'));
            this.txtSourcePassword = element(by.xpath('//legend[text()="Source Password"]//following-sibling::input'));
            this.txtTicketNumberColumnNameInDumpFile = element(by.xpath('//legend[text()="Ticket number column name in dump file"]//following-sibling::input'));
            this.txtWorkNotesColumnNameInColumnFile = element(by.xpath('//legend[text()="Work Notes column name in dump file"]//following-sibling::input'));
            this.txtShortDescriptionColumnNameInDumpFile = element(by.xpath('//legend[text()="Short Description column name in dump file"]//following-sibling::input'));
            this.txtCategoryColumnNameInDumpFile = element(by.xpath('//legend[text()="Category column name in dump file"]//following-sibling::input'));
            this.txtSubCategoryColumnNameInDumpFile = element(by.xpath('//legend[text()="Sub Category column name in dump file"]//following-sibling::input'));
            this.btnSaveTicketConfig = element(by.xpath("//span[text()='Ticket Dump Configurations ']/ancestor::div[contains(@class, 'smo-accordion-header ')]//following-sibling::div//span[text()='Save']"));   
       
  //Channel Configuration
            
       this.channelConfiguration=element(by.xpath('//span[text()="Channel Configuration"]'));
        this.createNewChannel=element(by.xpath('//span[text()="Create New Channel"]'));
        this.channelName=element(by.name('cname'));
        this.channelType=element(by.xpath('//label[text()="Select Channel type"]'));
        this.channelIntegrationType=element(by.xpath('//label[@class="ng-tns-c18-30 smo-dropdown-label-legand dropdown-label-ms smo-inputtext ng-star-inserted"]'));
        this.emailId = element(by.xpath("//input[@label='Email ID *']"));
        this.txtPassword = element(by.xpath('//input[@label="Email ID *"]//following::input[@label="Password *"][1]'))
        this.clientId=element(by.xpath("//input[@label='Client ID *']"));
        this.clientSecret=element(by.xpath("//input[@label='Client Secret *']"));
        this.tenantId=element(by.xpath("//input[@label='Tenant ID *']"));
        this.automationStory=element(by.xpath("//input[@label='Automation Story']"));
        this.checkProcessListAsList=element(by.xpath('//input[@label="Automation Story"]//following::label[text()="Process request as list"]'));
        this.enterListSize=element(by.name("listsize"));
        this.saveAndConfigure=element(by.xpath('//input[@label="Automation Story"]//following::span[text()="Save & Configure"]'));
  
        //Add User
             
        this.btnAddUser = element(by.xpath('//span[text()="Add User"]'));
        this.LstSelectUser = element(by.className("smo-dropdown-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon"));
        this.rdoSelectRole= element(by.xpath('//label[text()="itops_admin"]'));
        this.btnAddUserDetails = element(by.xpath('//label[text()="itops_admin"]//following::span[text()="Add User"]'));
        this.btnInstall= element(by.xpath('//span[text()="INSTALL"]'));        
        
        
        }
    }
    
    
    