import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { AlertConsoleTableData } from "../../PageObjects/AlertConsoleTableData";
let objAlertsTableData = new AlertConsoleTableData();
var EC = browser.ExpectedConditions;
let objAlerts = new AlertsPage();

import chai from "chai";

var EC = browser.ExpectedConditions;
var expect = chai.expect;
var testAlertState;
var testSource;


When('{string} clicks on Alerts page', async function (userName) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//a[text()="Alerts"]'))), 100000);
    await browser.wait(EC.elementToBeClickable(element(by.xpath('//a[text()="Alerts"]'))), 100000);
    await objAlerts.selectAlerts();
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()=" Auto-refresh in every "]'))), 100000);
  }
  catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Action name : Clicks on Alerts page ")
    await console.log(error)
    throw "User is not able to click on Alerts page"
  }

});
When('{string} selects alert severity dropdown', async function (userRole) {
  try {
    await objAlerts.AlertSeverityDpn();
  }
  catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name :  Verify that Itops_admin is able to Verify severity drop down severity conditions")
    await console.log(error)
    throw "User is not able to select alert severity dropdown"
  }

});

When('{string} selects Warning', async function (userRole) {
  try {
    await objAlerts.SelectWarning();
  }
  catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name :  Verify that Itops_admin is able to Verify severity drop down severity conditions")
    await console.log(error)
    throw "User is not able to select Warning"
  }

});

When('{string} selects Major', async function (userRole) {
  try {
    await objAlerts.SelectMajor();
  }
  catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name :  Verify that Itops_admin is able to Verify severity drop down severity conditions")
    await console.log(error)
    throw "User is not able to select Major"
  }

});

Then('verifies severity condition in severity dropdown {string}', async function (string) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.btnSelectWarning), 100000);


  }
  catch (error) {
    await console.log("Feature name : Advanced Filters and Scenario name :  Verify that Itops_admin is able to Verify severity drop down severity conditions")
    await console.log(error)
    throw "User is not able to verify severity condition in severity dropdown"
  }

});

// Verify that Itops_admin is able to add some more severity conditions


When('{string} selects Ok', async function (userRole) {
  try {
    await objAlerts.clickOnOkFilterBySeverity();

  }
  catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name : Verify that Itops_admin is able to add some more severity conditions")
    await console.log(error)
    throw "User is not able to select Ok"
  }

});

Then('{string} deletes the warning severity condition from alert console', async function (userRole) {
  try {
    await objAlerts.RemoveWarningSeverity();
  }
  catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name : Verify that Itops_admin is able to add some more severity conditions")
    await console.log(error)
    throw "User is not able to delete the warning severity condition from alert console"
  }

});

Then('{string} deletes the ok severity condition from alert console', async function (userRole) {
  try {
    await objAlerts.RemoveOkSeverity();

  }
  catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name : Verify that Itops_admin is able to add some more severity conditions")
    await console.log(error)
    throw "User is not able to delete the ok severity condition from alert console"
  }

});

// Verify that Itops_admin is able to remove severity conditions from saved filters

When('{string} selects saved filter {string}', async function (userRole, SavedFilter) {
  try {
    await objAlerts.SavedFilter(SavedFilter);
    await browser.sleep(2000)
  }
  catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name : Verify that Itops_admin is able to remove severity conditions from saved filters")
    await console.log(error)
    throw "User is not able to selects saved filter"
  }


});

When('{string} deletes the solarwinds condition from alert console', async function (userRole) {
  try {
    await objAlerts.RemoveSolarwinds();

  }
  catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name : Verify that Itops_admin is able to remove severity conditions from saved filters")
    await console.log(error)
    throw "User is not able to deletes the solarwinds condition from alert console"
  }

});

Then('{string} verifies solarwinds filter is not visible', async function (userRole) {
  try {
    await objAlerts.btnRemoveSolarwinds.isPresent().then(function (select) {
      expect(select).to.be.false;
    });

  }
  catch (error) {
    console.log("Feature name : Advanced Filters " + userRole + " and Scenario name : Verify that Itops_admin is able to remove severity conditions from saved filters")
    console.log(error)
    throw "User is not able to verify solarwinds filter is not visible"
  }

});



// Verify that Itops_admin is able to add some more severity conditions


When('{string} clicks on filter by severity dropdown', async function (userRole) {
  try {
    await objAlerts.FilterBySeverity();

  }
  catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name : Verify that Itops_admin is able to add some more severity conditions")
    await console.log(error)
    throw "User is not able to clicks on filter by severity dropdown"
  }

});

Then('{string} verifies the status column as {string}', async function (userName, state) {

  try {

    var myElement = element(by.xpath('//span[text()="No data available"]'));
    myElement.isPresent().then(async function (elm) {
      if (elm) {
        await console.log('No data Available');
      } else {
        var stateText = await element(by.xpath("//label[contains(@class,'smo-inputtext smo-placeholder dropdown-label-ms smo-dropdown-label ng-star-inserted')]")).getText()
        await console.log(stateText);
        await expect(stateText).equal(state);
      }
    });
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name : apply the saved filter")
    await console.log(error)
  }
});
// Verify user is able to perform search operations on the filter conditions which we selected.

When('{string} selects Information', async function (userRole) {
  try {
    await objAlerts.Information();

  }
  catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name : Verify user is able to perform search operations on the filter conditions which we selected.")
    await console.log(error)
    throw "User is not able to selects Information"
  }

});

When('{string} searches alert condition {string}', async function (userRole, alertName) {
  try {
    await objAlerts.Alert_Search(alertName)

  }
  catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name : Verify user is able to perform search operations on the filter conditions which we selected.")
    await console.log(error)
    throw "User is not able to searches alert condition"
  }

});


// Verify user is able to perform search operations on entire alert console after removing filters

When('{string} clicks on remove all button', async function (userRole) {
  try {
    await browser.wait(EC.elementToBeClickable(element(by.xpath('//a[text()="Remove All"]'))), 60000);
    await objAlerts.selectRemoveAllConditions();

  }
  catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name : Verify user is able to perform search operations on entire alert console after removing filters.")
    await console.log(error)
    throw "User is not able to clicks on remove all button"
  }

});


//Verify when user applied Saved filter and some more severity conditions and navigated to other page and came back to alert console again, that time only saved filter exist

Given('{string} clicks on Mark as default', async function (userRole) {
  try {
    await objAlerts.MarkAsDefault();

  }
  catch (error) {
    await console.log("Feature name : Advanced Filters " + userRole + " and Scenario name : Verify when user applied Saved filter and some more severity conditions and navigated to other page and came back to alert console again, that time only saved filter exist")
    await console.log(error)
    throw "User is not able to clicks on Mark as default"
  }


});

Then('{string} Verifies Warning filter is not applied', async function (userRole) {
  try {
    await objAlerts.btnSelectWarning.isPresent().then(function (select) {
      expect(select).to.be.false;
    });
  }
  catch (error) {
    console.log("Feature name : Advanced Filters " + userRole + " and Scenario name : Verify when user applied Saved filter and some more severity conditions and navigated to other page and came back to alert console again, that time only saved filter exist")
    console.log(error)
    throw "User is not able to Verifies Warning filter is not applied"
  }

});

//Verify the advanced filter having Advanced filters, Source and Resource  sections

Then('{string} verifies heading as {string}', async function (userName, AdvancedFilters) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtAdvancedFilters));
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name : Verify the advanced filter having  Advanced filter heading")
    await console.log(error)
    throw "Advanced Filter heading is not available in the advanced filter page"
  }

});


Then('{string} verifies Source and Resource section heading as {string}', async function (userName, SourceAndResource) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtSourceAndResources));

  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name : Verify the advanced filter having Source and Resource sections")
    await console.log(error)
    throw "Source and Resource section is not available in the advanced filter page"
  }

});



Then('{string} verifies State and Status,Date and Time sections heading as {string} and {string}', async function (userName, StateAndStatus, DataAndTime) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtStateAndStatus));
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name : Verify the advanced filter having state and status sections")
    await console.log(error)
    throw "State and Status section is not present in the advanced filter page"
  }
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtDateAndTime));
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name : Verify the advanced filter having date and time sections")
    await console.log(error)
    throw "Date and Time section is not present in the advanced filter page"
  }

});


//Verifying ITOps admin is able to apply the saved filter again

Then('{string} verifies user redirects to alert console', async function (userName) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 50000);
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  Apply the saved filter")
    await console.log(error)
    throw "User is not redirecting to alert console"
  }

});

When('{string} clicks on apply button', async function (userName) {
  try {
    await objAlerts.Apply();
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  Apply the saved filter")
    var myElement = objAlerts.btnCancel;
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await browser.wait(EC.visibilityOf(objAlerts.btnSearch), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await element(by.xpath('//smo-button[@label="Cancel"]')).click();
    await console.log(error)
    throw "User is not able to click on apply button"
  }

});

Then('{string} verifies the Data shown is solarwinds and ticketed alerts only {string}', async function (userName, Node) {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async (elm) => {
      if (elm == false) {
        await browser.sleep(2000);
        var i = 1
        await objAlertsTableData.verifyAlertMetricColumn(Node);
        i++;
        var isNextPageAvailable = "";
        await objAlertsTableData.isElementIsDisplayed().then((visible) => {

          return this.isNextPageAvailable = visible;
        });
        while (this.isNextPageAvailable) {
          await browser.wait(EC.elementToBeClickable(objAlertsTableData.nextArrayButton), 30000);
          await browser.sleep(500);
          objAlertsTableData.nextArrayButton.click();
          await objAlertsTableData.verifyAlertMetricColumn(Node);
          i++;
          await objAlertsTableData.isElementIsDisplayed().then((visible) => {
            this.isNextPageAvailable = visible;
          });
        }
      }
    });
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  Apply the saved filter")
    await console.log(error)
    throw "Data shown is not based on the solar winds and ticketed alerts"
  }


});

//Verify date time filter

When('{string} enters in last fields as {string} and select Duration type {string}', async function (userName, InLast, DurationType) {
  try {
    await objAlerts.enterInLastNumber(InLast);
    await objAlerts.selectDurationType(DurationType);
    await objAlerts.clickOnIncludeToday();
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  Date time filter")
    await console.log(error)
    throw "User is not able to select duration type"
  }

});



Then('{string} verifies last {string} Days alerts are displayed in the console', async function (userName, NumberOfDays) {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async function (elm) {
      if (elm == false) {
        await objAlerts.getTicketNumber(NumberOfDays)
      }
    });

  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  Date time filter")
    await console.log(error)
    throw "Data shown is not based on the mentioned days "
  }

});



When('{string} clicks on Make as default checkbox', async function (userName) {
  try {
    await objAlerts.clickOnMakeAsDefault();
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  Date time filter")
    await console.log(error)
    throw "User not able to click on Make as default checkbox"
  }

});



Then('verify alert console should show results based on default filter applied', async function () {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async function (elm) {
      if (elm == false) {
        await objAlerts.Alert_Search(testSource);
        await objAlerts.getTestSource(testSource)
        await objAlerts.getTicketNumber(testAlertState)
      }
    });
  } catch (error) {
    await console.log("Feature name : Advanced Filters  and Scenario name : Verify creating default filter for Alert Console ")
    await console.log(error)
    throw "Data shown is not based on the default filter applied"
  }

});

Then('verify alert console should not show results based on previous default filter.', async function () {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async function (elm) {
      if (elm == false) {
        await objAlerts.Alert_Search(testSource);
        await objAlerts.getTestSource(testSource)
      }
    });
  } catch (error) {
    await console.log("Feature name : Advanced Filters  and Scenario name : Verify creating default filter for Alert Console ")
    await console.log(error)
    throw "Data shown is not based on the previous default filter applied"
  }
});

// Verify that user is able to view edit and delete option

Then('{string} verifies that edit and delete options are present', async function (userName) {

  try {
    try {
      await browser.wait(EC.visibilityOf(objAlerts.btnEditSavedFilter));
    } catch (error) {
      await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  View edit and delete option")
      await console.log(error)
      throw "Edit option is not present in the page"
    }
    try {
      await browser.wait(EC.visibilityOf(objAlerts.btnDeleteSavedFilter));
    } catch (error) {
      await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  View edit and delete option")
      await console.log(error)
      throw "Delete option is not present in the page"
    }
  } catch (error) {
    var myElement = objAlerts.btnCancel;
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await browser.wait(EC.visibilityOf(objAlerts.btnSearch), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await element(by.xpath('//smo-button[@label="Cancel"]')).click();
  }
});



When('{string} clicks on Edit icon for {string} filter', async function (userName, SavedFilter) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtAdvancedFilters));
    await browser.wait(EC.visibilityOf(objAlerts.txtSourceAndResources));
    await browser.wait(EC.presenceOf(objAlerts.txtAdvancedFilters));
    await browser.wait(EC.presenceOf(objAlerts.txtSourceAndResources));
    await element(by.xpath('//span[@smotooltip="Edit"]')).click();
    await browser.wait(EC.visibilityOf(objAlerts.txtAdvancedFilters));
    await browser.wait(EC.visibilityOf(objAlerts.txtSourceAndResources));
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  View edit and delete option")
    await console.log(error)
    throw "User not able to click on Edit icon on a saved filter"
  }

});





When('{string} edits {string} filter criteria', async function (userName, Source) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtAdvancedFilters));
    await browser.wait(EC.visibilityOf(objAlerts.txtSourceAndResources));
    await objAlerts.SelectSource(Source);
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  View edit and delete option")
    await console.log(error)
    throw "User not able to edit filter criteria"
  }

});


When('{string} click on Update and Apply', async function (userName) {
  try {
    var myElement = objAlerts.btnCancel;
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await objAlerts.clickOnUpdateAndApply();
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  View edit and delete option")
    await console.log(error)
    throw "User not able to click on update and apply button"
  }

});

When('{string} clicks on Yes on confirmation pop up', async function (userName) {
  try {
    await objAlerts.clickOnYes();
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  View edit and delete option")
    await console.log(error)
    throw "User not able to click on Yes from confirmation pop up"
  }

});


Then('{string} verifies {string} success message', async function (userName, Toaster) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtPopUp));
    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(async function (text) {
      await expect(text).to.include(Toaster);
      await console.log(text)
    });
    await browser.wait(EC.invisibilityOf(objAlerts.txtPopUp));
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  View edit and delete option")
    await console.log(error)
    throw "success message is not shown"
  }

});


Then('{string} verifies data shown should be only related to OK and Warning', async function (userName) {
  try {
    var myElement = objAlerts.txtNoDataAvailable;
    myElement.isPresent().then(async function (elm) {
      if (elm == false) {
        await browser.wait(EC.visibilityOf(element(by.xpath("//div[contains(@class,'highlight bg-success')]"))), 20000);
      }
    });
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  View edit and delete option")
    await console.log(error)
    throw "Data shown is not based on the previous default filter applied"
  }
});

When('{string} clicks on Delete icon for {string} filter', async function (userName, SavedFilter) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtAdvancedFilters));
    await browser.wait(EC.visibilityOf(objAlerts.txtSourceAndResources));
    await browser.actions().mouseMove(element(by.xpath('//span[text()="' + SavedFilter + '"]'))).perform();
    await browser.wait(EC.visibilityOf(objAlerts.txtAdvancedFilters));
    await browser.wait(EC.elementToBeClickable(element(by.className('smo smo-trash-alt-regular ng-star-inserted'))));
    await element(by.className('smo smo-trash-alt-regular ng-star-inserted')).click();
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  View edit and delete option")
    await console.log(error)
    throw "User not able to click on Edit icon on a saved filter"
  }
});


Then('{string} verifies {string} shown', async function (userName, Toaster) {
  try {
    await browser.wait(EC.visibilityOf(objAlerts.txtPopUp));
    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(async function (text) {
      await expect(text).to.include(Toaster);
      await console.log(text)
    });
    await browser.wait(EC.invisibilityOf(objAlerts.txtPopUp));
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  View edit and delete option")
    await console.log(error)
    throw "success message is not shown"
  }
});
Then('{string} verifies deleted {string} filter is removed from the filter dropdown in console', async function (userName, SavedFilter) {
  try {
    await objAlerts.drpSavedFilter.click();
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  View edit and delete option")
    await console.log(error)

  }
})
Then('{string} clicks on cancel button in advance filter console', async function (userName) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="No Saved Filters"]'))), 20000);
    var myElement = objAlerts.btnCancel;
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await browser.wait(EC.visibilityOf(objAlerts.btnSearch), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await element(by.xpath('//smo-button[@label="Cancel"]')).click();
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  View edit and delete option")
    await console.log(error)

  }
})
Then('{string} verifies deleted {string} filter is removed from the filter dropdown in console', async function (userName, SavedFilter) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//div[text()="No Saved Filters"]'))), 20000);
    var myElement = objAlerts.btnCancel;
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await browser.wait(EC.visibilityOf(objAlerts.btnSearch), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await browser.wait(EC.visibilityOf(objAlerts.btnAdvanceFilter), 10000);
    await element(by.xpath('//smo-button[@label="Cancel"]')).click();
  } catch (error) {
    await console.log("Feature name : Advanced Filters " + userName + " and Scenario name :  View edit and delete option")
    await console.log(error)
  }

})
