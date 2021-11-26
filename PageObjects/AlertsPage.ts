import { ElementFinder, element, by, promise, browser, protractor } from "protractor";
import { support } from "../support/support";
import chai from "chai";
var EC = browser.ExpectedConditions;
var drp = new support();
var expect = chai.expect;
export class AlertsPage {


  //Alert console page elements
  btnSelectAlerts = element(by.xpath('//a[text()="Alerts"]'));
  btnSearch = element(by.xpath('//input[@placeholder="Search"]'))
  btnAdvanceFilter = element(by.className('filter smo smo-filter'));
  drpSource = element(by.xpath('//label[text()="Source"]'));
  drpAlertState = element(by.xpath('//label[text()="Alert State"]'));
  txtResource = element(by.name('resourceName'));
  btnSaveFilter = element(by.className('d-flex justify-content-end save-link ng-star-inserted'));
  txtInLast = element(by.name('inLast'));
  drpSelectDurationType = element(by.xpath('//label[text()="Select"]'));
  txtFilterName = element(by.xpath('//input[@name="name"]'));
  txtFilterDescription = element(by.xpath('//textarea[@name="description"]'));
  drpSavedFilter = element(by.xpath('//label[text()="Saved Filter"]'));
  btnRemoveAll = element(by.xpath('//a[text()="Remove All"]'));
  btnRemoveSourceCondition = element(by.xpath('//div[text()="State : "]//preceding::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'));
  btnRemoveStateCondition = element(by.xpath('//div[text()="State : "]//following::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'));
  btnRemoveOkCondition = element(by.xpath('//span[text()="Ok"]//following::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'));
  btnRemoveWarningCondition = element(by.xpath('//span[text()="Ok"]//preceding::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'));

  //Advanced filter section page elements
  chkMakeAsDefault = element(by.xpath('//span[text()="Make As Default"]//preceding::div[@class="smo-widget smo-corner-all smo-state-default smo-chkbox-box smo-chkbox-sm"]'));
  btnEditSavedFilter = element(by.className('mr-3 smo smo-edit ng-star-inserted'));
  btnDeleteSavedFilter = element(by.className('smo smo-trash-alt-regular ng-star-inserted'));
  btnApply = element(by.xpath('//span[text()="Apply"]'));
  btnSave_Apply = element(by.xpath('//span[text()="Save and Apply"]'));
  btnUpdateAndApply = element(by.xpath('//span[text()="Update and Apply"]'));
  btnYesConfirmation = element(by.xpath('//span[text()="Yes"]'));
  txtNoDataAvailable = element(by.xpath('//span[text()="No data available"]'));
  txtPopUp = element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'));
  btnCancel = element(by.className('smo-button smo-widget smo-state-default smo-button-default smo-corner-all smo-button-ms smo-button-text-only smo-button-transparent smo-button-transparent-default smo-button-transparent-ms'));
  btnCloseChip = element(by.className('smo smo-close-black-alt filter-result-icon-sm'));
  drpFilterBySeverity = element(by.xpath('//span[@class="filter smo smo-filter"]//preceding::span[@class="smo-multiselect-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon"]'));
  txtOkFilterBySeverity = element(by.xpath('//span[text()="Ok"]'));
  txtWarningFilterBySeverity = element(by.xpath('//span[text()="Warning"]'));
  txtMinorFilterBySeverity = element(by.xpath('//span[text()="Minor"]'));
  txtMajorFilterBySeverity = element(by.xpath('//span[text()="Major"]'));
  txtInformationFilterBySeverity = element(by.xpath('//span[text()="Information"]'));
  txtCriticalFilterBySeverity = element(by.xpath('//span[text()="Critical"]'));
  txtAutoRefreshInEvery = element(by.xpath('//span[text()=" Auto-refresh in every "]//following::input'));
  btnAutoRefreshInEveryRightButton = element(by.className('smo-btn-icon-col d-flex align-items-center smo smo-check-black-alt smo-clickable ng-star-inserted'));
  txtSpinner = element(by.className('smo-progress-spinner-svg'));
  btnInfrastructure = element(by.xpath('//a[text()="Infrastructure"]'))
  txtRowsPerPage = element(by.xpath('//span[text()="Rows per page"]'));
  txtAdvancedFilters = element(by.xpath('//h3[text()="Advanced Filters"]'));
  txtSourceAndResources = element(by.xpath('//h4[text()="Source and Resources"]'));
  txtStateAndStatus = element(by.xpath('//h4[text()="State and Status"]'));
  txtDateAndTime = element(by.xpath('//h4[text()="Date and Time"]'));

  btnselectConfiguration = element(by.xpath('//a[text()="Configuration"]'));
  btnDownloadAlert = element(by.xpath('//span[@class="smo smo-download cursor-pt ng-star-inserted"]'))
  btnAlertSeverityDpn = element(by.xpath('//label[text()="Alert Severity"]'))
  btnSelectWarning = element(by.xpath('//span[text()="Warning"]'))
  txtInformation = element(by.xpath('//span[text()="Information"]'))
  btnRemoveOkSeverity = element(by.xpath('//span[text()="Ok"]//following::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'))
  btnRemoveWarningSeverity = element(by.xpath('//span[text()="Warning"]//following::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'))
  btnRemoveSolarwinds = element(by.xpath('//span[text()="Solarwinds"]//following::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'))
  btnMarkAsDefault = element(by.xpath('//span[@smotooltip="Mark as default"]'))

  // ------------------Milestone3------------ 

  btnState = element(by.xpath('//span[text()="State/Action"]//following::span[@class="smo-dropdown-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon"]'))
  btnAcknowledge = element(by.xpath('//span[text()="Acknowledge"]'))
  btnHold = element(by.xpath('//span[text()="Hold"]'));
  btnResolve = element(by.xpath('//span[text()="Resolve"]'));
  btnClose = element(by.xpath('//span[text()="Close"]'));
  txtTicket = element(by.xpath('//span[@class="cursor-pt ng-star-inserted"]'))
  txtShortDescription = element(by.xpath('//div[@class="ticket-title"]'))
  btnCluster = element(by.xpath('//span[@class="cluster-badge-icon smo smo-expand-more-alt ng-star-inserted"]'))
  btnCheckbox = element(by.xpath('//span[text()="Correlated Alerts"]//following::div[@class="smo-widget smo-corner-all smo-state-default smo-chkbox-box smo-chkbox-sm"]'))
  btncancelInAdvanceFilter = element(by.xpath('//span[@class="d-flex justify-content-end align-button"]//following::span[text()="Cancel"]'))
  btnAlertscheckbox = element(by.xpath('//div[@class="smo-widget smo-corner-all smo-state-default smo-chkbox-box smo-chkbox-sm"]'))
  btnThreedots = element(by.xpath('//span[@class="smo smo-more-vert-24px ellipsis-icon font-14 cursor-pt secondary-color default-icon context-menu-icon ng-star-inserted"]'))
  btnSelectMajor = element(by.xpath('//span[text()="Major"]'))


  // -------------------Assign Module -----------------------

  btnStatusDropdown = element(by.className('button-icon button-icon-sm'));
  btnAssign = element(by.xpath('//span[text()="Assign"]'))
  btnActive = element(by.xpath('//span[text()="Active"]'))
  btnRefresh = element(by.className('smo-btn-icon-col d-flex align-items-center smo smo-refresh-alt btn-icon smo-clickable ng-star-inserted'));
  btnAssigned = element(by.xpath('//label[text()="assigned"]'))
  btnAlertCheckBox = element(by.xpath('//smo-check-box[@class="ng-untouched ng-pristine ng-valid"]'))
  txtClosingComment = element(by.xpath('//span[text()="Please enter the closure note"]//following::textarea'))
  btnAddClosureComment = element(by.xpath('//span[text()="Add"]'))
  btnClosureNoteTab = element(by.xpath('//span[text()="Closure Notes"]'))
  btnThreeDotsAlertPage = element(by.xpath('//div[@class="smo-widget smo-corner-all smo-state-default smo-chkbox-box smo-chkbox-sm"]//following::span'))
  btnSelectAllCheckBox = element(by.xpath('//tr[@class="alert-list-row dropdown-hover ng-star-inserted"]//following::div[@class="smo-widget smo-corner-all smo-state-default smo-chkbox-box smo-chkbox-sm"]'))
  btnAssignButtonOnPopUp = element(by.xpath("//smo-button[@label='Assign']//button"))
  btnAutoRefresh = element(by.className("smo-btn-icon-col d-flex align-items-center smo smo-refresh-alt btn-icon smo-clickable ng-star-inserted"))
  nextArrayButton = element(by.xpath('//a[@class="smo-paginator-next smo-paginator-element smo-state-default smo-corner-all smo-paginator-next-ms"]'))
  btnDownloadIcon = element(by.className('smo smo-download cursor-pt ng-star-inserted'));
  btnDownloadAlertReport = element(by.className('smo smo-download-alt download-icon cursor-pointer'));
  txtInformationStripColour = element(by.xpath("//div[contains(@class,'highlight bg-information')]"));
  txtMajorStripColour = element(by.xpath("//div[contains(@class,'highlight bg-major')]"));
  txtCriticalStripColour = element(by.xpath("//div[contains(@class,'highlight bg-critical')]"));
  txtWarningStripColour = element(by.xpath("//div[contains(@class,'highlight bg-warning')]"));
  // txtUnknownStripColour = element(by.xpath("//div[contains(@class,'highlight bg-major')]"));
  btnClusterCount = element(by.xpath("//span[contains(@class,'cluster-badge-icon smo')]"));
  btnCancelInClustetPopup = element(by.className("smo-overlaypanel-close-icon smo smo-close-black-alt"));
  chkIncludeToday = element(by.className("smo-widget smo-corner-all smo-state-default smo-chkbox-box smo-chkbox-sm"));
  txtAssigned = element(by.xpath("//label[text()='assigned']"));
  txtClosed = element(by.xpath('//div[text()="closed"]'))
  btnCreateTicket = element(by.xpath('//span[text()="Correlated Alerts"]//following::span[text()="Create Ticket"]'))
  btnconfirm = element(by.xpath('//span[text()="Confirm"]'))
  btnFirstAlert = element(by.xpath('//span[text()="Alert Id"]//following::div[@class="smo-widget smo-corner-all smo-state-default smo-chkbox-box smo-chkbox-sm"]'))
  btnAllAlerts = element(by.xpath('//span[text()="Correlated Alerts"]//following::smo-check-box[@class="ng-untouched ng-pristine ng-valid ng-star-inserted"]'))

  // Mandatory indexes
  btnSecondAlert = element(by.xpath('//span[text()="Alert Id"]//following::div[@class="smo-widget smo-corner-all smo-state-default smo-chkbox-box smo-chkbox-sm"][1]'))
  btnBaseAlert = element(by.xpath('//span[text()="Alert Id"]//following::div[@class="smo-widget smo-corner-all smo-state-default smo-chkbox-box smo-chkbox-sm"][4]'))
  btnSecondClusterCount = element(by.xpath("//span[contains(@class,'cluster-badge-icon smo')][1]"));
  txtTicketNew = element(by.xpath("(//span[@class='text-font-dark text-with-bold'])[3]"))
  txtBaseAlert = element(by.xpath("(//span[@type='circle'])[2]"))

  // M4

  btnClusterType = element(by.xpath('//label[text()="Cluster Type"]'));
  btnTicketed = element(by.xpath('//span[text()="Ticketed"]'));
  btnNonTicketed = element(by.xpath('//span[text()="Non Ticketed"]'));
  btnSelectAll = element(by.xpath('//span[text()="Select All"]'));
  btnSolarwinds = element(by.xpath('//span[text()="Solarwinds"]'));
  btnVerba = element(by.xpath('//span[text()="Verba"]'));
  btnCritical = element(by.xpath('//span[text()="Critical"]'));
  txtAutoRefresh = element(by.xpath('//input[@class="time-interval smo-inputtext numberField alert-search smo-input-padding smo-input-padding-sm ng-pristine ng-valid ui-inputtext ui-corner-all ui-state-default smo-widget smo-state-filled border-radius-sm smo-inputtext-small ng-touched"]'))

  async ClusterType() {
    await this.btnClusterType.click();
  }

  async Ticketed() {
    await this.btnTicketed.click();
  }

  async NonTicketed() {
    await this.btnNonTicketed.click();
  }

  async SelectAll() {
    await this.btnSelectAll.click();
  }

  async Solarwinds() {
    await this.btnSolarwinds.click();
  }

  async Verba() {
    await this.btnVerba.click();
  }
  async Critical() {
    await this.btnCritical.click();
  }

  async Source() {
    await this.drpSource.click();
  }
  async  AutoRefresh(Minutes) {
    await this.drpSource.sendKeys(Minutes);
  }














  async SecondClusterCount() {
    await this.btnSecondClusterCount.click();
  }
  async confirm() {
    await this.btnconfirm.click();
  }
  async CreateTicket() {
    await browser.wait(EC.visibilityOf(this.btnCreateTicket), 60000);
    await browser.wait(EC.elementToBeClickable(this.btnCreateTicket), 60000);
    await this.btnCreateTicket.click();
  }
  async FirstAlert() {
    await this.btnFirstAlert.click();
  }
  async SecondAlert() {
    await this.btnSecondAlert.click();
  }
  async BaseAlert() {
    await this.btnBaseAlert.click();
  }
  async AllAlerts() {
    await this.btnAllAlerts.click();
  }
  async clickOnIncludeToday() {
    await this.chkIncludeToday.click();
  }
  async Closed() {
    await this.txtClosed.click();
  }
  async clickOnDownloadAlertReport() {
    await this.btnDownloadAlertReport.click();
  }

  async clickOnCancelInClustetPopup() {
    await this.btnCancelInClustetPopup.click();
  }
  async clickOnClusterCount() {
    await this.btnClusterCount.click();
  }
  async clickOnDownloadIcon() {
    await browser.wait(EC.elementToBeClickable(this.btnDownloadIcon), 30000);
    await browser.wait(EC.presenceOf(this.btnDownloadIcon), 30000);
    await this.btnDownloadIcon.click();
  }

  async clickOnRemoveOkCondition() {
    await this.btnRemoveOkCondition.click();
  }
  async clickOnRemoveWarningCondition() {
    await this.btnRemoveWarningCondition.click();
  }
  async clickOnOkFilterBySeverity() {
    await this.txtOkFilterBySeverity.click();
  }
  async clickOnWarningFilterBySeverity() {
    await this.txtWarningFilterBySeverity.click();
  }
  async clickOnFilterBySeverity() {
    await this.drpFilterBySeverity.click();
  }
  async selectAlerts() {
    await browser.wait(EC.elementToBeClickable(element(by.xpath('//a[text()="Alerts"]'))), 60000);
    await element(by.xpath('//a[text()="Alerts"]')).click();
  }

  async Alert_Search(alertName: string) {
    await browser.wait(EC.elementToBeClickable(this.btnSearch), 60000);
    await this.btnSearch.sendKeys(alertName);
    await browser.sleep(2000)
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    await browser.sleep(3000)
  }
  async AdvanceFilter() {
    await this.btnAdvanceFilter.click();
  }
  async SelectSource(Source) {
    await browser.wait(EC.elementToBeClickable(this.drpSource), 60000);
    await this.drpSource.click()
    await drp.selectByVisibleText(Source);
    await this.drpSource.click()
  }
  async AlertState(Source) {
    await this.drpAlertState.click();
    await drp.selectByVisibleText(Source);
    await this.drpAlertState.click();
  }
  async ResourceName(ResourceName: string) {
    await this.txtResource.sendKeys(ResourceName);
  }
  async enterInLastNumber(InLast: string) {
    await this.txtInLast.sendKeys(InLast);
  }
  async selectDurationType(DurationType) {
    await this.drpSelectDurationType.click();
    await drp.selectByVisibleText(DurationType);
  }
  async SaveFilter() {
    await this.btnSaveFilter.click();
  }
  async FilterName(FilterName: string) {
    await this.txtFilterName.sendKeys(FilterName);
  }

  async FilterDescription(FilterDescription: string) {
    await this.txtFilterDescription.sendKeys(FilterDescription);
  }
  async selectSavedFilterFromAlertConsole(SavedFilter) {
    await this.drpSavedFilter.click();
    await drp.selectByVisibleText(SavedFilter);
  }
  async selectRemoveAllConditions() {
    await this.btnRemoveAll.click();
  }
  async removeSourceCondition() {
    await this.btnRemoveSourceCondition.click();
  }
  async removeStateCondition() {
    await this.btnRemoveStateCondition.click();
  }
  async editSavedFilter() {
    await this.btnEditSavedFilter.click();

  }
  async enterAutoRefreshInEvery(AutoRefreshValue) {
    await this.txtAutoRefreshInEvery.sendKeys(AutoRefreshValue);
  }
  async clickOnRefreshInEveryRightButton() {
    await this.btnAutoRefreshInEveryRightButton.click();
  }
  async clickOnMakeAsDefault() {
    await this.chkMakeAsDefault.click();
  }
  async Apply() {
    await this.btnApply.click();
  }
  async Save_Apply() {
    await this.btnSave_Apply.click();
  }
  async clickOnUpdateAndApply() {
    await this.btnUpdateAndApply.click();
  }
  async clickOnYes() {
    await this.btnYesConfirmation.click();
  }
  async clickOnCancelButton() {
    await this.btnCancel.click();
  }
  async getTestSource(TestSource) {
    await element(by.xpath('//div[text()="' + TestSource + '"]')).getText().then(async function (text) {
      await expect(text).to.include(TestSource);
    });
  }
  async getTicketNumber(TicketNumber) {
    await element(by.xpath('//div[text()="' + TicketNumber + '"]')).getText().then(async function (text) {
      await expect(text).to.include(TicketNumber);
    });
  }
  async getLastAlertTime(LastAlertTime) {
    await element(by.xpath('//div[text()="' + LastAlertTime + '"]')).getText().then(async function (text) {
      await expect(text).to.include(LastAlertTime);
    });
  }

  async getAlertName(AlertName) {
    await element(by.xpath('//span[text()="Alert Name"]')).getText().then(async function (text) {
      await expect(text).to.include(AlertName);
    });
  }

  async getAlertMetric(AlertMetric) {
    await element(by.xpath('//div[text()="' + AlertMetric + '"]')).getText().then(async function (text) {
      await expect(text).to.include(AlertMetric);
    });
  }
  async getFilterName(FilterName) {
    await element(by.xpath('//span[text()="' + FilterName + '"]')).getText().then(async function (textFilterName) {
      await expect(textFilterName).to.include(FilterName);
    });
  }


  async getDescription(Description) {
    await element(by.xpath('//div[text()="' + Description + '"]')).getText().then(async function (textDescription) {
      await expect(textDescription).to.include(Description);
    });
  }

  async getCreatedTime(CreatedTime) {
    await element(by.xpath('//b[text()="' + CreatedTime + ' "]')).getText().then(async function (textCreatedTime) {
      await expect(textCreatedTime).to.include(CreatedTime);
    });
  }
  async verifyToaster(ToastMessage) {
    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(async function (text) {
      await expect(text).to.include(ToastMessage);
    });
  }

  async MarkAsDefault() {
    await this.btnMarkAsDefault.click();
  }
  async SelectFilter(SelectFilter: string) {
    await element(by.xpath('//span[text()="' + SelectFilter + '"]')).click();
  }
  async SelectWarning() {
    await this.btnSelectWarning.click();
  }
  async FilterBySeverity() {
    await browser.sleep(2000);
    await browser.wait(EC.elementToBeClickable(this.drpFilterBySeverity), 60000);
    await this.drpFilterBySeverity.click();
  }
  async RemoveOkSeverity() {
    await this.btnRemoveOkSeverity.click();
  }
  async RemoveWarningSeverity() {
    await this.btnRemoveWarningSeverity.click();
  }
  async RemoveSolarwinds() {
    await browser.wait(EC.presenceOf(this.btnRemoveSolarwinds), 60000);
    await browser.wait(EC.visibilityOf(this.btnRemoveSolarwinds), 60000);
    await browser.wait(EC.elementToBeClickable(this.btnRemoveSolarwinds), 60000);
    await this.btnRemoveSolarwinds.click();
  }

  async Information() {
    await this.txtInformation.click();
  }
  async AlertSeverityDpn() {
    await browser.sleep(1000);
    await browser.wait(EC.elementToBeClickable(this.btnAlertSeverityDpn), 60000);
    await this.btnAlertSeverityDpn.click();
  }
  async SavedFilter(SavedFilter: string) {
    await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[text()="' + SavedFilter + '"]'))), 60000);
    await element(by.xpath('//span[text()="' + SavedFilter + '"]')).click();
  }
  async Infrastructure() {
    await browser.wait(EC.elementToBeClickable(this.btnInfrastructure), 60000);
    await this.btnInfrastructure.click();

  }

  async Ticket() {
    await this.txtTicket.click();
  }
  async clickOnUpdateStatus(Status) {
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="' + Status + '"]'))), 50000);
    await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[text()="' + Status + '"]'))), 50000);
    await element(by.xpath('//span[text()="' + Status + '"]')).click();
  }
  async Acknowledge() {
    await this.btnAcknowledge.click();
  }
  async State() {
    await this.btnState.click();
  }

  async Alertscheckbox() {
    await browser.wait(EC.elementToBeClickable(this.btnAlertscheckbox), 50000);
    await browser.wait(EC.presenceOf(this.btnAlertscheckbox), 50000);
    await this.btnAlertscheckbox.click();
  }
  async Threedots() {
    await this.btnThreedots.click();
  }
  async SelectMajor() {
    await this.btnSelectMajor.click();
  }

  // -------------------Assign Module -----------------------


  async clickOnAutoRefresh() {
    await this.btnAutoRefresh.click();
  }
  async clickOnAssignButtonOnPopUp() {
    await this.btnAssignButtonOnPopUp.click();
  }
  async clickOnThreeDotsAlertPage() {
    await this.btnThreeDotsAlertPage.click();
  }
  async clickOnTicketNumber(TicketNumber: string) {
    await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[text()="' + TicketNumber + '"]'))), 50000);
    await browser.wait(EC.presenceOf(element(by.xpath('//span[text()="' + TicketNumber + '"]'))), 50000);
    await element(by.xpath('//span[text()="' + TicketNumber + '"]')).click();
  }
  async clickOnStatusDropdown(AssignOption: string) {
    await this.btnStatusDropdown.click();
    await element(by.xpath('//div[text()="' + AssignOption + '"]')).click();
  }
  async selectGroup(value: string) {
    await browser.wait(EC.elementToBeClickable(element(by.xpath("//label[text()='Choose a Group*']//following::span"))), 50000);
    await element(by.xpath("//label[text()='Choose a Group*']//following::span")).click();
    await drp.selectByVisibleText(value);
  }
  async selectTeamMember(value: string) {
    await browser.wait(EC.elementToBeClickable(element(by.xpath("//label[text()='Choose a Team member*']//following::span"))), 50000);
    await element(by.xpath("//label[text()='Choose a Team member*']//following::span")).click();
    await drp.selectByVisibleText(value);
  }
  async clickOnAssignButton() {
    await browser.wait(EC.presenceOf(this.btnAssign), 50000);
    await browser.wait(EC.elementToBeClickable(this.btnAssign), 50000);
    await this.btnAssign.click();
  }
  async clickOnRefreshButton() {
    await this.btnRefresh.click();
  }
  async clickOnAssigned() {
    await this.btnAssigned.click();
  }

  async clickOnState(State) {
    await element(by.xpath('//div[text()="' + State + '"]')).click()
  }
  async clickOnAlertCheckBox() {
    await this.btnAlertCheckBox.click();
  }

  async enterClosingComment(Comment) {
    await this.txtClosingComment.sendKeys(Comment);
  }

  async clickOnAddClosureComment() {
    await this.btnAddClosureComment.click();
  }
  async clickOnClosureNoteTab() {
    await this.btnClosureNoteTab.click();
  }
  async selectNoOfRows(NoOfRows) {
    await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[text()="Rows per page"]//following::smo-dropdown'))), 50000);
    await browser.wait(EC.presenceOf(element(by.xpath('//span[text()="Rows per page"]//following::smo-dropdown'))), 50000);
    await element(by.xpath('//span[text()="Rows per page"]//following::smo-dropdown')).click();
    await browser.wait(EC.elementToBeClickable(element(by.xpath('//span[text()="' + NoOfRows + '"]'))), 50000);
    var myElement = element(by.xpath('//span[text()="' + NoOfRows + '"]'));
    await browser.executeScript("arguments[0].scrollIntoView();", myElement.getWebElement());
    await element(by.xpath('//span[text()="' + NoOfRows + '"]')).click();
  }
  async clickOnSelectAllCheckBox() {
    await this.btnSelectAllCheckBox.click();
  }
  async Cluster() {
    await this.btnCluster.click();
  }
  async allAlertsCheckboxInClusterPopup() {
    await this.btnCheckbox.click();
  }
  async cancel() {
    await this.btncancelInAdvanceFilter.click();
  }
}

