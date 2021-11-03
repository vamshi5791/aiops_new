import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { LogIn } from "../../PageObjects/LogIn";
import { PushingAlerts } from "../../PageObjects/RabbitMQ";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
import { SeverityMapping } from "../../PageObjects/Severity_Mapping";
import { Tickets } from "../../PageObjects/Tickets";

var objTickets = new Tickets();
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;
let objLogIn = new LogIn();
let objFilter = new PushingAlerts();
let objAlerts = new AlertsPage();
let objSeverityMapping = new SeverityMapping();
let objProjectListing = new ProjectListingPage();
var Global_ProjectName;
var todayDate;

import { configure, getLogger } from "log4js";
const logger = getLogger();
configure({
    appenders: { Error: { type: "file", filename: "logs/logs.log" } },
    categories: { default: { appenders: ["Error"], level: "all" } }
});


When('{string} clicks on filter by priority dropdown',async function (string) {
    await objTickets.FilterByPriorityDropdown();
});

When('{string} clicks on quick filter dropdown',async function (string) {
    await objTickets.FilterByStatusTypeDrp();
});


When('Admin selects critical filter',async function () {
    await objTickets.Critical();
});

When('Admin selects high filter',async function () {
    await objTickets.High();
});
