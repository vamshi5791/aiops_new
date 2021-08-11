import { Given, When, Then} from "cucumber"
import { browser, element, by, protractor} from "protractor"
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
import chai from "chai";
import { ProjectConfiguration } from "../../PageObjects/ProjectConfiguration";

var EC = browser.ExpectedConditions;
let objProjectListingPage =new ProjectListingPage();
var expect = chai.expect;
let objProjectConfiguration = new ProjectConfiguration();


// All Login Persona Functionalities

// When('{string} clicks on edit configuration button', async function (userRole) {
//   try {
//     await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[text()="Edit Configuration"]'))), 100000);
//     await objProjectListingPage.EditConfiguration();
//   } 
//   catch (error) {
//   throw "User is not able to click on edit configuration button"
//   }
// });

// Then('{string} is taken to the master configuration page {string}', async function (userRole, MasterText) {
//   try {
//     await browser.wait(EC.visibilityOf(element(by.xpath('//label[text()="Master Configuration"]'))), 100000);
//     await element(by.xpath('//label[text()="Master Configuration"]')).getText().then(function (text) {
//       expect(text).to.include(MasterText);
//     });
//   } 
//   catch (error) {
//   throw "User is not taken to the master configuration page"
//   }
// });

Then('{string} verifies edit configuration button is not present', async function (userRole) {
  try {
    await browser.wait(EC.invisibilityOf(objProjectListingPage.btnEditConfiguration), 1000);
  } 
  catch (error) {
  throw "Edit configuration button is present"
  }
  });

  When('{string} unable to click create new project', async function (string) {
    try {
      await browser.wait(EC.invisibilityOf(objProjectListingPage.btnClickOnCreateProject), 10000);
    } 
    catch (error) {
    throw "User is able to create a new project"
    }
  });

  When('{string} navigates to ust home page', async function (string) {
    try {
      await objProjectListingPage.clickOnHomePageButton();
      await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[text()="Edit Configuration"]'))));
      await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Create New Project"]'))));
      await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Edit Configuration"]'))));
    } 
    catch (error) {
    throw "User is able to create a new project"
    }
  });
  When('{string} clicks on Update', async function (string) {
    try {
    await objProjectConfiguration.Update();
    } 
    catch (error) {
    throw "User is not able to update the project"
    }

  });


  // When('{string} unable to access dot menu options', async function (string) {
  //   await browser.wait(EC.visibilityOf(objProjectListingPage.btnDisable), 10000);

  // });

  
