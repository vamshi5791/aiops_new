import { EALREADY } from "constants";
import { ElementFinder, element, by, promise, browser, protractor } from "protractor";
import { support } from "../support/support";
var EC = browser.ExpectedConditions;
var fs = require('fs');
var drp = new support();

export class PolicyObjects {

    // elements for Add Failure Policy

    lnkConfiguration = element(by.xpath('//a[text()="Configuration"]'));
    lnkAlertCorrelationPolicy = element(by.xpath('//div[text()="Alert Correlation Policy"]'));
    lnkAcknowledgementPolicy = element(by.xpath('//div[text()="Acknowledgement Policy"]'));
    lnkRecoveryPolicy = element(by.xpath('//div[text()="Recovery Policy"]'));
    lnkFailurePolicy = element(by.xpath('//div[text()="Failure Policy"]'));
    btnAddPolicy = element(by.xpath('//div[text()=" Add Policy "]'));
    icnPlus = element(by.xpath('//span[@class="smo-btn-icon-col d-flex align-items-center smo smo-add-new smo-clickable ng-star-inserted"]'));


    drpdwnDefaultOperatorValue = element(by.xpath('//label[text()="EQUALS"]'));
    drpdwnOptEquals = element(by.xpath('//li[@aria-label="EQUALS"]'));
    drpdwnOptContains = element(by.xpath('//li[@aria-label="CONTAINS"]'));
    drpdwnOptStartswith = element(by.xpath('//li[@aria-label="STARTS WITH"]'));
    drpdwnOptEndswith = element(by.xpath('//li[@aria-label="ENDS WITH"]'));

    txtPolicyName = element(by.xpath('//input[@label="Policy Name *"]'));
    txtPrecedence = element(by.xpath('//input[@label="Precedence *"]'));
    drpdwnAttribute = element(by.xpath('//label[text()="Operator *"]//preceding::span[@class="smo-dropdown-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon"]'));
    drpdwnOperator = element(by.xpath('//label[text()="Operator *"]//following::span[@class="smo-dropdown-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon"]'));
    drpdwnValue = element(by.xpath('//label[text()="Value *"]//following::span[@class="smo-dropdown-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon"]'));
    btnSaveandAddRule = element(by.xpath('//span[text()="Save and Add Rule"]'));


    tostMessage = element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'));
    txtRulename = element(by.xpath('//input[@label="Rule Name *"]'));

    tglbtnActiveRule = element(by.xpath('//div[text()="Activate Policy"]//preceding::span[@class="smo-inputswitch-slider smo-inputswitch-slider-default smo-inputswitch-slider-default-sm input-switch-small"]'));
    btnSave = element(by.xpath('//span[text()="Save "]'));
    btnAddNewRule = element(by.xpath('//div[text()=" Add New Rule "]'));


    tglbtnActivePolicy = element(by.xpath('//div[text()="Activate Policy"]//following::smo-input-switch'));
    btnYes = element(by.xpath('//span[text()="Yes"]'));
    btnDone = element(by.xpath('//span[text()="Done"]'));

    clmnPolicyName = element(by.xpath('//th[text()=" Policy Name "]'));
    clmnCreatedBy = element(by.xpath('//th[text()=" Created By "]'));
    clmnModifiedBy = element(by.xpath('//th[text()=" Modified By "]'));
    clmnPrecednece = element(by.xpath('//th[text()=" Precedence "]'));
    clmnStatus = element(by.xpath('//th[text()=" Status "]'));

    icnEdit = element(by.xpath('//span[@class="smo smo-create-alt edit-icon cursor-pointer right-padding-20 ng-star-inserted"]'));
    icnDelete = element(by.xpath('//span[@class="smo smo-delete trash-icon cursor-pointer ng-star-inserted"]'));
    btnCancel = element(by.xpath('//span[text()="Cancel"]'));
    btnEditPolicy = element(by.xpath('//div[text()=" Edit Policy "]'));
    btnUpdateDetails = element(by.xpath('//span[text()="Update Details"]'));
    btnNext = element(by.xpath('//span[text()="Next"]'));
    icnEditRule = element(by.xpath('//span[@class="smo smo-create-alt edit-icon pr-2"]'));
    btnUpdateRule = element(by.xpath('//span[text()="Update Rule"]'));

    tgbbthStatus = element(by.xpath('//span[@class="smo-inputswitch-slider smo-inputswitch-slider-default smo-inputswitch-slider-default-sm input-switch-small"]'));

    txtValue = element(by.xpath('//input[@label="Value *"]'));





    async enterValue(Value) {
        await this.txtValue.clear();
        await this.txtValue.sendKeys(Value);
    }


    async clickOnProject(projectName) {
        await element(by.xpath('//h3[text()=" ' + projectName + ' "]')).click();
    }

    async configurationNavigation() {
        await this.lnkConfiguration.click();
    }
    async correlationPolicyNavigation() {
        await this.lnkAlertCorrelationPolicy.click();
    }
    async acknowledgementPolicyNavigation() {
        await this.lnkAcknowledgementPolicy.click();
    }
    async recoveryPolicyNavigation() {
        await this.lnkRecoveryPolicy.click();
    }
    async failurePolicyNavigation() {
        await this.lnkFailurePolicy.click();
    }

    async clickOnPolicyEditIcon(policyname) {
        await browser.actions().mouseMove(element(by.xpath('//b[text()="' + policyname + '"]'))).perform();
        await element(by.xpath('//b[text()="' + policyname + '"]//following::span[@class="smo smo-create-alt edit-icon cursor-pointer right-padding-20 ng-star-inserted"]')).click();
    }

    async clickOnPolicyDeleteIcon(policyname) {
        await browser.actions().mouseMove(element(by.xpath('//b[text()="' + policyname + '"]'))).perform();
        await element(by.xpath('//b[text()="' + policyname + '"]//following::span[@class="smo smo-delete trash-icon cursor-pointer ng-star-inserted"]')).click();
    }

    async clickOnAddPolicyButton() {
        await this.btnAddPolicy.click();
    }
    async enterPolicyName(policyName) {
        await this.txtPolicyName.clear();
        await this.txtPolicyName.sendKeys(policyName);
    }
    async enterPrecedence(precedence) {
        await this.txtPrecedence.clear();
        await this.txtPrecedence.sendKeys(precedence);
    }
    async selectAttribute(attibute) {
        await this.drpdwnAttribute.click();
        await drp.selectByVisibleText(attibute);
    }
    async selectValue(Value) {
        await this.drpdwnValue.click();
        await drp.selectByVisibleText(Value);
    }
    async clickSaveandAddRule() {
        await this.btnSaveandAddRule.click();
    }
    async enterRulename(Rulename) {
        await this.txtRulename.clear();
        await this.txtRulename.sendKeys(Rulename);
    }

    async mouseOverPolicyName(PolicyName) {
        await browser.actions().mouseMove(element(by.xpath('//b[text()="' + PolicyName + '"]'))).perform();
    }

    async clickSaveButton() {
        await this.btnSave.click();
    }
    async clickAddNewRule() {
        await this.btnAddNewRule.click();
    }

    async verifyActivePolicyStatus() {
        await this.tglbtnActivePolicy.isEnabled
    }

    async clickActivePolicyToggleButton() {
        await this.tglbtnActivePolicy.click();
    }

    async clickOnYesButton() {
        await this.btnYes.click();
    }
    async clickOnDoneButton() {
        await this.btnDone.click();
    }
    async clickCancelButton() {
        await this.btnCancel.click();
    }
    async clickOnPlusIcon() {
        await this.icnPlus.click();
    }
    async clickOnEditPolicy() {
        await this.btnEditPolicy.click();
    }
    async clickOnUpdateDetails() {
        await this.btnUpdateDetails.click();
    }
    async clickOnNext() {
        await this.btnNext.click();
    }
    async clickEditRuleIcon() {
        await this.icnEditRule.click();
    }
    async clickOnUpdateRuleButton() {
        await this.btnUpdateRule.click();
    }
    async clickOnPolicy(policyname) {
        await element(by.xpath('//b[text()="' + policyname + '"]')).click();
    }
    async clickOnAddNewRUle() {
        await this.btnAddNewRule.click();
    }
    async clickOnActiveRule() {
        await this.tglbtnActiveRule.click();
    }
    async clickOnStatusTogglebutton() {
        await this.tgbbthStatus.click();
    }
    async clickOnOperatorDropdown() {
        await this.drpdwnOperator.click();
    }
    async UpdateStatusToggleButton(Policyname: string) {
        await element(by.xpath('//b[text()="' + Policyname + '"]//following::span[@class="smo-inputswitch-slider smo-inputswitch-slider-default smo-inputswitch-slider-default-sm input-switch-small"]')).click();
    }
}
