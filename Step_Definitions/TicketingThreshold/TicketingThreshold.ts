import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";

import { TicketingThreshold } from "../../PageObjects/TicketingThreshholdPageObjects";


let objTicketingThreshold = new TicketingThreshold();

var EC = browser.ExpectedConditions;
var expect = chai.expect;


When('{string} navigate to Ticketing Threshold', async function (userRole) {
  try {
    await browser.sleep(2000);
    await objTicketingThreshold.clickOnTicketingThreshold();
  }
  catch (error) {
    await console.log("Feature name : Ticketing Threshold " + userRole + " and Scenario name : Add New Ticketing Threshold ")
    await console.log(error)
    throw console.error
  }
});

When('Admin enter clicks on Add New Threshold button', async function () {
  try {
    await browser.sleep(2000);
    await objTicketingThreshold.clickOnAddNewThresholdButton();
  }
  catch (error) {
    await console.log("Feature name : Ticketing Threshold and Scenario name : Admin enter clicks on Add New Threshold button ")
    await console.log(error)
    throw console.error
  }
});

When('Admin selects Source {string}', async function (source) {
  try {
    await objTicketingThreshold.selectSource(source);
  }
  catch (error) {
    await console.log("Feature name : Ticketing Threshold and Scenario name : Admin selects Source")
    await console.log(error)
    throw console.error
  }
});

When('Admin enters Cluster Size {string}', async function (clusterSize) {
  try {
    await objTicketingThreshold.enterCluserSize(clusterSize);
  }
  catch (error) {
    await console.log("Feature name : Ticketing Threshold and Scenario name : Admin enters Cluster Size ")
    await console.log(error)
    throw console.error
  }
});

When('Admin enters Time Interval {string}', async function (timeinterval) {
  try {
    await objTicketingThreshold.enterTimeInterval(timeinterval);
  }
  catch (error) {
    await console.log("Feature name : Ticketing Threshold and Scenario name :Admin enters Time Interval ")
    await console.log(error)
    throw console.error
  }
});

When('Admin clicks on Add Threshold button', async function () {
  try {
    await objTicketingThreshold.clickOnAddThreshold();
    await browser.sleep(15000);
  }
  catch (error) {
    await console.log("Feature name : Ticketing Threshold  and Scenario name : Admin clicks on Add Threshold button ")
    await console.log(error)
    throw console.error
  }
});

Then('Verify Add New Threshold button in not present for ITOps Engineer', async function () {
  try {
    await objTicketingThreshold.lnkAddNewThreshold.isPresent().then(function (select) {
      expect(select).to.be.false;
    });
  }
  catch (error) {
    await console.log("Feature name : Ticketing Threshold and Scenario name : Verify Add New Threshold button in not present for ITOps Engineer ")
    await console.log(error)
    throw console.error
  }
});