import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
let objAlerts = new AlertsPage();
var EC = browser.ExpectedConditions;


When('{string} clicks on the checkbox of the ticket', async function (string) {
  try {
    await objAlerts.clickOnAlertCheckBox()
  } catch (error) {
    await console.log("Action Name : clicking on ticket number")
    await console.log(error)
    throw "ticket number is not available"
  }
});

When('{string} enters closure note as {string} and click on Ok', async function (string, ClosingComment) {
  try {
    await objAlerts.enterClosingComment(ClosingComment)
    await objAlerts.clickOnAddClosureComment()
  } catch (error) {
    await console.log(error)
    throw "unable to enter closure note"
  }
});
