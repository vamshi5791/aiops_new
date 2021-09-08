import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { LogIn } from "../../PageObjects/LogIn";
import { PushingAlerts } from "../../PageObjects/RabbitMQ";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
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
Given('User renders the RabbitMQ URL', async function () {
  try {
    await browser.get(properties.get("main." + globalThis.environment + "_rabbit_MQ_URL")).then(async function () {
    })

  }
  catch (error) {
    await console.log("Feature name : Pushing Alerts through RabbitMQ Admin and Scenario name : User renders the RabbitMQ URL")
    await console.log(error)
    throw "User is unable to renders rabbitMQ url"
  }
})

When('user enters RabbitMQ_Username as {string}, RabbitMQ_Password as {string} and clicks on login button', async function (rabbitMQ_User, rabbitMQ_Password) {
  try {
    await objFilter.loginToRabbitMQ(rabbitMQ_User, rabbitMQ_Password);
    await objFilter.ClickOnRabbitMQSignIn();
    userName = rabbitMQ_User;
  }
  catch (error) {
    await console.log("Feature name : Pushing Alerts through RabbitMQ " + userName + " and Scenario name : User log in into RabbitMQ")
    await console.log(error)
    throw "user is unable to Login"
  }
});


When('clicks on the project {string} {string}', async function (ProjectName, ProjectNameForAlert) {
  try {
    await objFilter.filter(ProjectName);
    Global_ProjectName = ProjectName;
    await objFilter.checkbox();
    await objFilter.clickOnProject(ProjectNameForAlert);
  }
  catch (error) {
    await console.log("Feature name : Pushing Alerts through RabbitMQ " + userName + " and Scenario name : clicks on the project")
    await console.log(error)
    throw new Error("Invalid login details")
  }
});

When('enters queue name as {string} and routing key as {string}', async function (ToQueue, RouteKey) {

  try {
    await browser.executeScript('window.scrollTo(0,800);').then(async function () {
    });
    await objFilter.clickOnBindings();
    await objFilter.enterToQueue(ToQueue);

    await objFilter.clickOnPublishMessage();
    await objFilter.enterRoutingKey(RouteKey);
  }
  catch (error) {
    await console.log("Feature name : Pushing Alerts through RabbitMQ " + userName + " and Scenario name : enters queue name")
    await console.log(error)
    throw "incorrect Queue and Route key"
  }
});

When('enters AlertName as {string}, NodeIPAddress as, {string} and ObjectName as {string}', async function (AlertName, NodeIPAddress, ObjectName) {
  try {
    JsonAlert = JSON.parse(fs.readFileSync('JSONTestData/QueueChannel.json', 'utf-8')).QueueChannel;

    StringifiedJsonAlert = JSON.stringify(JsonAlert);

  }
  catch (error) {
    await console.log("Feature name : Pushing Alerts through RabbitMQ " + userName + " and Scenario name : enters AlertName")
    await console.log(error)
    throw "incorrect payload data"
  }

});


When('enters the payload data and clicks on publish', async function () {
  try {
    await objFilter.enterPayLoad(StringifiedJsonAlert);

    await objFilter.clickOnPublish();
  }
  catch (error) {
    await console.log("Feature name : Pushing Alerts through RabbitMQ " + userName + " and Scenario name : enters the payload data and clicks on publish")
    await console.log(error)
    throw "unable to publish payload data from RabbitMQ"
  }
});


When('{string} selects project and open alerts', async function (userRole) {

  try {
    var myElement = element(by.className('smo smo-close-black-alt'));
    myElement.isPresent().then(async function (elm) {
      if (elm) {
        await browser.sleep(10000)
        await browser.wait(EC.elementToBeClickable(element(by.className('smo smo-close-black-alt'))), 100000);
        await element(by.className('smo smo-close-black-alt')).click();
      }
    });

    await objProjectListing.Project_search(Global_ProjectName);
    // await browser.sleep(3000);
    await browser.wait(EC.visibilityOf(element(by.xpath('//h3[text()=" ' + Global_ProjectName + ' "]'))), 100000);
    await objProjectListing.selectProject(Global_ProjectName);

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
    var myElement = objAlerts.btnRemoveAll;
    myElement.isDisplayed().then(async function (elm) {
      if (elm) {
        // await browser.sleep(5000)
        await browser.wait(EC.elementToBeClickable(objAlerts.btnRemoveAll), 100000);
        await objAlerts.btnRemoveAll.click();
      }
    });
    await objAlerts.Alert_Search(AlertName);
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="'+AlertName+'"]'))), 100000);
  } catch (error) {

    await console.log("Feature name : Pushing Alerts through RabbitMQ " + userName + " and Scenario name : enter alertname in search box and verify alert details")
    await console.log(error)
    throw "Alert not found"
  };
});