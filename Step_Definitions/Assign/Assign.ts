import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { support } from '../../support/support';
import { Tickets } from '../../PageObjects/Tickets';
import { ServiceNowAPI } from '../../ServiceNowAPI/servicenowAPI';
let objServiceNow = new ServiceNowAPI();
let objAlerts = new AlertsPage();
let objsupport = new support();
let objTicket = new Tickets()
var expect = chai.expect;
var EC = browser.ExpectedConditions;
var TestTeamMember;
var resultState;
let TicketNumber;
var systemID;
When('{string} clicks on ticket number {string} from state column of a ticket', async function (UserRole, TicketNumber) {
  try {
    await objAlerts.clickOnTicketNumber(TicketNumber)
  } catch (error) {
    await console.log("Action Name : clicking on ticket number")
    await console.log(error)
    throw "ticket number is not available"
  }
});

When('{string} clicks on assign option from state drop down as {string}', async function (UserRole, AssignOption) {
  try {
    await objAlerts.clickOnStatusDropdown(AssignOption)
  } catch (error) {
    await console.log("Action Name : clicking on assign option from state drop down")
    await console.log(error)
    throw "unable to click on assign option from state drop down"
  }
});

When('{string} clicks on {string} radio button', async function (UserRole, RadioButton) {
  try {
    await browser.wait(EC.elementToBeClickable(element(by.xpath("//label[text()='" + RadioButton + "']"))), 100000);
    await objsupport.clickOnCheckBoxUsingText(RadioButton)
  } catch (error) {
    await console.log("Action Name : clicking on individual radio button")
    await console.log(error)
    throw "Individual Radio button is not available"
  }
});


When('{string} selects user from the team member drop down as {string}, {string}', async function (UserRole, Group, TeamMember) {
  try {
    await objAlerts.selectGroup(Group)
    await objAlerts.selectTeamMember(TeamMember)
    TestTeamMember = TeamMember;
  } catch (error) {
    await console.log("Action Name : selecting user from the team member drop down")
    await console.log(error)
    var myElement = element(by.xpath("//span[@class='smo smo-close-black-alt']"));
    myElement.isPresent().then(async function (elm) {
      if (elm) {
        await browser.wait(EC.elementToBeClickable(element(by.xpath("//span[@class='smo smo-close-black-alt']"))), 10000);
        await browser.wait(EC.presenceOf(element(by.xpath("//span[@class='smo smo-close-black-alt']"))), 10000);
        await element(by.xpath("//span[@class='smo smo-close-black-alt']")).click();
      }
    });
    throw "unable to select user from team member drop down"
  }
});



When('{string} clicks on assign button', async function (UserRole) {
  try {
    // await browser.sleep(5000)
    await browser.wait(EC.visibilityOf(objAlerts.btnAssign), 50000);
    await browser.wait(EC.presenceOf(objAlerts.btnAssign), 50000);
    await objAlerts.clickOnAssignButton()
  } catch (error) {
    await console.log("Action Name : clicking on assign button")
    await console.log(error)
    throw "unable to click on assign button"
  }
});

Then('{string} Verifies the Alert console for the particular ticket', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='The ticket has been assigned to ']"))), 50000);
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='" + TestTeamMember + "']"))), 50000);
  } catch (error) {
    await console.log("Action Name : Verifying the Alert console for the particular ticket")
    await console.log(error)
    throw "Ticket has not assigned to team member"
  }
});
Then('{string} Verifies the Alert console for the particular ticket status as {string}', async function (UserRole, TicketStatus) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//label[text()='" + TicketStatus + "']"))), 100000);
  } catch (error) {
    await console.log("Action Name : Verifies the Alert console for the particular ticket status")
    await console.log(error)
    throw "Ticket status was not updated"
  }
});


//Verify Assigning tickets from alert console to group in ITOps

When('{string} selects user from the team member drop down as {string}', async function (UserRole, Group) {
  try {
    await objAlerts.selectGroup(Group)
    TestTeamMember = Group;
  } catch (error) {
    await console.log("Action Name : selecting user from the team member drop down")
    await console.log(error)
    throw "unable to select user from team member drop down"
  }
});

When('{string} clicks on ticket State dropdown', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnState), 50000);
    await browser.wait(EC.elementToBeClickable(objAlerts.btnState), 50000);
    await objAlerts.State()

  } catch (error) {
    await console.log("Action Name : clicking on ticket State/Action dropdown")
    await console.log(error)
    throw "unable to click on ticket State/Action dropdown"
  }
});
//Verify self Assign from Alert Console


Then('{string} verifies {string} should have further actions like {string}, {string}', async function (string, string2, Hold, Assign) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='" + Hold + "']"))), 50000);
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='" + Assign + "']"))), 50000);
  } catch (error) {
    await console.log("Action Name : Verifying alert state dropdown options")
    await console.log(error)
    throw "State?Action dropdown doesn't have Hold and Assign options"
  }
});


When('{string} navigates to Tickets page', async function (string) {
  try {
    await objTicket.clickOnTicketPage()
    await await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()=' Auto-refresh in every ']"))), 50000);
  } catch (error) {
    await console.log("Action Name : Navigating to ticket page")
    await console.log(error)
    throw "Unable to navigate to Tickets page"
  }
});

Then('{string} verifies {string} card should have assigned users name and group name', async function (string, string2) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='The ticket has been assigned to ']"))), 50000);
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='" + TestTeamMember + "']"))), 50000);
  } catch (error) {
    await console.log("Action Name : Verifying ticket card should have assigned users name and group name")
    await console.log(error)
    throw "Ticket card not displaying assigned username and group name "
  }
});

When('{string} clicks on refresh button in alert console', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnRefresh), 50000);
    await browser.wait(EC.elementToBeClickable(objAlerts.btnRefresh), 50000);
    await objAlerts.clickOnRefreshButton()
  } catch (error) {
    await console.log("Action Name : clicking on refresh button in alert console")
    await console.log(error)
    throw "Unable to click on refresh button"
  }
});

//Verify Closing tickets from Assigned status in ITOps

When('{string} clicks on {string} button', async function (string, Status) {
  try {
    await browser.sleep(2000)
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="' + Status + '"]'))), 50000);
    await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[text()="' + Status + '"]'))), 50000);
    await objAlerts.clickOnUpdateStatus(Status)
  } catch (error) {
    await console.log("Action Name : clicking on state/action dropdown option")
    await console.log(error)
    throw "unable to select state/action dropdown option"
  }
});


Then('{string} verifies {string} should have {string} option', async function (UserRole, Action, Status) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//div[text()='" + Status + "']"))), 50000);
  } catch (error) {
    await console.log("Action Name : verifies " + Action + " should have " + Status + " option")
    await console.log(error)
    throw "Doesn't have " + Status + ""
  }
});

Then('{string} verifies Ticket should be assigned to group {string}', async function (string, Group) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//div[text()='ASSIGNED TO']"))), 50000);
    await browser.wait(EC.visibilityOf(element(by.xpath("//div[text()='" + Group + " (Group)']"))), 50000);
  } catch (error) {
    await console.log("Action Name : Verifying Ticket should be assigned to group")
    await console.log(error)
    throw "Ticket was assigned to group "
  }
});
Then('{string} verifies Ticket should be assigned to TeamMember {string}', async function (Group, TeamMember) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//div[text()='ASSIGNED TO']"))), 50000);
    await browser.wait(EC.visibilityOf(element(by.xpath("//div[text()='" + TeamMember + " (User)']"))), 50000);
  } catch (error) {
    await console.log("Action Name : Verifying Ticket should be assigned to group")
    await console.log(error)
    throw "Ticket was assigned to TeamMember"
  }
});

When('{string} clicks on Closure Notes tab in ticket details page', async function (string) {
  try {
    await objAlerts.clickOnClosureNoteTab()
  } catch (error) {
    await console.log("Action Name : clicking on Closure Notes tab in ticket details page")
    await console.log(error)
    throw "unable to click on Closure Notes tab in ticket details page"
  }
});

When('{string} verifies closure note as {string}', async function (string, ClosureNote) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='" + ClosureNote + "']"))), 50000);
  } catch (error) {
    await console.log("Action Name : Verifies verifies closure note as " + ClosureNote + "")
    await console.log(error)
    throw "Closure note has not updated"
  }
});

When('{string} clicks on select all checkbox for the ticket number {string}, {string}', async function (string, TicketNumber01, TicketNumber02) {
  try {
    await objAlerts.clickOnAlertCheckBox()
  } catch (error) {
    await console.log("Action Name : clicking on select all checkbox for the ticket number")
    await console.log(error)
    throw "Unable to select all checkbox for the ticket number"
  }
});
Then('{string} clicks on 3 dots in top left', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnThreeDotsAlertPage), 50000);
    await objAlerts.clickOnThreeDotsAlertPage()
  } catch (error) {
    await console.log("Action Name : clicking on 3 dots in top left")
    await console.log(error)
    throw "unable to click on 3 dots in top left"
  }
});

Then('{string} Verifies ticket is assigned to team member', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='The ticket has been assigned to ']"))), 50000);
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='" + TestTeamMember + "']"))), 50000);
  } catch (error) {
    await console.log("Action Name : Verifying ticket is assigned to team member")
    await console.log(error)
    throw "ticket is not assigned to team member"
  }
});



Then('{string} Verifies that ticket is assigned to self', async function (string) {
  try {
    // Don't have test data to assign self
  } catch (error) {
    await console.log("Action Name : Verifies the Alert console for the particular ticket")
    await console.log(error)
    throw "Ticket "
  }
});



When('{string} verifies on ticket number when ticket status is hold', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//label[text()='on hold']"))), 50000);
  } catch (error) {
    await console.log("Action Name : verifying on ticket number when ticket status is hold")
    await console.log(error)
    throw "Ticket is not on hold state"
  }
});

Then('{string} assigned to me button is disabled', async function (string) {
  try {
    await element(by.className("smo-button smo-widget smo-state-default smo-button-default smo-corner-all smo-button-ms smo-button-text-only smo-state-disabled")).isEnabled().then(function (select) {
      expect(select).to.be.false;
    });
  } catch (error) {
    await console.log("Action Name : Verifying assigned to me button is disabled")
    await console.log(error)
    throw "assigned to me button is not disabled"
  }
});

When('{string} verifies text displayed like {string}', async function (string, Status) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='The ticket has been assigned to ']"))), 50000);
    await browser.wait(EC.visibilityOf(element(by.xpath("//span[text()='" + TestTeamMember + "']"))), 50000);
  } catch (error) {
    await console.log(error)
    throw "The ticket has been assigned to " + TestTeamMember + " is not displayed"
  }
});

//service now

When('{string} login in to service now and search for the incident id as {string}', async function (string, IncidentID) {
  try {
    resultState = await objServiceNow.apiServiceNow(IncidentID)
    await objServiceNow.assignmentGroup(resultState.assignment_group_id)
    await objServiceNow.assignedTo(resultState.assigned_to_id)
  } catch (error) {
    await console.log(error)
    throw "incident id not found in servicenow"
  }
});
When('{string} verifies the ticket status in service now {string}', async function (string, status) {
  try {
    resultState = await objServiceNow.apiServiceNow(TicketNumber)
    await expect(resultState.state).to.include(status);
  } catch (error) {
    await console.log(error)
    throw "ticket status not updated in servicenow "
  }
});
Then('{string} verifies the ticket closure note in service now {string}', async function (string, ClosureNote) {
  try {
    resultState = await objServiceNow.apiServiceNow(TicketNumber)
    await expect(resultState.close_notes).to.include(ClosureNote);
  } catch (error) {
    await console.log(error)
    throw "closure note doesn't match"
  }
});
Then('{string} gets the ticket number from alert console', async function (string) {
  try {
    await objAlerts.txtTicket.getText().then(async function (TxtTicketNumber) {
      TicketNumber = TxtTicketNumber;
    });
    await console.log(TicketNumber);
  }
  catch (error) {
    await console.log(error)
    throw "User unable to get the ticket number"
  }
});

Then('{string} verifies state of ticket should be {string}', async function (string, status) {
  try {
    await expect(resultState.state).to.include(status);
  } catch (error) {
    await console.log("Action Name : verifying state of ticket should be Active")
    await console.log(error)
    throw "Ticket not in active state"
  }
});

Then('{string} verifies ticket is assigned ITOps to a team member {string}', async function (string, TeamMember) {
  try {
    await expect(resultState.assigned_to).to.include(TeamMember);
  } catch (error) {
    await console.log("Action Name : verifying ticket is assigned ITOps to a team member")
    await console.log(error)
    throw "Ticket not in assigned ITOps to a team member"
  }
});

Then('{string} verifies ticket is assigned to self {string}', async function (string, string2) {
  try {
    // await expect(resultState.state).to.include('Active');
  } catch (error) {
    await console.log("Action Name : verifying ticket is assigned ITOps to self")
    await console.log(error)
    throw "Ticket not in assigned ITOps to a self"
  }
});
When('{string} in servicnow that ticket is closed and closure note is added {string}', async function (string, ClosureNote) {
  try {
    await expect(resultState.close_notes).to.include(ClosureNote);
  } catch (error) {
    await console.log("Action Name : verifying the Close Notes for the ticket")
    await console.log(error)
    throw "Wrong closure note"
  }
});
Then('{string} verifies the Close Notes for the ticket as {string}', async function (string, ClosureNote) {
  try {
    await expect(resultState.state).to.include(ClosureNote);
  } catch (error) {
    await console.log("Action Name : verifying the Close Notes for the ticket")
    await console.log(error)
    throw "Wrong closure note"
  }
});


Then('{string} verifies state of ticket should be Resolved', async function (string) {
  try {
    await expect(resultState.state).to.include('Resolved');
  } catch (error) {
    await console.log("Action Name : verifying state of ticket should be Resolved")
    await console.log(error)
    throw "Ticket not in Resolved state"
  }
});

When('{string} clicks on assign button on the popup', async function (string) {

  try {
    // await browser.sleep(5000)
    await browser.wait(EC.visibilityOf(objAlerts.btnAssignButtonOnPopUp), 50000);
    await browser.wait(EC.elementToBeClickable(objAlerts.btnAssignButtonOnPopUp), 50000);
    await objAlerts.clickOnAssignButtonOnPopUp()
  } catch (error) {
    await console.log(error)
    throw "unable to click on assign button on popup"
  }
});

Then('{string} verify the alert console for corresponding ticket cluster', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtAssigned), 50000);
  } catch (error) {
    await console.log(error)
  }
});

Then('{string} verifies the ticket is assigned {string}', async function (string, AssignedBy) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath("//div[text()='" + AssignedBy + "']"))), 50000);
  } catch (error) {
    await console.log(error)
    throw "The ticket has been assigned by " + AssignedBy + " is not displayed"
  }
});


Then('{string} verifies Assignment Group of the ticket should be as defined in template {string}', async function (string, AssignGroup) {
  try {
    resultState = await objServiceNow.apiServiceNow(TicketNumber)
    var data = await objServiceNow.assignmentGroup(resultState.assignment_group_id)
  } catch (error) {
    await console.log(error)
    throw "Assignment Group of the ticket is not same as defined in template"
  }
});

Then('{string} verifies Short description of the ticket should be as defined in template {string}', async function (string,
  ShortDescription) {
  try {
    resultState = await objServiceNow.apiServiceNow(TicketNumber)
    await expect(resultState.short_description).to.include(ShortDescription);
  } catch (error) {
    await console.log(error)
    throw "short description of the ticket is not same as defined in template"
  }
});

Then('{string} enters the ticket number in search box', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 10000);
    await objAlerts.Alert_Search(TicketNumber);
  } catch (error) {
    console.log(error)
    throw "Admin Unable to enter ticket number in search box"
  }
})

When('{string} ticket number in {string} by changing state as {string}, category as {string}, subcategory as {string}, close code as {string}, Enter close note as {string}', async function (string, string2, state, category, subcategory, closeCode, closeNote) {
  try {
    await console.log(TicketNumber, state, category, subcategory, closeCode, closeNote)
    resultState = await objServiceNow.apiServiceNow(TicketNumber)
    systemID = resultState.sys_id;
    await objServiceNow.updateTicketToResolved(systemID, state, category, subcategory, closeCode, closeNote)
  } catch (error) {
    console.log('Admin Unable to Change Status to Resolve in ServiceNow');
    console.log(error)
    throw "Admin Unable to Change Status to Resolve in ServiceNow"
  }
});


When('{string} verifies ticket status as {string} {string}', async function (string, Status, ByWhom) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//label[text()="' + Status + '"]'))), 50000);
    await browser.wait(EC.visibilityOf(element(by.xpath('//dev[text()="' + ByWhom + '"]'))), 50000);
  } catch (error) {
    await console.log("Action Name : verifying ticket status")
    await console.log(error)
    throw "ticket status not updated in alert console"
  }
});
Then('{string} verifies ticket Short description should include details of the down alert as {string}', async function (string, ShortDescription) {
  try {
    resultState = await objServiceNow.apiServiceNow(TicketNumber)
    await console.log(resultState)
    await expect(resultState.short_description).to.include(ShortDescription);
  } catch (error) {
    console.log(error)
    throw "ticket Short description not included in details of the down alert"
  }
});


Then('{string} verifies Description should include details of the down alert using {string}', async function (string, AlertName) {
  try {
    await expect(resultState.short_description).to.include(AlertName);
  } catch (error) {
    console.log(error)
    throw "ticket description not included in details of the down alert"
  }
});


Then('{string} verifies First occurrence in Description should be alert created time of {string} alert', async function (string, Occurrence) {
  try {
    await element(by.partialLinkText('First occurrence:"' + resultState.FirstOccurence + '"')).isPresent().then(function (select) {
      expect(select).to.be.true;
    });
  } catch (error) {
    console.log(error)
    throw "First occurrence in Description "
  }
});


Then('{string} verifies No of occurrence in Description should be the total no of alerts in cluster {string}', async function (string, NoOfOccurrence) {
  try {
    await expect(resultState.NoOfOccurence).to.include(NoOfOccurrence);
  } catch (error) {
    console.log(error)
    throw "wrong No of occurrence in Description"
  }
});

Then('{string} verifies the Activity section of the ticket using {string}', async function (string, AlertName) {
  try {
    resultState = await objServiceNow.ActivitiesLog(TicketNumber)
    await console.log(resultState)
    await expect(resultState.NoOfOccurence).to.include(AlertName);
  } catch (error) {
    console.log(error)
    throw "wrong No of occurrence in Description"
  }
});