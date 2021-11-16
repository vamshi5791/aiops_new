import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { support } from "../../support/support";
import { AlertConsoleTableData } from "../../PageObjects/AlertConsoleTableData";
let objAlertsTableData = new AlertConsoleTableData();
var drp = new support();
var EC = browser.ExpectedConditions;
let objAlerts = new AlertsPage();
import chai from "chai";
var expect = chai.expect;

When('{string} clicks on Filter by severity drop down', async function (string) {

  try {
    await browser.wait(EC.visibilityOf(objAlerts.drpFilterBySeverity));
    await browser.wait(EC.elementToBeClickable(objAlerts.drpFilterBySeverity));
    await browser.wait(EC.presenceOf(objAlerts.drpFilterBySeverity));
    await objAlerts.clickOnFilterBySeverity();
  } catch (error) {
    await console.log("Feature name : Filter by Severity dropdown and Scenario name : clicks on Filter by severity drop down")
    await console.log(error)
    throw "User unable to click on filter by severity dropdown"
  }
});

When('{string} selects Severity - OK and Warning {string}, {string}', async function (string, SeverityText, SeverityText2) {

  try {
    await objAlerts.clickOnOkFilterBySeverity();
  } catch (error) {
    await console.log("Feature name : Filter by Severity dropdown and Scenario name : selects Severity - OK")
    await console.log(error)
    throw "User not able to click on 'Ok' severity from dropdown list"
  }
  try {
    await objAlerts.clickOnWarningFilterBySeverity();
  } catch (error) {
    await console.log("Feature name : Filter by Severity dropdown and Scenario name : Clicks on Warning")
    await console.log(error)
    throw "User not able to click on 'Warning' severity from dropdown list"
  }
});



Then('verify Severity drop down should have values as - Ok, Warning, Minor, Major, Critical,Information', async function () {

  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtOkFilterBySeverity));
  } catch (error) {
    await console.log("Feature name : Filter by Severity dropdown and Scenario name : verify Severity drop down should have values as - Ok")
    await console.log(error)
    throw "'Ok' severity is not available in dropdown list"
  }
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtWarningFilterBySeverity));
  } catch (error) {
    await console.log("Feature name : Filter by Severity dropdown and Scenario name : verify Severity drop down should have values as - Warning")
    await console.log(error)
    throw "'Warning' severity is not available in dropdown list"
  }
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtMinorFilterBySeverity));
  } catch (error) {
    await console.log("Feature name : Filter by Severity dropdown and Scenario name : verify Severity drop down should have values as - Minor")
    await console.log(error)
    throw "'Minor' severity is not available in dropdown list"
  }
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtMajorFilterBySeverity));
  } catch (error) {
    await console.log("Feature name : Filter by Severity dropdown and Scenario name : verify Severity drop down should have values as - Major")
    await console.log(error)
    throw "'Major' severity is not available in dropdown list"
  }
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtInformationFilterBySeverity));
  } catch (error) {
    await console.log("Feature name : Filter by Severity dropdown and Scenario name :verify Severity drop down should have values as -Critical ")
    await console.log(error)
    throw "'Information' severity is not available in dropdown list"
  }
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtCriticalFilterBySeverity));
    await objAlerts.clickOnFilterBySeverity();
  } catch (error) {
    await console.log("Feature name : Filter by Severity dropdown and Scenario name : verify Severity drop down should have values as -Information")
    await console.log(error)
    throw "'Critical' severity is not available in dropdown list"
  }

});


Then('verify data should be alerts with OK and warning severity only {string}', async function (Severity) {

  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async (elm) => {
      if (elm == false) {
        await browser.sleep(2000);
        var i = 1
        await objAlertsTableData.verifySeverityColumn(Severity);
        i++;
        var isNextPageAvailable = "";
        await objAlertsTableData.isElementIsDisplayed().then((visible) => {

          return this.isNextPageAvailable = visible;
        });
        while (this.isNextPageAvailable) {
          await browser.wait(EC.elementToBeClickable(objAlertsTableData.nextArrayButton), 30000);
          await browser.sleep(500);
          objAlertsTableData.nextArrayButton.click();
          await objAlertsTableData.verifySeverityColumn(Severity);
          i++;
          await objAlertsTableData.isElementIsDisplayed().then((visible) => {
            this.isNextPageAvailable = visible;
          });
        }
      }
    });
  } catch (error) {
    await console.log("Feature name : Filter by Severity dropdown and Scenario name : verify data should be alerts with OK and warning severity only")
    await console.log(error)
    throw "results are not based on the applied filter"
  }
});

Then('verify UI should show chips with filter condition with close option', async function () {

  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnRemoveWarningCondition), 10000);
  } catch (error) {
    await console.log("Feature name : Filter by Severity dropdown and Scenario name : verify UI should show chips with filter condition with close option")
    await console.log(error)
    throw "Warning Chip doesn't have close button"
  }
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnRemoveOkCondition), 10000);
  } catch (error) {
    await console.log("Feature name : Filter by Severity dropdown and Scenario name : verify UI should show chips with filter condition with close option")
    await console.log(error)
    throw "Ok Chip doesn't have close button"
  }
});
Then('{string} verifies the {string}{string} severity dropdown option as {string}', async function (userRole, indexValue, string, dropDownOption) {
  try {
    var text = await element(by.xpath('(//li[@class="smo-multiselect-item smo-corner-all smo-drop-down-with-color-badge smo-multiselect-item-ms"])[' + indexValue + ']')).getText();
    await console.log("severity level selected should be " + text);
    await expect(text).equal(dropDownOption);
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name : Verify that Itops_admin is able to add some more severity conditions")
    await console.log(error);
    throw "Invalid Sequence"
  }
});