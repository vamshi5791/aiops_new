import { ElementFinder, element, by } from "protractor";

    export class scheduleconfig {
     
        txtServiceNowHost: ElementFinder;
        txtServiceUsername: ElementFinder;
        pwdServicePassword: ElementFinder;
        txtThresholdCount: ElementFinder;
        txtITSMname: ElementFinder;
        txtITSMversion: ElementFinder;
        drpTimeZone: ElementFinder;
        drpTimeoneselect: ElementFinder;
        drpITOPsflavour: ElementFinder;
        drpITOPsflavourSelect: ElementFinder;
        btn_saveGeneralConfig: ElementFinder
       
        lnkSchedularConfiguration: ElementFinder;
        correlationInterval: ElementFinder;
        correlationIntervalDuration: ElementFinder;
        clusterInterval: ElementFinder;
        clusterDuration: ElementFinder;
        analyticsInterval: ElementFinder;
        analyticsDuration: ElementFinder;
        predictionInterval: ElementFinder;
        predictionDuration: ElementFinder;
        btnSaveSchedularConfig: ElementFinder
    
        lnkErrorConfiguration: ElementFinder;
        txtFromEmail: ElementFinder;
        pwdFromEmail: ElementFinder;
        txtToEmail: ElementFinder;
        btnSaveErrorConfig: ElementFinder
    
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
        constructor() {
//General configuration            
          this.txtServiceNowHost = element(by.xpath('//legend[text()="Servicenow Host"]//following-sibling::input'));
          this.txtServiceUsername = element(by.xpath('//legend[text()="Servicenow Username"]//following-sibling::input'));
          this.pwdServicePassword = element(by.xpath('//legend[text()="Servicenow Password"]//following-sibling::input'));
          this.txtThresholdCount = element(by.xpath('//legend[text()="Response SLA Threshold Count"]//following-sibling::input'));
          this.txtITSMname = element(by.xpath('//legend[text()="ITSM Name"]//following-sibling::input'));
          this.txtITSMversion = element(by.xpath('//legend[text()="ITSM Version"]//following-sibling::input'));
          this.drpTimeZone = element(by.xpath('//legend[text()="ITSM Time Zone"]//following-sibling::div/span'));
          this.drpTimeoneselect = element(by.xpath('//span[text()="IST"]'));
          this.drpITOPsflavour = element(by.xpath('//legend[text()="ITOps Flavor"]//following-sibling::div/span'));
          this.drpITOPsflavourSelect = element(by.xpath('//span[text()="Smart NOC"]')); 
          this.btn_saveGeneralConfig = element(by.xpath('//span[text()="Scheduler Configurations "]//preceding::button'));
 //Schecular Configuration         
            this.lnkSchedularConfiguration = element(by.xpath('//span[text()="Scheduler Configurations "]'));
            this.correlationInterval = element(by.xpath('//label[text()="Scheduler Interval for auto closure of flap clusters (Use 6-digit cron)"]//preceding::legend[text()="Specify Cron Expression"]//preceding::label[text()="Select"]'));
            this.correlationIntervalDuration = element(by.xpath('//span[text()="Every 6 months"]'));
            this.clusterInterval = element(by.xpath('//label[text()="Schedule Interval for Correlation (Use 6-digit cron)"]//following::span[@class="smo-clickable smo smo-expand-more-alt chevron-icon"][2]'));
            this.clusterDuration = element(by.xpath('//span[text()="Every 6 months"]'));
            this.analyticsInterval = element(by.xpath('//label[text()="Schedule Interval for Correlation (Use 6-digit cron)"]//following::span[@class="smo-clickable smo smo-expand-more-alt chevron-icon"][3]'));
            this.analyticsDuration = element(by.xpath('//span[text()="Every 6 months"]'));
            this.predictionInterval = element(by.xpath('//label[text()="Schedule Interval for Correlation (Use 6-digit cron)"]//following::span[@class="smo-clickable smo smo-expand-more-alt chevron-icon"][4]'));
            this.predictionDuration = element(by.xpath('//span[text()="Every 6 months"]'));
            this.btnSaveSchedularConfig = element(by.xpath('//legend[text()="ITOps Flavor"]//following::span[text()="Save"][2]'));
 //Error response ocnfiguration          
            this.lnkErrorConfiguration = element(by.xpath('//span[text()="Scheduler Configurations "]//following::span[@class="smo-accordion-toggle-icon smo smo-expand-more-alt chevron-icon smo-accordion-toggle-icon-sup-mon"][1]')); 
            this.txtFromEmail = element(by.xpath('//legend[text()="From Email Account"]//following-sibling::input'));
            this.pwdFromEmail = element(by.xpath('//legend[text()="From Email Account Password"]//following-sibling::input'));
            this.txtToEmail = element(by.xpath('//legend[text()="To Email Address"]//following-sibling::input'));
            this.btnSaveErrorConfig = element(by.xpath('//legend[text()="ITOps Flavor"]//following::span[text()="Save"][3]'));
  //Ticket Dump Configuratin          
            this.lnkDumpConfiguration = element(by.xpath('//span[text()="Scheduler Configurations "]//following::span[@class="smo-accordion-toggle-icon smo smo-expand-more-alt chevron-icon smo-accordion-toggle-icon-sup-mon"][2]'));
            this.txtTicketDumpSourceHostname = element(by.xpath('//legend[text()="Ticket Dump Source Hostname"]//following-sibling::input'));
            this.txtDumpSourceFilePath = element(by.xpath('//legend[text()="Ticket Dump Source File Path"]//following-sibling::input'));
            this.txtSourceUsername = element(by.xpath('//legend[text()="Source Username"]//following-sibling::input'));
            this.txtSourcePassword = element(by.xpath('//legend[text()="Source Password"]//following-sibling::input'));
            this.txtTicketNumberColumnNameInDumpFile = element(by.xpath('//legend[text()="Ticket number column name in dump file"]//following-sibling::input'));
            this.txtWorkNotesColumnNameInColumnFile = element(by.xpath('//legend[text()="Work Notes column name in dump file"]//following-sibling::input'));
            this.txtShortDescriptionColumnNameInDumpFile = element(by.xpath('//legend[text()="Short Description column name in dump file"]//following-sibling::input'));
            this.txtCategoryColumnNameInDumpFile = element(by.xpath('//legend[text()="Category column name in dump file"]//following-sibling::input'));
            this.txtSubCategoryColumnNameInDumpFile = element(by.xpath('//legend[text()="Sub Category column name in dump file"]//following-sibling::input'));
            this.btnSaveTicketConfig = element(by.xpath('//legend[text()="ITOps Flavor"]//following::span[text()="Save"][5]'));   
        }
    }
    
    
    