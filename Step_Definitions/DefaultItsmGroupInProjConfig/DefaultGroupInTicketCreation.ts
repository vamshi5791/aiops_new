import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { ProjectConfiguration } from "../../PageObjects/ProjectConfiguration";
import { ProjectListingPage } from '../../PageObjects/ProjectListing';

let objProjectConfig = new ProjectConfiguration();
let objProjectListing = new ProjectListingPage();

var EC = browser.ExpectedConditions;
var expect = chai.expect;

When('{string} should navigate to project configuration page', async function (userRole) {
    try {
        objProjectConfig.selectProjectConfig();
        await browser.sleep(1000)
    }
    catch (error) {
        await console.log(error)
        throw "User is not able to navigate to project configuration"
    }

});

When('{string} click on the ITSM configuration', async function (userRole) {
    try {

        var myElement = objProjectConfig.lnkItsmConfiguration;
        await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
        await browser.wait(EC.visibilityOf(element(by.css('smo-accordion:nth-of-type(6) .margin-left'))), 1000);
        objProjectConfig.lnkItsmConfiguration.click();
        //await browser.sleep(2000);
    }
    catch (error) {
        await console.log(error)
        throw "User is not able to navigate to ITSM configuration"
    }
});

When('{string} enter the {string} in the default assignment group textbox', async function (userRole, DefaultGroupId) {
    try {
        objProjectConfig.txtDefaultAssignmentGroup.clear();
        objProjectConfig.enterDefaultAssignmentGroup(DefaultGroupId);

    }
    catch (error) {
        await console.log(error)
        throw "User is not able to enter default group id"
    }
});


When('{string} clicks on the save button in the ITSM configurations Tab', async function (userRole) {
    try {

        await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
            await browser.wait(EC.visibilityOf(objProjectConfig.btnSaveItsmConfig), 3000);
            var myElement = objProjectConfig.btnSaveItsmConfig;
            await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
            await objProjectConfig.btnSaveItsmConfig.click();
        })
    }
    catch (error) {
        await console.log(error)
        throw "User is not able to save the ITSM configuration"
    }
});

When('{string} is in project configuration page', async function (string) {
    try {

        var myElement = objProjectConfig.lnkAddUser;
        await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
        await browser.wait(EC.visibilityOf(objProjectConfig.lnkAddUser));
        objProjectConfig.lnkItsmConfiguration.click();
        await browser.sleep(1000)
        objProjectConfig.lnkGeneralConfiguration.click();
    }

    catch (error) {
        await console.log(error)
        throw "User is not able to see the Add user tab"
    }

});

When('{string} click on Add user tab', async function (string) {
    try {

        await browser.wait(EC.visibilityOf(objProjectConfig.lnkAddUser));
        await browser.sleep(2000);
        objProjectConfig.lnkAddUser.click();
    }

    catch (error) {
        await console.log(error)
        throw "User is not able to navigate to the Add user tab"
    }
});


When('{string} clicks on update Install button', async function (string) {
    try {
        await browser.sleep(2000);
        await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
            await browser.wait(EC.visibilityOf(objProjectConfig.btnUpdateInstall), 3000);
            objProjectConfig.btnUpdateInstall.click();
            await browser.sleep(10000);
        })
    }
    catch (error) {
        await console.log(error);
        throw "User is not able to do update install";
    }

});

Then('{string} must be in {string} state in Project Listing Page', async function (ProjectName, ProjectStatus) {
    try {

        await objProjectListing.Project_search(ProjectName);
        await browser.sleep(2000);
        await element(by.className("smo-badge smo-badge-round smo-badge-sm smo-badge-ready-sm")).getText().then(async function (text) {
        await expect(text).to.include(ProjectStatus);
        await console.log(text);

        });
    }
    catch (error) {
        await console.log(error);
        throw "Project is not updated with ready state";
    }
});