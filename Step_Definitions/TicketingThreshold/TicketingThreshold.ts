import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";

import { TicketingThreshold } from "../../PageObjects/TicketingThreshholdPageObjects";


let objTicketingThreshold = new TicketingThreshold();

var EC = browser.ExpectedConditions;



When('{string} navigate to Ticketing Threshold', async function (userrole) {
    try {
        await browser.sleep(2000);
        await objTicketingThreshold.clickOnTicketingThreshold();
    } 
      catch (error) {
        throw console.error
    }
});

When('Admin enter clicks on Add New Threshold button', async function(){
    try {
        await browser.sleep(2000);
        await objTicketingThreshold.clickOnAddNewThresholdButton();
    } 
      catch (error) {
        throw console.error
    }
});

When('Admin selects Source {string}', async function(source){
    try {
        await objTicketingThreshold.selectSource(source);
    } 
      catch (error) {
        throw console.error
    }
});

When('Admin enters Cluster Size {string}', async function(clusterSize){
    try {
        await objTicketingThreshold.enterCluserSize(clusterSize);
    } 
      catch (error) {
        throw console.error
    }
});

When('Admin enters Time Interval {string}', async function(timeinterval){
    try {
        await objTicketingThreshold.enterTimeInterval(timeinterval);
    } 
      catch (error) {
        throw console.error
    }
});

When('Admin clicks on Add Threshold button', async function(){
    try {
        await objTicketingThreshold.clickOnAddThreshold();
        await browser.sleep(15000);
    } 
      catch (error) {
        throw console.error
    }
});

Then('Verify Add New Threshold button for ITOps Engineer', async function(){
    try {
          var lnkAddThreshold = objTicketingThreshold.lnkAddNewThreshold;
          lnkAddThreshold.isPresent().then(function (elm) {
            if (elm) {
              console.log("... Add policy was found for ITOps Engineer") 
       
            } else {
              console.log("... Element was not found")
            }
      })
    } 
      catch (error) {
        throw console.error
    }
});