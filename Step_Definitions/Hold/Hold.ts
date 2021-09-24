import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { DisplayConfiguration } from "../../PageObjects/DisplayConfiguration";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { support } from '../../support/support';
import { PolicyObjects } from '../../PageObjects/policyObjects';
import { Tickets } from '../../PageObjects/Tickets';
let objAlerts = new AlertsPage();
let objsupport = new support();
let objTicket = new Tickets()
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

When('{string} Go to serviceNow and verify the ticket is in On Hold status', function (string) {

});

When('{string} enters closure note as {string} and click on Ok', async function (string, ClosingComment) {
  try {
    await objAlerts.enterClosingComment(ClosingComment)
    await objAlerts.clickOnAddClosureComment()
  } catch (error) {
    await console.log("Action Name : clicking on ticket number")
    await console.log(error)
    throw "ticket number is not available"
  }
});
When('{string} in service now that ticket is closed and closure note is added', function (string) {

});