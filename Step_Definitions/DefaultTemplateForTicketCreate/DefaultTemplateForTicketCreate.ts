import { When, Then } from "cucumber"
import { browser} from "protractor"
import { TicketDetailsPage } from "../../PageObjects/TicketDetailsPage";
import { ITOPS_APIs } from "../../ITOPS_Apis/ItopsApis";
let objTicketDetailsPage = new TicketDetailsPage();
let objITOpsApi = new ITOPS_APIs(); 

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
           throw "User is not able to click on resolve button"
       }
});


Then('{string} Edit the default template and change the assignment group {string}',async function(string,ass_group_id){
try {
    await objITOpsApi.updateDefaultTemplate(ass_group_id)
} catch (error) {
    console.log(error);
    throw "Admin unable to Edit the default template and change the assignment group"
}
});