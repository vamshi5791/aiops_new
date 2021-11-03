import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";



When('user Click on Autoclosure and flapping under Settings section', async function () {
    try {
        await element(by.xpath('//div[text() = "Auto Closure and Flapping"]')).click();
        await element(by.xpath('//div[text()=" Edit "]')).click();
    } catch (error) {
        await console.log(error)
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
    }
});

Then('Click on update button and verify success message is displayed', async function () {
    try {
        await element(by.xpath('//span[text()="Update"]')).click()
        await element(by.xpath('//span[text()="Yes"]')).click()
    } catch (error) {
        await console.log(error)
    }

});