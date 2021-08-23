const args = require('minimist')(process.argv.slice(2));
import { Config, browser } from "protractor";
import * as reporter from "cucumber-html-reporter";
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
    await browser.manage().timeouts().implicitlyWait(70000);
    globalThis.environment = browser.params.env;
    globalThis.BrowserMode = args.Options;
  },
  specs: [


    // // DisplayUser
    '../Features/LogIn/LogIn_ITOps_DisplayUser.feature',
    '../Features/LogInPersona/LoginPersona_ITOpsDisplayUser.feature',
    '../Features/Logout/LogOut.feature',

    // IE
    '../Features/LogIn/LogIn_IE.feature',
    '../Features/QueueChannel/CreateQueqeChannel_IE.feature',
    '../Features/LogInPersona/LoginPersona_IE.feature',
    // '../Features/ProjectInstallation/ProjectInstallation_IE.feature',
    '../Features/Logout/LogOut.feature',

    // // Engineer
    '../Features/LogIn/LogIn_ITOps_Engineer.feature',
    '../Features/LogInPersona/LoginPersona_ITOpsEngineer.feature',
    '../Features/DeviceInventory/Device_Inventory_Engineer.feature',
    '../Features/Policies/AlertCorrelation_Engineer.feature',
    '../Features/Policies/Acknowledgement_Engineer.feature',
    '../Features/Policies/Failure_Engineer.feature',
    '../Features/Policies/Recovery_Engineer.feature',
    '../Features/SeverityMapping/Severity_Mapping_ITOpsEngineer.feature',
    '../Features/DisplayConfiguration/DisplayConfiguration_Engineer.feature',
    '../Features/TicketingThreshold/TicketingThreshold_ITOpsEngineer.feature',
    '../Features/Logout/LogOut.feature',

    // // Visitor
    '../Features/LogIn/LogIn_ITOps_Visitor.feature',
    '../Features/LogInPersona/LoginPersona_ITOpsVisitor.feature',
    '../Features/Logout/LogOut.feature',

    // // // Admin
    '../Features/LogIn/LogIn_Admin.feature',
    '../Features/LogInPersona/LoginPersona_ITOpsAdmin.feature',
    '../Features/DeviceInventory/Device_Inventory_Admin.feature',
    '../Features/SavedFilters/SavedFilters.feature',
    '../Features/AdvancedFilters/AdvancedFilter.feature',
    '../Features/FilterBySeverityDropdown/FilterBySeverityDropdown.feature',
    '../Features/RefreshOption/RefreshOption.feature',
    '../Features/SearchFuntionality/SearchFunctionality.feature',
    '../Features/SeverityMapping/Severity_Mapping_ITOpsAdmin.feature',
    '../Features/DisplayConfiguration/DisplayConfiguration.feature',
    '../Features/TicketingThreshold/TicketingThreshold_ITOpsAdmin.feature',
    '../Features/QueueChannel/CreateQueqeChannel_admin.feature',
    // '../Features/Pushing_Alerts/PushingAlerts.feature',
    '../Features/Logout/LogOut.feature',
 // Admin
  '../Features/LogIn/LogIn_Admin.feature',
   '../Features/Policies/AlertCorrelation.feature',
    '../Features/Policies/Acknowledgement.feature',
    '../Features/Policies/Failure.feature',
    '../Features/Policies/Recovery.feature',
    '../Features/ProjectInstallation/ProjectInstallation_Admin.feature',
  //   '../Features/Logout/LogOut.feature',
  ],
  cucumberOpts: {

    format: 'json:./TestReport/cucumberreport.json',
    tags: "",
    require: [
      '../JSFiles/Step_Definitions/*/*.js',
      '../JSFiles/support/hook.js',
      '../support/timeout.js'
    ]
  },


  onComplete: () => {
    var options = {
      brandTitle: 'Ideabytes',
      name: 'Automation Test Report',
      theme: 'bootstrap',
      jsonFile: './TestReport/cucumberreport.json',
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
    generateCustomReport.readJson();

  },
  jasmineNodeOpts: {
    showColors: true,
  }

};
