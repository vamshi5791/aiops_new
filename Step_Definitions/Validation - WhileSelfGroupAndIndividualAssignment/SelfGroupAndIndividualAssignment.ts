
import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { Tickets } from "../../PageObjects/Tickets";
import { ServiceNowAPI } from '../../ServiceNowAPI/servicenowAPI';
import { AlertsPage } from "../../PageObjects/AlertsPage";
let objAlerts = new AlertsPage();

import { configure, getLogger } from "log4js";
const logger = getLogger();
configure({
    appenders: { Error: { type: "file", filename: "logs/logs.log" } },
    categories: { default: { appenders: ["Error"], level: "all" } }
});

let objServiceNow = new ServiceNowAPI();
var resultState;
var ticketNumber;
var systemID;
let objTicketsConsole = new Tickets();
let ticketStatus;


var EC = browser.ExpectedConditions;
var expect = chai.expect;

When('{string} verifies Assign to pop up should be displayed', async function (string) {
    try {
        await element(by.xpath("//div[@role='dialog']")).isPresent().then(function (select) {
            expect(select).to.be.true;
          });
        logger.info("verifying ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw ""
    }
  });

 
  Then('{string} self assign should not be possible without group', async function (string) {
    try {
        await element(by.xpath("//div[contains(@class,'smo-dropdown-trigger smo-state-default')]//span")).click()
        await element(by.xpath("//span[contains(@class,'smo-dropdown-trigger-icon smo-clickable')]")).click()
        await element(by.xpath("//span[text()='Select a Group']")).click()
      

        logger.info("verifying ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw ""
    }
  });


  Then('{string} clicks on assign to cancel popup button', async function (string) {
    try {
        await element(by.xpath("//span[@class='smo smo-close-black-alt']")).click()
        logger.info("verifying ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw ""
    }
  });

  When('{string} clicks on the group dropdown', async function (string) {
    try {
        await element(by.xpath("//span[contains(@class,'smo-dropdown-trigger-icon smo-clickable')]")).click()
        logger.info("verifying ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw ""
    }
  });
  When('{string} clicks on the member dropdown', async function (string) {
    try {
        await element(by.xpath("//label[text()='Choose a Team member*']")).click()
        logger.info("verifying ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw ""
    }
  });

  Then('{string} verifies Member drop should contains only users list who are having access to selected group name {string}, {string}', async function (string, MemberOne, MemberTwo) {
    try {
        await objTicketsConsole.verifyingSections(MemberOne)
        await objTicketsConsole.verifyingSections(MemberTwo)
        logger.info("verifying ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw ""
    }
  });
  
  Then('{string} verifies group drop down should contains imported groups through external teams option {string}, {string}', async function (string, GroupOne, GroupTwo) {
    try {
        await objTicketsConsole.verifyingSections(GroupOne)
        await objTicketsConsole.verifyingSections(GroupTwo)
        logger.info("verifying ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw ""
    }
  });