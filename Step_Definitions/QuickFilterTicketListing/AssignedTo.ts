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

         When('{string} clicks on Ticket Listing page in {string}', async function (userName, ProjectName) {
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
            console.log("Feature name : AssignedTo " + userName + " and Action name : Clicks on Ticket Listing page ")
            console.log(error)
            throw "User is not able to click on Ticket Listing page"
            }
         });
         When('{string} clicks on QuickFilter', async function (userName) {
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
         When('{string} clicks on Assign to me QuickFilter', async function (userName) {
         try {
            //user selects Assigned To field in the filter and selects 'Me' option
            await objTickets.clickOnFilterAssignedTo();
            await objTickets.chkMeFilterByAssignedTo.click();
            await objTickets.btncloseQuickFilter.click();
             } catch (error) {
             console.log("Feature name : AssignedTo " + userName + " and Action name : Clicks on clicks on Assign to me QuickFilter ")
             console.log(error)
             throw "User is not able to click on Assign to me QuickFilter"
             }
         });
         Then('{string} verifies the Ticket  data and clicks on RemoveAll chip', async function (userName) {
            try {
                //user verifies resulting data in the page and removes all filter applied
                await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
                await  browser.wait(EC.visibilityOf(objTickets.txtMe), 10000);
                await  objTickets.ClickOnLatestUpdatedDateandTime()
                await objTickets.selectRemoveAllConditions()
                } catch (error) {
                console.log("Feature name : AssignedTo " + userName + " and Action name :Verifies data and Remove all chip ")
                console.log(error)
                throw "User is not able to verify data as the table is empty"
                }
            });
         Then('{string}  clicks on QuickFilter', async function (userName) {
            try {
                await browser.wait(EC.visibilityOf(objTickets.btnQuickFilter), 10000);
                await objTickets.clickOnQuickFilter();
                await browser.wait(EC.visibilityOf(objTickets.txtQuickFilter), 10000);
                } catch (error) {
                console.log("Feature name :  AssignedTo " + userName + " and Action name : Clicks on QuickFilter ")
                console.log(error)
                throw "User is not able to click on QuickFilter"
                }
            }); 
         Then('{string} clicks on Assign to none QuickFilter', async function (string) {
            try {
                //user selects Assigned To field in the filter and selects 'None' option
                await objTickets.clickOnFilterAssignedTo();
                await objTickets.chkNoneFilterByAssignedTo.click();
                await objTickets.btncloseQuickFilter.click();
                } catch (error) {
                console.log("Feature name : AssignedTo " + userName + " and Action name : Clicks on Assign to none QuickFilter ")
                console.log(error)
                throw "User is not able to click on Assign to none QuickFilter"
                }
              });
         Then('{string} verifies page data', async function (string) {
            try {
                //user verifies data and removes all filter applied and again verifies data in the page
                await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
                await  browser.wait(EC.visibilityOf(objTickets.txtNone), 10000);
                await  objTickets.ClickOnLatestUpdatedDateandTime()
                await  objTickets.selectRemoveAllConditions()
                await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
                } catch (error) {
                console.log("Feature name : AssignedTo " + userName + " and Action name : verifies page data ")
                console.log(error)
                throw "User is not able to verify page data"
                }
              });