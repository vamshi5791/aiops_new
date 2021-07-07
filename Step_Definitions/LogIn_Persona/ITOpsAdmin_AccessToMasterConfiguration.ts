import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement } from "protractor"
import chai from "chai";
import { LogIn } from '../../PageObjects/LogIn';
import { ProjectListingPage } from '../../PageObjects/ProjectListing';
import { ProjectConfiguration } from "../../PageObjects/ProjectConfiguration";

var EC = browser.ExpectedConditions;
var expect = chai.expect;
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
let objLogIn = new LogIn();
let objProjectListing = new ProjectListingPage();


When('ITOps Admin clicks on edit configuration button', async function () {
  await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[text()="Edit Configuration"]'))), 100000);
    await objProjectListing.EditConfiguration();
  });

  Then('Admin is taken to the master configuration page {string}', async function (MasterText) {
    await browser.wait(EC.visibilityOf(element(by.xpath('//label[text()="Master Configuration"]'))), 100000);
    await element(by.xpath('//label[text()="Master Configuration"]')).getText().then(function (text) {
         expect(text).to.include(MasterText);
       });
  });