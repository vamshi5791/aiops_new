
import {Config, browser} from "protractor";
import * as reporter from "cucumber-html-reporter";

var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');

export let config: Config = {
   directConnect:true,
   framework:'custom',
   frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    capabilities: {
      'browserName': properties.get('main.browserName'),
  },
  
  specs: [
   
    '../Features/LogIn/LogIn_Roles.feature',
    '../Features/ProjectInstallation/ProjectInstallation_admin.feature',
    '../Features/ProjectInstallation/ProjectInstallation_IE.feature'
    
  ],
    cucumberOpts: {
      
        format:'json:./Reports/cucumberreport.json',
      // tags: "@ProjectCreation",
        require: [
           '../JSFiles/Step_Definitions/LogIn/LogIn.js',
          '../JSFiles/Step_Definitions/ProjectInstallation/ProjectInstallation_IE.js',
         '../JSFiles/Step_Definitions/ProjectInstallation/ProjectInstallation_admin.js',
          '../JSFiles/hook.js',
          '../support/timeout.js'
        ]
  },
    
  onPrepare: function(){
    browser.manage().timeouts().implicitlyWait(100000);
},
      onComplete: () =>{
        var options = {
          theme: 'bootstrap',
          jsonFile:'./Reports/cucumberreport.json',
          output:'./Reports/Test_Report_.html' ,
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "App Version":" 7.3 © 2021 UST",
              "Test Environment": "STAGING",
              "Browser": "Chrome  91.0.4472.77",
              "Platform": "Windows 10 Pro",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
   
      reporter.generate(options);


  },
  jasmineNodeOpts: {
    showColors: true, 
  }
  
  };
  