import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { ProjectConfiguration } from "../../PageObjects/ProjectConfiguration";
import { TicketDetailsPage } from "../../PageObjects/TicketDetailsPage";

let objProjectConfig = new ProjectConfiguration();
let objTicketDetailsPage = new TicketDetailsPage();

var EC = browser.ExpectedConditions;
var expect = chai.expect;

When('{string} clicks on status tab drop down', async function (string) {
    try {
        await objTicketDetailsPage.drpDownStatus.click();
        await browser.sleep(2000);
    }
    catch (error) {
        await console.log(error)
        throw "User is not able to click on dropdown button"
    }

});

When('{string} selects resolve from dropdown', async function (userRole) {

    try{
     await objTicketDetailsPage.resolveOption.click();
     await browser.sleep(1000);

    }
    catch (error) {
        await console.log(error)
        throw "User is not able to select resolve option"
    }
});

When('{string} enters the closure note {string}', async function (userRole, ClosureNote) {
    try{
        await objTicketDetailsPage.closureNoteTxtField.click();
        await objTicketDetailsPage.closureNoteTxtField.sendKeys(ClosureNote);
        await browser.sleep(1000);
   
       }
       catch (error) {
           await console.log(error)
           throw "User is not able to enter closure note"
       }
    
});

Then('{string} click on resolve button', async function (userRole) {
    try{
        await objTicketDetailsPage.btnResolve.click();
                await browser.sleep(1000);
   
       }
       catch (error) {
           await console.log(error)
           throw "User is not able to enter closure note"
       }
});