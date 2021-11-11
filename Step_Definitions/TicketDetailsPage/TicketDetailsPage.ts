
import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { Tickets } from "../../PageObjects/Tickets";
import { ServiceNowAPI } from '../../ServiceNowAPI/servicenowAPI';
import { AlertsPage } from "../../PageObjects/AlertsPage";
let objAlerts = new AlertsPage();
import { configure, getLogger } from "log4js";
let objServiceNow = new ServiceNowAPI();
var resultState;
var ticketNumber;
var systemID;
let objTicketsConsole = new Tickets();
let ticketStatus;
var serviceNowTicketNumber;
var ticketCommentsInServiceNow;
var TicketNumberFromAlertConsole;
const logger = getLogger();
configure({
    appenders: { Error: { type: "file", filename: "logs/logs.log" } },
    categories: { default: { appenders: ["Error"], level: "all" } }
});

var EC = browser.ExpectedConditions;
var expect = chai.expect;


// Verify the ticket details page

Then('{string} clicks on the ticket number in ticket console', async function (string) {

    try {
        await objTicketsConsole.clickOnTicketNumber()
        logger.info("clicking on the ticket number in ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "unable to click on ticket number in ticket console"
    }
});

Then('{string} verifies the page must have {string}', async function (string, FieldName) {

    try {
        await objTicketsConsole.verifyTabs(FieldName)
        logger.info("verifies the page must have " + FieldName)
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw FieldName + " doesn't exist"
    }
});
Then('{string} verifies the page must have Conversation tab', async function (string) {

    try {
        await browser.wait(EC.visibilityOf(objTicketsConsole.txtConversationTab), 10000);
        logger.info("verifies the page must have Conversation tab")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "Conversation tab doesn't exist"
    }
});

Then('{string} verifies the ticket id', async function (string) {

    try {
        await browser.wait(EC.visibilityOf(objTicketsConsole.txtTicketTitle), 10000);
        logger.info("verifies the ticket id")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "verifying the ticket id"
    }
});
Then('{string} verifies the close icon after ticket id', async function (string) {

    try {
        await browser.wait(EC.visibilityOf(objTicketsConsole.txtCloseTicketDetailsIcon), 10000);
        logger.info("verifying ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "Close icon doesn't exist after ticket id"
    }
});

Then('{string} verifies the Ticket details page must be opened as a new tab', async function (string) {

    try {
        await browser.wait(EC.visibilityOf(objTicketsConsole.txtNewTabTicketDetailsPage), 10000);
        logger.info("verifies the Ticket details page must be opened as a new tab")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "Ticket details page not opened as a new tab"
    }
});



//   Priority field in ticket details page


When('{string} get the ticket number from ticket console', async function (string) {
    try {
        await objTicketsConsole.btnTicketNumber.getText().then(async function (text) {
            ticketNumber = text;
        });
        await console.log(ticketNumber)
        logger.info("get the ticket number from ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "unable to get ticket number"
    }
});
When('{string} updates the ticket in service now state as {string}, category as {string}, subcategory as {string}, close code as {string}, Enter close note as {string} and update {string}', async function (string, state, category, subCategory, closeCode, closeNote, ShortDescription) {
    try {
      resultState = await objServiceNow.apiServiceNow(ticketNumber)
      systemID = resultState.sys_id;
      await objServiceNow.updateTicketToResolved(systemID, state, category, subCategory, closeCode, closeNote, ShortDescription)
    } catch (error) {
      await console.log(error)
      throw "unable to change ticket state in service now"
    }
  });

Then('{string} update the impact status to {string} and urgency status to {string} in service now', async function (string, urgencyStatus, impactStatus) {
    try {
        resultState = await objServiceNow.apiServiceNow(ticketNumber)
        systemID = resultState.sys_id;
        await objServiceNow.updateUrgency(systemID, urgencyStatus, impactStatus)
        await console.log(ticketNumber)
        logger.info("updating the impact status")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "unable to update impact and urgency status in service now"
    }
});


Then('{string} verifies the priority must be {string}', async function (string, Status) {
    try {
        await objAlerts.Alert_Search(ticketNumber);
        await objTicketsConsole.verifyingSections(Status)
        logger.info("verifying ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "priority status was not updated in ticket console"
    }
});


//   Ticket status in Status tab in ticket details page

When('{string} enters the ticket number in search field', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 10000);
        await browser.sleep(2000)
        await objAlerts.Alert_Search(ticketNumber);
        logger.info("entering the ticket number in search field")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "unable to search for ticket number"
    }
});


Then('{string} gets the status of ticket', async function (string) {
    try {
        await element(by.className("smo-field-label smo-field-label-ms")).getText().then(async function (text) {
            await console.log(text)
            ticketStatus = text;
        });
        logger.info("getting the status of ticket")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "unable to get ticket status in ticket console"
    }
});


Then('{string} verifies the status must have same status', async function (string) {
    try {
        objTicketsConsole.verifyTabs(ticketStatus)
        logger.info("verifying the status must have same status")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "doesn't have same status"
    }
});

// Actions available in the Status tab in the ticket details page

When('{string} clicks on quick filter', async function (string) {
    try {
        await objTicketsConsole.clickOnQuickFilter()
        logger.info("clicking on quick filter")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "unable to click on quick filter"
    }
});


When('{string} selects filter by status type as {string}', async function (string, Status) {
    try {
        await objTicketsConsole.clickOnFilterByStatusTypeDropDown(Status)
        await browser.sleep(1000)
        logger.info("selecting filter by status type")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw Status + " option not found in dropdown"
    }
});

// Verify Similar tickets tab in ticket details page - AIOps View

When('{string} verifies similar tickets tab has {string} and {string}', async function (string, TicketId, Title) {
    try {
        await objTicketsConsole.verifyingSections(TicketId)
        await objTicketsConsole.verifyingSections(Title)
        logger.info("verifying similar tickets tab")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "similar tickets tab doesn't exist"
    }
});


When('{string} gives right click on the ticket id and click on the Open link in new tab', async function (string) {
    try {
        var elementVar = element(by.xpath("//span[@class='text-font-dark ng-star-inserted']"))
        await browser.actions().mouseMove(elementVar).perform();
        await browser.actions().click(protractor.Button.RIGHT).perform();
        logger.info("giving right click on the ticket id")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "ticket id not found"
    }
})

When('{string} verifies comments in ITSM updated by {string} for {string}', async function (string, UpdatedBy, TicketNumber) {
    try {
        // await console.log("===============")
        // await console.log("===============" + ticketNumber)
        resultState = await objServiceNow.apiServiceNow(TicketNumber)
        systemID = resultState.sys_id;
        var datavaar = await objServiceNow.ActivitiesLog(systemID)
        await console.log(datavaar)
        await expect(datavaar.new).to.include("Hold By: " + UpdatedBy)
        logger.info("verifying ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw ""
    }
})
When('{string} verifies comments in ITSM assigned by {string} for {string}', async function (string, UpdatedBy, TicketNumber) {
    try {
        // await console.log("===============" + ticketNumber)
        resultState = await objServiceNow.apiServiceNow(TicketNumber)
        systemID = resultState.sys_id;
        var activeLogData = await objServiceNow.ActivitiesLog(systemID)
        await expect(activeLogData.new).to.include("Updated By: " + UpdatedBy + "\n\nAssigned")
        logger.info("verifying ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw ""
    }
})
When('{string} verifies comments in ITSM resolved by {string} for {string}', async function (string, UpdatedBy, TicketNumber) {
    try {
        resultState = await objServiceNow.apiServiceNow(TicketNumber)
        systemID = resultState.sys_id;
        var datavaar = await objServiceNow.ActivitiesLog(systemID)
        await console.log(datavaar)
        await expect(datavaar.new).to.include("Updated By: " + UpdatedBy + "\n\nClosed")
        logger.info("verifying ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw ""
    }
})
When('{string} verifies search box is available to perform search operation', async function (string) {
    try {
        await element(by.xpath("//input[@placeholder='Search']")).isPresent().then(function (select) {
            expect(select).to.be.true;
        });
        logger.info("verifying search box is available to perform search operation")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "search box field not available to perform search operation"
    }
})
When('{string} verifies data should be displayed as per search keyword {string}', async function (string, data) {
    try {
        await objTicketsConsole.verifyingSections(data)
        logger.info("verifying data should be displayed as per search keyword")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "showing wrong data"
    }
})

// Title,last updated time , Last updated by , assigned to tab ,Description , Conversation in the ticket details page

Then('{string} verifies the last updated time in ticket details page with the time in activities section in the servicenow ticket {string}', async function (string, TicketNumber) {
    try {
        resultState = await objServiceNow.apiServiceNow(TicketNumber)
        systemID = resultState.sys_id;
        ticketCommentsInServiceNow = await objServiceNow.ActivitiesLog(systemID)
        await console.log(ticketCommentsInServiceNow)
        logger.info("verifying data should be displayed as per search keyword")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "showing wrong data"
    }
});



Then('{string} verifies the Assigned to in ticket details page with the assignment Group and assigned To in the servicenow ticket {string}', async function (string, UpdatedBy) {
    try {
        await expect(ticketCommentsInServiceNow.new).to.include("Updated By: " + UpdatedBy + "\n\nAssigned")
        logger.info("verifying data should be displayed as per search keyword")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "showing wrong data"
    }
});

// Parallel Actions On Tickets

When('{string} ticket {string} in {string} by changing state as {string}, category as {string}, subcategory as {string}, close code as {string}, Enter close note as {string}', async function (string, TicketNumber, string3, state, category, subCategory, closeCode, closeNote) {
    try {
        await console.log(ticketNumber, state, category, subCategory, closeCode, closeNote)
        resultState = await objServiceNow.apiServiceNow(ticketNumber)
        systemID = resultState.sys_id;
        await objServiceNow.updateTicketToResolved(systemID, state, category, subCategory, closeCode, closeNote)
        logger.info('');
    } catch (error) {
        logger.error('');
    }
});

// Then('{string} gets the ticket number from alert console', async function (string) {
//     try {
//       await objAlerts.txtTicket.getText().then(async function (TxtTicketNumber) {
//         await console.log(TxtTicketNumber);
//         TicketNumberFromAlertConsole = TxtTicketNumber;
//       });
//       await objAlerts.Alert_Search(TicketNumberFromAlertConsole);
//     }
//     catch (error) {
//       throw "User unable to get the ticket number"
//     }
//   });

