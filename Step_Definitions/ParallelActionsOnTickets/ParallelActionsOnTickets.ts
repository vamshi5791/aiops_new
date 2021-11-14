import { Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
var expect = chai.expect;
var EC = browser.ExpectedConditions;


Then('{string} will get an Error Message {string} while trying to do the hold after the resolved state updation from in service now', async function (string, errorMessage) {
    try {
        await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

        await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(async function (text) {
            await console.log(text)
            await expect(text).to.include(errorMessage);
        });
    } catch (error) {
        await console.log(error)
        throw "Admin unable to verify ticket is holded"
    }
});




