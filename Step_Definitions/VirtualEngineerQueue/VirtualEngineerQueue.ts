import { Given, When, Then } from "cucumber"
import { AlertsPage } from "../../PageObjects/AlertsPage";
let objAlerts = new AlertsPage();
import chai from "chai";
var expect = chai.expect;
import { configure, getLogger } from "log4js";
const logger = getLogger();
configure({
    appenders: { Error: { type: "file", filename: "logs/logs.log" } },
    categories: { default: { appenders: ["Error"], level: "all" } }
});

Given('Admin verifies assign option is not present', async function () {
  try {
    await objAlerts.btnAssign.isPresent().then(function (select) {
      expect(select).to.be.false;
    });
  } catch (error) {
    await console.log("Action Name : Admin verifies assign option is not present ")
    await console.log(error)
    throw "Assign option is present"
  }
});

Then('Admin verifies cluster not closed', async function () {
  try {
    await objAlerts.btnClose.isPresent().then(function (select) {
      expect(select).to.be.false;
    });
  } catch (error) {
    await console.log("Action Name : Admin verifies cluster not closed ")
    await console.log(error)
    throw "cluster is closed"
  }
});
