import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, ExpectedConditions, WebElement, protractor } from "protractor"
import chai from "chai";
import { LogIn } from "../../PageObjects/LogIn";
import { PushingAlerts } from "../../PageObjects/RabbitMQ";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
import { SeverityMapping } from "../../PageObjects/Severity_Mapping";
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./PropertyFile/ConfigParam.properties');
var EC = browser.ExpectedConditions;
var fs = require('fs');
var expect = chai.expect;
let objLogIn = new LogIn();
let objFilter = new PushingAlerts();
let objAlerts = new AlertsPage();
let objSeverityMapping = new SeverityMapping();
let objProjectListing = new ProjectListingPage();
var Global_ProjectName;



// Verifying_Configuring_New_Severity_Mapping

When('{string} clicks on Configuration tab', async function (userRole) {
  await objSeverityMapping.Configuration();
  try {
    
  } catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : Verifying Configuring New Severity Mapping")
    await console.log(error)
  }
});

When('{string} clicks on Severity Mapping', async function (userRole) {
  await objSeverityMapping.SeverityMapping();
  try {
    
  } catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : Verifying Configuring New Severity Mapping")
    await console.log(error)
  }
});

When('{string} clicks on Add new source button', async function (userRole) {
  await browser.sleep(3000);
  await objSeverityMapping.AddNewSource();
  try {
    
  } catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : Verifying Configuring New Severity Mapping")
    await console.log(error)
  }
});

Given('{string} clicks on source dropdown and select a source', async function (userRole) {
  await objSeverityMapping.ChooseSource();
  await objSeverityMapping.SelectSolarWinds();
  try {
    
  } catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : Verifying Configuring New Severity Mapping")
    await console.log(error)
  }
});

Given('{string} enters source Severity as {string}', async function (userRole, SourceSeverity1) {
  await objSeverityMapping.SourceSeverity(SourceSeverity1);
  try {
    
  } catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : Verifying Configuring New Severity Mapping")
    await console.log(error)
  }
});

Given('{string} clicks on SO Severity dropdown and selects Information', async function (userRole) {
  await objSeverityMapping.ChooseSOSeverity();
  await objSeverityMapping.SelectInformation();
  try {
    
  } catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : Verifying Configuring New Severity Mapping")
    await console.log(error)
  }
});

Given('{string} clicks on + button', async function (userRole) {
  await objSeverityMapping.ClickOnPlusButton();
  try {
    
  } catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : Verifying Configuring New Severity Mapping")
    await console.log(error)
  }
});

Given('{string} enters next source Severity as {string}', async function (userRole, SourceSeverity2) {
  await objSeverityMapping.NextSouceSeverity(SourceSeverity2);
  try {
    
  } catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : Verifying Configuring New Severity Mapping")
    await console.log(error)
  }
});

Given('{string} clicks on next SO Severity dropdown and selects Information', async function (userRole) {
  await objSeverityMapping.NextChooseSOSeverity();
  await objSeverityMapping.SelectInformation();
  try {
    
  } catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : Verifying Configuring New Severity Mapping")
    await console.log(error)
  }
});

Given('{string} clicks on Add Source button', async function (userRole) {
  await objSeverityMapping.AddSource();
  try {
    
  } catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : Verifying Configuring New Severity Mapping")
    await console.log(error)
  }
});

Then('{string} verifying the label {string}', async function (userRole, label) {
 
   try {
    await browser.wait(EC.visibilityOf(element(by.className('//span[@class="hint"]'))), 10000);
    await element(by.xpath('//span[@class="hint"]')).getText().then(function (text) {
   expect(text).to.include(label);
    });
  } catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : Verifying Configuring New Severity Mapping")
    await console.log(error)
  }
});

Then('Success message for Severity Mapping must be shown in popup {string}', async function (popup) {
  try {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
    expect(text).to.include(popup);
  });
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

   }
   catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : ")
    await console.log(error)
   throw " Severity Mapping details are not inserted"
   }
});


//  Verify_Severity_Mapping_Page_For_ITOps_Admin

Then('{string} verifies Source Severity text feild as {string}', async function (userRole, SourceSeverity) {

  await element(by.xpath('//th[text()="SOURCE SEVERITY"]')).getText().then(function (text) {
    expect(text).to.include(SourceSeverity);
  });
});

Then('{string} verifies SO Severity as {string}', async function (userRole, SOSeverity) {

  await element(by.xpath('//th[text()="SO SEVERITY"]')).getText().then(function (text) {
    expect(text).to.include(SOSeverity);
  });
});

Then('{string} verifies Updated time as {string}', async function (userRole, time) {

  await element(by.xpath('//th[text()="UPDATED TIME"]')).getText().then(function (text) {
    expect(text).to.include(time);
  });
});

Then('{string} verifies +Add Severity as {string}', async function (userRole, AddSeverity) {

  await element(by.xpath('//span[text()=" Add Severity"]')).getText().then(function (text) {
    expect(text).to.include(AddSeverity);
  });
});

Then('{string} verifies Delete icon', async function (userRole) {

  await element(by.xpath('//span[@class="smo smo-delete cursor-pointer font-18 color-grey left-margin-20 ng-star-inserted"]')).isDisplayed();
});

Then('{string} verifies Add New Source as {string}', async function (userRole, popup6) {

  await element(by.xpath('//span[text()=" Add New Source"]')).getText().then(function (text) {
    expect(text).to.include(popup6);
  });
});

Then('{string} verifies Edit icon', async function (userRole) {

  await element(by.xpath('//span[@class="smo smo-create-alt edit-icon cursor-pointer right-padding-20 ng-star-inserted"]')).isDisplayed();
});

Then('{string} verifies Delete icon of specefic Severity', async function (userRole) {

  await element(by.xpath('//span[@class="smo smo-delete trash-icon cursor-pointer ng-star-inserted"]')).isDisplayed();
});

Then('{string} verifies the Time as {string}', async function (userRole, Time) {

  await element(by.xpath('//b[text()="14 Jul 2021"]')).getText().then(function (text) {
    expect(text).to.include(Time);
  });
});


// verify_Duplicate_Validation_In_Severity_Mapping


Then('Error message for creating duplicate source must be shown in popup {string}', async function (Error_popup) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 10000);

    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(async function (text) {
      expect(text).to.include(Error_popup);
      await console.log(text);
    });
   // await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    //await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await objProjectListing.clickOnClosePopUpButton();
  }

  catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : ")
    await console.log(error)
    throw " Severity Mapping details are inseted"
  }
});

// Verify_Duplicate_SourceSeverityandSOSeverity

Given('{string} clicks on edit button', async function (userRole) {
  await objSeverityMapping.Edit();
});
Given('{string} clicks on cancel button', async function (userRole) {
  await objSeverityMapping.Cancel();
});
Given('{string} changes source Severity as {string}', async function (userRole, SourceSeverity) {
  await objSeverityMapping.SourceSeverity(SourceSeverity);
});

Given('{string} click on save button', async function (userRole) {
  await objSeverityMapping.ClickOnSave();
});

Given('{string} clicks on yes button', async function (userRole) {
await browser.sleep(2000)
  await objSeverityMapping.ClickONYes();

});

Then('Error message for creating duplicate source severity must be shown in popup {string}', async function (Error_popup) {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 10000);

  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
    expect(text).to.include(Error_popup);
  });
  //await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 10000);
  await objProjectListing.clickOnClosePopUpButton();
})

Given('{string} changes another source Severity as {string}', async function (userRole, SourceSeverity) {
  await objSeverityMapping.SourceSeverity(SourceSeverity);
})

Then('Success message for updating Severity Mapping must be shown in popup {string}', async function (popup) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
      expect(text).to.include(popup);
    });
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  }
  catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : ")
    await console.log(error)
    throw " Severity Mapping details are not inseted"
  }
});


// Adding_Additional_Source_Severity_For_Same_Source



Given('{string} clicks on + Add Severity button', async function (userRole) {
  await objSeverityMapping.AddSeverity();
});


Given('{string} clicks on save and add new button', async function (userRole) {
  await objSeverityMapping.DropDownForSaveAndNew();
  await objSeverityMapping.ClickOnSaveAndAddNew();
});

Given('{string} clicks on SO Severity dropdown and selects Critical', async function (userRole) {
  await objSeverityMapping.ChooseSOSeverity();
  await objSeverityMapping.SelectCritical();
});

Given('{string} clicks on save button', async function (userRole) {
  await objSeverityMapping.Save();
});

Then('Success message for Verifyimg adding additional source severity within the same source must be shown in popup {string}', async function (popup) {
  try {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 10000);
  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
    expect(text).to.include(popup);
  });
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  } 
  catch (error) {
    await console.log("Feature name : Severity Mapping and Scenario name : ")
    await console.log(error)
  throw " Severity Mapping details are not inseted"
  }
});

Then('Success message for Verifyimg adding additional source severity within the another source must be shown in popup {string}', async function (popup) {
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 10000);
  await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
    expect(text).to.include(popup);
  });
  await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
});



// Verifying ITOps Enginner is able to Configure New Severity Mapping

Then('{string} verifies +Add Severity icon is not available {string}', async function (string, string2) {
  await browser.wait(EC.invisibilityOf(element(by.xpath('//b[text()="SOLARWINDS"]//following::span[@class="cursor-pointer ng-star-inserted"]'))), 1000);

});

Then('{string} verifies Delete icon is not available', async function (string) {
  await browser.wait(EC.invisibilityOf(element(by.xpath('//span[@class="smo smo-delete cursor-pointer font-18 color-grey left-margin-20 ng-star-inserted"]'))), 1000);

});

Then('{string} verifies Add New Source icon is not available {string}', async function (string, string2) {
  await browser.wait(EC.invisibilityOf(element(by.xpath('//span[text()=" Add New Source"]'))), 1000);

});

Then('{string} verifies Edit icon is not available', async function (string) {
  await browser.wait(EC.invisibilityOf(element(by.xpath('//span[@class="smo smo-create-alt edit-icon cursor-pointer right-padding-20 ng-star-inserted"]'))), 1000);

});