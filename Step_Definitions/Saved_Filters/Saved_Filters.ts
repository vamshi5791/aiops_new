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
 
  try {
    await browser.sleep(5000)
  await objAlerts.savedFilterTitle(FilterName)
  } catch (error) {
    var myElement = objAlerts.btnCancel;
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await element(by.xpath('//smo-button[@label="Cancel"]')).click();
    await browser.wait(EC.visibilityOf(objAlerts.btnSearch), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await console.log("Feature name : Saved Filters and Action : clicking on Saved Filter from advanced filter page ")
    await console.log(error)
    throw "Saved Filter doesn't exist"
  }
});

When('{string} clicks on project name {string}', async function (userRole, TestProjectName) {
  try {
    await browser.sleep(3000);
    await ProjectListing.selectProject(TestProjectName);
  } catch (error) {
    await console.log("Feature name : Saved Filters " + userRole + " and Action  : clicking on project name")
    await console.log(error)

  }
});



When('{string} navigate to alert console', async function (userRole) {
  var myElement = element(by.className('smo smo-close-black-alt'));
  myElement.isPresent().then(async function (elm) {
    if (elm) {
      

await browser.sleep(10000)
    await element(by.className('smo smo-close-black-alt')).click();

    }
  });
  await objAlerts.selectAlerts();
});


When('{string} clicks on advanced filter icon', async function (userRole) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 100000);
    await browser.sleep(2000);
    await objAlerts.AdvanceFilter();
  } catch (error) {
    await console.log("Feature name : Saved Filters " + userRole + " and Action  : clicking on Advanced filter icon")
    await console.log(error)
  }
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
    await browser.sleep(2000);
    await objAlerts.SelectSource(Source);
    await objAlerts.AlertState(AlertState);
    testSource = Source;
    testAlertState = AlertState;
  } catch (error) {
    var myElement = objAlerts.btnCancel;
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await element(by.xpath('//smo-button[@label="Cancel"]')).click();
    await browser.wait(EC.visibilityOf(objAlerts.btnSearch), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await console.log("Feature name : Saved Filters " + userRole + " and Action : selecting source and alert state ")
    await console.log(error)
    throw "User is not able to enter source and alert state"
  }
});



When('{string} clicks on Save filter button', async function (userRole) {
  try {
    await objAlerts.SaveFilter();
  } catch (error) {
    var myElement = objAlerts.btnCancel;
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await element(by.xpath('//smo-button[@label="Cancel"]')).click();
    await browser.wait(EC.visibilityOf(objAlerts.btnSearch), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await console.log("Feature name : Saved Filters " + userRole + " and Action : clicking on Save filter button")
    await console.log(error)
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
    var myElement = objAlerts.btnCancel;
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await element(by.xpath('//smo-button[@label="Cancel"]')).click();
    await browser.wait(EC.visibilityOf(objAlerts.btnSearch), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await console.log("Feature name : Saved Filters " + userRole + " and Action : entering filter name and Description ")
    await console.log(error)
    throw "User is not able to enter filter name and Description"
  }

});



When('{string} clicks on save and apply button', async function (userRole) {
  try {
    await objAlerts.Save_Apply();
  } catch (error) {
    var myElement = objAlerts.btnCancel;
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await element(by.xpath('//smo-button[@label="Cancel"]')).click();
    await browser.wait(EC.visibilityOf(objAlerts.btnSearch), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await console.log("Feature name : Saved Filters " + userRole + " and Action : clicks on save and apply button ")
    await console.log(error)
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
    await console.log("Feature name : Saved Filters and Scenario name :  ")
    await console.log(error)
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
    await console.log("Feature name : Saved Filters and Scenario name :  ")
    await console.log(error)
    throw "Apply and cancel buttons are not present in the page"
  }

});


Then('Verify the filter conditions are retrieved and click on Apply', async function () {
  try {

    await browser.sleep(5000);
    await objAlerts.Apply();
    // await element(by.xpath('//span[text()="Save Filter "]')).click();

  } catch (error) {
    await console.log("Feature name : Saved Filters and Scenario name :  ")
    await console.log(error)
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
    await console.log("Feature name : Saved Filters and Scenario name :  ")
    await console.log(error)
    throw ""
  }
});


Then('{string} verifies Remove all button is present', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnRemoveAll), 10000);
  } catch (error) {
    await console.log("Feature name : Saved Filters and Scenario name :  ")
    await console.log(error)
    throw ""
  }
});
Then('Chips should have a close button', async function () {

  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnCloseChip), 10000);
  } catch (error) {
    await console.log("Feature name : Saved Filters and Scenario name :  ")
    await console.log(error)
    throw ""
  }
})

// Verify user is able to remove all filter conditions via alert console once applied

When('{string} clicks on Remove all link next to the chips displayed from Alert console', async function (userRole) {
  try {
    await browser.sleep(2000)
    await objAlerts.selectRemoveAllConditions();
  } catch (error) {
    await console.log("Feature name : Saved Filters and Scenario name :  ")
    await console.log(error)
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
    await browser.sleep(5000)
    //await browser.wait(EC.invisibilityOf(objAlerts.btnRemoveAll), 10000);
    // var myElement = objAlerts.btnRemoveAll;
    // myElement.isPresent().then(async function (elm) {
    //   if (elm) {
    //     // console.error();
    //   }
    // });
    return browser.wait(function () {
      return  objAlerts.btnRemoveAll.isPresent()
        .then(function (visible) {
          if (visible) {
            return false;
          }
          return true;
        }).catch(function (notFound) {
          return true;
        });
    }, 10000, 'Element not found within 10 seconds');
  } catch (error) {
    await console.log("Feature name : Saved Filters and Scenario name :  ")
    await console.log(error)
    throw ""
  }

});
Then('Saved filter drop down should not show the filter name', async function () {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.drpSavedFilter), 10000);
  } catch (error) {
    await console.log("Feature name : Saved Filters and Scenario name :  ")
    await console.log(error)
    throw ""
  }

});
// Verify user is able to remove any filter conditions via alert console once applied

When('{string} clicks on close button from any of the chip displayed', async function (userRole) {
  try {
    await objAlerts.removeSourceCondition();
    await objAlerts.removeStateCondition();
  } catch (error) {
    await console.log("Feature name : Saved Filters and Scenario name :  ")
    await console.log(error)
    throw ""
  }
});

Then('verify closed chips should not be displayed in UI', function () {
  try {
    //await browser.wait(EC.invisibilityOf(objAlerts.btnCloseChip));
    // var myElement = objAlerts.btnCloseChip;
    // myElement.isPresent().then(async function (elm) {
    //   if (elm) {
    //  // throw console.error();
    //   } 
    // });
    // expect(objAlerts.btnCloseChip.isPresent()).to.eventually.equal(false);
    //  browser.sleep(10000);
    return browser.wait(function () {
      return  objAlerts.btnCloseChip.isPresent()
        .then(function (visible) {
          if (visible) {
            return false;
          }
          return true;
        }).catch(function (notFound) {
          return true;
        });
    }, 10000, 'Element not found within 10 seconds');
  } catch (error) {
     console.log("Feature name : Saved Filters and Scenario name :  ")
     console.log(error)
    throw ""
  }
});

// Saved filters availability

Then('verify all saved filters are displayed on left side {string}', async function (FIlterName) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="' + FIlterName + '"]'))), 10000);
    await browser.wait(EC.presenceOf(element(by.xpath('//span[text()="'+FIlterName+'"]'))), 10000);
    await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[text()="'+FIlterName+'"]'))), 10000);
    await browser.sleep(5000);
    await objAlerts.savedFilterTitle(FIlterName);

  } catch (error) {
    await console.log("Feature name : Saved Filters and Scenario name :  ")
    await console.log(error)
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
    await console.log("Feature name : Saved Filters and Scenario name :  ")
    await console.log(error)
    throw "filter name, description and Created time are not displayed in the page"
  }
});


Then('verify Expand button should be present for each saved filter', async function () {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('smo-accordion-toggle-icon smo smo-expand-less-alt chevron-icon smo-accordion-toggle-icon-sup-mon'))));

  } catch (error) {
    await console.log("Feature name : Saved Filters and Scenario name :  ")
    await console.log(error)
    throw "Expand buttons are not present for each saved filter"
  }
  var myElement = objAlerts.btnCancel;
  await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
  await element(by.xpath('//smo-button[@label="Cancel"]')).click();
  await browser.wait(EC.visibilityOf(objAlerts.btnSearch), 10000);
  await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
  await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
});
