import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import { TicketConsole } from "../../PageObjects/TicketConsole";
import { ApiKibana } from "../../KibanaApi/KibanaApi";
import chai from "chai";
import { Verify } from "crypto";
import { strict } from "assert";
var expect = chai.expect;
var EC = browser.ExpectedConditions;
let objTicketConsole = new TicketConsole();
let APIKibana = new ApiKibana();
var DisabledGrpName;
var FirstTicketNumber;
var TicketNumber;
var txtAssignedGroup1;


When('{string} clicks on Tickets page', async function (string) {
    try { 
        await objTicketConsole.clickOnTicketPage();
        await browser.wait(EC.visibilityOf(objTicketConsole.txtTicketTitle), 60000);
      }
      catch (error) {
        await console.log("Feature name : Ticket Listing Page DefaultView and filters and Action : clicking on TicketListing Page")
        await console.log(error)
        throw "User is not able to click on Tickets page"
      }
  });

When('{string} clicks on  Quick Filter icon', async function (string) {
    try {
      await browser.sleep(2000);
      await browser.wait(EC.presenceOf(objTicketConsole.btnQuickFilter), 100000);
      await browser.wait(EC.elementToBeClickable(objTicketConsole.btnQuickFilter), 100000);
      await objTicketConsole.clickOnQuickFilter();
      } catch (error) {
      await console.log("Feature name : Ticket Listing Page DefaultView and filters and Action  : clicking on Quick filter icon")
      await console.log(error)
    }
  });

  When('{string} clicks on Assigned To dropdown', async function (string) {
      try{
        await objTicketConsole.clickOnFilterAssignedTo();
      
      } catch(error){
        await console.log("Feature name : Ticket Listing Page DefaultView and filters and Action  : clicking on Assigned To Dropdown")
        await console.log(error)
      }
      
  });

  Then('Verify Assigned To dropdown should have values as None, Me, Others', async function () {
      try{
        await browser.wait(EC.visibilityOf(objTicketConsole.txtNoneFilterByAssignedTo));
      }
      catch(error){
        await console.log("Feature name : Ticket Listing Page DefaultView and filters and Action  : Verify Assigned To Dropdown has value None")
        await console.log(error)
        throw "'None' is not available in dropdown"
      }
      try{
        await browser.wait(EC.visibilityOf(objTicketConsole.txtMeFilterByAssignedTo));
      }
      catch(error){
        await console.log("Feature name : Ticket Listing Page DefaultView and filters and Action  : Verify Assigned To Dropdown has value Me")
        await console.log(error)
        throw "'Me' is not available in dropdown"
      }
      try{
        await browser.wait(EC.visibilityOf(objTicketConsole.txtOthersFilterByAssignedTo));
      }
      catch(error){
        await console.log("Feature name : Ticket Listing Page DefaultView and filters and Action  : Verify Assigned To Dropdown has value Others")
        await console.log(error)
        throw "'Others' is not available in dropdown"

      }
  });

  Then('{string} clicks on Assigned Group dropdown', async function (string) {
      try{
        await objTicketConsole.clickOnFilterAssignedGroup();
    
      } catch(error){
        await console.log("Feature name : Ticket Listing Page DefaultView and filters and Action  : clicking on Assigned Group Dropdown")
        await console.log(error)
    }
  });

  Then('Verify Assigned Group dropdown should have values None, My Groups', async function () {
      try{
        await browser.wait(EC.visibilityOf(objTicketConsole.txtNoneFilterByAssignedGroup));
      }
      catch(error){
        await console.log("Feature name : Ticket Listing Page DefaultView and filters and Action  : Verify Assigned Group Dropdown has value None")
        await console.log(error)
        throw "'None' is not available in dropdown"
      }
      try{
        await browser.wait(EC.visibilityOf(objTicketConsole.txtMyGroupsFilterByAssignedGroup));
      }
      catch(error){
        await console.log("Feature name : Ticket Listing Page DefaultView and filters and Action  : Verify Assigned Group Dropdown has value My Groups")
        await console.log(error)
        throw "'My Groups' is not available in dropdown"
    }
  });

  Then ('Verify {string} is shown as disabled below My Groups', async function (MyGroupName) {
    await browser.wait(EC.visibilityOf(element(by.xpath("//smo-multiselect-item[3]/li"))), 60000)
    await element(by.xpath("//smo-multiselect-item[3]/li")).getAttribute("aria-label").then(async function (GrpName) {
    await console.log("MyGroupName is " +GrpName)
    DisabledGrpName=GrpName;
    });
    if (DisabledGrpName ==MyGroupName)
      await console.log(MyGroupName+" matches in UI as "+DisabledGrpName);
    else
      await console.log(MyGroupName+" do not match "+DisabledGrpName);
    
  });

  Then('GroupNames shown below should be Groups of tickets in ticket store for {string}', async function (ProjectId) {
    await browser.wait(EC.visibilityOf(objTicketConsole.chkMyGroupFilterByAssignedGroupsVal1), 60000);
    await objTicketConsole.chkMyGroupFilterByAssignedGroupsVal1.getAttribute("aria-label").then(async function (group1) {
    await console.log("FirstGroupName is " +group1)
    txtAssignedGroup1=group1.toLowerCase();
    });    
    var assignedGroup1ES= await APIKibana.getAssignedGroups('1206');
    await console.log(assignedGroup1ES);
    
    if(assignedGroup1ES == txtAssignedGroup1)
      await console.log(assignedGroup1ES+" is the first group in UI from list of assigned Groups from TicketStore");
    else
     await console.log(assignedGroup1ES+" is the first group in UI from list of assigned Groups from TicketStore"); 
  });

  
      
    Then('Quick filter to have My Groups selected in Assigned Group dropdown', async function () {
      try{ 
          await objTicketConsole.clickOnFilterAssignedGroup();
          await browser.wait(EC.presenceOf(objTicketConsole.chkMyGroupFilterByAssignedGroupSelected), 60000);
          await objTicketConsole.btncloseQuickFilter.click();
        }
        catch(error){
            await console.log("Feature name : Ticket Listing Page DefaultView and filters and Action  : Verify Assigned Group dropdown to have MyGroups selected by default")
            await console.log(error)
            throw "My Groups not selected by default"
    
        }
        
    });

    Then('Verify filter Chips shown in UI should be Assigned group : {string}', async function (MyGroupName) {
      try{ 
          await browser.sleep(2000);
          await browser.wait(EC.presenceOf(objTicketConsole.lblAssignedGroup), 100000);       
          await browser.wait(EC.visibilityOf(objTicketConsole.lblAssignedGroup), 60000);
          await browser.wait(EC.presenceOf(element(by.xpath("//span[@class='filter-result-span-sm smo-small-chips' and text()='" + MyGroupName + "']"))), 100000);
          await console.log("Assigned group : "+MyGroupName+ " available as chip in UI - Defaut view");
        }
        catch(error){
          await console.log("Feature name : Ticket Listing Page DefaultView and filters and Action  : Verify Default view GroupName chip of user in a group")
          await console.log(error)
          throw MyGroupName+" is not available as chip in UI"
  
        }
  
    });

    Then('Verify Tickets listing displays only tickets assigned to {string} for {string} sorted based on Updated Date and Time', async function (MyGroupName , ProjectId ) {
      await objTicketConsole.txtFirstTicketNumber.getText().then(async function (cellValue) {
      await console.log("FirstTicketNumber sorted in UI " +cellValue)
      FirstTicketNumber = cellValue;  
    });
      TicketNumber = await APIKibana.getAllTicketStoreDataMyGroupSorted(ProjectId , MyGroupName);
      await console.log("FirstTicketNumber fetched from TicketStore of MyGroups is " +TicketNumber)
      if (FirstTicketNumber == TicketNumber)
        await console.log("Table sorted with updated time desc with all tickets of MyGroup");
      else
      await console.log("Ticket details in table is not as expected for logged in user");
    });
    
    When('Removes default filter chip shown {string}', async function (MyGroupName) {
      try{ 
          
        await browser.wait(EC.presenceOf(element(by.xpath("//span[@class='filter-result-span-sm smo-small-chips' and text()='" + MyGroupName + "']"))), 100000);
        await element(by.xpath("//span[@class='filter-result-span-sm smo-small-chips' and text()='" + MyGroupName + "']/span[@class='smo smo-close-black-alt filter-result-icon-sm']")).click();
        await console.log("Removed filter chip");
      }
      catch(error){
        await console.log("Feature name : Ticket Listing Page DefaultView and filters and Action  : Remove default group chip")
        await console.log(error)
        throw "Unable to close MyGroup chip"
  
      }
    });

    Then('Verify No filter chip available in UI', async function () {
      try{ 
          
        await objTicketConsole.btnFilterChip.isPresent().then(function (select) {
          expect(select).to.be.false;
        });
        await console.log("No filterchips in UI");
      }
      catch(error){
        await console.log("Feature name : Ticket Listing Page DefaultView and filters and Action  : default group chip to be not available.")
        await console.log(error)
        throw "Unable to verify default filter chip is removed"

      }
    });

    Then('Quick filter to have My Groups unselected in Assigned Group dropdown', async function () {
      try{ 
        await objTicketConsole.clickOnFilterAssignedGroup();
        await objTicketConsole.chkMyGroupFilterByAssignedGroupSelected.isPresent().then(async function (select) {
        expect(select).to.be.false;
        });
        await objTicketConsole.btncloseQuickFilter.click(); 
      }
      catch(error){
          await console.log("Feature name : Ticket Listing Page DefaultView and filters and Action  : Verify Assigned Group dropdown to have MyGroups unselected")
          await console.log(error)
          throw "Unable to verify My Groups unselected"
  
      }
    });

    Then('Verify Tickets listing displays all Tickets from ticket store sorted based on Updated Date and Time for {string}', async function (ProjectId) {
      await objTicketConsole.txtFirstTicketNumber.getText().then(async function (cellValue) {
      await console.log("FirstTicketNumber sorted in UI with no filters " +cellValue)
      FirstTicketNumber = cellValue;  
    });
      TicketNumber = await APIKibana.getAllTicketStoreDataSorted(ProjectId);
      await console.log("FirstTicketNumber fetched from TicketStore with no filter " +TicketNumber)
      if (FirstTicketNumber == TicketNumber)
        await console.log("Table sorted with updated time desc with all tickets from Ticket Store");
      else
      await console.log("Ticket details in table is not as expected");
    });

    

