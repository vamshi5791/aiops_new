import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { AlertConsoleTableData } from "../../PageObjects/AlertConsoleTableData";

let objAlertsTableData = new AlertConsoleTableData();
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objAlerts = new AlertsPage();
var moment = require("moment");


When('{string} default value in rows per page is {string}', async function (string, string2) {
  try {
    await element(by.xpath("//label[text()='10']")).isPresent().then(function (select) {
      expect(select).to.be.true;
    });
  } catch (error) {
    await console.log("Action Name : Default value in rows per page")
    await console.log(error)
    throw "Verifying default value in rows per page "
  }
});


When('{string} clicks on rows per page dropdown', async function (string) {
  try {
    await browser.sleep(8000)
    await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[text()="Rows per page"]//following::smo-dropdown'))), 50000);
    await element(by.xpath('//span[text()="Rows per page"]//following::smo-dropdown')).click();
  } catch (error) {
    await console.log("Action Name : clicking on rows per page dropdown")
    await console.log(error)
    throw "unable to click on rows per page dropdown "
  }
});


Then('{string} verifies rows per page contains {string}', async function (string, string2) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='10']"))), 50000);
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='20']"))), 50000);
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='30']"))), 50000);
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='50']"))), 50000);
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='100']"))), 50000);

  } catch (error) {
    await console.log("Action Name : verifies rows per page contains 10, 20, 30, 50 and 100")
    await console.log(error)
    throw "Rows per page doesn't have 10, 20, 30, 50 and 100 options "
  }
});


Then('{string} verifies that on alert console {string} alerts are displayed', async function (string, RowsInPage) {
  try {
    await browser.sleep(2000);
    var i = 1
     this.pageRowCount = 0;
    await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " table page number: " + i);
    await objAlertsTableData.getTableDataRowCount().then(async (pageRowCount) => {
      await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " table data: ");
      this.tableRowCount = pageRowCount;
      console.log("tableData lenth: 0" + this.tableRowCount);
    
    });
    
    i++;
    var isNextPageAvailable = "";
    await objAlertsTableData.isElementIsDisplayed().then((visible) => {
      return this.isNextPageAvailable = visible;
    });
    
    await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " before while " + i);
    while (this.isNextPageAvailable) {
      await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " before elementToBeClickable " + i);
      await browser.wait(EC.elementToBeClickable(objAlerts.nextArrayButton), 30000);
      await browser.sleep(500);
      objAlerts.nextArrayButton.click();
      await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " table page number: " + i);
    
      await objAlertsTableData.getTableDataRowCount().then(async (pageRowCount) => {
        await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " table data: ");
        this.tableRowCount = this.tableRowCount.concat(pageRowCount);
        console.log("tableData lenth: 1 " + this.tableRowCount);
    
      });
      i++;
      await objAlertsTableData.isElementIsDisplayed().then((visible) => {
        this.isNextPageAvailable = visible;
      });
    }
    await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " after while " + this.tableRowCount);
  } catch (error) {
    await console.log("Action Name : verifies that on alert console should contains "+RowsInPage+" alerts are displayed")
    await console.log(error)
    throw "Alert console doesn't have 20 alerts"
  }
});
