import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { InfrastructurePage } from "../../PageObjects/InfrastructurePage";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ITOPS_APIs } from "../../ITOPS_Apis/ItopsApis";
import { ApiKibana } from "../../KibanaApi/KibanaApi";
import { throws } from "assert";
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objInfrastructurePage = new InfrastructurePage();
let objAlerts = new AlertsPage();
var objITOps_API = new ITOPS_APIs();
var objAPIKibana = new ApiKibana();
var alertId


When('{string} sends {string} new Http alerts with {string}, {string}, {string}', async function (string, string2, NodeName, AlertSeverity, channelJson) {
    try {
        await objITOps_API.HTTPchannelAlerts(NodeName, AlertSeverity, channelJson);
    } catch (error) {
        console.log(error)
        throw "Unable to Send new Http alerts"
    }

});

When('{string} sends {string} new Http alerts with out {string}, {string}, {string}', async function (string, string2, NodeName, AlertSeverity, channelJson) {
    try {
        await objITOps_API.HTTPchannelAlerts(NodeName, AlertSeverity, channelJson);
    } catch (error) {
        console.log(error)
        throw "Unable to Send new Http alerts"
    }

});

When('Admin gets the alertId', async function () {
    try {
        await browser.wait(EC.visibilityOf(element(by.xpath("//div[@class='text-font-dark text-with-bold']"))), 20000);
        alertId = await element(by.xpath("//div[@class='text-font-dark text-with-bold']")).getText()
        console.log(alertId)
    } catch (error) {
        console.log(error)
        throw "Can't Find AlertId"
    }

});

Given('{string} selects bussiness timezone as {string}', async function (string, timeZone) {
    try {
        await element(by.xpath("//div[text()='BUSINESS TIMEZONE']//following::span[contains(@class,'smo-dropdown-trigger-icon smo-clickable')]")).click()
        await element(by.xpath("//span[text()='" + timeZone + "']")).click();
    } catch (error) {
        console.log(error)
        throw "Invaild bussiness timezone Selected"
    }

});

Given('{string} clicks on update and save', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='Update Device']"))), 50000);
        await element(by.xpath("//span[text()='Update Device']")).click()
        await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='Confirm']"))), 50000);
        await element(by.xpath("//span[text()='Confirm']")).click()
    } catch (error) {
        console.log(error)
        throw "Unable to update and save Infrastructure"
    }
});


// Entering alert Id in search box field

When('{string} enters alertId {string} and clicks on enter', async function (string, SearchData) {
    try {
        await browser.sleep(2000)
        await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 10000);
        await objAlerts.Alert_Search(alertId);
    } catch (error) {
        console.log("Feature Name : Search Functionality : Alert Page - Entering " + SearchData + " in search field box")
        console.log(error);
        throw "User not able to enter in search box field in alert page"
    }
});

When('{string} clicks on three dots of an alert', async function (string) {
    try {
        await element(by.xpath("//span[contains(@class,'smo smo-group')]")).click();
    }
    catch (error) {
        await console.log(error)
        throw "not clicks on three dots on webpage"
    }
});

When('{string} verify the Business timeZone {string}', async function (string, BusinessTimeZone) {

    try {
        var businessTimezone = await element(by.xpath("//div[text()='businessTimezone']/following-sibling::div")).getText();
        await expect(businessTimezone).to.include(BusinessTimeZone)
        console.log("LineNO90", businessTimezone)
    }
    catch (error) {
        await console.log(error)
        throw "verify the Business timeZone"
    }
});

When('{string} verify the Alert time {string}', async function (string, AlertTime) {

    try {
        var alertTime = await element(by.xpath("//div[text()='Alert Time']//following::span[@class='ml-3 ng-star-inserted']//div")).getText();
        await expect(alertTime).to.include(AlertTime)
        console.log("LineN0103", alertTime)
    }
    catch (error) {
        await console.log(error)
        throw "verify the Business timeZone"
    }
});

