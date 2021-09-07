import { Given, When, Then } from "cucumber"
import { browser, element, by, protractor } from "protractor"
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
import chai from "chai";
import { LogIn } from '../../PageObjects/LogIn';
import { ProjectConfiguration } from "../../PageObjects/ProjectConfiguration";
let objLogIn = new LogIn();
var EC = browser.ExpectedConditions;
let objProjectListingPage = new ProjectListingPage();
var expect = chai.expect;
let objProjectConfiguration = new ProjectConfiguration();
let objProjectListing = new ProjectListingPage();
var Global_ProjectName;


Then('{string} verifies edit configuration button is not present', async function (userRole) {
  try {
    await objProjectListingPage.btnEditConfiguration.isPresent().then(function (select) {
      expect(select).to.be.false;
    });

  }
  catch (error) {
    console.log("Feature name : Login persona " + userRole + " and Scenario name :verifies edit configuration button is not present ")
    console.log(error)
    throw "Edit configuration button is present"
  }
});

When('{string} unable to click create new project', async function (string) {
  try {
    await objProjectListingPage.btnClickOnCreateProject.isPresent().then(function (select) {
      expect(select).to.be.false;
    });
  }
  catch (error) {
    console.log("Feature name :Login persona and Scenario name : unable to click create new project")
    console.log(error)
    throw "User is able to create a new project"
  }
});

When('{string} navigates to ITOps home page', async function (string) {
  try {

    await browser.wait(EC.visibilityOf(objProjectListingPage.btnHomePage), 40000);
    await browser.wait(EC.presenceOf(objProjectListingPage.btnHomePage), 40000);
    await browser.wait(EC.elementToBeClickable(objProjectListingPage.btnHomePage), 40000);
    await browser.wait(EC.presenceOf(objProjectListingPage.btnHomePage), 40000);
    // await browser.sleep(5000)
    await objProjectListingPage.clickOnHomePageButton();
    await browser.wait(EC.visibilityOf(element(by.xpath('//h1[text()="Project Listing"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="All Projects"]'))));
    await browser.wait(EC.visibilityOf(objProjectListingPage.btnProfile), 10000);
    await browser.wait(EC.elementToBeClickable(objProjectListingPage.btnProfile), 10000);
  }
  catch (error) {
    await console.log("Feature name :Login persona and Scenario name : navigates to ust home page")
    await console.log(error)
    throw "User is not able navigates to ust home page"
  }
});
When('{string} clicks on Update', async function (string) {
  try {
    await browser.sleep(2000)
    await objProjectConfiguration.Update();
  }
  catch (error) {
    await console.log("Feature name : Login persona and Scenario name : clicks on Update")
    await console.log(error)
    throw "User is not able to update the project"
  }
});

When('{string} unable to access dot menu options', function (string) {

  try {
    browser.wait(EC.visibilityOf(element(by.className('smo-menuitem-link smo-state-disabled smo-menuitem-link-sm ng-star-inserted'))), 10000);

  } catch (error) {
    console.log("Feature name :Login persona and Scenario name :  unable to access dot menu options")
    console.log(error)
    throw "Able to access dot menu options"
  }
});



When('{string} click on three dots of a project', async function (userRole, string) {
  await objProjectListing.ThreeDots(Global_ProjectName);
});
When('{string} click on delete project', async function (userRole) {
  await objProjectListing.DeleteProject();
});

Then('Success message for Project is {string} must be shown as a toaster {string}', async function (userRole, Toaster) {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
    expect(text).to.include(Toaster);
  });
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
});

