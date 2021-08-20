import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { LogIn } from '../../PageObjects/LogIn';
import { ProjectListingPage } from "../../PageObjects/ProjectListing";

var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objLogIn = new LogIn();
let ProjectListing = new ProjectListingPage();
var userName;

Given('User with ITOps role renders the URL', async function () {
  try {
    await browser.get(properties.get("main." + globalThis.environment + "_url")).then(async function () {
    })
  }
  catch (error) {
    await console.log("Feature name : Login with ITOps role and Scenario name : Login")
    await console.log(error)
    throw "User is unable to renders ITOps url"
  }
})

When('user enters Username as {string}, Password as {string} and clicks on Login button', async function (UserName, Password) {
  try {
    await objLogIn.enterUserName(UserName);
    await objLogIn.enterPassword(Password);
    await objLogIn.clickOnLogInButton();
    userName = UserName;
    await console.log("------------------"+globalThis.BrowserMode)
  //For removing banner
    if (globalThis.BrowserMode == "headless") {
      await browser.sleep(10000)
      await browser.wait(EC.visibilityOf(element(by.className('smo smo-close-black-alt'))), 60000);
      await browser.wait(EC.elementToBeClickable(element(by.className('smo smo-close-black-alt'))), 60000);
      await element(by.className('smo smo-close-black-alt')).click();
    }
  } catch (error) {
    await console.log("Feature name : Login with ITOps " + UserName + "  and Scenario name : Login")
    await console.log(error)
    throw "user is unable to Login"
  }

});

Then('ITOps home page is displayed', async function () {
  try {
    await browser.getTitle().then(async function (txtTitle) {
      await expect(txtTitle).to.include('Itops');
    });
  } catch (error) {
    await console.log("Feature name : Login with ITOps " + userName + " role and Scenario name : Login")
    await console.log(error)
    throw "Invalid Login credentials"
  }
})

When('{string} clicks on logout button', async function (string) {

  try {
    await browser.sleep(3000)
     await browser.wait(EC.elementToBeClickable(ProjectListing.btnProfile), 50000);
    await ProjectListing.ClickOnProfile();
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Logout"]'))), 10000);
    await browser.sleep(3000)
     await browser.wait(EC.elementToBeClickable(ProjectListing.btnLogOut), 50000);
    await ProjectListing.LogOut();
     await browser.sleep(10000)
    await browser.wait(EC.visibilityOf(element(by.xpath('//input[@name="login"]'))), 50000);
    await browser.wait(EC.elementToBeClickable(element(by.xpath('//input[@name="login"]'))), 50000);
  } catch (error) {
     console.log("Unable to logout")
     console.log(error)
    throw "user is unable to logout"
  }
})
