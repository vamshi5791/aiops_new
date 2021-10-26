import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
import chai from "chai";
import { LogIn } from "../../PageObjects/LogIn";
import { PushingAlerts } from "../../PageObjects/RabbitMQ";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
import { ApiRabbitMQ } from "../../PageObjects/ApiRabbitMQ";
var objApiRabbitMQ = new ApiRabbitMQ()

var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;
let objLogIn = new LogIn();
let objFilter = new PushingAlerts();


var Global_ProjectName;
var EC = browser.ExpectedConditions;


let objAlerts = new AlertsPage();
let objProjectListing = new ProjectListingPage();

<<<<<<< HEAD
When('{string} clicks on Alerts page tab in {string}', async function (userName, ProjectName) {
=======
When('{string} clicks on Alerts page tab', async function (userName) {


>>>>>>> 3c85f4c84ed2ec1e00956d807d9a3202f8699fb4
try {
  await browser.wait(EC.visibilityOf(objAlerts.btnSelectAlerts),10000);
  await objAlerts.btnSelectAlerts.click()

} catch (error) {
    console.log("Feature name : TimeErrorAcknowledgementAlerts " + userName + " and Action name : Clicks on Alerts page ")
    console.log(error)
    throw "User is not able to click on Alerts page"
}
 
});
/*When('{string} verifies pushed alert is in state Acknowledged', async function (userName) {
try {
  await browser.wait(EC.visibilityOf(objAlerts.drpAlertAction), 10000);
  objAlerts.drpAlertAction.click();
  await browser.wait(EC.visibilityOf(objAlerts.btnAcknowledge),10000);

} catch (error) {
    console.log("Feature name : TimeErrorAcknowledgementAlerts " + userName + " and Action name :verifies pushed alert is in state Acknowledged ")
    console.log(error)
    throw "User is not able to verify Acknowlegment Alerts"
}  
  });

Then('{string} verifies pushed alert has TimeError indicator', async function (userName) {
try {
  await browser.wait(EC.presenceOf(objAlerts.txtTimeError))
} catch (error) {
  console.log("Feature name : TimeErrorAcknowledgementAlerts " + userName + " and Action name :verifies  pushed alert has TimeError indicator ")
  console.log(error)
  throw "User is not able to verify pushed alert has TimeError indicator"
}
 
});*/