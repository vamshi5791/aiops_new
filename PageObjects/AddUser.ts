import { ElementFinder, element, by } from "protractor";

export class AddUser {
    
    btnAddUser: ElementFinder
    LstSelectUser: ElementFinder
    rdoSelectRole: ElementFinder
    btnAddUserDetails: ElementFinder
    btnInstall: ElementFinder

  constructor() {
    
        this.btnAddUser = element(by.xpath('//span[text()="Add User"]'));
        this.LstSelectUser = element(by.className("smo-dropdown-trigger-icon smo-clickable smo smo-expand-more-alt chevron-icon"));
        this.rdoSelectRole= element(by.xpath('//label[text()="itops_admin"]'));
        this.btnAddUserDetails = element(by.xpath('//label[text()="itops_admin"]//following::span[text()="Add User"]'));
        this.btnInstall= element(by.xpath('//span[text()="INSTALL"]'));   
    }
}

