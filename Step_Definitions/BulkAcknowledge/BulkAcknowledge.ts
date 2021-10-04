import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { InfrastructurePage } from "../../PageObjects/InfrastructurePage";
import { AlertsPage } from "../../PageObjects/AlertsPage";

var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objInfrastructurePage = new InfrastructurePage();
let objAlerts = new AlertsPage();


Given('User clicks on alert cluster', async function () {
  await objAlerts.Cluster();
});

Given('User selects select all check box', async function () {
  await objAlerts.Checkbox();
});

Given('User clicks on cancel', async function () {
  await objAlerts.cancel();
});

Given('Admin verifies acknowledge option is not present', async function () {
  await browser.wait(EC.invisibilityOf(objAlerts.btnAcknowledge), 100000);

});


Then('{string} enters resource name as {string}', async function (string, ResourceName) {
  await objAlerts.ResourceName(ResourceName);
});


Then('{string} clicks on checkbox', async function (string) {
  await browser.sleep(3000)
  await objAlerts.Alertscheckbox();
});
Then('{string} clicks on three dots button', async function (string) {
  await objAlerts.Threedots();
});
Then('{string} clicks on Acknowledge', async function (string) {
  await objAlerts.Acknowledge()
});


