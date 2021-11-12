import { When } from "cucumber"
import { browser } from "protractor"
import { Tickets } from "../../PageObjects/Tickets";

var objTickets = new Tickets();
var EC = browser.ExpectedConditions;


import { configure, getLogger } from "log4js";
const logger = getLogger();
configure({
    appenders: { Error: { type: "file", filename: "logs/logs.log" } },
    categories: { default: { appenders: ["Error"], level: "all" } }
});


When('{string} clicks on filter by priority dropdown', async function (string) {
    await objTickets.FilterByPriorityDropdown();
});

When('{string} clicks on quick filter dropdown', async function (string) {
    await objTickets.FilterByStatusTypeDrp();
});


When('Admin selects critical filter', async function () {
    await objTickets.Critical();
});

When('Admin selects high filter', async function () {
    await objTickets.High();
});
