import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { LogIn } from "../../PageObjects/LogIn";
import { PushingAlerts } from "../../PageObjects/RabbitMQ";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
import { SeverityMapping } from "../../PageObjects/Severity_Mapping";
import { InfrastructurePage } from "../../PageObjects/InfrastructurePage";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;
let objLogIn = new LogIn();
let objFilter = new PushingAlerts();
let objAlerts = new AlertsPage();
let objSeverityMapping = new SeverityMapping();
let objProjectListing = new ProjectListingPage();
let objInfrastructurePage = new InfrastructurePage();



When('{string} enters {string} as {string} in project search field and click on enter', async function (userRole, string, ProjectName) {
try {
    await objProjectListing.Project_search(ProjectName);
    await browser.sleep(5000)
    // TestProjectName = ProjectName_Batch_2;
} catch (error) {
  await console.log(error)
  throw "Admin unable to enters project name in project search field"
}

});


When('{string} clicks on project name {string}', async function (userRole, ProjectName) {
    try {
        await browser.sleep(5000);
        await browser.wait(EC.elementToBeClickable(element(by.xpath('//h3[text()=" ' + ProjectName + ' "]'))), 100000);
        await objProjectListing.selectProject(ProjectName);
    } catch (error) {
        await objProjectListing.selectProject(ProjectName);
        await console.log("Action Name : clicking on project name")
        await console.log(error)

    }
});
Then('{string} verifies only ticket related {int} widgets to be shown - Open Tickets in ServiceNow, MTTR and Resolution SLA', function (string, int) {
    try {

    } catch (error) {

    }
});

Then('{string} verifies import button to be enabled on selecting source and group', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});