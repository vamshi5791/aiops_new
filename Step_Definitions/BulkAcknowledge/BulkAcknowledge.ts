import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";

var EC = browser.ExpectedConditions;
let objAlerts = new AlertsPage();

Given('User clicks on alert cluster', async function () {
  try {
    await objAlerts.Cluster();
  } catch (error) {
    await console.log("Action Name : clicks on alert cluster ")
    await console.log(error)
    throw "Admin unable to clicks on alert cluster"
  }
});

Given('User selects select all check box', async function () {
  try {
    await objAlerts.allAlertsCheckboxInClusterPopup();

  } catch (error) {
    await console.log("Action Name : selects select all check box ")
    await console.log(error)
    throw "Admin unable to selects select all check box"
  }


});

Given('User clicks on cancel', async function () {
  try {
    await objAlerts.cancel();

  } catch (error) {
    await console.log("Action Name : User clicks on cancel ")
    await console.log(error)
    throw "Admin unable to User clicks on cancel "
  }


});

Given('Admin verifies acknowledge option is not present', async function () {
  try {
    await browser.wait(EC.invisibilityOf(objAlerts.btnAcknowledge), 100000);

  } catch (error) {
    await console.log("Action Name : Admin verifies acknowledge option is not present ")
    await console.log(error)
    throw "Acknowledge option is present"
  }



});


Then('{string} enters resource name as {string}', async function (string, ResourceName) {
  try {
    await objAlerts.ResourceName(ResourceName);

  } catch (error) {
    await console.log("Action Name : enters resource name ")
    await console.log(error)
    throw "Admin unable to enters resource name"
  }


});


Then('{string} clicks on checkbox', async function (string) {
  try {
    // await browser.sleep(3000)
    await objAlerts.Alertscheckbox();
  } catch (error) {
    await console.log("Action Name : clicks on checkbox ")
    await console.log(error)
    throw "Admin unable to clicks on checkbox"
  }


});
Then('{string} clicks on three dots button', async function (string) {
  try {
    await objAlerts.Threedots();

  } catch (error) {
    await console.log("Action Name : clicks on three dots button ")
    await console.log(error)
    throw "Admin unable to clicks on three dots button"
  }


});
Then('{string} clicks on Acknowledge', async function (string) {
  try {
    await objAlerts.Acknowledge()

  } catch (error) {
    await console.log("Action Name : clicks on Acknowledge ")
    await console.log(error)
    throw "Admin unable to clicks on Acknowledge"
  }


});


