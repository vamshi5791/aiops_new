import { ElementFinder, element, by, promise, browser, protractor } from "protractor";
import { support } from "../support/support";
var EC = browser.ExpectedConditions;
var fs = require('fs');
var drp = new support();
export class AlertsPage {

  btnselectAlerts = element(by.xpath('//a[text()="Alerts"]'));
  btnsearch = element(by.xpath('//input[@placeholder="Search"]'))
  btnAdvanceFilter = element(by.className('filter smo smo-filter'));
  drpSource = element(by.xpath('//label[text()="Source"]'));
  drpAlertState = element(by.xpath('//label[text()="Alert State"]'));
  txtResource = element(by.name('resourceName'));
  btnSaveFilter = element(by.className('d-flex justify-content-end save-link ng-star-inserted'));
  txtFilterName = element(by.xpath('//input[@name="name"]'));
  txtFilterDescription = element(by.xpath('//textarea[@name="description"]'));
  btnApply = element(by.xpath('//span[text()="Save Filter "]'));
  btnSave_Apply = element(by.xpath('//span[text()="Save and Apply"]'));

  async selectAlerts() {
    await this.btnselectAlerts.click();
  }
  async Alert_Search(alertName: string) {
    await this.btnsearch.sendKeys(alertName);
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
  async ResourceName(ResouceName: string) {
    await this.txtResource.sendKeys(ResouceName);
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
  async Apply() {
    await this.btnApply.click();
  }
  async Save_Apply() {
    await this.btnSave_Apply.click();
  }
}