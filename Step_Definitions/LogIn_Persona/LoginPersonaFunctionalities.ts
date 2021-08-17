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



Then('{string} verifies edit configuration button is not present', function (userRole) {
  try {
    // await browser.wait(EC.invisibilityOf(objProjectListingPage.btnEditConfiguration), 1000);
    expect(objProjectListingPage.btnEditConfiguration.isPresent()).to.eventually.equal(false);
    objLogIn.logOutUser();
  }
  catch (error) {
    console.log("Feature name : " + userRole + " and Scenario name :verifies edit configuration button is not present ")
    console.log(error)
    throw "Edit configuration button is present"
  }
});

When('{string} unable to click create new project', function (string) {

  try {
    // await browser.wait(EC.invisibilityOf(objProjectListingPage.btnClickOnCreateProject), 10000);
    // expect(objProjectListingPage.btnClickOnCreateProject.isPresent()).to.eventually.equal(false);
    return browser.wait(function () {
      return objProjectListingPage.btnClickOnCreateProject.isDisplayed()
        .then(function (visible) {
          if (visible) {
            return false;
          }
          return true;
        }).catch(function (notFound) {
          return true;
        });
    }, 10000, 'Element not found within 10 seconds');
  }
  catch (error) {
    console.log("Feature name : and Scenario name : unable to click create new project")
    console.log(error)
    throw "User is able to create a new project"
  }
});

When('{string} navigates to ust home page', async function (string) {
  try {
    await objProjectListingPage.clickOnHomePageButton();
    //await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[text()="Edit Configuration"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//h1[text()="Project Listing"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="All Projects"]'))));
    await browser.sleep(5000)
  }
  catch (error) {
    await console.log("Feature name : and Scenario name : navigates to ust home page")
    await console.log(error)
    throw "User is able to create a new project"
  }
});
When('{string} clicks on Update', async function (string) {
  try {
    await browser.sleep(2000)
    await objProjectConfiguration.Update();
  }
  catch (error) {
    await console.log("Feature name : and Scenario name : clicks on Update")
    await console.log(error)
    throw "User is not able to update the project"
  }

});


When('{string} unable to access dot menu options', function (string) {
  // await browser.wait(EC.invisibilityOf(objProjectListingPage.btnDisable), 10000);
  try {
    // expect(objProjectListingPage.btnDisable.isPresent()).to.eventually.equal(false);
    return browser.wait(function () {
      return objProjectListingPage.btnDisable.isPresent()
        .then(function (visible) {
          if (visible) {
            return false;
          }
          return true;
        }).catch(function (notFound) {
          return true;
        });
    }, 10000, 'Element not found within 10 seconds');
  } catch (error) {
    console.log("Feature name : and Scenario name :  unable to access dot menu options")
    console.log(error)
    throw "User is not able to update the project"
  }


});


