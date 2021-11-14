import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
var EC = browser.ExpectedConditions;



When('user Click on Autoclosure and flapping under Settings section', async function () {
    try {
        await element(by.xpath('//div[text() = "Auto Closure and Flapping"]')).click();
        await element(by.xpath('//div[text()=" Edit "]')).click();
    } catch (error) {
        await console.log(error)
        throw "Admin unable to Click on Autoclosure and flapping under Settings section"
    }

});

When('Verify user is able to enter the values in Number of auto closed clusters {string} and Time interval in minutes {string} fields', async function (valueForAutoCloseCluster, TimeIntervalInMin) {


    try {
        await element(by.xpath('//legend[text()="Number of auto closed clusters"]//following-sibling::input')).clear;
        await element(by.xpath('//legend[text()="Number of auto closed clusters"]//following-sibling::input')).sendKeys(valueForAutoCloseCluster);
        await element(by.xpath('//legend[text()="Time interval in minutes"]//following-sibling::input')).clear;
        await element(by.xpath('//legend[text()="Time interval in minutes"]//following-sibling::input')).sendKeys(TimeIntervalInMin);
    } catch (error) {
        await console.log(error)
        throw "Admin unable to enter the values in Number of auto closed clusters"

    }
});

Then('Click on update button and verify success message is displayed', async function () {
    try {
        await element(by.xpath('//span[text()="Update"]')).click()
        await element(by.xpath('//span[text()="Yes"]')).click()
    } catch (error) {
        await console.log(error)
        throw "Admin unable to Click on update button and verify success message is displayed"

    }

});

Given('Admin verifies flap Indicator',async function () {
    try {
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[@class="smo-badge smo-badge-sm smo-badge-info"]'))), 60000);
    } catch (error) {
        await console.log(error)
        throw "Admin unable to verifies flap Indicator"

    }
});


Given('Verify the comment in the closure note {string}',async function (string) {
    try {
        await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="Device Inventory"]'))), 60000);
    } catch (error) {
        await console.log(error)
        throw "Admin unable to Verify the comment in the closure note"

    }
});


Given('Admin verifies Time error indicator',async function () {
    try {
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[@class="smo-badge smo-badge-sm smo-badge-info"]'))), 60000);
    } catch (error) {
        await console.log(error)
        throw "Admin unable to verifies Time error indicator"

    }
});


Given('Admin verifies correlation error indicator',async function () {
    try {
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[@class="smo-badge smo-badge-sm smo-badge-info"]'))), 60000);
    } catch (error) {
        await console.log(error)
        throw "Admin unable to verifies correlation error indicator"

    }
});

//Surge indicator

Then('{string} verifies Surge indicator', async function () {
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[contains(text(),'SURGE')]"))), 60000);
    try {

    } catch (error) {
        console.log(error);
        throw "Admin Unable to Verify Surge indicator / No Surge indicator Found"

    }
});