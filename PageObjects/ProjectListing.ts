import { ElementFinder, element, by, promise, browser, protractor } from "protractor";
var EC = browser.ExpectedConditions;
var fs = require('fs');

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
  btnThreeDots = element(by.xpath('//span[@class="status-warning nowrap-space ng-star-inserted"]//following::span'));
  btnClosePopUp = element(by.xpath('//div[@class="smo-toast-message smo-shadow ng-trigger ng-trigger-messageState smo-toast-shadow-sm smo-toast-message-success-sm smo-toast-message-success"]//following::a'));
  btnHomePage = element(by.className('smartops-logo-img'));

  async Project_search(ProjectName: string) {
    await this.txtsearch.sendKeys(ProjectName);
    await browser.sleep(2000);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    await browser.sleep(2000);

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
    await browser.sleep(2000)
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
