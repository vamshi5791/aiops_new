import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { LogIn } from "../../PageObjects/LogIn";
import { PushingAlerts } from "../../PageObjects/RabbitMQ";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
import { SeverityMapping } from "../../PageObjects/Severity_Mapping";
import { InfrastructurePage } from "../../PageObjects/InfrastructurePage";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;
let objLogIn = new LogIn();
let objFilter = new PushingAlerts();
let objAlerts = new AlertsPage();
let objSeverityMapping = new SeverityMapping();
let objProjectListing = new ProjectListingPage();
let objInfrastructurePage = new InfrastructurePage();
var Global_ProjectName;

// Itops Admin searches the device with existing device name.

Then('Device details should be displayed {string}', async function (Device) {
  // try {
  await browser.sleep(2000);
  await element(by.xpath('//td[text()=" ' + Device + ' "]')).getText().then(function (text) {
    expect(text).to.include(Device);
  });
  
  // } 
  // catch (error) {
    // await console.log("Feature name : Device Inventory and Scenario name :  ")
    // await console.log(error)
  // throw "Device details are not displayed"
  // }
});

// Itops Admin searches the device with Non Existing device name.

Then('Device details should not be displayed {string}', async function (Device) {
  try {
    await element(by.xpath('//span[text()="No data available"]')).getText().then(function (text) {
      expect(text).to.include(Device);
    });
  }
  catch (error) {
    await console.log("Feature name : Device Inventory and Scenario name : ")
    await console.log(error)
    throw "Device details are displayed"
  }
});

Then('Verifies that Upload Icon is not present', async function () {
  try {
    // await browser.wait(EC.invisibilityOf(element(by.xpath('//span[@class="smo smo-upload-regular"]'))), 1000);
    // expect(element(by.xpath('//span[@class="smo smo-upload-regular"]')).isPresent()).to.eventually.equal(false);
    await element(by.xpath('//span[@class="smo smo-upload-regular"]')).isPresent().then(function (select) {
      expect(select).to.be.false;
    });
  }
  catch (error) {
    await console.log("Feature name : Device Inventory and Scenario name : ")
    await console.log(error)
    throw "Upload Icon is present"
  }

});

When('{string} clicks on resource name in the device inventory list {string}', async function (userRole, ResourceName) {
  try {
    await objInfrastructurePage.ResourceName(ResourceName);
  }
  catch (error) {
    await console.log("Feature name : Device Inventory " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "Unable to click on resource name in the device inventory list"
  }
});

Then('verifying the resource name is same as in previous page {string}', async function (ResourceName) {
  try {
    await element(by.xpath('//span[text()="' + ResourceName + '"]')).getText().then(function (text) {
      expect(text).to.include(ResourceName);
    });
  }
  catch (error) {
    await console.log("Feature name : Device Inventory and Scenario name : ")
    await console.log(error)
    throw "Resource name is not same as Resource name in Device details page"
  }
});

Then('{string} navigates back to device inventory page', async function (userRole) {
  try {
    await objInfrastructurePage.BackToInfrastructure();

  }
  catch (error) {
    await console.log("Feature name : Device Inventory " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to navigate back to the Device Inventory page"
  }
});

When('{string} clicks on add device option', async function (userRole) {
  try {
    await objInfrastructurePage.AddDevice();

  }
  catch (error) {
    await console.log("Feature name : Device Inventory " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to click the add device option"
  }
});

When('{string} enters resource name {string}', async function (userRole, ResourceName) {
  try {
    await objInfrastructurePage.EnterResourceName(ResourceName);
  }
  catch (error) {
    await console.log("Feature name : Device Inventory " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to enter resource name feild"
  }
});

When('{string} enters resource type {string}', async function (userRole, ResourceType) {
  try {
    await objInfrastructurePage.EnterResourceType(ResourceType);

  }
  catch (error) {
    await console.log("Feature name : Device Inventory " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to enter the resource type feild"
  }
});

When('{string} enters site {string}', async function (userRole, EnterSite) {
  try {
    await objInfrastructurePage.EnterSite(EnterSite);
  }
  catch (error) {
    await console.log("Feature name : Device Inventory " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to enters the site feild"
  }
});


When('{string} enters country {string}', async function (userRolestring, EnterCountry) {
  try {
    await objInfrastructurePage.EnterCountry(EnterCountry);
  }
  catch (error) {
    await console.log("Feature name : Device Inventory and Scenario name : ")
    await console.log(error)
    throw "User is not able to enter country feild"
  }
});

When('{string} enters region {string}', async function (userRole, Region) {
  try {
    await objInfrastructurePage.EnterRegion(Region);
  }
  catch (error) {
    await console.log("Feature name : Device Inventory " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to enter the region"
  }
});

When('{string} clicks on add device', async function (userRole) {
  try {
    await objInfrastructurePage.AddDeviceTOList();
  }
  catch (error) {
    await console.log("Feature name : Device Inventory " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to click on add device button"
  }
});

Then('Success toaster must be shown and device must be added to the list {string}', async function (SuccessPopUp) {
  try {
    // await element(by.className('smo smo-close-black-alt')).click();
    // await browser.sleep(5000)
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(async function (text) {
      await console.log(text)
      await expect(text).to.include(SuccessPopUp);
    });
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  }
  catch (error) {
    await console.log("Feature name : Device Inventory and Scenario name : ")
    await console.log(error)
    throw "Device is not added to the list"
  }
});


Then('{string} unable to find add device option', async function (userRole) {
  try {
    // await browser.wait(EC.invisibilityOf(element(by.xpath('//span[text()="Add Device"]'))), 1000);
    // expect(element(by.xpath('//span[text()="Add Device"]')).isPresent()).to.eventually.equal(false);
    await element(by.xpath('//span[text()="Add Device"]')).isPresent().then(function (select) {
      expect(select).to.be.false;
    });
  }
  catch (error) {
    await console.log("Feature name : Device Inventory " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to render the URL"
  }
});


// Itops Admin updates the device in the device inventory.

When('{string} clicks on resource name {string}', async function (userRole, ResourceName) {
  try {
    await objInfrastructurePage.ResourceName(ResourceName);
  }
  catch (error) {
    await console.log("Feature name : Device Inventory " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to click on resource name"
  }
});

When('{string} edit the resource type {string}', async function (userRole, EditResourceType) {
  try {
    await objInfrastructurePage.EditResourceType(EditResourceType);
  }
  catch (error) {
    await console.log("Feature name : Device Inventory " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "User is not able to edit the resource type"
  }
});

Then('{string} verifies the update button is visible', async function (userRole) {
  try {
    await browser.sleep(3000)
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Update Device"]'))), 100000);
  }
  catch (error) {
    await console.log("Feature name : Device Inventory " + userRole + " and Scenario name : ")
    await console.log(error)
    throw "Update button is not visible"
  }
});


// Itops Engineer unable to update the device in the device inventory.

When('{string} unable to edit the resource type', async function (string) {
  try {
    // await browser.wait(EC.invisibilityOf(element(by.xpath('//div[text()="RESOURCE TYPE"]//following::input[@type="text"]'))), 1000);
    // expect(element(by.xpath('//div[text()="RESOURCE TYPE"]//following::input[@type="text"]')).isPresent()).to.eventually.equal(false);
    await element(by.xpath('//div[text()="RESOURCE TYPE"]//following::input[@type="text"]')).isPresent().then(function (select) {
      expect(select).to.be.false;
    });
  }
  catch (error) {
    await console.log("Feature name : Device Inventory and Scenario name : ")
    await console.log(error)
    throw "User is not able to edit the resource type"
  }
});