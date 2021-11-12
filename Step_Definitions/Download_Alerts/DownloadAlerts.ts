import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { AlertConsoleTableData } from "../../PageObjects/AlertConsoleTableData";

let objAlertsTableData = new AlertConsoleTableData();
var moment = require("moment");
var fse = require("fs-extra");
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objAlerts = new AlertsPage();
let tableData: any = [];
When('{string} clicks on download icon', async function (string) {
  try {
    await browser.wait(EC.elementToBeClickable(objAlerts.btnDownloadIcon), 30000);
    await browser.wait(EC.presenceOf(objAlerts.btnDownloadIcon), 30000);
    await objAlerts.clickOnDownloadIcon()
  } catch (error) {
    await console.log(error)
    throw "unable to click on download icon"
  }
});

When('{string} reads data from downloaded csv file', async function (string) {
  // read data from xlsx/csv file
  const XLSX = require('xlsx');
  const workbook = XLSX.readFile('./alertExportFile.csv', {
    type: 'binary',
    cellDates: true,
    cellNF: false,
    cellText: false
  });
  const sheet_name_list = workbook.SheetNames;
  this.downloadedAlertsDta = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
});



When('{string} reads data from alerts console', async function (string) {
  // to read complete table data
  //mandatory hard wait time 
  await browser.sleep(2000);
  var i = 1

  await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " table page number: " + i);
  await objAlertsTableData.extractTableData().then(async (pageData) => {
    await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " table data: ");
    this.tableData = pageData;
    console.log("tableData lenth: 0" + this.tableData.length);

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

    await objAlertsTableData.extractTableData().then(async (pageData) => {
      await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " table data: ");
      this.tableData = this.tableData.concat(pageData);
      console.log("tableData lenth: 1 " + this.tableData.length);

    });
    i++;
    await objAlertsTableData.isElementIsDisplayed().then((visible) => {
      this.isNextPageAvailable = visible;
    });
  }
  await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " after while " + i);
});


When('{string} clicks on download icon button', async function (string) {
  try {
    // await browser.sleep(3000)
    await browser.wait(EC.elementToBeClickable(objAlerts.btnDownloadIcon), 30000);
    await browser.wait(EC.presenceOf(objAlerts.btnDownloadIcon), 30000);
    await objAlerts.clickOnDownloadIcon()
    await objAlerts.clickOnDownloadAlertReport();
  } catch (error) {
    await console.log(error)
    throw "unable to click on download icon"
  }
});
Then('{string} verifies the data displayed is same as UI', async function (string) {
  // //validating data

  console.log("tableData.length========: " + this.tableData.length);
  console.log("downloadedAlertsDta.length========: " + this.downloadedAlertsDta.length);
  console.log("tableData[1] : " + this.tableData[0]);
  console.log(this.tableData[0]);
  console.log("downloadedAlertsDta[1]: " + this.downloadedAlertsDta[1]);
  console.log(this.downloadedAlertsDta[0]);
  for (let i = 0; i < this.tableData.length; i++) {
    var tableObj = this.tableData[i];
    var downloadedObj = this.downloadedAlertsDta[i];
    await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " Verifying table row num: " + i);
    await console.log(i + " : tableObj['3']: " + tableObj['3'] + ", downloadedObj['Alert ID']: " + downloadedObj['Alert ID']);
    expect(downloadedObj['Alert Name']).to.include(tableObj['6']);
    expect(downloadedObj['Resource Name']).to.include(tableObj['10']);
    expect(downloadedObj['IP Address']).to.include(tableObj['11']);
    expect(downloadedObj['Metrics']).to.include(tableObj['12']);
  }
  await console.log("\n" + moment('2021-09-14T07:48:00.000Z').format("hh:mm:ss A DD-MMM-YYYY") + " >>>>>>>> date format");
});



Then('{string} verifies that download option should not be present', async function (string) {
  try {
    await element(by.className('smo smo-download cursor-pt ng-star-inserted')).isPresent().then(function (select) {
      expect(select).to.be.false;
    });
  } catch (error) {
    console.log(error)
    throw "download icon exist's for display user role"
  }

});


