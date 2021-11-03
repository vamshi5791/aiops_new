import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
var EC = browser.ExpectedConditions;
let objAlerts = new AlertsPage();

When('{string} selects severity condition as {string}', async function (string, SeverityCondition) {
  try{
  await element(by.xpath('//span[text()="'+SeverityCondition+'"]')).click()
  }catch(error){
    await console.log(error)
    throw "unable to select severity condition"
  }
});


Then('{string} verifies search should be performed on top of the severity filter applied {string}', async function (string, SeverityCondition) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='"+SeverityCondition+"']"))), 50000);
  } catch (error) {
    await console.log(error)
    throw "unable to perform search on top of the severity filter"
  }
});

Then('{string} clicks on auto refresh button', async function (string) {
  try {
    await objAlerts.clickOnAutoRefresh()
  } catch (error) {
    await console.log(error)
    throw "Unable to click on auto refresh button"
  }
});


Then('{string} verifies that applied severity condition should be there after refresh also {string}', async function (string, SeverityCondition) {      
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='"+SeverityCondition+"']"))), 50000);
  } catch (error) {
    await console.log(error)
    throw "applied severity condition doesn't exist after refresh"
  }
});

