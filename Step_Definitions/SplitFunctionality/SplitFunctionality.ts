import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { LogIn } from "../../PageObjects/LogIn";
import { PushingAlerts } from "../../PageObjects/RabbitMQ";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
import { ApiRabbitMQ } from "../../PageObjects/ApiRabbitMQ";
import { ADDRGETNETWORKPARAMS } from "dns";
var objApiRabbitMQ = new ApiRabbitMQ()
import { ServiceNowAPI } from "../../ServiceNowAPI/servicenowAPI";

import { SeverityMapping } from "../../PageObjects/Severity_Mapping";
import { TicketingThreshold } from "../../PageObjects/TicketingThreshholdPageObjects";
let objSeverityMapping = new SeverityMapping();
let objTicketingThreshold = new TicketingThreshold();

var APIServiceNow = new ServiceNowAPI();
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objAlerts = new AlertsPage();


When('{string} selects create ticket from pop up', async function (string) {
    try {
        // await browser.sleep(3000)
        await objAlerts.CreateTicket();
    } catch (error) {
        await console.log("Action Name : selects create ticket from pop up ")
        await console.log(error)
        throw "Admin unable to selects create ticket from pop up"
    }
});

When('{string} clicks on confirm', async function (string) {
    try {
        await objAlerts.confirm();

    } catch (error) {
        await console.log("Action Name : clicks on confirm ")
        await console.log(error)
        var myElement = element(by.xpath("//span[text()='Cancel']"));
        myElement.isPresent().then(async function (elm) {
            if (elm) {
                await browser.wait(EC.elementToBeClickable(element(by.xpath("//span[text()='Cancel']"))), 10000);
                await browser.wait(EC.presenceOf(element(by.xpath("//span[text()='Cancel']"))), 10000);
                await element(by.xpath("//span[text()='Cancel']")).click();
            }
        });
        throw "Admin unable to clicks on confirm "
    }

});

When('{string} selects first alert from pop up', async function (string) {
    try {

        await browser.sleep(5000)
        await objAlerts.FirstAlert();
    } catch (error) {
        await console.log("Action Name : selects first alert from pop up ")
        await console.log(error)
        throw "Admin unable to selects first alert from pop up"
    }
});

When('{string} selects second alert from pop up', async function (string) {
    try {
        await objAlerts.SecondAlert();

    } catch (error) {
        await console.log("Action Name : selects second alert from pop up ")
        await console.log(error)
        throw "Admin unable to selects second alert from pop up"
    }
});

When('{string} selects all alerts from pop up', async function (string) {
    try {
        await objAlerts.AllAlerts();

    } catch (error) {
        await console.log("Action Name : selects all alerts from pop up ")
        await console.log(error)
        throw "Admin unable to selects all alerts from pop up "
    }
});

When('{string} selects base alert from pop up', async function (string) {
    try {
        await objAlerts.BaseAlert();

    } catch (error) {
        await console.log("Action Name : selects base alert from pop up  ")
        await console.log(error)
        throw "Admin unable to selects base alert from pop up"
    }
});



When('verify second cluster size must be {string}', async function (size) {
    try {
        await browser.sleep(5000);
        await element(by.xpath("//span[contains(@class,'cluster-badge-icon smo')][1]")).getText().then(async function (text) {
            await console.log(text);
            expect(text).to.include(size);
        });
    }
    catch (error) {
        await console.log("Action Name : verify second cluster size ")
        await console.log(error);
        throw "User is not able to verify cluster size"
    }
});


When('{string} verifies number of occurence is for {string} is {string}', async function (userName, TicketNumber, NumOfOccurence) {
    try {
        var Result = await APIServiceNow.apiServiceNow(TicketNumber);
        expect(Result.NoOfOccurence).to.include(NumOfOccurence);

    } catch (error) {
        await console.log("Action Name : verifies number of occurence ")
        await console.log(error)
        throw "Admin unable to verifies number of occurence"
    }
});


When('{string} sets the ticketing threshold to 5', async function (string) {
    try {
        await browser.wait(EC.elementToBeClickable(objSeverityMapping.btnConfiguration), 10000);
        await objSeverityMapping.Configuration();
        await objTicketingThreshold.clickOnTicketingThreshold();
        await browser.actions().mouseMove(element(by.xpath("//div[text()='Solarwinds']//following::div[@class='cluster-details']"))).perform();
        await element(by.xpath('//div[text()="Solarwinds"]//following::span[@class="smo smo-create-alt edit-icon ng-star-inserted"]')).click();
        await objTicketingThreshold.enterCluserSize("5");
        await objTicketingThreshold.enterTimeInterval("30");
        await objTicketingThreshold.SaveThreshold();
        await objTicketingThreshold.Yes();
    } catch (error) {
        await console.log("Action Name : sets the ticketing threshold ")
        await console.log(error)
        throw "Admin unable to sets the ticketing threshold"
    }

});

When('{string} sets the ticketing threshold to 3', async function (string) {
    try {
        await browser.wait(EC.elementToBeClickable(objSeverityMapping.btnConfiguration), 10000);
        await objSeverityMapping.Configuration();
        await objTicketingThreshold.clickOnTicketingThreshold();
        await browser.actions().mouseMove(element(by.className('cluster-edit')[2])).perform();
        await element(by.xpath('//div[text()="Solarwinds"]//following::span[@class="smo smo-create-alt edit-icon ng-star-inserted"]')).click();
        await objTicketingThreshold.enterCluserSize("3");
        await objTicketingThreshold.enterTimeInterval("30");
        await objTicketingThreshold.SaveThreshold();
        await objTicketingThreshold.Yes();

    } catch (error) {
        await console.log("Action Name : sets the ticketing threshold ")
        await console.log(error)
        throw "Admin unable to sets the ticketing threshold"
    }
});