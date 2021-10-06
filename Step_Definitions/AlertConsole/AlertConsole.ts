import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { LogIn } from '../../PageObjects/LogIn';
import { Dashboard } from "../../PageObjects/Dashboard";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ApiRabbitMQ } from "../../PageObjects/ApiRabbitMQ";
import { ServiceNowAPI } from '../../ServiceNowAPI/servicenowAPI';
let objServiceNow = new ServiceNowAPI();
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objLogIn = new LogIn();
let objAlerts = new AlertsPage();
let objApiRabbitMQ = new ApiRabbitMQ();
let TicketNumber;
var resultState;

When('{string} verifies the severity strip color', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtMajorStripColour), 50000);
  }
  catch (error) {
    console.log("Action Name : verifies the severity strip color")
    console.log(error)
    throw "Strip colour not updated"
  }
});



When('{string} verifies the ticket number', async function (string) {

  try {
    await element(by.xpath("//span[@class='text-font-dark text-with-bold']")).isPresent().then(function (select) {
      expect(select).to.be.true;
    });
  }
  catch (error) {
    console.log("Action Name : verifying the ticket number")
    console.log(error)
    throw "Ticket number not generated"
  }
});


 
Then('{string} sends {string} new {string} alerts with {string}, {string}, {string}, {string}', async function (UserRole, PushCount, AlertSource, ProjectName, routeKey, channelJson, nodeName) {
  try {
    // await objApiRabbitMQ.deleteQueryForAlerts();
    for (let i = 1; i <= PushCount; i++) {
      await objApiRabbitMQ.apiPushMsgRabbitMQ(ProjectName, routeKey, channelJson, nodeName);
    }
    //waiting for alerts to cluster
    await browser.sleep(85000)

  } catch (error) {
    await console.log("Action Name: pushing alerts through api")
    await console.log(error)
    throw "unable to push alerts"
  }
});

When('{string} verifies Cluster occurrence badge position is right aligned to Alert Name', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//div[contains(@class,'secondary-grey text-wrap')]//following::span[contains(@class,'cluster-badge-icon smo')]"))), 50000);
  }
  catch (error) {
    console.log("Action Name : verifying Cluster occurrence badge position is right aligned to Alert Name")
    console.log(error)
    throw "Cluster occurrence badge position is not right to Alert Name"
  }
});



Then('{string} verifies launch icon present inside Cluster occurrence badge', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("(//span[contains(@class,'smo-badge smo-badge-round')])//following::span[contains(@class,'cluster-badge-icon smo')]"))), 50000);
  }
  catch (error) {
    console.log("Action Name : verifying launch icon present inside Cluster occurrence badge")
    console.log(error)
    throw "Launch icon is not inside Cluster occurrence badge"
  }
});
// Verify cluster popup and Severity strip color(with alerts from a single device) for cluster

When('{string} clicks on the cluster count for the ticketed alert from previous step', async function (string) {
  try {
    await objAlerts.clickOnClusterCount()
  } catch (error) {
    await console.log("Action name : Clicking on the cluster count")
    await console.log(error)
    throw "Unable to click on cluster count"
  }
});

Then('{string} verifies the checkbox against each alert', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className("smo-chkbox-icon smo-clickable null"))), 50000);
  } catch (error) {
    await objAlerts.clickOnCancelInClustetPopup()
    await console.log("verifying the checkbox against each alert")
    await console.log(error)
    throw "checkbox against each alert is not present"
  }
});

Then('{string} Verifies launch icon corresponding to each alert', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className("smo smo-expand cursor-pointer"))), 50000);
  } catch (error) {
    await objAlerts.clickOnCancelInClustetPopup()
    await console.log("Verifying launch icon corresponding to each alert")
    await console.log(error)
    throw "launch icon not available to each alert"
  }
});

// Verify ticket details page for a new ticket created

When('{string} gets ticket number for the previously alert', async function (string) {
  await browser.sleep(60000)
  await element(by.xpath("//span[@class='text-font-dark text-with-bold']")).getText().then(async function (GeneratedTicketNumber) {
    await console.log("generated new ticket " + GeneratedTicketNumber)
    TicketNumber = GeneratedTicketNumber;
  });
  await console.log("generated new ticket " + TicketNumber)
});
When('{string} login in to service now and search for the incident id', async function (string, IncidentID) {
  try {
    resultState = await objServiceNow.apiServiceNow(TicketNumber)
    await console.log(resultState)
  } catch (error) {
    await console.log(error)
  }
});
