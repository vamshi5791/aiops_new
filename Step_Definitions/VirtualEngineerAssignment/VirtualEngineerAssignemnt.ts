import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { InfrastructurePage } from "../../PageObjects/InfrastructurePage";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ServiceNowAPI } from "../../ServiceNowAPI/servicenowAPI";
var objServiceNowAPI = new ServiceNowAPI();

var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objInfrastructurePage = new InfrastructurePage();
let objAlerts = new AlertsPage();


Given('{string} renders the Service now API', async function (string) {

});
Given('{string} verifies ticket is assigned to group NinetyOne NOC {string} {string}', async function (string, TicketNumber, AssignmentGroupId) {
    var AGID = await objServiceNowAPI.apiServiceNow(TicketNumber);
    
    await objServiceNowAPI.assignmentGroup(AGID.assignment_group_id);
    await console.log(AGID);
    await console.log(AGID.assignment_group_name);

    await expect(AGID.assignment_group_name).to.include(AssignmentGroupId);

});


Given('{string} verifies ticket is assigned to ITOPS Virtual Engineer {string} {string}', async function (string, TicketNumber, AssignedToId) {
    var Assigned_to_id = await objServiceNowAPI.apiServiceNow(TicketNumber);

    await objServiceNowAPI.assignedTo(Assigned_to_id.assigned_to_id)
    await console.log(Assigned_to_id);
    await expect(Assigned_to_id.assigned_to).to.include(AssignedToId);


});




Given('{string} verifies ticket Staus must be Assigned', async function (string) {

});