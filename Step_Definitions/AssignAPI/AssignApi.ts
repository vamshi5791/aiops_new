import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"

import chai from "chai";

var EC = browser.ExpectedConditions;
var expect = chai.expect;
//For Log File
import { configure, getLogger } from "log4js";
const logger = getLogger();
configure({
    appenders: { Error: { type: "file", filename: "logs/logs.log" } },
    categories: { default: { appenders: ["Error"], level: "all" } }
});

When('{string} Navigate to alert console', function (string) {
    try {
        logger.info('');
    } catch (error) {
        logger.error('');
    }
});

Then('Assign any ticket to any group', function () {
    try {
        logger.info('');
    } catch (error) {
        logger.error('');
    }
});

Then('verify that SNOW update calls are happening using  group id\'s', function () {
    try {
        logger.info('');
    } catch (error) {
        logger.error('');
    }
});