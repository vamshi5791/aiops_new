import { When, Then } from "cucumber"
import { browser } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";

var EC = browser.ExpectedConditions;
var fs = require('fs');
let objAlerts = new AlertsPage();


When('{string} enters value {string} in auto refresh textbox', async function (string, AutoRefreshValue) {

  try {
    await objAlerts.enterAutoRefreshInEvery(AutoRefreshValue);
  } catch (error) {
    await console.log("Feature name : Refresh Options and Scenario name : enters value in auto refresh textbox")
    await console.log(error)
    throw "User unable to enter in auto refresh text box field"
  }
});

When('{string} clicks on tick button', async function (UserName) {

  try {
    await objAlerts.clickOnRefreshInEveryRightButton();
  } catch (error) {
    await console.log("Feature name : Refresh Options and Scenario name : clicks on tick button")
    await console.log(error)
     throw "User unable to click on tick button"
  }
});

Then('verify a success message should be displayed {string}', async function (Toaster) {

  try {
    await objAlerts.verifyToaster(Toaster);
  } catch (error) {
    await console.log("Feature name : Refresh Options and Scenario name : verify a success message should be displayed")
    await console.log(error)
    throw "Success message is not displayed"
  }
});


Then('verify that page gets refreshed on every {string} minutes and data got added if any', async function (string) {

  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtSpinner), 10000);
  } catch (error) {
    await console.log("Feature name : Refresh Options and Scenario name : verify that page gets refreshed on every few minutes and data got added if any ")
    await console.log(error)
    throw "the page is not getting refreshed with mentioned time"
  }
});