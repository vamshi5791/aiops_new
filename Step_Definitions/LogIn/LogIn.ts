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


Given('User with ITOps role renders the URL', async function () {
  await browser.get(properties.get("main." + globalThis.environment + "_url")).then(async function () {
  })
})

When('user enters Username as {string}, Password as {string} and clicks on Login button', async function (UserName, Password) {
  try {
    await objLogIn.enterUserName(UserName);
    await objLogIn.enterPassword(Password);
    await objLogIn.clickOnLogInButton();

  } catch (error) {
     throw "Invalid Login credentials"
  }

});



Then('ITOps home page is displayed', async function () {
  await browser.getTitle().then(async function (txtTitle) {
    await expect(txtTitle).to.include('Itops');
  });
})

When('{string} clicks on logout button', async function (string) {
  await ProjectListing.ClickOnProfile();
  await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Logout"]'))), 10000);
  await ProjectListing.LogOut();
  await browser.wait(EC.visibilityOf(element(by.xpath('//input[@name="login"]'))), 10000);
})
