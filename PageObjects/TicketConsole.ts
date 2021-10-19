import { ElementFinder, element, by, promise, browser, protractor } from "protractor";
var EC = browser.ExpectedConditions;
var fs = require('fs');
import { support } from "../support/support";
import chai from "chai";
var EC = browser.ExpectedConditions;
var drp = new support();
var expect = chai.expect;


export class TicketConsole {

    btnTickets = element(by.xpath('//a[text()="Tickets"]'))
    btnSearch = element(by.xpath('//input[@placeholder="Search"]'))
    btnQuickFilter = element(by.xpath("//span[@smotooltip='Quick Filter']"))
    btnRefresh = element(by.className('smo-btn-icon-col d-flex align-items-center smo smo-refresh-alt btn-icon smo-clickable ng-star-inserted'));
    btnAutoRefresh = element(by.className("smo-btn-icon-col d-flex align-items-center smo smo-refresh-alt btn-icon smo-clickable ng-star-inserted"))
    btnRemoveAll = element(by.xpath('//a[text()="Remove All"]'));
    tblTickets = element(by.className("smo-table-scrollable-body ng-star-inserted"))
    txtNone = element(by.xpath("//span[text()='None']"))
    txtTicketTitle = element(by.xpath('//span[text()="Tickets"]'))
    txtMe = element(by.xpath("//span[text()='Me']"))
    LatestUpdatedDateandTime= element(by.className("smo smo-expand-less-alt"))
    //QuickFilterElements
    txtQuickFilter= element(by.xpath("//span[text()='Quick Filter']"))
    drpFilterbyStatustype= element(by.xpath("//span[text()=' Filter by Status Type ']"))
    drpFilterbyPriority=element(by.className("ng-tns-c47-14 smo-multiselect-trigger smo-state-default smo-corner-right"))
    drpFilterByAssignedTo=element(by.xpath("//label[text()='Assigned To']"))
    drpAssignedGrp=element(by.className("ng-tns-c47-16 smo-multiselect-trigger smo-state-default smo-corner-right"))
    btncloseQuickFilter=element(by.className("smo-overlaypanel-close-icon smo smo-close-black-alt"))

    //FilterByStatusType dropdown elements
    chkContainer_status=element(by.className("ng-tns-c47-13 smo-multiselect smo-widget smo-state-default smo-corner-all d-flex align-items-center"))
    chkSelectAll_Status= element(by.className("d-flex margin-top-select-ms"))
    chkOpen_Status=element(by.xpath("//li[@aria-label='Open']"))
    chkAssigned_Status=element(by.xpath("//li[@aria-label='Assigned']"))
    chkOnHold_Status=element(by.xpath("//li[@aria-label='On Hold']"))
    chkResolved_Status=element(by.xpath("//li[@aria-label='Resolved']"))

    //FilterByPriority dropdown elements
    chkSelectAll_Priority= element(by.xpath("//span[text()='Select All']"))
    chkCritical=element(by.xpath("//li[@aria-label='1 - Critical']"))
    chkHigh=element(by.xpath("//li[@aria-label='2 - High']"))
    chkModerate=element(by.xpath("//li[@aria-label='3 - Moderate']"))
    chkLow=element(by.xpath("//li[@aria-label='4 - Low']"))
    
    //AssignedTo dropdown elements
    chkNoneFilterByAssignedTo=element(by.xpath("//li[@aria-label='None']"))
    chkMeFilterByAssignedTo=element(by.xpath("//li[@aria-label='Me']"))
    chkOthersFilterByAssignedTo=element(by.xpath("//li[@aria-label='Others']"))
    // txtNoneFilterByAssignedTo = element(by.xpath('//smo-dropdownitem//span[text()="None"]'))
    // txtMeFilterByAssignedTo = element(by.xpath('//smo-dropdownitem//span[text()="Me"]'))
    // txtOthersFilterByAssignedTo = element(by.xpath('//smo-dropdownitem//span[text()="Others"]'))

     //AssignedGroup dropdown elements
     chkgrp1=element(by.xpath("//li[@aria-label='ITOpsTesting']"))
     chkgrp2=element(by.xpath("//li[@aria-label='NinetyOne NOC']"))
     drpFilterByAssignedGroup = element(by.xpath('//smo-multiselect-dropdown[@defaultlabel="Assigned Group"]'))
     txtNoneFilterByAssignedGroup = element(by.xpath('//smo-multiselect-item//span[text()="None"]'))
     txtMyGroupsFilterByAssignedGroup = element(by.xpath('//smo-multiselect-item//span[text()="My Groups"]'))
     txtMyGroupNameFilterByAssignedGroup = element(by.xpath('//smo-multiselect-item[3]/li/span/text()'))


     
  
    async Ticket_Search(ticketId: string) {
        await browser.wait(EC.elementToBeClickable(this.btnSearch), 60000);
        await this.btnSearch.sendKeys(ticketId);
        await browser.sleep(2000);
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
      }
    async clickOnTicketPage() {
        await this.btnTickets.click();
    }
    async clickOnQuickFilter(){
        await this.btnQuickFilter.click();
      }
    async clickOnFilterAssignedTo(){
        await this.drpFilterByAssignedTo.click();
    }
    async ClickOnLatestUpdatedDateandTime(){
      await this.LatestUpdatedDateandTime.click()
    }
    async clickOnFilterAssignedGroup(){

        await this.drpFilterByAssignedGroup.click();
        
        }
    async logOutUser() {
        await browser.sleep(3000)
        await element(by.className("iframe-link a-cursor profile-arrow")).click();
        await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Logout"]'))), 10000);
        await element(by.xpath('//span[text()="Logout"]')).click();
        await browser.wait(EC.visibilityOf(element(by.xpath('//input[@name="login"]'))), 10000);
}
async selectRemoveAllConditions() {
    await this.btnRemoveAll.click();
  }
}






