import { When, Then, Given } from "cucumber"
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

///////////////////////// Scenario Outline: Verifying 'Assigned  To - Me' and 'Assigned To None' QuickFilter in Ticket Listing Page /////////////////////////////////////////////////////////////////////////////////////

         When('{string} clicks on Ticket Listing page', async function (userName) {
         try {
            await browser.wait(EC.visibilityOf(objTickets.btnTickets),10000);
            await objTickets.clickOnTicketPage()
            await browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
            } catch (error) {
            console.log("Feature name : Verifying QuickFilter in Ticket Listing Page " + userName + " and Action name : Clicks on Ticket Listing page ")
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
             console.log("Feature name : Verifying QuickFilter in Ticket Listing Page " + userName + " and Action name : Clicks on QuickFilter ")
             console.log(error)
             throw "User is not able to click on QuickFilter"
             }
         });
         When('{string} clicks on Assign to me QuickFilter', async function (userName) {
         try {
            //user selects Assigned To field in the filter and selects 'Me' option
            await objTickets.clickOnFilterAssignedTo();
            await objTickets.txtMeFilterByAssignedTo.click();
            await objTickets.btncloseQuickFilter.click();
             } catch (error) {
             console.log("Feature name : Verifying QuickFilter in Ticket Listing Page " + userName + " and Action name : Clicks on clicks on Assign to me QuickFilter ")
             console.log(error)
             throw "User is not able to click on Assign to me QuickFilter"
             }
         });
         Then('{string} verifies the Ticket  data and clicks on RemoveAll chip', async function (userName) {
            try {
                //user verifies resulting data in the page and removes all filter applied
                await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
                await  browser.wait(EC.visibilityOf(objTickets.txtMe), 10000);
                await  objTickets.ClickOnLatestUpdatedDateandTime();
                await objTickets.selectRemoveAllConditions();
                } catch (error) {
                console.log("Feature name : Verifying QuickFilter in Ticket Listing Page " + userName + " and Action name :Verifies data and Remove all chip ")
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
                console.log("Feature name : Verifying QuickFilter in Ticket Listing Page " + userName + " and Action name : Clicks on QuickFilter ")
                console.log(error)
                throw "User is not able to click on QuickFilter"
                }
            }); 
         Then('{string} clicks on Assign to none QuickFilter', async function (userName) {
            try {
                //user selects Assigned To field in the filter and selects 'None' option
                await objTickets.clickOnFilterAssignedTo();
                await objTickets.txtNoneFilterByAssignedTo.click();
                await objTickets.btncloseQuickFilter.click();
                } catch (error) {
                console.log("Feature name : Verifying QuickFilter in Ticket Listing Page " + userName + " and Action name : Clicks on Assign to none QuickFilter ")
                console.log(error)
                throw "User is not able to click on Assign to none QuickFilter"
                }
              });
         Then('{string} verifies page data', async function (userName) {
            try {
                //user verifies data and removes all filter applied and again verifies data in the page
                await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
                await  browser.wait(EC.visibilityOf(objTickets.txtNone), 10000);
                await  objTickets.ClickOnLatestUpdatedDateandTime()
                await  objTickets.selectRemoveAllConditions()
                await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
                } catch (error) {
                console.log("Feature name : Verifying QuickFilter in Ticket Listing Page " + userName + " and Action name : verifies page data ")
                console.log(error)
                throw "User is not able to verify page data"
                }
              });
             
//////////////////////////////////// Scenario Outline: Verifying QuickFilter fields in Ticket Listing Page ///////////////////////////////////////////////////////////////////////////////////////////

         Given('{string} clicks on QuickFilter icon', async function (string) {
            try {
                //user clicks on quickfilter icon
                await browser.wait(EC.visibilityOf(objTickets.btnQuickFilter), 10000);
                await objTickets.clickOnQuickFilter();
                await browser.wait(EC.visibilityOf(objTickets.txtQuickFilter), 20000);
                } catch (error) {
                console.log("Feature name : Verifying QuickFilter in Ticket Listing Page " + userName + " and Action name : Clicks on QuickFilter ")
                console.log(error)
                throw "User is not able to click on QuickFilter"
                }
              });
         Given('{string} clicks on Assigned Group in QuickFilter', async function (string) {
            try {//user selects Assigned Group dropdown and selects 'ITOPS testing' from the dropdown list and closes the dropdown
                await browser.wait(objTickets.drpFilterByAssignedGroup.click(),3000);
                await browser.wait(objTickets.chkgrp1.click(),3000);
                await browser.wait(objTickets.drpFilterByAssignedGroup.click(),3000);
                
                //user closes the quickfilter
                 await browser.wait( objTickets.btncloseQuickFilter.click(),3000);
                 await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
                 await  objTickets.ClickOnLatestUpdatedDateandTime()
                   
                } catch (error) {
                    console.log("Feature name : Verifying QuickFilter in Ticket Listing Page " + userName + " and Action name : clicks on Assigned Group in QuickFilter")
                    console.log(error)
                    throw "User is not able to click on Assigned Group in QuickFilter"
                } 
              });

         Given('{string} clicks on Filter by Priority field in QuickFilter', async function (string) {
            try {

                //user clicks on quickfilter icon
                await browser.wait(EC.visibilityOf(objTickets.btnQuickFilter), 10000);
                await objTickets.clickOnQuickFilter();
                await browser.wait(EC.visibilityOf(objTickets.txtQuickFilter), 20000);

                //user selects Filter by Priority dropdown and selects 'Low' from the dropdown list and closes the dropdown
                await browser.wait(objTickets.drpFilterbyPriority.click(),3000);
                await browser.wait(objTickets.chkLow.click(),3000);
               
            }catch (error) {
                console.log("Feature name : Verifying QuickFilter in Ticket Listing Page " + userName + " and Action name : clicks on  Filter by Priority field in QuickFilter")
                console.log(error)
                throw "User is not able to click on  Filter by Priority field in QuickFilter"
            } 
              });
              
         Given('{string} clicks on Filter by Status Type field in QuickFilter', async function (userName) {
            try {

                //user selects Filter by Status type dropdown and selects 'Assigned' from the dropdown list
                await browser.wait(objTickets.drpFilterbyStatustype.click(),3000);
                await browser.wait(objTickets.chkAssigned_Status.click(),3000);
                } catch (error) {
                console.log("Feature name : Verifying QuickFilter in Ticket Listing Page " + userName + " and Action name : clicks on Filter by Status Type field in QuickFilter ")
                console.log(error)
                throw "User is not able to click on Filter by Status Type field in QuickFilter"
                }
          });
          Given('{string} Removes Assigned Group in QuickFilter', async function (userName) {
            try {
                
                 //user removes the chip - Assigned Group
                 await browser.wait(objTickets.drpFilterByAssignedGroup.click(),3000);
                 await browser.wait(objTickets.chkgrp1.click(),3000);
                 await browser.wait(objTickets.drpFilterByAssignedGroup.click(),3000);
              
                  //user closes the quickfilter
               await browser.wait( objTickets.btncloseQuickFilter.click(),3000);
               await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
               await  objTickets.ClickOnLatestUpdatedDateandTime()
               await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
               
               //  user clicks on quickfilter icon
               await browser.wait(EC.visibilityOf(objTickets.btnQuickFilter), 10000);
               await objTickets.clickOnQuickFilter();
               await browser.wait(EC.visibilityOf(objTickets.txtQuickFilter), 20000);
            } catch (error) {
                console.log("Feature name : Verifying QuickFilter in Ticket Listing Page " + userName + " and Action name : Removes Assigned Group in QuickFilter")
                console.log(error)
                throw "User is not able to Remove Assigned Group in QuickFilter"  
                }
          });
          
         Given('{string} reapply Filter', async function (string) {
           try {
               
               //user selects High priority in Filter by Priority field
               await browser.wait(objTickets.chkContainer_dwnarrow_priority.click(),3000);
               await browser.wait(objTickets.chkHigh.click(),3000);
           
               //user selects OnHold and Resolved type in Filter by Status type field
               await browser.wait(objTickets.chkContainer_dwnarrow_status.click(),3000);
               await browser.wait(objTickets.chkOnHold_Status.click(),3000);
               await browser.wait(objTickets.chkResolved_Status.click(),3000);
         
               //user closes the quickfilter
               await browser.wait( objTickets.btncloseQuickFilter.click(),3000);
               await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
               await  objTickets.ClickOnLatestUpdatedDateandTime()
               await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);

            } catch (error) {
                console.log("Feature name : Verifying QuickFilter in Ticket Listing Page " + userName + " and Action name : reapply Filter")
                console.log(error)
                throw "User is not able to reapply Filter"  
            }
            });
          Then('{string} removes chip And verifies data', async function (string) {
            try {
           
               // user clicks on quickfilter icon
               await browser.wait(EC.visibilityOf(objTickets.btnQuickFilter), 10000);
               await objTickets.clickOnQuickFilter();
               await browser.wait(EC.visibilityOf(objTickets.txtQuickFilter), 20000);

                //user removes the chip- filter by status type :Assigned
                await browser.wait(objTickets.drpFilterbyStatustypeclose.click(),3000);
                await browser.wait(objTickets.chkAssigned_Status.click(),3000);
                await browser.wait(objTickets.drpFilterbyStatustypeclose.click(),3000);

                //user removes the chip- Filter by priority :2-High
                await browser.wait(objTickets.drpFilterbyPriorityclose.click(),3000);
                await browser.wait( objTickets.chkHigh.click(),3000);
                await browser.wait(objTickets.drpFilterbyPriorityclose.click(), 10000);

                //user closes the quickfilter
               await browser.wait( objTickets.btncloseQuickFilter.click(),3000);
               await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
               await  objTickets.ClickOnLatestUpdatedDateandTime()
               await  browser.wait(EC.visibilityOf(objTickets.tblTickets), 10000);
            } catch (error) {
                console.log("Feature name : Verifying QuickFilter in Ticket Listing Page " + userName + " and Action name : removes chip And verifies data")
                console.log(error)
                throw "User is not able to remove chip And verify data"  
            }
          });
































