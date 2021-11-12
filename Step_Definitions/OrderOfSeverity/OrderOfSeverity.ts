import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { AlertConsoleTableData } from "../../PageObjects/AlertConsoleTableData";
var EC = browser.ExpectedConditions;
let objAlerts = new AlertsPage();

import chai from "chai";

import { configure, getLogger } from "log4js";
const logger = getLogger();
configure({
    appenders: { Error: { type: "file", filename: "logs/logs.log" } },
    categories: { default: { appenders: ["Error"], level: "all" } }
});
var EC = browser.ExpectedConditions;




When('{string} verifies critical filter from dropdown', async function (string) {

    await browser.wait(EC.visibilityOf(objAlerts.btnCritical), 10000);
});


When('{string} verifies major filter from dropdown', async function (string) {
    await browser.wait(EC.visibilityOf(objAlerts.btnSelectMajor), 10000);
});


When('{string} verifies minor filter from dropdown', async function (string) {
    await browser.wait(EC.visibilityOf(objAlerts.txtMinorFilterBySeverity), 10000);
});


When('{string} verifies warning filter from dropdown', async function (string) {
    await browser.wait(EC.visibilityOf(objAlerts.btnSelectWarning), 10000);
});


When('{string} verifies ok filter from dropdown', async function (string) {
    await browser.wait(EC.visibilityOf(objAlerts.txtOkFilterBySeverity), 10000);
});

When('{string} verifies information filter from dropdown', async function (string) {
    await browser.wait(EC.visibilityOf(objAlerts.txtInformationFilterBySeverity), 10000);
});

