import { When, Then } from "cucumber"
import { browser, element, by} from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
var EC = browser.ExpectedConditions;
let objAlerts = new AlertsPage();
 
When('{string} enters {string} and clicks on enter {string}', async function (string, string2, SearchAlertData) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.drpSavedFilter), 10000);
    await objAlerts.Alert_Search(SearchAlertData);
  } catch (error) {
    await console.log("Feature name : Search Functionality and Scenario name :  ")
    await console.log(error)
    throw ""
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
    await console.log("Feature name : Search Functionality and Scenario name :  ")
    await console.log(error)
    throw ""
  } 
  //await browser.wait(EC.visibilityOf(objAlerts.txtRowsPerPage), 10000);
});
//Search by alert metric

Then('verify search result should contain all the alerts which has alert metric matching the search criteria {string}', async function (AlertMetricData) {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async function (elm) {
      if (elm == false) {
        await objAlerts.getAlertMetric(AlertMetricData);
      }
    });
  } catch (error) {
    await console.log("Feature name : Search Functionality and Scenario name :  ")
    await console.log(error)
    throw ""
  }
  await browser.wait(EC.visibilityOf(objAlerts.txtRowsPerPage), 10000);
});

//Search by alert name

Then('verify search result should contain all the alerts which has alert name matching the search criteria {string}', async function (AlertName) {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
  myElement.isPresent().then(async function (elm) {
    if (elm) {
      objAlerts.getAlertName(AlertName);
    } 
  });
  } catch (error) {
    await console.log("Feature name : Search Functionality and Scenario name :  ")
    await console.log(error)
    throw ""
  }
  await browser.wait(EC.visibilityOf(objAlerts.txtRowsPerPage), 10000);
});






