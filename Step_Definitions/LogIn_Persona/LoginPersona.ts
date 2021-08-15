import { Given, When} from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { InfrastructurePage } from "../../PageObjects/InfrastructurePage";
import { Dashboard } from "../../PageObjects/Dashboard";
import { Configuration } from "../../PageObjects/Configuration";


// global.expect = require('chai').expect
// var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objAlerts = new AlertsPage();
let objInfrastructurePage = new InfrastructurePage();
let objDashboard =new Dashboard();
let objConfiguration =new Configuration();



Given('{string} unable to access dashboard', function (string) {
  try {
    // await browser.wait(EC.invisibilityOf(objDashboard.btnDashboard), 10000);
    expect(objDashboard.btnDashboard.isPresent()).to.eventually.equal(false);
  } 
  catch (error) {
     console.log("Feature name : and Scenario name : ")
     console.log(error)
  throw "User is able to access dashboard"
  }
  });

Given('{string} unable to access alerts section',function (string) {
  try {
  
   expect(element(by.xpath('//a[text()="Alerts"]')).isPresent()).to.eventually.equal(false);
  
  } 
  catch (error) {
     console.log("Feature name : and Scenario name : ")
     console.log(error)
  throw "User is able to access alerts section"
  }

  });

  Given('{string} unable to access configuration section', function (string) {
    try {
      // await browser.wait(EC.invisibilityOf(objConfiguration.btnConfiguration), 10000);
      expect(objConfiguration.btnConfiguration.isPresent()).to.eventually.equal(false);
    } 
    catch (error) {
       console.log("Feature name : and Scenario name : ")
       console.log(error)
    throw "User is able to access configuration section"
    }
  });


  Given('{string} unable to access infrastructure section', function (string) {
    try {
      // await browser.wait(EC.invisibilityOf(objInfrastructurePage.btnInfrastructure), 10000);
      expect(objInfrastructurePage.btnInfrastructure.isPresent()).to.eventually.equal(false);
    } 
    catch (error) {
       console.log("Feature name : and Scenario name : ")
       console.log(error)
    throw "User is not to access infrastructure section"
    }
  });


  When('{string} able to access dashboard', async function (string) {
    try {
    

      await browser.sleep(2000);
      await browser.wait(EC.visibilityOf(objDashboard.btnDashboard), 10000);

    } 
    catch (error) {
      await console.log("Feature name : and Scenario name : ")
      await console.log(error)
    throw "User is not able to access dashboard"
    }
  });

  When('{string} able to access alerts section', async function (string) {
    try {
      await browser.wait(EC.visibilityOf(objAlerts.btnSelectAlerts), 10000);
    } 
    catch (error) {
      await console.log("Feature name : and Scenario name : ")
      await console.log(error)
    throw "User is not able to access alerts section"
    }
  });

  When('{string} able to access configuration section', async function (string) {
    try {
      await browser.wait(EC.visibilityOf(objConfiguration.btnConfiguration), 10000);
    } 
    catch (error) {
      await console.log("Feature name : and Scenario name : ")
      await console.log(error)
    throw "User is not able to access configuration section"
    }
  });

  When('{string} able to access infrastructure section', async function (string) {
    try {
      await browser.wait(EC.visibilityOf(objInfrastructurePage.btnInfrastructure), 10000);
    } 
    catch (error) {
      await console.log("Feature name : and Scenario name : ")
      await console.log(error)
    throw "User is not able to access infrastructure section"
    }
  });
