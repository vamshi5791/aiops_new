
import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { Tickets } from "../../PageObjects/Tickets";
import { ServiceNowAPI } from '../../ServiceNowAPI/servicenowAPI';
import { configure, getLogger } from "log4js";
let objServiceNow = new ServiceNowAPI();
var resultState;
const logger = getLogger();
configure({
    appenders: { Error: { type: "file", filename: "logs/logs.log" } },
    categories: { default: { appenders: ["Error"], level: "all" } }
});

let objTicketsConsole = new Tickets();

var EC = browser.ExpectedConditions;
var expect = chai.expect;


// Verify the ticket listing display page

Then('{string} verifies the ticket console must have {string}, {string}, {string}, {string}', async function (string, TicketID, Title, Priority, Description) {

    try {
        await objTicketsConsole.verifyingTicketConsoleTitles(TicketID, Title, Priority, Description)
        logger.info("verifying ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "missing ticket console mandatory filed"
    }
});


Then('{string} verifies the ticket console also must have {string}, {string}, {string}, {string}', async function (string, CreatedTimeAndDate, UpdatedTimeAndDate, Category, State) {
    try {
        await objTicketsConsole.verifyingTicketConsole(CreatedTimeAndDate, UpdatedTimeAndDate, Category, State)
        logger.info("verifying ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "missing ticket console mandatory filed"
    }
});

Then('{string} verifies the created time and date, updated time and Date must have sort options', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objTicketsConsole.txtCreateTimeAndUpdateSort), 10000);
        logger.info("verifying the created time and date")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "created time and date, updated time and Date doesn't have sort options"
    }
});


Then('{string} verifies the quick filter option must be present', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objTicketsConsole.btnQuickFilter), 10000);
        logger.info("verifying quick filter option")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "quick filter option not present"
    }
});


Then('{string} verifies the auto refresh and search options must be present', async function (string) {
    try {
        await browser.wait(EC.visibilityOf(objTicketsConsole.txtAutoRefreshInEvery), 10000);
        await browser.wait(EC.visibilityOf(objTicketsConsole.txtSearchForTicket), 10000);
        logger.info("verifying auto refresh and search options must be present")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "auto refresh and search options are not present"
    }
});

Then('{string} verifies the pagination and rows per page options must be present', async function (string) {
    try {
      await  browser.wait(EC.visibilityOf(objTicketsConsole.txtRowsPerPage), 10000);
        logger.info("verifying pagination and rows per page options must be present")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "pagination and rows per page options not present"
    }
});

// Verify the ticket listing display page - Installation Engineer and visitor

Then('{string} verifies the Tickets page', async function (string) {
    try {
        await objTicketsConsole.lnkTickets.isPresent().then(function (select) {
            expect(select).to.be.false;
        });
        logger.info("verifying Tickets page")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "Tickets page doesn't exist"
    }
})


// Verify the ticket store is present in the project with tickets from ITOPS

When('{string} verifies ticket status in alert console as {string}', async function (string, Status) {
    try {
       await objTicketsConsole.verifyingSections(Status)
        logger.info("verifying ticket status in alert console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "ticket status not updated"
    }
});
When('{string} verifies ticket status in {string} as {string}', async function (string, console, Status) {
    try {
       await objTicketsConsole.verifyTicketStatus(Status)
        logger.info("verifying ticket status")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "ticket status not updated"
    }
});
When('{string} verifies ticket status in ticket console as {string}', async function (string, Status) {
    try {
       await objTicketsConsole.verifyTicketStatus(Status)
        logger.info("verifying ticket status")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "ticket status not updated"
    }
});


//   Verify the ticket store is present in the project with tickets from ServiceNow

When('{string} creates incident in servicenow as user {string}', async function (string, string2) {
    try {
        resultState = await objServiceNow.createNewInc()
        logger.info("creating incident in servicenow")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "unable to create servicenow"
    }
});

When('{string} verifies ticket must be listed in Ticket console', async function (string) {
    try {
       await objTicketsConsole.verifyingCreatedTicket();
        logger.info("verifying ticket must be listed in Ticket console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "ticket not listed in Ticket console"
    }
});

When('{string} verifies ticket must not be available in alert console', async function (string) {
    try {
        await objTicketsConsole.verifyingCreatedTicketInAlertConsole()
        await logger.info("verifying alert console")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "created ticket in servicenow available in alert console"
    }
});

When('{string} verifies the options for the tickets in ticket store must have {string}, {string}', async function (string, Hold, Assign) {
    try {
        await  objTicketsConsole.verifyingSections(Hold)
        await objTicketsConsole.verifyingSections(Hold)
        logger.info("verifying options for the tickets in ticket store")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "ticket state options are invalid"
    }
});

When('{string} verifies the options for the tickets in alert store must have {string}, {string}', async function (string, Hold, Assign) {
    try {
        await objTicketsConsole.verifyingSections(Hold)
        await objTicketsConsole.verifyingSections(Assign)
        logger.info("verifying options for the tickets in alert store")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "ticket state options are invalid"
    }
});

When('Admin click on state in ticket console', async function () {
    try {
        await browser.sleep(5000)
        await objTicketsConsole.clickOnTicketStateDropdown()
    }
    catch (error) {
      await console.log("Action Name : Admin Verifying alerts moved to ticketed ")
      await console.log(error)
      throw "User is not able to click on state"
    }
  });

  When('{string} enters resolve note as {string}', async function (string, ClosureNote) {
    try {
        await objTicketsConsole.enterResolveClosureNote(ClosureNote)
    }
    catch (error) {
      await console.log("entering resolve note")
      await console.log(error)
      throw "User is not able to enter resolve note"
    }
  });

  When('{string} clicks on resolve button after entering closure note', async function (string) {
    try {
       await objTicketsConsole.clickOnResolveClosureNote()
    }
    catch (error) {
      await console.log("clicking on resolve button after entering closure note")
      await console.log(error)
      throw "User is not able to click on resolve button"
    }
  });
  When('{string} verifies the options for the tickets as {string}', async function (string, Hold) {
    try {
        await objTicketsConsole.verifyingField(Hold)
        logger.info("verifying options for the tickets")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "wrong ticket status"
    }
});
When('{string} verifies the status must have {string} in ticket details page', async function (string, Hold) {
    try {
        await objTicketsConsole.verifyTabs(Hold)
        logger.info("verifying ticket status")
    } catch (error) {
        logger.error("error message")
        console.log(error)
        throw "ticket status not updated"
    }
});

When('{string} able to access Tickets section', async function (string) {
    try {
      await objTicketsConsole.lnkTickets.isPresent().then(function (select) {
        expect(select).to.be.true;
      });
    }
    catch (error) {
      console.log("Feature name : Login persona and Scenario name : able to access alerts section")
      await console.log(error)
      throw "User is not able to access alerts section"
    }
  });