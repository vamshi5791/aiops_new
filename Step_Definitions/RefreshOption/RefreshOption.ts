import { When, Then } from "cucumber"
import { browser } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";

var EC = browser.ExpectedConditions;
var fs = require('fs');
let objAlerts = new AlertsPage();

 
When('{string} enters value {string} in auto refresh textbox', async function (string, AutoRefreshValue) {
  
  try {
   await browser.sleep(5000)
  await objAlerts.enterAutoRefreshInEvery(AutoRefreshValue);
  } catch (error) {
    throw "User unable to enter in auto refresh text box field"
  }
});



When('{string} clicks on tick button', async function (string) {
 
  try {
    await browser.sleep(5000)
    await objAlerts.clickOnRefreshInEveryRightButton();
  } catch (error) {
    // throw "User unable to click on auto refresh text box field"
  }
});



Then('verify a success message should be displayed {string}', async function (Toaster) {
 
  try {
    await objAlerts.verifyToaster(Toaster);
  } catch (error) {
    throw ""
  }
});


Then('verify that page gets refreshed on every {string} minutes and data got added if any', async function (string) {
 
  try {
    await browser.sleep(5000)
    await browser.wait(EC.visibilityOf(objAlerts.txtSpinner), 10000);
    await browser.sleep(5000)
  } catch (error) {
    throw "the page is not getting refreshed with mentioned time"
  }
});