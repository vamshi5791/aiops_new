import { ElementFinder, element, by } from "protractor";

export class ProjestListing {
  clickOnCreateProject: ElementFinder;
  btnLogOut: ElementFinder;

  constructor() {
      
    this.clickOnCreateProject = element(by.xpath('//span[text()="Create New Project"]'));
    this.btnLogOut = element(by.xpath('//span[text()="Logout"]'));

    }
}