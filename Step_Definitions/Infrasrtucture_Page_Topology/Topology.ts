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
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="Device Inventory"]'))), 60000);
  }
  catch (error) {
    await console.log("Feature name : Infrastructure Topology " + userRole + " and Scenario name : opens infrastructure page")
    await console.log(error)
    throw "User is not able to open infrastructure page"
  }
});

When('{string} clicks on Topology icon', async function (userRole) {
  try {
    await objInfrastructurePage.Topology();
  }
  catch (error) {
    await console.log("Feature name : Infrastructure Topology " + userRole + " and Scenario name : clicks on Topology icon")
    await console.log(error)
    throw "User is not able to click on Topology icon"
  }
});

When('{string} clicks on import', async function (userRole) {
  try {
    await objInfrastructurePage.Import();
  }
  catch (error) {
    await console.log("Feature name : Infrastructure Topology " + userRole + " and Scenario name : clicks on import")
    await console.log(error)
    throw "User is not able to click on import"
  }
});

When('{string} verifies the upload option is not visible', async function (userRole) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.xpath('//span[@class="smo-btn-icon-col d-flex align-items-center smo smo-delete smo-clickable smo-button-icon-right smo-flex-order-three ng-star-inserted"]'))), 100000);
  }
  catch (error) {
    await console.log("Feature name : Infrastructure Topology " + userRole + " and Scenario name : verifies the upload option is not visible")
    await console.log(error)
    throw "Upload option is visible"
  }
});

When('{string} verifies the delete option is not visible', async function (userRole) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.xpath('//span[@class="smo-btn-icon-col d-flex align-items-center smo smo-delete smo-clickable smo-button-icon-right smo-flex-order-three ng-star-inserted"]'))), 100000);
  }
  catch (error) {
    await console.log("Feature name : Infrastructure Topology " + userRole + " and Scenario name : verifies the delete option is not visible")
    await console.log(error)
    throw "Delete option is visible"
  }
});

When('{string} searches device name {string}', async function (userRole, DeviceName) {
  try {
    await objInfrastructurePage.Search(DeviceName);
  }
  catch (error) {
    await console.log("Feature name : Infrastructure Topology " + userRole + " and Scenario name : searches device name")
    await console.log(error)
    throw "User is not able to searche device name"
  }
});


Then('device should be available {string}', async function (Device) {
  try {
    await browser.actions().mouseMove(element(by.xpath('//div[@class="vis-network"]//canvas'))).click().perform
    await element(by.xpath('//div[@class="vis-network"]/div[@class="vis-tooltip"]')).getText().then(async function (text) {
      await expect(text).to.include(Device);
    });
  }
  catch (error) {
    await console.log("Feature name : Infrastructure Topology  and Scenario name :  device should be available")
    await console.log(error)
    throw "Device is not available"
  }
});

When('{string} clicks the delete topology icon', async function (userRole) {
  try {
    await objInfrastructurePage.Delete();
  }
  catch (error) {
    await console.log("Feature name : Infrastructure Topology " + userRole + " and Scenario name :  clicks the delete topology icon")
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
    await console.log("Feature name : Infrastructure Topology " + userRole + " and Scenario name : clicks on yes for conformation")
    await console.log(error)
    throw "User is not able to click on yes for conformation"
  }
});

Then('device should not be available {string}', async function (string) {
  try {
    await browser.wait(EC.invisibilityOf(element(by.xpath('//div[@class="vis-tooltip"]'))), 1000);
  }
  catch (error) {
    await console.log("Feature name : Infrastructure Topology and Scenario name : device should not be availabl")
    await console.log(error)
    throw "Device is available"
  }
});


When('{string} selects the valid file to be uploaded', async function (string) {
    
try {
  await console.log("directory path: " + __dirname);
  var basePath = __dirname;
  basePath = basePath.split('JSFiles')[0];
  await console.log("basePath: " + basePath);

  var filePath = basePath + "\Sample_Topology.xlsx";
  await console.log("filePath: " + filePath);

  // await objInfrastructurePage.browseFile.sendKeys('C:\\Yadagiri\\Testing\\protractor_ws\\itops-automation\\Sample_Topology.xlsx');
  await objInfrastructurePage.browseFile.sendKeys(filePath);
  await browser.sleep(1000)
} catch (error) {
  await console.log("Action Name : selects the valid file to be uploaded ")
  await console.log(error)
  throw "Admin unable to selects the valid file to be uploaded "
}

});


When('{string} clicks on upload button', async function (string) {
  try {
    await browser.wait(EC.elementToBeClickable(objInfrastructurePage.btnUploadFile), 30000);
    await browser.sleep(500);
    await objInfrastructurePage.btnUploadFile.click();
  } catch (error) {
    await console.log("Action Name : clicks on upload button ")
    await console.log(error)
    throw "Admin unable to clicks on upload button"
  }

});






