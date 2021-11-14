import { When } from "cucumber"
import { Tickets } from "../../PageObjects/Tickets";
var objTickets = new Tickets();


When('{string} clicks on filter by priority dropdown', async function (string) {  
    try {
    await objTickets.FilterByPriorityDropdown();
      
      } catch (error) {
        await console.log(error)
        throw "Admin unable to clicks on filter by priority dropdown"
      }
});

When('{string} clicks on quick filter dropdown', async function (string) {  
    try {
    await objTickets.FilterByStatusTypeDrp();
      } catch (error) {
        await console.log(error)
        throw "Admin unable to clicks on quick filter dropdown"
      }
});

When('Admin selects critical filter', async function () {  
    try {
    await objTickets.Critical();
      } catch (error) {
        await console.log(error)
        throw "Admin unable to Admin selects critical filter"
      }
});

When('Admin selects high filter', async function () {  
    try {
    await objTickets.High();
      
      } catch (error) {
        await console.log(error)
        throw "Admin unable to Admin selects high filter"
      }
});
