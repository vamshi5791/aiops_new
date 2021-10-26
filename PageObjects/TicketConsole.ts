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
    btnremovegrp1 = element(by.xpath("//span[text()='ITOpsTesting']//following-sibling::span"))
    btnremoveAssigned_status= element(by.xpath("//span[text()='Assigned']//following-sibling::span"))
    btnremoveHigh_priority= element(by.xpath("//span[text()='2 - High']//following-sibling::span"))

    //QuickFilterElements
    txtQuickFilter= element(by.xpath("//span[text()='Quick Filter']"))
    drpFilterbyStatustype= element(by.xpath("//span[text()=' Filter by Status Type ']"))
    drpFilterbyStatustypeclose= element(by.className("ng-tns-c45-13 ng-star-inserted"))
    drpFilterbyPriority=element(by.xpath("//span[text()=' Filter by Priority ']"))
    drpFilterbyPriorityclose= element(by.className("ng-tns-c45-14 ng-star-inserted"))
    drpFilterByAssignedTo=element(by.xpath("//label[text()='Assigned To']"))
    drpAssignedgrp=element(by.xpath("//span[text()=' Assigned Group ']"))
    drpAssignedGrpclose=element(by.className("ng-tns-c56-31 smo-multiselect-trigger smo-state-default smo-corner-right"))
    btncloseQuickFilter=element(by.className("smo-overlaypanel-close-icon smo smo-close-black-alt"))

    //FilterByStatusType dropdown elements
    chkContainer_dwnarrow_status=element(by.className("ng-tns-c45-13 smo-multiselect-trigger smo-state-default smo-corner-right"))
    chkContainer_dwnarrow_priority=element(by.className("ng-tns-c45-14 smo-multiselect-trigger smo-state-default smo-corner-right"))
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
    txtNoneFilterByAssignedTo=element(by.xpath("//li[@aria-label='None']"))
    txtMeFilterByAssignedTo=element(by.xpath("//li[@aria-label='Me']"))
    txtOthersFilterByAssignedTo=element(by.xpath("//li[@aria-label='Others']"))
    
     //AssignedGroup dropdown elements
     chkgrp1=element(by.xpath("//li[@aria-label='ITOpsTesting']"))

     chkgrp2=element(by.xpath("//li[@aria-label='NinetyOne NOC']"))
     drpFilterByAssignedGroup = element(by.xpath('//smo-multiselect-dropdown[@defaultlabel="Assigned Group"]'))
     txtNoneFilterByAssignedGroup = element(by.xpath('//smo-multiselect-item//span[text()="None"]'))
     txtMyGroupsFilterByAssignedGroup = element(by.xpath('//smo-multiselect-item//span[text()="My Groups"]'))
     txtMyGroupNameFilterByAssignedGroup = element(by.xpath('//smo-multiselect-item[3]/li/span/text()'))

    //Additional elements for Ticket console view - with user having a group
    chkMyGroupFilterByAssignedGroupSelected = element(by.xpath('//smo-multiselect-item//span[text()="My Groups"]//preceding::span[@class="smo-chkbox-icon smo-clickable smo smo-check ng-star-inserted"]'))
    lblAssignedGroup = element(by.xpath('//div[@class="item-key-text ng-star-inserted" and text()="Assigned Group : "]'))
    btnFilterChip = element(by.className('filter-result-span-sm smo-small-chips'))
    chkMyGroupFilterByAssignedGroupsVal1 = element(by.xpath('//smo-multiselect-item[4]/li'))
    txtFirstTicketNumber = element(by.xpath('//table[@class="undefined"]/tbody/tr[1]/td[2]')) 
  
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






