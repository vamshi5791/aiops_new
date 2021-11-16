import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
var EC = browser.ExpectedConditions;
let objProjectListing = new ProjectListingPage();
import chai from "chai";
var expect = chai.expect;
When('{string} enters {string} as {string} in project search field and click on enter', async function (userRole, string, ProjectName) {
    try {
        await objProjectListing.Project_search(ProjectName);
    } catch (error) {
        await console.log(error)
        throw "Admin unable to enters project name in project search field"
    }

});


When('{string} clicks on project name {string}', async function (userRole, ProjectName) {
    try {
        //this wait time is mandatory
        await browser.sleep(5000);
        await browser.wait(EC.elementToBeClickable(element(by.xpath('//h3[text()=" ' + ProjectName + ' "]'))), 100000);
        await objProjectListing.selectProject(ProjectName);
    } catch (error) {
        await objProjectListing.selectProject(ProjectName);
        await console.log(error)
        throw "user unable to click on project name"
    }
});


Then('{string} verifies import button to be enabled on selecting source and group', async function (string) {
    try {
        await element(by.className('smo-button smo-widget smo-state-default smo-button-default smo-corner-all smo-button-ms smo-button-text-only smo-state-disabled smo-button-transparent smo-button-transparent-default smo-button-transparent-ms')).isPresent().then(function (select) {
            expect(select).to.be.true;
        });
    } catch (error) {
        await console.log(error)
        throw "import button is not enabled on selecting source and group"
    }
});