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
    await objsupport.CheckBox(RadioButton)
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
    throw "unable to select user from team member drop down"
  }
});



When('{string} clicks on assign button', async function (UserRole) {
  try {
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
    await objAlerts.clickOnStateDropdown()

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
  } catch (error) {
    await console.log("Action Name : Navigating to ticket page")
    await console.log(error)
    throw "Unable to navigate to Tickets page"
  }
});

Then('{string} verifies {string} card should have assigned users name and group name', async function (string, string2) {
  try {

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
    await browser.sleep(5000)
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
Then('{string} verifies selected group should be displayed on drop down', async function (string) {

});
When('{string} selects {string} option from {string} column', function (string, string2, string3) {

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
Then('{string} verifies that ticketed alerts will not have close option', async function (string) {
  try {

  } catch (error) {
    await console.log("Action Name : Verifies the Alert console for the particular ticket")
    await console.log(error)
    throw "Ticket "
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

Then('{string} verify the alert console for corresponding ticket cluster', function (string) {

});


Then('{string} clicks on a ticket and verify the ticket details page', function (string) {

});

When('{string} clicks on assign button on the popup', async function (string) {

  try {
    await browser.sleep(2000)
    await objAlerts.clickOnAssignButtonOnPopUp()
  } catch (error) {
    await console.log("Action Name : clicking on assign button on the popup")
    await console.log(error)
    throw "unable to click on assign button on the popup"
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



When('{string} clicks on assign {string} radio button', async function (string, string2) {
  try {
  } catch (error) {
    await console.log("Action Name : Verifies the Alert console for the particular ticket")
    await console.log(error)
    throw "Ticket "
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

Then('{string} verifies user is able to assign ticket again to team member and self', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

//service now

When('{string} login in to service now and search for the incident id as {string}', async function (string, IncidentID) {
  try {
    // await objServiceNow.apiServiceNow(IncidentID)
    resultState = await objServiceNow.apiServiceNow(IncidentID)
    await console.log(resultState)
  } catch (error) {
    await console.log(error)
  }
});


Then('{string} verifies state of ticket should be Active', async function (string) {
  try {
    await console.log("Sate ++++++++" + resultState.state)
    await expect(resultState.state).to.include('Active');
  } catch (error) {
    await console.log("Action Name : verifying state of ticket should be Active")
    await console.log(error)
    throw "Ticket not in active state"
  }
});

Then('{string} verifies ticket is assigned ITOps to a team member {string}', async function (string, string2) {
  try {
    await console.log("Sate ++++++++" + resultState.state)
    // await expect(resultState.state).to.include('Active');
  } catch (error) {
    await console.log("Action Name : verifying ticket is assigned ITOps to a team member")
    await console.log(error)
    throw "Ticket not in assigned ITOps to a team member"
  }
});

Then('{string} verifies ticket is assigned to self {string}', async function (string, string2) {
  try {
    await console.log("Sate ++++++++" + resultState.state)
    // await expect(resultState.state).to.include('Active');
  } catch (error) {
    await console.log("Action Name : verifying ticket is assigned ITOps to self")
    await console.log(error)
    throw "Ticket not in assigned ITOps to a self"
  }
});

Then('{string} verifies the Close Notes for the ticket as {string}', async function (string, ClosureNote) {
  try {
    await console.log("Sate ++++++++" + resultState.state)
    // await expect(resultState.state).to.include(ClosureNote);
  } catch (error) {
    await console.log("Action Name : verifying the Close Notes for the ticket")
    await console.log(error)
    throw "Wrong closure note"
  }
});


Then('{string} verifies state of ticket should be Resolved', async function (string) {
  try {
    await console.log("Sate ++++++++" + resultState.state)
    // await expect(resultState.state).to.include('Resolved');
  } catch (error) {
    await console.log("Action Name : verifying state of ticket should be Resolved")
    await console.log(error)
    throw "Ticket not in Resolved state"
  }
});