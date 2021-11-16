const args = require('minimist')(process.argv.slice(2));
import { Config, browser } from "protractor";
import { GenerateCustomReport } from './TestReport/GenerateCustomReport'

var moment = require("moment");
var fse = require("fs-extra");
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
declare var environment: string;

export let config: Config = {
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  ignoreUncaughtExceptions: true,
  allScriptsTimeout: 50000,
  getPageTimeout: 60000,

  capabilities: {
    'browserName': args.browser,

    chromeOptions:

    {
      args: [args.Options, "--window-size=1920,1080"]

    },
  },

  params: {
    env: "",
    url: ""
  },
  onPrepare: async function () {
    await browser.waitForAngularEnabled(false);
    await browser.manage().window().maximize();
    await browser.manage().timeouts().implicitlyWait(80000);
    globalThis.environment = browser.params.env;
    globalThis.BrowserMode = args.Options;
  },
  specs: [
    //MS4
    // //support engineer
    '../Features/LogIn/LogIn_Admin.feature',
    // '../Features/SupportEngineerInfrastructureSection/SupportEngineerInfrastructureSection.feature',
    // '../Features/Logout/LogOut.feature',
    // // // //Visitor
    // '../Features/LogIn/LogIn_ITOps_Visitor.feature',
    // '../Features/TicketListing/TicketListing_Visitor.feature',
    // '../Features/TicketDetailsPage/TicketDetailsPage_visitor.feature',
    
    // '../Features/SmartDeskRolesPrivileges/SmartDeskRolesPrivilegesVisitor.feature',
    // '../Features/TeamsExternalTeams/TeamsExternalTeamsVisitor.feature',
    // '../Features/Logout/LogOut.feature',
    // // // //Engineer

    // // // //IE
    // '../Features/LogIn/LogIn_IE.feature',
    // '../Features/TicketListing/TicketListing_IE.feature',
    // '../Features/TicketDetailsPage/TicketDetailsPage_IE.feature',

    // '../Features/SmartDeskRolesPrivileges/SmartDeskRolesPrivilegesIE.feature',
    
    // '../Features/Logout/LogOut.feature',
    // // //Admin
    '../Features/LogIn/LogIn_Admin.feature',
    '../Features/TicketDetailsPage/TicketDetailsPage.feature',
    '../Features/CommentsInITSM/CommentsInITSM.feature',
    '../Features/SearchTicketListing/SearchTicketListing.feature',
    '../Features/Validation - WhileSelfGroupAndIndividualAssignment/SelfGroupAndIndividualAssignment.feature',


    // '../Features/AdvancedFilterM4/AdvancedFilterM4.feature',
    // '../Features/DownloadReport/DownloadReport.feature',
    // '../Features/AlertStore/AlertStore.feature',
    // '../Features/VirtualEngineerQueue/VirtualEngineerQueue.feature',
    // '../Features/CapturingUserIdAndGroupId/CapturingUserIdAndGroupId.feature',
    // '../Features/QuickFilterTicketConsole/QuickFilterTicketConsole.feature',

    // '../Features/TicketListing/TicketListing.feature',


    // '../Features/ParallelActionsOnTickets/ParallelActionsOnTickets.feature',
    // '../Features/ProjectInstallationAIOpsDesk/ProjectInstallationAIOpsDesk.feature',
    // '../Features/Logout/LogOut.feature',
    // //MS5

    // '../Features/LogIn/LogIn_Admin.feature',
    // '../Features/TeamsExternalTeams/TeamsExternalTeams.feature',
    // '../Features/SNOWDescription/SNOWDescription.feature',
    // '../Features/SmartDeskRolesPrivileges/SmartDeskRolesPrivilegesAdmin.feature',
    // '../Features/RecommendedResolutionsAutomatedOrManual/RecommendedResolutionsAutomatedOrManual.feature',
    // '../Features/DefaultTemplateForTicketCreateAdmin/DefaultTemplateForTicketCreateAdmin.feature',
    // '../Features/DefaultTemplateForTicketReassignment/DefaultTemplateForTicketReassignment.feature',

    // '../Features/AutocloseAndFlap/AutocloseAndFlap.feature',
    // '../Features/OrderOfSeverity/OrderOfSeverity.feature',
    // '../Features/IndicatorForFlappingSurgeIncompleteCorrelationError/IndicatorForFlappingSurgeIncompleteCorrelationError.feature',
    // '../Features/LoanDepot/LoanDepot.feature',

    // '../Features/BusinessTimezoneInAllRules/BusinessTimezoneInAllRules.feature',//passed
    // '../Features/CustomFieldsInAlertIndex/CustomFieldsInAlertIndex.feature',//passed
    // '../Features/TicketTemplateM5/TicketTemplate.feature',//passed
    // '../Features/AdvancedFilterM5/AdvancedFilter.feature',//passed
    // '../Features/ITSMConfigurations/ITSMConfigurations.feature',//passed

    // '../Features/SmartDeskRolesPrivileges/SmartDeskRolesPrivilegesSupportEngineer.feature',
   
  ],
  cucumberOpts: {

    format: 'json:./TestReport/cucumberreport_batch_3.json',
    tags: "",
    require: [
      '../JSFiles/Step_Definitions/*/*.js',
      '../JSFiles/support/hook.js',
      '../support/timeout.js'
    ]
  },


  onComplete: async () => {
    var options = {
      brandTitle: 'Ideabytes',
      name: 'Automation Test Report',
      theme: 'bootstrap',
      jsonFile: './TestReport/cucumberreport_batch_2.json',
      output: './TestReport/Test_Report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "App Version": " 7.3 © 2021 UST",
        "Test Environment": "STAGING",
        "Browser": "Chrome  91.0.4472.77",
        "Platform": "Windows 10 Pro",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };

    let generateCustomReport = new GenerateCustomReport();
    await generateCustomReport.readJson('batch_3');

  },
  jasmineNodeOpts: {
    showColors: true,
  }

};
