import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { PolicyObjects } from '../../PageObjects/policyObjects';

var EC = browser.ExpectedConditions;
var expect = chai.expect;
let objPolicy = new PolicyObjects();


When('{string} clicks on configuration tab', async function (userrole) {
    try {
        await browser.wait(EC.visibilityOf(objPolicy.lnkConfiguration));
        await objPolicy.configurationNavigation();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw userrole + " not able to click on configuration";
    }
});

// User navigates to respective policies

When('{string} navigate to Alert Correlation Policy', async function (userrole) {
    try {
        await browser.wait(EC.visibilityOf(objPolicy.lnkAlertCorrelationPolicy));
        await objPolicy.correlationPolicyNavigation();
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Alert Correlation Policy"]'))), 10000);
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw userrole + " not able to click on Alert Correlation Policy";
    }
});

When('{string} navigate to Acknowledgement Policy', async function (userrole) {
    try {
         await browser.wait(EC.visibilityOf(objPolicy.lnkAcknowledgementPolicy));
        await objPolicy.acknowledgementPolicyNavigation();
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Acknowledgement Policy"]'))), 10000);
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw userrole + " not able to click on Acknowledgement Policy";
    }
});

When('{string} navigate to Failure Policy', async function (userrole) {
    try {
        await browser.wait(EC.visibilityOf(objPolicy.lnkFailurePolicy));

        await objPolicy.failurePolicyNavigation();
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Failure Policy"]'))), 10000);
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw userrole + " not able to click on Failure Policy";
    }
});

When('{string} navigate to Recovery Policy', async function (userrole) {
    try {
        await browser.wait(EC.visibilityOf(objPolicy.lnkRecoveryPolicy));
        await objPolicy.recoveryPolicyNavigation();
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Recovery Policy"]'))), 10000);
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw userrole + " not able to click on Failure Policy";
    }
});

// Ackmowledgement, correlation, failure and recovery  Policy functionalities

When('{string} clicks on edit icon in listing page {string}', async function (userrole, policyname) {
    try {
        await objPolicy.clickOnPolicyEditIcon(policyname);
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw userrole + " not able to click on edit icon";
    }
});

When('{string} clicks on delete icon in listing page {string}', async function (userrole, policyname) {
    try {
        await objPolicy.clickOnPolicyDeleteIcon(policyname);
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw userrole + " not able to click on delete icon";
    }
});

When('Admin clicks on Add {string} Policy', async function (policy) {
    try {
        await objPolicy.clickOnAddPolicyButton();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User not able to click on Add Policy button";
    }
});

Then('verify plus icon for adding {string}', async function (policy) {
    try {
        var plusIcon = objPolicy.icnPlus;
        plusIcon.isPresent().then(function (elm) {
            if (elm == false) {
            }
        })
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "Plus icon was not found";
    }
});

Then('verify default value in Operator dropdown', async function () {
    try {
        await browser.sleep(3000);
        await browser.wait(EC.visibilityOf(objPolicy.drpdwnDefaultOperatorValue));
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "Default value in Operator dropdown is not 'Equals'";
    }
});

Then('verify values in operator dropdown', async function () {
    try {
        await browser.sleep(3000);
        await objPolicy.clickOnOperatorDropdown();

        try {
            await browser.wait(EC.visibilityOf(objPolicy.drpdwnOptEquals));
        }
        catch (error) {
            await console.log("Feature name : Policies ")
            await console.log(error)
            throw "Equals Option is not found in the drop down";
        }

        try {
            await browser.wait(EC.visibilityOf(objPolicy.drpdwnOptContains));
        }
        catch (error) {
            await console.log("Feature name : Policies ")
            await console.log(error)
            throw "Contains Option is not found in the drop down";
        }

        try {
            await browser.wait(EC.visibilityOf(objPolicy.drpdwnOptStartswith));
        }
        catch (error) {
            await console.log("Feature name : Policies ")
            await console.log(error)
            throw " Starts Option is not found in the drop down";
        }

        try {
            await browser.wait(EC.visibilityOf(objPolicy.drpdwnOptEndswith));
        }
        catch (error) {
            await console.log("Feature name : Policies ")
            await console.log(error)
            throw "'Ends with' Option is not found in the drop down";
        }
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on operator drop down";
    }
});

When('Admin enters {string} Policy Name as {string}', async function (policy, policyname) {
    try {
        await browser.sleep(2000);
        await objPolicy.enterPolicyName(policyname);
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to enter Policy Name";
    }
});

When('Admin enters {string} Precedence as {string}', async function (policy, policyPrecedence) {
    try {
        await browser.sleep(2000);
        await objPolicy.enterPrecedence(policyPrecedence);
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to enter Precedence";
    }
});

When('Admin selects {string} attribute as {string}', async function (policy, Attribute) {
    try {
        await objPolicy.selectAttribute(Attribute);
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to select Attribute";
    }
});

When('Admin selects {string} value as {string}', async function (policy, value) {
    try {
        await objPolicy.selectValue(value);
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to select Value";
    }
});

When('Admin clicks on Save and Add Rule button', async function () {
    try {
        await objPolicy.clickSaveandAddRule();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Save and Add Rule button";
    }
});

Then('verify {string} toaster {string}', async function (policy, Toaster) {
    // try {
        await browser.wait(EC.visibilityOf(objPolicy.tostMessage), 10000);
        await objPolicy.tostMessage.getText().then(function (text) {
            expect(text).to.include(Toaster);
            browser.wait(EC.invisibilityOf(objPolicy.tostMessage), 10000);
        });
    // }
    // catch (error) {
        // await console.log("Feature name : Policies ")
        // await console.log(error)
    //     throw "Toaster message is not same as Expected message";
    // }
});

When('Admin enters {string} rule name as {string}', async function (policy, rulename) {
    try {
        await objPolicy.enterRulename(rulename);
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to enter Rule Name";
    }
});

When('Admin clicks on Save button', async function () {
    try {
        await objPolicy.clickSaveButton();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Save button";
    }
});

When('Admin clicks on Activate Policy toggle button', async function () {
    try {
         await browser.wait(EC.visibilityOf(objPolicy.tglbtnActivePolicy), 10000);
        await objPolicy.clickActivePolicyToggleButton();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Active Policy toggle button";
    }
});

When('Admin clicks on Yes button in confirmation popup', async function () {
    try {
        await browser.wait(EC.visibilityOf(objPolicy.btnYes));

        await objPolicy.clickOnYesButton();
         //await browser.sleep(5000)
         //await browser.wait(EC.invisibilityOf(objPolicy.btnYes));

    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Yes button in confirmation page";
    }
});

When('Admin clicks on Done button', async function () {
    try {
        await objPolicy.clickOnDoneButton();
        await browser.wait(EC.invisibilityOf(objPolicy.btnDone));

    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Done button";
    }
});

Then('verify column values in Policy listing page', async function () {
    try {
        await browser.sleep(3000);
        try {
            await browser.wait(EC.visibilityOf(objPolicy.clmnPolicyName));
        }
        catch (error) {
            await console.log("Feature name : Policies ")
            await console.log(error)
            throw "Unable to verify column values in Policy listing page";
        }

        try {
            await browser.wait(EC.visibilityOf(objPolicy.clmnCreatedBy));
        }
        catch (error) {
            await console.log("Feature name : Policies ")
            await console.log(error)
            throw "'Column Created by' header is not found";
        }

        try {
            await browser.wait(EC.visibilityOf(objPolicy.clmnModifiedBy));
        }
        catch (error) {
            await console.log("Feature name : Policies ")
            await console.log(error)
            throw "'Column Modified' header is not found";
        }

        try {
            await browser.wait(EC.visibilityOf(objPolicy.clmnPrecednece));
        }
        catch (error) {
            await console.log("Feature name : Policies ")
            await console.log(error)
            throw "'Column Precedence' header is not found";
        }

        try {
            await browser.wait(EC.visibilityOf(objPolicy.clmnStatus));
        }
        catch (error) {
            await console.log("Feature name : Policies ")
            await console.log(error)
            throw "'Column Status' header is not found";
        }
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not in Policy Listing page";
    }
});

Then('verify edit and delete icons in policy listing {string}', async function (PolicyName) {
    try {
        await browser.sleep(3000);
        objPolicy.mouseOverPolicyName(PolicyName);
        try {
            await browser.wait(EC.visibilityOf(objPolicy.icnEdit));
        }
        catch (error) {
            await console.log("Feature name : Policies ")
            await console.log(error)
            throw "Edit icon is not found in Policy listing page";
        }
        try {
            await browser.wait(EC.visibilityOf(objPolicy.icnDelete));
        }
        catch (error) {
            await console.log("Feature name : Policies ")
            await console.log(error)
            throw "Delete icon is not found in Policy listing page";
        }
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to Mouse hover on Policy Name";
    }
});

When('{string} clicks on policy {string}', async function (userrole, policyname) {
    try {
        await objPolicy.clickOnPolicy(policyname);
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Policy Name";
    }
});

When('click on cancel button', async function () {
    try {
        await browser.sleep(3000);
        await browser.executeScript('window.scrollTo(0,800);').then(async function () {
        });
        await browser.wait(EC.visibilityOf(objPolicy.btnCancel));
        await objPolicy.clickCancelButton();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Cancel Button";
    }
});

Then('{string} verifies Add policy button', async function (userrole) {
    try {
        objPolicy.btnAddPolicy.isPresent().then(function (elm) {
            if (elm) {
            } else {
            }
        })
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "";
    }
});

When('Admin clicks on plus icon', async function () {
    try {
        await objPolicy.clickOnPlusIcon();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Plus Icon";
    }
});

When('Admin clicks Add New Rule button', async function () {
    try {
        await objPolicy.clickAddNewRule();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Add New Rule Button";
    }
});

When('Admin clicks on edit policy button', async function () {
    try {
        await browser.wait(EC.visibilityOf(objPolicy.btnEditPolicy), 10000);
        await objPolicy.clickOnEditPolicy();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Edit Policy Button";
    }
});

When('Admin clicks on Update Deatils', async function () {
    try {
        await objPolicy.clickOnUpdateDetails();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Update Deatils Button";
    }
});

When('Admin clicks on Update Details', async function () {
    try {
        await objPolicy.clickOnUpdateDetails();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Update Deatils Button";
    }
});

When('clicks on Next button', async function () {
    try {
        await objPolicy.clickOnNext();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Next Button";
    }
});

When('clicks on Edit rule icon', async function () {
    try {
        await browser.sleep(5000);
        await browser.wait(EC.visibilityOf(objPolicy.icnEditRule));
        await objPolicy.clickEditRuleIcon();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Edit Rule Icon";
    }
});

When('click on Update rule button', async function () {
    try {
        await objPolicy.clickOnUpdateRuleButton();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Update Rule Button";
    }
});

When('clicks on active rule toggle button', async function () {
    try {
        await objPolicy.clickOnActiveRule();
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Active Rule Toggle Button";
    }
});

When('clicks on status toggle button {string}', async function (Policyname) {
    try {
        await objPolicy.UpdateStatusToggleButton(Policyname);
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to click on Status Toggle Button";
    }
});

When('Admin enters {string} value as {string}', async function (policy, value) {
    try {
        await browser.sleep(3000);
        await objPolicy.enterValue(value);
    }
    catch (error) {
        await console.log("Feature name : Policies ")
        await console.log(error)
        throw "User is not able to select Value";
    }
});

