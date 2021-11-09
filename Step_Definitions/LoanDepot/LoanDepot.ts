import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { InfrastructurePage } from "../../PageObjects/InfrastructurePage";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ITOPS_APIs } from "../../ITOPS_Apis/ItopsApis";

var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objInfrastructurePage = new InfrastructurePage();
let objAlerts = new AlertsPage();
var objITOps_API = new ITOPS_APIs();



When('{string} sends {string} new Http alerts with {string}, {string}', async function (string, string2, string3, string4) {
    await objITOps_API.HTTPchannelAlerts();
});

When('Admin gets the alertId', async function () {
});

When('Admin verifies the bussiness time alert in elastic search index', async function () {
});

When('Admin verifies the bussiness time zone CST', async function () {
});

When('{string} sends {string} new Http alerts without NodeName', async function (string, string2) {
});

Given('{string} selects bussiness timezone', function (string) {
});

Given('{string} clicks on update and save', function (string) {
});