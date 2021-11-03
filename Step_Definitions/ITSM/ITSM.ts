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
var resultCreatedTicket;
When('{string} selects the ticket {string} and change the state to {string}', async function (string, IncidentID, Status) {
  try {
    resultState = await objServiceNow.apiServiceNow(IncidentID)
    systemID = resultState.sys_id;
    await objServiceNow.updateIncServiceNow(systemID, Status)
  } catch (error) {
    await console.log(error)
    throw "unable to change ticket state in service now"
  }
});

When('{string} Login to service now as ninetyone user and create a incident', async function (string) {
  try {
    resultCreatedTicket = await objServiceNow.createNewInc()
  } catch (error) {
    await console.log(error)
    throw "unable to create new ticket in service now"
  }
});

Then('{string} verifies Corresponding ticket should be shown in filter results with status as {string}', async function (string, State) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="' + State + '"]'))), 100000);
  } catch (error) {
    await console.log(error)
    throw "unable to change ticket state in service now"
  }
});

When('{string} selects the ticket {string}, state as {string}, category as {string}, subcategory as {string}, close code as {string}, Enter close note as {string} and update', async function (string, TicketNumber, state, category, subCategory, closeCode, closeNote) {
  try {
    resultState = await objServiceNow.apiServiceNow(TicketNumber)
    systemID = resultState.sys_id;
    await objServiceNow.updateTicketToResolved(systemID, state, category, subCategory, closeCode, closeNote)
  } catch (error) {
    await console.log(error)
    throw "unable to change ticket state in service now"
  }
});

When('{string} Search in ticket Console after {string} minutes', async function (string, string2) {
  //instead of waiting for 6 minutes , verification steps are written after all the ITSM scenarios 
});

When('{string} enters {string} in ticket console and clicks on enter', async function (string, SearchData) {
  try {
    await browser.sleep(2000)
    await console.log(resultCreatedTicket)
    await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 10000);
    await objAlerts.Alert_Search(resultCreatedTicket);
  } catch (error) {
    await console.log(error);
    throw "User not able to enter in search box field in alert page"
  }
});

Then('{string} verifies ticket console should display new Service now ticket created with {string}, {string}, {string}, {string} and {string}', async function (string, Title, Description, Category, Priority, CreatedTime) {

  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + Title + ' " ]'))), 10000);
    await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + Description + ' " ]'))), 10000);
    await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + Category + ' " ]'))), 10000);
    await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + Priority + ' " ]'))), 10000);
    await browser.wait(EC.visibilityOf(element(by.xpath('//th[text()="' + CreatedTime + ' " ]'))), 10000);
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[contains(@class,'text-font-dark text-with-bold')]"))), 10000);
  } catch (error) {
    await console.log(error)
    throw "created incident details not updated in ticket console"
  }
});
Then('{string} verifies ticket number in alert console', async function (string) {

  try {
    await browser.wait(EC.invisibilityOf(element(by.xpath('//span[@class="cursor-pt ng-star-inserted"]'))), 10000);
  } catch (error) {
    await console.log(error)
    throw "created incident details not updated in ticket console"
  }
});