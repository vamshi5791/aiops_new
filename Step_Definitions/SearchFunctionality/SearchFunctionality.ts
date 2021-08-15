import { When, Then } from "cucumber"
import { browser, element, by} from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
var EC = browser.ExpectedConditions;
let objAlerts = new AlertsPage();
 
When('{string} enters {string} and clicks on enter {string}', async function (string, string2, SearchAlertData) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 10000);
    // await browser.wait(EC.visibilityOf(objAlerts.drpSavedFilter), 10000);
    await objAlerts.Alert_Search(SearchAlertData);
  } catch (error) {
    console.log("Feature Name : Search Functionality : Alert Page - Entering text in search field box")
    console.log(error);
    throw "User not able to enter in search box field in alert page"
  }
 
});
 

// Search by node name

Then('verify search result should contain all the alerts from the same node name', async function () {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
  myElement.isPresent().then(async function (elm) {
    if (elm == false) {
     await console.log("data is available")
    } 
  });
  } catch (error) {
    console.log("Feature Name : Search Functionality : Scenario Name : Search by node name")
    console.log(error);
    throw "Alerts are not shown by search input(Node Name)"
  } 
  //await browser.wait(EC.visibilityOf(objAlerts.txtRowsPerPage), 10000);
});
//Search by Alert Metric

Then('verify search result should contain all the alerts which has alert metric matching the search criteria {string}', async function (AlertMetricData) {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async function (elm) {
      if (elm == false) {
        await objAlerts.getAlertMetric(AlertMetricData);
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
  myElement.isPresent().then(async function (elm) {
    if (elm== false) {
      objAlerts.getAlertName(AlertName);
    } 
  });
  } catch (error) {
    console.log("Feature Name : Search Functionality : Scenario Name : Search by Alert Name")
    console.log(error);
    throw "Alerts are not shown by search input(Alert Name)"
  }
});
