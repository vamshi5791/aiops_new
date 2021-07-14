import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement } from "protractor"
import chai from "chai";
import { LogIn } from '../../PageObjects/LogIn';
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
import { AlertsPage } from "../../PageObjects/AlertsPage";

var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;
var TestProjectName;
let objLogIn = new LogIn();
let ProjectListing = new ProjectListingPage();
let objAlerts = new AlertsPage();

When('{string} enters project name in project search field {string}', async function (userRole, ProjectName) {
  await ProjectListing.Project_search(ProjectName);
  TestProjectName = ProjectName
});



When('{string} clicks on project name', async function (userRole) {
  await ProjectListing.selectProject(TestProjectName);
});



When('{string} navigate to alert console', async function (userRole) {
  await objAlerts.selectAlerts();
});


When('{string} clicks on advanced filter icon', async function (userRole) {
  await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 100000);
  await objAlerts.AdvanceFilter();
});



When('{string} enters source as {string} and alert state as {string}', async function (userRole, Source, AlertState) {
  await browser.wait(EC.visibilityOf(element(by.xpath('//label[text()="Source"]'))), 100000);
  await objAlerts.SelectSource(Source);
  await objAlerts.AlertState(AlertState);
});



When('{string} clicks on Save filter button', async function (userRole) {
  await objAlerts.SaveFilter();
});



When('{string} enters filter name as {string} and Description as {string}', async function (userRole, FilterName, FilterDescription) {
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
    await objAlerts.FilterName(FilterName);
    await objAlerts.FilterDescription(FilterDescription)
  })

});



When('{string} clicks on save and apply button', async function (userRole) {
  await objAlerts.Save_Apply();
});



Then('Success message should be disaplayed as toaster {string}', async function (Toster) {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
    expect(text).to.include(Toster);
  });
});

When('{string} Clicks on Saved Filter from advanced filter section', function (userRole) {

});


Then('Verify the filter conditions are retrieved and click on Apply', function () {

});
