import { ElementFinder, element, by, promise, browser } from "protractor";
var EC = browser.ExpectedConditions;
var fs = require('fs');

export class ProjectListingPage {

  btnClickOnCreateProject = element(by.xpath('//span[text()="Create New Project"]'));
  btnProfile = element(by.className("smo smo-expand-more-alt text-black-50 text-right pt-2"));
   btnEditConfiguration = element(by.xpath('//span[text()="Edit Configuration"]'));
   btnDeleteProject = element(by.xpath('//span[text()="Delete Project"]'));
   btnDeactivateProject = element(by.xpath('//span[text()="Deactivate Project"]'));
   btnClickOnYes = element(by.xpath('//span[@class="smo smo-close-black-alt"]//following::span[text()="Yes"]'));
   btnDeactivate = element(by.xpath('//span[text()="Deactivate Project"]'));
   btnselectProject=element(by.xpath('//h3[text()=" ProjectTeam "]'))
  mnuDotMenu = element(by.xpath('//h3[text()=" ProTestTestTSIV "]//following::span[@class="smo smo-more-vert-24px ellipsis-icon font-14 cursor-pt secondary-color default-icon context-menu-icon"]'));
  editProject = element(by.xpath('//span[text()="Edit Project"]'));
  btnLogOut = element(by.xpath('//span[text()="Logout"]'));

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
  async DeactivateProject() { 
    await this.btnDeactivateProject.click();
  }
  async ClickOnYes() { 
    await this.btnClickOnYes.click();
  }
  async Deactivate() { 
    await this.btnDeactivate.click();
  }
  async selectProject(ProjectName) { 
    await element(by.xpath('//h3[text()=" '+ProjectName+' "]')).click();
  }
  async DotMenu() {
    await this.mnuDotMenu.click();
  }
  async ThreeDots(ProjectName) { 
    await element(by.xpath('//h3[text()=" '+ProjectName+' "]//following::span[@class="smo smo-more-vert-24px ellipsis-icon font-14 cursor-pt secondary-color default-icon context-menu-icon"]')).click();
  }

  async EditProject() {
    await this.editProject.click();
  }
  async LogOut() {
    await this.btnLogOut.click();
  }
}
