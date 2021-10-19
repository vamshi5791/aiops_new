import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { LogIn } from "../../PageObjects/LogIn";
import { PushingAlerts } from "../../PageObjects/RabbitMQ";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
import { ApiRabbitMQ } from "../../PageObjects/ApiRabbitMQ";
import { Tickets } from "../../PageObjects/Tickets";
import { TicketConsole } from "../../PageObjects/TicketConsole";
var objApiRabbitMQ = new ApiRabbitMQ()

var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;
let objLogIn = new LogIn();
let objFilter = new PushingAlerts();
let objAlerts = new AlertsPage();
let objTickets = new TicketConsole();
let objProjectListing = new ProjectListingPage();
var JsonAlert;
var StringifiedJsonAlert;
var Global_ProjectName;
var userName;
var TicketNumber;
var TxtShortDescription;
var ShortDescription;
var TicketNumber1;
var ShortDescriptionServiceNow;

         When('{string} clicks on Tickets tab in {string}', async function (userName, ProjectName) {
            try {
               //user selects project and navigate to ticket listing page
                Global_ProjectName = ProjectName;
                await objProjectListing.Project_search(Global_ProjectName);
                await browser.sleep(3000);
                await browser.wait(EC.visibilityOf(element(by.xpath('//h3[text()=" ' + Global_ProjectName + ' "]'))), 100000);
                await objProjectListing.selectProject(Global_ProjectName);
                await browser.wait(EC.visibilityOf(objTickets.btnTickets),10000);
                await objTickets.clickOnTicketPage()
                await browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
                } catch (error) {
                console.log("Feature name : QuickFilter " + userName + " and Action name : Clicks on Tickets tab ")
                console.log(error)
                throw "User is not able to click on Tickets tab"
                }
         });


         When('{string} clicks on QuickFilter icon', async function (userName) {
            try {
               //user selects quickfilter icon
                await browser.wait(EC.visibilityOf(objTickets.btnQuickFilter), 10000);
                await objTickets.clickOnQuickFilter();
                await browser.wait(EC.visibilityOf(objTickets.txtQuickFilter), 20000);
                } catch (error) {
                console.log("Feature name : AssignedTo " + userName + " and Action name : Clicks on QuickFilter ")
                console.log(error)
                throw "User is not able to click on QuickFilter"
                }
         });


         When('{string} clicks on Filter by Status Type field in QuickFilter', async function (userName) {
            try {
                //user selects Filter by Status type dropdown and selects 'Assigned' from the dropdown list
                await browser.wait(objTickets.drpFilterbyStatustype.click(),3000);
                await browser.wait(objTickets.chkAssigned_Status.click(),3000);
                } catch (error) {
                console.log("Feature name : QuickFilter " + userName + " and Action name : clicks on Filter by Status Type field in QuickFilter ")
                console.log(error)
                throw "User is not able to click on Filter by Status Type field in QuickFilter"
                }
         });


         When('{string} clicks on Filter by Priority field in QuickFilter', async function (userName) {
            try {
               //user selects Filter by Priority dropdown and selects 'critical' from the dropdown list and closes the dropdown
               await browser.wait(objTickets.drpFilterbyPriority.click(),3000);
               await browser.wait(objTickets.chkCritical.click(),3000);
               await browser.wait(objTickets.drpFilterbyPriority.click(),3000);
              
               //user selects Assigned Group dropdown and selects 'ITOPS testing' from the dropdown list and closes the dropdown
               await browser.wait(objTickets.drpAssignedGrp.click(),3000);
               await browser.wait(objTickets.chkgrp1.click(),3000);
               await browser.wait(objTickets.drpAssignedGrp.click(),3000);
               
               //user closes the quickfilter
                await browser.wait( objTickets.btncloseQuickFilter.click(),3000);
                await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);

              /* To ensure reapllying filters on top of default ones, 
               user selects Filter by Priority dropdown and selects 'High' from the dropdown list and closes the dropdown*/

               await browser.wait(EC.visibilityOf(objTickets.btnQuickFilter), 10000);
               await objTickets.clickOnQuickFilter();
               await browser.wait(EC.visibilityOf(objTickets.txtQuickFilter), 20000);

               await browser.wait(objTickets.drpFilterbyPriority.click(),3000);
               await browser.wait(objTickets.chkHigh.click(),3000);
               await browser.wait(objTickets.drpFilterbyPriority.click(),3000);

               //user closes the quickfilter
               await browser.wait( objTickets.btncloseQuickFilter.click(),3000);

                } catch (error) {
                console.log("Feature name : QuickFilter " + userName + " and Action name : Clicks on Filter by Priority field in QuickFilter ")
                console.log(error)
                throw "User is not able to click on Filter by Priority field in QuickFilter"
                }
         });

         Then('{string} verifies the Ticket data', async function (userName) {
            try {
               //user verifies data and removes all filter applied and again verifies data in the page
                await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
                await objTickets.selectRemoveAllConditions()
                await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
                } catch (error) {
                console.log("Feature name : QuickFilterTicketListing " + userName + " and Action name : verifies the Ticket data in the page ")
                console.log(error)
                throw "User is not able to verify the Ticket data in the page"
                }
         });