import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement } from "protractor"
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


Given('User opens rabbitMQ', async function () {
  await browser.get(properties.get('main.rabit_MQ_URL')).then(async function () {
  })
})

When('user enters Username and Password {string}, {string}', async function (adminUserName, adminPassword) {
  await objFilter.LogIn_Details2(adminUserName, adminPassword);

});

When('user clicks on Login button', async function () {
  await objFilter.btnClickOnSignIn.click();
});

When('user clicks on the project {string}', async function (ProjectName) {
  await objFilter.filter(ProjectName);
  await objFilter.checkbox();
  await objFilter.clickOnProject();
});

When('user enters to the queue {string}', async function (ToQueue) {
  await browser.executeScript('window.scrollTo(0,800);').then(async function () {
  });
  await objFilter.clickOnBindings();
  await objFilter.enterToQueue(ToQueue);
});

When('user enters the routing key {string}', async function (RouteKey) {
  await objFilter.clickOnPublishMessage();
  await objFilter.enterRoutingKey(RouteKey);
});

When('user enters the payload', async function () {
  await objFilter.enterPayLoad();
});

When('user clicks on publish', async function () {
  await objFilter.clickOnPublish();

});

When('user opens itops application', async function () {
  await browser.get(properties.get('main.url')).then(async function () {
  })
});

When('admin enters Username, Password and click on Login button {string}, {string}', async function (UserName, Password) {
  await objLogIn.LogIn_Details(UserName, Password);
});

When('admin selects project and open alerts {string}', async function (ProjectName) {
  await objProjectListing.selectProject(ProjectName);
  await objAlerts.selectAlerts();

})

Then('Success message for alerts displayed in alert console {string}', async function (Alerts) {

  await element(by.xpath('//a[text()="Alerts"]')).getText().then(function (text) {
    expect(text).to.include(Alerts);
  });
});