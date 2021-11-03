import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { AlertConsoleTableData } from "../../PageObjects/AlertConsoleTableData";
var EC = browser.ExpectedConditions;
let objAlerts = new AlertsPage();
let objAlertsTableData = new AlertConsoleTableData();
var moment = require("moment");
var fse = require("fs-extra");

// Entering alert name in search box field

When('{string} enters {string} and clicks on enter {string}', async function (string, SearchData, SearchAlertData) {
  try {
    await browser.sleep(2000)
    await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 10000);
    await objAlerts.Alert_Search(SearchAlertData);
  } catch (error) {
    console.log("Feature Name : Search Functionality : Alert Page - Entering " + SearchData + " in search field box")
    console.log(error);
    throw "User not able to enter in search box field in alert page"
  }
});

// Search by node name

Then('verify search result should contain all the alerts from the same node name {string}', async function (NodeName) {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async (elm) => {
      if (elm == false) {
        await browser.sleep(2000);
        var i = 1
        await console.log("\n" + moment().format("YYYY-MM-DD HH:mm:ss SSS") + " table page number: " + i);
        await objAlertsTableData.verifyNodeColumn(NodeName);
        i++;
        var isNextPageAvailable = "";
        await objAlertsTableData.isElementIsDisplayed().then((visible) => {

          return this.isNextPageAvailable = visible;
        });
        while (this.isNextPageAvailable) {
          await browser.wait(EC.elementToBeClickable(objAlertsTableData.nextArrayButton), 30000);
          await browser.sleep(500);
          objAlertsTableData.nextArrayButton.click();
          await objAlertsTableData.verifyNodeColumn(NodeName);
          i++;
          await objAlertsTableData.isElementIsDisplayed().then((visible) => {
            this.isNextPageAvailable = visible;
          });
        }
      }
    });
  } catch (error) {
    console.log("Feature Name : Search Functionality : Scenario Name : Search by node name")
    console.log(error);
    throw "Alerts are not shown by search input(Node Name)"
  }
});
//Search by Alert Metric

Then('verify search result should contain all the alerts which has alert metric matching the search criteria {string}', async function (AlertMetricData) {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async (elm) => {
      if (elm == false) {
        await browser.sleep(2000);
        var i = 1
        await objAlertsTableData.verifyAlertMetricColumn(AlertMetricData);
        i++;
        var isNextPageAvailable = "";
        await objAlertsTableData.isElementIsDisplayed().then((visible) => {

          return this.isNextPageAvailable = visible;
        });
        while (this.isNextPageAvailable) {
          await browser.wait(EC.elementToBeClickable(objAlertsTableData.nextArrayButton), 30000);
          await browser.sleep(500);
          objAlertsTableData.nextArrayButton.click();
          await objAlertsTableData.verifyAlertMetricColumn(AlertMetricData);
          i++;
          await objAlertsTableData.isElementIsDisplayed().then((visible) => {
            this.isNextPageAvailable = visible;
          });
        }
      }
    });
  } catch (error) {
    console.log("Feature Name : Search Functionality : Scenario Name : Search by Alert Metric")
    console.log(error);
    throw "Alerts are not shown by search input(Alert Metric)"
  }
});

//Search by Alert Name

Then('verify search result should contain all the alerts which has alert name matching the search criteria {string}', async function (AlertName) {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async (elm) => {
      if (elm == false) {
        await browser.sleep(2000);
        var i = 1
        await objAlertsTableData.verifyAlertNameColumn(AlertName);
        i++;
        var isNextPageAvailable = "";
        await objAlertsTableData.isElementIsDisplayed().then((visible) => {

          return this.isNextPageAvailable = visible;
        });
        while (this.isNextPageAvailable) {
          await browser.wait(EC.elementToBeClickable(objAlertsTableData.nextArrayButton), 30000);
          await browser.sleep(500);
          objAlertsTableData.nextArrayButton.click();
          await objAlertsTableData.verifyAlertNameColumn(AlertName);
          i++;
          await objAlertsTableData.isElementIsDisplayed().then((visible) => {
            this.isNextPageAvailable = visible;
          });
        }
      }
    });
  } catch (error) {
    console.log("Feature Name : Search Functionality : Scenario Name : Search by Alert Name")
    console.log(error);
    throw "Alerts are not shown by search input(Alert Name)"
  }
});
Then('{string} verifies BA label should be displayed along with base alert id in the {string} of child', async function (string, string2) {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async (elm) => {
      if (elm == false) {
        await browser.wait(EC.elementToBeClickable(element(by.xpath("//div[@class='text-font-dark text-with-bold']"))), 30000);

      }
    });
  } catch (error) {
    console.log(error)
    throw ""
  }
});


Then('{string} verifies Severity strip should be shown for individual alert which is shown in search result, not cluster severity', async function (string) {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async (elm) => {
      if (elm == false) {
        await browser.wait(EC.elementToBeClickable(element(by.xpath("//div[@tooltipposition='right']"))), 30000);

      }
    });
  } catch (error) {
    await console.log(error)
    throw "Severity Strip is missing"
  }
});

Then('{string} verifies All console data should be for individual alerts data not cluster data', async function (string) {           // Write code here that turns the phrase above into concrete actions
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async (elm) => {
      if (elm == false) {
        await browser.wait(EC.visibilityOf(element(by.className("smo-table-scrollable-body ng-star-inserted"))), 30000);

      }
    });
  } catch (error) {
    await console.log(error)
    throw "Every individual alert doesn't have data"
  }
});


Then('{string} verifies Last alert time, {string} should be displayed', async function (string, string2) {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async (elm) => {
      if (elm == false) {
        await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='Last Alert Time ']"))), 30000);
        await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='State/Action']"))), 30000);
      }
    });

  } catch (error) {
    await console.log(error)
    throw "last name and state/action doesn't exist"
  }
});