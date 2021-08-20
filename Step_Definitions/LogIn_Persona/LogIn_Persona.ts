import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { LogIn } from '../../PageObjects/LogIn';
import { ProjectListingPage } from '../../PageObjects/ProjectListing';

var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objLogIn = new LogIn();
let objProjectListing = new ProjectListingPage();

// Disable project

When('{string} clicks on deactivate project', async function (userRole) {

  try {
    await browser.sleep(2000)
    await objProjectListing.Deactivate();
  } catch (error) {
    await console.log("Feature name : Login Persona with " + userRole + " and Scenario name : Disable the Project")
    await console.log(error)
    throw "user is unable to deactivate project"
  }
});

When('{string} clicks on yes', async function (userRole) {
  try {
    await objProjectListing.ClickOnYes();
  } catch (error) {
    await console.log("Feature name : Login Persona with " + userRole + " and Scenario name : Disable the Project")
    await console.log(error)
    throw "user is unable to click on confirm the action"
  }
});
Then('Success message {string} must be shown once project is {string}', async function (Toaster, Action) {

  try {

    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 180000);

    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
      expect(text).to.include(Toaster);
    });
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

  } catch (error) {
    await console.log("Feature name : Login Persona and Scenario name : " + Action + " the Project")
    await console.log(error)
    throw "Unable to " + Action + " project"
  }

});

//IE deleting project 

When('{string} clicks dot menu icon to delete project', async function (string) {

  try {
    await browser.sleep(2000)
    await objProjectListing.clickOnThreeDots();
  } catch (error) {
    await console.log("Feature name : Login Persona and Scenario name : Delete Project")
    await console.log(error)
    throw "user is unable to delete project"
  }
});
When('{string} clicks on delete project', async function (userRole) {

  try {
    await objProjectListing.DeleteProject();
  } catch (error) {
    await console.log("Feature name : Login Persona with " + userRole + " and Scenario name : delete Project")
    await console.log(error)
    throw "user is unable to delete project"
  }
});

//Master configuration 

When('{string} clicks on edit configuration button', async function (userRole) {

  try {
    await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[text()="Edit Configuration"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Create New Project"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Edit Configuration"]'))));
    await browser.sleep(3000)
    await objProjectListing.EditConfiguration();
  } catch (error) {
    await console.log("Feature name : Login Persona with " + userRole + " and Scenario name : master configuration")
    await console.log(error)
    throw "user is unable to click on edit configuration button"
  }
});

Then('{string} is taken to the master configuration page {string}', async function (userRole, MasterText) {

  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//label[text()="Master Configuration"]'))), 100000);
    await element(by.xpath('//label[text()="Master Configuration"]')).getText().then(function (text) {
      expect(text).to.include(MasterText);
    });
  } catch (error) {
    await console.log("Feature name : Login Persona with " + userRole + " and Scenario name : master configuration")
    await console.log(error)
    throw "user is unable to access master configuration page"
  }
});