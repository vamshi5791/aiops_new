import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { InfrastructurePage } from "../../PageObjects/InfrastructurePage";
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objInfrastructurePage = new InfrastructurePage();


When('{string} opens infrastructure page', async function (userRole) {
  try {
    await objInfrastructurePage.Infrastructure();
  }
  catch (error) {
    await console.log("Feature name : " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to open infrastructure page"
  }
});

When('{string} clicks on Topology icon', async function (userRole) {
  try {
    await objInfrastructurePage.Topology();
  }
  catch (error) {
    await console.log("Feature name : " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to click on Topology icon"
  }
});

When('{string} clicks on import', async function (userRole) {
  try {
    await objInfrastructurePage.Import();
  }
  catch (error) {
    await console.log("Feature name : " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to click on import"
  }
});

When('{string} verifies the upload option is not visible', async function (userRole) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.xpath('//span[@class="smo-btn-icon-col d-flex align-items-center smo smo-delete smo-clickable smo-button-icon-right smo-flex-order-three ng-star-inserted"]'))), 100000);
  }
  catch (error) {
    await console.log("Feature name : " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "Upload option is visible"
  }
});

When('{string} verifies the delete option is not visible', async function (userRole) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.xpath('//span[@class="smo-btn-icon-col d-flex align-items-center smo smo-delete smo-clickable smo-button-icon-right smo-flex-order-three ng-star-inserted"]'))), 100000);
  }
  catch (error) {
    await console.log("Feature name : " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "Delete option is visible"
  }
});

When('{string} searches device name {string}', async function (userRole, DeviceName) {
  try {
    await objInfrastructurePage.Search(DeviceName);
  }
  catch (error) {
    await console.log("Feature name : " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to searche device name"
  }
});


Then('device should be available {string}', async function (Device) {
  //  await browser.sleep(2000);
  // await element(by.xpath('//div[@class="vis-network"]')).click();
  // await browser.sleep(2000);
  await browser.actions().mouseMove(element(by.xpath('//div[@class="vis-network"]//canvas'))).click().perform

  // await element(by.xpath('//div[@class="vis-tooltip"]')).getText().then(async function (text) {

    await element(by.xpath('//div[@class="vis-network"]/div[@class="vis-tooltip"]')).getText().then(async function (text) {

    await expect(text).to.include(Device);
    //  await browser.actions().mouseMove(element(by.xpath('//div[@class="vis-tooltip"]'))).perform
  });
});

When('{string} clicks the delete topology icon', async function (userRole) {
  try {
    await objInfrastructurePage.Delete();
  }
  catch (error) {
    await console.log("Feature name : " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to click the delete topology icon"
  }
});

When('{string} clicks on yes for conformation', async function (userRole) {
  try {
    await objInfrastructurePage.ClickOnYes();
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  }
  catch (error) {
    await console.log("Feature name : " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to click on yes for conformation"
  }
});

Then('device should not be available {string}', async function (string) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="vis-tooltip"]'))), 1000);
  }
  catch (error) {
    await console.log("Feature name : and Scenario name : ")
    await console.log(error)
    throw "Device is available"
  }
});

