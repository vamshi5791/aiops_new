import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
var EC = browser.ExpectedConditions;
let objProjectListing = new ProjectListingPage();

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

    } catch (error) {
        await console.log(error)
        throw "import button is not enabled on selecting source and group"
    }
});