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


Given('User pushes an solarwinds alert', async function () {
  try {
    await objApiRabbitMQ.apiPushMsgRabbitMQ('Automation_01M3', 'Solarwinds', 'QueueChannel');
  }
  catch (error) {
    throw "User unable to push a solarwinds alert"
  }
})

Given('User pushes an recovery alert', async function () {
  try {
    await objApiRabbitMQ.apiPushMsgRabbitMQ('Automation_01M3', 'Solarwinds', 'RecoveryPolicy');
  }
  catch (error) {
    throw "User unable to push an recovery alert"
  }
});

Given('User pushes an solarwinds alert with no message', async function () {
  try {
    await objApiRabbitMQ.apiPushMsgRabbitMQ('Automation_01M3', 'Solarwinds', 'AlertWithNoMessage');
  }
  catch (error) {
    throw "User unable to push an solarwinds alert with no message"
  }
})

Given('User pushes an Verba alert with message', async function () {
  try {
    await objApiRabbitMQ.apiPushMsgRabbitMQ('Automation_01M3', 'VerbaNew', 'VerbaWitMessage');
  }
  catch (error) {
    throw "User unable to pushes an Verba alert with message"
  }
})

Given('User pushes an Verba alert with no message', async function () {
  try {
    await objApiRabbitMQ.apiPushMsgRabbitMQ('Automation_01M3', 'VerbaNew', 'VerbaWitNoMessage');
  }
  catch (error) {
    throw "User unable to pushes an Verba alert with no message"
  }
});

Given('User pushes an Forescout alert with message and IP address', async function () {
  try {
    await objApiRabbitMQ.apiPushMsgRabbitMQ('Automation_01M3', 'Forescout', 'ForescoutWithMessageandIP');
  }
  catch (error) {
    throw "User unable to pushes an Forescout alert with message and IP address"
  }


});
Given('User pushes an Forescout alert with no message and no IP address', async function () {
  try {
    await objApiRabbitMQ.apiPushMsgRabbitMQ('Automation_01M3', 'Forescout', 'ForescoutWithNoMessageandNoIP');
  }
  catch (error) {
    throw "User unable to pushes an Forescout alert with no message and no IP address"
  }
});
Given('User pushes an Forescout alert with no message and IP address', async function () {
  try {
    await objApiRabbitMQ.apiPushMsgRabbitMQ('Automation_01M3', 'Forescout', 'ForescoutWithNoMessageandIP');
  }
  catch (error) {
    throw "User unable to pushes an Forescout alert with no message and IP address"
  }

});
Given('User pushes an Forescout alert with message and no IP address', async function () {
  try {
    await objApiRabbitMQ.apiPushMsgRabbitMQ('Automation_01M3', 'Forescout', 'ForescoutWithMessageandNoIP');
  }
  catch (error) {
    throw "User unable to pushes an Forescout alert with message and no IP address"
  }
});

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
    var dd = await objApiRabbitMQ.apiServiceNow(TicketNumber);
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


When('enters the recovery alert data and clicks on publish for one time', async function () {
  try {
    await objApiRabbitMQ.apiPushMsgRabbitMQ('Automation_01M3', 'Solarwinds', 'RecoveryPolicy');
  }
  catch (error) {
    throw "User is not able to push the recovery alert"
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