import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
var expect = chai.expect;
var EC = browser.ExpectedConditions;

//For Log File
import { configure, getLogger } from "log4js";
const logger = getLogger();
configure({
    appenders: { Error: { type: "file", filename: "logs/logs.log" } },
    categories: { default: { appenders: ["Error"], level: "all" } }
});

When('Open the ticket in ticket details page', function () {
    try {
        logger.info('');
    } catch (error) {
        logger.error('');
    }
});



Then('Assign the alert from the itops detail page to another team member', function () {
    try {
        logger.info('');
    } catch (error) {
        logger.error('');
    }
});


Then('Verify the alert console for the particular ticket', function () {
    try {
        logger.info('');
    } catch (error) {
        logger.error('');
    }
});

Then('{string} the alert in the itops alerts console quickly', function (string) {
    try {
        logger.info('');
    } catch (error) {
        logger.error('');
    }
});


Then('{string} will get an Error Message {string} while trying to do the hold after the resolved state updation from in service now',async function (string, errorMessage) {
    try {
        await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

        await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(async function (text) {
            await console.log(text)
            await expect(text).to.include(errorMessage);
        });
    } catch (error) {

    }
});

Then('Within seconds, do hold from ticket console', function () {
    try {
        logger.info('');
    } catch (error) {
        logger.error('');
    }
});


