import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
var EC = browser.ExpectedConditions;
let objAlerts = new AlertsPage();

When('{string} selects severity condition as {string}', async function (string, SeverityCondition) {
  await element(by.xpath('//span[text()="'+SeverityCondition+'"]')).click()
});


Then('{string} verifies search should be performed on top of the severity filter applied {string}', async function (string, SeverityCondition) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='"+SeverityCondition+"']"))), 50000);
  } catch (error) {
    await console.log("Action Name : Verifies the Alert console for the particular ticket")
    await console.log(error)
    throw "Ticket "
  }
});

Then('{string} clicks on auto refresh button', async function (string) {
  try {
    await objAlerts.clickOnAutoRefresh()
  } catch (error) {
    await console.log("Action Name : Verifies the Alert console for the particular ticket")
    await console.log(error)
    throw "Ticket "
  }
});


Then('{string} verifies that applied severity condition should be there after refresh also {string}', async function (string, SeverityCondition) {      
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='"+SeverityCondition+"']"))), 50000);
  } catch (error) {
    await console.log("Action Name : Verifies the Alert console for the particular ticket")
    await console.log(error)
    throw "Ticket "
  }
});

