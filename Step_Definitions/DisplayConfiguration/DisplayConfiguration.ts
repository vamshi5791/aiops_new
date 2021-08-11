import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { DisplayConfiguration } from "../../PageObjects/DisplayConfiguration";
import { AlertsPage } from "../../PageObjects/AlertsPage";
import { LogIn } from '../../PageObjects/LogIn';
import { PolicyObjects } from '../../PageObjects/policyObjects';
let objAlerts = new AlertsPage();
var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objLogIn = new LogIn();
let objDisplayConfig = new DisplayConfiguration();
let objPolicy = new PolicyObjects();
var TestSource;
 
// 1. Verify whether ITOps_admin is able to view display configuration settings

When('{string} navigate to Configuration section', async function (userName) {
 
  try {
    await objDisplayConfig.clickOnConfigurationTab();
    await browser.wait(EC.visibilityOf(objPolicy.lnkAlertCorrelationPolicy));
    await browser.wait(EC.visibilityOf(objPolicy.lnkAcknowledgementPolicy));
    await browser.wait(EC.visibilityOf(objPolicy.lnkFailurePolicy));
  } catch (error) { 
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Verify whether itops_admin is able to view display configuration settings")
    await console.log(error)
    throw "User not able to navigate to Configuration console"
  }

});

When('{string} clicks on Alert Console Display Configuration from LHS menu Settings', async function (userName) {
 
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.lnkDisplayConfiguration), 10000);
    await browser.wait(EC.elementToBeClickable(objDisplayConfig.lnkDisplayConfiguration), 10000);
    await browser.wait(EC.visibilityOf(objDisplayConfig.lnkDisplayConfiguration), 10000);
    await browser.wait(EC.elementToBeClickable(objDisplayConfig.lnkDisplayConfiguration), 10000)
    await browser.wait(EC.visibilityOf(objDisplayConfig.lnkDisplayConfiguration), 10000);
    await browser.wait(EC.elementToBeClickable(objDisplayConfig.lnkDisplayConfiguration), 10000);
    await browser.wait(EC.visibilityOf(objDisplayConfig.lnkDisplayConfiguration), 10000);
    await browser.wait(EC.elementToBeClickable(objDisplayConfig.lnkDisplayConfiguration), 10000)
    await objDisplayConfig.clickOnDisplayConfigurationTab();
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Verify whether itops_admin is able to view display configuration settings")
    await console.log(error)
    throw "User not able to click on alert console display configuration"
  }
});
 

Then('{string} verifies that Primary and secondary sections are present', async function (userName) {
 
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.lnkPrimaryColumns), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Verify whether itops_admin is able to view display configuration settings")
    await console.log(error)
    throw "primary section is not present in alert console display configuration page"
  }
  try {
  await browser.wait(EC.visibilityOf(objDisplayConfig.lnkSecondaryColumns), 10000); 
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Verify whether itops_admin is able to view display configuration settings")
    await console.log(error)
    throw "secondary section is not present in alert console display configuration page"
  }
});



Then('{string} verifies Up and Down arrows are present in both sections', async function (userName) {
  
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.btnUpArrowPrimaryColumns), 10000); 
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Verify whether itops_admin is able to view display configuration settings")
    await console.log(error)
    throw "Up arrow button of primary column section is not present"
  }

  try {
  await browser.wait(EC.visibilityOf(objDisplayConfig.btnDownArrowPrimaryColumns), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Verify whether itops_admin is able to view display configuration settings")
    await console.log(error)
    throw "Down arrow button of primary column section is not present"
  }
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.btnUpArrowSecondaryColumns), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Verify whether itops_admin is able to view display configuration settings")
    await console.log(error)
      throw "Up arrow button of secondary column section is not present"
  }
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.btnDownArrowSecondaryColumns), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Verify whether itops_admin is able to view display configuration settings")
    await console.log(error)
      throw "Up arrow button of secondary column section is not present"
    }
});



Then('{string} verifies left and right arrows are present', async function (userName) {
 
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.btnLeftArrow), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Verify whether itops_admin is able to view display configuration settings")
    await console.log(error)
    throw "Left arrow button is not present in alert console display configuration page"
  }
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.btnRightArrow), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Verify whether itops_admin is able to view display configuration settings")
    await console.log(error)
    throw "Right arrow button is not present in alert console display configuration page"
  }
});


// 2. Verify the default fields in Primary section

Then('{string} verifies Save configuration and cancel buttons are present', async function (userName) {
 
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.btnCancel), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Default buttons in display configuration page")
    await console.log(error)
    throw "cancel button is not present in alert console display configuration page"
  }
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.btnSaveConfiguration), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Default buttons in display configuration page")
    await console.log(error)
    throw "Save configuration button is not present in alert console display configuration page"
  }
});



Then('{string} verifies Save configuration button disabled by default', async function (userName) {
  try{
    var myElement =objDisplayConfig.btnSaveConfiguration;
    myElement.isEnabled().then(async function (elm) {
     if (elm == true) {
      throw console.error();
    }  
    });
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Default buttons in display configuration page")
    await console.log(error)
    throw "Save configuration button is in enabled state"
}
});

//3. Verify the default fields in Primary section

When('{string} clicks on {string} from primary section', async function (userName, FieldName) {
  try {
    await objDisplayConfig.clickOnFieldName(FieldName)
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Verify the default fields in Primary section")
    await console.log(error)
    throw "Not able to click on " +FieldName+ " field name "
}
});



When('{string} clicks on Right Arrow key to move the field to secondary section', async function (userName) {
  try {
    await objDisplayConfig.rightArrow();
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Verify the default fields in Primary section")
    await console.log(error)
    throw "Not able to click on Right Arrow key"
}
});



Then('{string} verifies all the primary section fields are present', async function (userName) {
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.txtAlertID), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Default buttons in display configuration page")
    await console.log(error)
    throw "Alert Id field doesn't exist"
  }
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.txtAlertCreatedTime), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Default buttons in display configuration page")
    await console.log(error)
    throw "AlertCreatedTime field doesn't exist"
  }
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.txtAlertModifiedTime), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Default buttons in display configuration page")
    await console.log(error)
    throw "ModifiedTime field doesn't exist"
  }
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.txtAlertName), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Default buttons in display configuration page")
    await console.log(error)
    throw "AlertName field doesn't exist"
} try {
  await browser.wait(EC.visibilityOf(objDisplayConfig.txtSource), 10000);
} catch (error) {
  await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Default buttons in display configuration page")
  await console.log(error)
  throw "Source field doesn't exist"
}
try {
  await browser.wait(EC.visibilityOf(objDisplayConfig.txtIpAddress), 10000);
} catch (error) {
  await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Default buttons in display configuration page")
  await console.log(error)
  throw "IpAddress field doesn't exist"
}
try {
  await browser.wait(EC.visibilityOf(objDisplayConfig.txtAlertMetric), 10000);
} catch (error) {
  await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Default buttons in display configuration page")
  await console.log(error)
  throw "AlertMetric field doesn't exist"
}
try {
  await browser.wait(EC.visibilityOf(objDisplayConfig.txtTicketNumber), 10000);
} catch (error) {
  await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Default buttons in display configuration page")
  await console.log(error)
  throw "TicketNumber field doesn't exist"
  }
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.txtElapsedTime), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Default buttons in display configuration page")
    await console.log(error)
    throw "ElapsedTime field doesn't exist"
  }
  try {
    await browser.wait(EC.visibilityOf(objDisplayConfig.txtSource), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Default buttons in display configuration page")
    await console.log(error)
    throw "Source field doesn't exist"
  }
});



Then('{string} verifies {string} is not moved to secondary section', async function (userName, string) {
  try {
    await browser.wait(EC.invisibilityOf(objDisplayConfig.txtAlertIdInSecondaryColumn), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Default buttons in display configuration page")
    await console.log(error)
    throw "Source field does exist in secondary section"
}
});

// 4. Verify user is able to change display name of Primary fields


When('{string} clicks on a field name and edits the name as {string} in primary section', async function (userName, Source) {
  try {
  
    await objDisplayConfig.enterDisplayNameSource(Source);
    TestSource = Source;
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Change display name of Primary fields")
    await console.log(error)
    throw "User not able to enter "+Source+" display name text box"
}
});


When('{string} clicks on Save configuration button', async function (userName) {
  try {
    await objDisplayConfig.buttonSaveConfiguration();
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Change display name of Primary fields")
    await console.log(error)
    throw "User not able to click on save configuration button" 
}
});

Then('{string} verifies if {string} message is displayed', async function (userName, Toaster) {
  try {
    await objDisplayConfig.getSuccessMessageText(Toaster);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Change display name of Primary fields")
    await console.log(error)
    throw "Field changes are not saved successfully" 
}
});


Then('{string} verifies {string} is updated in primary section', async function (userName, Source) {
  try {
    await objDisplayConfig.getSourceDisplayNameText(Source);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Change display name of Primary fields")
    await console.log(error)
    throw "FiledName is not updated in primary section" 
  }
});


// 5. Verify user is able to change display name of Secondary fields


When('{string} clicks on a field name and edits the name as {string} in secondary section', async function (userName, Source) {
  try {
    await objDisplayConfig.enterAlertMessage(Source);
    TestSource = Source;
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Change display name of Secondary fields")
    await console.log(error)
    throw "User not able to enter "+Source+" display name text box"
}
});


Then('{string} verifies {string} is updated in secondary section', async function (userName, Source) {
  try {
    await objDisplayConfig.getSourceDisplayNameText(Source);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : Change display name of Secondary fields")
    await console.log(error)
    throw "FiledName is not updated in secondary section" 
  }
});


 
 
// 5. ReOrdering of Primary section fields

When('{string} selects a {string} and clicks on Up arrow to reOrder', async function (userName, FieldName) {
 
  try{
    await objDisplayConfig.clickOnFieldName(FieldName);
  await element(by.xpath('//span[@class="smo-btn-icon-col d-flex align-items-center smo smo-chevron-left-alt icon-size smo-clickable ng-star-inserted"]//following::button')).click();
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : ReOrdering of Primary section fields")
    await console.log(error)
    throw "FiledName doesn't exist"  
 }
});

Then('{string} verifies {string} of the {string} is as per the new order', async function (userName, DisplayOrder, FieldName) {
  
  try{
    await objDisplayConfig.getDisplayOrder(DisplayOrder);
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : ReOrdering of Primary section fields")
    await console.log(error)
    throw "Display order of selected filed is not as per the new order"  
 }
});
When('{string} selects a {string} and clicks on down arrow to reOrder', async function (userName, FieldName) {
  
  try{
    await objDisplayConfig.clickOnFieldName(FieldName);
    await element(by.xpath('//span[@class="smo-btn-icon-col d-flex align-items-center smo smo-expand-more-alt icon-size smo-clickable ng-star-inserted"]')).click();
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : ReOrdering of Primary section fields")
    await console.log(error)
    throw "FiledName doesn't exist"  
 }
});

// 6. Verify user is able to interchange primary fields and secondary fields

When('{string} selects {string} in the primary section and clicks on Left arrow button', async function (userName, FieldName) {
  
  try{
    await objDisplayConfig.clickOnFieldName(FieldName);
    await element(by.xpath('//span[@class="smo-btn-icon-col d-flex align-items-center smo smo-chevron-left-alt icon-size smo-clickable ng-star-inserted"]')).click();
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : ReOrdering of Primary section fields")
    await console.log(error)
    throw "FiledName doesn't exist"  
 }
});


When('{string} navigates to Alerts section to verify the console', async function (userName) {
  try {
    await browser.sleep(5000)
    await objAlerts.selectAlerts();
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : ReOrdering of Primary section fields")
    await console.log(error)
    throw "unable to navigate to Alert console page"  
  }
}); 



Then('{string} verifies the {string} present in secondary section', async function (string, DisplayName) {
  
  try{
    await browser.sleep(5000)
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="' + DisplayName + '"]'))), 10000);
  } catch (error) {
    await console.log("Feature name : Display Configuration and Scenario name : ReOrdering of Primary section fields")
    await console.log(error)
    throw "Display name is not present in secondary section"  
 }
});


// Verify user is able to mark inactive field to active in secondary section


When('{string} selects {string} and clicks on toggle bar to inactive the field in Secondary section', async function (userName, FieldName) {
  try {
    await element(by.xpath('//span[text()="'+FieldName+'"]//following::div[@class="active-switch"]')).click();
  } catch (error) {
    await console.log("Feature name : Display Configuration " + userName + " and Scenario name : ReOrdering of Primary section fields")
    await console.log(error)
    throw "FiledName doesn't exist to make it inactive"  
  }
});


 
// Verify the user is able to add maximum 16 fields in Primary section

 When('{string} selects {string}, {string}, {string}, {string}, {string} and {string} from Secondary to Primary section', async function (string, FieldName_1, FieldName_2, FieldName_3, FieldName_4, FieldName_5, FieldName_6) {
  try {
     await objDisplayConfig.clickOnFieldName(FieldName_1);
    var elm = element(by.xpath('//span[@class="smo-btn-icon-col d-flex align-items-center smo smo-chevron-left-alt icon-size smo-clickable ng-star-inserted"]'));
await elm.click();

await objDisplayConfig.clickOnFieldName(FieldName_2);
await elm.click();

await objDisplayConfig.clickOnFieldName(FieldName_3);
await elm.click();

await objDisplayConfig.clickOnFieldName(FieldName_4);
await elm.click();

await objDisplayConfig.clickOnFieldName(FieldName_5);
await elm.click();

await objDisplayConfig.clickOnFieldName(FieldName_6);
await elm.click();

  } catch (error) {
    await objLogIn.logOutUser();
    await console.log("Feature name : Display Configuration and Scenario name : Maximum fields in Primary section")
    await console.log(error)
    throw "User not able to click on save configuration button"   
  }
 });

 
 Then('if number of fields are more than 16, {string} message should be displayed', async function (Toaster) {
  try {
   await objDisplayConfig.getSuccessMessageText(Toaster)
  } catch (error) {
    await objLogIn.logOutUser();
    await console.log("Feature name : Display Configuration and Scenario name : Maximum fields in Primary section")
    await console.log(error)
    throw "More then 16 fields are updated in primary section"  
  }
 });


// Verify engineer user is not able to change display configurations

Then('{string} verifies user is not able to edit the fields', async function (string) {
  try {
    await objDisplayConfig.verifyAlertIdDisplayName;
  } catch (error) {
    await objLogIn.logOutUser();
    await console.log("Feature name : Display Configuration  and Scenario name : ReOrdering of Primary section fields")
    await console.log(error)
    throw "User is able to edit the fields"  
}
});
