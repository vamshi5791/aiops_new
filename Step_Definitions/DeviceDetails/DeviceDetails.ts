import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { InfrastructurePage } from "../../PageObjects/InfrastructurePage";
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objInfrastructurePage = new InfrastructurePage();


Then('Verify Green Up arrow against Device Name', async function () {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtUp), 100000);

});

Then('{string} verifies the Resource Type column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtResourcetype), 100000);
});


Then('{string} verifies the Resource Group column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtResourcegroup), 100000);
});


Then('{string} verifies the IP Address column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtIPAddress), 100000);
});



Then('{string} verifies the Mac address column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtMacAddress), 100000);
});


Then('{string} verifies the Vendor column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtVendor), 100000);
});


Then('{string} verifies the Model column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtmodel), 100000);
});


Then('{string} verifies the Maintanence Mode column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtMaintanenceMode), 100000);
});


Then('{string} verifies the Country column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtCountry), 100000);
});


Then('{string} verifies the Site column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtSite), 100000);
});


Then('{string} verifies the Region column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtRegion), 100000);
});


Then('{string} verifies the Critical column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtCritical), 100000);
});


Then('{string} verifies the Warning column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtWarning), 100000);
});


Then('{string} verifies the Ok column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtOk), 100000);
});

Then('{string} verifies the Major column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtMajor), 100000);
});


Then('{string} verifies the Minor column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtMinor), 100000);
});


Then('{string} verifies the Info column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtInfo), 100000);
});


Then('{string} verifies the Total column', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtTotal), 100000);
});


Then('{string} verifies the Alert Name column in Device Availability', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtAlertName), 100000);
});


Then('{string} verifies the Mtbf column in Device Availability', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtMtbf), 100000);
});


Then('{string} verifies the Port column in Connections', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtPort), 100000);
});


Then('{string} verifies the Dest Hostname column in Connections', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtDestHostname), 100000);
});

Then('{string} verifies the Status column in Connections', async function (string) {
    await browser.wait(EC.visibilityOf(objInfrastructurePage.txtStatus), 100000);
});