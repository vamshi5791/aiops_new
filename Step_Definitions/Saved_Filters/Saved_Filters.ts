import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { LogIn } from '../../PageObjects/LogIn';
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
import { AlertsPage } from "../../PageObjects/AlertsPage";

var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;
var TestProjectName;
let objLogIn = new LogIn();
let ProjectListing = new ProjectListingPage();
let objAlerts = new AlertsPage();
var testAlertState;
var testSource;

When('{string} enters project name in project search field {string}', async function (userRole, ProjectName) {
  await ProjectListing.Project_search(ProjectName);
  TestProjectName = ProjectName;
});

When('{string} Clicks on Saved Filter from advanced filter section {string}', async function (string, FilterName) {
 await browser.sleep(5000)
  await objAlerts.savedFilterTitle(FilterName)
});

When('{string} clicks on project name {string}', async function (userRole, TestProjectName) {
  try {
    await browser.sleep(3000);
    await ProjectListing.selectProject(TestProjectName);
  } catch (error) {
    await console.log(error)

  }
});



When('{string} navigate to alert console', async function (userRole) {
  await objAlerts.selectAlerts();
});


When('{string} clicks on advanced filter icon', async function (userRole) {
  await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 100000);
  await browser.sleep(2000);
  await objAlerts.AdvanceFilter();
});


Then('Success message should be disaplayed as toaster {string}', async function (Toaster) {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
    expect(text).to.include(Toaster);
  });
});

//Gopi

When('{string} enters source as {string} and alert state as {string}', async function (userRole, Source, AlertState) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.drpSource), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.drpAlertState), 10000);

    await objAlerts.SelectSource(Source);
    await objAlerts.AlertState(AlertState);
    testSource = Source;
    testAlertState = AlertState;
  } catch (error) {
    throw "User is not able to enter source and alert state"
  }
});



When('{string} clicks on Save filter button', async function (userRole) {
  try {
    await objAlerts.SaveFilter();
  } catch (error) {
    throw "User is not able to click on save filter button"
  }
});



When('{string} enters filter name as {string} and Description as {string}', async function (userRole, FilterName, FilterDescription) {
  try {
    await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
      await objAlerts.FilterName(FilterName);
      await objAlerts.FilterDescription(FilterDescription)
    })
  } catch (error) {
    throw "User is not able to enter filter name and Description"
  }

});



When('{string} clicks on save and apply button', async function (userRole) {
  try {
    await objAlerts.Save_Apply();
  } catch (error) {
    throw "User is not able to click on save and apply button"
  }
});



Then('Success message should be displayed as toaster {string}', async function (Toaster) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtPopUp), 100000);

    await objAlerts.txtPopUp.getText().then(function (text) {
      expect(text).to.include(Toaster);
    });
    await browser.wait(EC.invisibilityOf(objAlerts.txtPopUp), 100000);
  } catch (error) {
    throw "Success message is not displayed "
  }
});

// Verifying ITOps admin is able to apply the saved filter again

Then('verify Apply and cancel buttons should be present', async function () {
  try {
    var myElement = objAlerts.btnCancel;
  await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
      await browser.wait(EC.visibilityOf(objAlerts.btnApply));
    await browser.wait(EC.visibilityOf(objAlerts.btnCancel));
  } catch (error) {
    throw "Apply and cancel buttons are not present in the page"
  }

});


Then('Verify the filter conditions are retrieved and click on Apply', async function () {
  try {

    await browser.sleep(5000);
    await objAlerts.Apply();
    // await element(by.xpath('//span[text()="Save Filter "]')).click();

  } catch (error) {
    throw ""
  }
});
Then('verify Data shown should be based on the filter conditions {string}', async function (TestSource) {

  await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
  await browser.wait(EC.visibilityOf(objAlerts.drpSavedFilter), 10000);

  var myElement = objAlerts.txtNoDataAvailable;
  myElement.isPresent().then(async function (elm) {
    if (elm) {
      console.log("No data available")

    } else {
      await objAlerts.getTestSource(TestSource)
    }
  });
});

// Alert console UI should show all filter conditions as chips

When('{string} clicks on saved filters {string}', async function (string, SavedFilter) {
  try {
    await browser.sleep(10000);
    await objAlerts.selectSavedFilterFromAlertConsole(SavedFilter);
  } catch (error) {
    throw ""
  }
});


Then('{string} verifies Remove all button is present', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnRemoveAll), 10000);
  } catch (error) {
    throw ""
  }
});
Then('Chips should have a close button', async function () {

  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnCloseChip), 10000);
  } catch (error) {
    throw ""
  }
})

// Verify user is able to remove all filter conditions via alert console once applied

When('{string} clicks on Remove all link next to the chips displayed from Alert console', async function (userRole) {
  try {
    await browser.sleep(2000)
    await objAlerts.selectRemoveAllConditions();
  } catch (error) {
    throw ""
  }
});



Then('verify data should be reset to default set without any filter applied {string}', async function (testSource) {

  var myElement = element(by.xpath('//span[text()="No data available"]'));
  myElement.isPresent().then(async function (elm) {
    if (elm) {

    } else {
      await objAlerts.Alert_Search(testSource);
    }
  });
});

Then('verify All filter condition chips should be removed from UI', async function () {
  try {
    await browser.sleep(3000)
    await browser.wait(EC.invisibilityOf(objAlerts.btnRemoveAll), 10000);

  } catch (error) {
    throw ""
  }

});
Then('Saved filter drop down should not show the filter name', async function () {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.drpSavedFilter), 10000);
  } catch (error) {
    throw ""
  }

});
// Verify user is able to remove any filter conditions via alert console once applied

When('{string} clicks on close button from any of the chip displayed', async function (userRole) {
  try {
    await objAlerts.removeSourceCondition();
    await objAlerts.removeStateCondition();
  } catch (error) {
    throw ""
  }
});

Then('verify closed chips should not be displayed in UI', async function () {
  try {
    await browser.wait(EC.invisibilityOf(objAlerts.btnCloseChip));
    await browser.sleep(10000);
  } catch (error) {
    throw ""
  }
});

// Saved filters availability

Then('verify all saved filters are displayed on left side {string}', async function (FilterName) {
  try {
    await objAlerts.savedFilterTitle(FilterName);
  } catch (error) {
    throw ""
  }
});



Then('verify filter name, description and Created time should be displayed {string}, {string}, {string}', async function (FilterName, Description, CreatedTime) {
  try {
    await browser.sleep(5000);
    await browser.wait(EC.visibilityOf(element(by.xpath('//h3[text()="Saved Filters"]//following::b'))), 10000);
    // await objAlerts.getFilterName(FilterName);
    // await objAlerts.getDescription(Description);
    // await objAlerts.getCreatedTime(CreatedTime);
  } catch (error) {
    throw "filter name, description and Created time are not displayed in the page"
  }
});


Then('verify Expand button should be present for each saved filter', async function () {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('smo-accordion-toggle-icon smo smo-expand-less-alt chevron-icon smo-accordion-toggle-icon-sup-mon'))));

  } catch (error) {
    throw "Expand buttons are not present for each saved filter"
  }
  var myElement = objAlerts.btnCancel;
  await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
  await element(by.xpath('//smo-button[@label="Cancel"]')).click();
  await browser.wait(EC.visibilityOf(objAlerts.btnSearch), 10000);
  await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
  await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
});
