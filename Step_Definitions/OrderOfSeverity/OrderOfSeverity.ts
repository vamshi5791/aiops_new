import { When, Then } from "cucumber"
import { browser} from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
var EC = browser.ExpectedConditions;
let objAlerts = new AlertsPage();
var EC = browser.ExpectedConditions;

When('{string} verifies critical filter from dropdown', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objAlerts.btnCritical), 10000);
    } catch (error) {
        await console.log(error)
        throw "Admin unable to verifies critical filter from dropdown"
    }
});


When('{string} verifies major filter from dropdown', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objAlerts.btnSelectMajor), 10000);
    } catch (error) {
        await console.log(error)
        throw "Admin unable to verifies major filter from dropdown"
    }
});

When('{string} verifies minor filter from dropdown', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objAlerts.txtMinorFilterBySeverity), 10000);

    } catch (error) {
        await console.log(error)
        throw "Admin unable to verifies minor filter from dropdown"
    }
});

When('{string} verifies warning filter from dropdown', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objAlerts.btnSelectWarning), 10000);

    } catch (error) {
        await console.log(error)
        throw "Admin unable to verifies warning filter from dropdown"
    }
});

When('{string} verifies ok filter from dropdown', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objAlerts.txtOkFilterBySeverity), 10000);

    } catch (error) {
        await console.log(error)
        throw "Admin unable to verifies ok filter from dropdown"
    }
});

When('{string} verifies information filter from dropdown', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objAlerts.txtInformationFilterBySeverity), 10000);

    } catch (error) {
        await console.log(error)
        throw "Admin unable to verifies information filter from dropdown"
    }
});

