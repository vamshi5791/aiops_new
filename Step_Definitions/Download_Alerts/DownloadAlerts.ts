import { When } from "cucumber"
import { browser } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
var EC = browser.ExpectedConditions;
let objAlerts = new AlertsPage();



When('ITOps Display user unable to find the Download Alerts button', async function () {

  try {
    await browser.wait(EC.invisibilityOf(objAlerts.btnDownloadAlert), 10000);

  }
  catch (error) {
    await console.log("Feature name : Download Alerts and Scenario name : Display user unable to find the Download Alerts button")
    await console.log(error)
    throw "User is not able to verify severity condition in severity dropdown"
  }
});



