import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
var EC = browser.ExpectedConditions;
let objAlerts = new AlertsPage();
import { configure, getLogger } from "log4js";
const logger = getLogger();
configure({
    appenders: { Error: { type: "file", filename: "logs/logs.log" } },
    categories: { default: { appenders: ["Error"], level: "all" } }
});

When('{string} selects cluster type dropdown', async function (userName) {
    try {
        await objAlerts.ClusterType();
        logger.info("selects cluster type dropdown")
    } catch (error) {
        logger.error("error message")
        await console.log("Action Name : selects cluster type dropdown ")
        await console.log(error)
        throw "Admin unable to selects cluster type dropdown "
    }
});

When('{string} selects ticketed', async function (userName) {
    try {
        await objAlerts.Ticketed();
        logger.info("selects ticketed")
    } catch (error) {
        logger.error("error message")
        await console.log("Action Name : selects ticketed ")
        await console.log(error)
        throw "Admin unable to selects ticketed"
    }
});

When('{string} selects non ticketed', async function (userName) {
    try {
        await objAlerts.NonTicketed();
        logger.info("selects non ticketed")
    } catch (error) {
        logger.error("error message")
        await console.log("Action Name : selects non ticketed ")
        await console.log(error)
        throw "Admin unable to selects non ticketed"
    }
});
When('{string} selects selects all', async function (userName) {
    try {
        await objAlerts.SelectAll();
        logger.info("selects selects all")
    } catch (error) {
        logger.error("error message")
        await console.log("Action Name : selects selects all ")
        await console.log(error)
        throw "Admin unable to selects selects all"
    }
});

When('{string} selects source dropdown', async function (userName) {
    try {
        await objAlerts.Source();
        logger.info("selects source dropdown")
    } catch (error) {
        logger.error("error message")
        await console.log("Action Name : selects source dropdown ")
        await console.log(error)
        throw "Admin unable to selects source dropdown "
    }
});

When('{string} selects Solarwinds', async function (userName) {
    try {
        await objAlerts.Solarwinds();
        logger.info("selects Solarwinds")
    } catch (error) {
        logger.error("error message")
        await console.log("Action Name : selects Solarwinds ")
        await console.log(error)
        throw "Admin unable to selects Solarwinds"
    }
});

When('{string} selects Verba', async function (userName) {
    try {
        await objAlerts.Verba();
        logger.info("selects Verba")
    } catch (error) {
        logger.error("error message")
        await console.log("Action Name : selects Verba ")
        await console.log(error)
        throw "Admin unable to selects Verba"
    }
});

When('{string} selects Critical', async function (userName) {
    try {
        await objAlerts.Critical();
        logger.info("selects Critical")
    } catch (error) {
        logger.error("error message")
        await console.log("Action Name : selects Critical ")
        await console.log(error)
        throw "Admin unable to selects Critical"
    }
});

When('{string} enters  auto refresh in {string} minutes', async function (userName, Minutes) {
    try {
        await browser.sleep(5000)
        // await objAlerts.AutoRefresh.clear();
        await objAlerts.AutoRefresh(Minutes);
        logger.info("enters  auto refresh in {string} minutes")
    } catch (error) {
        logger.error("error message")
        await console.log("Action Name : enters  auto refresh")
        await console.log(error)
        throw "Admin unable to enters  auto refresh"
    }
});

