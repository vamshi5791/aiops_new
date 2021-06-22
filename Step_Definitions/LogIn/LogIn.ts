import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement } from "protractor"
import chai from "chai";
import { LogIn } from '../../PageObjects/LogIn';

var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;

let objLogIn = new LogIn();

Given('User with ITOps role is available {string}', async function (url) {
    await browser.get(properties.get('main.url')).then(async function () {
    })
})

When('enter Username and Password {string}, {string}', async function (usernameData, passwordData) {
    await objLogIn.txtUserName.sendKeys(usernameData);
    await objLogIn.txtPassword.sendKeys(passwordData);
});

When('click on Login button', async function () {
    await objLogIn.btnClickOnSignIn.click();
});

Then('ITOps home page is displayed', async function () {
     browser.getTitle().then(function (txtTitle) {
        console.log("Page Title: "+txtTitle);
         expect(txtTitle).to.include('Itops');
        });  
      await  browser.element(by.className("smo smo-expand-more-alt text-black-50 text-right pt-2")).click();
       await browser.element(by.xpath('//span[text()="Logout"]')).click();
})
