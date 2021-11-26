import { ElementFinder, element, by, promise, browser, protractor } from "protractor";
var EC = browser.ExpectedConditions;
var fs = require('fs');
import chai from "chai";
var expect = chai.expect;
export class ProjectListingPage {
  txtsearch = element(by.xpath('//input[@placeholder="Search"]'));
  btnClickOnCreateProject = element(by.xpath('//span[text()="Create New Project"]'));
  btnProfile = element(by.className("iframe-link a-cursor profile-arrow"));
  btnEditConfiguration = element(by.xpath('//smo-button[@label="Edit Configuration"]'));
  btnDeleteProject = element(by.xpath('//span[text()="Delete Project"]'));
  btnClickOnYes = element(by.xpath('//span[@class="smo smo-close-black-alt"]//following::span[text()="Yes"]'));
  btnDeactivate = element(by.xpath('//span[text()="Deactivate Project"]'));
  editProject = element(by.xpath('//span[text()="Edit Project"]'));
  btnLogOut = element(by.xpath('//span[text()="Logout"]'));
  btnThreeDots = element(by.xpath('//span[@class="smo smo-more-vert-24px ellipsis-icon font-14 cursor-pt secondary-color default-icon context-menu-icon"]'));
  btnClosePopUp = element(by.xpath('//div[@class="smo-toast-message smo-shadow ng-trigger ng-trigger-messageState smo-toast-shadow-sm smo-toast-message-success-sm smo-toast-message-success"]//following::a'));
  btnHomePage = element(by.className('smartops-logo-img'));
  btnDisable = element(by.xpath('//a[@class="smo-menuitem-link smo-state-disabled smo-menuitem-link-sm ng-star-inserted"]'))
  dropdownIncidentStatus = element(by.xpath('//label[text()=" Incident Status"]//following::span[contains(@class,"smo-multiselect-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon")]'))



  async IncidentDropDownOption(option: string) {
    await element(by.xpath('//span[text()="' + option + '"]')).isDisplayed().then(async function(isVisible){
      await expect(isVisible).to.be.true;
    })

  }

  async selectedIncidentDropDownOption(option: string) {
    await element(by.xpath('//span[text()="' + option + '"]')).click();

  }
  async Project_search(ProjectName: string) {
    await this.txtsearch.clear();
    await this.txtsearch.sendKeys(ProjectName);
    await browser.sleep(2000)
    await browser.wait(EC.visibilityOf(element(by.xpath('//h1[text()="Project Listing"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="All Projects"]'))));
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    await browser.sleep(2000)
    await browser.wait(EC.visibilityOf(element(by.xpath('//h1[text()="Project Listing"]'))));
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="All Projects"]'))));

  }
  async clickOnHomePageButton() {
    await this.btnHomePage.click();
  }
  async ClickOnProjectCreateButton() {
    await this.btnClickOnCreateProject.click();
  }
  async ClickOnProfile() {
    await this.btnProfile.click();
  }
  async EditConfiguration() {
    await this.btnEditConfiguration.click();
  }
  async DeleteProject() {
    await this.btnDeleteProject.click();
  }
  async clickOnClosePopUpButton() {
    await this.btnClosePopUp.click();
  }
  async ClickOnYes() {
    await this.btnClickOnYes.click();
  }
  async clickOnThreeDots() {
    await this.btnThreeDots.click();
  }
  async Deactivate() {
    await this.btnDeactivate.click();
  }
  async selectProject(ProjectName) {
    await element(by.xpath('//h3[text()=" ' + ProjectName + ' "]')).click();
  }

  async ThreeDots(ProjectName) {
    await element(by.xpath('//span[@class="smo-badge smo-badge-round smo-badge-sm smo-badge-ready-sm"]//following::span[@class="cursor-pt favourite-icon ng-star-inserted"]//following::span')).click();
  }

  async EditProject() {
    await this.editProject.click();
  }
  async LogOut() {
    await this.btnLogOut.click();
  }
}
