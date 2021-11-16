import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
let objAlerts = new AlertsPage();
var EC = browser.ExpectedConditions;
import chai from "chai";
var expect = chai.expect;

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
When('{string} enters closure note on ticket resolution popup as {string}', async function (string, ClosingComment) {
  try {
    await element(by.xpath("//textarea[contains(@class,'textarea-width smo-textarea')]")).clear()
    await element(by.xpath("//textarea[contains(@class,'textarea-width smo-textarea')]")).sendKeys(ClosingComment)
  } catch (error) {
    await console.log(error)
    throw "unable to enter closure note"
  }
});

When('{string} verifies closure note editable', async function (string) {
  try {
    var el = element(by.xpath("//textarea[contains(@class,'textarea-width smo-textarea')]"));
    await expect(el.getAttribute('textarea')).toEqual('textarea');
  } catch (error) {
    await console.log(error)
    var myElement = element(by.xpath("//span[text()='Cancel']"));
    myElement.isPresent().then(async function (elm) {
      if (elm) {
        await browser.wait(EC.elementToBeClickable(element(by.xpath("//span[text()='Cancel']"))), 10000);
        await browser.wait(EC.presenceOf(element(by.xpath("//span[text()='Cancel']"))), 10000);
        await element(by.xpath("//span[text()='Cancel']")).click();
      }
    });
    throw "closure not is not editable"
  }
});