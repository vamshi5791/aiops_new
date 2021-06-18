import { ElementFinder, element, by } from "protractor";

export class Projestcreation {
  clickOnCreateProject: ElementFinder;
  projectname: ElementFinder;
  description: ElementFinder;
  btnCreate: ElementFinder

  constructor() {
      
    this.clickOnCreateProject = element(by.xpath('//span[text()="Create New Project"]'));
    this.projectname = element(by.xpath('//input[@name="pjctName"]'));
    this.description  = element(by.css('#project_details > app-project-details > div.row.pb-4 > div > fieldset > textarea'));
    this.btnCreate = element(by.xpath('//span[text()="Create"]'));
    }
}