import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { AlertConsoleTableData } from "../../PageObjects/AlertConsoleTableData";
import { ApiKibana } from "../../KibanaApi/KibanaApi";
import { ServiceNowAPI } from "../../ServiceNowAPI/servicenowAPI";

var APIKibana = new ApiKibana;

let objAlertsTableData = new AlertConsoleTableData();
var EC = browser.ExpectedConditions;
let objAlerts = new AlertsPage();
var objServiceNowAPI = new ServiceNowAPI();

import chai from "chai";

import { configure, getLogger } from "log4js";
const logger = getLogger();
configure({
    appenders: { Error: { type: "file", filename: "logs/logs.log" } },
    categories: { default: { appenders: ["Error"], level: "all" } }
});
var EC = browser.ExpectedConditions;
var expect = chai.expect;
var testSource;
var TicketNumber;



Then('{string} gets the ticket number generated', async function (string) {
    try {
        await objAlerts.txtTicket.getText().then(async function (TxtTicketNumber) {
            await console.log(TxtTicketNumber);
            TicketNumber = TxtTicketNumber;
        });
        logger.info("selects cluster type dropdown")
    } catch (error) {
        logger.error("error message")
        
        throw "User unable to get the ticket number"
    }
});


Then('Admin verifies userID is stored in alert store {string}', async function (string) {
    var AlertStore = await APIKibana.getAlertStore('1519', TicketNumber);
    await console.log("LineNO39", AlertStore);
    await console.log(AlertStore.assignedToUserId);
    var AlertStoreJson = await objServiceNowAPI.assignedTo(AlertStore.assignedToUserId, "Store");
    await console.log("LineNO42", AlertStoreJson);
    await expect(AlertStoreJson.assigned_to).to.include(string);
});

Then('Admin verifies groupID is stored in alert store {string}', async function (GroupID) {
    var AlertStore = await APIKibana.getAlertStore('1519', TicketNumber);
    await console.log(AlertStore);
    await console.log(AlertStore.assignedGroupId);
    var AlertStoreJson = await objServiceNowAPI.assignmentGroup(AlertStore.assignedGroupId, "Store");
    await console.log(AlertStoreJson);
    await expect(AlertStoreJson.assignment_group_name).to.include(GroupID);

});

Then('Admin verifies user name is stored in alert store {string}', async function (string) {
    var AlertStore = await APIKibana.getAlertStore('1519', TicketNumber);
    await console.log(AlertStore);
    await console.log(AlertStore.assignedTo);
    await expect(AlertStore.assignedTo).to.include(string);

});

Then('Admin verifies group name is stored in alert store {string}', async function (string) {
    var AlertStore = await APIKibana.getAlertStore('1519', TicketNumber);
    await console.log(AlertStore);
    await console.log(AlertStore.assignedGroup);
    await expect(AlertStore.assignedGroup).to.include(string);

});



Then('Admin verifies userID is stored in ticket store {string}', async function (string) {
    var TicketStore = await APIKibana.getTicketStore('1519', TicketNumber);
    await console.log(TicketStore);
    await console.log(TicketStore.assignedToUserId);
    var TicketStoreJson = await objServiceNowAPI.assignedTo(TicketStore.assignedToUserId, "Store");
    await console.log(TicketStoreJson);
    await expect(TicketStoreJson.assigned_to).to.include(string);
});

Then('Admin verifies groupID is stored in ticket store {string}', async function (GroupID) {
    var TicketStore = await APIKibana.getTicketStore('1519', TicketNumber);
    await console.log(TicketStore);
    await console.log(TicketStore.assignedGroupId);
    var TicketStoreJson = await objServiceNowAPI.assignmentGroup(TicketStore.assignedGroupId, "Store");
    await console.log(TicketStoreJson);
    await expect(TicketStoreJson.assignment_group_name).to.include(GroupID);
});

Then('Admin verifies user name is stored in ticket store {string}', async function (string) {
    var TicketStore = await APIKibana.getTicketStore('1519', TicketNumber);
    await console.log(TicketStore);
    await console.log(TicketStore.assignedTo);
    await expect(TicketStore.assignedTo).to.include(string);

});

Then('Admin verifies group name is stored in ticket store {string}', async function (string) {
    var TicketStore = await APIKibana.getTicketStore('1519', TicketNumber);
    await console.log(TicketStore);
    await console.log(TicketStore.assignedGroup);
    await expect(TicketStore.assignedGroup).to.include(string);

});



Then('Admin verifies ticket status in alert store is {string}', async function (string) {

});

Then('Admin verifies ticket status in ticket store is {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


When('{string} verifies ticket is assigned to group NinetyOne NOC {string} {string}', async function (string, string2, string3) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


When('{string} verifies ticket is assigned to ITOPS Virtual Engineer {string} {string}', async function (string, string2, string3) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


Given('{string} changes the assign to and assign to group from ITSM {string},{string}', async function (string, AssignTo, AssignToGroup) {
    var resultState = await objServiceNowAPI.apiServiceNow('INC0823356')
    // await console.log(TicketNumber)
    var systemID = resultState.sys_id;
    await objServiceNowAPI.assignTo(systemID, AssignTo, AssignToGroup)
});


Given('{string} verifies new ticket is assigned to group {string}', async function (string, AssignmentGroupId) {
    try {

        var AGID = await objServiceNowAPI.apiServiceNow(TicketNumber);
        await objServiceNowAPI.assignmentGroup(AGID.assignment_group_id);
        await expect(AGID.assignment_group_name).to.include(AssignmentGroupId);
    } catch (error) {
        await console.log("Action Name : verifies new ticket is assigned to group")
        await console.log(error)
        throw "Admin unable to verifies new ticket is assigned to group"
    }
});


Given('{string} verifies new ticket is assigned to {string}', async function (string, AssignedToId) {
    try {

        var Assigned_to_id = await objServiceNowAPI.apiServiceNow(TicketNumber);

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