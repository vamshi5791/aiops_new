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
    //DisplayUser
    '../Features/LogIn/LogIn_ITOps_DisplayUser.feature',
    '../Features/DownloadAlerts/DownloadAlerts_DisplayUser.feature',
    '../Features/Logout/LogOut.feature',
    // IE
    '../Features/LogIn/LogIn_IE.feature',
    '../Features/DashBoard/DashBoard_ItopsIE.feature',
    '../Features/Logout/LogOut.feature',

    //Engineer
    '../Features/LogIn/LogIn_ITOps_Engineer.feature',
    '../Features/DownloadAlerts/DownloadAlerts_Engineer.feature',
    '../Features/MultipleAssignments/MultipleAssignmentsEngineer.feature',
    '../Features/DeviceInventory/Device_Inventory_Engineer.feature',
    '../Features/InfrasrtucturePageTopology/Infrasrtucture_Topology_Engineer.feature',
    '../Features/Logout/LogOut.feature',

    //Admin
    '../Features/LogIn/LogIn_Admin.feature',
    '../Features/Assign/Assign.feature',
    '../Features/Hold/Hold.feature',
    '../Features/MultipleAssignments/MultipleAssignments.feature',
    '../Features/SeverityDropdown/SeverityDropdown.feature',
    '../Features/AlertListingPage/AlertListingPage.feature',
    '../Features/TicketDetailsPage-Assign/TicketDetailsPage-Assign.feature',
    '../Features/TicketTemplate/TicketTemplate.feature',
    '../Features/ITSM/ITSM.feature',
    '../Features/Pushing_Alerts/PushingAlerts.feature',
    '../Features/RecoveryPolicy&AutoClosure/RecoveryPolicy&AutoClosure.feature',


    '../Features/MoveToTicketed/MoveToTicketed.feature',
    '../Features/ShortDescriptionOfTickets/ShortDescriptionOfTickets.feature',
    '../Features/AcknowledgementAlertProcessing/AcknowledgementAlertProcessing.feature',
    '../Features/VirtualEngineerAssignemnt/VirtualEngineerAssignemnt.feature',
    '../Features/DeviceDetails/DeviceDetails.feature',
    '../Features/BulkAcknowledge/BulkAcknowledge.feature',
    '../Features/DeviceInventory/Device_Inventory_Admin.feature',

    '../Features/DashBoard/DashBoard.feature',
    '../Features/DownloadAlerts/DownloadAlerts.feature',
    '../Features/AlertConsole/AlertConsole.feature',

    '../Features/InfrasrtucturePageTopology/Infrasrtucture_Page_Topology_ITOps_Admin.feature',

  ],
  cucumberOpts: {

    format: 'json:./TestReport/cucumberreport_batch_2.json',
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
    await generateCustomReport.readJson('batch_2');

  },
  jasmineNodeOpts: {
    showColors: true,
  }

};
