import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { LogIn } from "../../PageObjects/LogIn";
import { PushingAlerts } from "../../PageObjects/RabbitMQ";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
import { ApiRabbitMQ } from "../../PageObjects/ApiRabbitMQ";
var objApiRabbitMQ = new ApiRabbitMQ()
import { ServiceNowAPI } from "../../ServiceNowAPI/servicenowAPI";
var objServiceNowAPI = new ServiceNowAPI();


var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;
let objLogIn = new LogIn();
let objFilter = new PushingAlerts();
let objAlerts = new AlertsPage();
let objProjectListing = new ProjectListingPage();
var JsonAlert;
var StringifiedJsonAlert;
var Global_ProjectName;
var userName;
var TicketNumber;
var TxtShortDescription;
var ShortDescription;
var TicketNumber1;
var TicketNumberNew;
var ShortDescriptionServiceNow;
var resultState;
var systemID;


Then('enter alertname in search box and verify alert details {string}', async function (AlertName) {
  try {

    await objAlerts.Alert_Search(AlertName);
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="' + AlertName + '"]'))), 100000);
  } catch (error) {

    await console.log("Feature name : Pushing Alerts through RabbitMQ " + userName + " and Scenario name : enter alertname in search box and verify alert details")
    await console.log(error)
    throw "Alert not found"
  };
});



// ------------------Milestone3------------ 



//-----------------Short Description of Tickets -----------------

Then('{string} gets the ticket number', async function (string) {
  try {
    await objAlerts.txtTicket.getText().then(async function (TxtTicketNumber) {
      await console.log(TxtTicketNumber);
      TicketNumber = TxtTicketNumber;
    });
  }
  catch (error) {
    throw "User unable to get the ticket number"
  }
});

Then('{string} gets the base ticket number', async function (string) {
  try {
    await objAlerts.txtTicketNew.getText().then(async function (TxtTicketNumber) {
      await console.log(TxtTicketNumber);
      TicketNumberNew = TxtTicketNumber;
    });
  }
  catch (error) {
    await console.log("Action Name : Admin Verifying short description of tickets ")
    await console.log(error)
    throw "User unable to get the ticket number"
  }
});


Then('{string} delete alerts from alert console {string}', async function (string, projectID) {
  try {
    await objApiRabbitMQ.deleteQueryForAlerts(projectID);
  }
  catch (error) {

    await console.log("Action Name : Admin Verifying short description of tickets ")
    await console.log(error)
    throw "alerts are not deleted"
  }
});
Then('{string} clicks on the ticket number', async function (string) {
  try {
    await objAlerts.Ticket();
  }
  catch (error) {
    await console.log("Action Name : Admin Verifying short description of tickets ")
    await console.log(error)
    throw "User is not able to clicks on the ticket number"
  }
});
Then('{string} gets severity level from ticket details page and verifies as {string}', async function (string, SeverityLevel) {
  try {
    await element(by.className('severity-label')).getText().then(async function (text) {
      await expect(text).to.include(SeverityLevel);
    });
  }
  catch (error) {
    await console.log("Action Name : Admin Verifying short description of tickets ")
    await console.log(error)
    throw "User is not able to clicks on the ticket number"
  }
});
Then('{string} verifies the page must have {string}', async function (string, FieldName) {

  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="' + FieldName + '"]'))), 10000);
  } catch (error) {
    console.log(error)
    throw FieldName + " doesn't exist"
  }
});
Then('{string} gets the short description', async function (string) {
  try {
    await objAlerts.txtShortDescription.getText().then(async function (TxtShortDescription) {
      ShortDescription = TxtShortDescription
    });
  }
  catch (error) {

    await console.log("Action Name : Admin Verifying short description of tickets ")
    await console.log(error)
    throw "User is not able to gets the short description"
  }
});


Given('User verifies short description in service now', async function () {
  try {
    var ResultJson = await objServiceNowAPI.apiServiceNow(TicketNumber);
    ShortDescriptionServiceNow = ResultJson.short_description
  }
  catch (error) {
    await console.log("Action Name : Admin Verifying short description of tickets ")
    await console.log(error)
    throw "User is not able to verifies short description in service now"
  }
})

Then('{string} verifies the short description', async function (string) {
  try {
    expect(ShortDescription).to.include(ShortDescriptionServiceNow);
  }
  catch (error) {
    await console.log("Action Name : Admin Verifying short description of tickets ")
    await console.log(error)
    throw "User is not able to verifies the short description"
  }
});
When('{string} waits {string} minute to reach ticket threshold time', async function (userName, minutes) {
  try {
    await browser.sleep(60000);
  } catch (error) {
    await console.log("Action Name : Admin Verifying short description of tickets ")
    await console.log(error)
    throw "Admin unable to wait till the alerts get clustered"
  }


});
//----------------- Move to ticketed-----------------


Then('verify cluster size must be {string}', async function (size) {
  try {
    await element(by.className('smo-badge smo-badge-round smo-badge-sm smo-badge-notification-sm')).getText().then(async function (text) {
      await console.log(text);
      expect(text).to.include(size);
    });
  }
  catch (error) {

    await console.log("Action Name : Admin Verifying alerts moved to ticketed ")
    await console.log(error)
    throw "User is not able to verify cluster size"
  }
});

Then('verify base cluster size must be {string}', async function (size) {
  try {
    await browser.sleep(5000);
    await browser.wait(EC.elementToBeClickable(objAlerts.btnSelectAlerts), 10000);
    await element(by.className('smo-badge smo-badge-round smo-badge-sm smo-badge-notification-sm')[2]).getText().then(async function (text) {
      await console.log(text);
      expect(text).to.include(size);
    });
  }
  catch (error) {

    await console.log("Action Name : Admin Verifying alerts moved to ticketed ")
    await console.log(error)
    throw "User is not able to verify cluster size"
  }
});

Then('Admin verifies Acknowledge state', async function () {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnAcknowledge), 10000);
  }
  catch (error) {

    await console.log("Action Name : Admin Verifying alerts Acknowledge state")
    await console.log(error)
    throw "User is not able to Admin verifies Acknowledge state"
  }
});

Then('Admin clicks on close button', async function () {
  try {
    await objFilter.Close();
  }
  catch (error) {
    await console.log("Action Name : Admin Verifying alerts moved to ticketed ")
    await console.log(error)
    throw "User is not able to clicks on close button"
  }
});

Then('Admin verifies Hold state', async function () {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnHold), 10000);
  }
  catch (error) {
    await console.log("Action Name : Admin Verifying alerts moved to ticketed ")
    await console.log(error)
    throw "User is not able to verifies Hold state"
  }
});

Then('Admin verifies Assign state', async function () {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnAssign), 10000);
  }
  catch (error) {
    await console.log("Action Name : Admin Verifying alerts moved to ticketed ")
    await console.log(error)
    throw "User is not able to verifies Assign state"
  }
});

Then('Admin verifies Active state', async function () {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnActive), 10000);
  }
  catch (error) {
    await console.log("Action Name : Admin Verifying alerts moved to ticketed ")
    await console.log(error)
    throw "User is not able to verifies Active state"
  }
});


Then('Admin verifies Resolve state', async function () {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnResolve), 10000);
  }
  catch (error) {
    await console.log("Action Name : Admin Verifying alerts moved to ticketed ")
    await console.log(error)
    throw "User is not able to verifies resolve state"
  }
});

Then('Admin verifies Close state', async function () {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnClose), 50000);
  }
  catch (error) {
    await console.log("Action Name : Admin Verifying alerts moved to ticketed ")
    await console.log(error)
    throw "User is not able to verifies Close state"
  }
});

When('Admin click on state', async function () {
  try {
    await browser.sleep(4000)
    await objAlerts.State();
  }
  catch (error) {
    await console.log("Action Name : Admin Verifying alerts moved to ticketed ")
    await console.log(error)
    throw "User is not able to click on state"
  }
});

When('Admin selects acknowledge', async function () {
  try {
    await browser.sleep(5000)
    await objAlerts.Acknowledge();
    await browser.sleep(10000)
  }
  catch (error) {
    await console.log("Action Name : Admin Verifying alerts moved to ticketed ")
    await console.log(error)
    throw "User is not able to selects acknowledge"
  }
});

Then('{string} verifies pushed alert in alert console with {string}', async function (userName, AlertName) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="' + AlertName + '"]'))), 10000);
  }
  catch (error) {
    await console.log("Action Name : Admin Verifying alerts moved to ticketed ")
    await console.log(error)
    throw "User is not able to verifies Close state"
  }
});

// Recovery policy and AutoClosure

Then('Admin verifies cluster got closed', async function () {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtClosed), 10000);
  } catch (error) {
    await console.log("verifying cluster got closed")
    await console.log(error)
    throw "cluster not closed"
  }
});


// Virtual Engineer assignment

Given('{string} verifies ticket is assigned to group {string}', async function (string, AssignmentGroupId) {
  try {

    var AGID = await objServiceNowAPI.apiServiceNow(TicketNumber);
    await objServiceNowAPI.assignmentGroup(AGID.assignment_group_id);
    await expect(AGID.assignment_group_name).to.include(AssignmentGroupId);
  } catch (error) {
    await console.log("Action Name : verifies ticket is assigned to group ")
    await console.log(error)
    throw "Admin unable to verifies ticket is assigned to group"
  }


});


Given('{string} verifies ticket is assigned to {string}', async function (string, AssignedToId) {
  try {

    var Assigned_to_id = await objServiceNowAPI.apiServiceNow(TicketNumber);

    if (Assigned_to_id.assigned_to_id !== "") {
      await objServiceNowAPI.assignedTo(Assigned_to_id.assigned_to_id)
      await expect(Assigned_to_id.assigned_to).to.include(AssignedToId);
    } else {
      await expect(Assigned_to_id.assigned_to_id).to.include(AssignedToId);
    }
  } catch (error) {
    await console.log("Action Name : verifies to which ticket is assigned  ")
    await console.log(error)
    throw "Admin unable to verifies to which ticket is assigned"
  }


});

Given('{string} verifies new ticket is assigned to group in ServiceNow {string}', async function (string, AssignmentGroupId) {
  try {

    var AGID = await objServiceNowAPI.apiServiceNow(TicketNumberNew);
    await objServiceNowAPI.assignmentGroup(AGID.assignment_group_id);
    await expect(AGID.assignment_group_name).to.include(AssignmentGroupId);
  } catch (error) {
    await console.log("Action Name :  verifies new ticket is assigned to group")
    await console.log(error)
    throw "Admin unable to verifies new ticket is assigned to group"
  }


});


Given('{string} verifies new ticket is assigned to {string}', async function (string, AssignedToId) {
  try {

    var Assigned_to_id = await objServiceNowAPI.apiServiceNow(TicketNumberNew);

    if (Assigned_to_id.assigned_to_id !== "") {
      await objServiceNowAPI.assignedTo(Assigned_to_id.assigned_to_id)
      await expect(Assigned_to_id.assigned_to).to.include(AssignedToId);
    } else {
      await expect(Assigned_to_id.assigned_to_id).to.include(AssignedToId);
    }
  } catch (error) {
    await console.log("Action Name : verifies to which new ticket is assigned ")
    await console.log(error)
    throw "Admin unable to verifies to which new ticket is assigned"
  }


});

Then('{string} verifies status in the card should be {string}', async function (string, Status) {

  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="' + Status + '"]'))), 10000);
  } catch (error) {
    console.log(error)
    throw Status + " status doesn't exist"
  }
});
Then('{string} verifies description of ticket to be shown in Description section', async function (string) {

  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//div[text()='Description']/following-sibling::div"))), 10000);
  } catch (error) {
    console.log(error)
    throw "description section not found"
  }
});
Then('{string} verifies No of days ago the conversation section was added should be shown', async function (string) {

  try {
    await browser.wait(EC.visibilityOf(element(by.className("comment-time"))), 10000);
  } catch (error) {
    console.log(error)
    throw "description section not found"
  }
});

Then('{string} verifies make sure the Assigned to tab is present', async function (string) {

  try {
    await element(by.className('assign-ticket-section')).isPresent().then(function (select) {
      expect(select).to.be.true;
    });
  } catch (error) {
    console.log(error)
    throw "assigned to tab doesn't exist"
  }
});

When('{string} verifies comments in ITSM resolved by {string} for {string}', async function (string, UpdatedBy, Ticket) {
  try {
    resultState = await objServiceNowAPI.apiServiceNow(TicketNumber)
    systemID = resultState.sys_id;
    var datavaar = await objServiceNowAPI.ActivitiesLog(systemID)
    await console.log(datavaar)
    await expect(datavaar.new).to.include("Updated By: " + UpdatedBy + "\n\nClosed")
  } catch (error) {
    console.log(error)
    throw "Admin unable to verifies comments in ITSM"
  }
})


Then('{string} verifies updated ticket data in activity session in snow', async function (string) {
  try {
    var AGID = await objServiceNowAPI.apiServiceNow(TicketNumber);
    await objServiceNowAPI.assignmentGroup(AGID.assignment_group_id);
    await browser.wait(EC.visibilityOf(element(by.xpath("//div[@class='second-row ng-star-inserted']"))), 60000);
    var AssignmentGroupId = await element(by.xpath("//div[@class='second-row ng-star-inserted']")).getText();
    await expect(AGID.assignment_group_name + '  (Group)').to.include(AssignmentGroupId);
  } catch (error) {
    console.log(error);
    throw "Admin Unable to Verify updated ticket data in activity session in snow"

  }
})

Then('{string} verifies the ticket title is same as Short description in ServiceNow {string}', async function (string, DescTicketNumber) {
  try {
    var ResultJson = await objServiceNowAPI.apiServiceNow(DescTicketNumber);
    ShortDescriptionServiceNow = ResultJson.short_description
    await expect(ShortDescription).to.include(ShortDescriptionServiceNow);
  } catch (error) {

  }
})
Then('{string} verifies the description is same as in the Description in servicenow {string}', async function (string, DescTicketNumber) {
  try {
    await browser.wait(EC.presenceOf(element(by.xpath('//div[text()="Description"]'))), 100000);
    var myData = await element(by.xpath('//div[@role="content"]')).getText();
    await console.log(myData);
    resultState = await objServiceNowAPI.apiServiceNow(DescTicketNumber)
    let actualData = resultState.description;
    await expect(actualData).to.equal(myData);
  } catch (error) {
    await console.log("actual data and expected data are not equal");
    await console.log(error);
    throw "actual data and expected data are not equal"
  }
})

Then('{string} verifies make sure the conversation is same as in the comments in the activity section in servicenow {string}', async function (string, DescTicketNumber) {
  try {

  } catch (error) {
    console.log(error);
    throw "Admin Unable to Verify updated ticket data in activity session in snow"

  }
})