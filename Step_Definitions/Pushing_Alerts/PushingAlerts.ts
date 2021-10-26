import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { LogIn } from "../../PageObjects/LogIn";
import { PushingAlerts } from "../../PageObjects/RabbitMQ";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
import { ApiRabbitMQ } from "../../PageObjects/ApiRabbitMQ";
var objApiRabbitMQ = new ApiRabbitMQ()
import { ServiceNowAPI } from '../../ServiceNowAPI/servicenowAPI';
let objServiceNow = new ServiceNowAPI();
 
var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;
let objLogIn = new LogIn();
let objFilter = new PushingAlerts();
let objAlerts = new AlertsPage();
let objProjectListing = new ProjectListingPage();
var JsonAlert;
var StringifiedJsonAlert;
var Global_ProjectName;
var userName;
var TicketNumber;
var TxtShortDescription;
var ShortDescription;
var TicketNumber1;
var ShortDescriptionServiceNow;

When('{string} selects project and open alerts {string}', async function (userRole, ProjectName) {

  try {

    Global_ProjectName = ProjectName;
 
    await objProjectListing.Project_search(Global_ProjectName);
    await browser.sleep(3000);
    await browser.wait(EC.visibilityOf(element(by.xpath('//h3[text()=" ' + Global_ProjectName + ' "]'))), 100000);
    await objProjectListing.selectProject(Global_ProjectName);
    await browser.sleep(50000);

    await browser.wait(EC.visibilityOf(element(by.xpath('//a[text()="Alerts"]'))), 100000);
    await objAlerts.selectAlerts();

  }
  catch (error) {
    await console.log("Feature name : Pushing Alerts through RabbitMQ " + userName + " and Scenario name : selects project and open alerts")
    await console.log(error)
    throw "Project doesn't exist"
  }
})

Then('enter alertname in search box and verify alert details {string}', async function (AlertName) {
  try {

    await objAlerts.Alert_Search(AlertName);
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="' + AlertName + '"]'))), 100000);
  } catch (error) {

    await console.log("Feature name : Pushing Alerts through RabbitMQ " + userName + " and Scenario name : enter alertname in search box and verify alert details")
    await console.log(error)
    throw "Alert not found"
  };
});



  // ------------------Milestone3------------ 


  
//-----------------Short Description of Tickets -----------------

Then('{string} gets the ticket number', async function (string) {
  try {
    await objAlerts.txtTicket.getText().then(async function (TxtTicketNumber) {
      await console.log(TxtTicketNumber);
      TicketNumber = TxtTicketNumber;
    });
  }
  catch (error) {
    throw "User unable to get the ticket number"
  }
});


Then('{string} delete alerts from alert console', async function (string) {
  try {
    await objApiRabbitMQ.deleteQueryForAlerts();
  }
  catch (error) {
    await console.log(error)
    throw "alerts are not deleted"
  }
});
Then('{string} clicks on the ticket number', async function (string) {
  try {
    await objAlerts.Ticket();
  }
  catch (error) {
    throw "User is not able to clicks on the ticket number"
  }
});

Then('{string} gets the short description', async function (string) {
  try {
    await objAlerts.txtShortDescription.getText().then(async function (TxtShortDescription) {
      await console.log(TxtShortDescription);
      ShortDescription = TxtShortDescription
    });
  }
  catch (error) {
    await console.log(error)
    throw "User is not able to gets the short description"
  }
});


Given('User verifies short description in service now', async function () {
  try {
    var dd = await objServiceNow.apiServiceNow(TicketNumber);
    var stringify = JSON.parse(dd);
    ShortDescriptionServiceNow = stringify.short_description
  }
  catch (error) {
    throw "User is not able to verifies short description in service now"
  }
})

Then('{string} verifies the short description', async function (string) {
  try {
    expect(ShortDescription).to.include(ShortDescriptionServiceNow);
  }
  catch (error) {
    throw "User is not able to verifies the short description"
  }
});
When('{string} waits {string} minute to reach ticket threshold time', async function (userName, minutes) {
  await browser.sleep(60000);
});
//----------------- Move to ticketed-----------------


Then('verify cluster size must be {string}', async function (size) {
  try {
    await element(by.className('smo-badge smo-badge-round smo-badge-sm smo-badge-notification-sm')).getText().then(async function (text) {
      await console.log(text);
      expect(text).to.include(size);
    });
  }
  catch (error) {
    throw "User is not able to verify cluster size"
  }
});

Then('Admin verifies Acknowledge state', async function () {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnAcknowledge), 10000);
  }
  catch (error) {
    throw "User is not able to Admin verifies Acknowledge state"
  }
});

Then('Admin clicks on close button', async function () {
  try {
    await objFilter.Close();
  }
  catch (error) {
    throw "User is not able to clicks on close button"
  }
});

Then('Admin verifies Hold state', async function () {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnHold), 10000);
  }
  catch (error) {
    throw "User is not able to verifies Hold state"
  }
});

Then('Admin verifies Close state', async function () {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnClose), 50000);
  }
  catch (error) {
    throw "User is not able to verifies Close state"
  }
});

When('Admin click on state', async function () {
  try {
    await browser.sleep(4000)
    await objAlerts.State();
  }
  catch (error) {
    throw "User is not able to click on state"
  }
});

When('Admin selects acknowledge', async function () {
  try {
    await browser.sleep(5000)
    await objAlerts.Acknowledge();
    await browser.sleep(10000)
  }
  catch (error) {
    throw "User is not able to selects acknowledge"
  }
});

Then('{string} verifies pushed alert in alert console with {string}', async function (userName, AlertName) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="' + AlertName + '"]'))), 10000);
  }
  catch (error) {
    throw "User is not able to verifies Close state"
  }
});

// Recovery policy and AutoClosure

Then('Admin verifies cluster got closed', async function () {

  // await browser.wait(EC.visibilityOf(objAlerts.txtClosed), 10000);

});