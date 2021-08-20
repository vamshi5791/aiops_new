import { Given, When } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { InfrastructurePage } from "../../PageObjects/InfrastructurePage";
import { Dashboard } from "../../PageObjects/Dashboard";
import { Configuration } from "../../PageObjects/Configuration";
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objAlerts = new AlertsPage();
let objInfrastructurePage = new InfrastructurePage();
let objDashboard = new Dashboard();
let objConfiguration = new Configuration();



Given('{string} unable to access dashboard', async function (string) {
  try {
    await objDashboard.btnDashboard.isPresent().then(function (select) {
      expect(select).to.be.false;
    });
  }
  catch (error) {
    console.log("Feature name : Login persona and Scenario name : unable to access dashboard")
    console.log(error)
    throw "User is able to access dashboard"
  }
});

Given('{string} unable to access alerts section', async function (string) {
  try {
    await element(by.xpath('//a[text()="Alerts"]')).isPresent().then(function (select) {
      expect(select).to.be.false;
    });
  }
  catch (error) {
    console.log("Feature name : Login persona and Scenario name : unable to access alerts section")
    console.log(error)
    throw "User is able to access alerts section"
  }
});

Given('{string} unable to access configuration section', async function (string) {
  try {
    await objInfrastructurePage.btnInfrastructure.isPresent().then(function (select) {
      expect(select).to.be.false;
    });
  }
  catch (error) {
    console.log("Feature name : Login persona and Scenario name :unable to access configuration section ")
    console.log(error)
    throw "User is able to access configuration section"
  }
});


Given('{string} unable to access infrastructure section', async function (string) {
  try {
    await objInfrastructurePage.btnInfrastructure.isPresent().then(function (select) {
      expect(select).to.be.false;
    });
  }
  catch (error) {
    console.log("Feature name : Login persona and Scenario name : unable to access infrastructure section")
    console.log(error)
    throw "User is not to access infrastructure section"
  }
});


When('{string} able to access dashboard', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(objDashboard.btnDashboard), 10000);
  }
  catch (error) {
    console.log("Feature name : Login persona and Scenario name : able to access dashboard")
    await console.log(error)
    throw "User is not able to access dashboard"
  }
});

When('{string} able to access alerts section', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnSelectAlerts), 10000);
  }
  catch (error) {
    console.log("Feature name : Login persona and Scenario name : able to access alerts section")
    await console.log(error)
    throw "User is not able to access alerts section"
  }
});

When('{string} able to access configuration section', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(objConfiguration.btnConfiguration), 10000);
  }
  catch (error) {
    console.log("Feature name : Login persona and Scenario name :able to access configuration section")
    await console.log(error)
    throw "User is not able to access configuration section"
  }
});

When('{string} able to access infrastructure section', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.btnInfrastructure), 10000);
  }
  catch (error) {
    console.log("Feature name : Login persona and Scenario name :able to access infrastructure section ")
    await console.log(error)
    throw "User is not able to access infrastructure section"
  }
});
