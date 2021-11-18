import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { Tickets } from "../../PageObjects/Tickets";
var objTickets = new Tickets();
import { AlertsPage } from "../../PageObjects/AlertsPage";
let objTicketsConsole = new Tickets();
let objAlerts = new AlertsPage();
var EC = browser.ExpectedConditions;
var expect = chai.expect;
When('{string} clicks on filter by priority dropdown', async function (string) {
  try {
    await objTickets.FilterByPriorityDropdown();

  } catch (error) {
    await console.log(error)
    throw "Admin unable to clicks on filter by priority dropdown"
  }
});

When('{string} clicks on quick filter dropdown', async function (string) {
  try {
    await objTickets.FilterByStatusTypeDrp();
  } catch (error) {
    await console.log(error)
    throw "Admin unable to clicks on quick filter dropdown"
  }
});

When('Admin selects critical filter', async function () {
  try {
    await objTickets.Critical();
  } catch (error) {
    await console.log(error)
    throw "Admin unable to Admin selects critical filter"
  }
});

When('Admin selects high filter', async function () {
  try {
    await objTickets.High();

  } catch (error) {
    await console.log(error)
    throw "Admin unable to Admin selects high filter"
  }
});


//And "admin" verify QuickFilter is present on ticket listing page
When('{string} verify QuickFilter is present on ticket listing page', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[@class='section-body padding-right-10']"))), 5000);
    var myelement = element(by.xpath("//span[@class='filter smo smo-filter']"))
    await myelement.isPresent().then(function (select) {
      expect(select).to.be.true;
    });
  } catch (error) {
    await console.log("Action Name :presence of quick filter")
    await console.log(error)
    throw "quick filter is not present"
  }
});


//And "admin" Clear the existing filters

When('{string} Clear the existing filters', async function (string) {
  try {
    var myElement = element(by.xpath("//a[@id='removeAllFilterLink']"));
    myElement.isPresent().then(async function (elm) {
      if (elm) {
        await element(by.xpath("//a[@id='removeAllFilterLink']")).click();
      } else {
        console.log("no action required");
      }
    });
  }
  catch (error) {
    await console.log("not clear the filters")
    await console.log(error)
    throw "User is not able to clicks on remove all button"
  }
});


//And "Admin" clicks on Quick filter icon
When('{string} clicks on Quick filter icon', async function (userRole) {
  try {
    await browser.wait(EC.presenceOf(element(by.className('filter smo smo-filter'))), 100000);
    await browser.wait(EC.elementToBeClickable(element(by.className('filter smo smo-filter'))), 100000);
    await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 100000);
    await objAlerts.AdvanceFilter();
  } catch (error) {
    await console.log("Feature name : Saved Filters " + userRole + " and Action  : clicking on Advanced filter icon")
    await console.log(error)
  }
});

// When "Admin" clicks on quick filter dropdown
When('{string} clicks on quick filter dropdown', async function (string) {
  try {
    await objTickets.FilterByStatusTypeDrp();
  } catch (error) {
    console.log(error)
    throw "unable to click on quick filter dropdown"
  }
});

//And "admin" selects filter by status type "On Hold"

When('{string} selects filter by status type {string}', async function (string, Status) {
  try {
    await element(by.xpath('//span[text()="' + Status + '"]')).click();
    await browser.sleep(3000);
  } catch (error) {
    console.log(error)
    throw Status + " option not found in dropdown"
  }
});

// And "Admin" clicks on filter by priority dropdown
When('{string} clicks on filter by priority dropdown', async function (string) {

  try {
    await objTickets.FilterByPriorityDropdown();
  } catch (error) {
    console.log(error)
    throw "unable to click on filter by priority dropdown"
  }
});

//And Admin selects moderate filter
When('Admin selects moderate filter', async function () {
  try {
    await element(by.xpath("//span[.='3 - Moderate']")).click();
  } catch (error) {
    console.log("moderate not click");
    throw "Admin not select moderate filter"
  }
});

//And Admin selects Low filter

When('Admin selects Low filter', async function () {

  try {
    await element(by.xpath('//smo-multiselect-item[4]//span[@class="ng-star-inserted"]')).click();
  } catch (error) {
    console.log("Low not click");
    throw "Admin not select Low filter"
  }
});

//And "Admin" closes the quick filter drop down
When('{string} closes the quick filter drop down', async function (userRole) {
  try {
    await element(by.xpath('//span[contains(@class,"smo-overlaypanel-close-icon smo")]')).click();
  } catch (error) {
    console.log("admin not closed the quick filter drop down");
    throw "Admin not closes the quick filter drop down"
  }
})

//And "Admin" verifies the selected filters "On Hold" are present in chip
Then('{string} verifies the selected filters {string} are present in chip', async function (userRole, filter) {
  try {
    var myElement = element(by.xpath('//span[text()="' + filter + '"]'))
    await myElement.isPresent().then(function (select) {
      expect(select).to.be.true
    })
  }
  catch (error) {
    await console.log(error)
    throw "selected filters " + filter + " are not present"
  }
})

//When "Admin" removes the Ticket "<RemoveTicketPriority>"
When('{string} removes the Ticket {string}', async function (userRole, priority) {
  try {
    await element(by.xpath('//span[text()="' + priority + '"]//following-sibling::span[@class="smo smo-close-black-alt filter-result-icon-sm"]')).click();
  } catch (error) {
    await console.log(error);
    throw "not able to delete the selected priority " + priority + " ticket"
  }
})

//Then "admin" clicks on the filter by status type dropdown
When('{string} clicks on the filter by status type dropdown', async function (userRole) {
  try {
    await element(by.xpath('//span[contains(@class,"smo-multiselect-trigger-icon smo-clickable")]')).click();

  } catch (error) {
    console.log("admin not closed the pripority dropdown");
    throw "Admin not clicks on filter by priority dropdown"
  }
})
// And "Admin" verifies the "2""nd" quick filter Option as "Open"

When('{string} verifies the {string}{string} quick filter Option as {string}', async function (userRole, index, string, DropDownSequence) {
  try {
    var text = await element(by.xpath('(//li[contains(@class,"smo-multiselect-item smo-corner-all")]//span)[' + index + ']')).getText();
    await console.log("severity level selected should be " + text);
    await expect(text).equal(DropDownSequence);
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name : Verify that Itops_admin is able to add some more severity conditions")
    await console.log(error);
    throw "Invalid Sequence"
  }
})

// And "admin" clicks on the filter by priority type dropdown
Then('{string} clicks on the filter by priority type dropdown', async function (userRole) {
  try {
    await element(by.xpath('(//span[contains(@class,"smo-multiselect-trigger-icon smo-clickable")])[2]')).click();
  } catch (error) {
    console.log(error)
    throw "not able to clicks on filter by priority dropdown"
  }
})

//And "Admin" verifies the priority as "<priority>" and state as "<state>"
When('{string} verifies the priority as {string} and state as {string}', async function (userRole, priority, state) {
  try {
    var myElePriority = await element(by.xpath('(//span[contains(@class,"text-font-dark text-with-bold")])[2]')).getText();
    await console.log(" pritority Elemenet text is " + myElePriority)
    await expect(myElePriority).to.equal(priority);
    var myEleState = await element(by.xpath('//label[contains(@class,"ng-tns-c18-221 smo-inputtext")]')).getText();
    await console.log(" state Elemenet text is " + myEleState)
    await expect(myEleState).to.equal(state);
  } catch (error) {
    await console.log("" + userRole + " not able to find the ticket number having " + state + " state and priority as " + priority + "")
    await console.log(error);
    throw "" + userRole + " not able to find the ticket number having " + state + " state and priority as " + priority + ""
  }
})
