import { element, by, browser, protractor } from "protractor";
import chai from "chai";
var EC = browser.ExpectedConditions;
var expect = chai.expect;
export class DisplayConfiguration {
  lnkConfiguration = element(by.xpath('//a[text()="Configuration"]'))
  lnkDisplayConfiguration = element(by.xpath('//div[text()="Alert Console Display Configuration"]'))
  lnkPrimaryColumns = element(by.xpath('//span[text()="PRIMARY COLUMNS"]'))
  lnkSecondaryColumns = element(by.xpath('//span[text()="SECONDARY COLUMNS ( MORE SECTION )"]'))
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
  txtDisplayNameSource = element(by.xpath('//span[text()="source"]//following::input[@type="text"]'));
  //ms 5 test cases

  lnkExternalTeams = element(by.xpath("//div[text()='External Teams']"));
  btnChooseSourceDdp = element(by.xpath("//span[contains(@class,'smo-dropdown-trigger-icon smo-clickable')]"));
  btnChooseGroupDdp = element(by.xpath("//label[text()='Choose a Group']"));
  btnImportGroup = element(by.xpath("//span[text()='Import']"));
  btnSort = element(by.xpath("//span[@class='sort-icon-span']"));
  btnRefresh = element(by.xpath("//span[@class='smo-btn-icon-col d-flex align-items-center smo smo-refresh-alt btn-icon smo-clickable ng-star-inserted']"));
  btnSearch = element(by.xpath("//input[@placeholder='Search']"));


  async splittingTickets(checkBoxNumber) {
    await element(by.xpath("//span[text()='Correlated Alerts']//following::span[text()='Alert Name']//following::div[@class='smo-chkbox smo-widget'][" + checkBoxNumber + "]")).click();
  }
  async clickOnExternalTeams() {
    await browser.wait(EC.visibilityOf(this.lnkExternalTeams), 100000);
    await browser.wait(EC.presenceOf(this.lnkExternalTeams), 100000);
    await browser.wait(EC.elementToBeClickable(this.lnkExternalTeams), 100000);
    await this.lnkExternalTeams.click();
  }
  async clickOnChooseGroup() {
    await this.btnChooseGroupDdp.click();
  }
  async clickOnAllGroup() {
    await element(by.xpath("//label[text()='All Groups']")).click();
  }
  async searchForGroup(GroupName) {
    await element(by.xpath("//label[text()='Choose a Group']//following::input[@placeholder='Search']")).sendKeys(GroupName);
  }
  async searchForAllGroup(GroupName) {
    await element(by.xpath("//label[text()='All Groups']//following::input[@placeholder='Search']")).sendKeys(GroupName);
  }

  async selectSource(Source) {
    await this.btnChooseSourceDdp.click();
    await element(by.xpath('//span[text()="' + Source + '"]')).click();
  }
  async selectGroup(Group) {
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="' + Group + '"]'))), 100000);
    await browser.wait(EC.presenceOf(element(by.xpath('//span[text()="' + Group + '"]'))), 100000);
    await element(by.xpath('//span[text()="' + Group + '"]')).click();
  }
  async clickOnRefresh() {
    await this.btnRefresh.click();
  }
  async clickOnSort() {
    await this.btnSort.click();
  }
  async verifyRefreshButton() {
    await browser.wait(EC.visibilityOf(this.btnRefresh), 100000);
  }
  async verifySortButton() {
    await browser.wait(EC.visibilityOf(this.btnSort), 100000);
  }

  async verifySearchField() {
    await browser.wait(EC.visibilityOf(element(by.xpath("//input[@placeholder='Search']"))), 100000);
  }
  async clickOnImportGroup() {
    await browser.wait(EC.visibilityOf(this.btnImportGroup), 50000);
    await browser.wait(EC.presenceOf(this.btnImportGroup), 50000);
    await browser.wait(EC.elementToBeClickable(this.btnImportGroup), 50000);
    await this.btnImportGroup.click()
  }
  async verifyingFields(FieldName) {
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="' + FieldName + '"]'))), 100000);
  }


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
    await element(by.xpath('//span[text()="' + FieldName + '"]')).click();
  }


  async getDisplayOrder(DisplayOrder) {
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

    await element(by.xpath('//span[text()="nodeName"]//following::td[@class="display-order primary-head"]')).getText().then(function (text) {
      expect(text).to.include(DisplayOrder);
      console.log(text)
    });

  }
}