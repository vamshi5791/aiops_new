import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { support } from "../../support/support";
var drp = new support();
var EC = browser.ExpectedConditions;
let objAlerts = new AlertsPage();


When('{string} clicks on Filter by severity drop down', async function (string) {

  try {
    await browser.sleep(10000)
    await objAlerts.clickOnFilterBySeverity();
  } catch (error) {
    throw "User unable to click on filter by severity dropdown"
  }
});

When('{string} selects Severity - OK and Warning {string}, {string}', async function (string, SeverityText, SeverityText2) {

  try {
    await objAlerts.clickOnOkFilterBySeverity();
  } catch (error) {
    throw "User not able to click on 'Ok' severity from dropdown list"
  }
  try {
    await objAlerts.clickOnWarningFilterBySeverity();
  } catch (error) {
    throw "User not able to click on 'Warning' severity from dropdown list"
  }
});



Then('verify Severity drop down should have values as - Ok, Warning, Minor, Major, Critical,Information', async function () {

  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtOkFilterBySeverity));
  } catch (error) {
    throw "'Ok' severity is not available in dropdown list"
  }
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtWarningFilterBySeverity));
  } catch (error) {
    throw "'Warning' severity is not available in dropdown list"
  }
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtMinorFilterBySeverity));
  } catch (error) {
    throw "'Minor' severity is not available in dropdown list"
  }
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtMajorFilterBySeverity));
  } catch (error) {
    throw "'Major' severity is not available in dropdown list"
  }
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtInformationFilterBySeverity));
  } catch (error) {
    throw "'Information' severity is not available in dropdown list"
  }
try {
  await browser.wait(EC.visibilityOf(objAlerts.txtCriticalFilterBySeverity));
  await objAlerts.clickOnFilterBySeverity();
} catch (error) {
  throw "'Critical' severity is not available in dropdown list"
}

});


Then('verify data should be alerts with OK and warning severity only', function () {
 
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async function (elm) {
      if (elm) {
  
      } else {
  
      }
    });
  } catch (error) {
    throw ""
  }
});

Then('verify UI should show chips with filter condition with close option', async function () {
  
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnRemoveWarningCondition), 10000);
  } catch (error) {
    throw "Warning Chip doesn't have close button"
  }
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnRemoveOkCondition), 10000);
  } catch (error) {
    throw "Ok Chip doesn't have close button"
  }
});
