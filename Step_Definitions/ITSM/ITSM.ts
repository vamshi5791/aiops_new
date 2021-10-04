import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { ServiceNowAPI } from '../../ServiceNowAPI/servicenowAPI';
import { AlertsPage } from "../../PageObjects/AlertsPage";
let objAlerts = new AlertsPage();
let objServiceNow = new ServiceNowAPI();
var expect = chai.expect;
var EC = browser.ExpectedConditions;
var resultState;
var systemID;
When('{string} selects the ticket {string} and change the state to {string}', async function (string, IncidentID, Status) {
    resultState = await objServiceNow.apiServiceNow(IncidentID)
    systemID = resultState.sys_id;
    await objServiceNow.updateIncServiceNow(systemID, Status)

});

When('{string} Login to service now as ninetyone user and create a incident', async function (string) {
    resultState = await objServiceNow.createNewInc()
    await console.log("+++++++++++++++"+resultState)
});

Then('{string} verifies Corresponding ticket should be shown in filter results with status as {string}', async function (string, State) {
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="' + State + '"]'))), 100000);
});

When('{string} selects the ticket {string}, state as {string}, category as {string}, subcategory as {string}, close code as {string}, Enter close note as {string} and update', async function (string, TicketNumber, state, category, subCategory, closeCode, closeNote) {
    resultState = await objServiceNow.apiServiceNow(TicketNumber)
    systemID = resultState.sys_id;
    await objServiceNow.updateTicketToResolved(systemID, state, category, subCategory, closeCode, closeNote)

});

When('{string} Search in ticket Console after {string} minutes', async function (string, string2) {
//instead of waiting for 6 minutes , verification steps are written after all the ITSM scenarios 
  });

  When('{string} enters {string} in ticket console and clicks on enter {string}', async function (string, SearchData, SearchAlertData) {
    try {
      await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 10000);
      await objAlerts.Alert_Search(resultState);
    } catch (error) {
      console.log("Feature Name : Search Functionality : Alert Page - Entering " + SearchData + " in search field box")
      console.log(error);
      throw "User not able to enter in search box field in alert page"
    }
  });

  Then('{string} verifies ticket console should display new Sevice now ticket created with Title, Description, Category, Priority and Time info', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });