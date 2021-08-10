import { ElementFinder, element, by, promise, browser, protractor } from "protractor";
import { support } from "../support/support";
import chai from "chai";
var drp = new support();
var expect = chai.expect;
export class AlertsPage {
 
  btnSelectAlerts = element(by.xpath('//a[text()="Alerts"]'));
  btnSearch = element(by.xpath('//input[@placeholder="Search"]'))
  btnAdvanceFilter = element(by.className('filter smo smo-filter'));
  drpSource = element(by.xpath('//label[text()="Source"]'));
  drpAlertState = element(by.xpath('//label[text()="Alert State"]'));
  txtResource = element(by.name('resourceName'));
  btnSaveFilter = element(by.className('d-flex justify-content-end save-link ng-star-inserted'));
  txtInLast = element(by.name('inLast'));
  drpSelectDurationType =  element(by.xpath('//label[text()="Select"]'));
  txtFilterName = element(by.xpath('//input[@name="name"]'));
  txtFilterDescription = element(by.xpath('//textarea[@name="description"]'));
  drpSavedFilter = element(by.xpath('//label[text()="Saved Filter"]'));
  btnRemoveAll = element(by.xpath('//a[text()="Remove All"]'));
  btnRemoveSourceCondition = element(by.xpath('//span[text()="State"]//preceding::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'));
  btnRemoveStateCondition = element(by.xpath('//span[text()="State"]//following::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'));
  btnRemoveOkCondition = element(by.xpath('//span[text()="Ok"]//following::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'));
  btnRemoveWarningCondition = element(by.xpath('//span[text()="Ok"]//preceding::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'));
  chkMakeAsDefault = element(by.xpath('//span[text()="Make As Default"]//preceding::div[@class="smo-widget smo-corner-all smo-state-default smo-chkbox-box smo-chkbox-sm"]'));
  btnEditSavedFilter = element(by.className('mr-3 smo smo-edit ng-star-inserted'));
  btnDeleteSavedFilter = element(by.className('smo smo-trash-alt-regular ng-star-inserted'));
  btnSavedFilter = element(by.xpath('//span[text()="IB"]'));
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


  //ajay

  btnselectConfiguration=element(by.xpath('//a[text()="Configuration"]'));
  btnDownloadAlert=element(by.xpath('//span[@class="smo smo-download cursor-pt ng-star-inserted"]'))
  btnAlertsPage=element(by.xpath('//a[text()="Alerts"]'))
  btnClickOnApply = element(by.xpath('//span[text()="Apply"]'));
  btnAlertSeverityDpn=element(by.xpath('//label[text()="Alert Severity"]'))
  btnSelectWarning=element(by.xpath('//span[text()="Warning"]'))
  txtWarning=element(by.xpath('//span[text()="Warning"]'))
  txtOk=element(by.xpath('//span[text()="Ok"]'))
  txtInformation=element(by.xpath('//span[text()="Information"]'))
  btnRemoveOkSeverity=element(by.xpath('//span[text()="Ok"]//following::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'))
  btnRemoveWarningSeverity=element(by.xpath('//span[text()="Warning"]//following::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'))
  btnRemoveSolarwinds=element(by.xpath('//span[text()="Solarwinds"]//following::span[@class="smo smo-close-black-alt filter-result-icon-sm"]'))
  btnMarkAsDefault=element(by.xpath('//span[@smotooltip="Mark as default"]'))
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
        await browser.sleep(5000)
        await element(by.xpath('//a[text()="Alerts"]')).click();
     
   
  }

  async Alert_Search(alertName: string) {
    await this.btnSearch.sendKeys(alertName);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();

  }
  async AdvanceFilter() {
    await this.btnAdvanceFilter.click();
  }
  async SelectSource(Source) {
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
  async savedFilterTitle(SavedFilter) {
    await element(by.xpath('//span[text()="'+SavedFilter+'"]')).click();
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
    async  enterAutoRefreshInEvery(AutoRefreshValue) {
    await this.txtAutoRefreshInEvery.sendKeys(AutoRefreshValue);
  }
  async  clickOnRefreshInEveryRightButton() {
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
    await element(by.xpath('//span[text()="Alert Name"]//following::td[8]//span')).getText().then(async function (text) {
        await expect(text).to.include(TestSource);
      });
  }
  async getTicketNumber(TicketNumber) {
    await element(by.xpath('//span[text()="Alert Name"]//following::td[11]//span')).getText().then(async function (text) {
      await expect(text).to.include(TicketNumber);
    });
  }
  async getLastAlertTime(LastAlertTime) {
  await element(by.xpath('//span[text()="Alert Name"]//following::td[5]//span//div')).getText().then(async function (text) {
        await expect(text).to.include(LastAlertTime);
      });
  }

  async getAlertName(AlertName) {
    await element(by.xpath('//span[text()="Alert Name"]//following::td[6]//span')).getText().then(async function (text) {
          await expect(text).to.include(AlertName);
        });
  }
  
  async getAlertMetric(AlertMetric) {
    await element(by.xpath('//span[text()="Alert Name"]//following::td[10]//span')).getText().then(async function (text) {
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

//Ajay 
  
async MarkAsDefault() {
  await this.btnMarkAsDefault.click();
}
async SelectFilter(SelectFilter:string) {
  await element(by.xpath('//span[text()="'+SelectFilter+'"]')).click();
}
async SelectWarning() {
  await this.btnSelectWarning.click();
}
async FilterBySeverity() {
  await browser.sleep(2000);
  await this.drpFilterBySeverity.click();
}
async RemoveOkSeverity() {
  await this.btnRemoveOkSeverity.click();
}
async RemoveWarningSeverity() {
  await this.btnRemoveWarningSeverity.click();
  await browser.sleep(3000);
}
async RemoveSolarwinds() {
  await this.btnRemoveSolarwinds.click();
}
async Warning() {
  await this.txtWarning.click();
}
async Ok() {
  await this.txtOk.click();
}
async Information() {
  await this.txtInformation.click();
}
async AlertSeverityDpn() {
  await browser.sleep(3000);
  await this.btnAlertSeverityDpn.click();
  await browser.sleep(3000);
}
async SavedFilter(SavedFilter:string) {
  await browser.sleep(2000);
  await element(by.xpath('//span[text()="'+SavedFilter+'"]')).click();
  await browser.sleep(3000);
  }
  async Infrastructure() {
    await browser.sleep(5000)
    await this.btnInfrastructure.click();
  
  }
}

