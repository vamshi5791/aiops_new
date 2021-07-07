const args = require('minimist')(process.argv.slice(2));
import { Config, browser } from "protractor";
import * as reporter from "cucumber-html-reporter";
var moment = require("moment");
var fse = require("fs-extra");
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');

export let config: Config = {
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

 capabilities: {
 
   'browserName': args.browser,
   chromeOptions:
   
   {
      args: [args.Options]
     },
    },

  params: {
    baseUrl: "",
    url: ""
},
  onPrepare: function () {
     browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(100000);
    switch(browser.params.baseUrl){
      case 'qa':
        browser.params.url = properties.get('main.QA_url');
        break;
      case 'staging':
        browser.params.url = properties.get('main.staging_URL');
        break;
      default:
        browser.params.url = properties.get('main.QA_url');
 }
},
  specs: [
    '../Features/ProjectInstallation/ProjectInstallation_IE.feature',
    '../Features/ProjectInstallation/ProjectInstallation_admin.feature',
    '../Features/LogIn/LogIn_Roles.feature',
    '../Features/LogIn_Persona/IE_AccessToMasterConfiguration.feature',
    '../Features/Login_Persona/ITOpsAdmin_AccessToMasterConfiguration.feature',
    '../Features/QueueChannel/CreateQueqeChannel_admin.feature',
    '../Features/QueueChannel/CreateQueqeChannel_IE.feature',
     '../Features/Pushing_Alerts/PushingAlerts.feature',
    '../Features/LogIn_Persona/IE_AbleToDeleteProject.feature',
    '../Features/LogIn_Persona/IE_AbleToDisableProject.feature',
     
  ],
  cucumberOpts: {

    format: 'json:./Reports/cucumberreport.json',
     tags: "",
    require: [
      '../JSFiles/Step_Definitions/LogIn/LogIn.js',
      '../JSFiles/Step_Definitions/ProjectInstallation/ProjectInstallation_IE.js',
      '../JSFiles/Step_Definitions/ProjectInstallation/ProjectInstallation_admin.js',
      '../JSFiles/Step_Definitions/QueueChannel/CreateQueueChannel_admin.js',
      '../JSFiles/Step_Definitions/QueueChannel/CreateQueueChannel_IE.js',
      '../JSFiles/Step_Definitions/LogIn_Persona/IE_AccessToMasterConfiguration.js',
      '../JSFiles/Step_Definitions/LogIn_Persona/ITOpsAdmin_AccessToMasterConfiguration.js',
      '../JSFiles/Step_Definitions/Login_Persona/IE_AbleToDeleteProject.js',
      '../JSFiles/Step_Definitions/Login_Persona/IE_AbleToDisableProject.js',
      '../JSFiles/Step_Definitions/Pushing_Alerts/PushingAlerts.js',
      '../JSFiles/support/hook.js',
      '../support/timeout.js'
    ]
  },

 
  onComplete: () => {
    var options = {
      brandTitle:'Ideabytes',
      name: 'Automation Test Report',
      theme: 'bootstrap',
      jsonFile: './Reports/cucumberreport.json',
      output: './Reports/Test_Report.html',
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

    reporter.generate(options);
    var reportDir = "./Reports"
    if (fse.existsSync(reportDir)) {
      
      fse.copySync(reportDir, 
        reportDir + "_" + moment().format("YYYYMMDD_HHmmss"), { overwrite: true }, function (err) {
        if (err) {                 
          console.error(err);     
        } else {
          console.log("success!");
        }
      });
      
  }
  fse.mkdirsSync(reportDir);

  },
  jasmineNodeOpts: {
    showColors: true,
  }

};
