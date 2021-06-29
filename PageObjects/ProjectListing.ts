import { ElementFinder, element, by, promise, browser } from "protractor";
var EC = browser.ExpectedConditions;
var fs = require('fs');

export class ProjectListingPage {

   btnClickOnCreateProject = element(by.xpath('//span[text()="Create New Project"]'));
   btnProfile = element(by.className("smo smo-expand-more-alt text-black-50 text-right pt-2"));
   btnLogOut = element(by.xpath('//span[text()="Logout"]'));
   
     async ClickOnProjectCreateButton() { 
       await this.btnClickOnCreateProject.click();
     }
     async ClickOnProfile() { 
      await this.btnProfile.click();
    }
     async LogOut() {
       await this.btnLogOut.click();  
     }
}
       