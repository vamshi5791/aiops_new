import { element, by, browser, protractor } from "protractor";
import chai from "chai";
var EC = browser.ExpectedConditions;
var expect = chai.expect; 
export class DisplayConfiguration {
  lnkConfiguration = element(by.xpath('//a[text()="Configuration"]'))
  lnkDisplayConfiguration = element(by.xpath('//div[text()="Alert Console Display Configuration"]'))
  lnkPrimaryColumns =  element(by.xpath('//span[text()="PRIMARY COLUMNS"]'))
  lnkSecondaryColumns =  element(by.xpath('//span[text()="SECONDARY COLUMNS ( MORE SECTION )"]'))
  btnLeftArrow = element(by.className('smo-btn-icon-col d-flex align-items-center smo smo-chevron-left-alt icon-size smo-clickable ng-star-inserted'))
  btnRightArrow = element(by.className('smo-btn-icon-col d-flex align-items-center smo smo-chevron-right-alt icon-size smo-clickable ng-star-inserted'))
  btnUpArrowPrimaryColumns = element(by.xpath('//span[@class="smo-btn-icon-col d-flex align-items-center smo smo-chevron-left-alt icon-size smo-clickable ng-star-inserted"]//following::button'))
  btnDownArrowPrimaryColumns = element(by.xpath('//span[text()="SECONDARY COLUMNS ( MORE SECTION )"]//preceding::span[@class="smo-btn-icon-col d-flex align-items-center smo smo-expand-more-alt icon-size smo-clickable ng-star-inserted"]'))
  btnUpArrowSecondaryColumns = element(by.xpath('//span[text()="SECONDARY COLUMNS ( MORE SECTION )"]//following::span[@class="smo-btn-icon-col d-flex align-items-center smo smo-expand-less-alt icon-size smo-clickable ng-star-inserted"]'))
  btnDownArrowSecondaryColumns = element(by.xpath('//span[text()="SECONDARY COLUMNS ( MORE SECTION )"]//following::span[@class="smo-btn-icon-col d-flex align-items-center smo smo-expand-more-alt icon-size smo-clickable ng-star-inserted"]'))
  btnCancel = element(by.xpath('//span[text()="Cancel"]'));
  btnSaveConfiguration = element(by.className('smo-button smo-widget smo-state-default smo-button-default smo-corner-all smo-button-ms smo-button-text-only smo-state-disabled'));
  btnSaveConfigurationEnabled = element(by.xpath('//smo-button[@label="Save Configuration"]'));
  txtAlertMessage = element(by.xpath('//span[text()="alertMessage"]//following::input[@type="text"]'));
  txtAlertID = element(by.xpath('//span[text()="alertID"]'));
  txtModel = element(by.xpath('//span[text()="alertName"]'));
  txtSource = element(by.xpath('//span[text()="source"]'));
  txtAction = element(by.xpath('//span[text()="action"]'));
  txtIpAddress = element(by.xpath('//span[text()="ipAddress"]'));
  txtAlertMetric = element(by.xpath('//span[text()="alertMetric"]'));
  txtTicketNumber = element(by.xpath('//span[text()="ticketNumber"]'));
  txtElapsedTime = element(by.xpath('//span[text()="elapsedTime"]'));
  txtAlertCreatedTime = element(by.xpath('//span[text()="alertCreatedTime"]'));
  txtAlertModifiedTime = element(by.xpath('//span[text()="alertModifiedTime"]'));
  txtAlertIDDisplayName = element(by.xpath('//span[text()="alertID"]//following::input'));
  txtObjectName = element(by.xpath('//span[text()="objectName"]'));
  txtAlertIdInSecondaryColumn = element(by.xpath('//span[text()="SECONDARY COLUMNS ( MORE SECTION )"]//following::span[text()="alertID"]'));
  txtDisplayNameSource =  element(by.xpath('//span[text()="source"]//following::input[@type="text"]'));
  
  
  async clickOnConfigurationTab() {
    await this.lnkConfiguration.click();
  }
  async clickOnDisplayConfigurationTab() {
    await this.lnkDisplayConfiguration.click();
  }
  async leftArrow() {
    await this.btnLeftArrow.click();
  }
  async rightArrow() {
    await this.btnRightArrow.click();
  }
  async clickOnUpArrowPrimaryColumns() {
    await this.btnUpArrowPrimaryColumns.click();
  }
  async clickOnDownArrowPrimaryColumns() {
    await this.btnDownArrowPrimaryColumns.click();
  }
  async clickOnUpArrowSecondaryColumns() {
    await this.btnUpArrowSecondaryColumns.click();
  }
  async clickOnDownArrowSecondaryColumns() {
    await this.btnDownArrowSecondaryColumns.click();
  }
 
  async buttonCancel() {
    await this.btnCancel.click();
  }
  async buttonSaveConfiguration() {
    await this.btnSaveConfigurationEnabled.click();
  }
  
  async enterAlertMessage(AlertMessage) {
    await this.txtAlertMessage.clear();
    await this.txtAlertMessage.sendKeys(AlertMessage);
  }
  async getAlertMessageText(AlertMessage) {
    await this.txtAlertMessage.getText().then(async function (textAlertMessage) {
      await expect(textAlertMessage).to.include(AlertMessage);
      await console.log(textAlertMessage)
    });
  }

  async enterDisplayNameSource(Source) {
    await this.txtDisplayNameSource.clear();
    await this.txtDisplayNameSource.sendKeys(Source);
  }
  async getSourceDisplayNameText(Source) {
    await this.txtDisplayNameSource.getText().then(async function (textSource) {
      await expect(textSource).to.include(Source);
      await console.log(textSource)
    });
  }
  async getSuccessMessageText(Toaster) {
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
      expect(text).to.include(Toaster);
    });
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  }


  async verifyAlertIdDisplayName(AlertMessage) {
   var el = element(by.xpath('//span[text()="alertID"]//following::input'));
   await expect(el.getAttribute('readonly')).toEqual('readonly');
  }
  async clickOnFieldName(FieldName) {
    await element(by.xpath('//span[text()="'+FieldName+'"]')).click();
  }
 

async getDisplayOrder(DisplayOrder) {
  await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

  await element(by.xpath('//span[text()="nodeName"]//following::td[@class="display-order primary-head"]')).getText().then(function (text) {
    expect(text).to.include(DisplayOrder);
     console.log(text)
  });
   
}
}